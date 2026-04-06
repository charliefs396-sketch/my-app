import { useState } from 'react';

const questions = [
  {
    q: "What does a Linear Search function return when the target is NOT found?",
    options: ["0", "-1", "FALSE", "NULL"],
    correct: 1,
    explanation: "-1 is the convention for 'not found' because no valid array position (1-indexed) can ever be -1. Using 0 would be ambiguous since some systems use 0-indexing."
  },
  {
    q: "In a FUNCTION declaration, which keyword specifies the return type?",
    options: ["RETURN", "RETURNS", "OUTPUT", "TYPE"],
    correct: 1,
    explanation: "The keyword is RETURNS (with an S) in the function header: FUNCTION Name(...) RETURNS INTEGER. The keyword RETURN (without S) is used inside the body to send the value back."
  },
  {
    q: "Which loop type is best for basic Linear Search (find first match)?",
    options: ["REPEAT...UNTIL", "WHILE only", "FOR loop", "Either FOR or WHILE"],
    correct: 3,
    explanation: "Both FOR and WHILE work for linear search. FOR is simpler and more commonly used in exam answers. WHILE with a boolean flag is also acceptable and sometimes specifically requested."
  },
  {
    q: "You want to COUNT how many times 85 appears in an array. What is WRONG with this approach: IF DataArray[i] = 85 THEN RETURN i?",
    options: [
      "Nothing is wrong",
      "Should use RETURN Count not RETURN i",
      "RETURN exits the function immediately — you'd miss remaining elements",
      "Should use RETURN TRUE"
    ],
    correct: 2,
    explanation: "RETURN exits the function the moment it runs! For counting, you need to check every element. Use Count ← Count + 1 inside the loop, and RETURN Count AFTER the loop completes."
  },
  {
    q: "What is the correct way to call a LinearSearch function that returns an integer position?",
    options: [
      "LinearSearch(Names, 10, \"Ali\")",
      "Position = LinearSearch(Names, 10, \"Ali\")",
      "Position ← LinearSearch(Names, 10, \"Ali\")",
      "CALL LinearSearch(Names, 10, \"Ali\")"
    ],
    correct: 2,
    explanation: "Functions that return values are used in assignments with the ← arrow. Position ← LinearSearch(...) stores the returned value. Using = would be comparison, not assignment. CALL is used for PROCEDUREs, not FUNCTIONs."
  },
  {
    q: "A Linear Search function has parameters: (DataArray, Size, Target). Why pass Size as a parameter instead of hardcoding it?",
    options: [
      "It's just a style choice",
      "Makes the function reusable with arrays of different sizes",
      "Cambridge requires it",
      "To make the code longer"
    ],
    correct: 1,
    explanation: "Passing Size as a parameter makes the function reusable. If you hardcode Size ← 10, the function only works for arrays of exactly 10 elements. With Size as a parameter, the same function works for any array size."
  },
  {
    q: "What is the difference between FUNCTION and PROCEDURE?",
    options: [
      "FUNCTION uses FOR loops, PROCEDURE uses WHILE",
      "FUNCTION returns a value, PROCEDURE does not",
      "FUNCTION is faster, PROCEDURE is slower",
      "There is no difference"
    ],
    correct: 1,
    explanation: "FUNCTION always returns a value using RETURN and has RETURNS TYPE in its header. PROCEDURE never returns a value — it just performs actions (like outputting). Use FUNCTION when you need a result back, PROCEDURE when you just want to do something."
  },
  {
    q: "What keyword marks the end of a FUNCTION block?",
    options: ["ENDIF", "ENDLOOP", "ENDFUNCTION", "END"],
    correct: 2,
    explanation: "ENDFUNCTION (one word, all caps) marks the end of a function. Similarly, PROCEDURE ends with ENDPROCEDURE. Never just use END — that's not valid Cambridge pseudocode syntax."
  },
  {
    q: "In the WHILE version of linear search, the condition is: WHILE i <= Size AND Found = FALSE. What happens when Found becomes TRUE?",
    options: [
      "The loop continues forever",
      "WHILE condition becomes FALSE — loop exits",
      "An error occurs",
      "It resets Found to FALSE"
    ],
    correct: 1,
    explanation: "When Found becomes TRUE, the condition 'Found = FALSE' becomes FALSE. Since both parts of AND must be TRUE for the WHILE to continue, the loop exits immediately. This is how the WHILE version achieves early exit."
  },
  {
    q: "An array has values [3, 7, 3, 9, 3]. LinearSearch is called with Target = 3. What does it return?",
    options: ["1", "3", "5", "-1"],
    correct: 0,
    explanation: "LinearSearch returns the position of the FIRST match. At i=1, DataArray[1]=3=Target, so RETURN 1 is executed immediately. The function never checks positions 3 or 5 because it already returned."
  },
  {
    q: "Which of these correctly declares a local variable inside a function?",
    options: [
      "LOCAL DECLARE i : INTEGER",
      "DECLARE i : INTEGER",
      "VAR i : INTEGER",
      "INTEGER i"
    ],
    correct: 1,
    explanation: "In Cambridge pseudocode, you always use DECLARE for variables, whether inside or outside a function. The word LOCAL is not used — Cambridge pseudocode automatically treats variables declared inside a function as local to that function."
  },
  {
    q: "For outputting ALL positions where 'Ali' appears in an array, you should use:",
    options: [
      "A FUNCTION with RETURN inside the loop",
      "A PROCEDURE with OUTPUT inside the loop and a boolean flag",
      "Multiple calls to LinearSearch",
      "A FUNCTION that returns an array"
    ],
    correct: 1,
    explanation: "Use a PROCEDURE because you're outputting multiple values — you can't return them all with a single RETURN. A boolean flag (Found) tracks whether any match was found so you can show a 'not found' message if needed. The loop must NOT exit early — you need all positions."
  },
];

export default function D8Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Quiz — Linear Search</h1>
      <p className="text-gray-500 mb-8">12 questions covering everything from Day 8. Try to answer without looking back!</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl border-2 text-center ${
          score >= 10 ? 'bg-green-50 border-green-300' :
          score >= 7 ? 'bg-amber-50 border-amber-300' :
          'bg-red-50 border-red-300'
        }`}>
          <div className="text-5xl mb-2">
            {score >= 10 ? '🏆' : score >= 7 ? '👍' : '📚'}
          </div>
          <p className="text-4xl font-extrabold text-gray-800 mb-1">{score}/12</p>
          <p className="text-lg font-bold text-gray-600">
            {score >= 10 ? 'Excellent! Linear Search mastered!' :
             score >= 7 ? 'Good — review the ones you missed.' :
             'Keep practising — re-read the sections and try again.'}
          </p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full transition-all ${score >= 10 ? 'bg-green-500' : score >= 7 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{ width: `${(score / 12) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi} className={`card ${submitted
            ? answers[qi] === q.correct ? 'border-l-4 border-green-400' : 'border-l-4 border-red-400'
            : 'border-l-4 border-sky-200'
          }`}>
            <p className="font-bold text-gray-800 mb-4">
              <span className="text-sky-600 mr-2">Q{qi + 1}.</span>{q.q}
            </p>
            <div className="space-y-2 mb-4">
              {q.options.map((opt, oi) => {
                let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100';
                if (submitted) {
                  if (oi === q.correct) style = 'bg-green-100 border-green-400 text-green-800';
                  else if (oi === answers[qi]) style = 'bg-red-100 border-red-400 text-red-800';
                  else style = 'bg-gray-50 border-gray-200 text-gray-400';
                } else if (answers[qi] === oi) {
                  style = 'bg-sky-100 border-sky-400 text-sky-800';
                }
                return (
                  <button
                    key={oi}
                    onClick={() => !submitted && setAnswers(a => ({ ...a, [qi]: oi }))}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${style}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className={`p-4 rounded-xl text-sm ${answers[qi] === q.correct ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                <span className="font-bold">{answers[qi] === q.correct ? '✅ Correct! ' : '❌ Incorrect. '}</span>
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full mt-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {Object.keys(answers).length < questions.length
            ? `Answer all questions (${Object.keys(answers).length}/${questions.length} done)`
            : 'Submit Quiz 🚀'}
        </button>
      ) : (
        <button
          onClick={() => { setAnswers({}); setSubmitted(false); }}
          className="w-full mt-8 py-4 bg-gray-600 text-white font-bold rounded-2xl hover:bg-gray-700 transition-all"
        >
          🔄 Retake Quiz
        </button>
      )}
    </div>
  );
}
