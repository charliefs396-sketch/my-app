export default function D26Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔍 Day 26: Binary Search
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge 9618 – A Level Computer Science</p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What is Binary Search?</h2>
        <p className="text-gray-700 mb-4">
          Binary Search is a fast searching algorithm that works on <strong>sorted arrays</strong>. Instead of checking every element one by one (like Linear Search), it repeatedly cuts the search area in half.
        </p>
        <div className="bg-white rounded-lg p-4 border border-indigo-100">
          <p className="text-gray-700 font-semibold mb-2">📖 Real-world analogy:</p>
          <p className="text-gray-600">Think of finding a word in a dictionary. You don't start from page 1 — you open to the middle, decide if your word comes before or after, then repeat with half the pages. That's Binary Search!</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 className="font-bold text-red-800 mb-3">🐌 Linear Search (Day 8)</h3>
          <ul className="space-y-1 text-red-700 text-sm">
            <li>• Check element 1, then 2, then 3...</li>
            <li>• Works on unsorted data</li>
            <li>• Worst case: check ALL N elements</li>
            <li>• 1,000,000 elements → up to 1,000,000 checks</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-800 mb-3">🚀 Binary Search (Today)</h3>
          <ul className="space-y-1 text-green-700 text-sm">
            <li>• Jump to middle, halve the search area</li>
            <li>• Data MUST be sorted first</li>
            <li>• Worst case: log₂(N) steps only</li>
            <li>• 1,000,000 elements → only 20 checks!</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-800 mb-4">👁️ Visual Step-Through — Finding 31 in a sorted array</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 font-semibold">Index</th>
                {[1,2,3,4,5,6,7,8].map(i => <th key={i} className="p-2 text-center font-semibold">{i}</th>)}
              </tr>
              <tr className="bg-gray-50">
                <th className="text-left p-2 font-semibold">Value</th>
                {[5,12,18,23,31,45,67,89].map((v,i) => <th key={i} className="p-2 text-center font-semibold">{v}</th>)}
              </tr>
            </thead>
          </table>
        </div>
        <div className="space-y-3">
          {[
            { pass: 1, low: 1, high: 8, mid: 4, val: 23, action: '31 > 23 → search RIGHT half', color: 'bg-blue-50 border-blue-200' },
            { pass: 2, low: 5, high: 8, mid: 6, val: 45, action: '31 < 45 → search LEFT half', color: 'bg-purple-50 border-purple-200' },
            { pass: 3, low: 5, high: 5, mid: 5, val: 31, action: '31 = 31 → FOUND at index 5! ✅', color: 'bg-green-50 border-green-200' },
          ].map((row, i) => (
            <div key={i} className={`border rounded-lg p-3 ${row.color}`}>
              <div className="grid grid-cols-5 gap-2 text-sm">
                <div><span className="font-bold">Pass {row.pass}</span></div>
                <div>Low = {row.low}</div>
                <div>High = {row.high}</div>
                <div>Mid = {row.mid} (value: {row.val})</div>
                <div className="font-semibold">{row.action}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-3">Found in just <strong>3 passes</strong> instead of checking all 8 elements!</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-amber-800 mb-3">⚠️ THE GOLDEN RULE</h3>
        <p className="text-amber-700 text-lg font-semibold">Data MUST be sorted before Binary Search can work!</p>
        <p className="text-amber-600 text-sm mt-1">If the array is unsorted, Binary Search gives wrong results. Always sort first (e.g., with Bubble Sort from Day 9).</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-800 mb-4">📅 Day 26 Roadmap</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '🔍', label: 'The Algorithm', desc: 'Full FUNCTION with every line explained' },
            { icon: '📋', label: 'Trace Tables', desc: 'Found + Not Found + Left half examples' },
            { icon: '❓', label: 'Exam FAQ', desc: '8 common exam mistakes and fixes' },
            { icon: '✍️', label: 'Practice', desc: '4 exercises with hints and solutions' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions to test your knowledge' },
            { icon: '📋', label: 'Cheatsheet', desc: 'Full reference + template' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
