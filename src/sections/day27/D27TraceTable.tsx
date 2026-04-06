export default function D27TraceTable() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Trace Tables — The Exam Favourite</h2>
      <p className="text-gray-500 mb-6">Trace tables are the #1 most tested part of insertion sort in Paper 2</p>

      {/* Columns to use */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Columns for Your Trace Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fuchsia-50">
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700">Column</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700">What to write</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['i', 'Outer loop counter (marks which element we\'re inserting)', '2, 3, 4, 5, 6'],
                ['Key', 'The element saved from Data[i]', '3, 8, 1, 9, 2'],
                ['j', 'Inner pointer (changes as we shift)', '1, 0, 2, 3, ...'],
                ['Data[j] > Key?', 'Result of inner WHILE condition check', 'Yes/No'],
                ['Array state', 'The full array after each pass of outer loop', '[3,5,8,1,9,2]'],
              ].map(([col, what, ex], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-mono font-bold text-fuchsia-600">{col}</td>
                  <td className="px-4 py-3 text-gray-700">{what}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full trace of [5,3,8,1,9,2] */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">🔍 Full Trace: [5, 3, 8, 1, 9, 2]</h3>
        <p className="text-sm text-gray-500 mb-4">Size = 6. Follow every single step of the algorithm.</p>

        {/* Pass 1 */}
        <div className="mb-6">
          <div className="bg-fuchsia-600 text-white px-4 py-2 rounded-t-xl font-bold">Pass 1: i = 2, Key = 3</div>
          <div className="border border-fuchsia-200 rounded-b-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-fuchsia-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">Step</th>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">j</th>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">Data[j]</th>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">Data[j] &gt; Key?</th>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">Action</th>
                  <th className="px-3 py-2 text-left font-bold text-fuchsia-700">Array</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-fuchsia-100">
                <tr className="bg-white"><td className="px-3 py-2">Before</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Key←3, j←1</td><td className="px-3 py-2 font-mono">[5,3,8,1,9,2]</td></tr>
                <tr className="bg-fuchsia-50"><td className="px-3 py-2">Check</td><td className="px-3 py-2">1</td><td className="px-3 py-2">5</td><td className="px-3 py-2 font-bold text-green-600">Yes (5&gt;3)</td><td className="px-3 py-2">Data[2]←5, j←0</td><td className="px-3 py-2 font-mono">[5,5,8,1,9,2]</td></tr>
                <tr className="bg-white"><td className="px-3 py-2">Check</td><td className="px-3 py-2">0</td><td className="px-3 py-2">-</td><td className="px-3 py-2 font-bold text-red-600">No (j=0)</td><td className="px-3 py-2">Exit WHILE</td><td className="px-3 py-2 font-mono">[5,5,8,1,9,2]</td></tr>
                <tr className="bg-fuchsia-50"><td className="px-3 py-2">Insert</td><td className="px-3 py-2">0</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Data[1]←Key(3)</td><td className="px-3 py-2 font-mono font-bold text-green-600">[3,5,8,1,9,2]</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pass 2 */}
        <div className="mb-6">
          <div className="bg-purple-600 text-white px-4 py-2 rounded-t-xl font-bold">Pass 2: i = 3, Key = 8</div>
          <div className="border border-purple-200 rounded-b-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-purple-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">Step</th>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">j</th>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">Data[j]</th>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">Data[j] &gt; Key?</th>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">Action</th>
                  <th className="px-3 py-2 text-left font-bold text-purple-700">Array</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                <tr className="bg-white"><td className="px-3 py-2">Before</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Key←8, j←2</td><td className="px-3 py-2 font-mono">[3,5,8,1,9,2]</td></tr>
                <tr className="bg-purple-50"><td className="px-3 py-2">Check</td><td className="px-3 py-2">2</td><td className="px-3 py-2">5</td><td className="px-3 py-2 font-bold text-red-600">No (5&lt;8)</td><td className="px-3 py-2">Exit WHILE immediately</td><td className="px-3 py-2 font-mono">[3,5,8,1,9,2]</td></tr>
                <tr className="bg-white"><td className="px-3 py-2">Insert</td><td className="px-3 py-2">2</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Data[3]←Key(8) — no change</td><td className="px-3 py-2 font-mono font-bold text-green-600">[3,5,8,1,9,2]</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-purple-600 mt-1 italic">★ No shifting needed — 8 is already in the right place!</p>
        </div>

        {/* Pass 3 */}
        <div className="mb-6">
          <div className="bg-pink-600 text-white px-4 py-2 rounded-t-xl font-bold">Pass 3: i = 4, Key = 1</div>
          <div className="border border-pink-200 rounded-b-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-pink-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">Step</th>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">j</th>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">Data[j]</th>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">Data[j] &gt; Key?</th>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">Action</th>
                  <th className="px-3 py-2 text-left font-bold text-pink-700">Array</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-100">
                <tr className="bg-white"><td className="px-3 py-2">Before</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Key←1, j←3</td><td className="px-3 py-2 font-mono">[3,5,8,1,9,2]</td></tr>
                <tr className="bg-pink-50"><td className="px-3 py-2">Check</td><td className="px-3 py-2">3</td><td className="px-3 py-2">8</td><td className="px-3 py-2 font-bold text-green-600">Yes (8&gt;1)</td><td className="px-3 py-2">Data[4]←8, j←2</td><td className="px-3 py-2 font-mono">[3,5,8,8,9,2]</td></tr>
                <tr className="bg-white"><td className="px-3 py-2">Check</td><td className="px-3 py-2">2</td><td className="px-3 py-2">5</td><td className="px-3 py-2 font-bold text-green-600">Yes (5&gt;1)</td><td className="px-3 py-2">Data[3]←5, j←1</td><td className="px-3 py-2 font-mono">[3,5,5,8,9,2]</td></tr>
                <tr className="bg-pink-50"><td className="px-3 py-2">Check</td><td className="px-3 py-2">1</td><td className="px-3 py-2">3</td><td className="px-3 py-2 font-bold text-green-600">Yes (3&gt;1)</td><td className="px-3 py-2">Data[2]←3, j←0</td><td className="px-3 py-2 font-mono">[3,3,5,8,9,2]</td></tr>
                <tr className="bg-white"><td className="px-3 py-2">Check</td><td className="px-3 py-2">0</td><td className="px-3 py-2">-</td><td className="px-3 py-2 font-bold text-red-600">No (j=0)</td><td className="px-3 py-2">Exit WHILE</td><td className="px-3 py-2 font-mono">[3,3,5,8,9,2]</td></tr>
                <tr className="bg-pink-50"><td className="px-3 py-2">Insert</td><td className="px-3 py-2">0</td><td className="px-3 py-2">-</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Data[1]←Key(1)</td><td className="px-3 py-2 font-mono font-bold text-green-600">[1,3,5,8,9,2]</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Passes 4 and 5 - compact */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="font-bold text-indigo-700 mb-2">Pass 4: i=5, Key=9</p>
            <p className="text-sm text-indigo-800">j starts at 4. Data[4]=8. Is 8 &gt; 9? NO. Exit WHILE immediately.</p>
            <p className="text-sm text-indigo-800 mt-1">Data[5] ← 9 (no change needed)</p>
            <p className="font-mono text-sm mt-2 font-bold">[1,3,5,8,9,2]</p>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="font-bold text-violet-700 mb-2">Pass 5: i=6, Key=2</p>
            <p className="text-sm text-violet-800">j=5: 9&gt;2 → shift, j=4: 8&gt;2 → shift, j=3: 5&gt;2 → shift, j=2: 3&gt;2 → shift, j=1: 1&gt;2? NO → insert at [2]</p>
            <p className="font-mono text-sm mt-2 font-bold text-green-600">[1,2,3,5,8,9] ✓ SORTED!</p>
          </div>
        </div>
      </div>

      {/* Best case trace */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Best Case: Already Sorted Array [1, 2, 3, 4, 5]</h3>
        <p className="text-sm text-gray-600 mb-4">When the array is already sorted, the WHILE loop NEVER executes — O(n) time!</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-50">
              <tr>
                <th className="px-4 py-2 text-left font-bold text-green-700">i</th>
                <th className="px-4 py-2 text-left font-bold text-green-700">Key</th>
                <th className="px-4 py-2 text-left font-bold text-green-700">j</th>
                <th className="px-4 py-2 text-left font-bold text-green-700">Data[j] &gt; Key?</th>
                <th className="px-4 py-2 text-left font-bold text-green-700">Action</th>
                <th className="px-4 py-2 text-left font-bold text-green-700">Array</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100">
              {[
                ['2', '2', '1', 'No (1<2)', 'Data[2]←2, no change', '[1,2,3,4,5]'],
                ['3', '3', '2', 'No (2<3)', 'Data[3]←3, no change', '[1,2,3,4,5]'],
                ['4', '4', '3', 'No (3<4)', 'Data[4]←4, no change', '[1,2,3,4,5]'],
                ['5', '5', '4', 'No (4<5)', 'Data[5]←5, no change', '[1,2,3,4,5]'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-sm text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm font-bold text-green-600">✅ 0 shifts performed! WHILE never runs. This is why Insertion Sort is great for nearly-sorted data!</p>
      </div>
    </div>
  );
}
