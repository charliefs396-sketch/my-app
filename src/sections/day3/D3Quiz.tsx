import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What keyword MUST always appear at the end of an IF statement in Cambridge pseudocode?",
    options: ["END", "ENDIF", "FI", "CLOSE"],
    correct: 1,
    explanation: "Every IF statement MUST end with ENDIF. Not END, not FI — specifically ENDIF, one word."
  },
  {
    id: 2,
    question: "Which of these is the CORRECT way to write an IF statement?",
    options: [
      "IF Age >= 18 THEN OUTPUT \"Adult\" ENDIF",
      "IF Age >= 18: OUTPUT \"Adult\"",
      "IF (Age >= 18) { OUTPUT \"Adult\" }",
      "if Age >= 18 then print(\"Adult\")"
    ],
    correct: 0,
    explanation: "Cambridge pseudocode requires IF, THEN, and ENDIF as keywords. Option B uses Python-style colon, C uses curly braces (JavaScript/C++), D uses lowercase and print()."
  },
  {
    id: 3,
    question: "What is the output when Mark = 65?",
    code: `IF Mark >= 80
   THEN
      OUTPUT "A"
   ELSE
      IF Mark >= 60
         THEN
            OUTPUT "B"
         ELSE
            OUTPUT "C"
      ENDIF
ENDIF`,
    options: ["A", "B", "C", "Error"],
    correct: 1,
    explanation: "Mark = 65. First check: 65 >= 80? FALSE → go to ELSE. Second check: 65 >= 60? TRUE → go to THEN → OUTPUT \"B\". The answer is B."
  },
  {
    id: 4,
    question: "Why is \"ELSE IF\" NOT allowed in Cambridge pseudocode?",
    options: [
      "It causes a syntax error in Python",
      "Cambridge requires proper nesting — each IF must have its own ENDIF",
      "ELSE IF only works with numbers",
      "You should always use CASE instead"
    ],
    correct: 1,
    explanation: "Cambridge pseudocode doesn't have ELSE IF as a keyword. Instead, you must nest a complete new IF...THEN...ELSE...ENDIF block inside the ELSE. Each IF needs its own matching ENDIF."
  },
  {
    id: 5,
    question: "How many ENDIFs are needed if your code has 4 IF statements?",
    options: ["1", "2", "3", "4"],
    correct: 3,
    explanation: "The golden rule: every IF needs its own ENDIF. 4 IFs = 4 ENDIFs. They pair up from inside out, like matching brackets."
  },
  {
    id: 6,
    question: "What is the output?",
    code: `DECLARE X : INTEGER
X ← 5

CASE OF X
   1 : OUTPUT "One"
   5 : OUTPUT "Five"
   10 : OUTPUT "Ten"
   OTHERWISE OUTPUT "Other"
ENDCASE`,
    options: ["One", "Five", "Ten", "Other"],
    correct: 1,
    explanation: "X is 5. CASE checks each value: is X = 1? NO. Is X = 5? YES → OUTPUT \"Five\". It doesn't check any further values."
  },
  {
    id: 7,
    question: "What is the correct keyword in CASE for handling unmatched values?",
    options: ["DEFAULT", "ELSE", "OTHERWISE", "NONE"],
    correct: 2,
    explanation: "In Cambridge pseudocode, it's OTHERWISE — not DEFAULT (Python/Java) and not ELSE (that's for IF statements). OTHERWISE catches any value not listed in the CASE options."
  },
  {
    id: 8,
    question: "What is the output when Age = 20 AND HasLicense = FALSE?",
    code: `IF Age >= 18
   THEN
      IF HasLicense = TRUE
         THEN
            OUTPUT "Can drive"
         ELSE
            OUTPUT "Need license"
      ENDIF
   ELSE
      OUTPUT "Too young"
ENDIF`,
    options: ["Can drive", "Need license", "Too young", "Error"],
    correct: 1,
    explanation: "Age = 20: first IF (20 >= 18) is TRUE → go to THEN. HasLicense = FALSE: second IF (FALSE = TRUE) is FALSE → go to ELSE → OUTPUT \"Need license\"."
  },
  {
    id: 9,
    question: "When should you use CASE instead of nested IF?",
    options: [
      "When checking ranges like Mark >= 80",
      "When checking one variable against specific exact values",
      "When using AND or OR conditions",
      "Always — CASE is better than IF"
    ],
    correct: 1,
    explanation: "CASE is for checking one variable against specific exact values (1, 2, 3 or 'A', 'B', 'C'). For ranges (>=, <=), multiple variables, or AND/OR conditions, use IF."
  },
  {
    id: 10,
    question: "What is WRONG with this code?",
    code: `CASE Choice
   1 : OUTPUT "One"
   2 : OUTPUT "Two"
   DEFAULT OUTPUT "Invalid"
END CASE`,
    options: [
      "Missing OF after CASE",
      "DEFAULT should be OTHERWISE",
      "END CASE should be ENDCASE (one word)",
      "All of the above"
    ],
    correct: 3,
    explanation: "Three mistakes! (1) Should be CASE OF Choice, (2) DEFAULT should be OTHERWISE, (3) END CASE should be ENDCASE (one word). All three would lose marks in an exam."
  },
  {
    id: 11,
    question: "What is the output when Num = 0?",
    code: `IF Num > 0
   THEN
      OUTPUT "Positive"
   ELSE
      IF Num < 0
         THEN
            OUTPUT "Negative"
         ELSE
            OUTPUT "Zero"
      ENDIF
ENDIF`,
    options: ["Positive", "Negative", "Zero", "No output"],
    correct: 2,
    explanation: "Num = 0. First IF: 0 > 0? FALSE → go to ELSE. Second IF: 0 < 0? FALSE → go to ELSE → OUTPUT \"Zero\". Neither positive nor negative, so it falls through to the innermost ELSE."
  },
  {
    id: 12,
    question: "In an IF statement, which symbol is used for comparison (checking if equal)?",
    options: ["←", "=", "==", ":="],
    correct: 1,
    explanation: "In Cambridge pseudocode: = is for COMPARISON (is this equal to that?), ← is for ASSIGNMENT (store a value). == is Python, := is Pascal. In IF statements, you ALWAYS use = for comparison."
  }
];

export default function D3Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qId: number, optIndex: number) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [qId]: optIndex }));
    }
  };

  const score = questions.filter(q => answers[q.id] === q.correct).length;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Day 3 Quiz</h1>
      <p className="text-gray-500 mb-6 text-lg">Test your knowledge of Selection (IF and CASE)</p>

      {submitted && (
        <div className={`section-card mb-8 ${score >= 10 ? 'bg-green-50 border-green-200' : score >= 7 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'}`}>
          <div className="text-center">
            <p className="text-5xl font-extrabold mb-2">{score}/{questions.length}</p>
            <p className={`text-xl font-bold ${score >= 10 ? 'text-green-700' : score >= 7 ? 'text-amber-700' : 'text-red-700'}`}>
              {score >= 10 ? '🌟 Outstanding! You\'ve mastered Selection!' :
               score >= 7 ? '👍 Good job! Review the ones you got wrong.' :
               '📚 Keep studying! Re-read the IF and CASE sections.'}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={q.id} className="section-card">
            <p className="font-bold text-gray-800 mb-3">
              <span className="text-indigo-600">Q{qi + 1}.</span> {q.question}
            </p>

            {q.code && (
              <pre className="code-block mb-4 text-sm">{q.code}</pre>
            )}

            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                let btnClass = "w-full text-left p-3 rounded-xl border-2 transition-all text-sm font-medium ";
                if (submitted) {
                  if (oi === q.correct) btnClass += "border-green-500 bg-green-50 text-green-800";
                  else if (answers[q.id] === oi) btnClass += "border-red-400 bg-red-50 text-red-700";
                  else btnClass += "border-gray-200 text-gray-400";
                } else {
                  btnClass += answers[q.id] === oi
                    ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                    : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-gray-700";
                }
                return (
                  <button key={oi} onClick={() => handleAnswer(q.id, oi)} className={btnClass}>
                    <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span> {opt}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className={`mt-3 p-3 rounded-xl text-sm ${answers[q.id] === q.correct ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                <p className="font-bold">{answers[q.id] === q.correct ? '✅ Correct!' : `❌ Wrong — correct answer is ${String.fromCharCode(65 + q.correct)}`}</p>
                <p className="mt-1">{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
              allAnswered
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'Submit Answers 🚀' : `Answer all questions (${Object.keys(answers).length}/${questions.length})`}
          </button>
        ) : (
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all"
          >
            Retry Quiz 🔄
          </button>
        )}
      </div>
    </div>
  );
}
