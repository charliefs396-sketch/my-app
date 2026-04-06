export default function Py15Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-3">
        🔍 Day 15: Binary Search in Python
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618 | Python Track</p>

      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-cyan-800 mb-3">📖 The Dictionary Analogy</h2>
        <p className="text-gray-700 mb-3">Imagine searching for the word <strong>"Python"</strong> in a dictionary. You don't start from page 1! You:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Open the dictionary in the <strong>middle</strong></li>
          <li>If "Python" comes AFTER the middle word → search the <strong>right half</strong></li>
          <li>If "Python" comes BEFORE → search the <strong>left half</strong></li>
          <li>Repeat until found or not found</li>
        </ol>
        <p className="text-cyan-700 font-semibold mt-3">That's exactly what Binary Search does! 🎯</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🔢 Visual Step-Through</h2>
        <p className="text-gray-600 mb-3">Searching for <strong>23</strong> in <code className="bg-gray-100 px-1 rounded">[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code></p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cyan-100">
                <th className="border border-cyan-200 p-2">Pass</th>
                <th className="border border-cyan-200 p-2">low</th>
                <th className="border border-cyan-200 p-2">high</th>
                <th className="border border-cyan-200 p-2">mid</th>
                <th className="border border-cyan-200 p-2">data[mid]</th>
                <th className="border border-cyan-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2 text-center">1</td><td className="border p-2 text-center">0</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">4</td><td className="border p-2 text-center">16</td><td className="border p-2 text-center text-blue-600">16 &lt; 23 → low = 5</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 text-center">2</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">56</td><td className="border p-2 text-center text-orange-600">56 &gt; 23 → high = 6</td></tr>
              <tr><td className="border p-2 text-center">3</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center">6</td><td className="border p-2 text-center">5</td><td className="border p-2 text-center font-bold text-green-600">23</td><td className="border p-2 text-center text-green-600">✅ FOUND! Return 5</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-bold text-green-800">Very Fast</h3>
          <p className="text-sm text-green-700">10 items = max 4 checks<br/>1000 items = max 10 checks<br/>1,000,000 = max 20 checks</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">⚠️</div>
          <h3 className="font-bold text-red-800">Must Be Sorted!</h3>
          <p className="text-sm text-red-700">Data MUST be sorted first<br/>Otherwise gives wrong results<br/>This is the golden rule!</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">0️⃣</div>
          <h3 className="font-bold text-blue-800">0-Indexed</h3>
          <p className="text-sm text-blue-700">Python starts at index 0<br/>Pseudocode starts at 1<br/>Key exam difference!</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Pseudocode vs Python</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100"><th className="border p-2">Feature</th><th className="border p-2">Pseudocode</th><th className="border p-2">Python</th></tr></thead>
            <tbody>
              <tr><td className="border p-2">First index</td><td className="border p-2">1</td><td className="border p-2 font-bold text-blue-600">0</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">Last index</td><td className="border p-2">Size</td><td className="border p-2 font-bold text-blue-600">len(data) - 1</td></tr>
              <tr><td className="border p-2">Integer division</td><td className="border p-2">DIV</td><td className="border p-2 font-bold text-blue-600">//</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">Not equal</td><td className="border p-2">&lt;&gt;</td><td className="border p-2 font-bold text-blue-600">!=</td></tr>
              <tr><td className="border p-2">Not found return</td><td className="border p-2">RETURN -1</td><td className="border p-2 font-bold text-blue-600">return -1</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">WHILE condition</td><td className="border p-2">Low &lt;= High</td><td className="border p-2 font-bold text-blue-600">low &lt;= high</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <h3 className="font-bold text-indigo-800 mb-2">📅 Day 15 Roadmap</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-indigo-700">
          <div>🔍 Binary Search — the exact code</div>
          <div>📋 Trace Tables — FOUND and NOT FOUND</div>
          <div>🔄 Variations — strings, True/False</div>
          <div>❓ Exam FAQ — every common mistake</div>
          <div>✍️ Practice — 4 exercises</div>
          <div>📋 Cheatsheet — full reference</div>
        </div>
      </div>
    </div>
  );
}
