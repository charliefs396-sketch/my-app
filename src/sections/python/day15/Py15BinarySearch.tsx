import CodeBlock from '../../../components/CodeBlock';

export default function Py15BinarySearch() {
  const code = `def binary_search(data, target):
    low = 0
    high = len(data) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# MUST be sorted first!
numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(binary_search(numbers, 23))    # 5
print(binary_search(numbers, 99))    # -1`;

  const callCode = `result = binary_search(numbers, 23)
if result != -1:
    print(f"Found at index {result}")
else:
    print("Not found")`;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        🔍 The Binary Search Algorithm
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Your Exact Cambridge Code</h2>
        <CodeBlock code={code} language="python" />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🔬 Every Line Explained</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-cyan-100"><th className="border p-2">Line</th><th className="border p-2">Code</th><th className="border p-2">WHY?</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 font-mono text-xs">1</td><td className="border p-2 font-mono text-xs">low = 0</td><td className="border p-2">Start of list (0-indexed!)</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono text-xs">2</td><td className="border p-2 font-mono text-xs">high = len(data) - 1</td><td className="border p-2">End of list (last valid index)</td></tr>
              <tr><td className="border p-2 font-mono text-xs">3</td><td className="border p-2 font-mono text-xs">while low &lt;= high:</td><td className="border p-2">Keep searching while there's still a range to search</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono text-xs">4</td><td className="border p-2 font-mono text-xs">mid = (low + high) // 2</td><td className="border p-2">Find middle index. // for integer division (no decimals!)</td></tr>
              <tr><td className="border p-2 font-mono text-xs">5</td><td className="border p-2 font-mono text-xs">if data[mid] == target:</td><td className="border p-2">Found it! Return the index</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono text-xs">6</td><td className="border p-2 font-mono text-xs">elif data[mid] &lt; target:</td><td className="border p-2">Target is in RIGHT half → move low up</td></tr>
              <tr><td className="border p-2 font-mono text-xs">7</td><td className="border p-2 font-mono text-xs">low = mid + 1</td><td className="border p-2">Skip mid (already checked), search right half</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono text-xs">8</td><td className="border p-2 font-mono text-xs">else: high = mid - 1</td><td className="border p-2">Target is in LEFT half → move high down</td></tr>
              <tr><td className="border p-2 font-mono text-xs">9</td><td className="border p-2 font-mono text-xs">return -1</td><td className="border p-2">Loop ended = not found. -1 means "not found" (convention)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Full Trace — FOUND (Target = 23)</h2>
        <p className="text-gray-600 mb-3">Data: <code className="bg-gray-100 px-1 rounded">[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code> — indices 0 to 9</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-green-100"><th className="border p-2">Pass</th><th className="border p-2">low</th><th className="border p-2">high</th><th className="border p-2">mid</th><th className="border p-2">data[mid]</th><th className="border p-2">Action</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 text-center">Start</td><td className="border p-2 text-center">0</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">—</td><td className="border p-2 text-center">—</td><td className="border p-2">Initial values</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 text-center">1</td><td className="border p-2 text-center">0</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">4</td><td className="border p-2 text-center">16</td><td className="border p-2 text-blue-600">16 &lt; 23 → low = 5</td></tr>
              <tr><td className="border p-2 text-center">2</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">56</td><td className="border p-2 text-orange-600">56 &gt; 23 → high = 6</td></tr>
              <tr className="bg-green-50"><td className="border p-2 text-center">3</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center">6</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center font-bold text-green-600">23</td><td className="border p-2 text-green-600 font-bold">✅ FOUND! Return 5</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Full Trace — NOT FOUND (Target = 99)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-100"><th className="border p-2">Pass</th><th className="border p-2">low</th><th className="border p-2">high</th><th className="border p-2">mid</th><th className="border p-2">data[mid]</th><th className="border p-2">Action</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 text-center">1</td><td className="border p-2 text-center">0</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">4</td><td className="border p-2 text-center">16</td><td className="border p-2 text-blue-600">16 &lt; 99 → low = 5</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 text-center">2</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">56</td><td className="border p-2 text-blue-600">56 &lt; 99 → low = 8</td></tr>
              <tr><td className="border p-2 text-center">3</td><td className="border p-2 text-center">8</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">8</td><td className="border p-2 text-center">72</td><td className="border p-2 text-blue-600">72 &lt; 99 → low = 9</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 text-center">4</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">91</td><td className="border p-2 text-blue-600">91 &lt; 99 → low = 10</td></tr>
              <tr className="bg-red-50"><td className="border p-2 text-center">—</td><td className="border p-2 text-center font-bold text-red-600">10</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">—</td><td className="border p-2 text-center">—</td><td className="border p-2 text-red-600 font-bold">❌ low &gt; high → return -1</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📞 How to Call It</h2>
        <CodeBlock code={callCode} language="python" />
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="font-bold text-red-800 mb-3">⚠️ 5 Common Mistakes</h3>
        <div className="space-y-2 text-sm">
          <div className="flex gap-3"><span className="text-red-500">❌</span><div><code className="bg-red-100 px-1 rounded">high = len(data)</code> → <span className="text-green-700">✅ should be <code className="bg-green-100 px-1 rounded">len(data) - 1</code></span></div></div>
          <div className="flex gap-3"><span className="text-red-500">❌</span><div><code className="bg-red-100 px-1 rounded">mid = (low + high) / 2</code> → <span className="text-green-700">✅ use <code className="bg-green-100 px-1 rounded">//</code> not <code className="bg-red-100 px-1 rounded">/</code></span></div></div>
          <div className="flex gap-3"><span className="text-red-500">❌</span><div>Searching unsorted data → <span className="text-green-700">✅ ALWAYS sort first!</span></div></div>
          <div className="flex gap-3"><span className="text-red-500">❌</span><div><code className="bg-red-100 px-1 rounded">low = mid</code> instead of <code className="bg-red-100 px-1 rounded">low = mid + 1</code> → infinite loop!</div></div>
          <div className="flex gap-3"><span className="text-red-500">❌</span><div>Checking <code className="bg-red-100 px-1 rounded">result == 0</code> for not found → <span className="text-green-700">✅ check <code className="bg-green-100 px-1 rounded">result == -1</code></span></div></div>
        </div>
      </div>
    </div>
  );
}
