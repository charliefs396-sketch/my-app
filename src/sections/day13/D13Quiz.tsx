import { useState } from 'react';

export default function D13Quiz() {
  const questions = [
    { q: "What does LIFO stand for?", options: ["Last In First Out", "Last Index First Operation", "Linear Input First Output", "Linked Index First Out"], correct: 0, explanation: "LIFO = Last In First Out. The last item pushed onto the stack is the first one to be popped off." },
    { q: "What is the initial value of TopPointer for an empty stack?", options: ["1", "-1", "0", "MAXSIZE"], correct: 2, explanation: "TopPointer starts at 0, meaning the stack is empty. Position 1 is the first valid array index." },
    { q: "What happens when you Push onto a full stack?", options: ["The oldest item is removed", "Stack Underflow occurs", "Stack Overflow occurs", "Nothing happens"], correct: 2, explanation: "Stack Overflow occurs when TopPointer = MAXSIZE and you try to Push another item." },
    { q: "Is Push a PROCEDURE or FUNCTION?", options: ["Function — it returns the item", "Procedure — it has no return value", "Either can be used", "It depends on the data type"], correct: 1, explanation: "Push is a PROCEDURE because it doesn't return a value. You call it with CALL Push(item)." },
    { q: "After Push('A'), Push('B'), Push('C'), what does Pop() return?", options: ['"A"', '"B"', '"C"', "Empty string"], correct: 2, explanation: "LIFO — Last In First Out. 'C' was pushed last so it's popped first." },
    { q: "What does Peek do differently from Pop?", options: ["Peek removes the item, Pop doesn't", "Peek returns the top WITHOUT removing it, Pop removes it", "Peek checks if the stack is empty", "There is no difference"], correct: 1, explanation: "Peek returns Stack[TopPointer] but does NOT change TopPointer. The item stays in the stack." },
    { q: "What is BYVAL used for in Push(BYVAL Item : STRING)?", options: ["To pass by reference", "To make the procedure faster", "So the original variable is not changed", "It is required for all procedures"], correct: 2, explanation: "BYVAL means a copy of the item is made. The original variable in the calling code is not changed." },
    { q: "TopPointer = MAXSIZE means the stack is...", options: ["Empty", "Half full", "Full — Overflow if you Push", "Invalid state"], correct: 2, explanation: "When TopPointer equals MAXSIZE, all positions are filled. Any further Push causes Stack Overflow." },
    { q: "Which operation removes AND returns the top item?", options: ["Push", "Peek", "Pop", "Pull"], correct: 2, explanation: "Pop removes the top item (decrements TopPointer) AND returns the item's value." },
    { q: "A stack is best described as which type of structure?", options: ["FIFO — First In First Out", "LIFO — Last In First Out", "Random access structure", "Sorted structure"], correct: 1, explanation: "A stack is LIFO. This is its defining characteristic and must be mentioned in any exam description." },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].correct === a).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Stacks</h1>
      <p className="text-gray-500 mb-6">{submitted ? `Score: ${score}/${questions.length}` : `${questions.length} questions — answer all then submit`}</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`border rounded-xl p-5 ${submitted ? (answers[i] === q.correct ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-200 bg-white'}`}>
            <p className="font-bold text-gray-800 mb-3">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, oi) => (
                <button key={oi} onClick={() => !submitted && setAnswers(a => ({ ...a, [i]: oi }))}
                  className={`text-left p-3 rounded-lg border text-sm transition-all ${
                    submitted
                      ? oi === q.correct ? 'bg-green-100 border-green-400 text-green-800 font-bold'
                        : answers[i] === oi ? 'bg-red-100 border-red-400 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-500'
                      : answers[i] === oi ? 'bg-indigo-100 border-indigo-400 text-indigo-800 font-bold' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}>
                  {String.fromCharCode(65 + oi)}. {opt}
                </button>
              ))}
            </div>
            {submitted && <p className="mt-3 text-sm p-3 bg-white rounded-lg border"><strong>Explanation:</strong> {q.explanation}</p>}
          </div>
        ))}
      </div>
      {!submitted && Object.keys(answers).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
          Submit Answers
        </button>
      )}
      {submitted && (
        <div className={`mt-6 p-6 rounded-xl text-center font-bold text-lg ${score >= 8 ? 'bg-green-100 text-green-800' : score >= 5 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
          {score >= 8 ? '🎉 Excellent!' : score >= 5 ? '👍 Good effort!' : '📚 Keep revising!'} {score}/{questions.length} correct
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="block mx-auto mt-3 px-4 py-2 bg-white rounded-lg text-sm font-semibold border">Try Again</button>
        </div>
      )}
    </div>
  );
}
