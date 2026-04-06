import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D14Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(c => ({ ...c, [i]: !c[i] }));
  const checklist = [
    "I can explain FIFO in my own words",
    "I know 3 real-world uses of queues",
    "I know the difference between Stack (LIFO) and Queue (FIFO)",
    "I can write the Enqueue PROCEDURE from memory",
    "I can write the Dequeue FUNCTION from memory",
    "I know the MOD formula: Rear ← (Rear MOD MAXSIZE) + 1",
    "I know the MOD formula: Front ← (Front MOD MAXSIZE) + 1",
    "I use Size to check empty/full (not Front and Rear)",
    "I can explain why circular queue is better than linear",
    "I can trace Enqueue/Dequeue operations in a table",
    "I know Enqueue uses CALL, Dequeue doesn't",
    "I understand what happens when Rear wraps around",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Queues</h1>
      <p className="text-gray-500 mb-6">Complete reference for Day 14</p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { term: 'FIFO', def: 'First In First Out — defining rule' },
          { term: 'Enqueue', def: 'PROCEDURE — adds to Rear (use CALL)' },
          { term: 'Dequeue', def: 'FUNCTION — removes from Front' },
          { term: 'Front', def: 'Index of next item to be removed' },
          { term: 'Rear', def: 'Index where last item was added' },
          { term: 'MOD formula', def: '(Pointer MOD MAXSIZE) + 1' },
        ].map((item, i) => (
          <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-700 font-mono">{item.term}</p>
            <p className="text-gray-600 text-xs mt-1">{item.def}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-3">📝 Complete Template</h2>
      <CodeBlock language="pseudocode" code={`CONSTANT MAXSIZE = 5
DECLARE Queue : ARRAY[1:MAXSIZE] OF STRING
DECLARE Front, Rear, Size : INTEGER
Front ← 1  |  Rear ← 0  |  Size ← 0

// ENQUEUE (PROCEDURE)
PROCEDURE Enqueue(BYVAL Item : STRING)
   IF Size = MAXSIZE
      THEN OUTPUT "Queue Full"
      ELSE
         Rear ← (Rear MOD MAXSIZE) + 1
         Queue[Rear] ← Item
         Size ← Size + 1
   ENDIF
ENDPROCEDURE

// DEQUEUE (FUNCTION)
FUNCTION Dequeue() RETURNS STRING
   DECLARE Item : STRING
   IF Size = 0
      THEN
         OUTPUT "Queue Empty"
         RETURN ""
      ELSE
         Item ← Queue[Front]
         Front ← (Front MOD MAXSIZE) + 1
         Size ← Size - 1
         RETURN Item
   ENDIF
ENDFUNCTION`} />

      <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-3">⚖️ Stack vs Queue Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-100"><th className="p-2 text-left">Feature</th><th className="p-2 text-indigo-700">Stack</th><th className="p-2 text-emerald-700">Queue</th></tr></thead>
            <tbody>
              {[
                { f: 'Rule', s: 'LIFO', q: 'FIFO' },
                { f: 'Add', s: 'Push (to TOP)', q: 'Enqueue (to REAR)' },
                { f: 'Remove', s: 'Pop (from TOP)', q: 'Dequeue (from FRONT)' },
                { f: 'Pointers', s: 'TopPointer', q: 'Front, Rear, Size' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 font-bold">{row.f}</td>
                  <td className="p-2 text-indigo-700">{row.s}</td>
                  <td className="p-2 text-emerald-700">{row.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Confidence Checklist</h2>
      <div className="space-y-2">
        {checklist.map((item, i) => (
          <div key={i} onClick={() => toggle(i)} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${checked[i] ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${checked[i] ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
              {checked[i] && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className={`text-sm ${checked[i] ? 'text-green-700 line-through' : 'text-gray-700'}`}>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
        <p className="font-bold text-emerald-800">{Object.values(checked).filter(Boolean).length}/{checklist.length} completed</p>
      </div>
    </div>
  );
}
