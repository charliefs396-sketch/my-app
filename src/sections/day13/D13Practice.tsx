import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D13Practice() {
  const [hints, setHints] = useState<Record<number, number>>({});
  const [solutions, setSolutions] = useState<Record<number, boolean>>({});
  const showHint = (ex: number) => setHints(h => ({ ...h, [ex]: (h[ex] || 0) + 1 }));
  const toggleSolution = (ex: number) => setSolutions(s => ({ ...s, [ex]: !s[ex] }));

  const exercises = [
    {
      title: "Trace Push/Pop Sequence",
      difficulty: "⭐ Easy",
      desc: "Trace the following operations on a stack (MAXSIZE=5) and draw the stack state after each step:\nPush(\"A\"), Push(\"B\"), Push(\"C\"), Pop(), Push(\"D\"), Pop(), Pop()",
      hints: ["Start with TopPointer = 0 and an empty array", "After each Push, increment TopPointer then store the item", "After each Pop, save the top item then decrement TopPointer", "Draw a table with columns: Operation | TopPointer | Stack Contents | Return Value"],
      solution: `Operation    | TopPointer | Stack Contents | Return
-------------|------------|----------------|-------
Start        |     0      | []             | -
Push("A")    |     1      | ["A"]          | -
Push("B")    |     2      | ["A","B"]      | -
Push("C")    |     3      | ["A","B","C"]  | -
Pop()        |     2      | ["A","B"]      | "C"
Push("D")    |     3      | ["A","B","D"]  | -
Pop()        |     2      | ["A","B"]      | "D"
Pop()        |     1      | ["A"]          | "B"`,
    },
    {
      title: "Reverse a String",
      difficulty: "⭐⭐ Medium",
      desc: "Write pseudocode to reverse the string \"LEVEL\" using a stack. Show the stack state after each push, then show the output as you pop.",
      hints: ["Push each character one at a time using MID(Text, i, 1)", "After all characters are pushed, use a WHILE loop to pop each one", "Concatenate each popped character to build the reversed string", "For 'LEVEL': push L,E,V,E,L → stack top is L → pop gives L,E,V,E,L = 'LEVEL' (palindrome!)"],
      solution: `DECLARE Text : STRING
DECLARE Reversed : STRING
DECLARE i : INTEGER

Text ← "LEVEL"
Reversed ← ""

// Push each character
FOR i ← 1 TO LENGTH(Text)
   CALL Push(MID(Text, i, 1))
NEXT i
// Stack: [L, E, V, E, L] ← top

// Pop each character
WHILE TopPointer <> 0
   Reversed ← Reversed & Pop()
ENDWHILE

OUTPUT "Reversed: ", Reversed   // "LEVEL" (palindrome!)`,
    },
    {
      title: "Integer Stack",
      difficulty: "⭐⭐ Medium",
      desc: "Write pseudocode for a stack of integers (MAXSIZE=5). Write Push and Pop for integers, then push 10, 20, 30 and pop twice. What are the outputs?",
      hints: ["Change the array type to INTEGER: DECLARE Stack : ARRAY[1:5] OF INTEGER", "Push and Pop logic is identical — just change the data type in the function signature", "After pushing 10, 20, 30: stack is [10, 20, 30] with TopPointer = 3", "First pop returns 30, second pop returns 20"],
      solution: `CONSTANT MAXSIZE = 5
DECLARE Stack : ARRAY[1:MAXSIZE] OF INTEGER
DECLARE TopPointer : INTEGER
TopPointer ← 0

PROCEDURE Push(BYVAL Item : INTEGER)
   IF TopPointer = MAXSIZE
      THEN OUTPUT "Stack Overflow"
      ELSE
         TopPointer ← TopPointer + 1
         Stack[TopPointer] ← Item
   ENDIF
ENDPROCEDURE

FUNCTION Pop() RETURNS INTEGER
   IF TopPointer = 0
      THEN
         OUTPUT "Stack Underflow"
         RETURN -1
      ELSE
         DECLARE Item : INTEGER
         Item ← Stack[TopPointer]
         TopPointer ← TopPointer - 1
         RETURN Item
   ENDIF
ENDFUNCTION

CALL Push(10)   // Stack: [10]
CALL Push(20)   // Stack: [10, 20]
CALL Push(30)   // Stack: [10, 20, 30]
OUTPUT Pop()    // Outputs: 30
OUTPUT Pop()    // Outputs: 20`,
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Stacks</h1>
      <p className="text-gray-500 mb-6">3 exercises to master stack operations</p>
      <div className="space-y-6">
        {exercises.map((ex, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <h3 className="font-bold text-gray-800 text-lg">{ex.title}</h3>
              <span className="text-sm">{ex.difficulty}</span>
            </div>
            <pre className="text-gray-700 text-sm mb-4 whitespace-pre-wrap bg-gray-50 rounded-lg p-3">{ex.desc}</pre>
            <div className="flex gap-3 mb-3">
              <button onClick={() => showHint(i)} className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-semibold hover:bg-amber-200 transition-colors">
                💡 Hint {(hints[i] || 0) < ex.hints.length ? `(${(hints[i] || 0) + 1}/${ex.hints.length})` : '(all shown)'}
              </button>
              <button onClick={() => toggleSolution(i)} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold hover:bg-indigo-200 transition-colors">
                {solutions[i] ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>
            </div>
            {(hints[i] || 0) > 0 && (
              <div className="space-y-2 mb-3">
                {ex.hints.slice(0, hints[i]).map((hint, hi) => (
                  <div key={hi} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800 text-sm">
                    <strong>Hint {hi + 1}:</strong> {hint}
                  </div>
                ))}
              </div>
            )}
            {solutions[i] && <CodeBlock language="pseudocode" code={ex.solution} />}
          </div>
        ))}
      </div>
    </div>
  );
}
