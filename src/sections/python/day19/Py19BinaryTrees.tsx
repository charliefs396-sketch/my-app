import CodeBlock from '../../../components/CodeBlock';

export default function Py19BinaryTrees() {
  const code = `class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, data):
        if not self.root:
            self.root = TreeNode(data)
        else:
            self._insert(self.root, data)
    
    def _insert(self, node, data):
        if data < node.data:
            if not node.left:
                node.left = TreeNode(data)
            else:
                self._insert(node.left, data)
        else:
            if not node.right:
                node.right = TreeNode(data)
            else:
                self._insert(node.right, data)
    
    def in_order(self, node):
        if node:
            self.in_order(node.left)
            print(node.data, end=" ")
            self.in_order(node.right)
    
    def search(self, target):
        return self._search(self.root, target)
    
    def _search(self, node, target):
        if not node:
            return False
        if node.data == target:
            return True
        if target < node.data:
            return self._search(node.left, target)
        return self._search(node.right, target)`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">🌲 Binary Search Tree Implementation</h1>
        <p className="text-gray-600 max-w-3xl">
          This is the full Python implementation of a binary search tree. Read it as three main jobs:
          inserting values, traversing values, and searching for values.
        </p>
      </div>

      <CodeBlock language="python" code={code} />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-3">How insert works</h3>
          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
            <li>If the tree is empty, make the new value the root.</li>
            <li>If the new value is smaller than the current node, move left.</li>
            <li>If the new value is greater or equal, move right.</li>
            <li>Keep going until an empty child position is found.</li>
          </ol>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-3">How search works</h3>
          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
            <li>If the current node is empty, the value is not in the tree.</li>
            <li>If the current node matches the target, return <code>True</code>.</li>
            <li>If the target is smaller, search left.</li>
            <li>If the target is larger, search right.</li>
          </ol>
        </div>
      </div>

      <div className="card bg-sky-50 border border-sky-200">
        <h3 className="font-bold text-sky-900 mb-2">Why in-order traversal matters</h3>
        <p className="text-sm text-sky-800">
          The order is: left subtree → current node → right subtree. In a BST, that means the output is sorted.
        </p>
      </div>
    </div>
  );
}
