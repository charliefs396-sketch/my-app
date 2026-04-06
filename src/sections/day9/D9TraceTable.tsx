import CodeBlock from '../../components/CodeBlock';

export default function D9TraceTable() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Trace Tables — Step by Step</h1>
      <p className="text-gray-500 mb-8">The exam LOVES trace tables. Master this and you'll never lose these marks!</p>

      {/* What is a trace table */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 What is a Trace Table?</h2>
        <p className="text-gray-600 mb-4">A trace table tracks the value of every variable after every step of the algorithm. The examiner wants to see you working through the algorithm <strong>manually, step by step</strong>.</p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-amber-800 font-semibold">📖 Exam Tip:</p>
          <p className="text-amber-700 text-sm mt-1">In trace table questions, show EVERY swap. Don't skip steps. Show the array state after EACH comparison — even when no swap happens!</p>
        </div>
      </div>

      {/* Full Trace: [8, 3, 5, 1, 9, 2] */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🔍 Full Trace: [8, 3, 5, 1, 9, 2]</h2>
        <p className="text-gray-500 text-sm mb-4">Sorting in ascending order. Size = 6. Watch every pass carefully!</p>

        {/* Pass 1 */}
        <div className="mb-6">
          <div className="bg-red-600 text-white px-4 py-2 rounded-t-xl font-bold">Pass 1 (i = 1) — comparing j = 1 to Size - i = 5</div>
          <div className="overflow-x-auto border border-red-200 rounded-b-xl">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-red-50">
                  <th className="border border-red-100 px-3 py-2">i</th>
                  <th className="border border-red-100 px-3 py-2">j</th>
                  <th className="border border-red-100 px-3 py-2">[1]</th>
                  <th className="border border-red-100 px-3 py-2">[2]</th>
                  <th className="border border-red-100 px-3 py-2">[3]</th>
                  <th className="border border-red-100 px-3 py-2">[4]</th>
                  <th className="border border-red-100 px-3 py-2">[5]</th>
                  <th className="border border-red-100 px-3 py-2">[6]</th>
                  <th className="border border-red-100 px-3 py-2">Swapped?</th>
                  <th className="border border-red-100 px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="bg-white"><td className="border border-red-100 px-3 py-1.5 text-center" colSpan={2}>Start</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-red-600">8</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">9</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center">FALSE</td><td className="border border-red-100 px-3 py-1.5 text-center text-gray-400">—</td></tr>
                <tr className="bg-red-50"><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">3</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">8</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">9</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">TRUE</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">8&gt;3 → SWAP</td></tr>
                <tr className="bg-white"><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">5</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">8</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">9</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">TRUE</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">8&gt;5 → SWAP</td></tr>
                <tr className="bg-red-50"><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">1</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">8</td><td className="border border-red-100 px-3 py-1.5 text-center">9</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">TRUE</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">8&gt;1 → SWAP</td></tr>
                <tr className="bg-white"><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">4</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">8</td><td className="border border-red-100 px-3 py-1.5 text-center">9</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center text-gray-400">TRUE</td><td className="border border-red-100 px-3 py-1.5 text-center text-gray-400">8&lt;9 → no swap</td></tr>
                <tr className="bg-red-50"><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">8</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold text-green-700">2</td><td className="border border-red-100 px-3 py-1.5 text-center font-bold bg-green-100">9</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">TRUE</td><td className="border border-red-100 px-3 py-1.5 text-center text-green-600">9&gt;2 → SWAP</td></tr>
                <tr className="bg-green-50 font-semibold"><td className="border border-red-100 px-3 py-1.5 text-center" colSpan={2}>End Pass 1</td><td className="border border-red-100 px-3 py-1.5 text-center">3</td><td className="border border-red-100 px-3 py-1.5 text-center">5</td><td className="border border-red-100 px-3 py-1.5 text-center">1</td><td className="border border-red-100 px-3 py-1.5 text-center">8</td><td className="border border-red-100 px-3 py-1.5 text-center">2</td><td className="border border-red-100 px-3 py-1.5 text-center bg-green-200">9 ✅</td><td className="border border-red-100 px-3 py-1.5" colSpan={2}>9 is in final position</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pass 2 */}
        <div className="mb-6">
          <div className="bg-amber-600 text-white px-4 py-2 rounded-t-xl font-bold">Pass 2 (i = 2) — comparing j = 1 to Size - i = 4</div>
          <div className="overflow-x-auto border border-amber-200 rounded-b-xl">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-amber-100 px-3 py-2">i</th>
                  <th className="border border-amber-100 px-3 py-2">j</th>
                  <th className="border border-amber-100 px-3 py-2">[1]</th>
                  <th className="border border-amber-100 px-3 py-2">[2]</th>
                  <th className="border border-amber-100 px-3 py-2">[3]</th>
                  <th className="border border-amber-100 px-3 py-2">[4]</th>
                  <th className="border border-amber-100 px-3 py-2">[5]</th>
                  <th className="border border-amber-100 px-3 py-2">[6]</th>
                  <th className="border border-amber-100 px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="bg-amber-50"><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center">1</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center">5</td><td className="border border-amber-100 px-3 py-1.5 text-center">1</td><td className="border border-amber-100 px-3 py-1.5 text-center">8</td><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-100">9</td><td className="border border-amber-100 px-3 py-1.5 text-gray-400">3&lt;5 → no swap</td></tr>
                <tr className="bg-white"><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center font-bold text-green-700">1</td><td className="border border-amber-100 px-3 py-1.5 text-center font-bold text-green-700">5</td><td className="border border-amber-100 px-3 py-1.5 text-center">8</td><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-100">9</td><td className="border border-amber-100 px-3 py-1.5 text-green-600">5&gt;1 → SWAP</td></tr>
                <tr className="bg-amber-50"><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center">1</td><td className="border border-amber-100 px-3 py-1.5 text-center">5</td><td className="border border-amber-100 px-3 py-1.5 text-center">8</td><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-100">9</td><td className="border border-amber-100 px-3 py-1.5 text-gray-400">5&lt;8 → no swap</td></tr>
                <tr className="bg-white"><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center">4</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center">1</td><td className="border border-amber-100 px-3 py-1.5 text-center">5</td><td className="border border-amber-100 px-3 py-1.5 text-center font-bold text-green-700">2</td><td className="border border-amber-100 px-3 py-1.5 text-center font-bold bg-green-100">8</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-100">9</td><td className="border border-amber-100 px-3 py-1.5 text-green-600">8&gt;2 → SWAP</td></tr>
                <tr className="bg-green-50 font-semibold"><td className="border border-amber-100 px-3 py-1.5 text-center" colSpan={2}>End Pass 2</td><td className="border border-amber-100 px-3 py-1.5 text-center">3</td><td className="border border-amber-100 px-3 py-1.5 text-center">1</td><td className="border border-amber-100 px-3 py-1.5 text-center">5</td><td className="border border-amber-100 px-3 py-1.5 text-center">2</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-200">8 ✅</td><td className="border border-amber-100 px-3 py-1.5 text-center bg-green-200">9 ✅</td><td className="border border-amber-100 px-3 py-1.5" colSpan={1}>8, 9 in final positions</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Remaining passes summary */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p className="font-bold text-gray-700 mb-3">Remaining Passes Summary:</p>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-4">
              <span className="font-bold text-purple-600 w-16">Pass 3:</span>
              <span>[1, 3, 2, 5, 8, 9]</span>
              <span className="text-green-600">→ 5 sorted ✅</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-purple-600 w-16">Pass 4:</span>
              <span>[1, 2, 3, 5, 8, 9]</span>
              <span className="text-green-600">→ Swapped = FALSE → EARLY EXIT! ✅</span>
            </div>
          </div>
          <div className="mt-3 bg-green-100 border border-green-300 rounded-lg p-2">
            <p className="text-green-800 text-sm font-bold">Final sorted array: [1, 2, 3, 5, 8, 9] ✅</p>
            <p className="text-green-700 text-xs mt-1">The Swapped flag detected that Pass 4 made no swaps → early exit after only 4 passes instead of 5!</p>
          </div>
        </div>
      </div>

      {/* Swapped Flag explanation */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ The Swapped Flag — Early Exit Optimisation</h2>
        <p className="text-gray-600 mb-4">The Swapped flag is the key optimisation in Bubble Sort. Without it, we always do (n-1) passes even if the array is already sorted!</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-red-600 mb-2">❌ Without Swapped Flag:</p>
            <CodeBlock language="pseudocode" code={`// Always does n-1 passes
// [1, 2, 3, 4, 5] still does 4 passes
// Wastes time!
FOR i ← 1 TO Size - 1
   FOR j ← 1 TO Size - i
      IF Data[j] > Data[j + 1]
         THEN
            // swap...
      ENDIF
   NEXT j
NEXT i`} />
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">✅ With Swapped Flag:</p>
            <CodeBlock language="pseudocode" code={`// Stops as soon as array is sorted!
// [1, 2, 3, 4, 5] exits after 1 pass
FOR i ← 1 TO Size - 1
   Swapped ← FALSE
   FOR j ← 1 TO Size - i
      IF Data[j] > Data[j + 1]
         THEN
            // swap...
            Swapped ← TRUE
      ENDIF
   NEXT j
   IF NOT Swapped
      THEN RETURN
   ENDIF
NEXT i`} />
          </div>
        </div>
        <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="font-bold text-indigo-800 mb-1">🎯 Exam Answer Template:</p>
          <p className="text-indigo-700 text-sm">"The Swapped flag is set to FALSE at the start of each pass. If no swaps occur during a pass, the array must already be sorted, so the algorithm terminates early. This improves the best-case time complexity from O(n²) to O(n)."</p>
        </div>
      </div>
    </div>
  );
}
