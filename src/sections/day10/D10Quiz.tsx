import { useState } from 'react';

const questions = [
  {
    q: 'Which keyword is used to call a PROCEDURE?',
    options: ['RUN', 'CALL', 'EXECUTE', 'START'],
    answer: 1,
    explanation: 'CALL is the keyword used to invoke a procedure. Functions do not use CALL.',
  },
  {
    q: 'A function that returns an INTEGER should have which keyword in its header?',
    options: ['RETURNS INTEGER', 'RETURN INTEGER', 'OUTPUT INTEGER', 'TYPE INTEGER'],
    answer: 0,
    explanation: 'RETURNS INTEGER goes in the function header after the parameter list. RETURN (no S) is used inside the body to send back the value.',
  },
  {
    q: 'What does BYVAL mean?',
    options: [
      'The original variable IS changed',
      'A copy is passed — original NOT changed',
      'The value is returned',
      'The variable is deleted',
    ],
    answer: 1,
    explanation: 'BYVAL = By Value = a copy is made. Changes to the copy do not affect the original variable.',
  },
  {
    q: 'After this code runs, what does OUTPUT Num show?\nDECLARE Num : INTEGER\nNum ← 5\nCALL DoubleIt(Num)\n// where DoubleIt uses BYVAL',
    options: ['10', '5', '0', 'Error'],
    answer: 1,
    explanation: 'BYVAL passes a copy — the original Num is NOT changed. So Num is still 5 after calling DoubleIt.',
  },
  {
    q: 'What is the ARGUMENT in this call: CALL PrintLine(20)?',
    options: ['PrintLine', 'CALL', '20', 'INTEGER'],
    answer: 2,
    explanation: '20 is the ARGUMENT — the actual value passed when calling the procedure. The PARAMETER is the variable name in the definition (e.g., Length).',
  },
  {
    q: 'A local variable declared inside a procedure...',
    options: [
      'Can be used anywhere in the program',
      'Only exists while the procedure is running',
      'Must be declared globally first',
      'Is always passed as BYREF',
    ],
    answer: 1,
    explanation: 'Local variables only exist inside their subroutine. They are created when the subroutine starts and destroyed when it ends.',
  },
  {
    q: 'You want a procedure to sort an array (change its order). Which passing method should you use?',
    options: ['BYVAL — safer', 'BYREF — needed to change the original', 'Either works', 'Neither — use a function'],
    answer: 1,
    explanation: 'BYREF is needed when you want to permanently modify the original array. BYVAL would only sort a copy — the original array would stay unsorted.',
  },
  {
    q: 'Which of these correctly calls a FUNCTION called Square that takes an INTEGER?',
    options: [
      'CALL Square(5)',
      'Result ← Square(5)',
      'EXECUTE Square(5)',
      'Square RETURNS 5',
    ],
    answer: 1,
    explanation: 'Functions are called by using their return value — e.g., assigning to a variable or using in an OUTPUT. Never use CALL with a function.',
  },
  {
    q: 'A FUNCTION that returns TRUE or FALSE should have:',
    options: [
      'RETURNS INTEGER',
      'RETURNS STRING',
      'RETURNS BOOLEAN',
      'RETURNS CHAR',
    ],
    answer: 2,
    explanation: 'TRUE and FALSE are BOOLEAN values. So the function header should say RETURNS BOOLEAN.',
  },
  {
    q: 'What is the default passing method if you don\'t write BYVAL or BYREF?',
    options: ['BYREF', 'BYVAL', 'No default — you must always write it', 'Depends on the data type'],
    answer: 1,
    explanation: 'Cambridge pseudocode defaults to BYVAL if neither is specified. However, always write it explicitly in exams!',
  },
  {
    q: 'How many values can a FUNCTION return?',
    options: ['None', 'One', 'As many as needed', 'Only two'],
    answer: 1,
    explanation: 'A function returns exactly ONE value. If you need to return multiple values, use BYREF parameters instead.',
  },
  {
    q: 'What happens when RETURN is reached inside a function?',
    options: [
      'The program pauses',
      'The function continues to the end',
      'Execution of the function stops immediately and the value is sent back',
      'The function loops back to the start',
    ],
    answer: 2,
    explanation: 'RETURN immediately exits the function and sends the value back to the caller. Any code after RETURN in the same branch is not executed.',
  },
];

export default function D10Quiz() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => selected[i] === q.answer).length
    : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">🧠 Quiz</h1>
      <p className="text-gray-500 text-lg mb-8">Day 10 — Procedures & Functions — 12 questions</p>

      {submitted && (
        <div className={`p-6 rounded-2xl mb-8 text-center ${score >= 9 ? 'bg-green-50 border border-green-200' : score >= 6 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-lg font-bold">{score >= 9 ? '🎉 Excellent! You\'ve mastered procedures & functions!' : score >= 6 ? '👍 Good effort! Review the sections you got wrong.' : '📚 Keep practising — re-read the Procedures and BYVAL/BYREF sections.'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((question, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-b border-gray-200 px-6 py-4">
              <p className="font-bold text-gray-900">
                <span className="text-lime-600 mr-2">Q{i + 1}.</span>
                {question.q}
              </p>
            </div>
            <div className="p-4 grid grid-cols-1 gap-2">
              {question.options.map((opt, j) => {
                let cls = 'border-gray-200 hover:border-lime-300 hover:bg-lime-50';
                if (submitted) {
                  if (j === question.answer) cls = 'border-green-400 bg-green-50 text-green-800';
                  else if (j === selected[i]) cls = 'border-red-400 bg-red-50 text-red-800';
                  else cls = 'border-gray-100 text-gray-400';
                } else if (selected[i] === j) {
                  cls = 'border-lime-400 bg-lime-50';
                }
                return (
                  <button
                    key={j}
                    onClick={() => !submitted && setSelected(prev => ({ ...prev, [i]: j }))}
                    className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${cls}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="px-6 pb-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">💡 {question.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(selected).length < questions.length}
          className="mt-8 w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-lime-500 to-green-500 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Quiz ({Object.keys(selected).length}/{questions.length} answered)
        </button>
      ) : (
        <button
          onClick={() => { setSubmitted(false); setSelected({}); }}
          className="mt-8 w-full py-4 rounded-2xl font-bold text-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
