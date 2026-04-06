export default function Py14Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        🎯 Day 14: Queue in Python
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '🚶', title: 'FIFO', desc: 'First In, First Out — like a real queue' },
          { icon: '➕', title: 'Enqueue', desc: 'Add to the REAR of the queue' },
          { icon: '➖', title: 'Dequeue', desc: 'Remove from the FRONT of the queue' },
        ].map((c) => (
          <div key={c.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl mb-2">{c.icon}</div>
            <div className="font-bold text-gray-900">{c.title}</div>
            <div className="text-sm text-gray-500 mt-1">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Queue vs Stack</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-bold">Feature</th>
                <th className="px-4 py-2 text-left font-bold text-purple-600">Stack</th>
                <th className="px-4 py-2 text-left font-bold text-emerald-600">Queue</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Order', 'LIFO (Last In First Out)', 'FIFO (First In First Out)'],
                ['Add', 'Push (to top)', 'Enqueue (to rear)'],
                ['Remove', 'Pop (from top)', 'Dequeue (from front)'],
                ['Analogy', 'Stack of plates', 'Queue at a shop'],
                ['Pointer', 'top = -1', 'front=0, rear=-1, size=0'],
                ['Overflow', 'top == MAXSIZE-1', 'size == MAXSIZE'],
                ['Underflow', 'top == -1', 'size == 0'],
              ].map(([f, s, q], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{f}</td>
                  <td className="px-4 py-2 text-purple-700">{s}</td>
                  <td className="px-4 py-2 text-emerald-700">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <div className="font-bold text-amber-800 mb-2">⚠️ Key Concept: Circular Queue</div>
        <p className="text-amber-700 text-sm">Python uses <code className="bg-amber-100 px-1 rounded">% MAXSIZE</code> (modulo) to wrap around the array. This prevents wasted space when items are dequeued from the front.</p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📅 Day 14 Roadmap</h2>
        <div className="space-y-2">
          {[
            { icon: '🔧', label: 'Queue Implementation', desc: 'enqueue, dequeue, peek, is_empty' },
            { icon: '🔄', label: 'Circular Queue', desc: 'MOD wrapping, visual diagrams' },
            { icon: '❓', label: 'Exam FAQ', desc: 'Common mistakes and exam tips' },
            { icon: '✍️', label: 'Practice', desc: '3 exercises with hints & solutions' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions to test yourself' },
            { icon: '📋', label: 'Cheatsheet', desc: 'Everything on one page' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">{s.icon}</span>
              <div>
                <div className="font-semibold text-gray-900">{s.label}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
