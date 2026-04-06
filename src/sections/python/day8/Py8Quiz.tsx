
import { useState } from 'react';

export default function Py8Quiz() {
  const questions = [
    { q: "What keyword is used to define a function in Python?", options: ["function", "def", "define", "func"], answer: 1, explanation: "Python uses 'def' for both functions and procedures." },
    { q: "What does a function return if there is no return statement?", options: ["0", "False", "None", "Error"], answer: 2, explanation: "Python functions automatically return None if no return statement is present." },
    { q: "What is the difference between a parameter and an argument?", options: ["They are the same thing", "Parameter is in definition, argument is in call", "Argument is in definition, parameter is in call", "Parameters are global, arguments are local"], answer: 1, explanation: "Parameter = variable in definition header. Argument = actual value passed when calling." },
    { q: "Which keyword do you need to MODIFY a global variable inside a function?", options: ["global", "local", "extern", "public"], answer: 0, explanation: "You need 'global x' inside the function to modify a global variable x." },
    { q: "What will this print?\ndef add(a, b):\n    print(a + b)\nresult = add(3, 4)\nprint(result)", options: ["7\n7", "7\nNone", "None\n7", "Error"], answer: 1, explanation: "add() uses print not return, so it prints 7 but returns None. Then print(result) prints None." },
    { q: "Where must default parameters appear in a function definition?", options: ["At the start", "In the middle", "At the end", "Anywhere"], answer: 2, explanation: "Default parameters must come AFTER non-default parameters, i.e., at the end." },
    { q: "What is a local variable?", options: ["A variable defined outside all functions", "A variable that can be used anywhere", "A variable defined inside a function", "A variable with the global keyword"], answer: 2, explanation: "Local variables are created inside a function and only exist while that function runs." },
    { q: "Can you READ a global variable inside a function without declaring 'global'?", options: ["Yes", "No", "Only if it's an integer", "Only if it's a string"], answer: 0, explanation: "You can READ global variables freely. You only need 'global x' if you want to MODIFY the variable." },
    { q: "What does 'return' do in a function?", options: ["Prints the value", "Stops the program", "Sends a value back to the caller", "Creates a new variable"], answer: 2, explanation: "return sends a value back to wherever the function was called from, and stops execution of the function." },
    { q: "Which is a PROCEDURE (not a function)?", options: ["def get_max(numbers): return max(numbers)", "def calculate(x): return x * 2", "def display_menu(): print('1. Add')", "def is_valid(x): return 0 <= x <= 100"], answer: 2, explanation: "display_menu() has no return statement — it just does something (prints). That makes it a procedure." },
    { q: "What is wrong with: def func(a=10, b):", options: ["Nothing is wrong", "Default parameter before non-default", "Too few parameters", "Wrong syntax for default"], answer: 1, explanation: "Default parameters must come LAST. b has no default but comes after a=10 which has a default — this causes a SyntaxError." },
    { q: "What is the best practice for modifying data in functions?", options: ["Always use global variables", "Pass data as parameters, return results", "Use only local variables", "Never use functions"], answer: 1, explanation: "Best practice: pass values IN as parameters, get values OUT with return. Avoid global variables." },
  ];

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => selected[i] === q.answer).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🧠 Quiz – Functions & Procedures
      </h1>
      <p className="text-gray-500 text-lg mb-8">12 questions — test your understanding!</p>
      {submitted && (
        <div className={`p-6 rounded-xl mb-8 text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <p className="text-4xl font-black mb-2">{score >= 10 ? '🏆' : score >= 7 ? '👍' : '📚'}</p>
          <p className="text-2xl font-bold">{score}/{questions.length}</p>
          <p className="text-gray-600 mt-1">{score >= 10 ? 'Excellent! Functions mastered!' : score >= 7 ? 'Good job! Review the ones you missed.' : 'Keep practising — read the explanations!'}</p>
        </div>
      )}
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`bg-white rounded-xl border p-6 ${submitted ? selected[i] === q.answer ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
            <p className="font-bold text-gray-900 mb-4 whitespace-pre-line">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => !submitted && setSelected(prev => ({ ...prev, [i]: j }))}
                  className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                    submitted
                      ? j === q.answer ? 'bg-green-100 border-green-400 text-green-800' : selected[i] === j ? 'bg-red-100 border-red-400 text-red-800' : 'border-gray-200 text-gray-500'
                      : selected[i] === j ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  {String.fromCharCode(65 + j)}. {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${selected[i] === q.answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {selected[i] === q.answer ? '✅' : '❌'} {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted && Object.keys(selected).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="mt-8 w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors">
          Submit Quiz →
        </button>
      )}
      {submitted && (
        <button onClick={() => { setSelected({}); setSubmitted(false); }} className="mt-4 w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
          🔄 Try Again
        </button>
      )}
    </div>
  );
}
