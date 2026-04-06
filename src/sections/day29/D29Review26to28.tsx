import CodeBlock from '../../components/CodeBlock';

export default function D29Review26to28() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🔬 Days 26–28 Review</h2>
      <p className="text-gray-500 mb-6">Binary Search, Insertion Sort, Recursion — The Hard Topics!</p>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
        <p className="font-bold text-red-800">⚠️ These 3 topics appear EVERY year in Paper 2. Master them!</p>
      </div>

      {/* Day 26 - Binary Search */}
      <div className="bg-white border border-cyan-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-cyan-700 text-lg mb-3">🔍 Day 26 – Binary Search</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-cyan-50 rounded-lg p-3">
            <p className="font-bold text-cyan-700 text-sm mb-2">Key Points:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Data MUST be sorted first!</li>
              <li>✅ Low ← 1, High ← Size</li>
              <li>✅ Mid ← (Low + High) DIV 2</li>
              <li>✅ If target found → RETURN Mid</li>
              <li>✅ If Data[Mid] &lt; Target → Low ← Mid + 1</li>
              <li>✅ If Data[Mid] &gt; Target → High ← Mid - 1</li>
              <li>✅ Not found → Low &gt; High → RETURN -1</li>
            </ul>
          </div>
          <div className="bg-cyan-50 rounded-lg p-3">
            <p className="font-bold text-cyan-700 text-sm mb-2">Efficiency:</p>
            <table className="text-xs w-full">
              <thead><tr><th className="text-left">N items</th><th className="text-left">Max steps</th></tr></thead>
              <tbody>
                {[['8', '3'], ['16', '4'], ['100', '7'], ['1,000', '10'], ['1,000,000', '20']].map(([n, s]) => (
                  <tr key={n}><td>{n}</td><td>{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Data = [2, 7, 13, 19, 24, 31, 38, 45]. Trace Binary Search for Target = 24. Show a full trace table with columns: Pass | Low | High | Mid | Data[Mid] | Action</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <div className="overflow-x-auto mb-3">
                <table className="text-xs w-full border-collapse">
                  <thead><tr className="bg-cyan-100">
                    <th className="border p-2">Pass</th>
                    <th className="border p-2">Low</th>
                    <th className="border p-2">High</th>
                    <th className="border p-2">Mid</th>
                    <th className="border p-2">Data[Mid]</th>
                    <th className="border p-2">Action</th>
                  </tr></thead>
                  <tbody>
                    <tr><td className="border p-2">Start</td><td className="border p-2">1</td><td className="border p-2">8</td><td className="border p-2">-</td><td className="border p-2">-</td><td className="border p-2">Initialise</td></tr>
                    <tr className="bg-yellow-50"><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">8</td><td className="border p-2">4</td><td className="border p-2">19</td><td className="border p-2">19 &lt; 24 → Low = 5</td></tr>
                    <tr className="bg-yellow-50"><td className="border p-2">2</td><td className="border p-2">5</td><td className="border p-2">8</td><td className="border p-2">6</td><td className="border p-2">31</td><td className="border p-2">31 &gt; 24 → High = 5</td></tr>
                    <tr className="bg-green-50"><td className="border p-2">3</td><td className="border p-2">5</td><td className="border p-2">5</td><td className="border p-2">5</td><td className="border p-2">24</td><td className="border p-2">24 = 24 → RETURN 5 ✅</td></tr>
                  </tbody>
                </table>
              </div>
              <CodeBlock language="pseudocode" code={`// Found at position 5 in just 3 passes!
// Linear search would take 5 comparisons`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 27 - Insertion Sort */}
      <div className="bg-white border border-fuchsia-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-fuchsia-700 text-lg mb-3">📥 Day 27 – Insertion Sort</h3>
        <div className="bg-fuchsia-50 rounded-lg p-3 mb-4">
          <p className="font-bold text-fuchsia-700 text-sm mb-2">How it works (playing cards analogy):</p>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>✅ Pick up card (Key ← Data[i])</li>
            <li>✅ Slide bigger cards right (Data[j+1] ← Data[j])</li>
            <li>✅ Insert card in correct position (Data[j+1] ← Key)</li>
            <li>✅ BYREF because we modify the original array</li>
            <li>✅ i starts at 2 (position 1 is already "sorted")</li>
            <li>✅ Inner loop goes BACKWARDS (j goes from i-1 down to 1)</li>
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Trace Insertion Sort on [6, 2, 8, 1, 4]. Show the array after EACH pass (i=2, 3, 4, 5). Show what Key is and what gets shifted.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`// Start:  [6, 2, 8, 1, 4]

// Pass i=2: Key = 2
//   j=1: Data[1]=6 > 2 → shift: [6, 6, 8, 1, 4]
//   j=0: stop (j=0)
//   Insert: Data[1] = 2 → [2, 6, 8, 1, 4]

// Pass i=3: Key = 8
//   j=2: Data[2]=6 < 8 → STOP immediately
//   Insert: Data[3] = 8 → [2, 6, 8, 1, 4] (no change)

// Pass i=4: Key = 1
//   j=3: Data[3]=8 > 1 → shift: [2, 6, 8, 8, 4]
//   j=2: Data[2]=6 > 1 → shift: [2, 6, 6, 8, 4]
//   j=1: Data[1]=2 > 1 → shift: [2, 2, 6, 8, 4]
//   j=0: stop
//   Insert: Data[1] = 1 → [1, 2, 6, 8, 4]

// Pass i=5: Key = 4
//   j=4: Data[4]=8 > 4 → shift: [1, 2, 6, 8, 8]
//   j=3: Data[3]=6 > 4 → shift: [1, 2, 6, 6, 8]
//   j=2: Data[2]=2 < 4 → STOP
//   Insert: Data[3] = 4 → [1, 2, 4, 6, 8]

// Final: [1, 2, 4, 6, 8] ✅`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 28 - Recursion */}
      <div className="bg-white border border-violet-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-violet-700 text-lg mb-3">🔄 Day 28 – Recursion</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-violet-50 rounded-lg p-3">
            <p className="font-bold text-violet-700 text-sm mb-2">3 Requirements:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>1️⃣ Base case (stops recursion)</li>
              <li>2️⃣ Recursive case (calls itself)</li>
              <li>3️⃣ Progress toward base case</li>
            </ul>
          </div>
          <div className="bg-violet-50 rounded-lg p-3">
            <p className="font-bold text-violet-700 text-sm mb-2">vs Iteration:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Recursion: elegant, natural for trees</li>
              <li>❌ Recursion: uses more memory (call stack)</li>
              <li>✅ Iteration: faster, less memory</li>
              <li>❌ Iteration: harder for tree problems</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write a recursive FUNCTION called SumTo(N) that returns the sum of all integers from 1 to N. So SumTo(5) = 1+2+3+4+5 = 15. Then trace SumTo(4) showing all calls and returns.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`FUNCTION SumTo(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1        // Base case
      ELSE
         RETURN N + SumTo(N - 1)  // Recursive case
   ENDIF
ENDFUNCTION

// Trace SumTo(4):
// SumTo(4) = 4 + SumTo(3)
//   SumTo(3) = 3 + SumTo(2)
//     SumTo(2) = 2 + SumTo(1)
//       SumTo(1) = 1  ← BASE CASE
//     SumTo(2) = 2 + 1 = 3
//   SumTo(3) = 3 + 3 = 6
// SumTo(4) = 4 + 6 = 10 ✅`} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
