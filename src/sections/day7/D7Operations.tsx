import CodeBlock from '../../components/CodeBlock';

export default function D7Operations() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        ⚙️ 2D Array Operations
      </h1>
      <p className="text-gray-500 text-lg mb-8">Average per student, average per subject, finding the highest overall</p>

      {/* Average per student */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📊 Average Per Student (Row Average)</h2>
        <p className="text-gray-600 mb-4">For each student (row), sum all their subject marks, then divide by number of subjects.</p>
        <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Total : INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER

FOR Row ← 1 TO 5
   Total ← 0                          // Reset total for each student!
   FOR Col ← 1 TO 3
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT Names[Row], " average: ", Total / 3
NEXT Row`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-orange-300 p-2">Student</th>
                <th className="border border-orange-300 p-2">Maths</th>
                <th className="border border-orange-300 p-2">Physics</th>
                <th className="border border-orange-300 p-2">CS</th>
                <th className="border border-orange-300 p-2">Total</th>
                <th className="border border-orange-300 p-2">Average</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ali', 85, 72, 91],
                ['Sara', 78, 88, 95],
                ['John', 65, 70, 80],
                ['Priya', 92, 85, 88],
                ['Tom', 71, 69, 75],
              ].map(([name, m, p, c]) => {
                const total = (m as number) + (p as number) + (c as number);
                return (
                  <tr key={name} className="border-t border-orange-100">
                    <td className="p-2 font-bold text-orange-700">{name}</td>
                    <td className="p-2 text-center">{m}</td>
                    <td className="p-2 text-center">{p}</td>
                    <td className="p-2 text-center">{c}</td>
                    <td className="p-2 text-center font-bold">{total}</td>
                    <td className="p-2 text-center font-bold text-green-700">{(total / 3).toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-800 text-sm font-bold">⚠️ Critical: Reset Total Inside the Outer Loop!</p>
          <p className="text-red-600 text-xs mt-1">
            <span className="font-mono">Total ← 0</span> MUST be inside the outer FOR loop (before the inner loop). 
            If it's outside, totals accumulate across all students!
          </p>
        </div>
      </div>

      {/* Average per subject */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📈 Average Per Subject (Column Average)</h2>
        <p className="text-gray-600 mb-4">Swap the loops — outer is now Col, inner is Row. Reset Total at the start of each column.</p>
        <CodeBlock language="pseudocode" code={`FOR Col ← 1 TO 3
   Total ← 0                          // Reset total for each subject!
   FOR Row ← 1 TO 5
      Total ← Total + Marks[Row, Col]
   NEXT Row
   OUTPUT "Subject ", Col, " average: ", Total / 5
NEXT Col`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-300 p-2">Subject</th>
                <th className="border border-blue-300 p-2">Ali</th>
                <th className="border border-blue-300 p-2">Sara</th>
                <th className="border border-blue-300 p-2">John</th>
                <th className="border border-blue-300 p-2">Priya</th>
                <th className="border border-blue-300 p-2">Tom</th>
                <th className="border border-blue-300 p-2">Total</th>
                <th className="border border-blue-300 p-2">Avg</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Maths (Col 1)', 85, 78, 65, 92, 71],
                ['Physics (Col 2)', 72, 88, 70, 85, 69],
                ['CS (Col 3)', 91, 95, 80, 88, 75],
              ].map(([subj, ...marks]) => {
                const total = (marks as number[]).reduce((a, b) => a + b, 0);
                return (
                  <tr key={subj as string} className="border-t border-blue-100">
                    <td className="p-2 font-bold text-blue-700">{subj}</td>
                    {(marks as number[]).map((m, i) => <td key={i} className="p-2 text-center">{m}</td>)}
                    <td className="p-2 text-center font-bold">{total}</td>
                    <td className="p-2 text-center font-bold text-green-700">{(total / 5).toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Find highest overall */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🏆 Find Who Got Highest Overall</h2>
        <p className="text-gray-600 mb-4">
          Calculate total for each student, track the maximum total and which student it belongs to.
        </p>
        <CodeBlock language="pseudocode" code={`DECLARE MaxTotal : INTEGER
DECLARE MaxRow : INTEGER
DECLARE RowTotal : INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER

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

OUTPUT "Highest overall: ", Names[MaxRow], " with total ", MaxTotal
OUTPUT "Average: ", MaxTotal / 3`} />

        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-bold text-green-800 mb-2">📋 Trace for our data:</p>
          <div className="font-mono text-xs space-y-1 text-green-700">
            <p>Row=1 (Ali):   Total=248, 248 &gt; 0 → MaxTotal=248, MaxRow=1</p>
            <p>Row=2 (Sara):  Total=261, 261 &gt; 248 → MaxTotal=261, MaxRow=2</p>
            <p>Row=3 (John):  Total=215, 215 &gt; 261? No</p>
            <p>Row=4 (Priya): Total=265, 265 &gt; 261 → MaxTotal=265, MaxRow=4</p>
            <p>Row=5 (Tom):   Total=215, 215 &gt; 265? No</p>
            <p className="mt-2 font-bold">OUTPUT: "Highest overall: Priya with total 265"</p>
          </div>
        </div>
      </div>

      {/* Find largest in each row */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🔢 Largest in Each Row (4×4 Grid)</h2>
        <p className="text-gray-600 mb-4">
          For each row, find the maximum value. Reset Max at the start of each row.
        </p>
        <CodeBlock language="pseudocode" code={`DECLARE Grid : ARRAY[1:4, 1:4] OF INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER
DECLARE Max : INTEGER

// Input 4x4 grid
FOR Row ← 1 TO 4
   FOR Col ← 1 TO 4
      OUTPUT "Enter Grid[", Row, ",", Col, "]: "
      INPUT Grid[Row, Col]
   NEXT Col
NEXT Row

// Find largest in each row
FOR Row ← 1 TO 4
   Max ← Grid[Row, 1]               // Start with first value in this row
   FOR Col ← 2 TO 4                 // Compare with rest (start from Col 2!)
      IF Grid[Row, Col] > Max
         THEN
            Max ← Grid[Row, Col]
      ENDIF
   NEXT Col
   OUTPUT "Row ", Row, " largest: ", Max
NEXT Row`} />

        <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
          <p className="font-bold text-orange-800 mb-2">💡 Why start with Grid[Row, 1]?</p>
          <p className="text-orange-700 text-sm">
            Just like in 1D arrays, you initialise Max with the first element of THAT ROW, then compare with the rest starting from Col 2.
            This is the same "assume first is max" pattern from Day 6!
          </p>
        </div>
      </div>

      {/* Combined full program */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🎯 Full Combined Program</h2>
        <p className="text-gray-600 mb-4">The complete exam-ready program — input, row averages, column averages, all in one:</p>
        <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Total : INTEGER
DECLARE Row : INTEGER
DECLARE Col : INTEGER

// INPUT
FOR Row ← 1 TO 5
   OUTPUT "Enter student name: "
   INPUT Names[Row]
   FOR Col ← 1 TO 3
      OUTPUT "Enter mark for subject ", Col, ": "
      INPUT Marks[Row, Col]
   NEXT Col
NEXT Row

// AVERAGE PER STUDENT
OUTPUT "--- Student Averages ---"
FOR Row ← 1 TO 5
   Total ← 0
   FOR Col ← 1 TO 3
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT Names[Row], " average: ", Total / 3
NEXT Row

// AVERAGE PER SUBJECT
OUTPUT "--- Subject Averages ---"
FOR Col ← 1 TO 3
   Total ← 0
   FOR Row ← 1 TO 5
      Total ← Total + Marks[Row, Col]
   NEXT Row
   OUTPUT "Subject ", Col, " average: ", Total / 5
NEXT Col`} />
      </div>
    </div>
  );
}
