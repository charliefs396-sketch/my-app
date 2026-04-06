import CodeBlock from '../../../components/CodeBlock';

export default function Py18Overview() {
  const basicCode = `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent mb-3">
          🔗 Day 18: Linked Lists in Python
        </h1>
        <p className="text-gray-500 text-lg">Nodes, pointers, insert, search, delete, and how linked lists compare with Python lists.</p>
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-sky-900 mb-3">What is a linked list?</h2>
        <p className="text-sky-800 leading-relaxed mb-3">
          A linked list stores data in <strong>nodes</strong>. Each node holds a value and a link to the next node.
          Unlike a normal Python list, the items do not need to be stored next to each other in memory.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-xl p-4 border border-sky-100">
            <p className="font-bold text-sky-900 mb-1">Each node has:</p>
            <ul className="list-disc list-inside text-sky-800 space-y-1">
              <li><strong>data</strong> → the value stored</li>
              <li><strong>next</strong> → pointer to the next node</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 border border-sky-100">
            <p className="font-bold text-sky-900 mb-1">Main linked list idea:</p>
            <ul className="list-disc list-inside text-sky-800 space-y-1">
              <li><strong>head</strong> points to the first node</li>
              <li>last node points to <strong>None</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">First look</h2>
        <CodeBlock code={basicCode} language="python" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
          <h3 className="font-bold text-emerald-900 mb-3">Why use linked lists?</h3>
          <ul className="space-y-2 text-emerald-800 text-sm">
            <li>✅ Easy to insert at the front</li>
            <li>✅ Easy to delete if you know the position</li>
            <li>✅ Size can grow dynamically</li>
          </ul>
        </div>
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
          <h3 className="font-bold text-rose-900 mb-3">Why are they harder?</h3>
          <ul className="space-y-2 text-rose-800 text-sm">
            <li>❌ Harder to understand than lists</li>
            <li>❌ No direct indexing like data[3]</li>
            <li>❌ Need to follow pointers one by one</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
