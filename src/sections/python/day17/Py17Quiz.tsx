import { useState } from 'react';

const questions = [
  {
    question: 'What is the base case in recursion?',
    options: ['The first call', 'The stopping condition', 'The recursive call', 'The final print statement'],
    answer: 1,
    explanation: 'The base case is the condition that stops recursion.'
  },
  {
    question: 'What does factorial(4) return?',
    options: ['10', '16', '24', '120'],
    answer: 2,
    explanation: '4 × 3 × 2 × 1 = 24.'
  },
  {
    question: 'What is the main danger of recursion without a base case?',
    options: ['SyntaxError', 'Infinite recursion', 'Wrong indentation', 'Division by zero'],
    answer: 1,
    explanation: 'Without a base case, the function keeps calling itself until Python crashes.'
  },
  {
    question: 'What does sum_digits(123) return?',
    options: ['5', '6', '7', '123'],
    answer: 1,
    explanation: '1 + 2 + 3 = 6.'
  },
  {
    question: 'What should power(base, 0) return?',
    options: ['0', '1', 'base', 'None'],
    answer: 1,
    explanation: 'Any number to the power 0 is 1.'
  },
  {
    question: 'Which recursive function is usually inefficient because of repeated calculations?',
    options: ['factorial', 'power', 'fibonacci', 'sum_digits'],
    answer: 2,
    explanation: 'Recursive Fibonacci recomputes the same values many times.'
  },
  {
    question: 'What happens after the base case returns?',
    options: ['The program stops', 'Calls return back up the stack', 'The loop starts', 'Variables reset to zero'],
    answer: 1,
    explanation: 'The stack unwinds and each earlier call gets its return value.'
  },
  {
    question: 'Which of these is recursive binary search’s stopping condition when not found?',
    options: ['mid == target', 'low > high', 'high == 0', 'target < 0'],
    answer: 1,
    explanation: 'If low becomes greater than high, the target is not in the list.'
  },
  {
    question: 'Which idea must be true for recursion to work properly?',
    options: ['The data must be sorted', 'Each call must make progress toward the base case', 'The function must be global', 'The function must use print'],
    answer: 1,
    explanation: 'Every recursive call must move closer to the stopping condition.'
  },
  {
    question: 'What does reverse_string("") return?',
    options: ['None', ' ', '""', 'Error'],
    answer: 2,
    explanation: 'The base case for reversing a string is usually the empty string.'
  },
];

export default function Py17Quiz() {
  const [selected, setSelected] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const score = selected.reduce((acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0), 0);

  const choose = (q: number, opt: number) => {
    if (submitted) return;
    const next = [...selected];
    next[q] = opt;
    setSelected(next);
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Quiz</h2>
      <p className="text-gray-600 mb-6">10 questions to test your recursion understanding</p>

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi} className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Q{qi + 1}. {q.question}</h3>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const picked = selected[qi] === oi;
                const correct = q.answer === oi;
                let cls = 'border-gray-200 hover:border-violet-300';
                if (submitted && correct) cls = 'border-emerald-400 bg-emerald-50';
                else if (submitted && picked && !correct) cls = 'border-red-400 bg-red-50';
                else if (picked) cls = 'border-violet-400 bg-violet-50';

                return (
                  <button
                    key={oi}
                    onClick={() => choose(qi, oi)}
                    className={`w-full text-left p-3 rounded-lg border transition ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{q.explanation}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        {!submitted ? (
          <button className="btn-primary" onClick={() => setSubmitted(true)}>Submit Quiz</button>
        ) : (
          <>
            <div className="px-4 py-2 rounded-lg bg-violet-50 text-violet-700 font-bold">Score: {score}/{questions.length}</div>
            <button className="btn-secondary" onClick={() => { setSelected(Array(questions.length).fill(-1)); setSubmitted(false); }}>Retry</button>
          </>
        )}
      </div>
    </div>
  );
}
