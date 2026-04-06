import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D7Cheatsheet() {
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  const checkItems = [
    'I can declare a 2D array with correct row and column bounds',
    'I always write Row before Col in both declaration and access',
    'I know that Cambridge arrays start at 1, not 0',
    'I can input a 2D array using nested FOR loops',
    'I know NEXT Col closes the inner loop and NEXT Row closes the outer',
    'I reset Total INSIDE the outer loop (not before it)',
    'I can calculate average per student (Row = outer loop)',
    'I can calculate average per subject (Col = outer loop)',
    'I can find the largest value in each row',
    'I can find the highest overall student using MaxRow',
    'I can initialise Max with Grid[Row, 1] for row-based max finding',
    'I declare ALL variables: Row, Col, Total, Max as INTEGER',
    'I understand the difference between 1D and 2D arrays',
    'I can explain WHY we need nested loops for 2D arrays',
  ];

  const toggle = (i: number) => setChecklist(prev => ({ ...prev, [i]: !prev[i] }));
  const completed = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">Everything you need for Day 7, on one page</p>

      {/* Declaration */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📦 Declaration Template</h2>
        <CodeBlock language="pseudocode" code={`DECLARE ArrayName : ARRAY[RowStart:RowEnd, ColStart:ColEnd] OF DataType
DECLARE Names : ARRAY[1:NumRows] OF STRING   // 1D for names
DECLARE Row : INTEGER
DECLARE Col : INTEGER`} />
      </div>

      {/* Input */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">⌨️ Input All Values</h2>
        <CodeBlock language="pseudocode" code={`FOR Row ← 1 TO NumRows
   FOR Col ← 1 TO NumCols
      INPUT Array[Row, Col]
   NEXT Col
NEXT Row`} />
      </div>

      {/* Row average */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📊 Average Per Row (Student)</h2>
        <CodeBlock language="pseudocode" code={`FOR Row ← 1 TO NumRows
   Total ← 0                    // Reset for each row!
   FOR Col ← 1 TO NumCols
      Total ← Total + Array[Row, Col]
   NEXT Col
   OUTPUT Total / NumCols
NEXT Row`} />
      </div>

      {/* Column average */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📈 Average Per Column (Subject)</h2>
        <CodeBlock language="pseudocode" code={`FOR Col ← 1 TO NumCols
   Total ← 0                    // Reset for each column!
   FOR Row ← 1 TO NumRows
      Total ← Total + Array[Row, Col]
   NEXT Row
   OUTPUT Total / NumRows
NEXT Col`} />
      </div>

      {/* Max per row */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">🏆 Max Value Per Row</h2>
        <CodeBlock language="pseudocode" code={`FOR Row ← 1 TO NumRows
   Max ← Array[Row, 1]          // First element of this row
   FOR Col ← 2 TO NumCols
      IF Array[Row, Col] > Max
         THEN
            Max ← Array[Row, Col]
      ENDIF
   NEXT Col
   OUTPUT "Row ", Row, " max: ", Max
NEXT Row`} />
      </div>

      {/* Highest overall */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">🥇 Find Highest Overall Row</h2>
        <CodeBlock language="pseudocode" code={`MaxTotal ← 0
MaxRow ← 1
FOR Row ← 1 TO NumRows
   RowTotal ← 0
   FOR Col ← 1 TO NumCols
      RowTotal ← RowTotal + Array[Row, Col]
   NEXT Col
   IF RowTotal > MaxTotal
      THEN
         MaxTotal ← RowTotal
         MaxRow ← Row
   ENDIF
NEXT Row
OUTPUT Names[MaxRow], " highest with ", MaxTotal`} />
      </div>

      {/* Quick reference table */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📊 Quick Reference Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-100">
                <th className="text-left p-3 font-bold text-orange-800">Task</th>
                <th className="text-left p-3 font-bold text-orange-800">Outer Loop</th>
                <th className="text-left p-3 font-bold text-orange-800">Inner Loop</th>
                <th className="text-left p-3 font-bold text-orange-800">Reset Where?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Input all values', 'Row', 'Col', 'N/A'],
                ['Display all values', 'Row', 'Col', 'N/A'],
                ['Average per student', 'Row', 'Col', 'Inside outer (Row) loop'],
                ['Average per subject', 'Col', 'Row', 'Inside outer (Col) loop'],
                ['Max per row', 'Row', 'Col', 'Max ← Array[Row,1] in outer'],
                ['Max per col', 'Col', 'Row', 'Max ← Array[1,Col] in outer'],
                ['Highest overall student', 'Row', 'Col', 'MaxTotal before outer loop'],
              ].map(([task, outer, inner, reset]) => (
                <tr key={task} className="border-t border-orange-100">
                  <td className="p-3 font-semibold text-gray-700">{task}</td>
                  <td className="p-3 text-orange-600 font-mono">{outer}</td>
                  <td className="p-3 text-blue-600 font-mono">{inner}</td>
                  <td className="p-3 text-green-700 text-xs">{reset}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">❌ Common Mistakes</h2>
        <div className="space-y-3">
          {[
            ['Swap Row/Col', 'DECLARE ARRAY[1:3, 1:5] when you mean 5 rows, 3 cols', 'DECLARE ARRAY[1:5, 1:3]'],
            ['Wrong NEXT', 'NEXT Row inside inner loop', 'NEXT Col inside inner, NEXT Row outside'],
            ['Reset outside loop', 'Total ← 0 before outer FOR', 'Total ← 0 inside outer FOR, before inner FOR'],
            ['Starting at 0', 'ARRAY[0:4, 0:2]', 'ARRAY[1:5, 1:3] (Cambridge starts at 1)'],
            ['Forgetting DECLARE', 'Using Row and Col without declaring', 'DECLARE Row : INTEGER and DECLARE Col : INTEGER'],
          ].map(([mistake, wrong, right]) => (
            <div key={mistake as string} className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="font-bold text-gray-700 text-sm mb-1">❌ {mistake}</p>
              <p className="text-red-600 text-xs font-mono line-through mb-1">✗ {wrong}</p>
              <p className="text-green-600 text-xs font-mono">✓ {right}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">✅ Confidence Checklist</h2>
          <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
            {completed}/{checkItems.length} done
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500"
            style={{ width: `${(completed / checkItems.length) * 100}%` }}
          />
        </div>
        <div className="space-y-2">
          {checkItems.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                checklist[i] ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200 hover:border-orange-300'
              }`}
            >
              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                checklist[i] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
              }`}>
                {checklist[i] && '✓'}
              </span>
              <span className={`text-sm font-medium ${checklist[i] ? 'text-green-800 line-through' : 'text-gray-700'}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
        {completed === checkItems.length && (
          <div className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold">Day 7 Complete! You've mastered 2D Arrays!</p>
            <p className="text-sm text-white/80 mt-1">Ready for Day 8 — Procedures and Functions!</p>
          </div>
        )}
      </div>
    </div>
  );
}
