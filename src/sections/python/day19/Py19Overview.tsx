import CodeBlock from '../../../components/CodeBlock';

export default function Py19Overview() {
  const starter = `class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-3">
          🌳 Day 19: Binary Trees in Python
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Learn how binary trees store data in linked nodes, how a binary search tree keeps values ordered,
          and how insertion, searching, and in-order traversal work in Python.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card border-l-4 border-emerald-500">
          <h3 className="font-bold text-gray-900 mb-2">Node Structure</h3>
          <p className="text-sm text-gray-600">Each node stores <code>data</code>, a <code>left</code> link, and a <code>right</code> link.</p>
        </div>
        <div className="card border-l-4 border-cyan-500">
          <h3 className="font-bold text-gray-900 mb-2">BST Rule</h3>
          <p className="text-sm text-gray-600">Left subtree values are smaller. Right subtree values are greater or equal.</p>
        </div>
        <div className="card border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-900 mb-2">Traversal</h3>
          <p className="text-sm text-gray-600">In-order traversal visits nodes in sorted order for a BST.</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The basic node</h2>
        <CodeBlock language="python" code={starter} />
      </div>

      <div className="card bg-emerald-50 border border-emerald-200">
        <h3 className="font-bold text-emerald-900 mb-2">What you must understand for exam questions</h3>
        <ul className="list-disc pl-5 text-sm text-emerald-800 space-y-1">
          <li>How insertion decides to go left or right</li>
          <li>How recursive search follows one path down the tree</li>
          <li>Why in-order traversal prints values in ascending order</li>
          <li>How trees are different from lists and linked lists</li>
        </ul>
      </div>
    </div>
  );
}
