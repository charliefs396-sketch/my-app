import CodeBlock from '../../components/CodeBlock';

export default function D29Review6to10() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📊 Days 6–10 Review</h2>
      <p className="text-gray-500 mb-6">Arrays (1D & 2D), Linear Search, Bubble Sort, Procedures & Functions</p>

      {/* Day 6 */}
      <div className="bg-white border border-teal-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-teal-700 text-lg mb-3">📦 Day 6 – 1D Arrays</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-teal-50 rounded-lg p-3">
            <p className="font-bold text-teal-700 text-sm mb-2">Key Rules:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ DECLARE Marks : ARRAY[1:10] OF INTEGER</li>
              <li>✅ 1-indexed (not 0 like Python!)</li>
              <li>✅ Access: Marks[i] where i is index</li>
              <li>✅ Use FOR loop to populate/display</li>
            </ul>
          </div>
          <div className="bg-teal-50 rounded-lg p-3">
            <p className="font-bold text-teal-700 text-sm mb-2">Common Patterns:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>🔢 Find Max: start Max ← Data[1]</li>
              <li>📊 Average: Total / Size</li>
              <li>🔢 Count above average: 2-pass</li>
              <li>🥈 Second largest: track Max & Second</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Store 6 scores in an array. Find the max, min, average, and count how many are above average. Output all results.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Scores : ARRAY[1:6] OF INTEGER
DECLARE i, Max, Min, Total, AboveCount : INTEGER
DECLARE Average : REAL

FOR i ← 1 TO 6
   INPUT Scores[i]
NEXT i

Max ← Scores[1]
Min ← Scores[1]
Total ← 0

FOR i ← 1 TO 6
   IF Scores[i] > Max THEN Max ← Scores[i] ENDIF
   IF Scores[i] < Min THEN Min ← Scores[i] ENDIF
   Total ← Total + Scores[i]
NEXT i

Average ← Total / 6
AboveCount ← 0

FOR i ← 1 TO 6
   IF Scores[i] > Average THEN AboveCount ← AboveCount + 1 ENDIF
NEXT i

OUTPUT "Max: ", Max
OUTPUT "Min: ", Min
OUTPUT "Average: ", Average
OUTPUT "Above average: ", AboveCount`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 7 */}
      <div className="bg-white border border-cyan-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-cyan-700 text-lg mb-3">📊 Day 7 – 2D Arrays</h3>
        <div className="bg-cyan-50 rounded-lg p-3 mb-4">
          <p className="font-bold text-cyan-700 text-sm mb-2">Key Rules:</p>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>✅ DECLARE Grid : ARRAY[1:3, 1:4] OF INTEGER → 3 rows, 4 columns</li>
            <li>✅ Access: Grid[Row, Col]</li>
            <li>✅ Need 2 nested FOR loops (outer=rows, inner=cols)</li>
            <li>✅ Row average: loop through all columns, divide by num cols</li>
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">3 students, 4 subjects. Input all marks. Find each student's average. Find the highest mark in the ENTIRE table and say which student/subject it belongs to.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:3, 1:4] OF INTEGER
DECLARE Row, Col, Total, Max, MaxRow, MaxCol : INTEGER

FOR Row ← 1 TO 3
   FOR Col ← 1 TO 4
      INPUT Marks[Row, Col]
   NEXT Col
NEXT Row

// Student averages
FOR Row ← 1 TO 3
   Total ← 0
   FOR Col ← 1 TO 4
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT "Student ", Row, " average: ", Total / 4
NEXT Row

// Find overall highest
Max ← Marks[1, 1]
MaxRow ← 1
MaxCol ← 1

FOR Row ← 1 TO 3
   FOR Col ← 1 TO 4
      IF Marks[Row, Col] > Max
         THEN
            Max ← Marks[Row, Col]
            MaxRow ← Row
            MaxCol ← Col
      ENDIF
   NEXT Col
NEXT Row

OUTPUT "Highest: ", Max, " Student ", MaxRow, " Subject ", MaxCol`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 8 */}
      <div className="bg-white border border-blue-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-blue-700 text-lg mb-3">🔍 Day 8 – Linear Search</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="font-bold text-blue-700 text-sm mb-2">FUNCTION version:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Returns position (INTEGER)</li>
              <li>✅ Returns -1 if not found</li>
              <li>✅ Use FOR loop with early RETURN</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="font-bold text-blue-700 text-sm mb-2">Count/Find All version:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ No early RETURN — use counter</li>
              <li>✅ Loop ALL elements always</li>
              <li>✅ Output all matching positions</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write a FUNCTION that searches an array of 10 integers for a target. If found, return the position. If not found, return -1. Then write code to USE the function and output an appropriate message.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`FUNCTION LinearSearch(Data : ARRAY, Size : INTEGER, Target : INTEGER) RETURNS INTEGER
   DECLARE i : INTEGER
   FOR i ← 1 TO Size
      IF Data[i] = Target
         THEN RETURN i
      ENDIF
   NEXT i
   RETURN -1
ENDFUNCTION

DECLARE Numbers : ARRAY[1:10] OF INTEGER
DECLARE Target, Position : INTEGER

FOR i ← 1 TO 10
   INPUT Numbers[i]
NEXT i

INPUT Target
Position ← LinearSearch(Numbers, 10, Target)

IF Position <> -1
   THEN OUTPUT "Found at position ", Position
   ELSE OUTPUT "Not found"
ENDIF`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 9 */}
      <div className="bg-white border border-violet-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-violet-700 text-lg mb-3">🫧 Day 9 – Bubble Sort</h3>
        <div className="bg-violet-50 rounded-lg p-3 mb-4">
          <p className="font-bold text-violet-700 text-sm mb-2">The 3-Step Swap (MEMORISE THIS):</p>
          <code className="text-xs text-gray-700 block">Temp ← Data[j]  →  Data[j] ← Data[j+1]  →  Data[j+1] ← Temp</code>
          <p className="text-xs text-gray-500 mt-2">Swapped flag → early exit if no swaps in a pass = already sorted!</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Trace Bubble Sort on [9, 3, 7, 1, 5]. Show each pass. How many comparisons in Pass 1? When does it stop early using the Swapped flag?</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`// Pass 1 (4 comparisons):
// [9,3,7,1,5] → swap 9,3 → [3,9,7,1,5]
// [3,9,7,1,5] → swap 9,7 → [3,7,9,1,5]
// [3,7,9,1,5] → swap 9,1 → [3,7,1,9,5]
// [3,7,1,9,5] → swap 9,5 → [3,7,1,5,9] Swapped=TRUE

// Pass 2 (3 comparisons):
// [3,7,1,5,9] → no swap  → [3,7,1,5,9]
// [3,7,1,5,9] → swap 7,1 → [3,1,7,5,9]
// [3,1,7,5,9] → swap 7,5 → [3,1,5,7,9] Swapped=TRUE

// Pass 3 (2 comparisons):
// [3,1,5,7,9] → swap 3,1 → [1,3,5,7,9]
// [1,3,5,7,9] → no swap  → [1,3,5,7,9] Swapped=TRUE

// Pass 4 (1 comparison):
// [1,3,5,7,9] → no swap → Swapped=FALSE → STOP EARLY!
// Final: [1, 3, 5, 7, 9]`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 10 */}
      <div className="bg-white border border-rose-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-rose-700 text-lg mb-3">🔧 Day 10 – Procedures & Functions</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { name: 'PROCEDURE', rule: 'No return value. Called with CALL keyword.', color: 'bg-rose-50' },
            { name: 'FUNCTION', rule: 'Returns a value. Called without CALL — use the return value.', color: 'bg-rose-50' },
            { name: 'BYVAL', rule: 'Copy made. Original UNCHANGED.', color: 'bg-rose-50' },
            { name: 'BYREF', rule: 'Original variable IS changed.', color: 'bg-rose-50' },
          ].map((item) => (
            <div key={item.name} className={`${item.color} rounded-lg p-3`}>
              <p className="font-bold text-rose-700 text-sm">{item.name}</p>
              <p className="text-xs text-gray-600">{item.rule}</p>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write a FUNCTION IsEven that takes an INTEGER and returns BOOLEAN (TRUE if even). Write a PROCEDURE PrintStars that takes an INTEGER n and outputs n stars on one line. Use both in a program.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`FUNCTION IsEven(N : INTEGER) RETURNS BOOLEAN
   RETURN (N MOD 2 = 0)
ENDFUNCTION

PROCEDURE PrintStars(N : INTEGER)
   DECLARE i : INTEGER
   FOR i ← 1 TO N
      OUTPUT "*"
   NEXT i
   OUTPUT ""
ENDPROCEDURE

DECLARE Num : INTEGER
INPUT Num

IF IsEven(Num)
   THEN
      OUTPUT Num, " is even"
      CALL PrintStars(Num)
   ELSE
      OUTPUT Num, " is odd"
      CALL PrintStars(Num DIV 2)
ENDIF`} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
