import { useState } from 'react';

export default function D28Quiz() {
  const questions = [
    { q: "What is the BASE CASE in Factorial(N)?", options: ["N = 0", "N <= 1", "N >= 1", "N = 2"], correct: 1, explanation: "The base case is IF N <= 1 THEN RETURN 1. Using <= 1 handles both N=0 and N=1 safely." },
    { q: "What does Factorial(4) return?", options: ["12", "16", "24", "120"], correct: 2, explanation: "Factorial(4) = 4 × 3 × 2 × 1 = 24." },
    { q: "What is a stack overflow?", options: ["When the array is too large", "When recursion has no base case and runs forever", "When a variable overflows its range", "When a file is too large"], correct: 1, explanation: "Stack overflow happens when infinite recursion fills up the call stack memory." },
    { q: "How many recursive calls does Factorial(5) make?", options: ["3", "4", "5", "6"], correct: 1, explanation: "Factorial(5) calls Factorial(4), which calls Factorial(3), Factorial(2), Factorial(1). That's 4 recursive calls." },
    { q: "Which keyword do you use to call a recursive PROCEDURE?", options: ["RETURN", "CALL", "USE", "RUN"], correct: 1, explanation: "PROCEDURE calls use CALL. FUNCTION calls use the return value directly (no CALL keyword)." },
    { q: "What is the RETURN value of Factorial(1)?", options: ["0", "1", "2", "undefined"], correct: 1, explanation: "Factorial(1): N <= 1 is TRUE, so RETURN 1. This is the base case." },
    { q: "What is Fibonacci(5)? (Fib sequence: 0,1,1,2,3,5,8...)", options: ["3", "4", "5", "8"], correct: 2, explanation: "Fibonacci sequence: Fib(0)=0, Fib(1)=1, Fib(2)=1, Fib(3)=2, Fib(4)=3, Fib(5)=5." },
    { q: "What happens when Countdown(0) is called?", options: ["It outputs 0", "It outputs 'Go!'", "It crashes", "It returns 0"], correct: 1, explanation: "In Countdown, when N <= 0, the base case executes: OUTPUT 'Go!'" },
    { q: "Which is an advantage of recursion over iteration?", options: ["Uses less memory", "Faster execution", "More elegant for naturally recursive problems", "Easier to debug"], correct: 2, explanation: "Recursion is more elegant for problems like factorial, Fibonacci, tree traversal that are naturally recursive." },
    { q: "In a recursive function, what does RETURN do?", options: ["Stops ALL recursion immediately", "Ends the current call and passes value back to caller", "Restarts the function from the beginning", "Skips to ENDFUNCTION"], correct: 1, explanation: "RETURN ends the CURRENT call only and passes the value back to whoever called it. Other waiting calls then continue." },
    { q: "What is the recursive case in SumTo(N) = 1+2+...+N?", options: ["RETURN N", "RETURN N + SumTo(N-1)", "RETURN SumTo(N+1)", "RETURN 1"], correct: 1, explanation: "SumTo(N) = N + SumTo(N-1). Each call adds N to the sum of everything below it." },
    { q: "Why is recursive Fibonacci inefficient?", options: ["It uses BYREF", "It calculates the same values multiple times", "It has too many parameters", "It uses STRING instead of INTEGER"], correct: 1, explanation: "Fibonacci(5) calls Fibonacci(3) twice and Fibonacci(2) three times — massive redundancy that grows exponentially." },
  ];

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => selected[i] === q.correct).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Day 28 Quiz — Recursion</h2>
      <p className="text-gray-500 mb-6">12 questions. Test your understanding of recursion, trace tables, and base cases.</p>

      {submitted && (
        <div className={`mb-6 p-6 rounded-xl border-2 text-center ${score >= 10 ? 'bg-green-50 border-green-300' : score >= 7 ? 'bg-amber-50 border-amber-300' : 'bg-red-50 border-red-300'}`}>
          <p className="text-4xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-xl font-bold">{score >= 10 ? '🎉 Excellent! You understand recursion!' : score >= 7 ? '👍 Good! Review the trace table section.' : '📚 Keep practising — focus on the algorithm section.'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="font-bold text-gray-900 mb-4">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => !submitted && setSelected(prev => ({ ...prev, [i]: j }))}
                  className={`text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    submitted
                      ? j === q.correct ? 'bg-green-100 border-green-500 text-green-800'
                        : selected[i] === j ? 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200 text-gray-500'
                      : selected[i] === j ? 'bg-violet-100 border-violet-500 text-violet-800'
                      : 'bg-gray-50 border-gray-200 hover:border-violet-300 hover:bg-violet-50'
                  }`}
                >
                  {String.fromCharCode(65 + j)}. {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800"><span className="font-bold">Explanation:</span> {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(selected).length < questions.length}
          className="mt-6 w-full py-3 bg-violet-600 text-white rounded-xl font-bold text-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit Quiz ({Object.keys(selected).length}/{questions.length} answered)
        </button>
      ) : (
        <button
          onClick={() => { setSubmitted(false); setSelected({}); }}
          className="mt-6 w-full py-3 bg-gray-600 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-colors"
        >
          🔄 Retry Quiz
        </button>
      )}
    </div>
  );
}
