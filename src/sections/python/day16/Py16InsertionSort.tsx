import CodeBlock from '../../../components/CodeBlock';

export default function Py16InsertionSort() {
  const code = `def insertion_sort(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j] > key:
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data

data = [12, 11, 13, 5, 6]
insertion_sort(data)
print(data)   # [5, 6, 11, 12, 13]`;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📥 The Insertion Sort Algorithm</h2>
      <p className="text-gray-600 mb-6">Your exact Cambridge code — every line explained</p>

      <CodeBlock code={code} language="python" />

      <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">🔍 Every Line Explained</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Line</th>
              <th className="px-4 py-2 text-left text-gray-600">Code</th>
              <th className="px-4 py-2 text-left text-gray-600">WHY</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'for i in range(1, len(data))', 'Start at index 1 — index 0 is already "sorted" by itself'],
              ['2', 'key = data[i]', 'Save the element we are inserting — it will get overwritten'],
              ['3', 'j = i - 1', 'j starts just LEFT of key, scanning backwards'],
              ['4', 'while j >= 0 and data[j] > key', 'j >= 0: don\'t go before index 0 | data[j] > key: element is too big'],
              ['5', 'data[j + 1] = data[j]', 'Shift element one position RIGHT to make space'],
              ['6', 'j -= 1', 'Move j one step LEFT to check next element'],
              ['7', 'data[j + 1] = key', 'Insert key into the gap found — j+1 because j went one too far'],
            ].map(([line, code, why], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-bold text-indigo-600">{line}</td>
                <td className="px-4 py-3 font-mono text-xs text-gray-800">{code}</td>
                <td className="px-4 py-3 text-gray-600 text-xs">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">📋 Full Trace: [12, 11, 13, 5, 6]</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-3 py-2 text-left text-indigo-700">Pass (i)</th>
                <th className="px-3 py-2 text-left text-indigo-700">key</th>
                <th className="px-3 py-2 text-left text-indigo-700">j</th>
                <th className="px-3 py-2 text-left text-indigo-700">Action</th>
                <th className="px-3 py-2 text-left text-indigo-700">Array After</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['—', '—', '—', 'Initial state', '[12, 11, 13, 5, 6]'],
                ['i=1', '11', '0', '12 > 11 → shift 12 right, insert 11 at [0]', '[11, 12, 13, 5, 6]'],
                ['i=2', '13', '1', '12 < 13 → no shift, insert 13 at [2]', '[11, 12, 13, 5, 6]'],
                ['i=3', '5', '0', '13,12,11 > 5 → shift all right, insert 5 at [0]', '[5, 11, 12, 13, 6]'],
                ['i=4', '6', '0', '13,12,11 > 6 → shift right, insert 6 at [1]', '[5, 6, 11, 12, 13]'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-3 py-2 text-xs ${j === 4 ? 'font-mono font-bold text-emerald-700' : 'text-gray-700'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h4 className="font-bold text-red-800 mb-3">❌ Common Mistakes</h4>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• <code>range(0, len(data))</code> — should start at 1!</li>
            <li>• <code>j &gt; 0</code> instead of <code>j &gt;= 0</code> — misses index 0!</li>
            <li>• Forgetting to save <code>key = data[i]</code> before shifting</li>
            <li>• Using <code>data[j] = data[j+1]</code> — wrong direction!</li>
            <li>• Forgetting <code>data[j+1] = key</code> at the end</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <h4 className="font-bold text-green-800 mb-3">✅ Key Facts</h4>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Python lists passed by reference — no return needed</li>
            <li>• Best case: O(n) — already sorted</li>
            <li>• Worst case: O(n²) — reverse sorted</li>
            <li>• More efficient than Bubble Sort in practice</li>
            <li>• Stable sort — equal elements stay in order</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
