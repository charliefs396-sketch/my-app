export default function Py13ExamFAQ() {
  const faqs = [
    { q: "Why is top initialised to -1 in Python but 0 in pseudocode?", a: "Python uses 0-based indexing. top=-1 means the stack is empty (no valid index). When we push the first item, top becomes 0 which is the first valid index. Pseudocode uses 1-based indexing so TopPointer=0 means empty." },
    { q: "Why do we need 'global top' inside functions?", a: "In Python, variables assigned inside a function are LOCAL by default. Without 'global top', the function would create a new local 'top' variable instead of modifying the global one. The stack would never actually change!" },
    { q: "What is Stack Overflow?", a: "When you try to push onto a FULL stack (top == MAXSIZE - 1). The stack has no more room. In Python we print 'Stack Overflow' and return without adding the item." },
    { q: "What is Stack Underflow?", a: "When you try to pop from an EMPTY stack (top == -1). There is nothing to remove. In Python we print 'Stack Underflow' and return None." },
    { q: "What is the difference between pop() and peek()?", a: "pop() REMOVES the top item and returns it (top decreases). peek() just LOOKS at the top item without removing it (top stays the same). Use peek() when you want to see the top without changing the stack." },
    { q: "Why do we set stack[top] = None after popping?", a: "It's good practice to clear the slot. The data is technically still there if we don't clear it, but setting to None prevents accidentally reading old data and helps with memory management." },
    { q: "How do you check if a stack is full?", a: "top == MAXSIZE - 1. For a stack of size 10, top goes from 0 to 9. When top is 9 (MAXSIZE-1=9), all 10 slots are used." },
    { q: "What are real-world uses of a stack?", a: "Browser back button (push each page, pop to go back), Undo in text editors (push each action, pop to undo), Function call stack in programming, Bracket matching, Expression evaluation." },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ – Stacks
      </h1>
      <p className="text-gray-500 text-lg mb-8">8 most common exam questions on stacks</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
              <p className="font-bold text-emerald-900">Q{i + 1}: {faq.q}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
