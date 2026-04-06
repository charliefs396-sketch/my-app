import CodeBlock from '../../components/CodeBlock';

export default function D27Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📥 Day 27: Insertion Sort
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 | The most intuitive sorting algorithm</p>

      {/* What is Insertion Sort */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🃏 What is Insertion Sort?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Insertion Sort works exactly like sorting playing cards in your hand. You pick up cards one by one and insert each new card into the correct position among the cards you've already sorted.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-fuchsia-50 rounded-xl p-4 border border-fuchsia-100">
            <p className="font-bold text-fuchsia-700 mb-2">🃏 Playing Cards Analogy</p>
            <ul className="text-sm text-fuchsia-800 space-y-1">
              <li>• Left hand = sorted portion</li>
              <li>• Right hand = unsorted portion</li>
              <li>• Pick card from right → insert into left</li>
              <li>• Shift cards right to make space</li>
              <li>• After N-1 picks → all sorted!</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <p className="font-bold text-purple-700 mb-2">💡 Key Idea</p>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Start: position 1 is "already sorted"</li>
              <li>• Take position 2 as the Key</li>
              <li>• Shift larger elements right</li>
              <li>• Drop Key into the gap</li>
              <li>• Repeat for positions 3, 4, 5...</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual Pass by Pass */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">👀 Visual: Sorting [5, 3, 8, 1, 9, 2]</h2>
        <div className="space-y-3">
          {[
            { pass: 'Start', array: '[5, 3, 8, 1, 9, 2]', key: '-', action: 'Position 1 is sorted', color: 'bg-gray-50 border-gray-200' },
            { pass: 'Pass 1', array: '[3, 5, 8, 1, 9, 2]', key: '3', action: 'Key=3, shift 5 right, insert 3 at pos 1', color: 'bg-fuchsia-50 border-fuchsia-200' },
            { pass: 'Pass 2', array: '[3, 5, 8, 1, 9, 2]', key: '8', action: 'Key=8, no shift needed (5 < 8)', color: 'bg-purple-50 border-purple-200' },
            { pass: 'Pass 3', array: '[1, 3, 5, 8, 9, 2]', key: '1', action: 'Key=1, shift 8,5,3 right, insert 1 at pos 1', color: 'bg-pink-50 border-pink-200' },
            { pass: 'Pass 4', array: '[1, 3, 5, 8, 9, 2]', key: '9', action: 'Key=9, no shift needed (8 < 9)', color: 'bg-indigo-50 border-indigo-200' },
            { pass: 'Pass 5', array: '[1, 2, 3, 5, 8, 9]', key: '2', action: 'Key=2, shift 9,8,5,3 right, insert 2 at pos 2', color: 'bg-green-50 border-green-200' },
          ].map((row, i) => (
            <div key={i} className={`rounded-xl p-3 border ${row.color} flex items-center gap-4`}>
              <span className="font-bold text-gray-700 w-16 text-sm flex-shrink-0">{row.pass}</span>
              <span className="font-mono text-sm font-bold w-44 flex-shrink-0">{row.array}</span>
              {row.key !== '-' && <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold flex-shrink-0">Key={row.key}</span>}
              <span className="text-xs text-gray-600">{row.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔑 Key Concepts to Know</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fuchsia-50">
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700 rounded-tl-lg">Term</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700">What it means</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-700 rounded-tr-lg">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Key', 'The element being inserted into the sorted portion', 'Key ← Data[i]'],
                ['j', 'Pointer scanning LEFT through sorted portion', 'j ← i - 1'],
                ['Shift', 'Move element RIGHT to make space', 'Data[j+1] ← Data[j]'],
                ['Insert', 'Place Key in the gap left by shifting', 'Data[j+1] ← Key'],
                ['BYREF', 'Array is passed by reference — original changes', 'BYREF Data : ARRAY'],
              ].map(([term, meaning, example], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-bold text-fuchsia-600">{term}</td>
                  <td className="px-4 py-3 text-gray-700">{meaning}</td>
                  <td className="px-4 py-3 font-mono text-xs bg-slate-800 text-cyan-300 rounded px-2">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insertion vs Bubble */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚔️ Insertion Sort vs Bubble Sort</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-bold text-gray-700">Feature</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-600">Insertion Sort</th>
                <th className="px-4 py-3 text-left font-bold text-blue-600">Bubble Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['How it works', 'Inserts into correct position', 'Bubbles largest to end'],
                ['Operation', 'SHIFT elements right', 'SWAP adjacent elements'],
                ['Best case', 'O(n) — already sorted!', 'O(n) — with Swapped flag'],
                ['Worst case', 'O(n²)', 'O(n²)'],
                ['Good for', 'Nearly sorted data', 'General purpose'],
                ['Temp variable', 'Key (the item to insert)', 'Temp (for 3-step swap)'],
              ].map(([feature, ins, bub], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-700">{feature}</td>
                  <td className="px-4 py-3 text-fuchsia-700">{ins}</td>
                  <td className="px-4 py-3 text-blue-700">{bub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The full procedure */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 The Full Procedure</h2>
        <CodeBlock code={`PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Key : INTEGER
   
   FOR i ← 2 TO Size
      Key ← Data[i]
      j ← i - 1
      WHILE j > 0 AND Data[j] > Key
         Data[j + 1] ← Data[j]
         j ← j - 1
      ENDWHILE
      Data[j + 1] ← Key
   NEXT i
ENDPROCEDURE`} language="pseudocode" />
      </div>

      {/* Exam importance */}
      <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-2xl border border-fuchsia-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">🎯 Exam Importance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { paper: 'Paper 1', content: 'Describe how insertion sort works, compare with bubble sort', color: 'bg-white border-fuchsia-200' },
            { paper: 'Paper 2', content: 'Trace tables showing Key, j, and array state after each pass', color: 'bg-white border-purple-200' },
            { paper: 'Paper 4', content: 'Write the full procedure, test with given data', color: 'bg-white border-pink-200' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border rounded-xl p-4`}>
              <p className="font-bold text-gray-800 mb-1">{item.paper}</p>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
