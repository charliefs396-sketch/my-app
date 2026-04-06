import { useState } from 'react';

interface Exercise {
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    title: '4×4 Grid — Find the Largest in Each Row',
    description: 'Declare a 4×4 grid of integers. Input all 16 values. Then for each row, find and output the largest value.',
    hints: [
      'Declare ARRAY[1:4, 1:4] OF INTEGER and loop variables Row, Col, and Max.',
      'Use a nested FOR loop to input: outer FOR Row ← 1 TO 4, inner FOR Col ← 1 TO 4.',
      'For finding the max per row: in the outer FOR loop, set Max ← Grid[Row, 1] BEFORE the inner loop (initialise with first element of each row).',
      'Inner loop should go from Col ← 2 TO 4 (comparing remaining elements). If Grid[Row, Col] > Max, update Max.',
      'OUTPUT the max AFTER the inner loop closes (NEXT Col), but BEFORE NEXT Row.',
    ],
    solution: `DECLARE Grid : ARRAY[1:4, 1:4] OF INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER
DECLARE Max : INTEGER

// Input all values
FOR Row ← 1 TO 4
   FOR Col ← 1 TO 4
      OUTPUT "Enter Grid[", Row, ",", Col, "]: "
      INPUT Grid[Row, Col]
   NEXT Col
NEXT Row

// Find largest in each row
FOR Row ← 1 TO 4
   Max ← Grid[Row, 1]      // Assume first in row is largest
   FOR Col ← 2 TO 4        // Compare with rest
      IF Grid[Row, Col] > Max
         THEN
            Max ← Grid[Row, Col]
      ENDIF
   NEXT Col
   OUTPUT "Row ", Row, " largest value: ", Max
NEXT Row`,
    explanation: 'This combines nested loop input with a max-finding algorithm. The key is initialising Max with Grid[Row, 1] — the first element of each row — inside the outer loop but before the inner loop.',
  },
  {
    title: 'Student Marks Table — Find Who Got Highest Overall',
    description: 'For 5 students and 3 subjects: input all marks and names, calculate each student\'s total, find and output the student with the highest total.',
    hints: [
      'Declare ARRAY[1:5, 1:3] OF INTEGER for marks and ARRAY[1:5] OF STRING for names. Also declare MaxTotal, MaxRow, RowTotal as INTEGER.',
      'Input names first (1D loop), then use nested loops to input marks.',
      'To find highest: initialise MaxTotal ← 0 and MaxRow ← 1 BEFORE the outer loop.',
      'Inside the outer FOR Row loop, calculate RowTotal using an inner FOR Col loop. After the inner loop, compare RowTotal with MaxTotal.',
      'After all loops, OUTPUT Names[MaxRow] and MaxTotal.',
    ],
    solution: `DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Row : INTEGER
DECLARE Col : INTEGER
DECLARE RowTotal : INTEGER
DECLARE MaxTotal : INTEGER
DECLARE MaxRow : INTEGER

// Input names
FOR Row ← 1 TO 5
   OUTPUT "Enter student name: "
   INPUT Names[Row]
NEXT Row

// Input marks
FOR Row ← 1 TO 5
   FOR Col ← 1 TO 3
      OUTPUT "Enter mark for ", Names[Row], " subject ", Col, ": "
      INPUT Marks[Row, Col]
   NEXT Col
NEXT Row

// Find highest overall
MaxTotal ← 0
MaxRow ← 1

FOR Row ← 1 TO 5
   RowTotal ← 0
   FOR Col ← 1 TO 3
      RowTotal ← RowTotal + Marks[Row, Col]
   NEXT Col
   IF RowTotal > MaxTotal
      THEN
         MaxTotal ← RowTotal
         MaxRow ← Row
   ENDIF
NEXT Row

OUTPUT "Highest overall: ", Names[MaxRow]
OUTPUT "Total marks: ", MaxTotal
OUTPUT "Average: ", MaxTotal / 3`,
    explanation: 'This uses three key patterns from Day 7: nested loop input, row total calculation, and max-tracking across rows. The MaxRow variable stores WHICH student had the highest total so we can look up their name.',
  },
  {
    title: 'BONUS: Find Minimum Per Subject',
    description: 'Using the same 5×3 marks array, find the minimum mark for each subject (column). Output the subject number and minimum mark.',
    hints: [
      'Process column by column — make Col the OUTER loop.',
      'For each column, initialise Min ← Marks[1, Col] before the inner row loop.',
      'Inner loop: FOR Row ← 2 TO 5. Compare Marks[Row, Col] with Min using IF.',
      'Output the result after the inner loop closes but before NEXT Col.',
    ],
    solution: `DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER
DECLARE Min : INTEGER

// (Assume marks already input)

// Find minimum per subject (column)
FOR Col ← 1 TO 3
   Min ← Marks[1, Col]       // Assume first student's mark is minimum
   FOR Row ← 2 TO 5          // Compare with rows 2 to 5
      IF Marks[Row, Col] < Min
         THEN
            Min ← Marks[Row, Col]
      ENDIF
   NEXT Row
   OUTPUT "Subject ", Col, " minimum mark: ", Min
NEXT Col`,
    explanation: 'This is the column-by-column pattern — Col is the outer loop, Row is inner. We initialise Min with the first ROW of each column (Marks[1, Col]), then compare with rows 2 to 5.',
  },
];

export default function D7Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (exerciseIndex: number) => {
    setRevealed(prev => ({
      ...prev,
      [exerciseIndex]: Math.min((prev[exerciseIndex] ?? 0) + 1, exercises[exerciseIndex].hints.length),
    }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice — 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-2">Try each exercise yourself first — use hints if you get stuck!</p>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
        <p className="text-orange-800 text-sm font-medium">
          💡 <strong>Strategy:</strong> For every 2D array problem — (1) declare all variables, (2) input with nested loops, (3) process with nested loops. Always reset accumulators inside the outer loop!
        </p>
      </div>

      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="card border-l-4 border-orange-400">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
                {i === 2 ? '⭐' : i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{ex.title}</h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">{ex.description}</p>
              </div>
            </div>

            {/* Hints */}
            <div className="mb-4">
              {(revealed[i] ?? 0) > 0 && (
                <div className="space-y-2 mb-3">
                  {ex.hints.slice(0, revealed[i]).map((hint, j) => (
                    <div key={j} className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <span className="text-orange-500 font-bold text-sm flex-shrink-0">Hint {j + 1}:</span>
                      <span className="text-orange-800 text-sm">{hint}</span>
                    </div>
                  ))}
                </div>
              )}
              {(revealed[i] ?? 0) < ex.hints.length && (
                <button
                  onClick={() => revealHint(i)}
                  className="text-sm text-orange-600 hover:text-orange-800 font-semibold border border-orange-300 hover:border-orange-500 px-4 py-2 rounded-lg transition-all"
                >
                  💡 Hint {(revealed[i] ?? 0) + 1} of {ex.hints.length}
                </button>
              )}
            </div>

            {/* Solution */}
            <button
              onClick={() => setShowSolution(prev => ({ ...prev, [i]: !prev[i] }))}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl transition-all mb-3"
            >
              <span className="font-semibold text-gray-700">{showSolution[i] ? '🔼 Hide Solution' : '🔽 Show Full Solution'}</span>
            </button>

            {showSolution[i] && (
              <div>
                <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto mb-3">
                  <pre className="text-sm font-mono text-slate-200 leading-relaxed whitespace-pre">{ex.solution}</pre>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-800 text-sm"><strong>📖 Explanation:</strong> {ex.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">🎯 Day 7 Practice Complete!</h3>
        <p className="text-white/80 text-sm mb-4">You've practised the 3 core 2D array patterns. Make sure you can write these from memory:</p>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            '✅ Declare 2D array with correct bounds',
            '✅ Input with nested FOR loops',
            '✅ Calculate row average (reset Total inside outer loop)',
            '✅ Calculate column average (swap outer/inner loops)',
            '✅ Find max/min in each row',
            '✅ Find overall best student',
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-2 text-sm">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
