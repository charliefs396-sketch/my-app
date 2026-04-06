import { useState } from 'react';

const questions = [
  { q: "What does LIFO stand for?", options: ["Last In First Out", "Last In First Over", "Linear In First Out", "Last Index First Out"], answer: 0, explanation: "LIFO = Last In First Out. The last item pushed onto the stack is the first one to be popped off." },
  { q: "What is the initial value of 'top' for an empty stack in Python?", options: ["0", "1", "-1", "None"], answer: 2, explanation: "top = -1 means the stack is empty. When the first item is pushed, top becomes 0 (first valid index)." },
  { q: "What happens when you push onto a full stack?", options: ["Stack Underflow", "Stack Overflow", "IndexError", "Returns False"], answer: 1, explanation: "Stack Overflow occurs when you try to push onto a full stack (top == MAXSIZE - 1)." },
  { q: "What does peek() do?", options: ["Removes and returns top item", "Returns top item without removing", "Checks if stack is empty", "Adds item to top"], answer: 1, explanation: "peek() looks at the top item WITHOUT removing it. top pointer does not change." },
  { q: "Why do we need 'global top' inside push() and pop()?", options: ["To make top local", "To access and modify the global top variable", "It is not needed", "To reset the stack"], answer: 1, explanation: "Without 'global top', Python would create a new LOCAL variable called top instead of modifying the global one." },
  { q: "How do you check if a stack is full?", options: ["top == MAXSIZE", "top == MAXSIZE - 1", "top == 0", "len(stack) == MAXSIZE"], answer: 1, explanation: "top == MAXSIZE - 1. For MAXSIZE=10, top goes 0 to 9. When top=9, all 10 slots are used." },
  { q: "After pop(), what should you do with the old slot?", options: ["Leave it as is", "Set it to 0", "Set it to None", "Delete it"], answer: 2, explanation: "Good practice is to set stack[top] = None after popping to clear the old data from the slot." },
  { q: "Which data structure is used for the browser 'Back' button?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1, explanation: "Stack! Each page visited is pushed. Clicking Back pops the last page — LIFO." },
  { q: "What is Stack Underflow?", options: ["Pushing onto a full stack", "Popping from an empty stack", "Stack has too many items", "Stack pointer is negative"], answer: 1, explanation: "Stack Underflow = trying to pop from an empty stack (top == -1). Nothing to remove!" },
  { q: "For the sequence push(A), push(B), push(C), pop() — what is returned?", options: ["A", "B", "C", "None"], answer: 2, explanation: "C is returned. C was pushed last (LIFO), so it is popped first." },
  { q: "What does is_empty() return when top == 3?", options: ["True", "False", "None", "3"], answer: 1, explanation: "is_empty() returns top == -1. When top is 3, that evaluates to False — stack is not empty." },
  { q: "In balanced brackets, what do you do when you see a closing bracket?", options: ["Push it onto stack", "Pop and check if it matches", "Return True", "Clear the stack"], answer: 1, explanation: "Pop the top of the stack and check if it matches the expected opening bracket. If not → unbalanced." },
];

export default function Py13Quiz() {
  const [selected, setSelected] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(selected).filter(([i, v]) => questions[parseInt(i)].answer === v).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🧠 Quiz – Stacks in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">12 questions — test your understanding!</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <p className="font-bold text-gray-900 mb-4">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => {
                let cls = "p-3 rounded-lg border-2 text-sm cursor-pointer transition-all ";
                if (!submitted) {
                  cls += selected[i] === j ? "border-emerald-500 bg-emerald-50" : "border-gray-200 hover:border-emerald-300";
                } else {
                  if (j === q.answer) cls += "border-green-500 bg-green-50 text-green-800 font-semibold";
                  else if (selected[i] === j) cls += "border-red-500 bg-red-50 text-red-800";
                  else cls += "border-gray-200 text-gray-500";
                }
                return (
                  <div key={j} className={cls} onClick={() => !submitted && setSelected(prev => ({ ...prev, [i]: j }))}>
                    <span className="font-bold mr-2">{['A', 'B', 'C', 'D'][j]}.</span>{opt}
                  </div>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                💡 {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="mt-8 btn-primary bg-emerald-600 hover:bg-emerald-700 w-full justify-center py-4 text-lg">
          Submit Answers
        </button>
      ) : (
        <div className={`mt-8 p-6 rounded-xl text-center ${score >= 10 ? 'bg-green-50 border-green-200' : score >= 7 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'} border-2`}>
          <p className="text-4xl font-black mb-2">{score}/12</p>
          <p className="text-lg font-semibold">{score >= 10 ? '🏆 Excellent! Stack master!' : score >= 7 ? '👍 Good job! Review the ones you missed.' : '📚 Keep practising! Re-read the sections.'}</p>
        </div>
      )}
    </div>
  );
}
