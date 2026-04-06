import { useState } from 'react';

const questions = [
  { q: 'What does range(5) generate?', options: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '1, 2, 3, 4'], answer: 1, explanation: 'range(5) starts at 0 (default) and stops BEFORE 5, giving 0,1,2,3,4.' },
  { q: 'What does range(1, 11) generate?', options: ['1 to 10', '1 to 11', '0 to 10', '0 to 11'], answer: 0, explanation: 'range(1, 11) starts at 1, stops BEFORE 11, so generates 1,2,3,...,10.' },
  { q: 'What Python code is equivalent to: FOR i ← 10 TO 1 STEP -1?', options: ['range(10, 1, -1)', 'range(10, 0, -1)', 'range(9, 0, -1)', 'range(10, 2, -1)'], answer: 1, explanation: 'To include 1 in the output, the stop must be 0 (stops BEFORE 0). range(10, 0, -1) gives 10,9,8,...,1.' },
  { q: 'A while loop with a False condition from the start will run:', options: ['Once', 'Forever', 'Zero times', 'Twice'], answer: 2, explanation: 'A while loop checks the condition BEFORE running. If it starts False, the body never executes (0 times).' },
  { q: 'What keyword exits a loop immediately?', options: ['exit', 'stop', 'break', 'return'], answer: 2, explanation: 'break immediately exits the current loop, continuing with code after the loop.' },
  { q: 'Which is the correct Python simulation of REPEAT...UNTIL Number > 0?', options: ['while number > 0: ...', 'for number in range: ...', 'while True:\n  number = int(input())\n  if number > 0: break', 'repeat: number = int(input()) until number > 0'], answer: 2, explanation: 'while True + break simulates REPEAT...UNTIL. The loop must run at least once before checking the exit condition.' },
  { q: 'What is wrong with this code?\ntotal = 0\nfor i in range(1, 6):\n    total = 0\n    total += i', options: ['range is wrong', 'total resets every iteration', 'total += i is wrong', 'Nothing wrong'], answer: 1, explanation: 'total = 0 inside the loop resets the accumulator on every iteration. It must be initialised BEFORE the loop.' },
  { q: 'What does "continue" do in a loop?', options: ['Exits the loop', 'Skips to next iteration', 'Repeats current iteration', 'Pauses the loop'], answer: 1, explanation: 'continue skips the rest of the current iteration and goes back to check the loop condition for the next iteration.' },
  { q: 'What does range(2, 10, 2) generate?', options: ['2, 4, 6, 8, 10', '2, 4, 6, 8', '0, 2, 4, 6, 8', '2, 4, 6, 8, 10, 12'], answer: 1, explanation: 'range(2, 10, 2) starts at 2, steps by 2, stops BEFORE 10: gives 2, 4, 6, 8.' },
  { q: 'What is a sentinel value?', options: ['A variable used as a counter', 'A special value that signals end of input', 'The first value in a list', 'A loop variable'], answer: 1, explanation: 'A sentinel value (e.g. -1, "quit") signals when the user wants to stop entering data. The loop exits when this value is entered.' },
  { q: 'How do you loop from 1 to N inclusive in Python?', options: ['for i in range(N):', 'for i in range(1, N):', 'for i in range(1, N+1):', 'for i in range(0, N):'], answer: 2, explanation: 'range(1, N+1) starts at 1 and stops BEFORE N+1, which means it includes N.' },
  { q: 'What is output by:\nfor i in range(3):\n    print(i*2)', options: ['0, 2, 4', '2, 4, 6', '1, 2, 3', '0, 1, 2'], answer: 0, explanation: 'range(3) gives 0,1,2. Multiplying by 2: 0*2=0, 1*2=2, 2*2=4. Output: 0, 2, 4.' },
];

export default function Py4Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const score = submitted ? questions.filter((q, i) => answers[i] === q.answer).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Loops
      </h1>
      <p className="text-gray-500 text-lg mb-8">12 questions — test your loop knowledge!</p>

      {submitted && (
        <div className={`rounded-2xl p-6 mb-8 text-center border-2 ${score >= 10 ? 'bg-green-50 border-green-300' : score >= 7 ? 'bg-amber-50 border-amber-300' : 'bg-red-50 border-red-300'}`}>
          <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
          <p className="text-xl font-bold">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good effort!' : '📚 Keep practising!'}</p>
          <p className="text-gray-600 mt-1">{Math.round((score / questions.length) * 100)}%</p>
          <button onClick={() => setShowAll(!showAll)} className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
            {showAll ? 'Hide' : 'Show'} All Explanations
          </button>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => {
          const selected = answers[i];
          const isCorrect = submitted && selected === q.answer;
          const isWrong = submitted && selected !== undefined && selected !== q.answer;

          return (
            <div key={i} className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${isCorrect ? 'border-green-300' : isWrong ? 'border-red-300' : 'border-gray-200'}`}>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${isCorrect ? 'bg-green-100 text-green-700' : isWrong ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {isCorrect ? '✓' : isWrong ? '✗' : i + 1}
                  </span>
                  <p className="font-semibold text-gray-900 whitespace-pre-line">{q.q}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {q.options.map((opt, j) => {
                    let style = 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50';
                    if (submitted) {
                      if (j === q.answer) style = 'border-green-400 bg-green-50';
                      else if (j === selected) style = 'border-red-400 bg-red-50';
                      else style = 'border-gray-100 opacity-50';
                    } else if (selected === j) {
                      style = 'border-emerald-500 bg-emerald-50';
                    }

                    return (
                      <button
                        key={j}
                        disabled={submitted}
                        onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${style}`}
                      >
                        <span className="font-bold text-gray-500 mr-2">{String.fromCharCode(65 + j)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {(submitted && (showAll || isWrong)) && (
                  <div className="mt-3 bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-sm text-blue-800"><strong>💬 Explanation:</strong> {q.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {Object.keys(answers).length < questions.length ? `Answer all questions (${Object.keys(answers).length}/${questions.length})` : 'Submit Quiz'}
        </button>
      )}
    </div>
  );
}
