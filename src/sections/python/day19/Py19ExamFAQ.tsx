export default function Py19ExamFAQ() {
  const faqs = [
    ['Why is it called a binary tree?', 'Because each node can have at most two children: left and right.'],
    ['What makes it a binary search tree?', 'The BST rule: smaller values on the left, larger or equal values on the right.'],
    ['Why use recursion here?', 'Trees are naturally recursive because each subtree is itself a smaller tree.'],
    ['What does in-order traversal do?', 'It visits left, node, right. In a BST this gives sorted output.'],
    ['What happens if the tree is empty?', 'The root is None, so insert creates the first node and search returns False.'],
    ['Why does search not check both sides?', 'Because the BST rule tells us exactly which side might contain the target.'],
    ['What is the difference between head and root?', 'Head is used in linked lists. Root is used in trees.'],
    ['Can duplicate values go in the tree?', 'Yes, in this version duplicates go to the right side.'],
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">❓ Day 19 Exam FAQ</h1>
        <p className="text-gray-600">Quick answers to the most common binary tree questions.</p>
      </div>

      <div className="space-y-4">
        {faqs.map(([q, a], i) => (
          <div key={i} className="card">
            <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
            <p className="text-sm text-gray-700">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
