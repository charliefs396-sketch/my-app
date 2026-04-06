import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Trace Bubble Sort on [8, 3, 5, 1, 9, 2]",
    description: "Perform a full trace of Bubble Sort on the array [8, 3, 5, 1, 9, 2]. Show each pass, all comparisons, all swaps, and the state of the array after each pass. Also show when the Swapped flag is set and when early exit occurs.",
    hints: [
      "Pass 1: Start with Swapped = FALSE. Compare positions 1 to Size-1 (1 to 5). After the pass, the largest element (9) should be at position 6.",
      "Pass 2: Compare positions 1 to Size-2 (1 to 4). The second largest element (8) should end up at position 5.",
      "Track every single comparison — even when no swap happens. Show the comparison (e.g., '3 < 5 → no swap') explicitly.",
      "After each pass, check: was Swapped still FALSE? If yes, early exit! This is what the Swapped flag is for.",
      "The array should be fully sorted after Pass 4 (or earlier with early exit). Final answer: [1, 2, 3, 5, 8, 9]"
    ],
    solution: `// Starting array: [8, 3, 5, 1, 9, 2]
// Size = 6, so we need at most 5 passes (Size - 1)

// PASS 1 (i=1): Compare j = 1 to 5
// j=1: 8 > 3 → SWAP → [3, 8, 5, 1, 9, 2]  Swapped=TRUE
// j=2: 8 > 5 → SWAP → [3, 5, 8, 1, 9, 2]  Swapped=TRUE
// j=3: 8 > 1 → SWAP → [3, 5, 1, 8, 9, 2]  Swapped=TRUE
// j=4: 8 < 9 → no swap → [3, 5, 1, 8, 9, 2]
// j=5: 9 > 2 → SWAP → [3, 5, 1, 8, 2, 9]  Swapped=TRUE
// End Pass 1: [3, 5, 1, 8, 2, 9]  → 9 is sorted ✅

// PASS 2 (i=2): Compare j = 1 to 4
// j=1: 3 < 5 → no swap → [3, 5, 1, 8, 2, 9]
// j=2: 5 > 1 → SWAP → [3, 1, 5, 8, 2, 9]  Swapped=TRUE
// j=3: 5 < 8 → no swap → [3, 1, 5, 8, 2, 9]
// j=4: 8 > 2 → SWAP → [3, 1, 5, 2, 8, 9]  Swapped=TRUE
// End Pass 2: [3, 1, 5, 2, 8, 9]  → 8, 9 sorted ✅

// PASS 3 (i=3): Compare j = 1 to 3
// j=1: 3 > 1 → SWAP → [1, 3, 5, 2, 8, 9]  Swapped=TRUE
// j=2: 3 < 5 → no swap → [1, 3, 5, 2, 8, 9]
// j=3: 5 > 2 → SWAP → [1, 3, 2, 5, 8, 9]  Swapped=TRUE
// End Pass 3: [1, 3, 2, 5, 8, 9]  → 5, 8, 9 sorted ✅

// PASS 4 (i=4): Compare j = 1 to 2
// j=1: 1 < 3 → no swap → [1, 3, 2, 5, 8, 9]
// j=2: 3 > 2 → SWAP → [1, 2, 3, 5, 8, 9]  Swapped=TRUE
// End Pass 4: [1, 2, 3, 5, 8, 9]  → 3, 5, 8, 9 sorted ✅

// PASS 5 (i=5): Compare j = 1 to 1
// j=1: 1 < 2 → no swap → Swapped still FALSE!
// IF NOT Swapped → RETURN (early exit!)
// End: Algorithm terminates after 5 passes

// FINAL SORTED ARRAY: [1, 2, 3, 5, 8, 9] ✅`,
    explanation: "The trace shows 5 passes (with early exit on pass 5 since Swapped remains FALSE). The Swapped flag would have triggered even earlier if the array became sorted before the maximum passes. Always show every comparison — the exam marks for showing NO-SWAP steps too!"
  },
  {
    id: 2,
    title: "Modify Bubble Sort for Descending Order",
    description: "Write the complete BubbleSortDescending PROCEDURE that sorts an integer array in descending order (largest first). Then trace it on [4, 2, 7, 1] showing all swaps.",
    hints: [
      "Only ONE thing changes from the ascending version — the comparison operator in the IF statement.",
      "In ascending sort, we swap when left > right (to push big values right). For descending, swap when left < right (to push small values right).",
      "Keep ALL other parts identical: BYREF, Swapped flag, Size-i in inner loop, Temp swap, ENDPROCEDURE.",
      "For the trace on [4, 2, 7, 1]: Pass 1 should move 1 (smallest) to position 4. Final result should be [7, 4, 2, 1].",
      "Remember to show Swapped = FALSE at the start of each pass and Swapped = TRUE whenever a swap occurs."
    ],
    solution: `PROCEDURE BubbleSortDescending(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Temp : INTEGER
   DECLARE Swapped : BOOLEAN
   
   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Data[j] < Data[j + 1]   // ← ONLY THIS LINE CHANGED!
            THEN
               Temp ← Data[j]
               Data[j] ← Data[j + 1]
               Data[j + 1] ← Temp
               Swapped ← TRUE
         ENDIF
      NEXT j
      IF NOT Swapped
         THEN
            RETURN
      ENDIF
   NEXT i
ENDPROCEDURE

// Trace on [4, 2, 7, 1] (Size = 4):
// PASS 1 (i=1): Compare j = 1 to 3
// j=1: 4 > 2? No (4 < 2 is false) → no swap → [4, 2, 7, 1]
// j=2: 2 < 7? Yes → SWAP → [4, 7, 2, 1]  Swapped=TRUE
// j=3: 2 > 1? No (2 < 1 is false) → no swap → [4, 7, 2, 1]
// Wait — recheck j=1: Is 4 < 2? No → no swap
// j=2: Is 2 < 7? Yes → SWAP → [4, 7, 2, 1]
// j=3: Is 2 < 1? No → no swap
// End Pass 1: [4, 7, 2, 1] → 1 is at end ✅

// PASS 2 (i=2): Compare j = 1 to 2
// j=1: Is 4 < 7? Yes → SWAP → [7, 4, 2, 1]  Swapped=TRUE
// j=2: Is 4 < 2? No → no swap
// End Pass 2: [7, 4, 2, 1] → 1, 2 at end ✅

// PASS 3 (i=3): Compare j = 1 to 1
// j=1: Is 7 < 4? No → no swap → Swapped stays FALSE
// IF NOT Swapped → RETURN (early exit!)

// FINAL: [7, 4, 2, 1] ✅ (Largest first)`,
    explanation: "The ONLY change is < instead of >. This means we now swap when a smaller value is to the LEFT of a larger value — pushing small values to the right end. Everything else stays exactly the same. The exam will test this!"
  },
  {
    id: 3,
    title: "Sort Parallel Arrays — Names and Marks",
    description: "Write a PROCEDURE that sorts students by their marks in ascending order. You have two parallel arrays: Names (STRING) and Marks (INTEGER), both of size 10. When you swap marks, you must also swap names to keep the data aligned.",
    hints: [
      "You need TWO Temp variables — one for INTEGER marks (TempMark) and one for STRING names (TempName).",
      "The comparison is still based on Marks only: IF Marks[j] > Marks[j+1]",
      "Whenever you swap Marks[j] and Marks[j+1], immediately also swap Names[j] and Names[j+1].",
      "Both arrays must be BYREF since both will be modified.",
      "After the sort, Names[1] will be the student with the lowest mark, Names[10] the highest."
    ],
    solution: `PROCEDURE SortStudents(BYREF Names : ARRAY, BYREF Marks : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE TempMark : INTEGER    // For swapping marks
   DECLARE TempName : STRING     // For swapping names
   DECLARE Swapped : BOOLEAN
   
   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Marks[j] > Marks[j + 1]   // Compare by marks
            THEN
               // Swap the MARKS
               TempMark ← Marks[j]
               Marks[j] ← Marks[j + 1]
               Marks[j + 1] ← TempMark
               
               // Swap the NAMES (keep aligned!)
               TempName ← Names[j]
               Names[j] ← Names[j + 1]
               Names[j + 1] ← TempName
               
               Swapped ← TRUE
         ENDIF
      NEXT j
      IF NOT Swapped
         THEN
            RETURN
      ENDIF
   NEXT i
ENDPROCEDURE

// Main program:
DECLARE StudentNames : ARRAY[1:10] OF STRING
DECLARE StudentMarks : ARRAY[1:10] OF INTEGER
DECLARE i : INTEGER

// Input data
FOR i ← 1 TO 10
   OUTPUT "Enter name: "
   INPUT StudentNames[i]
   OUTPUT "Enter mark: "
   INPUT StudentMarks[i]
NEXT i

// Sort
CALL SortStudents(StudentNames, StudentMarks, 10)

// Output sorted results
OUTPUT "Students sorted by mark (lowest to highest):"
FOR i ← 1 TO 10
   OUTPUT StudentNames[i], ": ", StudentMarks[i]
NEXT i`,
    explanation: "The key insight is that every swap operation must be applied to ALL parallel arrays simultaneously. Here we need TempMark (INTEGER) and TempName (STRING) as two separate Temp variables. The comparison always uses the key field (Marks) to decide whether to swap."
  },
];

export default function D9Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (exId: number, max: number) => {
    setRevealed(prev => ({ ...prev, [exId]: Math.min((prev[exId] || 0) + 1, max) }));
  };

  const toggleSolution = (exId: number) => {
    setShowSolution(prev => ({ ...prev, [exId]: !prev[exId] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-8">3 exercises covering trace tables, descending sort, and parallel arrays. Try each one before revealing hints!</p>

      <div className="space-y-8">
        {exercises.map((ex) => {
          const hintsRevealed = revealed[ex.id] || 0;
          const solutionVisible = showSolution[ex.id] || false;
          return (
            <div key={ex.id} className="card border-2 border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                  {ex.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{ex.title}</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">{ex.description}</p>
                </div>
              </div>

              {/* Hints */}
              {hintsRevealed > 0 && (
                <div className="mb-4 space-y-2">
                  {ex.hints.slice(0, hintsRevealed).map((hint, i) => (
                    <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2">
                      <span className="text-amber-500 font-bold text-sm flex-shrink-0">💡 Hint {i + 1}:</span>
                      <p className="text-amber-800 text-sm">{hint}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {hintsRevealed < ex.hints.length && (
                  <button
                    onClick={() => revealHint(ex.id, ex.hints.length)}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-xl font-semibold text-sm hover:bg-amber-200 transition-colors"
                  >
                    💡 Hint {hintsRevealed + 1}/{ex.hints.length}
                  </button>
                )}
                <button
                  onClick={() => toggleSolution(ex.id)}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl font-semibold text-sm hover:bg-indigo-200 transition-colors"
                >
                  {solutionVisible ? '🙈 Hide Solution' : '👁️ Show Solution'}
                </button>
              </div>

              {solutionVisible && (
                <div className="mt-4">
                  <CodeBlock language="pseudocode" code={ex.solution} />
                  <div className="mt-3 bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-green-800 mb-1">💡 Explanation:</p>
                    <p className="text-sm text-green-700">{ex.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bonus Challenge */}
      <div className="mt-8 card bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-purple-900 mb-2">🌟 Bonus Challenge — Count Swaps</h3>
        <p className="text-purple-700 mb-4">Modify the BubbleSort procedure to also count and output the total number of swaps made. Add a DECLARE TotalSwaps : INTEGER and increment it every time a swap occurs. Output it after sorting.</p>
        <div className="bg-purple-100 rounded-xl p-3">
          <p className="text-purple-800 text-sm font-semibold">Hint: TotalSwaps ← 0 before the outer loop. TotalSwaps ← TotalSwaps + 1 inside the swap block. OUTPUT TotalSwaps after ENDPROCEDURE (or pass it BYREF too!).</p>
        </div>
      </div>
    </div>
  );
}
