import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D9Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; });

  const checklist = [
    "I can write the full BubbleSort PROCEDURE from memory",
    "I know why BYREF is used for the array (to modify original)",
    "I can perform the 3-step swap using a Temp variable",
    "I understand why Size - i is used in the inner loop",
    "I can explain what the Swapped flag does and why it helps",
    "I can modify Bubble Sort for descending order (change > to <)",
    "I can sort parallel arrays (swap ALL arrays simultaneously)",
    "I can trace Bubble Sort step-by-step with a full trace table",
    "I know the worst-case number of passes is n-1",
    "I know best case is O(n) and worst case is O(n²)",
    "I use CALL BubbleSort(...) not just BubbleSort(...)",
    "I can identify the early exit condition (Swapped = FALSE after a pass)",
    "I can write the swap for different data types (STRING, REAL, etc.)",
    "I understand parallel arrays must stay aligned during sorting",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Bubble Sort</h1>
      <p className="text-gray-500 mb-8">Everything you need for the exam on one page!</p>

      {/* Template */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📄 Complete Template (Memorise This!)</h2>
        <CodeBlock language="pseudocode" code={`PROCEDURE BubbleSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Temp : INTEGER
   DECLARE Swapped : BOOLEAN
   
   FOR i ← 1 TO Size - 1
      Swapped ← FALSE
      FOR j ← 1 TO Size - i
         IF Data[j] > Data[j + 1]
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

// Call it:
CALL BubbleSort(MyArray, 10)`} />
      </div>

      {/* Variations */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Quick Variations</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-red-600 mb-2">⬇️ Descending Order:</p>
            <CodeBlock language="pseudocode" code={`// Change ONE line only:
IF Data[j] < Data[j + 1]  // < not >`} />
          </div>
          <div>
            <p className="font-semibold text-purple-600 mb-2">🔗 Parallel Arrays:</p>
            <CodeBlock language="pseudocode" code={`// After swapping Marks, also swap Names:
TempMark ← Marks[j]
Marks[j] ← Marks[j + 1]
Marks[j + 1] ← TempMark
TempName ← Names[j]
Names[j] ← Names[j + 1]
Names[j + 1] ← TempName`} />
          </div>
        </div>
      </div>

      {/* Key facts table */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Key Facts Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 px-4 py-2 text-left">Property</th>
                <th className="border border-indigo-200 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Type', 'PROCEDURE (not FUNCTION)'],
                ['Parameter passing', 'BYREF for array, BYVAL for size'],
                ['Swap method', '3-step using Temp variable'],
                ['Outer loop', 'FOR i ← 1 TO Size - 1'],
                ['Inner loop', 'FOR j ← 1 TO Size - i'],
                ['Ascending comparison', 'IF Data[j] > Data[j+1]'],
                ['Descending comparison', 'IF Data[j] < Data[j+1]'],
                ['Optimisation', 'Swapped flag — exit early if no swaps'],
                ['Best case', 'O(n) — already sorted'],
                ['Worst case', 'O(n²) — reverse sorted'],
                ['Space complexity', 'O(1) — in-place (only Temp needed)'],
                ['Max passes', 'n - 1'],
                ['Calling syntax', 'CALL BubbleSort(Array, Size)'],
              ].map(([prop, val], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">{prop}</td>
                  <td className="border border-gray-200 px-4 py-2 text-purple-700 font-mono text-xs">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Common Exam Mistakes</h2>
        <div className="space-y-3">
          {[
            ['Using BYVAL instead of BYREF', 'Array changes won\'t persist — sort is lost!', 'PROCEDURE BubbleSort(BYREF Data : ARRAY, ...)'],
            ['Forgetting Temp in swap', '2-step swap loses data', 'Always: Temp ← A, A ← B, B ← Temp'],
            ['Using Size-1 in inner loop', 'Re-compares already-sorted elements', 'Use Size - i for efficiency'],
            ['Forgetting CALL keyword', 'Syntax error in pseudocode', 'CALL BubbleSort(Data, 10)'],
            ['Not swapping parallel arrays', 'Data misalignment — wrong student gets wrong mark', 'Swap Names whenever Marks are swapped'],
            ['Swapped flag not reset', 'Algorithm never exits early', 'Set Swapped ← FALSE at START of each outer loop pass'],
          ].map(([mistake, consequence, fix], i) => (
            <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-3">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold text-sm mt-0.5">❌</span>
                <div>
                  <p className="font-bold text-red-700 text-sm">{mistake}</p>
                  <p className="text-red-600 text-xs mt-0.5">Consequence: {consequence}</p>
                  <p className="text-green-700 text-xs mt-1 font-semibold">Fix: {fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trace Table Template */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Trace Table Template</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse font-mono">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-600 px-3 py-2">i</th>
                <th className="border border-gray-600 px-3 py-2">j</th>
                <th className="border border-gray-600 px-3 py-2">[1]</th>
                <th className="border border-gray-600 px-3 py-2">[2]</th>
                <th className="border border-gray-600 px-3 py-2">[3]</th>
                <th className="border border-gray-600 px-3 py-2">...</th>
                <th className="border border-gray-600 px-3 py-2">Swapped</th>
                <th className="border border-gray-600 px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 text-center">—</td>
                <td className="border border-gray-200 px-3 py-2 text-center">—</td>
                <td className="border border-gray-200 px-3 py-2 text-center">?</td>
                <td className="border border-gray-200 px-3 py-2 text-center">?</td>
                <td className="border border-gray-200 px-3 py-2 text-center">?</td>
                <td className="border border-gray-200 px-3 py-2 text-center">...</td>
                <td className="border border-gray-200 px-3 py-2 text-center">FALSE</td>
                <td className="border border-gray-200 px-3 py-2">Initial values</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-3 py-2 text-center">1</td>
                <td className="border border-gray-200 px-3 py-2 text-center">1</td>
                <td className="border border-gray-200 px-3 py-2 text-center text-green-600 font-bold">B</td>
                <td className="border border-gray-200 px-3 py-2 text-center text-green-600 font-bold">A</td>
                <td className="border border-gray-200 px-3 py-2 text-center">?</td>
                <td className="border border-gray-200 px-3 py-2 text-center">...</td>
                <td className="border border-gray-200 px-3 py-2 text-center text-green-600">TRUE</td>
                <td className="border border-gray-200 px-3 py-2">A&gt;B → SWAP</td>
              </tr>
              <tr className="bg-gray-50 text-gray-400 italic">
                <td className="border border-gray-200 px-3 py-2 text-center">1</td>
                <td className="border border-gray-200 px-3 py-2 text-center">2</td>
                <td className="border border-gray-200 px-3 py-2 text-center">B</td>
                <td className="border border-gray-200 px-3 py-2 text-center">A</td>
                <td className="border border-gray-200 px-3 py-2 text-center">?</td>
                <td className="border border-gray-200 px-3 py-2 text-center">...</td>
                <td className="border border-gray-200 px-3 py-2 text-center">TRUE</td>
                <td className="border border-gray-200 px-3 py-2">A&lt;? → no swap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Confidence Checklist */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✅ Confidence Checklist</h2>
        <p className="text-gray-500 text-sm mb-4">Tick each item as you feel confident with it:</p>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                checked.has(i)
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
              }`}
            >
              <span className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                checked.has(i) ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
              }`}>
                {checked.has(i) ? '✓' : ''}
              </span>
              <span className="text-sm">{item}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 bg-indigo-50 rounded-xl p-4 text-center">
          <p className="text-indigo-700 font-bold">{checked.size}/{checklist.length} topics mastered!</p>
          <div className="w-full h-3 bg-indigo-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: `${(checked.size / checklist.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
