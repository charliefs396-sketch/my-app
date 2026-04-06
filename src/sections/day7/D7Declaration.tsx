import CodeBlock from '../../components/CodeBlock';

export default function D7Declaration() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        📦 Declaring & Accessing 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">How to create, declare, and read/write cells in a 2D array</p>

      {/* Declaration Syntax */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔤 Declaration Syntax</h2>
        <CodeBlock language="pseudocode" code={`DECLARE ArrayName : ARRAY[RowStart:RowEnd, ColStart:ColEnd] OF DataType`} />
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          {[
            { part: 'DECLARE', color: 'bg-cyan-100 text-cyan-800', desc: 'Keyword — must always start with this' },
            { part: 'ArrayName', color: 'bg-purple-100 text-purple-800', desc: 'Your name for the array (e.g. Marks, Grid)' },
            { part: '[1:5, 1:3]', color: 'bg-orange-100 text-orange-800', desc: 'Row bounds first, then column bounds (comma separated)' },
            { part: 'OF INTEGER', color: 'bg-pink-100 text-pink-800', desc: 'Data type of every element in the array' },
          ].map(item => (
            <div key={item.part} className={`${item.color} rounded-xl p-3`}>
              <p className="font-mono font-bold text-sm">{item.part}</p>
              <p className="text-xs mt-1 opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real Examples */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Real Declaration Examples</h2>
        <CodeBlock language="pseudocode" code={`// 5 students, 3 subjects — stores integer marks
DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER

// 4x4 grid of real numbers
DECLARE Grid : ARRAY[1:4, 1:4] OF REAL

// 10 rows, 5 columns of strings
DECLARE Schedule : ARRAY[1:10, 1:5] OF STRING

// Separate 1D array for student names (common pattern!)
DECLARE Names : ARRAY[1:5] OF STRING

// Loop control variables (always declare these too!)
DECLARE Row : INTEGER
DECLARE Col : INTEGER`} />

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-800 mb-2">💡 How many elements?</p>
          <p className="text-blue-700 text-sm">
            <strong>Formula:</strong> Total elements = (RowEnd − RowStart + 1) × (ColEnd − ColStart + 1)
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Example: <span className="font-mono bg-blue-100 px-1 rounded">ARRAY[1:5, 1:3]</span> = (5−1+1) × (3−1+1) = <strong>5 × 3 = 15 elements</strong>
          </p>
        </div>
      </div>

      {/* Accessing Elements */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Accessing Individual Elements</h2>
        <p className="text-gray-600 mb-4">Use <span className="font-mono bg-gray-100 px-2 py-0.5 rounded font-bold">ArrayName[Row, Col]</span> — always Row first, then Col!</p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-orange-300 p-2 text-orange-800">Access</th>
                <th className="border border-orange-300 p-2 text-orange-800">Meaning</th>
                <th className="border border-orange-300 p-2 text-orange-800">Value (from our table)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Marks[1, 1]', 'Student 1, Subject 1', '85 (Ali, Maths)'],
                ['Marks[1, 2]', 'Student 1, Subject 2', '72 (Ali, Physics)'],
                ['Marks[2, 3]', 'Student 2, Subject 3', '95 (Sara, CS)'],
                ['Marks[5, 3]', 'Student 5, Subject 3', '75 (Tom, CS)'],
                ['Marks[3, 1]', 'Student 3, Subject 1', '65 (John, Maths)'],
              ].map(([access, meaning, value]) => (
                <tr key={access} className="border-t border-orange-100">
                  <td className="p-2 font-mono text-orange-700 font-bold">{access}</td>
                  <td className="p-2 text-gray-600">{meaning}</td>
                  <td className="p-2 text-green-700 font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock language="pseudocode" code={`// Reading a value
OUTPUT Marks[2, 3]          // Output Sara's CS mark = 95

// Writing a value  
Marks[1, 1] ← 90            // Change Ali's Maths mark to 90

// Using variables as indices (most common in loops!)
Row ← 3
Col ← 2
OUTPUT Marks[Row, Col]      // Output John's Physics mark = 70`} />
      </div>

      {/* Visual Grid Diagram */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Visual: How 2D Array is Stored</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse mx-auto">
            <thead>
              <tr>
                <th className="border-2 border-orange-400 bg-orange-200 p-3 text-orange-800 font-bold">Row\Col</th>
                <th className="border-2 border-orange-400 bg-orange-200 p-3 text-orange-800 font-bold">Col 1 (Maths)</th>
                <th className="border-2 border-orange-400 bg-orange-200 p-3 text-orange-800 font-bold">Col 2 (Physics)</th>
                <th className="border-2 border-orange-400 bg-orange-200 p-3 text-orange-800 font-bold">Col 3 (CS)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Row 1 (Ali)', '85', '72', '91'],
                ['Row 2 (Sara)', '78', '88', '95'],
                ['Row 3 (John)', '65', '70', '80'],
                ['Row 4 (Priya)', '92', '85', '88'],
                ['Row 5 (Tom)', '71', '69', '75'],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="border-2 border-orange-300 bg-orange-100 p-3 font-bold text-orange-800">{row[0]}</td>
                  {row.slice(1).map((val, j) => (
                    <td key={j} className="border border-orange-200 p-3 text-center font-mono font-bold text-gray-700 bg-white hover:bg-orange-50">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-500 text-sm mt-3">
          <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Marks[4, 2]</span> = Priya's Physics = <strong>85</strong>
        </p>
      </div>

      {/* Input a single value */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⌨️ Inputting Values</h2>
        <CodeBlock language="pseudocode" code={`// Input a single value into a specific cell
OUTPUT "Enter Ali's Maths mark: "
INPUT Marks[1, 1]

// Input a value using variable indices
OUTPUT "Enter student ", Row, " subject ", Col, " mark: "
INPUT Marks[Row, Col]

// Assignment
Marks[2, 3] ← 95            // Directly assign a value`} />
      </div>

      {/* Common Mistakes */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
        <h3 className="font-bold text-red-800 mb-3">❌ Common Mistakes to Avoid</h3>
        <div className="space-y-3">
          {[
            {
              wrong: 'DECLARE Marks : ARRAY[5, 3] OF INTEGER',
              right: 'DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER',
              reason: 'Must include the colon between start and end bounds!'
            },
            {
              wrong: 'OUTPUT Marks[Col, Row]',
              right: 'OUTPUT Marks[Row, Col]',
              reason: 'Row ALWAYS comes first, then Col!'
            },
            {
              wrong: 'DECLARE Marks : ARRAY[0:4, 0:2] OF INTEGER',
              right: 'DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER',
              reason: 'Cambridge pseudocode starts at 1, not 0!'
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-red-200">
              <div className="font-mono text-sm text-red-600 line-through mb-1">✗ {item.wrong}</div>
              <div className="font-mono text-sm text-green-600 mb-1">✓ {item.right}</div>
              <div className="text-xs text-gray-500">{item.reason}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
