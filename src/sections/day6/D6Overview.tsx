export default function D6Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📚 Day 6: 1D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science – Cambridge 9618 | Store, process and analyse lists of data</p>

      {/* What is an array */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 What is an Array?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Imagine you need to store <strong>10 student marks</strong>. Without arrays you'd need 10 separate variables:
        </p>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-red-700 font-mono text-sm font-semibold mb-1">❌ Without arrays (painful!):</p>
          <p className="font-mono text-red-800 text-sm">DECLARE Mark1 : INTEGER<br/>DECLARE Mark2 : INTEGER<br/>DECLARE Mark3 : INTEGER<br/>... 10 lines just to declare!</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <p className="text-green-700 font-mono text-sm font-semibold mb-1">✅ With arrays (clean!):</p>
          <p className="font-mono text-green-800 text-sm">DECLARE Marks : ARRAY[1:10] OF INTEGER<br/>// One line! All 10 marks stored.</p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          An <strong>array</strong> is a data structure that stores <strong>multiple values of the same data type</strong> under a single variable name. Each value is accessed using an <strong>index number</strong>.
        </p>
      </div>

      {/* Real world analogy */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 Real World Analogy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">🏢 Think of a block of flats</p>
            <p className="text-blue-700 text-sm">The building is the <strong>array name</strong> (e.g. Marks)</p>
            <p className="text-blue-700 text-sm">Each flat number is the <strong>index</strong> (e.g. [1], [2], [3]...)</p>
            <p className="text-blue-700 text-sm">Each flat holds one <strong>value</strong> (e.g. a student mark)</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {[72, 85, 61, 90, 78].map((mark, i) => (
                <div key={i} className="bg-blue-100 border border-blue-300 rounded-lg p-2 text-center">
                  <p className="text-xs text-blue-500 font-semibold">[{i+1}]</p>
                  <p className="font-bold text-blue-800">{mark}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-800 mb-2">📋 Key Properties</p>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>✅ All values must be the <strong>same data type</strong></li>
              <li>✅ Size is <strong>fixed</strong> when declared</li>
              <li>✅ Cambridge 9618 uses <strong>1-indexed</strong> (starts at 1, not 0)</li>
              <li>✅ Access any element using its index</li>
              <li>✅ Can be used with loops to process ALL values</li>
              <li>❌ Cannot mix types (e.g. INTEGER and STRING)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What you learn today */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 What You Learn Today</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="text-2xl mb-2">1️⃣</p>
            <h3 className="font-bold text-indigo-800 mb-1">Declaration & Population</h3>
            <p className="text-sm text-indigo-700">How to declare arrays correctly, populate them with FOR loops, and access individual elements</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-2xl mb-2">2️⃣</p>
            <h3 className="font-bold text-purple-800 mb-1">Finding Max, Min, Average</h3>
            <p className="text-sm text-purple-700">The standard patterns for finding highest, lowest, totals and averages — exam favourites!</p>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
            <p className="text-2xl mb-2">3️⃣</p>
            <h3 className="font-bold text-pink-800 mb-1">Parallel Arrays & Counting</h3>
            <p className="text-sm text-pink-700">Using two arrays together, counting above/below average, finding second largest</p>
          </div>
        </div>
      </div>

      {/* O Level vs A Level */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🆕 O Level vs A Level Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700 rounded-tl-lg">Topic</th>
                <th className="text-left p-3 font-bold text-orange-600">O Level</th>
                <th className="text-left p-3 font-bold text-indigo-600 rounded-tr-lg">A Level (9618)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-semibold text-gray-700">Declaration</td>
                <td className="p-3 text-orange-700">Sometimes implied</td>
                <td className="p-3 text-indigo-700">MUST use DECLARE with bounds and type</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold text-gray-700">Indexing</td>
                <td className="p-3 text-orange-700">May vary</td>
                <td className="p-3 text-indigo-700">Always 1-indexed unless stated otherwise</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-gray-700">Parallel Arrays</td>
                <td className="p-3 text-orange-700">Rarely tested</td>
                <td className="p-3 text-indigo-700">Frequently tested — must understand</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold text-gray-700">2-pass processing</td>
                <td className="p-3 text-orange-700">Basic only</td>
                <td className="p-3 text-indigo-700">Must know: input pass + processing pass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Big warning */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-5">
        <p className="font-bold text-red-800 text-lg mb-2">⚠️ The #1 Exam Mistake with Arrays</p>
        <p className="text-red-700 mb-2">Using index <strong>0</strong> instead of <strong>1</strong>!</p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-red-100 rounded-lg p-3">
            <p className="text-red-800 font-mono text-sm font-bold mb-1">❌ WRONG (Python style):</p>
            <p className="font-mono text-red-900 text-sm">FOR i ← 0 TO 9<br/>   INPUT Marks[i]<br/>NEXT i</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3">
            <p className="text-green-800 font-mono text-sm font-bold mb-1">✅ CORRECT (9618 style):</p>
            <p className="font-mono text-green-900 text-sm">FOR i ← 1 TO 10<br/>   INPUT Marks[i]<br/>NEXT i</p>
          </div>
        </div>
      </div>
    </div>
  );
}
