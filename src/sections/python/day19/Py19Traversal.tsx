import CodeBlock from '../../../components/CodeBlock';

export default function Py19Traversal() {
  const testCode = `tree = BST()
for v in [5, 3, 7, 1, 4, 6, 8]:
    tree.insert(v)

tree.in_order(tree.root)    # 1 3 4 5 6 7 8
print(tree.search(6))       # True
print(tree.search(10))      # False`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">🔍 Traversal & Trace</h1>
        <p className="text-gray-600 max-w-3xl">
          The easiest way to understand trees is to build one and trace how the recursive methods move through it.
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Build and test the tree</h2>
        <CodeBlock language="python" code={testCode} />
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-3">Tree after insertion</h3>
        <div className="bg-slate-900 text-emerald-300 rounded-xl p-5 font-mono text-sm overflow-x-auto">
{`        5
      /   \
     3     7
    / \   / \
   1   4 6   8`}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold mb-3">Trace: search(6)</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Start at 5 → 6 is bigger, go right</li>
            <li>At 7 → 6 is smaller, go left</li>
            <li>At 6 → found, return <code>True</code></li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold mb-3">Trace: in-order traversal</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Go all the way left first</li>
            <li>Print the node</li>
            <li>Then move to the right subtree</li>
            <li>Output becomes: 1 3 4 5 6 7 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
