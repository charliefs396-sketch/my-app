export default function Py16Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🐍 Day 16: Insertion Sort in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 | Python Track</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="font-bold text-indigo-800 text-lg mb-3">🃏 The Playing Cards Analogy</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Imagine you're holding cards in your hand. You pick up a new card and slide it into the correct position among your already-sorted cards. That's EXACTLY what insertion sort does — one element at a time, always keeping the left side sorted.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="font-bold text-emerald-800 text-lg mb-3">🔑 Key Concept</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><span className="text-emerald-600 font-bold">key</span><span className="text-gray-600">= current element being inserted</span></div>
            <div className="flex items-center gap-2"><span className="text-emerald-600 font-bold">j</span><span className="text-gray-600">= pointer scanning left through sorted part</span></div>
            <div className="flex items-center gap-2"><span className="text-emerald-600 font-bold">shift</span><span className="text-gray-600">= move elements right to make space</span></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">👁️ Visual: Sorting [12, 11, 13, 5, 6]</h3>
        <div className="space-y-2 font-mono text-sm">
          {[
            { pass: 'Start', arr: '[12, 11, 13, 5, 6]', note: 'unsorted' },
            { pass: 'Pass 1', arr: '[11, 12, 13, 5, 6]', note: 'key=11, shift 12 right' },
            { pass: 'Pass 2', arr: '[11, 12, 13, 5, 6]', note: 'key=13, no shift needed' },
            { pass: 'Pass 3', arr: '[5, 11, 12, 13, 6]', note: 'key=5, shift 11,12,13 right' },
            { pass: 'Pass 4', arr: '[5, 6, 11, 12, 13]', note: 'key=6, shift 11,12,13 right' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-indigo-600 font-bold w-16">{row.pass}</span>
              <span className="text-gray-900 w-44">{row.arr}</span>
              <span className="text-gray-500 text-xs">{row.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">🆚 Python vs Pseudocode — Key Differences</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Feature</th>
                <th className="px-4 py-2 text-left text-indigo-600">Python</th>
                <th className="px-4 py-2 text-left text-purple-600">Pseudocode</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Indexing', '0-indexed (starts at 0)', '1-indexed (starts at 1)'],
                ['Start i', 'range(1, len(data))', 'FOR i ← 2 TO Size'],
                ['j condition', 'j >= 0', 'j > 0'],
                ['Swap method', 'Shift elements', 'Shift elements'],
                ['BYREF', 'Lists passed by reference', 'BYREF keyword needed'],
              ].map(([feat, py, ps], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{feat}</td>
                  <td className="px-4 py-2 text-indigo-700 font-mono">{py}</td>
                  <td className="px-4 py-2 text-purple-700 font-mono">{ps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-3">📅 Day 16 Roadmap</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['📥 The Algorithm', '🔄 Variations', '❓ Exam FAQ', '✍️ Practice'].map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-3 text-center border border-amber-100">
              <p className="text-sm font-semibold text-gray-700">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
