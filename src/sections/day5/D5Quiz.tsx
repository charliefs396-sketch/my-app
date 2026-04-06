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
    question: "What does LENGTH(\"Hello World\") return?",
    options: ["10", "11", "12", "5"],
    correct: 1,
    explanation: "\"Hello World\" has 11 characters: H-e-l-l-o (5) + space (1) + W-o-r-l-d (5) = 11. Spaces count as characters!"
  },
  {
    id: 2,
    question: "What does MID(\"Computer\", 4, 3) return?",
    options: ["\"Com\"", "\"put\"", "\"mpu\"", "\"ute\""],
    correct: 1,
    explanation: "MID starts at position 4 and takes 3 characters. Position 4 = 'p', 5 = 'u', 6 = 't'. So the result is \"put\". Remember: 1-indexed!"
  },
  {
    id: 3,
    question: "What does LEFT(\"Programming\", 4) return?",
    options: ["\"ming\"", "\"Prog\"", "\"gram\"", "\"Pro\""],
    correct: 1,
    explanation: "LEFT takes the first 4 characters from the left: P-r-o-g = \"Prog\"."
  },
  {
    id: 4,
    question: "What does RIGHT(\"Python\", 3) return?",
    options: ["\"Pyt\"", "\"tho\"", "\"hon\"", "\"on\""],
    correct: 2,
    explanation: "RIGHT takes the last 3 characters from the right: h-o-n = \"hon\"."
  },
  {
    id: 5,
    question: "What does ASC('A') return?",
    options: ["1", "97", "65", "41"],
    correct: 2,
    explanation: "The ASCII code for uppercase 'A' is 65. Lowercase 'a' is 97. This is a key value to remember for Caesar cipher!"
  },
  {
    id: 6,
    question: "What does CHR(66) return?",
    options: ["'A'", "'B'", "'b'", "'2'"],
    correct: 1,
    explanation: "CHR converts an ASCII number to its character. 65 = 'A', so 66 = 'B'. They're consecutive!"
  },
  {
    id: 7,
    question: "To check if a character is a lowercase letter using ASCII, which condition is correct?",
    options: [
      "Code >= 65 AND Code <= 90",
      "Code >= 97 AND Code <= 122",
      "Code >= 48 AND Code <= 57",
      "Code >= 97 AND Code <= 90"
    ],
    correct: 1,
    explanation: "Lowercase letters a-z have ASCII codes 97-122. Uppercase A-Z = 65-90. Digits 0-9 = 48-57."
  },
  {
    id: 8,
    question: "In the vowel counting program, why do we use LCASE(MID(Text, i, 1)) instead of just MID(Text, i, 1)?",
    options: [
      "MID doesn't work without LCASE",
      "LCASE makes the code run faster",
      "So we catch both 'A' and 'a' with one check for 'a'",
      "LCASE converts characters to ASCII"
    ],
    correct: 2,
    explanation: "By converting to lowercase first, we only need to check for 'a', 'e', 'i', 'o', 'u' — not both upper and lowercase versions. This catches 'A', 'a', and any other casing."
  },
  {
    id: 9,
    question: "To reverse a string by looping forwards, which concatenation builds the reversed string correctly?",
    options: [
      "Reversed \u2190 Reversed & CurrentChar",
      "Reversed \u2190 CurrentChar & Reversed",
      "Reversed \u2190 MID(Text, i, 1)",
      "Reversed \u2190 Reversed & Text"
    ],
    correct: 1,
    explanation: "CurrentChar & Reversed puts the new character at the FRONT. So 'H' becomes 'H', then 'e'+'H' = 'eH', then 'l'+'eH' = 'leH', etc. This reverses the string. Option A would keep the original order!"
  },
  {
    id: 10,
    question: "In Caesar cipher, what does the formula ((Code - 65 + Shift) MOD 26) + 65 do when Code = 88 ('X') and Shift = 3?",
    options: ["Returns 91 ('[')", "Returns 68 ('D')", "Returns 65 ('A')", "Returns 88 ('X')"],
    correct: 2,
    explanation: "((88 - 65 + 3) MOD 26) + 65 = ((23 + 3) MOD 26) + 65 = (26 MOD 26) + 65 = 0 + 65 = 65 = 'A'. The MOD 26 wraps 'X' past 'Z' back to 'A'."
  },
  {
    id: 11,
    question: "What is the difference between ASC('5') and STR_TO_NUM(\"5\")?",
    options: [
      "No difference, both return 5",
      "ASC('5') returns 53, STR_TO_NUM(\"5\") returns 5",
      "ASC('5') returns 5, STR_TO_NUM(\"5\") returns 53",
      "Both return 53"
    ],
    correct: 1,
    explanation: "ASC('5') returns the ASCII code of the character '5', which is 53. STR_TO_NUM(\"5\") converts the string \"5\" to the number 5. Very different operations!"
  },
  {
    id: 12,
    question: "What is the first position index of a string in Cambridge pseudocode?",
    options: ["0", "1", "-1", "It depends on the string"],
    correct: 1,
    explanation: "Cambridge pseudocode uses 1-based indexing. The first character is at position 1. This is different from Python which uses 0-based indexing. MID(\"Hello\", 1, 1) returns \"H\"."
  },
  {
    id: 13,
    question: "Which function would you use to build a message like \"Score: 42\" using concatenation?",
    options: [
      "\"Score: \" & 42",
      "\"Score: \" & NUM_TO_STR(42)",
      "\"Score: \" & ASC(42)",
      "\"Score: \" & CHR(42)"
    ],
    correct: 1,
    explanation: "You can't concatenate a string with a number directly. You need NUM_TO_STR(42) to convert the number 42 to the string \"42\" first, then concatenate with &."
  },
  {
    id: 14,
    question: "What does UCASE(\"Hello World\") return?",
    options: ["\"hello world\"", "\"HELLO WORLD\"", "\"Hello World\"", "\"hELLO wORLD\""],
    correct: 1,
    explanation: "UCASE converts ALL characters to uppercase. So \"Hello World\" becomes \"HELLO WORLD\". LCASE would give \"hello world\"."
  }
];

export default function D5Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qId: number, optionIdx: number) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    }
  };

  const score = submitted ? questions.filter(q => answers[q.id] === q.correct).length : 0;
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{"\uD83E\uDDE0"} Day 5 Quiz</h1>
      <p className="text-gray-500 mb-6 text-lg">Test your string manipulation knowledge — {total} questions</p>

      {submitted && (
        <div className={`section-card mb-8 border-2 ${percentage >= 80 ? 'border-green-300 bg-green-50' : percentage >= 60 ? 'border-amber-300 bg-amber-50' : 'border-red-300 bg-red-50'}`}>
          <div className="text-center">
            <p className="text-5xl font-extrabold mb-2">{percentage >= 80 ? '\uD83C\uDF1F' : percentage >= 60 ? '\uD83D\uDCAA' : '\uD83D\uDCDA'}</p>
            <p className="text-3xl font-extrabold text-gray-800">{score}/{total} ({percentage}%)</p>
            <p className="text-gray-600 mt-2">
              {percentage >= 80 ? 'Excellent! You\'ve mastered string manipulation!' : 
               percentage >= 60 ? 'Good work! Review the ones you missed.' : 
               'Keep practising! Go back through the sections and try again.'}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correct;
          return (
            <div key={q.id} className={`section-card ${submitted ? (isCorrect ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-500') : ''}`}>
              <p className="font-bold text-gray-800 mb-4">
                <span className="text-indigo-600 mr-2">Q{q.id}.</span>
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, idx) => {
                  let style = 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50';
                  if (submitted) {
                    if (idx === q.correct) style = 'border-green-500 bg-green-50 text-green-800';
                    else if (idx === userAnswer && !isCorrect) style = 'border-red-500 bg-red-50 text-red-800';
                    else style = 'border-gray-200 opacity-50';
                  } else if (userAnswer === idx) {
                    style = 'border-indigo-500 bg-indigo-50';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(q.id, idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${style}`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                      {option}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <p className="font-bold">{isCorrect ? '\u2713 Correct!' : '\u2717 Incorrect'}</p>
                  <p className="mt-1">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < total}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              Object.keys(answers).length < total
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            Submit Quiz ({Object.keys(answers).length}/{total} answered)
          </button>
        ) : (
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
}
