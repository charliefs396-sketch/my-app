import { useState } from 'react';

export default function Py9Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { q: "What does linear_search return when the target is NOT found?", options: ["0", "False", "-1", "None"], correct: 2, explanation: "-1 is the convention for 'not found' because 0 is a valid index." },
    { q: "Why do we use range(len(data)) instead of 'for x in data'?", options: ["It's faster", "We need the index number", "It uses less memory", "It's required by Python"], correct: 1, explanation: "We need the INDEX to return it. 'for x in data' only gives the value." },
    { q: "Where should 'return -1' go in a linear search?", options: ["Inside the for loop", "Inside the if statement", "In an else inside the loop", "After the for loop ends"], correct: 3, explanation: "return -1 must be AFTER the loop — only after checking ALL elements can we say 'not found'." },
    { q: "What does this return? linear_search([5,3,8,1], 8)", options: ["8", "3", "2", "-1"], correct: 2, explanation: "8 is at index 2 (0-indexed: [0]=5, [1]=3, [2]=8)." },
    { q: "What does this return? linear_search([5,3,8,1], 7)", options: ["0", "-1", "4", "None"], correct: 1, explanation: "7 is not in the list, so it returns -1." },
    { q: "In count_occurrences, why can't we use 'return' inside the loop?", options: ["Python doesn't allow it", "It would only count the first match", "It would crash", "It's slower"], correct: 1, explanation: "return exits the function immediately. We need to keep looping to count ALL matches." },
    { q: "What does find_all_positions return?", options: ["An integer", "A string", "A list of indices", "True or False"], correct: 2, explanation: "It returns a list containing all indices where the target was found." },
    { q: "data = ['a','b','c','a','b']. What does count_occurrences(data, 'a') return?", options: ["1", "2", "3", "[0, 3]"], correct: 1, explanation: "'a' appears at index 0 and 3 — that's 2 occurrences." },
    { q: "What's wrong with: if data[i] = target:", options: ["Nothing", "= should be ==", "data should be list", "target should be in quotes"], correct: 1, explanation: "= is assignment, == is comparison. Using = in an if statement causes a SyntaxError." },
    { q: "Does linear search require sorted data?", options: ["Yes, always", "No, it works on any data", "Only for numbers", "Only for strings"], correct: 1, explanation: "Linear search works on ANY data — sorted or unsorted. Binary search requires sorted data." },
    { q: "What is the worst case for linear search on a list of 100 items?", options: ["1 comparison", "50 comparisons", "100 comparisons", "10 comparisons"], correct: 2, explanation: "Worst case: target is the last element or not in the list = 100 comparisons (check every element)." },
    { q: "How would you make the search case-insensitive?", options: ["Use = instead of ==", "Use data[i].lower() == target.lower()", "Use data[i] in target", "You can't"], correct: 1, explanation: "Convert both to lowercase before comparing: data[i].lower() == target.lower()" }
  ];

  const score = Object.entries(answers).filter(([i, a]) => a === questions[Number(i)].correct).length;

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Linear Search in Python
      </h1>

      <div className="space-y-6">
        {questions.map((question, qi) => (
          <div key={qi} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="font-bold text-gray-800 mb-3">{qi + 1}. {question.q}</p>
            <div className="grid gap-2">
              {question.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [qi]: oi }))}
                  className={`text-left p-3 rounded-xl border-2 transition-all ${
                    showResults
                      ? oi === question.correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : answers[qi] === oi
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : 'border-gray-200'
                      : answers[qi] === oi
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResults && <p className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{question.explanation}</p>}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setShowResults(true)} className="btn-primary bg-emerald-600 hover:bg-emerald-700">Check Answers</button>
        <button onClick={() => { setShowResults(false); setAnswers({}); }} className="btn-secondary">Reset</button>
        {showResults && (
          <span className={`text-xl font-bold ${score >= 10 ? 'text-green-600' : score >= 7 ? 'text-amber-600' : 'text-red-600'}`}>
            {score}/{questions.length} ({Math.round(score / questions.length * 100)}%)
          </span>
        )}
      </div>
    </div>
  );
}