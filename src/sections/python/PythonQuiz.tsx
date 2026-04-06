import { useState } from 'react';

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    q: 'What does print() do in Python?',
    options: ['Takes input from user', 'Displays output on screen', 'Declares a variable', 'Creates a file'],
    correct: 1,
    explanation: 'print() displays text or values on the screen. It is equivalent to OUTPUT in pseudocode.',
  },
  {
    q: 'What is the output of: print(type(3.14))?',
    options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'real'>"],
    correct: 2,
    explanation: "3.14 is a decimal number, so Python classifies it as a float. Note: Python calls it 'float', not 'real' like pseudocode.",
  },
  {
    q: 'What does input() always return?',
    options: ['An integer', 'A float', 'A boolean', 'A string'],
    correct: 3,
    explanation: 'input() ALWAYS returns a string, even if the user types a number. You must use int() or float() to convert it.',
  },
  {
    q: 'What is the output of: x = input("num: ") followed by print(x + x) if the user types 5?',
    options: ['10', '55', 'Error', '5'],
    correct: 1,
    explanation: 'Since input() returns a string, x is "5" (a string). "5" + "5" concatenates to "55". To get 10, you would need int(input("num: ")).',
  },
  {
    q: 'Which is the correct way to get an integer from the user?',
    options: ['age = input("Age: ")', 'age = integer(input("Age: "))', 'age = int(input("Age: "))', 'age = INPUT("Age: ")'],
    correct: 2,
    explanation: 'int() converts the string returned by input() into an integer. Python uses int(), not integer().',
  },
  {
    q: 'What is an f-string?',
    options: ['A string that starts with "f" and allows variables inside {}', 'A function string', 'A file string', 'A format type in Python'],
    correct: 0,
    explanation: 'f-strings (formatted string literals) start with f before the quote and let you embed variables inside curly braces {}.',
  },
  {
    q: 'In Python, how do you write a comment?',
    options: ['// This is a comment', '/* This is a comment */', '# This is a comment', '-- This is a comment'],
    correct: 2,
    explanation: 'Python uses # for comments. Pseudocode uses //. This is a common difference to remember!',
  },
  {
    q: 'What is the difference between = and == in Python?',
    options: ['They are the same', '= is comparison, == is assignment', '= is assignment, == is comparison', '== is used for strings only'],
    correct: 2,
    explanation: 'In Python, = assigns a value (like age = 17), while == compares two values (like if age == 17). This is different from pseudocode where assignment uses the arrow symbol.',
  },
  {
    q: 'How do you represent a constant in Python?',
    options: ['CONSTANT PI = 3.14', 'const PI = 3.14', 'PI = 3.14 (using ALL_CAPS by convention)', 'final PI = 3.14'],
    correct: 2,
    explanation: 'Python has no real constant keyword. By convention, we use ALL_CAPS variable names to indicate a value should not be changed.',
  },
  {
    q: 'What is the Python equivalent of REAL in pseudocode?',
    options: ['real', 'decimal', 'float', 'double'],
    correct: 2,
    explanation: 'Pseudocode REAL maps to Python float. Both represent decimal (floating-point) numbers.',
  },
];

export default function PythonQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (qIndex: number, optionIndex: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const score = Object.entries(answers).filter(
    ([qIdx, ans]) => questions[parseInt(qIdx)].correct === ans
  ).length;

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Python Quiz</h1>
      <p className="text-gray-500 mb-6 text-lg">Test your understanding — 10 questions on everything you learned!</p>

      {questions.map((q, i) => {
        const userAnswer = answers[i];
        const isAnswered = userAnswer !== undefined;

        return (
          <div key={i} className="section-card mb-4">
            <h3 className="font-bold text-gray-800 mb-3">
              <span className="text-emerald-600 mr-2">Q{i + 1}.</span> {q.q}
            </h3>
            <div className="space-y-2">
              {q.options.map((option, j) => {
                let optionClass = 'bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50';

                if (showResults) {
                  if (j === q.correct) {
                    optionClass = 'bg-green-100 border-2 border-green-500 text-green-800';
                  } else if (j === userAnswer && j !== q.correct) {
                    optionClass = 'bg-red-100 border-2 border-red-400 text-red-800';
                  } else {
                    optionClass = 'bg-gray-50 border border-gray-200 opacity-50';
                  }
                } else if (j === userAnswer) {
                  optionClass = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800';
                }

                return (
                  <button
                    key={j}
                    onClick={() => handleAnswer(i, j)}
                    className={'quiz-option w-full text-left px-4 py-3 rounded-xl text-sm font-medium ' + optionClass}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span> {option}
                  </button>
                );
              })}
            </div>

            {showResults && isAnswered && (
              <div className={'mt-3 p-3 rounded-lg text-sm ' + (userAnswer === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800')}>
                <strong>{userAnswer === q.correct ? '✅ Correct!' : '❌ Incorrect.'}</strong>{' '}
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      <div className="flex gap-4 mt-6">
        {!showResults && (
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={'px-8 py-3 rounded-xl font-bold text-lg transition-all ' +
              (allAnswered
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed')
            }
          >
            Submit Answers
          </button>
        )}

        {showResults && (
          <div className="w-full">
            <div className={'p-6 rounded-2xl text-center ' + (score >= 7 ? 'bg-green-50 border-2 border-green-300' : score >= 5 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300')}>
              <p className="text-4xl font-extrabold mb-2">
                {score}/{questions.length}
              </p>
              <p className="text-lg font-bold">
                {score === 10 && '🎉 PERFECT! You nailed Python Day 1!'}
                {score >= 7 && score < 10 && '🌟 Great job! Review the ones you missed.'}
                {score >= 5 && score < 7 && '📚 Not bad! Go back and review the sections.'}
                {score < 5 && '💪 Keep studying! Re-read the sections and try again.'}
              </p>
            </div>
            <button
              onClick={() => { setAnswers({}); setShowResults(false); }}
              className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              🔄 Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
