import CodeBlock from '../../../components/CodeBlock';

export default function Py19Cheatsheet() {
  const mini = `class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">📋 Day 19 Cheatsheet</h1>
        <p className="text-gray-600">A quick summary for revision.</p>
      </div>

      <div className="card">
        <h3 className="font-bold mb-3">Node template</h3>
        <CodeBlock language="python" code={mini} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold mb-3">Key rules</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Root is the first node.</li>
            <li>Each node has left and right references.</li>
            <li>BST: left smaller, right larger or equal.</li>
            <li>In-order traversal gives sorted output.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold mb-3">Must-know methods</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>insert</li>
            <li>search</li>
            <li>in_order traversal</li>
            <li>delete (basic linked change idea)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
