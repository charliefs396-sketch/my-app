import CodeBlock from '../../../components/CodeBlock';

export default function Py10BubbleSort() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🫧 Bubble Sort Algorithm
      </h1>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 The Complete Function</h2>
        <CodeBlock code={`def bubble_sort(data):
    n = len(data)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
                swapped = True
        if not swapped:
            break
    return data`} language="python" />

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">📋 Every Line Explained</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold">Line</th>
                <th className="p-3 text-left font-bold">Code</th>
                <th className="p-3 text-left font-bold">What It Does</th>
                <th className="p-3 text-left font-bold">WHY</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono">1</td><td className="p-3 font-mono text-purple-600">def bubble_sort(data):</td><td className="p-3">Define function taking a list</td><td className="p-3">Lists are passed by reference automatically</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">2</td><td className="p-3 font-mono text-purple-600">n = len(data)</td><td className="p-3">Store list length</td><td className="p-3">Used in both loops</td></tr>
              <tr><td className="p-3 font-mono">3</td><td className="p-3 font-mono text-purple-600">for i in range(n - 1):</td><td className="p-3">Outer loop: n-1 passes</td><td className="p-3">After n-1 passes, list is sorted</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">4</td><td className="p-3 font-mono text-purple-600">swapped = False</td><td className="p-3">Reset flag each pass</td><td className="p-3">Track if any swaps happened</td></tr>
              <tr><td className="p-3 font-mono">5</td><td className="p-3 font-mono text-purple-600">for j in range(n - 1 - i):</td><td className="p-3">Inner loop: compare pairs</td><td className="p-3">-i because last i elements already sorted</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">6</td><td className="p-3 font-mono text-purple-600">if data[j] &gt; data[j+1]:</td><td className="p-3">Compare adjacent pair</td><td className="p-3">If left bigger than right, wrong order</td></tr>
              <tr><td className="p-3 font-mono">7</td><td className="p-3 font-mono text-purple-600">data[j], data[j+1] = data[j+1], data[j]</td><td className="p-3">Swap them!</td><td className="p-3">Python tuple swap - no Temp needed!</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">8</td><td className="p-3 font-mono text-purple-600">swapped = True</td><td className="p-3">Mark that a swap happened</td><td className="p-3">At least one element was out of order</td></tr>
              <tr><td className="p-3 font-mono">9</td><td className="p-3 font-mono text-purple-600">if not swapped:</td><td className="p-3">Check if no swaps this pass</td><td className="p-3">No swaps = already sorted!</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">10</td><td className="p-3 font-mono text-purple-600">break</td><td className="p-3">Exit loop early</td><td className="p-3">Saves unnecessary passes</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 The Python Swap Trick</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-800 mb-2">❌ Pseudocode Way (3 lines)</p>
            <CodeBlock code={`Temp ← Data[j]
Data[j] ← Data[j + 1]
Data[j + 1] ← Temp`} language="pseudocode" />
          </div>
          <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-800 mb-2">✅ Python Way (1 line!)</p>
            <CodeBlock code={`data[j], data[j+1] = data[j+1], data[j]`} language="python" />
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <p className="font-bold text-blue-800">💡 How Does It Work?</p>
          <p className="text-blue-700 mt-1">
            Python evaluates the <strong>right side first</strong> as a tuple <code>(data[j+1], data[j])</code>,
            then unpacks it into the left side. Both values are read BEFORE either is written!
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Full Trace: [5, 3, 8, 1, 9, 2]</h2>
        
        <h3 className="text-lg font-bold text-gray-800 mb-3">Pass 1 (i=0): Compare 5 pairs</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 text-left">j</th>
                <th className="p-2 text-left">Compare</th>
                <th className="p-2 text-left">Swap?</th>
                <th className="p-2 text-left">List After</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-2">0</td><td className="p-2">5 &gt; 3?</td><td className="p-2 text-green-600 font-bold">Yes</td><td className="p-2 font-mono">[3, 5, 8, 1, 9, 2]</td></tr>
              <tr className="bg-gray-50"><td className="p-2">1</td><td className="p-2">5 &gt; 8?</td><td className="p-2 text-red-600">No</td><td className="p-2 font-mono">[3, 5, 8, 1, 9, 2]</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">8 &gt; 1?</td><td className="p-2 text-green-600 font-bold">Yes</td><td className="p-2 font-mono">[3, 5, 1, 8, 9, 2]</td></tr>
              <tr className="bg-gray-50"><td className="p-2">3</td><td className="p-2">8 &gt; 9?</td><td className="p-2 text-red-600">No</td><td className="p-2 font-mono">[3, 5, 1, 8, 9, 2]</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">9 &gt; 2?</td><td className="p-2 text-green-600 font-bold">Yes</td><td className="p-2 font-mono">[3, 5, 1, 8, 2, 9]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mb-4">✅ 9 is now at the end (its correct position)</p>

        <h3 className="text-lg font-bold text-gray-800 mb-3">Pass 2 (i=1): Compare 4 pairs</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-2 text-left">j</th>
                <th className="p-2 text-left">Compare</th>
                <th className="p-2 text-left">Swap?</th>
                <th className="p-2 text-left">List After</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-2">0</td><td className="p-2">3 &gt; 5?</td><td className="p-2 text-red-600">No</td><td className="p-2 font-mono">[3, 5, 1, 8, 2, 9]</td></tr>
              <tr className="bg-gray-50"><td className="p-2">1</td><td className="p-2">5 &gt; 1?</td><td className="p-2 text-green-600 font-bold">Yes</td><td className="p-2 font-mono">[3, 1, 5, 8, 2, 9]</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">5 &gt; 8?</td><td className="p-2 text-red-600">No</td><td className="p-2 font-mono">[3, 1, 5, 8, 2, 9]</td></tr>
              <tr className="bg-gray-50"><td className="p-2">3</td><td className="p-2">8 &gt; 2?</td><td className="p-2 text-green-600 font-bold">Yes</td><td className="p-2 font-mono">[3, 1, 5, 2, 8, 9]</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mb-4">✅ 8 and 9 now at the end</p>

        <h3 className="text-lg font-bold text-gray-800 mb-3">Remaining Passes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 text-left">Pass</th>
                <th className="p-2 text-left">Result</th>
                <th className="p-2 text-left">Swaps</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-2">Pass 3</td><td className="p-2 font-mono">[1, 3, 2, 5, 8, 9]</td><td className="p-2">2 swaps</td></tr>
              <tr className="bg-gray-50"><td className="p-2">Pass 4</td><td className="p-2 font-mono">[1, 2, 3, 5, 8, 9]</td><td className="p-2">1 swap</td></tr>
              <tr><td className="p-2">Pass 5</td><td className="p-2 font-mono">[1, 2, 3, 5, 8, 9]</td><td className="p-2">0 swaps → break!</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔤 Sorting Strings</h2>
        <p className="text-gray-700 mb-3">The exact same function works for strings — Python compares alphabetically:</p>
        <CodeBlock code={`names = ["Tom", "Ali", "Zara", "Emma"]
bubble_sort(names)
print(names)  # ['Ali', 'Emma', 'Tom', 'Zara']`} language="python" />
      </div>

      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
        <p className="font-bold text-red-800">⚠️ Common Mistakes</p>
        <div className="mt-2 space-y-2 text-sm">
          <div className="flex gap-2"><span className="text-red-500">❌</span><code>for i in range(n):</code> — should be <code>range(n-1)</code></div>
          <div className="flex gap-2"><span className="text-green-500">✅</span><code>for i in range(n - 1):</code></div>
          <div className="flex gap-2 mt-2"><span className="text-red-500">❌</span><code>for j in range(n - 1):</code> — should subtract i</div>
          <div className="flex gap-2"><span className="text-green-500">✅</span><code>for j in range(n - 1 - i):</code></div>
          <div className="flex gap-2 mt-2"><span className="text-red-500">❌</span><code>swapped = False</code> outside outer loop</div>
          <div className="flex gap-2"><span className="text-green-500">✅</span><code>swapped = False</code> at START of each pass (inside outer loop)</div>
        </div>
      </div>
    </div>
  );
}