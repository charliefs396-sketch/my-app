import CodeBlock from '../../../components/CodeBlock';

export default function Py9Variations() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🔢 Search Variations: Count & Find All
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">1️⃣ Count ALL Occurrences</h3>
        <p className="text-gray-600 mb-4">Sometimes you need to know HOW MANY times something appears, not just WHERE it is.</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-red-700">⚠️ The Key Difference: Do NOT use return inside the loop!</p>
          <p className="text-red-600">If you return early, you stop counting after the first match.</p>
        </div>

        <CodeBlock code={`def count_occurrences(data, target):
    count = 0
    for i in range(len(data)):
        if data[i] == target:
            count += 1
    return count

# Test it
numbers = [3, 7, 3, 1, 3, 9, 3, 5]
result = count_occurrences(numbers, 3)
print(f"3 appears {result} times")  # 3 appears 4 times`} language="python" />

        <h4 className="font-bold text-gray-800 mt-6 mb-3">📋 Trace Table:</h4>
        <p className="text-gray-600 mb-2">Counting 3 in [3, 7, 3, 1, 3, 9, 3, 5]:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border p-2">i</th>
                <th className="border p-2">data[i]</th>
                <th className="border p-2">== 3?</th>
                <th className="border p-2">count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50"><td className="border p-2 text-center">0</td><td className="border p-2 text-center">3</td><td className="border p-2 text-center text-green-600 font-bold">Yes</td><td className="border p-2 text-center font-bold">1</td></tr>
              <tr><td className="border p-2 text-center">1</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center text-red-600">No</td><td className="border p-2 text-center">1</td></tr>
              <tr className="bg-green-50"><td className="border p-2 text-center">2</td><td className="border p-2 text-center">3</td><td className="border p-2 text-center text-green-600 font-bold">Yes</td><td className="border p-2 text-center font-bold">2</td></tr>
              <tr><td className="border p-2 text-center">3</td><td className="border p-2 text-center">1</td><td className="border p-2 text-center text-red-600">No</td><td className="border p-2 text-center">2</td></tr>
              <tr className="bg-green-50"><td className="border p-2 text-center">4</td><td className="border p-2 text-center">3</td><td className="border p-2 text-center text-green-600 font-bold">Yes</td><td className="border p-2 text-center font-bold">3</td></tr>
              <tr><td className="border p-2 text-center">5</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center text-red-600">No</td><td className="border p-2 text-center">3</td></tr>
              <tr className="bg-green-50"><td className="border p-2 text-center">6</td><td className="border p-2 text-center">3</td><td className="border p-2 text-center text-green-600 font-bold">Yes</td><td className="border p-2 text-center font-bold">4</td></tr>
              <tr><td className="border p-2 text-center">7</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center text-red-600">No</td><td className="border p-2 text-center">4</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 mt-2">Returns: <code className="bg-gray-100 px-2 py-1 rounded font-mono">4</code></p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">2️⃣ Find ALL Positions</h3>
        <p className="text-gray-600 mb-4">Return a <strong>list of all indices</strong> where the target appears:</p>

        <CodeBlock code={`def find_all_positions(data, target):
    positions = []
    for i in range(len(data)):
        if data[i] == target:
            positions.append(i)
    return positions

# Test it
numbers = [3, 7, 3, 1, 3, 9, 3, 5]
result = find_all_positions(numbers, 3)
print(f"3 found at positions: {result}")
# Output: 3 found at positions: [0, 2, 4, 6]

if len(result) == 0:
    print("Not found anywhere")
else:
    print(f"Found {len(result)} times")`} language="python" />

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-800">💡 Key Pattern:</p>
          <ul className="text-blue-700 mt-2 space-y-1">
            <li>• Start with an empty list: <code className="bg-blue-100 px-1 rounded">positions = []</code></li>
            <li>• Use <code className="bg-blue-100 px-1 rounded">.append(i)</code> to add each matching index</li>
            <li>• Return the list AFTER the loop finishes</li>
            <li>• Check <code className="bg-blue-100 px-1 rounded">len(result) == 0</code> for not found</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">3️⃣ Case-Insensitive Search</h3>
        <CodeBlock code={`def search_ignore_case(data, target):
    target_lower = target.lower()
    for i in range(len(data)):
        if data[i].lower() == target_lower:
            return i
    return -1

# Test
names = ["Ali", "SARA", "john", "Maria"]
pos = search_ignore_case(names, "JOHN")
print(f"Found at index {pos}")  # Found at index 2`} language="python" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Quick Comparison: Which Version to Use?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Question</th>
                <th className="border p-3 text-left">Use This Version</th>
                <th className="border p-3 text-left">Returns</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border p-3">"Where is X?"</td>
                <td className="border p-3 font-mono">linear_search()</td>
                <td className="border p-3">int (index or -1)</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border p-3">"How many X are there?"</td>
                <td className="border p-3 font-mono">count_occurrences()</td>
                <td className="border p-3">int (count)</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="border p-3">"Where are ALL the X?"</td>
                <td className="border p-3 font-mono">find_all_positions()</td>
                <td className="border p-3">list of indices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}