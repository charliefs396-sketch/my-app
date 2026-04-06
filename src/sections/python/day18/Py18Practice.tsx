import CodeBlock from '../../../components/CodeBlock';

export default function Py18Practice() {
  const reverseHint = `# Think: if you insert each character at the front,
# what happens to the order?`;

  const searchHint = `# Start from head
# while current is not None:
#     compare current.data with target`;

  const solution = `# Example idea: use a linked list to reverse text
text = "HELLO"
ll = LinkedList()
for ch in text:
    ll.insert(ch)
ll.display()   # O -> L -> L -> E -> H -> None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">✍️ Practice</h1>
        <p className="text-gray-600 text-lg">Use these questions to understand insert, search, and delete.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-900 mb-2">1. Trace insertions</h2>
          <p className="text-gray-700">Trace insert("A"), insert("B"), insert("C"). What does the list look like after each step?</p>
          <div className="mt-4"><CodeBlock code={reverseHint} language="python" /></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-900 mb-2">2. Search for a value</h2>
          <p className="text-gray-700">Write a function that returns True if a target exists in the linked list, otherwise False.</p>
          <div className="mt-4"><CodeBlock code={searchHint} language="python" /></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-900 mb-2">3. Use a linked list to reverse a string</h2>
          <p className="text-gray-700 mb-4">Insert each character at the start of the list, then display the result.</p>
          <CodeBlock code={solution} language="python" />
        </div>
      </div>
    </div>
  );
}
