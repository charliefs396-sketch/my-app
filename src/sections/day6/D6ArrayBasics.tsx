import CodeBlock from '../../components/CodeBlock';

const declarationCode = `// Syntax: DECLARE Name : ARRAY[lower:upper] OF DataType

DECLARE Names  : ARRAY[1:10] OF STRING
DECLARE Marks  : ARRAY[1:10] OF INTEGER
DECLARE Prices : ARRAY[1:5]  OF REAL
DECLARE Flags  : ARRAY[1:3]  OF BOOLEAN

// The bounds tell you how many elements:
// ARRAY[1:10] means 10 elements (index 1 to 10)
// ARRAY[1:5]  means  5 elements (index 1 to 5)`;

const accessCode = `// Accessing individual elements
DECLARE Marks : ARRAY[1:5] OF INTEGER

// Store values directly
Marks[1] ← 72
Marks[2] ← 85
Marks[3] ← 61
Marks[4] ← 90
Marks[5] ← 78

// Read values
OUTPUT Marks[1]        // outputs 72
OUTPUT Marks[4]        // outputs 90

// Use in expressions
OUTPUT Marks[2] + Marks[3]   // outputs 146
OUTPUT Marks[1] * 2          // outputs 144`;

const populateCode = `// Populate with a FOR loop (most common pattern)
DECLARE Names  : ARRAY[1:10] OF STRING
DECLARE Marks  : ARRAY[1:10] OF INTEGER
DECLARE i      : INTEGER

FOR i ← 1 TO 10
   OUTPUT "Enter name: "
   INPUT Names[i]
   OUTPUT "Enter mark for ", Names[i], ": "
   INPUT Marks[i]
NEXT i

// Now Names[1] holds first name, Marks[1] holds their mark
// Names[2] holds second name, Marks[2] holds their mark
// ...and so on up to index 10`;

const displayCode = `// Display all array contents
DECLARE Marks : ARRAY[1:5] OF INTEGER
DECLARE i     : INTEGER

// Input (assume already done)

// Output all values
OUTPUT "All marks:"
FOR i ← 1 TO 5
   OUTPUT "Mark ", i, ": ", Marks[i]
NEXT i

// Output with formatting
FOR i ← 1 TO 5
   OUTPUT "Student ", i, " scored ", Marks[i], " marks"
NEXT i`;

const variableSizeCode = `// Using a variable for array size (flexible!)
DECLARE N     : INTEGER
DECLARE Marks : ARRAY[1:100] OF INTEGER
DECLARE i     : INTEGER

OUTPUT "How many students? "
INPUT N

// Only use first N positions
FOR i ← 1 TO N
   OUTPUT "Enter mark ", i, ": "
   INPUT Marks[i]
NEXT i

// Process only first N positions
FOR i ← 1 TO N
   OUTPUT Marks[i]
NEXT i`;

export default function D6ArrayBasics() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📦 Array Declaration & Access
      </h1>
      <p className="text-gray-500 text-lg mb-8">How to declare, populate and access 1D arrays correctly for Cambridge 9618</p>

      {/* Declaration */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1️⃣ Declaring an Array</h2>
        <p className="text-gray-600 mb-4">The syntax is strict at A Level — you must include the bounds and data type:</p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-indigo-800 mb-2">📐 Syntax Breakdown:</p>
          <p className="font-mono text-indigo-900 text-lg">DECLARE <span className="text-pink-600">Marks</span> : ARRAY[<span className="text-amber-600">1</span>:<span className="text-amber-600">10</span>] OF <span className="text-emerald-600">INTEGER</span></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="bg-white rounded-lg p-2 text-center border border-indigo-200">
              <p className="text-xs text-gray-500 mb-1">Keyword</p>
              <p className="font-mono font-bold text-indigo-700">DECLARE</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-pink-200">
              <p className="text-xs text-gray-500 mb-1">Array Name</p>
              <p className="font-mono font-bold text-pink-700">Marks</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-amber-200">
              <p className="text-xs text-gray-500 mb-1">Bounds</p>
              <p className="font-mono font-bold text-amber-700">[1:10]</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center border border-emerald-200">
              <p className="text-xs text-gray-500 mb-1">Data Type</p>
              <p className="font-mono font-bold text-emerald-700">INTEGER</p>
            </div>
          </div>
        </div>

        <CodeBlock code={declarationCode} language="pseudocode" />

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">💡 Remember the bounds formula:</p>
          <p className="text-amber-700">Number of elements = upper bound − lower bound + 1</p>
          <p className="text-amber-700">So ARRAY[1:10] has <strong>10 − 1 + 1 = 10</strong> elements</p>
          <p className="text-amber-700">And ARRAY[1:5] has <strong>5 − 1 + 1 = 5</strong> elements</p>
        </div>
      </div>

      {/* Accessing elements */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2️⃣ Accessing Individual Elements</h2>
        <p className="text-gray-600 mb-4">Use square brackets with the index number to read or write any element:</p>
        <CodeBlock code={accessCode} language="pseudocode" />

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-800 mb-2">✅ Valid access:</p>
            <ul className="text-green-700 text-sm space-y-1 font-mono">
              <li>Marks[1]  ← first element</li>
              <li>Marks[5]  ← fifth element</li>
              <li>Marks[i]  ← using a variable</li>
              <li>Marks[i+1] ← using expression</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-800 mb-2">❌ Common mistakes:</p>
            <ul className="text-red-700 text-sm space-y-1 font-mono">
              <li>Marks[0]  ← out of bounds!</li>
              <li>Marks[11] ← out of bounds!</li>
              <li>Marks      ← missing index!</li>
              <li>Mark[1]   ← wrong name!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Populate with FOR loop */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3️⃣ Populating with a FOR Loop</h2>
        <p className="text-gray-600 mb-2">The FOR loop is perfect for arrays — the counter becomes the index!</p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 mb-4">
          <p className="text-indigo-800 font-semibold">🔑 Key insight: When i=1, we fill position [1]. When i=2, we fill position [2]. The loop counter IS the array index!</p>
        </div>
        <CodeBlock code={populateCode} language="pseudocode" />
      </div>

      {/* Displaying arrays */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4️⃣ Displaying Array Contents</h2>
        <p className="text-gray-600 mb-4">Use another FOR loop to output — same pattern, different purpose:</p>
        <CodeBlock code={displayCode} language="pseudocode" />
      </div>

      {/* Variable size */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">5️⃣ Using a Variable for Size</h2>
        <p className="text-gray-600 mb-2">Declare the array with a maximum size, but only use N positions — very common in exams!</p>
        <CodeBlock code={variableSizeCode} language="pseudocode" />
      </div>

      {/* Visualisation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Visualising an Array</h2>
        <p className="text-gray-600 mb-4">After: <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">DECLARE Marks : ARRAY[1:6] OF INTEGER</code> and filling with values:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="p-2 text-gray-500 text-sm">Index</th>
                {[1,2,3,4,5,6].map(i => (
                  <th key={i} className="p-2">
                    <span className="bg-indigo-100 text-indigo-700 font-mono font-bold px-3 py-1 rounded-lg text-sm">
                      [{i}]
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-gray-500 text-sm font-semibold">Marks</td>
                {[72, 85, 61, 90, 78, 55].map((mark, i) => (
                  <td key={i} className="p-2">
                    <span className="bg-white border-2 border-indigo-300 font-bold text-indigo-800 px-3 py-2 rounded-lg text-lg block">
                      {mark}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3 text-center">Marks[1] = 72, Marks[2] = 85, Marks[3] = 61 ... Marks[6] = 55</p>
      </div>

      {/* Exam tips */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-5">
        <p className="font-bold text-amber-800 text-lg mb-3">⚡ Quick Exam Rules</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { rule: "Always DECLARE with bounds AND type", mark: "1 mark in exam" },
            { rule: "1-indexed unless told otherwise", mark: "Critical!" },
            { rule: "Declare loop counter i : INTEGER", mark: "1 mark in exam" },
            { rule: "Loop goes FROM 1 TO N (not 0 to N-1)", mark: "Critical!" },
            { rule: "Related data = parallel arrays (same index)", mark: "Key concept" },
            { rule: "Array size is FIXED after declaration", mark: "Must know" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-amber-200 flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span>
              <div>
                <p className="text-gray-800 font-semibold text-sm">{item.rule}</p>
                <p className="text-amber-600 text-xs">{item.mark}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
