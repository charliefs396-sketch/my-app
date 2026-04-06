import CodeBlock from '../../components/CodeBlock';

export default function D19ErrorTypes() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🐛 Types of Errors
      </h1>

      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
        <p className="font-bold text-red-800 text-lg mb-2">📖 Exam Definition</p>
        <p className="text-red-700">
          An <strong>error</strong> is a mistake in a program that causes it to not work as intended.
          There are three types: <strong>syntax</strong>, <strong>logic</strong>, and <strong>runtime</strong>.
        </p>
      </div>

      {/* Syntax Errors */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">1️⃣ Syntax Errors</h2>
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
          <p className="font-bold text-blue-800 mb-1">Definition to memorise:</p>
          <p className="text-blue-700">A <strong>syntax error</strong> occurs when the code <strong>breaks the rules of the programming language</strong>. The program will <strong>NOT run at all</strong>.</p>
        </div>

        <p className="text-gray-700 mb-4">Think of it like a <strong>spelling or grammar mistake</strong> in English. The computer simply cannot understand what you wrote.</p>

        <CodeBlock code={`// WRONG — Syntax errors (program won't run!)
OUTPU "Hello"              // Misspelled OUTPUT
IF Age > 18                // Missing THEN
   OUTPUT "Adult"
ENDIF

DECLARE Name  STRING       // Missing colon (:)
FOR i <- 1 TO 10           // Wrong arrow (should be ←)

// CORRECT versions
OUTPUT "Hello"
IF Age > 18
   THEN
      OUTPUT "Adult"
ENDIF
DECLARE Name : STRING
FOR i ← 1 TO 10`} />

        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="font-bold text-gray-700 mb-2">Common causes of syntax errors:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Misspelling keywords (OUTPU, IMPUT)',
              'Missing THEN after IF',
              'Missing ENDIF / ENDWHILE / ENDCASE',
              'Missing colon in DECLARE',
              'Using = instead of ← for assignment',
              'Forgetting quotes around strings',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-red-500">✗</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="font-bold text-green-700">🔑 Key fact: The compiler/interpreter <strong>catches</strong> syntax errors and tells you where they are. They are the <strong>easiest to fix</strong>.</p>
        </div>
      </div>

      {/* Logic Errors */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2️⃣ Logic Errors</h2>
        <div className="bg-orange-50 rounded-lg p-4 mb-4 border border-orange-200">
          <p className="font-bold text-orange-800 mb-1">Definition to memorise:</p>
          <p className="text-orange-700">A <strong>logic error</strong> occurs when the program <strong>runs without crashing</strong> but <strong>produces incorrect results</strong>. The code is valid but the algorithm is wrong.</p>
        </div>

        <p className="text-gray-700 mb-4">Think of it like giving <strong>correct directions to the wrong place</strong>. The car follows your instructions perfectly — but ends up somewhere wrong!</p>

        <CodeBlock code={`// Logic error examples

// ERROR: Using * instead of /
Average ← Total * Count              // Should be Total / Count

// ERROR: Wrong comparison operator
IF Mark > 100                         // Should be Mark >= 100 (for boundary)
   THEN
      OUTPUT "Invalid"
ENDIF

// ERROR: Counter not reset
Total ← 0
FOR Student ← 1 TO 5
   // Total ← 0    ← Should be HERE (inside loop for each student)
   FOR Subject ← 1 TO 3
      Total ← Total + Marks[Student, Subject]
   NEXT Subject
   OUTPUT "Average: ", Total / 3      // Wrong! Total keeps accumulating
NEXT Student

// ERROR: Off-by-one
FOR i ← 1 TO 9                       // Should be 1 TO 10 (misses last element)
   OUTPUT Data[i]
NEXT i`} />

        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="font-bold text-gray-700 mb-2">Common causes of logic errors:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Wrong arithmetic operator (+, -, *, /)',
              'Wrong comparison operator (>, >=, <, <=)',
              'Loop runs too many or too few times',
              'Counter/total not reset inside loop',
              'Conditions in wrong order (nested IF)',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-orange-500">⚠</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="font-bold text-red-700">🔑 Key fact: Logic errors are the <strong>HARDEST to find</strong> because the program runs fine — it just gives the wrong answer. Use <strong>trace tables</strong> and <strong>test data</strong> to find them!</p>
        </div>
      </div>

      {/* Runtime Errors */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">3️⃣ Runtime Errors</h2>
        <div className="bg-purple-50 rounded-lg p-4 mb-4 border border-purple-200">
          <p className="font-bold text-purple-800 mb-1">Definition to memorise:</p>
          <p className="text-purple-700">A <strong>runtime error</strong> occurs when the program <strong>compiles successfully</strong> but <strong>crashes during execution</strong> due to an operation the computer cannot perform.</p>
        </div>

        <p className="text-gray-700 mb-4">Think of it like driving into a <strong>wall that wasn't on the map</strong>. Everything was fine until you hit something unexpected!</p>

        <CodeBlock code={`// Runtime error examples

// Division by zero
DECLARE Count : INTEGER
Count ← 0
Result ← Total / Count               // CRASH! Cannot divide by zero

// Array index out of bounds
DECLARE Data : ARRAY[1:10] OF INTEGER
OUTPUT Data[11]                       // CRASH! Index 11 doesn't exist
OUTPUT Data[0]                        // CRASH! Index starts at 1

// Stack overflow (infinite recursion)
FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   RETURN N * Factorial(N - 1)        // No base case — never stops!
ENDFUNCTION

// File not found
OPENFILE "missing.txt" FOR READ       // CRASH! File doesn't exist

// Type mismatch at runtime
Num ← STR_TO_NUM("hello")            // CRASH! "hello" is not a number`} />

        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="font-bold text-gray-700 mb-2">Common causes of runtime errors:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Division by zero',
              'Array index out of bounds',
              'Infinite recursion (stack overflow)',
              'File not found / cannot open',
              'Converting non-numeric string to number',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-purple-500">💥</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 The Big Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold">Feature</th>
                <th className="text-left p-3 font-bold text-blue-600">Syntax Error</th>
                <th className="text-left p-3 font-bold text-orange-600">Logic Error</th>
                <th className="text-left p-3 font-bold text-purple-600">Runtime Error</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-semibold">Does it run?</td><td className="p-3">❌ No</td><td className="p-3">✅ Yes</td><td className="p-3">✅ Starts, then 💥</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-3 font-semibold">Correct output?</td><td className="p-3">N/A</td><td className="p-3">❌ Wrong answer</td><td className="p-3">N/A (crashes)</td></tr>
              <tr className="border-t"><td className="p-3 font-semibold">When detected?</td><td className="p-3">Compile time</td><td className="p-3">During testing</td><td className="p-3">During execution</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-3 font-semibold">Found by compiler?</td><td className="p-3">✅ Yes</td><td className="p-3">❌ No</td><td className="p-3">❌ No</td></tr>
              <tr className="border-t"><td className="p-3 font-semibold">Difficulty to fix</td><td className="p-3">🟢 Easy</td><td className="p-3">🔴 Hard</td><td className="p-3">🟡 Medium</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-3 font-semibold">Example</td><td className="p-3">OUTPU "Hi"</td><td className="p-3">Total * Count</td><td className="p-3">X / 0</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Identify the Error */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Quick Test — Which Error Type?</h2>
        <div className="space-y-3">
          {[
            { code: 'OUTPU "Hello World"', answer: 'Syntax — misspelled OUTPUT' },
            { code: 'Average ← Total * Count', answer: 'Logic — should be / not *' },
            { code: 'Result ← 100 / 0', answer: 'Runtime — division by zero' },
            { code: 'IF Age > 18  OUTPUT "Adult"  ENDIF', answer: 'Syntax — missing THEN' },
            { code: 'FOR i ← 1 TO 9 (array has 10 elements)', answer: 'Logic — off-by-one, should be TO 10' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-amber-100">
              <code className="text-sm font-mono text-gray-800">{item.code}</code>
              <p className="text-xs text-amber-700 mt-1">→ {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
