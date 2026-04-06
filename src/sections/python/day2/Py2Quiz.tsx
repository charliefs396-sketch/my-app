import { useState } from 'react';

const questions = [
  {
    q: "What does 17 // 5 evaluate to in Python?",
    options: ["3.4", "3", "2", "4"],
    answer: 1,
    explanation: "// is integer (floor) division. 17 ÷ 5 = 3.4, but // drops the decimal → 3. This is equivalent to DIV in pseudocode."
  },
  {
    q: "What does 17 % 5 evaluate to?",
    options: ["3", "3.4", "2", "0"],
    answer: 2,
    explanation: "% gives the remainder. 17 = 3×5 + 2, so the remainder is 2. Same as MOD in pseudocode."
  },
  {
    q: "Which of these correctly checks if age equals 18 in Python?",
    options: ["if age = 18:", "if age == 18:", "if age := 18:", "if age <> 18:"],
    answer: 1,
    explanation: "== is the comparison operator. = is assignment only. Using = in an if statement causes a SyntaxError in Python."
  },
  {
    q: "What is the result of 10 / 2 in Python?",
    options: ["5", "5.0", "True", "Error"],
    answer: 1,
    explanation: "/ always returns a float in Python, even when the result is a whole number. So 10/2 = 5.0 (not 5). Use // for integer result."
  },
  {
    q: "What does print('Ha' * 3) output?",
    options: ["Ha Ha Ha", "HaHaHa", "3Ha", "Error"],
    answer: 1,
    explanation: "The * operator repeats a string. 'Ha' * 3 = 'HaHaHa'. Note: no spaces are added automatically."
  },
  {
    q: "Which logical operators does Python use?",
    options: ["AND OR NOT", "and or not", "& | !", "And Or Not"],
    answer: 1,
    explanation: "Python uses lowercase and, or, not. Writing AND, OR, NOT gives a NameError because Python treats them as undefined variable names."
  },
  {
    q: "What does f'Hello {name}' produce if name = 'Ali'?",
    options: ["Hello {name}", "Hello name", "Hello Ali", "f'Hello Ali'"],
    answer: 2,
    explanation: "f-strings evaluate expressions inside {}. f'Hello {name}' with name='Ali' produces 'Hello Ali'. The f prefix is essential!"
  },
  {
    q: "What happens when you run: print('Age: ' + 17)?",
    options: ["Age: 17", "Age17", "TypeError", "SyntaxError"],
    answer: 2,
    explanation: "You cannot concatenate a string and an integer with + in Python. This causes a TypeError. Fix: use str(17) or f'Age: {17}'."
  },
  {
    q: "What is 2 ** 8 in Python?",
    options: ["16", "256", "10", "Error"],
    answer: 1,
    explanation: "** is the power operator. 2**8 = 2×2×2×2×2×2×2×2 = 256. Pseudocode doesn't have this operator."
  },
  {
    q: "For n = 1234, what does (n % 100) // 10 give?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "n % 100 = 1234 % 100 = 34 (last 2 digits). Then 34 // 10 = 3 (tens digit). This is the digit extraction pattern!"
  },
  {
    q: "What is the precedence order (highest first)?",
    options: ["+ - then * / then **", "** then * / // % then + -", "+ - then ** then * /", "All operators have equal precedence"],
    answer: 1,
    explanation: "Precedence: brackets → ** (power) → * / // % → + -. So 2 + 3 * 4 = 14 (not 20), and 2**3+1 = 9 (not 512)."
  },
  {
    q: "What does True and False or True evaluate to?",
    options: ["False", "True", "Error", "None"],
    answer: 1,
    explanation: "and has higher precedence than or. So: (True and False) or True = False or True = True."
  },
];

export default function Py2Quiz() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => selected[i] === q.answer).length
    : 0;

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (!submitted) setSelected(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Day 2: Operators</h1>
      <p className="text-gray-500 mb-8">12 questions covering arithmetic, comparison, logical operators, and string operations.</p>

      {submitted && (
        <div className={`rounded-2xl p-6 mb-8 text-center ${score >= 10 ? 'bg-green-50 border border-green-200' : score >= 7 ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'}`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className={`text-xl font-bold ${score >= 10 ? 'text-green-700' : score >= 7 ? 'text-yellow-700' : 'text-red-700'}`}>
            {score >= 10 ? '🎉 Excellent! Day 2 mastered!' : score >= 7 ? '👍 Good effort! Review the explanations below.' : '📚 Keep revising! Read the explanations carefully.'}
          </p>
          <p className="text-gray-500 text-sm mt-1">{Math.round((score/questions.length)*100)}% correct</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = selected[qIdx];
          const isCorrect = userAnswer === q.answer;

          return (
            <div key={qIdx} className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${submitted ? (isCorrect ? 'border-green-200' : 'border-red-200') : 'border-gray-100'}`}>
              <div className="p-6">
                <p className="font-bold text-gray-900 mb-4">
                  <span className="text-emerald-600 mr-2">Q{qIdx + 1}.</span>{q.q}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    let cls = 'p-3 rounded-xl border-2 text-sm font-medium cursor-pointer transition-all text-left ';
                    if (submitted) {
                      if (oIdx === q.answer) cls += 'border-green-500 bg-green-50 text-green-800';
                      else if (oIdx === userAnswer) cls += 'border-red-400 bg-red-50 text-red-800';
                      else cls += 'border-gray-100 bg-gray-50 text-gray-400';
                    } else {
                      cls += userAnswer === oIdx
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700';
                    }
                    return (
                      <button key={oIdx} onClick={() => handleSelect(qIdx, oIdx)} className={cls}>
                        <span className="font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>{opt}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className={`mt-4 p-4 rounded-xl text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <span className="font-bold">{isCorrect ? '✅ Correct! ' : '❌ Incorrect. '}</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(selected).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          {Object.keys(selected).length < questions.length
            ? `Answer all questions (${Object.keys(selected).length}/${questions.length})`
            : 'Submit Answers'}
        </button>
      ) : (
        <button
          onClick={() => { setSelected({}); setSubmitted(false); }}
          className="mt-8 w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg transition-all"
        >
          🔄 Retry Quiz
        </button>
      )}
    </div>
  );
}
