import { useState } from 'react';

const questions = [
  { q: 'What is the time allowed for Paper 2?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'], answer: 2, explanation: 'Paper 2 is 2 hours long, worth 100 marks.' },
  { q: 'Which loop ALWAYS executes at least once?', options: ['FOR', 'WHILE', 'REPEAT...UNTIL', 'All of them'], answer: 2, explanation: 'REPEAT...UNTIL checks condition AFTER executing, so it always runs at least once.' },
  { q: 'What does BYREF mean?', options: ['A copy of the variable is passed', 'The original variable can be changed', 'The parameter is read-only', 'Nothing — it is the default'], answer: 1, explanation: 'BYREF passes the original variable — changes inside the procedure affect the original.' },
  { q: 'Binary Search requires the data to be...', options: ['Unsorted', 'Sorted', 'In an array of records', 'Larger than 10 items'], answer: 1, explanation: 'Binary Search ONLY works on sorted data. Always sort first!' },
  { q: 'What is the base case in Factorial(N)?', options: ['N = 0', 'N = 1', 'N <= 1', 'N > 0'], answer: 2, explanation: 'The base case is N <= 1 which covers both N=0 and N=1, both return 1.' },
  { q: 'Which is the correct way to declare an array of 10 integers?', options: ['DECLARE A : ARRAY[0:9] OF INTEGER', 'DECLARE A : ARRAY[1:10] OF INTEGER', 'DECLARE A[10] : INTEGER', 'ARRAY A : INTEGER[1:10]'], answer: 1, explanation: 'Cambridge pseudocode uses 1-indexed arrays: DECLARE A : ARRAY[1:10] OF INTEGER' },
  { q: 'What does the Swapped flag do in Bubble Sort?', options: ['Counts the number of swaps', 'Stops early if no swaps in a pass', 'Tracks which elements are sorted', 'Prevents overflow'], answer: 1, explanation: 'If Swapped stays FALSE for a whole pass, the array is already sorted — exit early!' },
  { q: 'What is a STACK\'s order?', options: ['FIFO - First In First Out', 'LIFO - Last In First Out', 'Random order', 'Sorted order'], answer: 1, explanation: 'Stack is LIFO — Last In First Out. Like a stack of plates.' },
  { q: 'What is Corrective maintenance?', options: ['Improving performance', 'Adapting to new OS', 'Fixing bugs', 'Adding new features'], answer: 2, explanation: 'Corrective = fixing bugs/errors. Adaptive = new environment. Perfective = improving performance.' },
  { q: 'In a trace table, what happens when Low > High in Binary Search?', options: ['Mid is recalculated', 'Target is found', 'Target is not found — return -1', 'Loop continues from start'], answer: 2, explanation: 'When Low > High the search space is empty — target not in array, return -1.' },
];

export default function D30Quiz() {
  const [selected, setSelected] = useState<{[k:number]:number}>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(selected).filter(([i, v]) => questions[parseInt(i)].answer === v).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        🧠 Final Quiz — All Topics
      </h1>
      <p className="text-gray-500 text-lg mb-8">10 questions covering Days 1–29</p>

      {submitted && (
        <div className={`rounded-xl p-6 mb-8 text-center ${score >= 8 ? 'bg-green-50 border-2 border-green-300' : score >= 5 ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <p className="text-5xl font-black mb-2">{score}/10</p>
          <p className="text-xl font-bold">{score >= 8 ? '🎉 Excellent! You\'re exam ready!' : score >= 5 ? '📚 Good effort — review weak areas' : '💪 Keep revising — you\'ll get there!'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="font-bold text-gray-900 mb-4">Q{i+1}. {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <button key={j}
                  onClick={() => !submitted && setSelected(prev => ({...prev, [i]: j}))}
                  className={`w-full text-left p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    submitted
                      ? j === q.answer ? 'bg-green-100 border-green-400 text-green-800'
                        : selected[i] === j ? 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-gray-50 border-gray-200 text-gray-500'
                      : selected[i] === j ? 'bg-indigo-100 border-indigo-400 text-indigo-800'
                      : 'bg-gray-50 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}>
                  {String.fromCharCode(65+j)}. {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                💡 {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button onClick={() => setSubmitted(true)}
          disabled={Object.keys(selected).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl disabled:opacity-50 hover:-translate-y-0.5 transition-all shadow-lg">
          Submit Final Quiz 🎯
        </button>
      ) : (
        <button onClick={() => { setSelected({}); setSubmitted(false); }}
          className="mt-8 w-full py-4 bg-gray-600 text-white font-bold text-lg rounded-xl hover:-translate-y-0.5 transition-all">
          Try Again 🔄
        </button>
      )}
    </div>
  );
}
