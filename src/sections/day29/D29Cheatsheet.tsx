import { useState } from 'react';

export default function D29Cheatsheet() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setChecked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Master Cheatsheet</h2>
      <p className="text-gray-500 mb-6">Every key fact from all 28 days on one page!</p>

      {/* Quick Reference Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          { title: '📦 Variables', color: 'border-indigo-200 bg-indigo-50', facts: ['DECLARE Name : STRING', 'Assignment uses ←', 'CONSTANT PI = 3.14', 'Types: INTEGER REAL CHAR STRING BOOLEAN'] },
          { title: '➕ Operators', color: 'border-purple-200 bg-purple-50', facts: ['DIV = integer division', 'MOD = remainder', '& = string concatenation', 'STR_TO_NUM() NUM_TO_STR()'] },
          { title: '🔀 Selection', color: 'border-pink-200 bg-pink-50', facts: ['IF...THEN...ELSE...ENDIF', 'No ELSE IF → use nested IF', 'CASE OF...OTHERWISE...ENDCASE', '= is comparison in IF'] },
          { title: '🔁 Loops', color: 'border-amber-200 bg-amber-50', facts: ['FOR i←1 TO n → NEXT i', 'FOR STEP -1 for countdown', 'WHILE condition → ENDWHILE', 'REPEAT → UNTIL condition'] },
          { title: '🔤 Strings', color: 'border-green-200 bg-green-50', facts: ['LENGTH(s), UCASE(s), LCASE(s)', 'MID(s, pos, len) — 1-indexed!', 'LEFT(s,n) RIGHT(s,n)', "ASC('A')=65, CHR(65)='A'"] },
          { title: '📊 Arrays', color: 'border-teal-200 bg-teal-50', facts: ['DECLARE A : ARRAY[1:10] OF INTEGER', 'Access: A[i] or Grid[Row,Col]', 'Max: start with A[1]', '2D needs nested FOR loops'] },
          { title: '🔍 Search & Sort', color: 'border-blue-200 bg-blue-50', facts: ['Linear: RETURN i or -1', 'Binary: MUST be sorted first!', 'Bubble: Temp swap, Swapped flag', 'Insertion: Key←Data[i], shift left'] },
          { title: '🔧 Functions', color: 'border-rose-200 bg-rose-50', facts: ['PROCEDURE: no return, use CALL', 'FUNCTION: returns value, no CALL', 'BYVAL: copy (original safe)', 'BYREF: original IS changed'] },
          { title: '📋 Records', color: 'border-red-200 bg-red-50', facts: ['TYPE...ENDTYPE to define', 'DECLARE Student : StudentRecord', 'Access with dot: Student.Name', 'Array of records: Students[1].Mark'] },
          { title: '📁 Files', color: 'border-orange-200 bg-orange-50', facts: ['FOR READ / WRITE / APPEND', 'WRITE overwrites existing file!', 'WHILE NOT EOF() to read all', 'Always CLOSEFILE when done'] },
          { title: '📚 ADTs', color: 'border-emerald-200 bg-emerald-50', facts: ['Stack: LIFO, Push/Pop, TopPointer', 'Queue: FIFO, Enqueue/Dequeue', 'Circular: (Rear MOD MAX) + 1', 'Linked: Node has Data+Pointer'] },
          { title: '🔄 Recursion', color: 'border-violet-200 bg-violet-50', facts: ['Must have base case!', 'Must progress toward base case', 'RETURN N * Factorial(N-1)', 'Stack overflow if no base case'] },
        ].map((section) => (
          <div key={section.title} className={`border ${section.color} rounded-xl p-4`}>
            <p className="font-bold text-gray-800 mb-2 text-sm">{section.title}</p>
            <ul className="space-y-1">
              {section.facts.map((fact) => (
                <li key={fact} className="text-xs text-gray-700 flex items-start gap-1">
                  <span className="text-gray-400 mt-0.5">•</span>{fact}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Confidence Checklist */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold text-gray-800 mb-4">✅ Final Confidence Checklist ({checked.size}/24)</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'I can write correct DECLARE and CONSTANT statements',
            'I know when to use DIV vs / and MOD vs %',
            'I can write nested IF without using ELSE IF',
            'I can write FOR, WHILE, and REPEAT loops correctly',
            'I can use MID, LENGTH, ASC, CHR correctly',
            'I can declare and use 1D and 2D arrays (1-indexed)',
            'I can write Linear Search as a FUNCTION',
            'I can trace Bubble Sort and write the Swapped flag',
            'I can write Insertion Sort and trace it pass by pass',
            'I can write Binary Search and create trace tables',
            'I know the difference between BYVAL and BYREF',
            'I can define a TYPE with fields and use dot notation',
            'I can write OPENFILE, READFILE, WRITEFILE, CLOSEFILE',
            'I can Push, Pop, Enqueue, Dequeue with correct pointers',
            'I can traverse a linked list using StartPointer',
            'I can create a trace table for loops with IF inside',
            'I can create an identifier table in Cambridge format',
            'I can do stepwise refinement (Level 1, 2, 3)',
            'I know the 3 error types (Syntax/Logic/Runtime)',
            'I know Normal, Boundary, and Abnormal test data',
            'I know Waterfall, Iterative, RAD and their pros/cons',
            'I know Corrective, Adaptive, Perfective maintenance',
            'I can draw/describe a state-transition diagram',
            'I can write and trace a recursive FUNCTION',
          ].map((item) => (
            <label key={item} className="flex items-start gap-2 cursor-pointer group">
              <input type="checkbox" checked={checked.has(item)} onChange={() => toggle(item)} className="mt-0.5 w-4 h-4 accent-green-500 flex-shrink-0" />
              <span className={`text-sm ${checked.has(item) ? 'line-through text-gray-400' : 'text-gray-700'} group-hover:text-gray-900`}>{item}</span>
            </label>
          ))}
        </div>
        {checked.size === 24 && (
          <div className="mt-4 p-4 bg-green-50 border border-green-300 rounded-xl text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-green-800">You've ticked everything — you're READY for the exam!</p>
          </div>
        )}
      </div>
    </div>
  );
}
