import CodeBlock from '../../components/CodeBlock';

export default function D13StackImpl() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔧 Stack Implementation</h1>
      <p className="text-gray-500 mb-6">How to build a stack using arrays and a TopPointer</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-blue-800 text-lg mb-2">🏗️ Implementation Strategy</h2>
        <p className="text-blue-700 text-sm">Cambridge A Level uses an <strong>array + TopPointer</strong> approach. The array holds the data; TopPointer is an integer that tells us where the top of the stack currently is.</p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="font-bold text-blue-700 text-sm">TopPointer = 0</p>
            <p className="text-gray-600 text-xs">Stack is EMPTY</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="font-bold text-blue-700 text-sm">TopPointer = MAXSIZE</p>
            <p className="text-gray-600 text-xs">Stack is FULL (Overflow!)</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📦 Declaration & Initialisation</h2>
      <CodeBlock language="pseudocode" code={`CONSTANT MAXSIZE = 10
DECLARE Stack : ARRAY[1:MAXSIZE] OF STRING
DECLARE TopPointer : INTEGER

// Initialise - MUST set TopPointer to 0
TopPointer ← 0        // Stack is empty`} />

      <div className="grid grid-cols-3 gap-4 my-6">
        {[
          { label: 'MAXSIZE', desc: 'Maximum items the stack can hold', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
          { label: 'Stack Array', desc: 'Holds the actual data items', color: 'bg-purple-50 border-purple-200 text-purple-700' },
          { label: 'TopPointer', desc: 'Points to current top position', color: 'bg-pink-50 border-pink-200 text-pink-700' },
        ].map((item, i) => (
          <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
            <p className="font-bold font-mono text-sm">{item.label}</p>
            <p className="text-xs mt-1 opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📤 Push Procedure</h2>
      <p className="text-gray-600 text-sm mb-3">Push adds an item to the TOP of the stack. Always check for overflow first!</p>
      <CodeBlock language="pseudocode" code={`PROCEDURE Push(BYVAL Item : STRING)
   IF TopPointer = MAXSIZE
      THEN
         OUTPUT "Stack Overflow - Stack is full!"
      ELSE
         TopPointer ← TopPointer + 1      // Move pointer up
         Stack[TopPointer] ← Item          // Store item at new top
   ENDIF
ENDPROCEDURE

// HOW TO CALL:
CALL Push("Ali")
CALL Push("Sara")
CALL Push("Tom")`} />

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
        <h3 className="font-bold text-green-800 mb-3">📋 Push Step-by-Step Trace</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 text-left text-green-800">Operation</th>
                <th className="p-2 text-left text-green-800">TopPointer Before</th>
                <th className="p-2 text-left text-green-800">Action</th>
                <th className="p-2 text-left text-green-800">TopPointer After</th>
                <th className="p-2 text-left text-green-800">Stack[TopPointer]</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: 'Start', before: '0', action: 'Stack empty', after: '0', val: '-' },
                { op: 'Push("A")', before: '0', action: 'TopPointer ← 1, Stack[1] ← "A"', after: '1', val: '"A"' },
                { op: 'Push("B")', before: '1', action: 'TopPointer ← 2, Stack[2] ← "B"', after: '2', val: '"B"' },
                { op: 'Push("C")', before: '2', action: 'TopPointer ← 3, Stack[3] ← "C"', after: '3', val: '"C"' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  <td className="p-2 font-mono font-bold text-green-700">{row.op}</td>
                  <td className="p-2 text-center font-bold">{row.before}</td>
                  <td className="p-2 text-gray-600 text-xs">{row.action}</td>
                  <td className="p-2 text-center font-bold text-indigo-700">{row.after}</td>
                  <td className="p-2 text-center font-bold text-purple-700">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📥 Pop Function</h2>
      <p className="text-gray-600 text-sm mb-3">Pop removes AND returns the top item. Always check for underflow first!</p>
      <CodeBlock language="pseudocode" code={`FUNCTION Pop() RETURNS STRING
   DECLARE Item : STRING
   IF TopPointer = 0
      THEN
         OUTPUT "Stack Underflow - Stack is empty!"
         RETURN ""                          // Return empty string as error
      ELSE
         Item ← Stack[TopPointer]           // Save the top item
         TopPointer ← TopPointer - 1        // Move pointer down
         RETURN Item                        // Return the saved item
   ENDIF
ENDFUNCTION

// HOW TO CALL:
DECLARE Result : STRING
Result ← Pop()           // No CALL keyword - it's a FUNCTION!
OUTPUT "Popped: ", Result`} />

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6">
        <h3 className="font-bold text-red-800 mb-3">📋 Pop Step-by-Step Trace</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="p-2 text-left text-red-800">Operation</th>
                <th className="p-2 text-left text-red-800">TopPointer Before</th>
                <th className="p-2 text-left text-red-800">Item Returned</th>
                <th className="p-2 text-left text-red-800">TopPointer After</th>
              </tr>
            </thead>
            <tbody>
              {[
                { op: 'Pop()', before: '3', ret: '"C" (last pushed)', after: '2' },
                { op: 'Pop()', before: '2', ret: '"B"', after: '1' },
                { op: 'Pop()', before: '1', ret: '"A"', after: '0' },
                { op: 'Pop()', before: '0', ret: 'UNDERFLOW ERROR - ""', after: '0' },
              ].map((row, i) => (
                <tr key={i} className={i === 3 ? 'bg-red-200' : (i % 2 === 0 ? 'bg-white' : 'bg-red-50')}>
                  <td className="p-2 font-mono font-bold text-red-700">{row.op}</td>
                  <td className="p-2 text-center font-bold">{row.before}</td>
                  <td className="p-2 font-bold text-purple-700">{row.ret}</td>
                  <td className="p-2 text-center font-bold text-indigo-700">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">👁️ Peek Function</h2>
      <p className="text-gray-600 text-sm mb-3">Peek looks at the top item WITHOUT removing it. TopPointer does NOT change!</p>
      <CodeBlock language="pseudocode" code={`FUNCTION Peek() RETURNS STRING
   IF TopPointer = 0
      THEN
         OUTPUT "Stack is empty!"
         RETURN ""
      ELSE
         RETURN Stack[TopPointer]    // Return top item, DON'T change TopPointer
   ENDIF
ENDFUNCTION`} />

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="font-bold text-amber-800">⚠️ Key Exam Points</p>
        <ul className="text-amber-700 text-sm mt-2 space-y-1 list-disc list-inside">
          <li>Push is a <strong>PROCEDURE</strong> (no return value) — use <strong>CALL</strong></li>
          <li>Pop is a <strong>FUNCTION</strong> (returns the item) — NO CALL keyword</li>
          <li>Peek is a <strong>FUNCTION</strong> (returns top without removing)</li>
          <li>Always check overflow BEFORE pushing, underflow BEFORE popping</li>
          <li>BYVAL for Push — we don't want to change the original variable</li>
        </ul>
      </div>
    </div>
  );
}
