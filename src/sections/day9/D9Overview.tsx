

export default function D9Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🫧 Day 9: Bubble Sort
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science – Cambridge 9618 | Sorting Algorithms</p>

      {/* What is Bubble Sort */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 What is Bubble Sort?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bubble Sort is a <strong>comparison-based sorting algorithm</strong> that repeatedly steps through the list,
          compares adjacent elements, and swaps them if they are in the wrong order.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It's called <strong>"Bubble" Sort</strong> because larger values <em>bubble up</em> to the top (end) of the
          array like air bubbles rising in water — after each pass, the largest unsorted element is guaranteed to be in its correct position.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-800 font-semibold">📖 Exam-Ready Definition:</p>
          <p className="text-blue-700 mt-1">
            "Bubble sort is a sorting algorithm that makes repeated passes through an array, comparing adjacent elements
            and swapping them if they are in the wrong order. After each pass, the largest unsorted element is placed in its correct position."
          </p>
        </div>
      </div>

      {/* Real Life Analogy */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌍 Real Life Analogy</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-bold text-amber-800 mb-2">🧑‍🤝‍🧑 People in a Line</p>
            <p className="text-amber-700 text-sm">Imagine 6 people standing in a random order by height. You walk along the line, and whenever you see a taller person in front of a shorter person, you swap them. After one full walk, the tallest person is at the end. Repeat until everyone is in order.</p>
          </div>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
            <p className="font-bold text-cyan-800 mb-2">🫧 Bubbles Rising</p>
            <p className="text-cyan-700 text-sm">Think of the numbers as bubbles with different sizes. On each pass, the biggest bubble floats up to its correct position. Smaller bubbles stay near the bottom. The array gets more sorted with every pass.</p>
          </div>
        </div>
      </div>

      {/* Visual Step Through */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">👁️ Visual Step-Through</h2>
        <p className="text-gray-600 mb-4">Sorting <strong>[8, 3, 5, 1]</strong> in ascending order — watch what happens pass by pass:</p>

        <div className="space-y-4">
          {/* Pass 1 */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-3">Pass 1 — Biggest value (8) bubbles to the end</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 text-red-500 font-bold">→</span>
                <span className="bg-red-200 px-2 py-1 rounded">8</span>
                <span className="bg-red-200 px-2 py-1 rounded">3</span>
                <span className="px-2 py-1 rounded bg-gray-100">5</span>
                <span className="px-2 py-1 rounded bg-gray-100">1</span>
                <span className="text-red-600 text-xs ml-2">Compare 8 and 3 → 8 &gt; 3 → SWAP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 text-red-500 font-bold">→</span>
                <span className="px-2 py-1 rounded bg-gray-100">3</span>
                <span className="bg-red-200 px-2 py-1 rounded">8</span>
                <span className="bg-red-200 px-2 py-1 rounded">5</span>
                <span className="px-2 py-1 rounded bg-gray-100">1</span>
                <span className="text-red-600 text-xs ml-2">Compare 8 and 5 → 8 &gt; 5 → SWAP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 text-red-500 font-bold">→</span>
                <span className="px-2 py-1 rounded bg-gray-100">3</span>
                <span className="px-2 py-1 rounded bg-gray-100">5</span>
                <span className="bg-red-200 px-2 py-1 rounded">8</span>
                <span className="bg-red-200 px-2 py-1 rounded">1</span>
                <span className="text-red-600 text-xs ml-2">Compare 8 and 1 → 8 &gt; 1 → SWAP</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-6"></span>
                <span className="px-2 py-1 rounded bg-gray-100">3</span>
                <span className="px-2 py-1 rounded bg-gray-100">5</span>
                <span className="px-2 py-1 rounded bg-gray-100">1</span>
                <span className="px-2 py-1 rounded bg-green-200 font-bold">8</span>
                <span className="text-green-600 text-xs ml-2">✅ 8 is now in correct position!</span>
              </div>
            </div>
          </div>

          {/* Pass 2 */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-bold text-amber-700 mb-3">Pass 2 — Next biggest (5) bubbles up</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 text-amber-500 font-bold">→</span>
                <span className="bg-amber-200 px-2 py-1 rounded">3</span>
                <span className="bg-amber-200 px-2 py-1 rounded">5</span>
                <span className="px-2 py-1 rounded bg-gray-100">1</span>
                <span className="px-2 py-1 rounded bg-green-200">8</span>
                <span className="text-amber-600 text-xs ml-2">Compare 3 and 5 → 3 &lt; 5 → NO swap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 text-amber-500 font-bold">→</span>
                <span className="px-2 py-1 rounded bg-gray-100">3</span>
                <span className="bg-amber-200 px-2 py-1 rounded">5</span>
                <span className="bg-amber-200 px-2 py-1 rounded">1</span>
                <span className="px-2 py-1 rounded bg-green-200">8</span>
                <span className="text-amber-600 text-xs ml-2">Compare 5 and 1 → 5 &gt; 1 → SWAP</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-6"></span>
                <span className="px-2 py-1 rounded bg-gray-100">3</span>
                <span className="px-2 py-1 rounded bg-gray-100">1</span>
                <span className="px-2 py-1 rounded bg-green-200 font-bold">5</span>
                <span className="px-2 py-1 rounded bg-green-200 font-bold">8</span>
                <span className="text-green-600 text-xs ml-2">✅ 5 and 8 in correct positions!</span>
              </div>
            </div>
          </div>

          {/* Pass 3 */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-3">Pass 3 — Array is sorted!</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 text-green-500 font-bold">→</span>
                <span className="bg-green-200 px-2 py-1 rounded">3</span>
                <span className="bg-green-200 px-2 py-1 rounded">1</span>
                <span className="px-2 py-1 rounded bg-green-200">5</span>
                <span className="px-2 py-1 rounded bg-green-200">8</span>
                <span className="text-green-600 text-xs ml-2">Compare 3 and 1 → 3 &gt; 1 → SWAP</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-6"></span>
                <span className="px-2 py-1 rounded bg-green-300 font-bold">1</span>
                <span className="px-2 py-1 rounded bg-green-300 font-bold">3</span>
                <span className="px-2 py-1 rounded bg-green-300 font-bold">5</span>
                <span className="px-2 py-1 rounded bg-green-300 font-bold">8</span>
                <span className="text-green-700 text-xs ml-2 font-bold">✅ Fully sorted!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Key Facts for the Exam</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 px-4 py-3 text-left font-bold text-indigo-800">Property</th>
                <th className="border border-indigo-200 px-4 py-3 text-left font-bold text-indigo-800">Value</th>
                <th className="border border-indigo-200 px-4 py-3 text-left font-bold text-indigo-800">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Best Case', 'O(n) — already sorted', 'Only 1 pass needed with optimisation'],
                ['Worst Case', 'O(n²) — reverse sorted', 'Maximum number of comparisons and swaps'],
                ['Average Case', 'O(n²)', 'Typical performance on random data'],
                ['Space', 'O(1) — in-place', 'Only needs one extra variable (Temp)'],
                ['Stable?', 'Yes', 'Equal elements stay in original order'],
                ['Max passes needed', 'n - 1', 'Where n is number of elements'],
                ['Max comparisons per pass i', 'n - i', 'Gets smaller each pass (optimisation)'],
              ].map(([prop, val, meaning], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">{prop}</td>
                  <td className="border border-gray-200 px-4 py-2 font-mono text-purple-700 font-bold">{val}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What's new at A Level */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🆚 O Level vs A Level</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-gray-600 mb-3">📘 O Level — You knew:</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✓ Basic concept of swapping adjacent elements</li>
              <li>✓ Simple trace through small arrays</li>
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-3">🎓 A Level — You need:</p>
            <ul className="space-y-1 text-sm text-indigo-700">
              <li>✅ Write PROCEDURE with BYREF parameter</li>
              <li>✅ Use Swapped flag for early exit optimisation</li>
              <li>✅ Understand BYREF vs BYVAL</li>
              <li>✅ Implement descending order version</li>
              <li>✅ Sort parallel arrays (keep data aligned)</li>
              <li>✅ Full trace tables with EVERY swap shown</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <h3 className="font-bold text-gray-900 mb-2">🗺️ What you'll learn today:</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            '🔧 PROCEDURE syntax with BYREF',
            '🔄 The 3-variable swap technique',
            '⚡ Swapped flag optimisation',
            '🔽 Descending order modification',
            '🔗 Sorting parallel arrays',
            '📋 Full trace tables',
            '❓ Exam FAQ',
            '✍️ Practice + Quiz',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-indigo-700">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
