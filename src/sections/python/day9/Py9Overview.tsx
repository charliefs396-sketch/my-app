import CodeBlock from '../../../components/CodeBlock';

export default function Py9Overview() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
          🔍 Day 9: Linear Search in Python
        </h1>
        <p className="text-gray-500 text-lg mb-6">Python Track – Cambridge 9618</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
        <h3 className="text-xl font-bold text-emerald-800 mb-3">📌 What You Will Learn Today</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <span className="text-2xl">🔍</span>
            <h4 className="font-bold text-gray-800 mt-2">Linear Search</h4>
            <p className="text-sm text-gray-600">Search through a list one by one from start to end</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <span className="text-2xl">🔢</span>
            <h4 className="font-bold text-gray-800 mt-2">Count & Find All</h4>
            <p className="text-sm text-gray-600">Count occurrences and find ALL positions</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <span className="text-2xl">🔄</span>
            <h4 className="font-bold text-gray-800 mt-2">Pseudocode vs Python</h4>
            <p className="text-sm text-gray-600">Compare the two side by side</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">🃏 What is Linear Search?</h3>
        <p className="text-gray-700 mb-4">
          Imagine you have a <strong>deck of cards face down</strong>. You need to find the 7 of hearts.
          What do you do? You flip each card <strong>one by one from left to right</strong> until you find it.
          That is linear search!
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-amber-800">📝 Exam Definition:</p>
          <p className="text-amber-700">Linear search checks each element in a list <strong>sequentially from the first to the last</strong> until the target is found or the end of the list is reached.</p>
        </div>

        <h4 className="font-bold text-gray-800 mt-6 mb-3">👀 Visual Walkthrough</h4>
        <p className="text-gray-600 mb-3">Searching for <strong>"John"</strong> in ["Ali", "Sara", "John", "Maria", "Tom"]:</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
            <span className="font-mono font-bold text-red-600 w-16">i = 0</span>
            <span className="font-mono">data[0] = "Ali"</span>
            <span className="text-red-600 font-bold">≠ "John" → keep going</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
            <span className="font-mono font-bold text-red-600 w-16">i = 1</span>
            <span className="font-mono">data[1] = "Sara"</span>
            <span className="text-red-600 font-bold">≠ "John" → keep going</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <span className="font-mono font-bold text-green-600 w-16">i = 2</span>
            <span className="font-mono">data[2] = "John"</span>
            <span className="text-green-600 font-bold">= "John" → FOUND! Return 2</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">🔄 Pseudocode vs Python — Quick Compare</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-indigo-600 mb-2">📝 Pseudocode</p>
            <CodeBlock code={`FUNCTION LinearSearch(Data, Size, Target)
   FOR i ← 1 TO Size
      IF Data[i] = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   RETURN -1
ENDFUNCTION`} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-emerald-600 mb-2">🐍 Python</p>
            <CodeBlock code={`def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return i
    return -1`} language="python" />
          </div>
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800">🔑 Key Differences:</p>
          <ul className="text-amber-700 mt-2 space-y-1">
            <li>• Python uses <code className="bg-amber-100 px-1 rounded">range(len(data))</code> instead of <code className="bg-amber-100 px-1 rounded">1 TO Size</code></li>
            <li>• Python uses <code className="bg-amber-100 px-1 rounded">==</code> for comparison, pseudocode uses <code className="bg-amber-100 px-1 rounded">=</code></li>
            <li>• Python is <strong>0-indexed</strong>, pseudocode is <strong>1-indexed</strong></li>
            <li>• No ENDFUNCTION / NEXT i needed in Python</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-3xl mb-2">🏆</p>
          <p className="font-bold text-green-800">Best Case</p>
          <p className="text-green-700">Found at index 0</p>
          <p className="text-green-600 text-sm">1 comparison</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-3xl mb-2">📊</p>
          <p className="font-bold text-amber-800">Average Case</p>
          <p className="text-amber-700">Found in the middle</p>
          <p className="text-amber-600 text-sm">N/2 comparisons</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <p className="text-3xl mb-2">💀</p>
          <p className="font-bold text-red-800">Worst Case</p>
          <p className="text-red-700">Last element or not found</p>
          <p className="text-red-600 text-sm">N comparisons</p>
        </div>
      </div>
    </div>
  );
}