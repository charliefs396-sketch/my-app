import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const exercises = [
  {
    id: 1,
    title: "Store 8 temperatures, find max, min, and average",
    description: "Write pseudocode to input 8 temperatures into an array, then output the highest temperature, lowest temperature, and average temperature.",
    hints: [
      "Declare: DECLARE Temps : ARRAY[1:8] OF REAL and DECLARE i : INTEGER",
      "Use a FOR loop (i ← 1 TO 8) to input all temperatures",
      "Initialise Max ← Temps[1] and Min ← Temps[1] AFTER the input loop",
      "In a second loop, update Max and Min using IF Temps[i] > Max and IF Temps[i] < Min",
      "Calculate Average ← Total / 8 after the loop (declare Average as REAL!)",
    ],
    solution: `DECLARE Temps   : ARRAY[1:8] OF REAL
DECLARE i       : INTEGER
DECLARE Total   : REAL
DECLARE Average : REAL
DECLARE Max     : REAL
DECLARE Min     : REAL

// Pass 1: Input
FOR i ← 1 TO 8
   OUTPUT "Enter temperature ", i, ": "
   INPUT Temps[i]
NEXT i

// Pass 2: Process - total, max, min in one loop
Total ← 0
Max   ← Temps[1]
Min   ← Temps[1]

FOR i ← 1 TO 8
   Total ← Total + Temps[i]
   IF Temps[i] > Max
      THEN
         Max ← Temps[i]
   ENDIF
   IF Temps[i] < Min
      THEN
         Min ← Temps[i]
   ENDIF
NEXT i

Average ← Total / 8

OUTPUT "Maximum temperature: ", Max
OUTPUT "Minimum temperature: ", Min
OUTPUT "Average temperature: ", Average`,
    explanation: "Key points: Temps is REAL (temperatures have decimals), Average is REAL, Max and Min initialised from Temps[1] (not 0), the processing combines total and max/min in ONE efficient loop.",
  },
  {
    id: 2,
    title: "Count how many values are above and below average",
    description: "Input 10 integers into an array. Calculate the average, then output how many values are above average, how many are below average, and also output the names of students above average.",
    hints: [
      "You need PARALLEL arrays: Names (STRING) and Values (INTEGER)",
      "First loop: input both names and values",
      "Second loop: calculate Total, then Average ← Total / 10",
      "Third loop: use nested IF to check > Average and < Average separately",
      "Also output the name when their value is above average",
    ],
    solution: `DECLARE Names      : ARRAY[1:10] OF STRING
DECLARE Values     : ARRAY[1:10] OF INTEGER
DECLARE i          : INTEGER
DECLARE Total      : INTEGER
DECLARE Average    : REAL
DECLARE AboveCount : INTEGER
DECLARE BelowCount : INTEGER
DECLARE EqualCount : INTEGER

// Pass 1: Input
FOR i ← 1 TO 10
   OUTPUT "Enter student name: "
   INPUT Names[i]
   OUTPUT "Enter score for ", Names[i], ": "
   INPUT Values[i]
NEXT i

// Pass 2: Calculate total and average
Total ← 0
FOR i ← 1 TO 10
   Total ← Total + Values[i]
NEXT i
Average ← Total / 10

OUTPUT "Class average: ", Average

// Pass 3: Count above/below and output names
AboveCount ← 0
BelowCount ← 0
EqualCount ← 0

OUTPUT "Students above average:"
FOR i ← 1 TO 10
   IF Values[i] > Average
      THEN
         AboveCount ← AboveCount + 1
         OUTPUT "  ", Names[i], " (", Values[i], ")"
      ELSE
         IF Values[i] < Average
            THEN
               BelowCount ← BelowCount + 1
            ELSE
               EqualCount ← EqualCount + 1
         ENDIF
   ENDIF
NEXT i

OUTPUT "Above average: ", AboveCount, " students"
OUTPUT "Below average: ", BelowCount, " students"
OUTPUT "Equal to average: ", EqualCount, " students"`,
    explanation: "This needs 3 separate passes — you CANNOT compare to average until you know the average, and you can't know average until all data is input. The nested IF handles all three cases: above, below, and equal.",
  },
  {
    id: 3,
    title: "Find and output the second largest value",
    description: "Input 10 integers into an array and find the second largest distinct value. Output both the largest and second largest.",
    hints: [
      "Track TWO variables: Largest and SecondLargest",
      "Compare Values[1] and Values[2] first to set initial values in the right order",
      "Start your main loop from i ← 3",
      "If Values[i] > Largest: SecondLargest ← Largest THEN Largest ← Values[i]",
      "If Values[i] > SecondLargest AND Values[i] <> Largest: update SecondLargest only",
    ],
    solution: `DECLARE Values        : ARRAY[1:10] OF INTEGER
DECLARE i             : INTEGER
DECLARE Largest       : INTEGER
DECLARE SecondLargest : INTEGER

// Input the array
FOR i ← 1 TO 10
   OUTPUT "Enter value ", i, ": "
   INPUT Values[i]
NEXT i

// Initialise Largest and SecondLargest from first two elements
IF Values[1] > Values[2]
   THEN
      Largest       ← Values[1]
      SecondLargest ← Values[2]
   ELSE
      Largest       ← Values[2]
      SecondLargest ← Values[1]
ENDIF

// Check remaining elements from index 3
FOR i ← 3 TO 10
   IF Values[i] > Largest
      THEN
         SecondLargest ← Largest
         Largest       ← Values[i]
      ELSE
         IF Values[i] > SecondLargest AND Values[i] <> Largest
            THEN
               SecondLargest ← Values[i]
         ENDIF
   ENDIF
NEXT i

OUTPUT "Largest value: ", Largest
OUTPUT "Second largest value: ", SecondLargest`,
    explanation: "The key trick: when a new largest is found, the old Largest becomes SecondLargest BEFORE updating Largest. The condition Values[i] <> Largest prevents duplicates from becoming SecondLargest.",
  },
];

export default function D6Practice() {
  const [shownHints, setShownHints] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ✍️ Day 6 Practice
      </h1>
      <p className="text-gray-500 text-lg mb-4">Three exam-style array questions — try each one before looking at hints or solutions!</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="font-bold text-amber-800 mb-1">🎯 How to use this section:</p>
        <ol className="text-amber-700 text-sm space-y-1 list-decimal pl-4">
          <li>Read the question carefully</li>
          <li>Try to write the pseudocode yourself on paper</li>
          <li>Use hints one at a time if you get stuck</li>
          <li>Check your solution against the model answer</li>
          <li>Read the explanation to understand WHY</li>
        </ol>
      </div>

      <div className="space-y-8">
        {exercises.map((exercise) => {
          const hintCount = shownHints[exercise.id] || 0;
          const solutionVisible = showSolution[exercise.id] || false;
          const explanationVisible = showExplanation[exercise.id] || false;

          return (
            <div key={exercise.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-indigo-600 text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  {exercise.id}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{exercise.title}</h2>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-5 ml-13">
                <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={() => setShownHints(prev => ({
                    ...prev,
                    [exercise.id]: Math.min((prev[exercise.id] || 0) + 1, exercise.hints.length)
                  }))}
                  disabled={hintCount >= exercise.hints.length}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    hintCount >= exercise.hints.length
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  }`}
                >
                  💡 {hintCount >= exercise.hints.length
                    ? 'All Hints Shown'
                    : `Hint ${hintCount + 1} of ${exercise.hints.length}`}
                </button>

                <button
                  onClick={() => setShowSolution(prev => ({ ...prev, [exercise.id]: !prev[exercise.id] }))}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all"
                >
                  {solutionVisible ? '🙈 Hide Solution' : '👁️ Show Solution'}
                </button>

                {solutionVisible && (
                  <button
                    onClick={() => setShowExplanation(prev => ({ ...prev, [exercise.id]: !prev[exercise.id] }))}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-all"
                  >
                    {explanationVisible ? '🙈 Hide Explanation' : '📖 Why This Works'}
                  </button>
                )}
              </div>

              {/* Hints */}
              {hintCount > 0 && (
                <div className="mb-4 space-y-2">
                  {exercise.hints.slice(0, hintCount).map((hint, idx) => (
                    <div key={idx} className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 font-bold text-xs px-2 py-0.5 rounded-full flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-amber-800 text-sm">{hint}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Solution */}
              {solutionVisible && (
                <div className="mb-4">
                  <p className="font-bold text-gray-800 mb-2">✅ Model Solution:</p>
                  <CodeBlock code={exercise.solution} language="pseudocode" />
                </div>
              )}

              {/* Explanation */}
              {explanationVisible && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="font-bold text-emerald-800 mb-2">📖 Why This Works:</p>
                  <p className="text-emerald-700 text-sm leading-relaxed">{exercise.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bonus Challenge */}
      <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-800 mb-2">🌟 Bonus Challenge</h2>
        <p className="text-purple-700 mb-3">Can you write pseudocode that does ALL of the following in one program?</p>
        <ul className="text-purple-700 text-sm space-y-1 mb-4 list-disc pl-4">
          <li>Input 10 student names and marks</li>
          <li>Output the name of the student with the highest mark</li>
          <li>Output the name of the student with the lowest mark</li>
          <li>Calculate and output the class average</li>
          <li>Output the names of ALL students who scored above average</li>
          <li>Count and output how many students passed (mark ≥ 50)</li>
        </ul>
        <p className="text-purple-600 text-sm italic">This combines everything from Day 6 into one complete program — the kind of question you'll see in Paper 2!</p>
      </div>
    </div>
  );
}
