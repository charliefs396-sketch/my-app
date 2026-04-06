import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D15Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const items = ['I can define a Node TYPE with Data and Pointer fields','I know StartPointer=0 means empty, FreePointer=0 means full','I can write the initialisation code (FOR loop for free list)','I can trace InsertAtStart step by step','I can write DisplayAll using WHILE Current <> 0','I know WHY linked list is better than array for insertion/deletion','I can draw the array showing Data and Pointer columns','I know NULL = 0 in Cambridge pseudocode'];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Day 15 Cheatsheet</h1>
      <p className="text-gray-500 mb-6">Everything you need to know — one page</p>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">🏗️ Full Structure Template</h2>
        <CodeBlock code={`TYPE Node
   DECLARE Data : STRING
   DECLARE Pointer : INTEGER
ENDTYPE

DECLARE List : ARRAY[1:10] OF Node
DECLARE StartPointer : INTEGER
DECLARE FreePointer : INTEGER

// Initialise
StartPointer ← 0
FreePointer ← 1
FOR i ← 1 TO 9
   List[i].Pointer ← i + 1
NEXT i
List[10].Pointer ← 0`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">➕ InsertAtStart Template</h2>
        <CodeBlock code={`PROCEDURE InsertAtStart(BYVAL NewData : STRING)
   DECLARE NewNode : INTEGER
   IF FreePointer = 0
      THEN
         OUTPUT "List full"
      ELSE
         NewNode ← FreePointer
         FreePointer ← List[FreePointer].Pointer
         List[NewNode].Data ← NewData
         List[NewNode].Pointer ← StartPointer
         StartPointer ← NewNode
   ENDIF
ENDPROCEDURE`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">🔍 Traversal Template</h2>
        <CodeBlock code={`PROCEDURE DisplayAll()
   DECLARE Current : INTEGER
   Current ← StartPointer
   WHILE Current <> 0
      OUTPUT List[Current].Data
      Current ← List[Current].Pointer
   ENDWHILE
ENDPROCEDURE`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">✅ Confidence Checklist</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${checked[i] ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
              <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked(p => ({ ...p, [i]: !p[i] }))} className="w-4 h-4 accent-green-500" />
              <span className={`text-sm ${checked[i] ? 'text-green-800 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-3 text-sm font-semibold text-gray-600">
          {Object.values(checked).filter(Boolean).length}/{items.length} completed
        </div>
      </div>
    </div>
  );
}
