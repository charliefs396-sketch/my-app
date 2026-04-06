import CodeBlock from '../../../components/CodeBlock';

export default function Py10Overview() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🫧 Day 10: Bubble Sort in Python
      </h1>
      <p className="text-gray-500 text-lg mb-6">Python Programming – Cambridge 9618 Paper 4</p>

      <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl">
        <p className="font-bold text-emerald-800 text-lg">🎯 What You Will Learn Today</p>
        <ul className="mt-2 space-y-1 text-emerald-700">
          <li>✅ How Bubble Sort works step by step</li>
          <li>✅ Python swap trick: <code className="bg-emerald-100 px-1 rounded">a, b = b, a</code></li>
          <li>✅ The swapped flag optimization</li>
          <li>✅ Sorting descending and sorting tuples</li>
          <li>✅ Pseudocode vs Python comparison</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🫧 What is Bubble Sort?</h2>
        <p className="text-gray-700 mb-4">
          Bubble Sort compares <strong>adjacent pairs</strong> and swaps them if they are in the wrong order.
          The largest values "bubble up" to the end of the list like bubbles rising in water.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-xl text-center">
            <p className="text-3xl mb-2">🔄</p>
            <p className="font-bold text-blue-800">Compare Adjacent</p>
            <p className="text-sm text-blue-600">Look at pairs side by side</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl text-center">
            <p className="text-3xl mb-2">↕️</p>
            <p className="font-bold text-purple-800">Swap if Wrong</p>
            <p className="text-sm text-purple-600">Bigger goes right</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl text-center">
            <p className="text-3xl mb-2">🫧</p>
            <p className="font-bold text-green-800">Bubble Up</p>
            <p className="text-sm text-green-600">Largest reaches the end</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🐍 Quick Taste</h2>
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
    return data

# Test
numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(numbers)
print(numbers)  # [11, 12, 22, 25, 34, 64, 90]`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 vs Pseudocode</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold">Feature</th>
                <th className="p-3 text-left font-bold">Pseudocode</th>
                <th className="p-3 text-left font-bold">Python</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-medium">Swap</td><td className="p-3"><code>Temp ← Data[j]</code> (3 lines)</td><td className="p-3"><code>a, b = b, a</code> (1 line!)</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Outer loop</td><td className="p-3"><code>FOR i ← 1 TO Size-1</code></td><td className="p-3"><code>for i in range(n-1)</code></td></tr>
              <tr><td className="p-3 font-medium">Inner loop</td><td className="p-3"><code>FOR j ← 1 TO Size-i</code></td><td className="p-3"><code>for j in range(n-1-i)</code></td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Early exit</td><td className="p-3"><code>IF NOT Swapped THEN RETURN</code></td><td className="p-3"><code>if not swapped: break</code></td></tr>
              <tr><td className="p-3 font-medium">Pass by ref</td><td className="p-3"><code>BYREF</code> keyword needed</td><td className="p-3">Lists passed by reference automatically!</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
        <p className="font-bold text-amber-800">⚠️ Key Difference from Pseudocode</p>
        <p className="text-amber-700 mt-1">
          Python swaps in <strong>one line</strong>: <code className="bg-amber-100 px-1 rounded">data[j], data[j+1] = data[j+1], data[j]</code>.
          No Temp variable needed! But you MUST understand the 3-line Temp swap for Paper 2 pseudocode.
        </p>
      </div>
    </div>
  );
}