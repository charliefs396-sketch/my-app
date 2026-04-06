export default function Py13Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🥞 Day 13: Stack in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level CS 9618 – Python Track</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '🥞', title: 'LIFO', desc: 'Last In First Out — like a stack of plates' },
          { icon: '⬆️', title: 'Push', desc: 'Add item to top of stack' },
          { icon: '⬇️', title: 'Pop', desc: 'Remove item from top of stack' },
        ].map((c) => (
          <div key={c.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl mb-2">{c.icon}</div>
            <div className="font-bold text-gray-900">{c.title}</div>
            <div className="text-sm text-gray-500 mt-1">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3">
          <h2 className="text-white font-bold text-lg">Pseudocode vs Python</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Operation</th>
                <th className="px-4 py-3 text-left font-semibold text-indigo-700">Pseudocode</th>
                <th className="px-4 py-3 text-left font-semibold text-emerald-700">Python</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Push item', 'CALL Push("A")', 'push("A")'],
                ['Pop item', 'Item ← Pop()', 'item = pop()'],
                ['Peek top', 'Item ← Peek()', 'item = peek()'],
                ['Check empty', 'IF TopPointer = 0', 'if is_empty():'],
                ['Check full', 'IF TopPointer = MAXSIZE', 'if top == MAXSIZE - 1:'],
                ['Top pointer', 'TopPointer ← 0', 'top = -1'],
              ].map(([op, ps, py]) => (
                <tr key={op} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">{op}</td>
                  <td className="px-4 py-3 font-mono text-xs text-indigo-700 bg-indigo-50">{ps}</td>
                  <td className="px-4 py-3 font-mono text-xs text-emerald-700 bg-emerald-50">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ Key Difference from Pseudocode</h3>
        <p className="text-amber-700 text-sm">In Pseudocode: <code className="bg-amber-100 px-1 rounded">TopPointer ← 0</code> means empty (1-indexed)<br/>
        In Python: <code className="bg-amber-100 px-1 rounded">top = -1</code> means empty (0-indexed)</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">📅 Day 13 Sections</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '🎯', title: 'Overview', desc: 'LIFO concept, pseudocode vs Python' },
            { icon: '📚', title: 'Stack Implementation', desc: 'Your exact code explained line by line' },
            { icon: '🔧', title: 'Applications', desc: 'Reverse string, balanced brackets' },
            { icon: '❓', title: 'Exam FAQ', desc: '8 common exam questions' },
            { icon: '✍️', title: 'Practice', desc: '4 exercises with solutions' },
            { icon: '🧠', title: 'Quiz', desc: '12 questions with scoring' },
            { icon: '📋', title: 'Cheatsheet', desc: 'Full reference + checklist' },
          ].map((s) => (
            <div key={s.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">{s.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
