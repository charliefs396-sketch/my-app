import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What is the correct way to declare a variable called "Score" that stores whole numbers?',
    options: [
      'Score = INTEGER',
      'DECLARE Score : INTEGER',
      'INTEGER Score',
      'var Score : INTEGER',
    ],
    correct: 1,
    explanation: 'The Cambridge pseudocode syntax is: DECLARE <name> : <type>. So it\'s DECLARE Score : INTEGER.',
  },
  {
    id: 2,
    question: 'Which symbol is used for ASSIGNMENT in A Level pseudocode?',
    options: [
      '= (equals)',
      ':= (colon equals)',
      '← (left arrow)',
      '== (double equals)',
    ],
    correct: 2,
    explanation: 'At A Level, the LEFT ARROW ← is used for assignment. The = sign is used for comparison and constant definition.',
  },
  {
    id: 3,
    question: 'What data type should a phone number be stored as?',
    options: ['INTEGER', 'REAL', 'STRING', 'CHAR'],
    correct: 2,
    explanation: 'Phone numbers should be STRING because: (1) they can start with 0 which would be lost as an integer, (2) they may contain dashes or spaces, (3) you don\'t do maths on phone numbers.',
  },
  {
    id: 4,
    question: 'What is the difference between CHAR and STRING?',
    options: [
      'There is no difference',
      'CHAR uses single quotes and holds ONE character; STRING uses double quotes and holds multiple',
      'CHAR is for numbers, STRING is for text',
      'CHAR is faster than STRING',
    ],
    correct: 1,
    explanation: 'CHAR holds exactly ONE character in single quotes (\'A\'). STRING holds zero or more characters in double quotes ("Hello"). They are different data types!',
  },
  {
    id: 5,
    question: 'Which of these is the correct way to define a constant?',
    options: [
      'DECLARE TAXRATE : CONSTANT = 0.15',
      'CONSTANT TAXRATE ← 0.15',
      'CONSTANT TAXRATE = 0.15',
      'CONST TAXRATE = 0.15',
    ],
    correct: 2,
    explanation: 'Constants use the syntax: CONSTANT <name> = <value>. They use = (not ←) and you don\'t write DECLARE or a data type.',
  },
  {
    id: 6,
    question: 'What data type would you use for a student\'s average mark?',
    options: ['INTEGER', 'REAL', 'STRING', 'BOOLEAN'],
    correct: 1,
    explanation: 'An average can be a decimal (e.g., 85.5), so it must be REAL. Even if the average happens to be a whole number, use REAL because it COULD be decimal.',
  },
  {
    id: 7,
    question: 'What\'s wrong with this code?\nAge ← 17',
    options: [
      'Nothing is wrong',
      'Should use = instead of ←',
      'The variable Age was not declared with DECLARE first',
      'Age should be in quotes',
    ],
    correct: 2,
    explanation: 'At A Level, every variable MUST be declared before use. It should be:\nDECLARE Age : INTEGER\nAge ← 17',
  },
  {
    id: 8,
    question: 'A BOOLEAN variable can hold which values?',
    options: [
      '0 or 1',
      'Yes or No',
      'TRUE or FALSE',
      'Any of the above',
    ],
    correct: 2,
    explanation: 'In Cambridge pseudocode, BOOLEAN variables can only be TRUE or FALSE. Not 0/1, not Yes/No. Always use TRUE and FALSE (in capitals).',
  },
  {
    id: 9,
    question: 'Why should you use a CONSTANT instead of a variable for a tax rate?',
    options: [
      'Constants use less memory',
      'Constants are faster to process',
      'It prevents the value from being accidentally changed and makes code easier to maintain',
      'Constants can store decimal numbers',
    ],
    correct: 2,
    explanation: 'Constants prevent accidental changes to important values, make code more readable (TAXRATE vs 0.15), and if the value needs updating, you only change it in one place.',
  },
  {
    id: 10,
    question: 'Which line correctly outputs a variable with text?',
    options: [
      'OUTPUT "Your score is: " + Score',
      'OUTPUT "Your score is: ", Score',
      'PRINT "Your score is: ", Score',
      'OUTPUT("Your score is: ", Score)',
    ],
    correct: 1,
    explanation: 'In Cambridge pseudocode, OUTPUT uses commas to concatenate text and variables. Not +, not PRINT, and no parentheses.',
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = submitted
    ? questions.filter(q => answers[q.id] === q.correct).length
    : 0;

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Knowledge Quiz</h1>
      <p className="text-gray-500 mb-6 text-lg">Test everything you've learned — {questions.length} questions</p>

      {submitted && (
        <div className={`section-card mb-6 ${percentage >= 80 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : percentage >= 50 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200' : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'}`}>
          <div className="text-center">
            <p className="text-6xl font-extrabold mb-2">
              {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
            </p>
            <p className="text-4xl font-extrabold text-gray-800">{score} / {questions.length}</p>
            <p className="text-xl text-gray-600 mt-1">{percentage}%</p>
            <p className="text-lg mt-2 font-semibold">
              {percentage >= 80
                ? 'Excellent! You\'ve nailed Day 1! 🔥'
                : percentage >= 50
                  ? 'Good effort! Review the topics you got wrong.'
                  : 'Keep studying! Go through the sections again and retry.'}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
            >
              🔄 Try Again
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const isAnswered = answers[q.id] !== undefined;
          const isCorrect = submitted && answers[q.id] === q.correct;
          const isWrong = submitted && isAnswered && answers[q.id] !== q.correct;

          return (
            <div
              key={q.id}
              className={`section-card ${submitted ? (isCorrect ? 'border-green-300 bg-green-50/50' : isWrong ? 'border-red-300 bg-red-50/50' : 'border-amber-300 bg-amber-50/50') : ''}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  submitted
                    ? isCorrect ? 'bg-green-200 text-green-800' : isWrong ? 'bg-red-200 text-red-800' : 'bg-amber-200 text-amber-800'
                    : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {submitted ? (isCorrect ? '✓' : isWrong ? '✗' : '?') : qi + 1}
                </span>
                <p className="text-gray-800 font-semibold text-lg whitespace-pre-line">{q.question}</p>
              </div>

              <div className="space-y-2 ml-11">
                {q.options.map((option, oi) => {
                  const isSelected = answers[q.id] === oi;
                  const isThisCorrect = submitted && oi === q.correct;
                  const isThisWrong = submitted && isSelected && oi !== q.correct;

                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(q.id, oi)}
                      className={`quiz-option w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isThisCorrect
                          ? 'border-green-400 bg-green-100 text-green-800'
                          : isThisWrong
                            ? 'border-red-400 bg-red-100 text-red-800'
                            : isSelected
                              ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-200'
                      }`}
                      disabled={submitted}
                    >
                      <span className="font-mono font-bold mr-3">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      {option}
                      {isThisCorrect && ' ✅'}
                      {isThisWrong && ' ❌'}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-4 ml-11 p-4 rounded-xl ${isCorrect ? 'bg-green-100/80' : 'bg-amber-100/80'}`}>
                  <p className={`text-sm ${isCorrect ? 'text-green-800' : 'text-amber-900'}`}>
                    <strong>Explanation:</strong> {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="text-center mt-8">
          <p className="text-gray-500 mb-3">
            Answered {Object.keys(answers).length} of {questions.length} questions
          </p>
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              Object.keys(answers).length >= questions.length
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 animate-pulse-glow'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            📝 Submit Quiz
          </button>
          {Object.keys(answers).length < questions.length && (
            <p className="text-sm text-gray-400 mt-2">Answer all questions to submit</p>
          )}
        </div>
      )}
    </div>
  );
}
