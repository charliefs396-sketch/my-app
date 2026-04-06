import CodeBlock from '../../components/CodeBlock';

export default function D8CountAndFind() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔢 Count Occurrences & Find All Positions</h1>
      <p className="text-gray-500 mb-8">Two powerful variations of Linear Search that the exam loves to test.</p>

      {/* Why these variations matter */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Why Do We Need These?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🔍</div>
            <p className="font-bold text-sky-800 text-sm">Basic Search</p>
            <p className="text-sky-600 text-xs mt-1">Find the <strong>first</strong> occurrence. Returns position or -1. Stops immediately when found.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="text-2xl mb-2">🔢</div>
            <p className="font-bold text-purple-800 text-sm">Count Occurrences</p>
            <p className="text-purple-600 text-xs mt-1">Count <strong>how many times</strong> the target appears. Must check the WHOLE array — never stops early!</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="text-2xl mb-2">📍</div>
            <p className="font-bold text-amber-800 text-sm">Find All Positions</p>
            <p className="text-amber-600 text-xs mt-1">Output <strong>every position</strong> where the target appears. Also checks the whole array.</p>
          </div>
        </div>
      </div>

      {/* Count occurrences */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">🔢 Count All Occurrences</h2>
        <p className="text-gray-500 text-sm mb-4">
          Different from basic search — we <strong>never use RETURN early</strong> because we need to check every single element.
          We use a counter instead and return it at the end.
        </p>
        <CodeBlock language="pseudocode" code={`FUNCTION CountOccurrences(DataArray : ARRAY[1:10] OF INTEGER,
                          Size : INTEGER,
                          Target : INTEGER) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   
   Count ← 0           // Start counter at 0
   
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            Count ← Count + 1    // Increment — don't return!
      ENDIF
   NEXT i
   
   RETURN Count         // Return total count at the end
ENDFUNCTION

// Usage
DECLARE Scores : ARRAY[1:10] OF INTEGER
DECLARE HowMany : INTEGER

Scores[1] ← 85   Scores[2] ← 72   Scores[3] ← 85
Scores[4] ← 91   Scores[5] ← 85   Scores[6] ← 63
Scores[7] ← 77   Scores[8] ← 85   Scores[9] ← 90
Scores[10] ← 85

HowMany ← CountOccurrences(Scores, 10, 85)
OUTPUT "85 appears ", HowMany, " times"
// Output: 85 appears 5 times`} />

        {/* Trace table for counting */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-3">📊 Trace Table — Counting 85 in [85, 72, 85, 91, 85]</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">i</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">DataArray[i]</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">= 85?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Count</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['—', '—', '—', '0 (initialised)'],
                  ['1', '85', 'TRUE ✅', '1'],
                  ['2', '72', 'FALSE ❌', '1'],
                  ['3', '85', 'TRUE ✅', '2'],
                  ['4', '91', 'FALSE ❌', '2'],
                  ['5', '85', 'TRUE ✅', '3'],
                  ['—', '—', '—', 'RETURN 3'],
                ].map((row, i) => (
                  <tr key={i} className={
                    row[2]?.includes('TRUE') ? 'bg-green-50' :
                    i === 6 ? 'bg-blue-50 font-bold text-blue-700' :
                    i === 0 ? 'bg-gray-50 italic text-gray-400' : ''
                  }>
                    {row.map((cell, j) => (
                      <td key={j} className="border border-gray-200 px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-green-700 font-semibold mt-2">Result: CountOccurrences returns 3 ✅</p>
        </div>

        {/* Key insight */}
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="font-bold text-red-800 mb-1">🚫 NEVER do this in Count:</p>
          <code className="text-red-700 font-mono text-sm block mb-2">{'IF DataArray[i] = Target THEN RETURN i'}</code>
          <p className="text-red-600 text-sm">If you use RETURN inside the loop, the function exits the moment it finds the first match — you'd miss all the others! For counting, you MUST go through the entire array.</p>
        </div>
      </div>

      {/* Find and output all positions */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">📍 Find and Output ALL Matching Positions</h2>
        <p className="text-gray-500 text-sm mb-4">
          This version uses a PROCEDURE (not a function) because it outputs directly — it doesn't return a single value.
        </p>
        <CodeBlock language="pseudocode" code={`PROCEDURE FindAllPositions(DataArray : ARRAY[1:10] OF STRING,
                           Size : INTEGER,
                           Target : STRING)
   DECLARE i : INTEGER
   DECLARE Found : BOOLEAN
   
   Found ← FALSE
   
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            OUTPUT "Found at position ", i
            Found ← TRUE
      ENDIF
   NEXT i
   
   IF Found = FALSE
      THEN
         OUTPUT "No match found for: ", Target
   ENDIF
ENDPROCEDURE

// Usage
DECLARE Names : ARRAY[1:10] OF STRING

Names[1] ← "Ali"    Names[2] ← "Sara"   Names[3] ← "Ali"
Names[4] ← "Tom"    Names[5] ← "Ali"    Names[6] ← "Zara"
Names[7] ← "Ben"    Names[8] ← "Sara"   Names[9] ← "Ali"
Names[10] ← "Mike"

// Call the procedure
FindAllPositions(Names, 10, "Ali")
// Output:
// Found at position 1
// Found at position 3
// Found at position 5
// Found at position 9`} />

        <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-4">
          <p className="font-bold text-purple-800 mb-2">💡 Why use a PROCEDURE here?</p>
          <p className="text-purple-700 text-sm">
            Because we're outputting <em>multiple</em> values (one per match), we can't return them all with a single RETURN. 
            A PROCEDURE just does work (outputs) without returning anything — perfect here. 
            The Boolean flag <code className="bg-purple-100 px-1 rounded">Found</code> tracks whether ANY match was found, so we can show a "not found" message if needed.
          </p>
        </div>
      </div>

      {/* Combined example */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">🌟 Combined Example — Search + Count + All Positions</h2>
        <p className="text-gray-500 text-sm mb-4">A realistic exam scenario using all three operations together.</p>
        <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:8] OF INTEGER
DECLARE Target : INTEGER
DECLARE FirstPos : INTEGER
DECLARE Total : INTEGER

// Fill the array
Marks[1] ← 72  Marks[2] ← 85  Marks[3] ← 63
Marks[4] ← 85  Marks[5] ← 91  Marks[6] ← 85
Marks[7] ← 77  Marks[8] ← 85

OUTPUT "Enter mark to search for: "
INPUT Target

// 1. Find first occurrence
FirstPos ← LinearSearch(Marks, 8, Target)
IF FirstPos <> -1
   THEN
      OUTPUT "First found at position ", FirstPos
   ELSE
      OUTPUT "Not in array"
ENDIF

// 2. Count how many times
Total ← CountOccurrences(Marks, 8, Target)
OUTPUT Target, " appears ", Total, " times"

// 3. Show all positions
OUTPUT "All positions:"
FindAllPositions(Marks, 8, Target)`} />
      </div>

      {/* Summary comparison */}
      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 mb-4">📋 Quick Comparison — Which Version to Use?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 px-3 text-gray-500">Task</th>
                <th className="text-left py-2 px-3 text-gray-500">Type</th>
                <th className="text-left py-2 px-3 text-gray-500">Stops Early?</th>
                <th className="text-left py-2 px-3 text-gray-500">Returns</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Find FIRST match', 'FUNCTION', '✅ Yes — RETURN i', 'Position (INTEGER) or -1'],
                ['Count ALL matches', 'FUNCTION', '❌ No — must check all', 'Count (INTEGER)'],
                ['Output ALL positions', 'PROCEDURE', '❌ No — must check all', 'Nothing — just outputs'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white/50' : ''}>
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-3 font-medium text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
