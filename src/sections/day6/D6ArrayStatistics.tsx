import CodeBlock from '../../components/CodeBlock';

const totalAvgCode = `// Pattern: Total → Average (2 separate loops)
DECLARE Marks    : ARRAY[1:10] OF INTEGER
DECLARE i        : INTEGER
DECLARE Total    : INTEGER
DECLARE Average  : REAL

// Step 1: Input (first loop)
FOR i ← 1 TO 10
   OUTPUT "Enter mark: "
   INPUT Marks[i]
NEXT i

// Step 2: Calculate total (second loop)
Total ← 0
FOR i ← 1 TO 10
   Total ← Total + Marks[i]
NEXT i

// Step 3: Calculate average
Average ← Total / 10

OUTPUT "Total: ", Total
OUTPUT "Average: ", Average`;

const aboveAvgCode = `// Count students above average (3-pass pattern)
DECLARE Marks      : ARRAY[1:10] OF INTEGER
DECLARE Names      : ARRAY[1:10] OF STRING
DECLARE i          : INTEGER
DECLARE Total      : INTEGER
DECLARE Average    : REAL
DECLARE AboveCount : INTEGER

// Pass 1: Input
FOR i ← 1 TO 10
   OUTPUT "Enter name: "
   INPUT Names[i]
   OUTPUT "Enter mark: "
   INPUT Marks[i]
NEXT i

// Pass 2: Calculate total and average
Total ← 0
FOR i ← 1 TO 10
   Total ← Total + Marks[i]
NEXT i
Average ← Total / 10

// Pass 3: Count and output those above average
AboveCount ← 0
FOR i ← 1 TO 10
   IF Marks[i] > Average
      THEN
         AboveCount ← AboveCount + 1
         OUTPUT Names[i], " is above average with ", Marks[i]
   ENDIF
NEXT i

OUTPUT AboveCount, " students above average"`;

const aboveBelowCode = `// Count BOTH above AND below average
DECLARE Values     : ARRAY[1:10] OF INTEGER
DECLARE i          : INTEGER
DECLARE Total      : INTEGER
DECLARE Average    : REAL
DECLARE AboveCount : INTEGER
DECLARE BelowCount : INTEGER
DECLARE EqualCount : INTEGER

Total ← 0
FOR i ← 1 TO 10
   Total ← Total + Values[i]
NEXT i
Average ← Total / 10

AboveCount ← 0
BelowCount ← 0
EqualCount ← 0

FOR i ← 1 TO 10
   IF Values[i] > Average
      THEN
         AboveCount ← AboveCount + 1
      ELSE
         IF Values[i] < Average
            THEN
               BelowCount ← BelowCount + 1
            ELSE
               EqualCount ← EqualCount + 1
         ENDIF
   ENDIF
NEXT i

OUTPUT "Above average: ", AboveCount
OUTPUT "Below average: ", BelowCount
OUTPUT "Equal to average: ", EqualCount`;

const secondLargestCode = `// Find the SECOND largest value (classic A Level question!)
DECLARE Values        : ARRAY[1:10] OF INTEGER
DECLARE i             : INTEGER
DECLARE Largest       : INTEGER
DECLARE SecondLargest : INTEGER

// Step 1: Determine which of first two is larger
IF Values[1] > Values[2]
   THEN
      Largest       ← Values[1]
      SecondLargest ← Values[2]
   ELSE
      Largest       ← Values[2]
      SecondLargest ← Values[1]
ENDIF

// Step 2: Check remaining elements
FOR i ← 3 TO 10
   IF Values[i] > Largest
      THEN
         SecondLargest ← Largest       // old largest becomes second
         Largest       ← Values[i]     // new element becomes largest
      ELSE
         IF Values[i] > SecondLargest AND Values[i] <> Largest
            THEN
               SecondLargest ← Values[i]
         ENDIF
   ENDIF
NEXT i

OUTPUT "Largest: ", Largest
OUTPUT "Second largest: ", SecondLargest`;

const secondLargestTrace = `// Trace: Values = [5, 3, 8, 2, 9, 1, 7, 4, 6, 10]

// After comparing Values[1]=5 and Values[2]=3:
// Largest=5, SecondLargest=3

// i=3: Values[3]=8 > 5? YES
//   SecondLargest=5, Largest=8
// i=4: Values[4]=2 > 8? NO. 2 > 5? NO. No change.
// i=5: Values[5]=9 > 8? YES
//   SecondLargest=8, Largest=9
// i=6: Values[6]=1 > 9? NO. 1 > 8? NO. No change.
// i=7: Values[7]=7 > 9? NO. 7 > 8? NO. No change.
// i=8: Values[8]=4 > 9? NO. 4 > 8? NO. No change.
// i=9: Values[9]=6 > 9? NO. 6 > 8? NO. No change.
// i=10: Values[10]=10 > 9? YES
//   SecondLargest=9, Largest=10

// Final: Largest=10, SecondLargest=9  ✓`;

const searchCode = `// Linear Search: find if a value exists in array
DECLARE Marks  : ARRAY[1:10] OF INTEGER
DECLARE Names  : ARRAY[1:10] OF STRING
DECLARE Target : INTEGER
DECLARE Found  : BOOLEAN
DECLARE i      : INTEGER

OUTPUT "Enter mark to search for: "
INPUT Target

Found ← FALSE
i ← 1

WHILE i <= 10 AND Found = FALSE
   IF Marks[i] = Target
      THEN
         Found ← TRUE
         OUTPUT "Found! Student: ", Names[i]
   ENDIF
   i ← i + 1
ENDWHILE

IF Found = FALSE
   THEN
      OUTPUT "Mark ", Target, " not found"
ENDIF`;

export default function D6ArrayStatistics() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📊 Totals, Averages & Counting
      </h1>
      <p className="text-gray-500 text-lg mb-8">The multi-pass array processing patterns that dominate Cambridge 9618 exam questions</p>

      {/* Total and Average */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1️⃣ Total & Average — The 2-Pass Pattern</h2>
        <p className="text-gray-600 mb-4">You always need <strong>two separate loops</strong> — one to input, one to process:</p>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">1️⃣</p>
            <p className="font-bold text-indigo-800">Input Loop</p>
            <p className="text-indigo-600 text-sm">Fill the array with values</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">2️⃣</p>
            <p className="font-bold text-purple-800">Total Loop</p>
            <p className="text-purple-600 text-sm">Add all values to Total</p>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">3️⃣</p>
            <p className="font-bold text-pink-800">Calculate Average</p>
            <p className="text-pink-600 text-sm">Average ← Total / N</p>
          </div>
        </div>

        <CodeBlock code={totalAvgCode} language="pseudocode" />

        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="font-bold text-red-800 mb-2">⚠️ Why REAL for Average, not INTEGER?</p>
          <p className="text-red-700 text-sm">Because averages often have decimal places! If Total=75 and N=10, Average=7.5 — you'd lose the .5 if you declared Average as INTEGER. Always use <strong>REAL</strong> for averages!</p>
        </div>
      </div>

      {/* Count above average */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2️⃣ Count Above Average — The 3-Pass Pattern</h2>
        <p className="text-gray-600 mb-2">You MUST calculate average BEFORE you can compare elements to it. This requires 3 passes through the data:</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-amber-800 mb-2">🤔 Why can't you do it in one loop?</p>
          <p className="text-amber-700 text-sm">You can't compare a value to the average until you KNOW the average. And you can't know the average until you've seen ALL the values. So you must finish collecting data first, then calculate average, then compare.</p>
        </div>

        <CodeBlock code={aboveAvgCode} language="pseudocode" />
      </div>

      {/* Count above and below */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3️⃣ Count Both Above AND Below Average</h2>
        <p className="text-gray-600 mb-4">Extend the pattern with nested IF to handle all three cases:</p>
        <CodeBlock code={aboveBelowCode} language="pseudocode" />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left font-bold text-gray-700">Condition</th>
                <th className="p-3 text-left font-bold text-gray-700">Counter updated</th>
                <th className="p-3 text-left font-bold text-gray-700">Example (avg=70)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="p-3 font-mono">Values[i] {'>'} Average</td><td className="p-3 text-green-700 font-semibold">AboveCount + 1</td><td className="p-3 text-gray-600">Values[i] = 85</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono">Values[i] {'<'} Average</td><td className="p-3 text-red-700 font-semibold">BelowCount + 1</td><td className="p-3 text-gray-600">Values[i] = 55</td></tr>
              <tr><td className="p-3 font-mono">Values[i] = Average</td><td className="p-3 text-blue-700 font-semibold">EqualCount + 1</td><td className="p-3 text-gray-600">Values[i] = 70</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second largest */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4️⃣ Find the Second Largest — Classic Exam Question!</h2>
        <p className="text-gray-600 mb-2">This is one of the hardest array questions at A Level. Here's how to think about it:</p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-indigo-800 mb-2">🧠 The Strategy:</p>
          <ol className="text-indigo-700 text-sm space-y-1 list-decimal pl-4">
            <li>Keep track of <strong>two variables</strong>: Largest and SecondLargest</li>
            <li>Set them from the <strong>first two elements</strong> (in correct order)</li>
            <li>For each remaining element, check: <br/>
              &nbsp;&nbsp;→ If bigger than Largest: old Largest becomes SecondLargest, new is Largest<br/>
              &nbsp;&nbsp;→ If between Largest and SecondLargest: becomes new SecondLargest</li>
          </ol>
        </div>

        <CodeBlock code={secondLargestCode} language="pseudocode" />

        <div className="mt-4">
          <p className="font-bold text-gray-800 mb-2">📝 Trace through [5, 3, 8, 2, 9, 1, 7, 4, 6, 10]:</p>
          <CodeBlock code={secondLargestTrace} language="pseudocode" />
        </div>
      </div>

      {/* Linear Search */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">5️⃣ Linear Search — Finding a Specific Value</h2>
        <p className="text-gray-600 mb-4">Search through an array to find if a particular value exists:</p>
        <CodeBlock code={searchCode} language="pseudocode" />

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-800 mb-2">💡 Why use WHILE instead of FOR here?</p>
          <p className="text-blue-700 text-sm">Because we want to <strong>stop as soon as we find it</strong>! A FOR loop always goes to the end. A WHILE loop with <code className="bg-blue-100 px-1 rounded font-mono">AND Found = FALSE</code> stops the moment we find our target — much more efficient!</p>
        </div>
      </div>

      {/* Summary of patterns */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <p className="font-bold text-indigo-800 text-lg mb-4">📋 All Array Patterns — Quick Reference</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { pattern: "Populate", code: "FOR i←1 TO N\n  INPUT Arr[i]\nNEXT i", color: "bg-white" },
            { pattern: "Total", code: "Total←0\nFOR i←1 TO N\n  Total←Total+Arr[i]\nNEXT i", color: "bg-white" },
            { pattern: "Average", code: "Average ← Total / N\n(declare as REAL!)", color: "bg-white" },
            { pattern: "Find Max", code: "Max←Arr[1]\nFOR i←2 TO N\n  IF Arr[i]>Max THEN Max←Arr[i]\nNEXT i", color: "bg-white" },
            { pattern: "Find Min", code: "Min←Arr[1]\nFOR i←2 TO N\n  IF Arr[i]<Min THEN Min←Arr[i]\nNEXT i", color: "bg-white" },
            { pattern: "Count matching", code: "Count←0\nFOR i←1 TO N\n  IF Arr[i]>X THEN Count←Count+1\nNEXT i", color: "bg-white" },
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-xl border border-indigo-200 p-4`}>
              <p className="font-bold text-indigo-700 mb-2">{item.pattern}</p>
              <pre className="text-gray-700 font-mono text-xs whitespace-pre-wrap">{item.code}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
