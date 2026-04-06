import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D13Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(c => ({ ...c, [i]: !c[i] }));
  const checklist = [
    "I can explain LIFO in my own words",
    "I know TopPointer starts at 0 (empty)",
    "I know TopPointer = MAXSIZE means full (Overflow)",
    "I can write the Push PROCEDURE from memory",
    "I can write the Pop FUNCTION from memory",
    "I can write the Peek FUNCTION from memory",
    "I know Push uses CALL, Pop and Peek don't",
    "I can trace Push/Pop operations in a table",
    "I can explain Stack Overflow vs Underflow",
    "I can describe how a stack reverses a string",
    "I know 3 real-world applications of stacks",
    "I know BYVAL is used in Push",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Stacks</h1>
      <p className="text-gray-500 mb-6">Complete reference for Day 13</p>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { term: 'LIFO', def: 'Last In First Out — defining rule of a stack' },
          { term: 'Overflow', def: 'Push when TopPointer = MAXSIZE (full)' },
          { term: 'Underflow', def: 'Pop when TopPointer = 0 (empty)' },
          { term: 'Push', def: 'PROCEDURE — adds to top (use CALL)' },
          { term: 'Pop', def: 'FUNCTION — removes and returns top' },
          { term: 'Peek', def: 'FUNCTION — returns top WITHOUT removing' },
        ].map((item, i) => (
          <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="font-bold text-indigo-700 font-mono">{item.term}</p>
            <p className="text-gray-600 text-xs mt-1">{item.def}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-3">📝 Templates</h2>
      <CodeBlock language="pseudocode" code={`// SETUP
CONSTANT MAXSIZE = 10
DECLARE Stack : ARRAY[1:MAXSIZE] OF STRING
DECLARE TopPointer : INTEGER
TopPointer ← 0

// PUSH (PROCEDURE)
PROCEDURE Push(BYVAL Item : STRING)
   IF TopPointer = MAXSIZE
      THEN OUTPUT "Stack Overflow"
      ELSE
         TopPointer ← TopPointer + 1
         Stack[TopPointer] ← Item
   ENDIF
ENDPROCEDURE

// POP (FUNCTION)
FUNCTION Pop() RETURNS STRING
   DECLARE Item : STRING
   IF TopPointer = 0
      THEN
         OUTPUT "Stack Underflow"
         RETURN ""
      ELSE
         Item ← Stack[TopPointer]
         TopPointer ← TopPointer - 1
         RETURN Item
   ENDIF
ENDFUNCTION

// PEEK (FUNCTION)
FUNCTION Peek() RETURNS STRING
   IF TopPointer = 0
      THEN RETURN ""
      ELSE RETURN Stack[TopPointer]
   ENDIF
ENDFUNCTION`} />

      <h2 className="text-lg font-bold text-gray-800 mb-3 mt-6">✅ Confidence Checklist</h2>
      <div className="space-y-2">
        {checklist.map((item, i) => (
          <div key={i} onClick={() => toggle(i)} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${checked[i] ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${checked[i] ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
              {checked[i] && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className={`text-sm ${checked[i] ? 'text-green-700 line-through' : 'text-gray-700'}`}>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200 text-center">
        <p className="font-bold text-indigo-800">{Object.values(checked).filter(Boolean).length}/{checklist.length} completed</p>
      </div>
    </div>
  );
}
