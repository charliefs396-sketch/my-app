import { useState } from 'react';

const questions = [
  {
    q: "Which of the following is the correct Python syntax for an IF statement?",
    options: ["IF age >= 18 THEN", "if age >= 18:", "if age >= 18", "if (age >= 18):"],
    answer: 1,
    explanation: "Python uses 'if' (lowercase) followed by the condition and a colon (:). No THEN keyword, no brackets required.",
  },
  {
    q: "What is the Python equivalent of ELSE IF in pseudocode?",
    options: ["else if", "ELIF", "elif", "elseif"],
    answer: 2,
    explanation: "'elif' is Python's keyword for 'else if'. It must be lowercase and written as one word.",
  },
  {
    q: "What error does this code produce?  if age >= 18    print('Adult')",
    options: ["NameError", "SyntaxError (missing colon)", "IndentationError", "TypeError"],
    answer: 1,
    explanation: "The missing colon after 'if age >= 18' causes a SyntaxError. Python always needs a colon at the end of if/elif/else lines.",
  },
  {
    q: "What is the output if mark = 75?\n\nif mark >= 80:\n    grade = 'A'\nelif mark >= 70:\n    grade = 'B'\nelif mark >= 60:\n    grade = 'C'\nelse:\n    grade = 'F'\nprint(grade)",
    options: ["A", "B", "C", "F"],
    answer: 1,
    explanation: "75 >= 80 is False, 75 >= 70 is True. So grade = 'B'. Once an elif is True, the rest are skipped.",
  },
  {
    q: "What is wrong with: if x = 5:",
    options: ["Nothing, it's correct", "Should use == not =", "Missing colon", "x must be declared first"],
    answer: 1,
    explanation: "= is assignment, == is comparison. In a condition you must use == to check equality.",
  },
  {
    q: "How many of these statements will print if age = 20 and has_id = True?\n\nif age >= 18:\n    if has_id:\n        print('Entry')\n    else:\n        print('Need ID')\nelse:\n    print('Too young')",
    options: ["0 (nothing prints)", "1 (Entry)", "2 (Entry and Need ID)", "3 (all print)"],
    answer: 1,
    explanation: "age = 20 >= 18 is True → enter outer IF. has_id = True → enter inner IF. Only 'Entry' prints.",
  },
  {
    q: "What does 'and' do in Python?",
    options: ["True if at least one condition is True", "True only if BOTH conditions are True", "Flips True to False", "Adds two numbers"],
    answer: 1,
    explanation: "'and' requires BOTH conditions to be True. If either is False, the whole expression is False.",
  },
  {
    q: "Which correctly checks if a number is between 1 and 10 (inclusive)?",
    options: ["if num > 1 and num < 10:", "if 1 <= num <= 10:", "if num >= 1 or num <= 10:", "if num >= 1 AND num <= 10:"],
    answer: 1,
    explanation: "Python's chained comparison '1 <= num <= 10' is the cleanest. Option A would miss 1 and 10. Option C is wrong (or means any number satisfies it). Option D uses AND which isn't Python syntax.",
  },
  {
    q: "What is the output?\n\nx = 15\nif x > 10:\n    print('Big')\nif x > 20:\n    print('Very big')\nprint('Done')",
    options: ["Big\nVery big\nDone", "Big\nDone", "Very big\nDone", "Done"],
    answer: 1,
    explanation: "Both are separate 'if' statements (not elif). x > 10 is True → prints 'Big'. x > 20 is False → skips. 'Done' always prints.",
  },
  {
    q: "What is the Python keyword to flip a boolean?",
    options: ["flip", "NOT", "not", "!"],
    answer: 2,
    explanation: "Python uses 'not' (lowercase). 'NOT' won't work (wrong case). '!' is JavaScript/C style and doesn't work in Python for this purpose.",
  },
  {
    q: "An elif block without a final else — what happens if no condition is True?",
    options: ["Error", "The else of the first if runs", "Nothing happens, code continues after", "Python asks for input"],
    answer: 2,
    explanation: "If no if/elif condition is True and there's no else, Python simply skips all the blocks and continues with the next statement after the if structure.",
  },
  {
    q: "What does .lower() do in:  has_id = input('Have ID? ').lower()",
    options: ["Converts to lowercase so 'YES', 'Yes', 'yes' all match 'yes'", "Checks if the string is lowercase", "Converts numbers to lowercase", "Removes spaces"],
    answer: 0,
    explanation: ".lower() converts the string to all lowercase. This means you can compare with 'yes' and it will match whether the user typed 'YES', 'Yes', 'YES', etc.",
  },
];

export default function Py3Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([i, a]) => a === questions[parseInt(i)].answer).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — IF Statements</h1>
      <p className="text-gray-500 mb-8">12 questions · Python Day 3</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
          <div className="text-lg font-semibold">
            {score >= 10 ? '🎉 Excellent! You\'ve mastered IF statements!' : score >= 7 ? '👍 Good work! Review the ones you missed.' : '📚 Keep practising — re-read the sections and try again.'}
          </div>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-4 px-6 py-2 bg-white border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Try Again
          </button>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`bg-white border rounded-2xl p-6 shadow-sm ${submitted ? (answers[i] === q.answer ? 'border-green-300' : 'border-red-300') : 'border-gray-100'}`}>
            <h3 className="font-bold text-gray-900 mb-4">
              <span className="text-emerald-600 mr-2">Q{i + 1}.</span>
              <pre className="inline whitespace-pre-wrap font-sans">{q.q}</pre>
            </h3>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  disabled={submitted}
                  onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    submitted
                      ? j === q.answer ? 'border-green-400 bg-green-50 text-green-800'
                        : j === answers[i] ? 'border-red-400 bg-red-50 text-red-800'
                        : 'border-gray-100 text-gray-400'
                      : answers[i] === j ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                      : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span> {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className={`mt-4 p-4 rounded-xl text-sm ${answers[i] === q.answer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <span className="font-bold">{answers[i] === q.answer ? '✅ Correct! ' : '❌ Incorrect. '}</span>
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && Object.keys(answers).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
          Submit Quiz
        </button>
      )}
      {!submitted && Object.keys(answers).length < questions.length && (
        <p className="mt-4 text-center text-gray-400 text-sm">{questions.length - Object.keys(answers).length} questions remaining</p>
      )}
    </div>
  );
}
