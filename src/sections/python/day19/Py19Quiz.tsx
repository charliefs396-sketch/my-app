import { useState } from 'react';

const questions = [
  { q: 'A binary tree node usually has how many child references?', o: ['1', '2', '3', '4'], a: 1 },
  { q: 'In a BST, where do smaller values go?', o: ['Left', 'Right', 'Up', 'Anywhere'], a: 0 },
  { q: 'What traversal gives sorted output in a BST?', o: ['Pre-order', 'Post-order', 'In-order', 'Level-order'], a: 2 },
  { q: 'What is the top node of a tree called?', o: ['Head', 'Root', 'Front', 'Top'], a: 1 },
  { q: 'What does search return when the target is not found in this lesson?', o: ['0', '-1', 'False', 'None'], a: 2 },
];

export default function Py19Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const score = answers.reduce((t, ans, i) => t + (ans === questions[i].a ? 1 : 0), 0);

  return (
    <div className="animate-fade-in-up space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">🧠 Quiz</h1>
        <p className="text-gray-600">Quick BST check.</p>
      </div>

      {questions.map((q, i) => (
        <div key={i} className="card">
          <h3 className="font-bold mb-3">{i + 1}. {q.q}</h3>
          <div className="grid gap-2">
            {q.o.map((opt, j) => (
              <button
                key={j}
                onClick={() => setAnswers(prev => prev.map((v, idx) => idx === i ? j : v))}
                className={`text-left px-4 py-2 rounded-lg border ${answers[i] === j ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="card bg-sky-50 border border-sky-200">
        <h3 className="font-bold text-sky-900">Score: {score} / {questions.length}</h3>
      </div>
    </div>
  );
}
