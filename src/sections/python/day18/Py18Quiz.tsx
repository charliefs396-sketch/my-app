import { useState } from 'react';

const questions = [
  {
    question: 'What does each linked list node store?',
    options: ['Only data', 'Data and next pointer', 'Only index', 'Data and previous pointer only'],
    answer: 1,
  },
  {
    question: 'What does head store?',
    options: ['The last node', 'The first node', 'The middle node', 'The size of the list'],
    answer: 1,
  },
  {
    question: 'What value marks the end of the list?',
    options: ['0', '-1', 'False', 'None'],
    answer: 3,
  },
  {
    question: 'In the given insert method, where is the new node added?',
    options: ['At the end', 'In the middle', 'At the front', 'At a random place'],
    answer: 2,
  },
];

export default function Py18Quiz() {
  const [selected, setSelected] = useState<number[]>(Array(questions.length).fill(-1));
  const score = selected.reduce((acc, value, i) => acc + (value === questions[i].answer ? 1 : 0), 0);

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">🧠 Quiz</h1>
        <p className="text-gray-600 text-lg">Quick linked list check.</p>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
            <h2 className="font-bold text-gray-900 mb-4">{i + 1}. {q.question}</h2>
            <div className="space-y-2">
              {q.options.map((option, j) => (
                <button
                  key={j}
                  onClick={() => {
                    const next = [...selected];
                    next[i] = j;
                    setSelected(next);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition ${selected[i] === j ? 'border-sky-500 bg-sky-50' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
        <h2 className="text-xl font-bold text-sky-900">Score</h2>
        <p className="text-sky-800">{score} / {questions.length}</p>
      </div>
    </div>
  );
}
