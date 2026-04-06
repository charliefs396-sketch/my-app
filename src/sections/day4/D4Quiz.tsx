import { useState } from 'react';

const questions = [
  {
    q: "What type of loop is a FOR loop?",
    options: ["Condition-controlled", "Count-controlled", "Post-condition", "Pre-condition"],
    correct: 1,
    explanation: "A FOR loop is count-controlled — you specify exactly how many times it runs using a counter with a start and end value."
  },
  {
    q: "What is the output of: FOR Counter ← 1 TO 3 ... OUTPUT Counter ... NEXT Counter?",
    options: ["1 2 3", "0 1 2 3", "1 2", "0 1 2"],
    correct: 0,
    explanation: "The counter starts at 1 and goes TO 3 inclusive. So it outputs 1, 2, 3 (each on a new line)."
  },
  {
    q: "What is wrong with: FOR Counter ← 10 TO 1 (without STEP)?",
    options: ["Nothing, it counts backwards", "It runs forever", "It runs 0 times", "It causes an error"],
    correct: 2,
    explanation: "Without STEP -1, the default step is +1. Counter starts at 10 and tries to count UP to 1 — but 10 is already past 1! So the loop body never executes."
  },
  {
    q: "Which keyword ends a FOR loop in Cambridge pseudocode?",
    options: ["ENDFOR", "END FOR", "NEXT Counter", "LOOP"],
    correct: 2,
    explanation: "FOR loops end with NEXT followed by the counter variable name, e.g., NEXT Counter. ENDFOR is NOT Cambridge pseudocode syntax."
  },
  {
    q: "A WHILE loop is:",
    options: ["Post-condition (checks after)", "Pre-condition (checks before)", "Count-controlled", "Always runs at least once"],
    correct: 1,
    explanation: "WHILE is a pre-condition loop — it checks the condition BEFORE running the body. If the condition is FALSE from the start, the body never runs."
  },
  {
    q: "How many times can a WHILE loop execute its body?",
    options: ["At least once", "Exactly once", "Zero or more times", "At least twice"],
    correct: 2,
    explanation: "A WHILE loop checks before running, so if the condition is immediately FALSE, the body runs 0 times. Otherwise it can run any number of times."
  },
  {
    q: "A REPEAT...UNTIL loop always executes its body at least:",
    options: ["Zero times", "One time", "Two times", "Three times"],
    correct: 1,
    explanation: "REPEAT is a post-condition loop — it runs the body FIRST, then checks. So the body always runs at least once."
  },
  {
    q: "What is the UNTIL condition for: 'keep asking until mark is between 0 and 100'?",
    options: ["UNTIL Mark < 0 OR Mark > 100", "UNTIL Mark >= 0 AND Mark <= 100", "UNTIL Mark > 0 AND Mark < 100", "UNTIL Mark = 0 OR Mark = 100"],
    correct: 1,
    explanation: "UNTIL means 'stop WHEN this is TRUE'. We want to stop when the mark IS valid: Mark >= 0 AND Mark <= 100. The WHILE equivalent would be WHILE Mark < 0 OR Mark > 100 (opposite condition)."
  },
  {
    q: "Which loop is best for input validation (must ask at least once)?",
    options: ["FOR", "WHILE", "REPEAT...UNTIL", "Any loop works equally well"],
    correct: 2,
    explanation: "REPEAT...UNTIL is best for input validation because you MUST get input at least once before you can validate it. REPEAT guarantees the body runs at least once."
  },
  {
    q: "What is the output of: FOR Counter ← 2 TO 10 STEP 3 ... OUTPUT Counter ... NEXT Counter?",
    options: ["2 5 8", "2 4 6 8 10", "2 5 8 11", "3 6 9"],
    correct: 0,
    explanation: "Start at 2, step by 3: 2, 5, 8. Next would be 11, but 11 > 10 so the loop stops. Output: 2, 5, 8."
  },
  {
    q: "WHILE keeps going while the condition is ___. UNTIL keeps going until the condition is ___.",
    options: ["TRUE / TRUE", "FALSE / FALSE", "TRUE / FALSE (they're opposites!)", "FALSE / TRUE"],
    correct: 2,
    explanation: "WHILE continues when the condition is TRUE (stops when FALSE). UNTIL continues when the condition is FALSE (stops when TRUE). They use opposite logic!"
  },
  {
    q: "Which loop would you use to process exactly 30 student records?",
    options: ["WHILE — we don't know when to stop", "REPEAT — must process at least one", "FOR — we know it's exactly 30", "Any loop works"],
    correct: 2,
    explanation: "FOR is perfect when you know the exact count: FOR Counter ← 1 TO 30. You know it's 30 students, so use count-controlled."
  },
  {
    q: "What keyword ends a WHILE loop?",
    options: ["END WHILE", "ENDWHILE", "WEND", "LOOP"],
    correct: 1,
    explanation: "ENDWHILE — one word, no space. Not END WHILE (two words), not WEND, not LOOP."
  },
  {
    q: "What is wrong with this WHILE loop?\n\nX ← 1\nWHILE X <= 10\n   OUTPUT X\nENDWHILE",
    options: ["Missing DECLARE", "Should be REPEAT", "Infinite loop — X never changes", "Nothing wrong"],
    correct: 2,
    explanation: "X starts at 1 and X <= 10 is TRUE. But X is never incremented inside the loop, so X is always 1, and X <= 10 is always TRUE. This loops forever! Need X ← X + 1 inside."
  },
  {
    q: "For a menu that should display at least once and repeat until user picks 'Quit', which loop?",
    options: ["FOR — menus have fixed options", "WHILE — check if user wants to quit first", "REPEAT...UNTIL — must show menu at least once", "CASE — it's a menu"],
    correct: 2,
    explanation: "REPEAT...UNTIL is ideal because: (1) the menu must display at least once, (2) we don't know how many times the user will interact, (3) we check their choice AFTER they see the menu."
  }
];

export default function D4Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qIndex: number, aIndex: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[qIndex] = aIndex;
    setAnswers(newAnswers);
  };

  const score = answers.reduce((acc: number, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0) as number;
  const allAnswered = answers.every(a => a !== null);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🧠 Day 4 Quiz — Loops</h1>
      <p className="text-gray-500 mb-6 text-lg">15 questions covering FOR, WHILE, and REPEAT...UNTIL</p>

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi} className="section-card">
            <p className="font-bold text-gray-800 mb-3 whitespace-pre-line">
              <span className="text-indigo-600">Q{qi + 1}.</span> {q.q}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                let style = 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700';
                if (submitted) {
                  if (oi === q.correct) style = 'bg-green-50 border-green-400 text-green-800 font-bold';
                  else if (oi === answers[qi] && oi !== q.correct) style = 'bg-red-50 border-red-400 text-red-800';
                } else if (answers[qi] === oi) {
                  style = 'bg-indigo-50 border-indigo-400 text-indigo-800 font-bold';
                }
                return (
                  <button
                    key={oi}
                    onClick={() => handleAnswer(qi, oi)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${style}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span> {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className={`mt-3 p-3 rounded-xl text-sm ${
                answers[qi] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                <p className="font-bold">{answers[qi] === q.correct ? '✅ Correct!' : '❌ Incorrect'}</p>
                <p className="mt-1">{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        {!submitted ? (
          <button
            onClick={() => allAnswered && setSubmitted(true)}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              allAnswered
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'Submit Answers' : `Answer all questions (${answers.filter(a => a !== null).length}/${questions.length})`}
          </button>
        ) : (
          <div className="section-card">
            <p className="text-4xl font-extrabold mb-2">
              {score >= 13 ? '🌟' : score >= 10 ? '💪' : score >= 7 ? '👍' : '📚'}
            </p>
            <p className="text-3xl font-extrabold text-gray-800">
              {score} / {questions.length}
            </p>
            <p className="text-gray-500 mt-2">
              {score >= 13
                ? 'Outstanding! You really understand loops!'
                : score >= 10
                ? 'Great job! Review the ones you missed.'
                : score >= 7
                ? 'Good start! Re-read the WHILE and REPEAT sections.'
                : 'Keep studying! Focus on the difference between WHILE and REPEAT.'}
            </p>
            <button
              onClick={() => { setAnswers(new Array(questions.length).fill(null)); setSubmitted(false); }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
