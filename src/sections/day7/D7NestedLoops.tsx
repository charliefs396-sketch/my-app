import CodeBlock from '../../components/CodeBlock';

export default function D7NestedLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        🔁 Nested Loops with 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">The essential pattern — a FOR loop inside a FOR loop</p>

      {/* Why nested loops? */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🤔 Why Do We Need Nested Loops?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          A 1D array needs ONE loop (to go through each element). A 2D array needs <strong>TWO loops</strong> — one for rows and one for columns. The inner loop runs completely for every single step of the outer loop.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-orange-800 mb-2">🎬 Think of it like a cinema:</p>
          <ul className="space-y-2 text-orange-700 text-sm">
            <li>• <strong>Outer loop (Row)</strong> = You walk to each ROW of seats, one by one</li>
            <li>• <strong>Inner loop (Col)</strong> = For EACH row, you check every seat from left to right</li>
            <li>• Total seats checked = 5 rows × 3 seats = 15 times the inner loop runs</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
          <p className="text-gray-500 mb-2">// Execution order for ARRAY[1:3, 1:2]:</p>
          <p className="text-orange-600">Row=1: <span className="text-blue-600">Col=1</span>, <span className="text-blue-600">Col=2</span></p>
          <p className="text-orange-600">Row=2: <span className="text-blue-600">Col=1</span>, <span className="text-blue-600">Col=2</span></p>
          <p className="text-orange-600">Row=3: <span className="text-blue-600">Col=1</span>, <span className="text-blue-600">Col=2</span></p>
          <p className="text-gray-400 mt-2">// Total: 6 cells visited in order [1,1] → [1,2] → [2,1] → [2,2] → [3,1] → [3,2]</p>
        </div>
      </div>

      {/* Input all values */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⌨️ Inputting All Values (The Full Pattern)</h2>
        <CodeBlock language="pseudocode" code={`// 5 students, 3 subjects
DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Row : INTEGER
DECLARE Col : INTEGER

// Step 1: Get student names (just a 1D loop)
FOR Row ← 1 TO 5
   OUTPUT "Enter student name: "
   INPUT Names[Row]
NEXT Row

// Step 2: Get marks (nested loop — 2D!)
FOR Row ← 1 TO 5
   FOR Col ← 1 TO 3
      OUTPUT "Enter mark for ", Names[Row], " subject ", Col, ": "
      INPUT Marks[Row, Col]
   NEXT Col
NEXT Row

// The outer NEXT always matches the outer FOR
// The inner NEXT always matches the inner FOR`} />

        <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded-xl p-4">
          <p className="font-bold text-yellow-800 mb-2">⚠️ NEXT Counter Must Match!</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-bold text-red-600 mb-1">❌ WRONG</p>
              <div className="font-mono text-xs bg-red-50 p-2 rounded border border-red-200 text-red-700">
                <p>FOR Row ← 1 TO 5</p>
                <p className="ml-4">FOR Col ← 1 TO 3</p>
                <p className="ml-4">NEXT Row    ← wrong!</p>
                <p>NEXT Col    ← wrong!</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-green-600 mb-1">✅ CORRECT</p>
              <div className="font-mono text-xs bg-green-50 p-2 rounded border border-green-200 text-green-700">
                <p>FOR Row ← 1 TO 5</p>
                <p className="ml-4">FOR Col ← 1 TO 3</p>
                <p className="ml-4">NEXT Col    ← inner</p>
                <p>NEXT Row    ← outer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display all values */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📤 Displaying All Values</h2>
        <CodeBlock language="pseudocode" code={`// Display entire grid
FOR Row ← 1 TO 5
   FOR Col ← 1 TO 3
      OUTPUT Marks[Row, Col], " "
   NEXT Col
   OUTPUT ""         // New line after each student's row
NEXT Row

// Display with student names
FOR Row ← 1 TO 5
   OUTPUT Names[Row], ": "
   FOR Col ← 1 TO 3
      OUTPUT Marks[Row, Col], " "
   NEXT Col
NEXT Row`} />
      </div>

      {/* Trace Table */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Trace Table — Nested Loop Execution</h2>
        <p className="text-gray-600 mb-4">For a small <span className="font-mono bg-gray-100 px-1 rounded">ARRAY[1:3, 1:2]</span> — trace exactly what happens:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-orange-300 p-2 text-orange-800">Step</th>
                <th className="border border-orange-300 p-2 text-orange-800">Row</th>
                <th className="border border-orange-300 p-2 text-orange-800">Col</th>
                <th className="border border-orange-300 p-2 text-orange-800">Action</th>
                <th className="border border-orange-300 p-2 text-orange-800">Cell</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', '1', '1', 'INPUT Marks[1,1]', 'Row 1, Col 1'],
                ['2', '1', '2', 'INPUT Marks[1,2]', 'Row 1, Col 2'],
                ['3', '—', '—', 'NEXT Row (Col done)', 'End of Row 1'],
                ['4', '2', '1', 'INPUT Marks[2,1]', 'Row 2, Col 1'],
                ['5', '2', '2', 'INPUT Marks[2,2]', 'Row 2, Col 2'],
                ['6', '—', '—', 'NEXT Row (Col done)', 'End of Row 2'],
                ['7', '3', '1', 'INPUT Marks[3,1]', 'Row 3, Col 1'],
                ['8', '3', '2', 'INPUT Marks[3,2]', 'Row 3, Col 2'],
                ['9', '—', '—', 'Loop ends', 'Done!'],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-orange-100 ${row[2] === '—' ? 'bg-orange-50' : 'bg-white'}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-2 text-center font-mono text-xs ${j === 3 ? 'text-left text-gray-700' : 'text-orange-700 font-bold'} ${row[2] === '—' ? 'text-orange-400 italic' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row vs Column first */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔀 Row-by-Row vs Column-by-Column</h2>
        <p className="text-gray-600 mb-4">You can process a 2D array in TWO different ways — this is a key exam concept!</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-orange-700 mb-2">📊 Row-by-Row (outer=Row)</p>
            <p className="text-sm text-gray-600 mb-2">Good for: "average per student"</p>
            <CodeBlock language="pseudocode" code={`FOR Row ← 1 TO 5
   Total ← 0
   FOR Col ← 1 TO 3
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT Names[Row], Total / 3
NEXT Row`} />
          </div>
          <div>
            <p className="font-bold text-blue-700 mb-2">📈 Column-by-Column (outer=Col)</p>
            <p className="text-sm text-gray-600 mb-2">Good for: "average per subject"</p>
            <CodeBlock language="pseudocode" code={`FOR Col ← 1 TO 3
   Total ← 0
   FOR Row ← 1 TO 5
      Total ← Total + Marks[Row, Col]
   NEXT Row
   OUTPUT "Subject ", Col, Total / 5
NEXT Col`} />
          </div>
        </div>
        <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="font-bold text-indigo-800 mb-1">🧠 Key Insight for Exams</p>
          <p className="text-indigo-700 text-sm">
            The <strong>outer loop</strong> determines what you process one at a time. If you want "one student at a time" → outer is Row. If you want "one subject at a time" → outer is Col.
          </p>
        </div>
      </div>
    </div>
  );
}
