import { useState } from 'react';

const questions = [
  { q: 'What does FIFO stand for?', options: ['First In First Out', 'First In Final Out', 'Fast Input Fast Output', 'First Index First Operation'], answer: 0, explanation: 'FIFO = First In First Out. The first item added is the first item removed.' },
  { q: 'In a circular queue with MAXSIZE=5, what is rear after the 6th enqueue (starting from rear=-1)?', options: ['5', '6', '0', '1'], answer: 2, explanation: 'rear = (rear+1)%5. After 5 enqueues rear=4. 6th: (4+1)%5 = 0. It wraps around!' },
  { q: 'Which operation adds an item to the queue?', options: ['push', 'pop', 'enqueue', 'dequeue'], answer: 2, explanation: 'enqueue adds to the REAR. dequeue removes from the FRONT.' },
  { q: 'How do you check if a queue is empty?', options: ['front == -1', 'rear == -1', 'size == 0', 'front == rear'], answer: 2, explanation: 'Use size == 0. front == rear is not reliable in circular queues when size=1.' },
  { q: 'What is the purpose of % MAXSIZE in circular queue?', options: ['To find the middle', 'To wrap around the array', 'To check if full', 'To calculate size'], answer: 1, explanation: '% MAXSIZE wraps rear and front around so the array acts like a circle, preventing wasted space.' },
  { q: 'After enqueue("A"), enqueue("B"), dequeue() — what does dequeue() return next?', options: ['"A"', '"B"', 'None', '"AB"'], answer: 1, explanation: 'FIFO: "A" was added first, so first dequeue returns "A". Second dequeue returns "B".' },
  { q: 'Why do we use global rear, size inside enqueue()?', options: ['For speed', 'To modify the global variables', 'It is optional', 'To create local copies'], answer: 1, explanation: 'Without global, Python creates local copies. global keyword tells Python to modify the actual global variables.' },
  { q: 'What does dequeue() return when the queue is empty?', options: ['-1', '0', 'None', 'False'], answer: 2, explanation: 'The function returns None and prints "Queue Empty" to signal the queue is empty.' },
  { q: 'Initial values: front=0, rear=-1, size=0. After enqueue("X"), what is rear?', options: ['-1', '0', '1', 'MAXSIZE-1'], answer: 1, explanation: 'rear = (-1+1)%MAXSIZE = 0. First item goes into queue[0].' },
  { q: 'What is the maximum number of items in a queue with MAXSIZE=8?', options: ['7', '8', '9', '10'], answer: 1, explanation: 'MAXSIZE=8 means the queue can hold exactly 8 items. Full when size==8.' },
  { q: 'Enqueue adds to which end?', options: ['Front', 'Middle', 'Rear', 'Random'], answer: 2, explanation: 'Enqueue always adds to the REAR. Dequeue always removes from the FRONT.' },
  { q: 'Which real-world scenario is best modelled by a queue?', options: ['Browser back button', 'Undo in text editor', 'Print jobs', 'Function calls'], answer: 2, explanation: 'Print jobs are processed in the order received — FIFO. Browser back and undo use stacks (LIFO).' },
];

export default function Py14Quiz() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].answer === a).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Queue
      </h1>
      <p className="text-gray-500 text-lg mb-6">12 questions — test your knowledge!</p>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="font-bold text-gray-900 mb-4">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, oi) => {
                let cls = 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700';
                if (submitted) {
                  if (oi === q.answer) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800';
                  else if (answers[i] === oi) cls = 'border-red-400 bg-red-50 text-red-800';
                } else if (answers[i] === oi) {
                  cls = 'border-emerald-400 bg-emerald-50 text-emerald-800';
                }
                return (
                  <button
                    key={oi}
                    onClick={() => !submitted && setAnswers(prev => ({ ...prev, [i]: oi }))}
                    className={`text-left px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${cls}`}
                  >
                    {['A', 'B', 'C', 'D'][oi]}. {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm">💡 {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 hover:from-emerald-600 hover:to-teal-700 transition-all"
        >
          Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
        </button>
      ) : (
        <div className={`mt-8 p-6 rounded-xl text-center ${score >= 10 ? 'bg-emerald-50 border-2 border-emerald-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
          <div className="text-xl font-bold mb-1">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good job!' : '📚 Keep practising!'}</div>
          <div className="text-gray-600">{score >= 10 ? 'You really understand queues!' : score >= 7 ? 'Review the sections you got wrong.' : 'Go back through the Queue sections again.'}</div>
          <button onClick={() => { setSubmitted(false); setAnswers({}); }} className="mt-4 px-6 py-2 bg-white border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
