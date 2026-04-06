import CodeBlock from '../../components/CodeBlock';

export default function D9Variations() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔽 Variations — Descending & Parallel Arrays</h1>
      <p className="text-gray-500 mb-8">The exam often asks you to modify Bubble Sort. These are the two most common variations!</p>

      {/* Descending Order */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔽 Descending Order — One Character Change!</h2>
        <p className="text-gray-600 mb-4">To sort in descending order (largest first), you only change <strong>ONE thing</strong> — the comparison operator from <code className="bg-gray-100 px-1 rounded">&gt;</code> to <code className="bg-gray-100 px-1 rounded">&lt;</code>.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-bold text-blue-600 mb-2">⬆️ Ascending (smallest first):</p>
            <CodeBlock language="pseudocode" code={`IF Data[j] > Data[j + 1]
   THEN
      // Swap — move smaller left
      Temp ← Data[j]
      Data[j] ← Data[j + 1]
      Data[j + 1] ← Temp
      Swapped ← TRUE
ENDIF
// Result: [1, 2, 3, 5, 8, 9]`} />
          </div>
          <div>
            <p className="font-bold text-red-600 mb-2">⬇️ Descending (largest first):</p>
            <CodeBlock language="pseudocode" code={`IF Data[j] < Data[j + 1]
   THEN
      // Swap — move larger left
      Temp ← Data[j]
      Data[j] ← Data[j + 1]
      Data[j + 1] ← Temp
      Swapped ← TRUE
ENDIF
// Result: [9, 8, 5, 3, 2, 1]`} />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">🧠 How to remember:</p>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• <strong>Ascending:</strong> Swap when left is GREATER than right (<code>&gt;</code>) — push big values right</li>
            <li>• <strong>Descending:</strong> Swap when left is LESS than right (<code>&lt;</code>) — push small values right</li>
            <li>• Think: "Which element should be on the RIGHT at the end?"</li>
            <li>• Ascending → smallest should stay left → swap if left too BIG → use &gt;</li>
            <li>• Descending → smallest should go right → swap if left too SMALL → use &lt;</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-2">Full descending version:</p>
          <CodeBlock language="pseudocode" code={`PROCEDURE BubbleSortDescending(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Temp : INTEGER
   DECLARE Swapped : BOOLEAN

   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Data[j] < Data[j + 1]   // ← Only this line changed!
            THEN
               Temp ← Data[j]
               Data[j] ← Data[j + 1]
               Data[j + 1] ← Temp
               Swapped ← TRUE
         ENDIF
      NEXT j
      IF NOT Swapped
         THEN
            RETURN
      ENDIF
   NEXT i
ENDPROCEDURE`} />
        </div>
      </div>

      {/* Parallel Arrays */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 Sorting Parallel Arrays — Keep Data Aligned!</h2>
        <p className="text-gray-600 mb-4">In a real system, marks belong to students. If you sort the Marks array, you must also move the corresponding name — otherwise Ali's mark gets assigned to Bob!</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-red-700 mb-3">❌ Problem — Sorting only one array:</p>
          <div className="font-mono text-sm space-y-1">
            <p className="text-gray-600">Before sort:</p>
            <p>Names: [Ali, Bob, Cara, Dev]</p>
            <p>Marks: [72, 45, 88, 61]</p>
            <p className="text-gray-600 mt-2">After sorting only Marks:</p>
            <p>Names: [Ali, Bob, Cara, Dev]  ← unchanged</p>
            <p>Marks: [45, 61, 72, 88]  ← sorted</p>
            <p className="text-red-600 font-bold mt-1">Now Ali appears to have 45, but he actually had 72! ❌</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-green-700 mb-3">✅ Solution — Swap BOTH arrays together:</p>
          <div className="font-mono text-sm space-y-1">
            <p className="text-gray-600">When we swap Marks[j] and Marks[j+1], we ALSO swap Names[j] and Names[j+1]</p>
            <p className="text-gray-600 mt-2">After sorting both:</p>
            <p>Names: [Bob, Dev, Ali, Cara]  ← moved together</p>
            <p>Marks: [45, 61, 72, 88]  ← sorted</p>
            <p className="text-green-600 font-bold mt-1">Bob=45, Dev=61, Ali=72, Cara=88 — all correct! ✅</p>
          </div>
        </div>

        <CodeBlock language="pseudocode" code={`PROCEDURE BubbleSortParallel(BYREF Marks : ARRAY, BYREF Names : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE TempMark : INTEGER    // For swapping marks
   DECLARE TempName : STRING     // For swapping names
   DECLARE Swapped : BOOLEAN

   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Marks[j] > Marks[j + 1]    // Compare marks
            THEN
               // Swap the MARKS
               TempMark ← Marks[j]
               Marks[j] ← Marks[j + 1]
               Marks[j + 1] ← TempMark
               
               // Swap the NAMES at the SAME time!
               TempName ← Names[j]
               Names[j] ← Names[j + 1]
               Names[j + 1] ← TempName
               
               Swapped ← TRUE
         ENDIF
      NEXT j
      IF NOT Swapped
         THEN
            RETURN
      ENDIF
   NEXT i
ENDPROCEDURE

// Usage:
CALL BubbleSortParallel(Marks, Names, 10)
// Now Names[1] is the student with the lowest mark
// Names[10] is the student with the highest mark`} />

        <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="font-bold text-indigo-800 mb-2">🎯 Key Rule for Parallel Arrays:</p>
          <p className="text-indigo-700 text-sm">Every time you swap elements in the KEY array (Marks), you must ALSO swap the same positions in ALL parallel arrays (Names, Grades, etc.). Think of each row of data as glued together.</p>
        </div>
      </div>

      {/* Quick Comparison */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Bubble Sort Variations Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 px-4 py-2 text-left">Variation</th>
                <th className="border border-indigo-200 px-4 py-2 text-left">What changes?</th>
                <th className="border border-indigo-200 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Standard (ascending)', 'Nothing — base version', 'IF Data[j] > Data[j+1]'],
                ['Descending', 'Change > to <', 'IF Data[j] < Data[j+1]'],
                ['Parallel arrays', 'Swap ALL arrays when swapping', 'Swap Marks AND Names'],
                ['Without optimisation', 'Remove Swapped flag', 'Always does n-1 passes'],
                ['Different data type', 'Change DECLARE type', 'DECLARE Temp : STRING'],
                ['Named procedure', 'Change procedure name', 'PROCEDURE SortByMark(...)'],
              ].map(([variation, change, example], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">{variation}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{change}</td>
                  <td className="border border-gray-200 px-4 py-2 font-mono text-purple-700 text-xs">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
