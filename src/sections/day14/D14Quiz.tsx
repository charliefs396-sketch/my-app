import { useState } from 'react';

export default function D14Quiz() {
  const questions = [
    { q: "What does FIFO stand for?", options: ["First In First Out", "Fast Input First Output", "First Index Final Operation", "Forward Input First Out"], correct: 0, explanation: "FIFO = First In First Out. The first item Enqueued is the first item Dequeued." },
    { q: "Which operation adds an item to a queue?", options: ["Push", "Pop", "Enqueue", "Insert"], correct: 2, explanation: "Enqueue adds an item to the REAR of the queue. Push is used for stacks." },
    { q: "Which operation removes an item from a queue?", options: ["Pop", "Dequeue", "Delete", "Pull"], correct: 1, explanation: "Dequeue removes the item at the FRONT of the queue and returns it." },
    { q: "What is the MOD formula for updating Rear in Enqueue?", options: ["Rear ← Rear + 1", "Rear ← (Rear MOD MAXSIZE) + 1", "Rear ← (Rear + 1) MOD MAXSIZE", "Rear ← Rear MOD MAXSIZE"], correct: 1, explanation: "Rear ← (Rear MOD MAXSIZE) + 1. When Rear=MAXSIZE, this gives (MAXSIZE MOD MAXSIZE)+1 = 0+1 = 1, wrapping to the start." },
    { q: "Is Dequeue a PROCEDURE or FUNCTION?", options: ["Procedure — it doesn't return a value", "Function — it returns the removed item", "Either works", "It depends on the queue type"], correct: 1, explanation: "Dequeue is a FUNCTION because it returns the item that was removed from the front." },
    { q: "How do you check if a queue is FULL?", options: ["Front = Rear", "Rear = MAXSIZE", "Size = MAXSIZE", "Front = 1"], correct: 2, explanation: "Check Size = MAXSIZE. Using Front and Rear alone is unreliable in a circular queue." },
    { q: "How do you check if a queue is EMPTY?", options: ["Rear = 0", "Front = Rear", "Size = 0", "Front = MAXSIZE"], correct: 2, explanation: "Check Size = 0. Size is the reliable way to know if the queue has no items." },
    { q: "Why is a circular queue better than a linear queue?", options: ["It's faster", "It prevents wasted space by reusing positions", "It uses less memory initially", "It doesn't need a Rear pointer"], correct: 1, explanation: "In a linear queue, Dequeued positions are wasted. Circular queues reuse them with MOD wrapping." },
    { q: "What are the 3 pointers needed for a circular queue?", options: ["Top, Bottom, Size", "Front, Rear, Size", "Start, End, Count", "Head, Tail, Length"], correct: 1, explanation: "Front (where to Dequeue from), Rear (where to Enqueue to), Size (current count)." },
    { q: "After Enqueue('A'), Enqueue('B'), Dequeue() on MAXSIZE=5 — what is Front?", options: ["1", "2", "3", "0"], correct: 1, explanation: "Front starts at 1. After Dequeue(), Front ← (1 MOD 5)+1 = 2." },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].correct === a).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Queues</h1>
      <p className="text-gray-500 mb-6">{submitted ? `Score: ${score}/${questions.length}` : `${questions.length} questions`}</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`border rounded-xl p-5 ${submitted ? (answers[i] === q.correct ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-200 bg-white'}`}>
            <p className="font-bold text-gray-800 mb-3">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, oi) => (
                <button key={oi} onClick={() => !submitted && setAnswers(a => ({ ...a, [i]: oi }))}
                  className={`text-left p-3 rounded-lg border text-sm transition-all ${submitted ? (oi === q.correct ? 'bg-green-100 border-green-400 text-green-800 font-bold' : answers[i] === oi ? 'bg-red-100 border-red-400 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-500') : (answers[i] === oi ? 'bg-emerald-100 border-emerald-400 text-emerald-800 font-bold' : 'bg-gray-50 border-gray-200 hover:bg-gray-100')}`}>
                  {String.fromCharCode(65 + oi)}. {opt}
                </button>
              ))}
            </div>
            {submitted && <p className="mt-3 text-sm p-3 bg-white rounded-lg border"><strong>Explanation:</strong> {q.explanation}</p>}
          </div>
        ))}
      </div>
      {!submitted && Object.keys(answers).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700">Submit Answers</button>
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
