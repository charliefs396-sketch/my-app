export default function D14Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🚶 Day 14: Queues
      </h1>
      <p className="text-gray-500 text-lg mb-8">Abstract Data Types – Cambridge A Level 9618</p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-emerald-800 mb-3">🧠 What is a Queue?</h2>
        <p className="text-gray-700 mb-3">A <strong>Queue</strong> is a data structure that works like a real-world queue (line of people). Items join at the BACK and leave from the FRONT.</p>
        <p className="text-gray-700">This is called <strong>FIFO — First In First Out</strong>. The first person to join the queue is the first to be served.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
          <h3 className="font-bold text-emerald-700 text-lg mb-4">🏪 Real World Analogy</h3>
          <div className="space-y-2">
            {[
              { icon: '🏪', text: 'Supermarket checkout — first in line served first' },
              { icon: '🖨️', text: 'Printer queue — first document sent prints first' },
              { icon: '📞', text: 'Call centre — first caller to wait is answered first' },
              { icon: '🎢', text: 'Theme park ride — queue up, front leaves first' },
              { icon: '📨', text: 'Email inbox — messages processed in order received' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-emerald-50 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
          <h3 className="font-bold text-teal-700 text-lg mb-4">📋 Key Terminology</h3>
          <div className="space-y-3">
            {[
              { term: 'FIFO', def: 'First In First Out — the fundamental rule', color: 'bg-emerald-100 text-emerald-700' },
              { term: 'Enqueue', def: 'Add an item to the BACK of the queue', color: 'bg-green-100 text-green-700' },
              { term: 'Dequeue', def: 'Remove an item from the FRONT of the queue', color: 'bg-blue-100 text-blue-700' },
              { term: 'Front', def: 'Pointer to the first item (to be removed)', color: 'bg-yellow-100 text-yellow-700' },
              { term: 'Rear', def: 'Pointer to the last item added', color: 'bg-orange-100 text-orange-700' },
              { term: 'Size', def: 'Number of items currently in the queue', color: 'bg-purple-100 text-purple-700' },
              { term: 'Circular', def: 'Queue that wraps around using MOD', color: 'bg-pink-100 text-pink-700' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`px-2 py-0.5 rounded font-bold text-xs ${item.color} whitespace-nowrap mt-0.5`}>{item.term}</span>
                <span className="text-gray-600 text-sm">{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack vs Queue */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4">⚖️ Stack vs Queue — Know the Difference!</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left text-indigo-700">Stack</th>
                <th className="p-3 text-left text-emerald-700">Queue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feat: 'Rule', stack: 'LIFO — Last In First Out', queue: 'FIFO — First In First Out' },
                { feat: 'Add operation', stack: 'Push (to TOP)', queue: 'Enqueue (to REAR)' },
                { feat: 'Remove operation', stack: 'Pop (from TOP)', queue: 'Dequeue (from FRONT)' },
                { feat: 'Pointers', stack: 'TopPointer only', queue: 'Front AND Rear AND Size' },
                { feat: 'Real example', stack: 'Undo button, browser back', queue: 'Printer queue, call centre' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-bold text-gray-700">{row.feat}</td>
                  <td className="p-3 text-indigo-700">{row.stack}</td>
                  <td className="p-3 text-emerald-700">{row.queue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-amber-800 font-bold text-sm">⚠️ A Level Exam Note</p>
        <p className="text-amber-700 text-sm mt-1">Queues appear in <strong>Paper 1 (theory)</strong> and <strong>Paper 2 (problem solving)</strong>. The <strong>circular queue</strong> is a key A Level concept — you MUST understand the MOD formula for Rear and Front pointers!</p>
      </div>
    </div>
  );
}
