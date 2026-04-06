import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D27Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const checklist = [
    'I know i starts at 2 (position 1 is already sorted)',
    'I know Key saves Data[i] BEFORE the WHILE loop',
    'I know j starts at i-1 (one position left of Key)',
    'I know the WHILE shifts elements RIGHT (j > 0 AND Data[j] > Key)',
    'I know Data[j+1] ← Key inserts at j+1 (not j)',
    'I know BYREF is required to sort the original array',
    'I can change > to < to sort in descending order',
    'I can trace all 5 passes of a 6-element array',
    'I can identify when WHILE exits because j=0 vs Data[j]<=Key',
    'I know best case is O(n) (already sorted data)',
    'I know worst case is O(n²) (reverse sorted data)',
    'I can sort parallel arrays using KeyName alongside Key',
    'I can compare Insertion Sort vs Bubble Sort for any dataset',
    'I know to use CALL InsertionSort() since it is a PROCEDURE',
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Day 27 Cheatsheet</h2>
      <p className="text-gray-500 mb-8">Everything you need on one page</p>

      {/* Template */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📝 Standard Template (Ascending)</h3>
        <CodeBlock code={`PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Key : INTEGER
   
   FOR i ← 2 TO Size
      Key ← Data[i]
      j ← i - 1
      WHILE j > 0 AND Data[j] > Key
         Data[j + 1] ← Data[j]
         j ← j - 1
      ENDWHILE
      Data[j + 1] ← Key
   NEXT i
ENDPROCEDURE`} language="pseudocode" />
      </div>

      {/* Descending template */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📝 Descending Template</h3>
        <CodeBlock code={`// ONE CHANGE ONLY: Data[j] > Key → Data[j] < Key
WHILE j > 0 AND Data[j] < Key    // ← changed < 
   Data[j + 1] ← Data[j]
   j ← j - 1
ENDWHILE`} language="pseudocode" />
      </div>

      {/* Parallel arrays template */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📝 Parallel Arrays Template</h3>
        <CodeBlock code={`PROCEDURE InsertionSortParallel(BYREF Marks : ARRAY, BYREF Names : ARRAY, Size : INTEGER)
   DECLARE i, j, Key : INTEGER
   DECLARE KeyName : STRING          // Extra variable
   FOR i ← 2 TO Size
      Key ← Marks[i]
      KeyName ← Names[i]            // Save both
      j ← i - 1
      WHILE j > 0 AND Marks[j] > Key
         Marks[j + 1] ← Marks[j]   // Shift both
         Names[j + 1] ← Names[j]
         j ← j - 1
      ENDWHILE
      Marks[j + 1] ← Key           // Insert both
      Names[j + 1] ← KeyName
   NEXT i
ENDPROCEDURE`} language="pseudocode" />
      </div>

      {/* Quick reference */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Quick Reference</h3>
          <div className="space-y-2 text-sm">
            {[
              ['i starts at', '2 (position 1 is sorted)'],
              ['Key', 'Data[i] — saved BEFORE shifting'],
              ['j starts at', 'i - 1 (left of Key)'],
              ['WHILE exits when', 'j=0 OR Data[j] <= Key'],
              ['Insert position', 'j + 1 (not j!)'],
              ['Descending change', 'Data[j] > Key → Data[j] < Key'],
              ['BYREF needed?', 'YES — sorts original'],
              ['Best case', 'O(n) — already sorted'],
              ['Worst case', 'O(n²) — reverse sorted'],
            ].map(([key, val], i) => (
              <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-100">
                <span className="font-semibold text-gray-600">{key}</span>
                <span className="font-mono text-fuchsia-600 text-xs font-bold">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Common Mistakes</h3>
          <div className="space-y-3">
            {[
              { wrong: 'FOR i ← 1 TO Size', right: 'FOR i ← 2 TO Size' },
              { wrong: 'Data[j] ← Key', right: 'Data[j + 1] ← Key' },
              { wrong: 'BYVAL Data', right: 'BYREF Data' },
              { wrong: 'Data[j] ← Data[j+1]', right: 'Data[j+1] ← Data[j]' },
              { wrong: 'j ← i', right: 'j ← i - 1' },
            ].map((item, i) => (
              <div key={i} className="text-xs">
                <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 mb-1">
                  <span className="text-red-500 font-bold mr-2">✗</span>
                  <code className="text-red-700">{item.wrong}</code>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <code className="text-green-700">{item.right}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trace table template */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Trace Table Template</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-fuchsia-50">
              <tr>
                {['i', 'Key', 'j', 'Data[j] > Key?', 'Action', 'Array State'].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-bold text-fuchsia-700 border-b border-fuchsia-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['-', '-', '-', '-', 'Initial state', '[values here]'],
                ['2', 'Data[2]', 'i-1', 'Yes/No', 'Shift or Insert', '[array here]'],
                ['3', 'Data[3]', 'i-1', 'Yes/No', 'Shift or Insert', '[array here]'],
                ['...', '...', '...', '...', '...', '...'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className="px-4 py-3 text-xs text-gray-600">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">✅ Confidence Checklist</h3>
          <span className="text-sm font-bold text-fuchsia-600">{checkedCount}/{checklist.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="h-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full transition-all" style={{ width: `${(checkedCount / checklist.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="w-5 h-5 rounded text-fuchsia-600 cursor-pointer" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        {checkedCount === checklist.length && (
          <div className="mt-4 bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-xl p-4 text-center">
            <p className="text-fuchsia-700 font-bold text-lg">🎉 Day 27 Complete! You're ready for Insertion Sort in the exam!</p>
          </div>
        )}
      </div>
    </div>
  );
}
