import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py7Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const checklist = [
    "I can create a 2D list using list comprehension: [[0]*cols for _ in range(rows)]",
    "I know NOT to use [[0]*cols]*rows (shared reference trap)",
    "I know marks[row][col] — row first, column second",
    "I can input values into a 2D list using nested loops",
    "I can calculate row averages (per student)",
    "I can calculate column averages (per subject)",
    "I know to swap outer/inner loops for column processing",
    "I can find the max/min in each row",
    "I can find the max/min in each column",
    "I can find the global maximum in the entire 2D list",
    "I know len(grid) = rows, len(grid[0]) = cols",
    "I can convert pseudocode ARRAY[1:m, 1:n] to Python range(m) and range(n)",
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Day 7 Cheatsheet</h2>
      <p className="text-gray-500 mb-6">2D Lists — complete reference</p>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🏗️ Creating 2D Lists</h3>
        <CodeBlock code={`# Correct way — list comprehension
grid = [[0] * cols for _ in range(rows)]

# With actual values
matrix = [[1,2,3],[4,5,6],[7,8,9]]

# Input from user
marks = [[0]*subjects for _ in range(students)]
for row in range(students):
    for col in range(subjects):
        marks[row][col] = int(input(f"Mark: "))`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔁 Processing Patterns</h3>
        <CodeBlock code={`# Row average (per student)
for row in range(rows):
    total = 0
    for col in range(cols):
        total += grid[row][col]
    avg = total / cols

# Column average (per subject)
for col in range(cols):
    total = 0
    for row in range(rows):
        total += grid[row][col]
    avg = total / rows

# Find max in each row
for row in range(rows):
    best = grid[row][0]
    for col in range(1, cols):
        if grid[row][col] > best:
            best = grid[row][col]

# Find global max
maximum = grid[0][0]
for row in range(rows):
    for col in range(cols):
        if grid[row][col] > maximum:
            maximum = grid[row][col]`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Common Mistakes</h3>
        <div className="space-y-3">
          {[
            { wrong: '[[0]*4]*3', right: '[[0]*4 for _ in range(3)]', why: 'Shared reference vs independent rows' },
            { wrong: 'grid[col][row]', right: 'grid[row][col]', why: 'Row always comes first!' },
            { wrong: 'for col in range(4): for row in range(3)', right: 'for row in range(3): for col in range(4)', why: 'Row outer, col inner for row processing' },
            { wrong: 'max = 0', right: 'max = grid[0][0]', why: 'Values might all be negative' },
            { wrong: 'len(grid[0]) for rows', right: 'len(grid) for rows', why: 'len(grid)=rows, len(grid[0])=cols' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="bg-red-50 p-2 rounded font-mono text-xs text-red-700">❌ {item.wrong}</div>
              <div className="bg-green-50 p-2 rounded font-mono text-xs text-green-700">✅ {item.right}</div>
              <div className="col-span-2 text-xs text-gray-600">💡 {item.why}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔄 Pseudocode vs Python</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-50"><th className="border border-gray-200 px-3 py-2">Pseudocode</th><th className="border border-gray-200 px-3 py-2">Python</th></tr></thead>
            <tbody>
              {[
                ['ARRAY[1:3, 1:4] OF INTEGER', '[[0]*4 for _ in range(3)]'],
                ['Marks[2, 3]', 'marks[1][2]'],
                ['FOR Row ← 1 TO 3', 'for row in range(3):'],
                ['FOR Col ← 1 TO 4', '    for col in range(4):'],
                ['OUTPUT Marks[Row, Col]', '    print(marks[row][col])'],
              ].map(([ps, py], i) => (
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-indigo-700 text-xs">{ps}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-emerald-700 text-xs">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Confidence Checklist</h3>
        <p className="text-gray-500 text-sm mb-4">{checked.size}/{checklist.length} completed</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 bg-teal-500 rounded-full transition-all" style={{ width: `${(checked.size/checklist.length)*100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors ${checked.has(i) ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <span className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${checked.has(i) ? 'bg-teal-500 border-teal-500 text-white' : 'border-gray-300'}`}>
                {checked.has(i) && '✓'}
              </span>
              <span className={`text-sm ${checked.has(i) ? 'text-teal-800 line-through' : 'text-gray-700'}`}>{item}</span>
            </button>
          ))}
        </div>
        {checked.size === checklist.length && (
          <div className="mt-4 p-4 bg-teal-50 border border-teal-200 rounded-xl text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-teal-800">Day 7 Complete! You know 2D Lists!</p>
          </div>
        )}
      </div>
    </div>
  );
}
