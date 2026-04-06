import CodeBlock from '../../../components/CodeBlock';

export default function Py9LinearSearch() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🔍 Writing Linear Search in Python
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📝 The Complete Function</h3>
        <CodeBlock code={`def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return i
    return -1`} language="python" />

        <h4 className="font-bold text-gray-800 mt-6 mb-3">Every Line Explained:</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Line</th>
                <th className="border p-3 text-left">Code</th>
                <th className="border p-3 text-left">What It Does</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-purple-50">
                <td className="border p-3 font-bold">1</td>
                <td className="border p-3 font-mono text-sm">def linear_search(data, target):</td>
                <td className="border p-3">Define function with list and target as parameters</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">2</td>
                <td className="border p-3 font-mono text-sm">for i in range(len(data)):</td>
                <td className="border p-3">Loop through every index: 0, 1, 2, ... len-1</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border p-3 font-bold">3</td>
                <td className="border p-3 font-mono text-sm">if data[i] == target:</td>
                <td className="border p-3">Check if current element matches target (use == not =)</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border p-3 font-bold">4</td>
                <td className="border p-3 font-mono text-sm">return i</td>
                <td className="border p-3">FOUND! Return the index and EXIT immediately</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border p-3 font-bold">5</td>
                <td className="border p-3 font-mono text-sm">return -1</td>
                <td className="border p-3">Loop finished without finding = NOT FOUND, return -1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ WHY range(len(data)) and NOT just "for x in data"?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-red-700 mb-2">❌ This gives you the VALUE only:</p>
            <CodeBlock code={`for x in data:
    if x == target:
        return ???  # We don't know the INDEX!`} language="python" />
          </div>
          <div>
            <p className="font-bold text-green-700 mb-2">✅ This gives you the INDEX:</p>
            <CodeBlock code={`for i in range(len(data)):
    if data[i] == target:
        return i  # We know the position!`} language="python" />
          </div>
        </div>
        <p className="text-red-700 mt-3 font-semibold">The exam wants you to return the POSITION (index), so you NEED range(len(data))!</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📞 How to CALL the Function</h3>
        <CodeBlock code={`# Test it
names = ["Ali", "Sara", "John", "Maria", "Tom"]
result = linear_search(names, "John")

if result != -1:
    print(f"Found at index {result}")
else:
    print("Not found")

# Works with integers too!
numbers = [5, 3, 8, 1, 9, 2]
pos = linear_search(numbers, 8)

if pos != -1:
    print(f"Found 8 at index {pos}")  # Found 8 at index 2
else:
    print("Not in list")`} language="python" />

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800">💡 Key Points:</p>
          <ul className="text-amber-700 mt-2 space-y-1">
            <li>• Always store the result: <code className="bg-amber-100 px-1 rounded">result = linear_search(...)</code></li>
            <li>• Always check if result is -1 before using it</li>
            <li>• Works with strings, integers, floats — any data type!</li>
            <li>• Remember: Python returns <strong>0-based index</strong> (first item = 0)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Full Trace Table</h3>
        <p className="text-gray-600 mb-3">Searching for <strong>"Maria"</strong> in ["Ali", "Sara", "John", "Maria", "Tom"]:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border p-3">i</th>
                <th className="border p-3">data[i]</th>
                <th className="border p-3">== "Maria"?</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="border p-3 text-center font-mono">0</td>
                <td className="border p-3 font-mono">"Ali"</td>
                <td className="border p-3 text-center text-red-600 font-bold">No</td>
                <td className="border p-3">Continue loop</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border p-3 text-center font-mono">1</td>
                <td className="border p-3 font-mono">"Sara"</td>
                <td className="border p-3 text-center text-red-600 font-bold">No</td>
                <td className="border p-3">Continue loop</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border p-3 text-center font-mono">2</td>
                <td className="border p-3 font-mono">"John"</td>
                <td className="border p-3 text-center text-red-600 font-bold">No</td>
                <td className="border p-3">Continue loop</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border p-3 text-center font-mono">3</td>
                <td className="border p-3 font-mono">"Maria"</td>
                <td className="border p-3 text-center text-green-600 font-bold">YES!</td>
                <td className="border p-3 text-green-700 font-bold">return 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 mt-3">Result: <code className="bg-gray-100 px-2 py-1 rounded font-mono">3</code> — Maria is at index 3</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">❌ Common Mistakes</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-bold text-red-700 mb-2">❌ Wrong: Using = instead of ==</p>
              <CodeBlock code={`if data[i] = target:  # SyntaxError!`} language="python" />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-bold text-green-700 mb-2">✅ Correct: Use ==</p>
              <CodeBlock code={`if data[i] == target:  # Comparison`} language="python" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-bold text-red-700 mb-2">❌ Wrong: return -1 inside the loop</p>
              <CodeBlock code={`for i in range(len(data)):
    if data[i] == target:
        return i
    else:
        return -1  # Quits after first element!`} language="python" />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-bold text-green-700 mb-2">✅ Correct: return -1 AFTER the loop</p>
              <CodeBlock code={`for i in range(len(data)):
    if data[i] == target:
        return i
return -1  # Only after checking ALL`} language="python" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}