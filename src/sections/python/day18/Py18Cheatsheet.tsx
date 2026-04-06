import CodeBlock from '../../../components/CodeBlock';

export default function Py18Cheatsheet() {
  const template = `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">📋 Cheatsheet</h1>
        <p className="text-gray-600 text-lg">Quick linked list summary for revision.</p>
      </div>

      <CodeBlock code={template} language="python" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-900 mb-3">Must remember</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Node = data + next</li>
            <li>head points to first node</li>
            <li>Last node points to None</li>
            <li>Insert at front is very easy</li>
            <li>Search needs traversal</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-900 mb-3">Common mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Forgetting <code>self</code></li>
            <li>Forgetting to move <code>current = current.next</code></li>
            <li>Not checking empty list before delete</li>
            <li>Confusing Python list with linked list</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
