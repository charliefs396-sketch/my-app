export default function Py18ExamFAQ() {
  const faqs = [
    {
      q: 'Why do we use self?',
      a: 'self refers to the current object. It lets each node or list keep its own data and next/head values.'
    },
    {
      q: 'What does head store?',
      a: 'head stores a reference to the first node in the list. If the list is empty, head is None.'
    },
    {
      q: 'Why does insert put the item at the front?',
      a: 'Because new_node.next is set to the current head, then head is moved to the new node.'
    },
    {
      q: 'Why can’t we use indexing like list[3]?',
      a: 'A linked list must be traversed node by node. There is no direct index access.'
    },
    {
      q: 'What is the last node pointing to?',
      a: 'The last node points to None, which marks the end of the list.'
    },
    {
      q: 'Why does delete check current.next instead of current?',
      a: 'Because to remove a node, we need to change the previous node’s next pointer so it skips the target node.'
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">❓ Exam FAQ</h1>
        <p className="text-gray-600 text-lg">Short answers to the most common linked list questions.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
            <h2 className="font-bold text-gray-900 mb-2">Q{i + 1}. {faq.q}</h2>
            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
