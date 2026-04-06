import CodeBlock from '../../components/CodeBlock';

const parallelDeclareCode = `// Parallel arrays: two arrays linked by the same index
DECLARE Names  : ARRAY[1:10] OF STRING
DECLARE Marks  : ARRAY[1:10] OF INTEGER
DECLARE i      : INTEGER

// Names[1] belongs to Marks[1]   (same student, index 1)
// Names[2] belongs to Marks[2]   (same student, index 2)
// etc.

// Input both arrays together
FOR i ← 1 TO 10
   OUTPUT "Enter student name: "
   INPUT Names[i]
   OUTPUT "Enter mark for ", Names[i], ": "
   INPUT Marks[i]
NEXT i`;

const findMaxCode = `// Find the HIGHEST mark and the student who got it
DECLARE Names    : ARRAY[1:10] OF STRING
DECLARE Marks    : ARRAY[1:10] OF INTEGER
DECLARE Max      : INTEGER
DECLARE MaxName  : STRING
DECLARE i        : INTEGER

// Assume array is already filled with data

// Step 1: Assume first element is the maximum
Max     ← Marks[1]
MaxName ← Names[1]

// Step 2: Compare with the rest (start from 2, not 1!)
FOR i ← 2 TO 10
   IF Marks[i] > Max
      THEN
         Max     ← Marks[i]
         MaxName ← Names[i]
   ENDIF
NEXT i

OUTPUT "Highest mark: ", Max
OUTPUT "Achieved by: ", MaxName`;

const findMinCode = `// Find the LOWEST mark (same pattern, just change > to <)
DECLARE Marks    : ARRAY[1:10] OF INTEGER
DECLARE Names    : ARRAY[1:10] OF STRING
DECLARE Min      : INTEGER
DECLARE MinName  : STRING
DECLARE i        : INTEGER

Min     ← Marks[1]
MinName ← Names[1]

FOR i ← 2 TO 10
   IF Marks[i] < Min     // Only change: < instead of >
      THEN
         Min     ← Marks[i]
         MinName ← Names[i]
   ENDIF
NEXT i

OUTPUT "Lowest mark: ", Min
OUTPUT "Achieved by: ", MinName`;

const bothMaxMinCode = `// Find BOTH max AND min in ONE loop (efficient!)
DECLARE Marks   : ARRAY[1:10] OF INTEGER
DECLARE Names   : ARRAY[1:10] OF STRING
DECLARE Max     : INTEGER
DECLARE Min     : INTEGER
DECLARE MaxName : STRING
DECLARE MinName : STRING
DECLARE i       : INTEGER

// Initialise both from first element
Max     ← Marks[1]
Min     ← Marks[1]
MaxName ← Names[1]
MinName ← Names[1]

// One loop does both!
FOR i ← 2 TO 10
   IF Marks[i] > Max
      THEN
         Max     ← Marks[i]
         MaxName ← Names[i]
   ENDIF
   IF Marks[i] < Min
      THEN
         Min     ← Marks[i]
         MinName ← Names[i]
   ENDIF
NEXT i

OUTPUT "Highest: ", MaxName, " with ", Max
OUTPUT "Lowest:  ", MinName, " with ", Min`;

const traceCode = `// TRACE TABLE for finding Max
// Array: Marks = [72, 85, 61, 90, 78]  (5 elements)

// Before loop:
// Max = 72, MaxName = "Ali"

// i=2: Marks[2]=85 > 72? YES  → Max=85, MaxName="Sara"
// i=3: Marks[3]=61 > 85? NO   → no change
// i=4: Marks[4]=90 > 85? YES  → Max=90, MaxName="Tom"
// i=5: Marks[5]=78 > 90? NO   → no change

// Final: Max=90, MaxName="Tom"  ✓`;

export default function D6ParallelArrays() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔗 Parallel Arrays & Finding Max/Min
      </h1>
      <p className="text-gray-500 text-lg mb-8">The most tested array patterns in Cambridge 9618 exams</p>

      {/* Parallel arrays */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1️⃣ Parallel Arrays</h2>
        <p className="text-gray-600 mb-4">When you have <strong>related data of different types</strong>, use two arrays with the same index:</p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-blue-800 mb-3">📊 Visualising Parallel Arrays:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm">
              <thead>
                <tr>
                  <th className="p-2 text-left text-gray-500">Index</th>
                  {[1,2,3,4,5].map(i => (
                    <th key={i} className="p-2">
                      <span className="bg-blue-100 text-blue-700 font-mono font-bold px-2 py-1 rounded">[{i}]</span>
                    </th>
                  ))}
                </tr>
                <tr className="bg-white">
                  <td className="p-2 text-left font-bold text-indigo-700">Names</td>
                  {['Ali','Sara','Tom','Zoe','Dan'].map((n,i) => (
                    <td key={i} className="p-2 font-mono bg-indigo-50 border border-indigo-200 rounded">"{n}"</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 text-left font-bold text-pink-700">Marks</td>
                  {[72,85,61,90,78].map((m,i) => (
                    <td key={i} className="p-2 font-mono bg-pink-50 border border-pink-200 rounded">{m}</td>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <p className="text-blue-700 text-sm mt-3">👆 Names[3]="Tom" and Marks[3]=61 → these belong to the SAME student because they share index 3</p>
        </div>

        <CodeBlock code={parallelDeclareCode} language="pseudocode" />
      </div>

      {/* Finding Maximum */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2️⃣ Finding the Maximum</h2>
        <p className="text-gray-600 mb-2">The standard "find max" pattern — memorise this, it appears in nearly every exam!</p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-indigo-800 mb-2">🧠 The Logic (think of it like a running champion):</p>
          <ol className="text-indigo-700 text-sm space-y-1 list-decimal pl-4">
            <li>Start by saying "the first element is the best so far"</li>
            <li>Go through the rest of the array one by one</li>
            <li>Each time you find something bigger → update your "best so far"</li>
            <li>At the end, "best so far" IS the maximum</li>
          </ol>
        </div>

        <CodeBlock code={findMaxCode} language="pseudocode" />

        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Critical Exam Points:</p>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>✅ Initialise Max with <strong>Marks[1]</strong> (NOT 0, NOT -999)</li>
            <li>✅ Start the loop at <strong>i ← 2</strong> (not 1, since we already used element 1)</li>
            <li>✅ Update <strong>both</strong> Max AND MaxName together in the THEN block</li>
            <li>✅ Use <strong>ENDIF</strong> after the IF block</li>
          </ul>
        </div>
      </div>

      {/* Trace table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3️⃣ Trace Table — Finding Max</h2>
        <p className="text-gray-600 mb-4">Let's trace through with Marks = [72, 85, 61, 90, 78] and Names = ["Ali","Sara","Tom","Zoe","Dan"]:</p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left font-bold text-gray-700">i</th>
                <th className="p-3 text-left font-bold text-gray-700">Marks[i]</th>
                <th className="p-3 text-left font-bold text-gray-700">Marks[i] {'>'} Max?</th>
                <th className="p-3 text-left font-bold text-indigo-700">Max</th>
                <th className="p-3 text-left font-bold text-purple-700">MaxName</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-blue-50">
                <td className="p-3 font-mono">—</td>
                <td className="p-3 font-mono text-gray-500">initialise</td>
                <td className="p-3 text-gray-500">—</td>
                <td className="p-3 font-bold text-indigo-700 font-mono">72</td>
                <td className="p-3 font-bold text-purple-700 font-mono">"Ali"</td>
              </tr>
              {[
                {i:2, val:85, cmp:'85 > 72? YES ✅', max:85, name:'"Sara"', highlight:true},
                {i:3, val:61, cmp:'61 > 85? NO ❌', max:85, name:'"Sara"', highlight:false},
                {i:4, val:90, cmp:'90 > 85? YES ✅', max:90, name:'"Zoe"', highlight:true},
                {i:5, val:78, cmp:'78 > 90? NO ❌', max:90, name:'"Zoe"', highlight:false},
              ].map((row) => (
                <tr key={row.i} className={row.highlight ? 'bg-green-50' : 'bg-white'}>
                  <td className="p-3 font-mono font-bold">{row.i}</td>
                  <td className="p-3 font-mono">{row.val}</td>
                  <td className={`p-3 font-semibold text-sm ${row.highlight ? 'text-green-700' : 'text-red-600'}`}>{row.cmp}</td>
                  <td className="p-3 font-bold text-indigo-700 font-mono">{row.max}</td>
                  <td className="p-3 font-bold text-purple-700 font-mono">{row.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-green-700 font-semibold">✅ Final Answer: Max = 90, MaxName = "Zoe"</p>

        <div className="mt-4">
          <CodeBlock code={traceCode} language="pseudocode" />
        </div>
      </div>

      {/* Finding minimum */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4️⃣ Finding the Minimum</h2>
        <p className="text-gray-600 mb-2">Exactly the same pattern as Max — just change <code className="bg-gray-100 px-2 rounded font-mono text-sm">{'>'}</code> to <code className="bg-gray-100 px-2 rounded font-mono text-sm">{'<'}</code>:</p>
        <CodeBlock code={findMinCode} language="pseudocode" />
      </div>

      {/* Both max and min */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">5️⃣ Finding Both Max AND Min (One Loop!)</h2>
        <p className="text-gray-600 mb-2">Efficient pattern — do both in a single pass through the array:</p>
        <CodeBlock code={bothMaxMinCode} language="pseudocode" />

        <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="font-bold text-emerald-800 mb-2">💡 Why start the loop at i = 2?</p>
          <p className="text-emerald-700 text-sm">Because we already used <code className="bg-emerald-100 px-1 rounded">Marks[1]</code> to initialise both Max and Min. Starting at i=2 means we compare all <em>remaining</em> elements. If we started at i=1, we'd wastefully compare the first element against itself.</p>
        </div>
      </div>

      {/* Quick comparison */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <p className="font-bold text-indigo-800 text-lg mb-3">🔑 Pattern Comparison — Max vs Min</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-indigo-200">
            <p className="font-bold text-green-700 mb-2">Finding MAXIMUM:</p>
            <p className="font-mono text-sm text-gray-800">Max ← Marks[1]</p>
            <p className="font-mono text-sm text-gray-800">FOR i ← 2 TO N</p>
            <p className="font-mono text-sm text-gray-800 pl-3">IF Marks[i] <span className="text-red-600 font-bold">{'>'}</span> Max</p>
            <p className="font-mono text-sm text-gray-800 pl-6">THEN Max ← Marks[i]</p>
            <p className="font-mono text-sm text-gray-800 pl-3">ENDIF</p>
            <p className="font-mono text-sm text-gray-800">NEXT i</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-indigo-200">
            <p className="font-bold text-blue-700 mb-2">Finding MINIMUM:</p>
            <p className="font-mono text-sm text-gray-800">Min ← Marks[1]</p>
            <p className="font-mono text-sm text-gray-800">FOR i ← 2 TO N</p>
            <p className="font-mono text-sm text-gray-800 pl-3">IF Marks[i] <span className="text-red-600 font-bold">{'<'}</span> Min</p>
            <p className="font-mono text-sm text-gray-800 pl-6">THEN Min ← Marks[i]</p>
            <p className="font-mono text-sm text-gray-800 pl-3">ENDIF</p>
            <p className="font-mono text-sm text-gray-800">NEXT i</p>
          </div>
        </div>
        <p className="text-indigo-700 text-sm mt-3 font-semibold">👆 The ONLY difference is the comparison operator! Learn one, and you know both.</p>
      </div>
    </div>
  );
}
