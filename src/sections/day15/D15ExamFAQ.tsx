export default function D15ExamFAQ() {
  const faqs = [
    { q: "What does StartPointer = 0 mean?", a: "The list is EMPTY. There are no items in the linked list yet. 0 represents NULL in Cambridge pseudocode.", tag: "Critical" },
    { q: "What does FreePointer = 0 mean?", a: "The list is FULL. There are no free spaces left to insert a new node. You must check this before inserting.", tag: "Critical" },
    { q: "Why must the Pointer field be INTEGER?", a: "Because it stores an array index (1, 2, 3...), not the actual data. Array indices are integers.", tag: "Syntax" },
    { q: "Why use WHILE not FOR to traverse?", a: "Because we don't know how many nodes exist. WHILE Current <> 0 follows pointers until NULL. FOR needs a fixed count.", tag: "Logic" },
    { q: "After InsertAtStart('X'), where is X stored?", a: "At the index that FreePointer was pointing to BEFORE the insertion. X becomes the new StartPointer.", tag: "Trace" },
    { q: "What's the difference between Data and Pointer in a node?", a: "Data holds the actual value (e.g. 'Ali'). Pointer holds an INTEGER index pointing to the next node in the list.", tag: "Concept" },
    { q: "Why is the free list initialised with a FOR loop?", a: "To chain all free spaces together: List[1].Pointer=2, List[2].Pointer=3, etc. This lets us easily find the next free space.", tag: "Init" },
    { q: "State TWO advantages of a linked list over an array.", a: "1) Dynamic size — can grow/shrink at runtime. 2) Insertion/deletion is fast — just change pointers, no shifting needed.", tag: "Exam" },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Linked Lists</h1>
      <p className="text-gray-500 mb-6">The questions Cambridge examiners love to ask</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-indigo-500">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900">Q{i + 1}: {faq.q}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ml-2 flex-shrink-0 ${
                faq.tag === 'Critical' ? 'bg-red-100 text-red-700' :
                faq.tag === 'Trace' ? 'bg-purple-100 text-purple-700' :
                faq.tag === 'Exam' ? 'bg-amber-100 text-amber-700' :
                'bg-blue-100 text-blue-700'
              }`}>{faq.tag}</span>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-green-800 text-sm font-medium">✅ {faq.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-indigo-50 rounded-xl p-4">
        <h3 className="font-bold text-indigo-800 mb-2">🎯 Key Points Summary</h3>
        <ul className="space-y-1 text-indigo-700 text-sm">
          <li>• NULL = 0 in Cambridge pseudocode</li>
          <li>• StartPointer = 0 → empty list | FreePointer = 0 → full list</li>
          <li>• InsertAtStart: 5 steps — check, claim, advance free, store data, link</li>
          <li>• Traverse always uses WHILE Current &lt;&gt; 0</li>
          <li>• Nodes are NOT stored consecutively in memory</li>
        </ul>
      </div>
    </div>
  );
}
