export default function D26TraceTable() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Binary Search Trace Tables</h1>
      <p className="text-gray-500 mb-8">The most exam-tested skill for Binary Search</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-indigo-800 mb-2">📝 Trace Table Format — Use Exactly This</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-indigo-100">
              <tr>
                {['Pass', 'Low', 'High', 'Mid', 'Data[Mid]', 'Action'].map(h => (
                  <th key={h} className="p-3 text-left font-bold text-indigo-800">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="p-3 text-gray-400 italic" colSpan={6}>Your trace rows go here...</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-indigo-700 text-sm mt-2 font-semibold">Always use these 6 columns in your exam trace table!</p>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-2">✅ Example 1 — FOUND (Target = 31)</h3>
        <p className="text-gray-600 text-sm mb-3">Array: [5, 12, 18, 23, 31, 45, 67, 89] — Size = 8</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
            <thead className="bg-green-50">
              <tr>
                {['Pass', 'Low', 'High', 'Mid', 'Data[Mid]', 'Action'].map(h => (
                  <th key={h} className="p-3 text-left font-bold text-green-800">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Start', 1, 8, '-', '-', 'Initialise'],
                [1, 1, 8, '(1+8) DIV 2 = 4', 23, '31 > 23 → Low = Mid + 1 = 5'],
                [2, 5, 8, '(5+8) DIV 2 = 6', 45, '31 < 45 → High = Mid - 1 = 5'],
                [3, 5, 5, '(5+5) DIV 2 = 5', 31, '31 = 31 → RETURN 5 ✅'],
              ].map((row, i) => (
                <tr key={i} className={i === 3 ? 'bg-green-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-green-700 font-semibold mt-2 text-sm">✅ Found at index 5 in just 3 passes!</p>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-2">❌ Example 2 — NOT FOUND (Target = 20)</h3>
        <p className="text-gray-600 text-sm mb-3">Array: [5, 12, 18, 23, 31, 45, 67, 89] — Size = 8</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
            <thead className="bg-red-50">
              <tr>
                {['Pass', 'Low', 'High', 'Mid', 'Data[Mid]', 'Action'].map(h => (
                  <th key={h} className="p-3 text-left font-bold text-red-800">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Start', 1, 8, '-', '-', 'Initialise'],
                [1, 1, 8, 4, 23, '20 < 23 → High = Mid - 1 = 3'],
                [2, 1, 3, 2, 12, '20 > 12 → Low = Mid + 1 = 3'],
                [3, 3, 3, 3, 18, '20 > 18 → Low = Mid + 1 = 4'],
                ['Check', 4, 3, '-', '-', 'Low (4) > High (3) → EXIT WHILE → RETURN -1 ❌'],
              ].map((row, i) => (
                <tr key={i} className={i === 4 ? 'bg-red-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-red-700 font-semibold mt-2 text-sm">❌ Not found — RETURN -1. Loop exits when Low &gt; High.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-800 mb-4">⚡ Efficiency Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Array Size (N)', 'Linear Search (worst)', 'Binary Search (worst)', 'Binary is faster by'].map(h => (
                  <th key={h} className="p-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [8, 8, 3, '2.7x'],
                [16, 16, 4, '4x'],
                [100, 100, 7, '14x'],
                [1000, 1000, 10, '100x'],
                ['1,000,000', '1,000,000', 20, '50,000x'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-3 ${j === 3 ? 'text-green-600 font-bold' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-3">💡 Exam Tips for Trace Tables</h3>
        <ul className="space-y-2 text-amber-700 text-sm">
          <li>• Always show the <strong>Start row</strong> with initial values (Low=1, High=Size)</li>
          <li>• Show the <strong>Mid calculation</strong> in full: (Low + High) DIV 2</li>
          <li>• Show the <strong>Data[Mid] value</strong> — look it up in the array</li>
          <li>• For NOT FOUND: show the row where <strong>Low &gt; High</strong> and write "EXIT WHILE"</li>
          <li>• Write <strong>RETURN -1</strong> clearly to get the mark for not-found case</li>
        </ul>
      </div>
    </div>
  );
}
