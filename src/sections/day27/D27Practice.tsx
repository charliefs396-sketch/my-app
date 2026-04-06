import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const exercises = [
  {
    id: 1,
    title: 'Trace Insertion Sort on [8, 3, 5, 1, 9, 2]',
    difficulty: 'Medium',
    color: 'from-fuchsia-500 to-purple-500',
    description: 'Produce a full trace table showing i, Key, j, and the array state after each outer loop pass.',
    hints: [
      'The outer loop runs from i=2 to i=6 (Size=6). There are 5 passes.',
      'For each pass: save Key=Data[i], then set j=i-1. Then check WHILE j>0 AND Data[j]>Key.',
      'Pass 1 (i=2, Key=3): j=1, Data[1]=8 > 3? Yes → shift, j=0 → exit, insert at pos 1.',
      'Pass 2 (i=3, Key=5): j=2, Data[2]=8 > 5? Yes → shift, j=1, Data[1]=3 > 5? No → insert at pos 2.',
      'After all 5 passes: [1,2,3,5,8,9]',
    ],
    solution: `// Trace of InsertionSort([8,3,5,1,9,2])
// Size = 6

// Pass 1: i=2, Key=3
//   j=1: Data[1]=8 > 3? YES → Data[2]←8, j=0
//   j=0: Exit WHILE (j not > 0)
//   Data[1] ← 3
//   Array: [3,8,5,1,9,2]

// Pass 2: i=3, Key=5
//   j=2: Data[2]=8 > 5? YES → Data[3]←8, j=1
//   j=1: Data[1]=3 > 5? NO → Exit WHILE
//   Data[2] ← 5
//   Array: [3,5,8,1,9,2]

// Pass 3: i=4, Key=1
//   j=3: Data[3]=8 > 1? YES → shift, j=2
//   j=2: Data[2]=5 > 1? YES → shift, j=1
//   j=1: Data[1]=3 > 1? YES → shift, j=0
//   j=0: Exit WHILE
//   Data[1] ← 1
//   Array: [1,3,5,8,9,2]

// Pass 4: i=5, Key=9
//   j=4: Data[4]=8 > 9? NO → Exit WHILE
//   Data[5] ← 9 (no change)
//   Array: [1,3,5,8,9,2]

// Pass 5: i=6, Key=2
//   j=5: 9>2 → shift, j=4: 8>2 → shift
//   j=3: 5>2 → shift, j=2: 3>2 → shift
//   j=1: 1>2? NO → Exit
//   Data[2] ← 2
//   Array: [1,2,3,5,8,9] ← SORTED!`
  },
  {
    id: 2,
    title: 'Write Insertion Sort for Descending Order',
    difficulty: 'Easy',
    color: 'from-purple-500 to-pink-500',
    description: 'Modify InsertionSort to sort an INTEGER array in DESCENDING order (largest first).',
    hints: [
      'Only ONE thing changes from the ascending version.',
      'The WHILE condition currently shifts elements that are LARGER than Key to the right.',
      'For descending, you want to shift elements that are SMALLER than Key to the right.',
      'Change Data[j] > Key to Data[j] < Key in the WHILE condition.',
      'Everything else — i starts at 2, j←i-1, Data[j+1]←Data[j], Data[j+1]←Key — stays exactly the same!',
    ],
    solution: `PROCEDURE InsertionSortDesc(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Key : INTEGER
   
   FOR i ← 2 TO Size
      Key ← Data[i]
      j ← i - 1
      WHILE j > 0 AND Data[j] < Key    // ONLY CHANGE: > becomes <
         Data[j + 1] ← Data[j]
         j ← j - 1
      ENDWHILE
      Data[j + 1] ← Key
   NEXT i
ENDPROCEDURE

// Test: [5, 3, 8, 1, 9, 2] → [9, 8, 5, 3, 2, 1]

// Pass 1: i=2, Key=3
//   j=1: Data[1]=5 < 3? NO → exit immediately
//   Data[2]←3 (no change): [5,3,8,1,9,2]

// Pass 2: i=3, Key=8
//   j=2: Data[2]=3 < 8? YES → shift, j=1
//   j=1: Data[1]=5 < 8? YES → shift, j=0
//   j=0: exit, Data[1]←8: [8,5,3,1,9,2]

// Final result: [9,8,5,3,2,1] ✓`
  },
  {
    id: 3,
    title: 'Sort Parallel Arrays (Names + Marks)',
    difficulty: 'Hard',
    color: 'from-pink-500 to-rose-500',
    description: 'Write InsertionSort that sorts an INTEGER array Marks in ascending order while keeping a STRING array Names aligned.',
    hints: [
      'You need TWO BYREF parameters: BYREF Marks : ARRAY and BYREF Names : ARRAY.',
      'You need TWO key variables: Key for the mark, and KeyName for the name.',
      'Save BOTH at the start of each outer loop: Key←Marks[i] and KeyName←Names[i].',
      'When shifting, shift BOTH arrays: Marks[j+1]←Marks[j] AND Names[j+1]←Names[j].',
      'When inserting, insert BOTH: Marks[j+1]←Key AND Names[j+1]←KeyName.',
    ],
    solution: `PROCEDURE InsertionSortParallel(BYREF Marks : ARRAY, BYREF Names : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Key : INTEGER
   DECLARE KeyName : STRING
   
   FOR i ← 2 TO Size
      Key ← Marks[i]
      KeyName ← Names[i]       // Save BOTH values
      j ← i - 1
      WHILE j > 0 AND Marks[j] > Key
         Marks[j + 1] ← Marks[j]    // Shift mark right
         Names[j + 1] ← Names[j]    // Shift name right (keep aligned!)
         j ← j - 1
      ENDWHILE
      Marks[j + 1] ← Key        // Insert mark
      Names[j + 1] ← KeyName    // Insert name at SAME position
   NEXT i
ENDPROCEDURE

// Test data:
// Names: [Ali,  Sara, Omar, Zara, Raza]
// Marks: [65,   90,   72,   58,   85 ]

// After sorting by Marks ascending:
// Names: [Zara, Ali,  Omar, Raza, Sara]
// Marks: [58,   65,   72,   85,   90 ]
// ✓ Names and Marks stay aligned!

CALL InsertionSortParallel(Marks, Names, 5)`
  },
  {
    id: 4,
    title: '⭐ Compare Insertion Sort vs Bubble Sort',
    difficulty: 'Exam Style',
    color: 'from-rose-500 to-orange-500',
    description: 'Write both procedures and compare their performance on the same dataset [5,3,8,1,9,2]. Which performs fewer operations?',
    hints: [
      'Insertion Sort shifts; Bubble Sort swaps. Count shifts vs swaps.',
      'For insertion sort, count each Data[j+1]←Data[j] as one operation.',
      'For bubble sort, count each 3-step swap (Temp, Data[j]←Data[j+1], Data[j+1]←Temp) as one operation.',
      'Insertion sort: Pass1=1 shift, Pass2=1 shift, Pass3=3 shifts, Pass4=0, Pass5=4 shifts = 9 shifts',
      'Bubble sort processes more pairs per pass but detects done early with Swapped flag.',
    ],
    solution: `// INSERTION SORT on [5,3,8,1,9,2]
PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i, j, Key : INTEGER
   FOR i ← 2 TO Size
      Key ← Data[i]
      j ← i - 1
      WHILE j > 0 AND Data[j] > Key
         Data[j + 1] ← Data[j]
         j ← j - 1
      ENDWHILE
      Data[j + 1] ← Key
   NEXT i
ENDPROCEDURE

// Operations count for [5,3,8,1,9,2]:
// Pass1(Key=3): 1 shift
// Pass2(Key=8): 1 shift (8 goes to same spot)
// Pass3(Key=1): 3 shifts
// Pass4(Key=9): 0 shifts
// Pass5(Key=2): 4 shifts
// TOTAL: 9 shift operations

// BUBBLE SORT on [5,3,8,1,9,2]
PROCEDURE BubbleSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i, j, Temp : INTEGER
   DECLARE Swapped : BOOLEAN
   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Data[j] > Data[j+1]
            THEN
               Temp ← Data[j]
               Data[j] ← Data[j+1]
               Data[j+1] ← Temp
               Swapped ← TRUE
         ENDIF
      NEXT j
      IF NOT Swapped THEN RETURN ENDIF
   NEXT i
ENDPROCEDURE

// Operations count:
// Pass1: 4 swaps (5↔3, 8↔1, 8↔9 no, 9↔2 yes... etc)
// Total comparisons: more than insertion sort

// CONCLUSION:
// For THIS dataset, insertion sort uses fewer operations (9 shifts)
// For nearly-sorted data, insertion sort is MUCH faster
// For reverse-sorted data, both are similarly slow O(n²)`
  },
];

export default function D27Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, exercises.find(e => e.id === id)!.hints.length) }));
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-500 mb-8">4 exercises — from tracing to writing to comparing algorithms</p>

      <div className="space-y-8">
        {exercises.map((ex) => {
          const hintsShown = revealed[ex.id] || 0;
          const solutionShown = showSolution[ex.id] || false;

          return (
            <div key={ex.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className={`bg-gradient-to-r ${ex.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold opacity-80">Exercise {ex.id}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">{ex.difficulty}</span>
                </div>
                <h3 className="text-xl font-bold">{ex.title}</h3>
                <p className="text-sm opacity-90 mt-1">{ex.description}</p>
              </div>

              <div className="p-6">
                {/* Hints */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-600">{hintsShown}/{ex.hints.length} hints revealed</span>
                    {hintsShown < ex.hints.length && (
                      <button onClick={() => revealHint(ex.id)} className="text-sm bg-fuchsia-100 text-fuchsia-700 px-4 py-1.5 rounded-lg font-semibold hover:bg-fuchsia-200 transition-colors">
                        💡 Reveal Hint
                      </button>
                    )}
                  </div>
                  {hintsShown > 0 && (
                    <div className="space-y-2">
                      {ex.hints.slice(0, hintsShown).map((hint, i) => (
                        <div key={i} className="flex items-start gap-2 bg-fuchsia-50 border border-fuchsia-100 rounded-xl px-4 py-2">
                          <span className="text-fuchsia-600 font-bold text-sm flex-shrink-0">{i + 1}.</span>
                          <p className="text-sm text-fuchsia-900">{hint}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solution */}
                <button
                  onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !solutionShown }))}
                  className="w-full text-center py-2 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-fuchsia-400 hover:text-fuchsia-600 transition-colors text-sm font-semibold mb-4"
                >
                  {solutionShown ? '🙈 Hide Solution' : '👁️ Show Full Solution'}
                </button>
                {solutionShown && <CodeBlock code={ex.solution} language="pseudocode" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
