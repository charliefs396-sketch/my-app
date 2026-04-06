export default function D15Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔗 Day 15: Linked Lists
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science – Cambridge 9618 | Paper 2 Topic</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '🔗', title: 'Linked List', desc: 'Nodes connected by pointers — not stored in order in memory', color: 'bg-indigo-50 border-indigo-200' },
          { icon: '📦', title: 'Node', desc: 'Each node has DATA and a POINTER to the next node', color: 'bg-purple-50 border-purple-200' },
          { icon: '🆓', title: 'Free List', desc: 'Available spaces tracked with FreePointer — reuse deleted nodes', color: 'bg-pink-50 border-pink-200' },
        ].map((c, i) => (
          <div key={i} className={`p-4 rounded-xl border-2 ${c.color}`}>
            <div className="text-3xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 What is a Linked List?</h2>
        <p className="text-gray-700 mb-4">A linked list is a <strong>dynamic data structure</strong> where each element (node) contains data AND a pointer to the next node. Unlike arrays, nodes are NOT stored in consecutive memory locations.</p>
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <p className="text-sm font-bold text-gray-600 mb-3">Visual: Linked List storing "Cat" → "Dog" → "Fox"</p>
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { idx: 1, data: 'Cat', ptr: 3 },
              { idx: 2, data: 'Fox', ptr: 0 },
              { idx: 3, data: 'Dog', ptr: 2 },
            ].map((node) => (
              <div key={node.idx} className="flex items-center gap-1">
                <div className="bg-white border-2 border-indigo-300 rounded-lg p-2 text-center min-w-[80px]">
                  <div className="text-xs text-gray-500">Index [{node.idx}]</div>
                  <div className="font-bold text-indigo-700">{node.data}</div>
                  <div className="text-xs text-purple-600">ptr→{node.ptr === 0 ? 'NULL' : node.ptr}</div>
                </div>
                {node.ptr !== 0 && <span className="text-indigo-400 font-bold">→</span>}
              </div>
            ))}
            <div className="bg-gray-200 rounded-lg p-2 text-center min-w-[60px]">
              <div className="text-xs text-gray-500">NULL</div>
              <div className="font-bold text-gray-500">END</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">StartPointer = 1 (points to "Cat"). Traversal: 1→3→2→NULL</p>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Array vs Linked List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold">Feature</th>
                <th className="text-left p-3 font-bold text-blue-600">Array</th>
                <th className="text-left p-3 font-bold text-purple-600">Linked List</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Size', 'Fixed at declaration', 'Dynamic (can grow/shrink)'],
                ['Memory', 'Contiguous (next to each other)', 'Scattered (anywhere)'],
                ['Access', 'Direct: Names[5] is instant', 'Must traverse from start'],
                ['Insert', 'Shift all elements — slow', 'Just change pointers — fast'],
                ['Delete', 'Shift all elements — slow', 'Just change pointers — fast'],
                ['Search', 'Binary search if sorted', 'Linear search only'],
              ].map(([f, a, l], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-semibold text-gray-700">{f}</td>
                  <td className="p-3 text-blue-700">{a}</td>
                  <td className="p-3 text-purple-700">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">📋 What You Need for the Exam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            '✅ Define a Node using TYPE with Data and Pointer fields',
            '✅ Understand StartPointer and FreePointer roles',
            '✅ Initialise the free list with a FOR loop',
            '✅ InsertAtStart procedure — all 5 steps',
            '✅ Traverse with WHILE Current <> 0',
            '✅ Trace insertions showing array state',
            '✅ State 3 advantages of linked list over array',
            '✅ Know NULL = 0 in Cambridge pseudocode',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
              <span className="text-green-600 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ The Golden Rules</h3>
        <ul className="space-y-1 text-amber-700 text-sm">
          <li>• <strong>NULL = 0</strong> in Cambridge pseudocode (pointer 0 means "no next node")</li>
          <li>• <strong>StartPointer = 0</strong> means the list is EMPTY</li>
          <li>• <strong>FreePointer = 0</strong> means the list is FULL (no free spaces)</li>
          <li>• You must check FreePointer before inserting!</li>
        </ul>
      </div>
    </div>
  );
}
