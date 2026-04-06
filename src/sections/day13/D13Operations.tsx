import CodeBlock from '../../components/CodeBlock';

export default function D13Operations() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Stack Trace & Applications</h1>
      <p className="text-gray-500 mb-6">Tracing stack operations and real-world uses</p>

      <h2 className="text-xl font-bold text-gray-800 mb-3">🔍 Full Trace: Push/Pop Sequence</h2>
      <p className="text-gray-600 text-sm mb-3">Trace: Push("A"), Push("B"), Push("C"), Pop(), Push("D"), Pop(), Pop()</p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3 text-left">Step</th>
              <th className="p-3 text-left">Operation</th>
              <th className="p-3 text-left">TopPointer</th>
              <th className="p-3 text-left">Stack Contents (bottom→top)</th>
              <th className="p-3 text-left">Return Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              { step: 'Start', op: '-', top: '0', stack: '[ ]', ret: '-' },
              { step: '1', op: 'Push("A")', top: '1', stack: '["A"]', ret: '-' },
              { step: '2', op: 'Push("B")', top: '2', stack: '["A","B"]', ret: '-' },
              { step: '3', op: 'Push("C")', top: '3', stack: '["A","B","C"]', ret: '-' },
              { step: '4', op: 'Pop()', top: '2', stack: '["A","B"]', ret: '"C"' },
              { step: '5', op: 'Push("D")', top: '3', stack: '["A","B","D"]', ret: '-' },
              { step: '6', op: 'Pop()', top: '2', stack: '["A","B"]', ret: '"D"' },
              { step: '7', op: 'Pop()', top: '1', stack: '["A"]', ret: '"B"' },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 font-bold text-gray-600">{row.step}</td>
                <td className="p-3 font-mono font-bold text-indigo-700">{row.op}</td>
                <td className="p-3 text-center font-bold text-purple-700">{row.top}</td>
                <td className="p-3 font-mono text-gray-700">{row.stack}</td>
                <td className="p-3 font-bold text-green-700">{row.ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">🔄 Application: Reversing a String</h2>
      <p className="text-gray-600 text-sm mb-3">A classic exam question — use a stack to reverse a string using LIFO!</p>
      <CodeBlock language="pseudocode" code={`// Reverse a string using a stack
DECLARE Text : STRING
DECLARE i : INTEGER
DECLARE Reversed : STRING

INPUT Text
Reversed ← ""

// Push each character onto stack
FOR i ← 1 TO LENGTH(Text)
   CALL Push(MID(Text, i, 1))
NEXT i

// Pop each character - comes out in reverse order!
WHILE TopPointer <> 0
   Reversed ← Reversed & Pop()
ENDWHILE

OUTPUT "Original: ", Text
OUTPUT "Reversed: ", Reversed

// Example: Text = "Hello"
// Stack after pushing: [H, e, l, l, o]  (o is at top)
// After popping all:  Reversed = "olleH"`} />

      <h2 className="text-xl font-bold text-gray-800 mb-3 mt-6">🌐 Real-World Stack Applications</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          { icon: '↩️', title: 'Undo Function', desc: 'Every action pushed to stack. Ctrl+Z pops the last action.', example: 'Type "A" → Push("type A")\nCtrl+Z → Pop() → undo typing' },
          { icon: '🌐', title: 'Browser Back Button', desc: 'Each page visited is pushed. Back button pops to previous page.', example: 'Visit Google → Push\nVisit YouTube → Push\nBack → Pop → Google' },
          { icon: '📞', title: 'Function Calls', desc: 'CPU uses a call stack. Each function call is pushed, return pops it.', example: 'main() calls A()\nA() calls B()\nB() returns → pop\nA() returns → pop' },
          { icon: '🔢', title: 'Balanced Brackets', desc: 'Push opening brackets, pop when closing bracket found.', example: '( → Push\n[ → Push\n] → Pop checks for [\n) → Pop checks for (' },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
            <pre className="text-xs bg-gray-50 rounded-lg p-2 text-gray-600 font-mono">{item.example}</pre>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">🔍 IsEmpty & IsFull Functions</h2>
      <CodeBlock language="pseudocode" code={`// Check if stack is empty
FUNCTION IsEmpty() RETURNS BOOLEAN
   RETURN TopPointer = 0
ENDFUNCTION

// Check if stack is full
FUNCTION IsFull() RETURNS BOOLEAN
   RETURN TopPointer = MAXSIZE
ENDFUNCTION

// Using them in Push/Pop:
PROCEDURE PushSafe(BYVAL Item : STRING)
   IF IsFull()
      THEN
         OUTPUT "Stack Overflow"
      ELSE
         TopPointer ← TopPointer + 1
         Stack[TopPointer] ← Item
   ENDIF
ENDPROCEDURE`} />
    </div>
  );
}
