import { useState } from 'react';

export default function D15Quiz() {
  const questions = [
    { q: "What does StartPointer = 0 indicate?", options: ["The list has one item", "The list is empty", "The list is full", "The first item is at index 0"], correct: 1, explanation: "StartPointer = 0 means NULL — the list is empty with no items." },
    { q: "What does FreePointer = 0 indicate?", options: ["The list is empty", "First free space is index 0", "No free spaces — list is full", "The pointer is broken"], correct: 2, explanation: "FreePointer = 0 means NULL — there are no free spaces left. The list is full." },
    { q: "What data type should the Pointer field be?", options: ["STRING", "BOOLEAN", "REAL", "INTEGER"], correct: 3, explanation: "The Pointer stores an array index, which is always an INTEGER." },
    { q: "Why use WHILE to traverse a linked list instead of FOR?", options: ["WHILE is faster", "We don't know how many nodes there are", "FOR doesn't work with arrays", "WHILE is required by Cambridge"], correct: 1, explanation: "We don't know the count upfront. WHILE follows pointers until NULL (0)." },
    { q: "In InsertAtStart, what happens to the old StartPointer?", options: ["It is deleted", "It becomes FreePointer", "The new node's Pointer is set to it", "It is set to 0"], correct: 2, explanation: "List[NewNode].Pointer ← StartPointer — the new node points to the old first node." },
    { q: "After inserting 'X' at start, where is StartPointer?", options: ["Still at old value", "Set to 0", "Set to the new node's index", "Set to FreePointer"], correct: 2, explanation: "StartPointer ← NewNode — the new node becomes the new start of the list." },
    { q: "What is the first step of InsertAtStart?", options: ["Store the data", "Check if FreePointer = 0", "Set StartPointer to NewNode", "Advance FreePointer"], correct: 1, explanation: "Always check if FreePointer = 0 first — if so, the list is full and we can't insert." },
    { q: "The free list is initialised using which construct?", options: ["WHILE loop", "REPEAT loop", "FOR loop", "CASE statement"], correct: 2, explanation: "FOR i ← 1 TO 9: List[i].Pointer ← i + 1 — chains the free spaces together." },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => answers[i] === q.correct).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Linked Lists</h1>
      <p className="text-gray-500 mb-6">{questions.length} questions • Test your linked list knowledge</p>
      {submitted && (
        <div className={`p-4 rounded-xl mb-6 ${score >= 6 ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <p className="text-2xl font-black">{score}/{questions.length} {score >= 6 ? '🎉 Excellent!' : '📚 Keep Revising!'}</p>
        </div>
      )}
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="card">
            <p className="font-bold text-gray-900 mb-3">Q{i + 1}: {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <button key={j} onClick={() => !submitted && setAnswers(p => ({ ...p, [i]: j }))}
                  className={`w-full text-left p-3 rounded-lg border-2 text-sm transition-all ${
                    submitted
                      ? j === q.correct ? 'border-green-500 bg-green-50 text-green-800 font-bold'
                        : answers[i] === j ? 'border-red-400 bg-red-50 text-red-700' : 'border-gray-200 text-gray-500'
                      : answers[i] === j ? 'border-indigo-500 bg-indigo-50 text-indigo-800 font-semibold' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}>{opt}</button>
              ))}
            </div>
            {submitted && <div className="mt-3 bg-blue-50 rounded-lg p-3 text-sm text-blue-800"><strong>Explanation:</strong> {q.explanation}</div>}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="btn-primary mt-6">Submit Quiz</button>
      ) : (
        <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-secondary mt-6">Retake Quiz</button>
      )}
    </div>
  );
}
