import { useState } from 'react';

export default function D19Quiz() {
  const questions = [
    { q: 'Which type of error prevents a program from running at all?', options: ['Logic error', 'Runtime error', 'Syntax error', 'Boundary error'], correct: 2, explanation: 'A syntax error breaks the language rules so the compiler/interpreter cannot process the code.' },
    { q: 'A program calculates average as Total * Count instead of Total / Count. What type of error is this?', options: ['Syntax error', 'Logic error', 'Runtime error', 'Compilation error'], correct: 1, explanation: 'The code is valid and runs, but produces the wrong answer — this is a logic error.' },
    { q: 'What happens when a program tries to divide by zero?', options: ['Syntax error', 'Logic error', 'Runtime error', 'No error'], correct: 2, explanation: 'Division by zero causes the program to crash during execution — a runtime error.' },
    { q: 'For a mark validation 0-100, which are the correct boundary values?', options: ['-1, 0, 100, 101', '0, 50, 100', '-1, 50, 101', '1, 99'], correct: 0, explanation: 'Boundary = MIN-1, MIN, MAX, MAX+1. So for 0-100: -1, 0, 100, 101.' },
    { q: 'What type of test data is "abc" when testing a number input?', options: ['Normal', 'Boundary', 'Abnormal', 'Valid'], correct: 2, explanation: 'Abnormal (erroneous) data is invalid data that should be rejected — "abc" is not a number.' },
    { q: 'In white-box testing, what does the tester have access to?', options: ['Only inputs and outputs', 'The source code', 'Only the specification', 'The user manual'], correct: 1, explanation: 'White-box testing means the tester CAN see the source code and tests every path through it.' },
    { q: 'Which testing method involves selected external users testing the software?', options: ['Alpha testing', 'Beta testing', 'White-box testing', 'Stub testing'], correct: 1, explanation: 'Beta testing is done by selected EXTERNAL users in a REAL environment.' },
    { q: 'What is stub testing?', options: ['Testing with dummy data', 'Replacing incomplete modules with simple versions', 'Testing the user interface', 'Testing without a computer'], correct: 1, explanation: 'Stub testing replaces unfinished modules with dummy versions that return fixed values.' },
    { q: 'Which comes first: alpha testing or beta testing?', options: ['Beta', 'Alpha', 'They happen simultaneously', 'Neither comes first'], correct: 1, explanation: 'Alpha (internal) happens FIRST, then Beta (external users) happens AFTER.' },
    { q: 'A dry run is best described as:', options: ['Running the program quickly', 'Tracing through code on paper using a trace table', 'Testing with no test data', 'Running without saving'], correct: 1, explanation: 'A dry run means manually tracing through the code on paper using a trace table.' },
    { q: 'Black-box testing is based on:', options: ['The source code', 'The specification', 'The compiler output', 'The trace table'], correct: 1, explanation: 'Black-box testing is based on the SPECIFICATION — what the program should do, not how it does it.' },
    { q: 'Which error type is the HARDEST to find and fix?', options: ['Syntax error', 'Logic error', 'Runtime error', 'All equally hard'], correct: 1, explanation: 'Logic errors are hardest because the program runs fine — it just gives wrong results. You need trace tables and test data to find them.' },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([i, a]) => a === questions[Number(i)].correct).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Testing & Test Data
      </h1>

      {questions.map((question, qi) => (
        <div key={qi} className={`bg-white rounded-xl border p-5 ${submitted ? (answers[qi] === question.correct ? 'border-green-300 bg-green-50/30' : 'border-red-300 bg-red-50/30') : 'border-gray-200'}`}>
          <p className="font-bold text-gray-800 mb-3">{qi + 1}. {question.q}</p>
          <div className="space-y-2">
            {question.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => !submitted && setAnswers(prev => ({ ...prev, [qi]: oi }))}
                className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                  submitted
                    ? oi === question.correct ? 'bg-green-100 border-green-400 font-bold' : answers[qi] === oi ? 'bg-red-100 border-red-400' : 'border-gray-200'
                    : answers[qi] === oi ? 'bg-indigo-100 border-indigo-400 font-semibold' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {submitted && <p className="mt-2 text-sm text-gray-600 bg-blue-50 rounded-lg p-2 border border-blue-100">💡 {question.explanation}</p>}
        </div>
      ))}

      <div className="flex items-center gap-4">
        {!submitted ? (
          <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length} className="btn-primary disabled:opacity-50">
            Submit Answers ({Object.keys(answers).length}/{questions.length})
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <div className={`text-2xl font-black ${score >= 10 ? 'text-green-600' : score >= 7 ? 'text-amber-600' : 'text-red-600'}`}>
              {score}/{questions.length}
            </div>
            <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-secondary">Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
}
