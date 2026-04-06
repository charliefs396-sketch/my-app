import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "What is the result of 17 DIV 5?",
    options: ["2", "3", "3.4", "5"],
    correct: 1,
    explanation: "17 ÷ 5 = 3.4, but DIV gives only the integer part (whole number). So 17 DIV 5 = 3."
  },
  {
    question: "What is the result of 17 MOD 5?",
    options: ["3", "3.4", "2", "5"],
    correct: 2,
    explanation: "17 ÷ 5 = 3 remainder 2. MOD gives the remainder, so 17 MOD 5 = 2."
  },
  {
    question: "What does 4567 MOD 10 give you?",
    options: ["456", "4", "7", "45"],
    correct: 2,
    explanation: "MOD 10 always gives the LAST digit. 4567 ÷ 10 = 456 remainder 7. So the answer is 7."
  },
  {
    question: "What does 4567 DIV 10 give you?",
    options: ["7", "456", "457", "4567"],
    correct: 1,
    explanation: "DIV 10 removes the last digit. 4567 ÷ 10 = 456.7, DIV gives only the integer part = 456."
  },
  {
    question: "Which operator is used for 'not equal to' in pseudocode?",
    options: ["!=", "<>", "=/=", "NOT ="],
    correct: 1,
    explanation: "In Cambridge pseudocode, 'not equal to' is written as <>. NOT != (that's Python). NOT =/= or NOT =."
  },
  {
    question: "What is the result of: NOT (5 > 3)?",
    options: ["TRUE", "FALSE", "5", "Error"],
    correct: 1,
    explanation: "5 > 3 is TRUE. NOT TRUE = FALSE. The NOT operator flips the boolean value."
  },
  {
    question: "What does TRUE AND FALSE give?",
    options: ["TRUE", "FALSE", "Error", "MAYBE"],
    correct: 1,
    explanation: "AND requires BOTH sides to be TRUE. Since one side is FALSE, the result is FALSE."
  },
  {
    question: "What is the correct way to concatenate strings in pseudocode?",
    options: [
      'FirstName + " " + LastName',
      'FirstName & " " & LastName',
      'FirstName , " " , LastName',
      'CONCAT(FirstName, LastName)'
    ],
    correct: 1,
    explanation: "In Cambridge pseudocode, string concatenation uses the & (ampersand) symbol. The + is for arithmetic only."
  },
  {
    question: 'What does STR_TO_NUM("42") return?',
    options: ["The string \"42\"", "The integer 42", "An error", "4 and 2 separately"],
    correct: 1,
    explanation: "STR_TO_NUM converts a string to a number. \"42\" (string) becomes 42 (integer). Now you can do maths with it!"
  },
  {
    question: "What is the result of: 2 + 3 * 4 (without brackets)?",
    options: ["20", "14", "24", "Error"],
    correct: 1,
    explanation: "Operator precedence: multiplication is done before addition. So 3 * 4 = 12 first, then 2 + 12 = 14."
  },
  {
    question: "To check if a number is even, which expression do you use?",
    options: ["Num DIV 2 = 0", "Num MOD 2 = 0", "Num / 2 = 0", "Num AND 2 = 0"],
    correct: 1,
    explanation: "MOD gives the remainder. If a number MOD 2 gives 0, there's no remainder when dividing by 2, so it's even!"
  },
  {
    question: "What is the result of: TRUE OR FALSE?",
    options: ["TRUE", "FALSE", "Error", "MAYBE"],
    correct: 0,
    explanation: "OR requires at least ONE side to be TRUE. Since one side is TRUE, the result is TRUE."
  }
];

export default function D2Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionIdx: number, optionIdx: number) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting!");
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = submitted
    ? questions.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0)
    : 0;

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Day 2 Quiz</h1>
      <p className="text-gray-500 mb-6 text-lg">Test your knowledge of operators and type conversions — {questions.length} questions</p>

      {submitted && (
        <div className={`section-card mb-8 ${percentage >= 80 ? 'border-green-200 bg-green-50/50' : percentage >= 50 ? 'border-amber-200 bg-amber-50/50' : 'border-red-200 bg-red-50/50'}`}>
          <div className="text-center">
            <p className="text-5xl font-extrabold mb-2">
              {percentage >= 80 ? '🌟' : percentage >= 50 ? '👍' : '📚'}
            </p>
            <p className="text-3xl font-extrabold text-gray-800">{score} / {questions.length}</p>
            <p className="text-lg text-gray-500 mb-2">{percentage}%</p>
            <p className="text-gray-600">
              {percentage >= 90 ? "Outstanding! You've mastered Day 2!" :
               percentage >= 80 ? "Excellent work! Almost perfect!" :
               percentage >= 60 ? "Good effort! Review the topics you got wrong." :
               percentage >= 40 ? "Keep studying! Focus on DIV, MOD, and logical operators." :
               "Don't worry — go through the sections again and retry!"}
            </p>
            <button onClick={handleReset} className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-all">
              Try Again
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = answers[qIdx];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== q.correct;

          return (
            <div key={qIdx} className={`section-card ${isCorrect ? 'border-green-200' : isWrong ? 'border-red-200' : ''}`}>
              <p className="font-bold text-gray-800 mb-3">
                <span className="text-indigo-600">Q{qIdx + 1}.</span> {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, oIdx) => {
                  const isSelected = userAnswer === oIdx;
                  const isCorrectOption = q.correct === oIdx;

                  let btnClass = 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50';
                  if (submitted) {
                    if (isCorrectOption) btnClass = 'border-green-400 bg-green-50 text-green-800';
                    else if (isSelected && !isCorrectOption) btnClass = 'border-red-400 bg-red-50 text-red-800';
                    else btnClass = 'border-gray-200 opacity-60';
                  } else if (isSelected) {
                    btnClass = 'border-indigo-500 bg-indigo-50 text-indigo-800';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswer(qIdx, oIdx)}
                      className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${btnClass}`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                      {option}
                      {submitted && isCorrectOption && <span className="ml-2">✓</span>}
                      {submitted && isSelected && !isCorrectOption && <span className="ml-2">✗</span>}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  <span className="font-bold">{isCorrect ? '✓ Correct!' : '✗ Incorrect.'}</span> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Submit Quiz →
          </button>
          <p className="text-sm text-gray-400 mt-2">{Object.keys(answers).length} of {questions.length} answered</p>
        </div>
      )}
    </div>
  );
}
