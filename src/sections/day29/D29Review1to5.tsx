import CodeBlock from '../../components/CodeBlock';

export default function D29Review1to5() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📝 Days 1–5 Review</h2>
      <p className="text-gray-500 mb-6">Variables, Operators, IF/CASE, Loops, Strings</p>

      {/* Day 1 */}
      <div className="bg-white border border-indigo-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-indigo-700 text-lg mb-3">📦 Day 1 – Variables, Constants, Data Types</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Key Rules:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✅ Must use <code className="bg-gray-100 px-1 rounded">DECLARE</code> for every variable</li>
              <li>✅ Must specify data type (INTEGER, REAL, STRING, CHAR, BOOLEAN)</li>
              <li>✅ Assignment uses <code className="bg-gray-100 px-1 rounded">←</code> NOT <code className="bg-gray-100 px-1 rounded">=</code></li>
              <li>✅ Constants use <code className="bg-gray-100 px-1 rounded">CONSTANT</code> keyword</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Data Types:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>🔢 INTEGER – whole numbers</li>
              <li>🔢 REAL – decimals</li>
              <li>🔤 STRING – text in double quotes</li>
              <li>🔡 CHAR – single char in single quotes</li>
              <li>✅ BOOLEAN – TRUE or FALSE</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write pseudocode to declare a student record with Name (STRING), Age (INTEGER), Mark (REAL), and Grade (CHAR). Assign Ali, 17, 85.5, and 'A' to them. Output a formatted result.</p>
          <details className="mt-2">
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Name : STRING
DECLARE Age : INTEGER
DECLARE Mark : REAL
DECLARE Grade : CHAR

Name ← "Ali"
Age ← 17
Mark ← 85.5
Grade ← 'A'

OUTPUT "Student: ", Name
OUTPUT "Age: ", Age
OUTPUT "Mark: ", Mark
OUTPUT "Grade: ", Grade`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 2 */}
      <div className="bg-white border border-purple-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-purple-700 text-lg mb-3">➕ Day 2 – Operators & Type Conversions</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { op: 'DIV', desc: 'Integer division', ex: '17 DIV 5 = 3' },
            { op: 'MOD', desc: 'Remainder', ex: '17 MOD 5 = 2' },
            { op: '&', desc: 'Concatenation', ex: '"Hi" & " " & Name' },
          ].map((item) => (
            <div key={item.op} className="bg-purple-50 rounded-lg p-3 text-center">
              <p className="font-bold text-purple-700">{item.op}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
              <p className="text-xs font-mono text-gray-700 mt-1">{item.ex}</p>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">A 5-digit number is input. Using only DIV and MOD, extract and output each individual digit. For example, 34521 should output 3, 4, 5, 2, 1 on separate lines.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Number : INTEGER
INPUT Number

OUTPUT Number DIV 10000           // Ten-thousands digit
OUTPUT (Number MOD 10000) DIV 1000 // Thousands digit
OUTPUT (Number MOD 1000) DIV 100   // Hundreds digit
OUTPUT (Number MOD 100) DIV 10     // Tens digit
OUTPUT Number MOD 10               // Units digit`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 3 */}
      <div className="bg-white border border-pink-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-pink-700 text-lg mb-3">🔀 Day 3 – Selection (IF and CASE)</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-pink-50 rounded-lg p-3">
            <p className="font-bold text-pink-700 text-sm mb-2">IF Rules:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Must have THEN after condition</li>
              <li>✅ Must close with ENDIF</li>
              <li>❌ No ELSE IF — use nested IF</li>
              <li>✅ = is comparison inside IF</li>
            </ul>
          </div>
          <div className="bg-pink-50 rounded-lg p-3">
            <p className="font-bold text-pink-700 text-sm mb-2">CASE Rules:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ CASE OF variable</li>
              <li>✅ OTHERWISE (not DEFAULT)</li>
              <li>✅ ENDCASE to close</li>
              <li>✅ Use when testing same variable</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write pseudocode using CASE to implement a calculator. Input two numbers and an operator (+, -, *, /). Output the result. Handle division by zero!</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Num1, Num2 : REAL
DECLARE Op : CHAR

INPUT Num1
INPUT Op
INPUT Num2

CASE OF Op
  '+' : OUTPUT Num1 + Num2
  '-' : OUTPUT Num1 - Num2
  '*' : OUTPUT Num1 * Num2
  '/' : IF Num2 = 0
           THEN OUTPUT "Error: Division by zero"
           ELSE OUTPUT Num1 / Num2
        ENDIF
  OTHERWISE : OUTPUT "Invalid operator"
ENDCASE`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 4 */}
      <div className="bg-white border border-amber-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-amber-700 text-lg mb-3">🔁 Day 4 – Loops (FOR, WHILE, REPEAT)</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { loop: 'FOR', when: 'Know exact count', keyword: 'NEXT Counter' },
            { loop: 'WHILE', when: 'May run 0 times', keyword: 'ENDWHILE' },
            { loop: 'REPEAT', when: 'Runs at least once', keyword: 'UNTIL condition' },
          ].map((item) => (
            <div key={item.loop} className="bg-amber-50 rounded-lg p-3 text-center">
              <p className="font-bold text-amber-700">{item.loop}</p>
              <p className="text-xs text-gray-600">{item.when}</p>
              <code className="text-xs text-gray-700">{item.keyword}</code>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write pseudocode for a number guessing game: generate a "secret" number (use a constant), keep asking the user to guess, tell them "Too high", "Too low", or "Correct!", count how many attempts it took.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`CONSTANT SECRET = 42
DECLARE Guess : INTEGER
DECLARE Attempts : INTEGER

Attempts ← 0

REPEAT
   OUTPUT "Enter your guess: "
   INPUT Guess
   Attempts ← Attempts + 1
   IF Guess > SECRET
      THEN OUTPUT "Too high!"
      ELSE IF Guess < SECRET
              THEN OUTPUT "Too low!"
      ENDIF
UNTIL Guess = SECRET

OUTPUT "Correct! Attempts: ", Attempts`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 5 */}
      <div className="bg-white border border-green-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-green-700 text-lg mb-3">🔤 Day 5 – String Manipulation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {[
            { fn: 'LENGTH(s)', ex: 'LENGTH("Hi") = 2' },
            { fn: 'UCASE(s)', ex: 'UCASE("hi") = "HI"' },
            { fn: 'MID(s,p,n)', ex: 'MID("Hello",2,3) = "ell"' },
            { fn: 'ASC(c)', ex: "ASC('A') = 65" },
          ].map((item) => (
            <div key={item.fn} className="bg-green-50 rounded-lg p-2 text-center">
              <code className="text-xs font-bold text-green-700">{item.fn}</code>
              <p className="text-xs text-gray-600 mt-1">{item.ex}</p>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write pseudocode to check if a string is a palindrome (reads same forwards and backwards). "racecar" → YES, "hello" → NO. Use MID to compare character by character.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Text : STRING
DECLARE i : INTEGER
DECLARE IsPalindrome : BOOLEAN
DECLARE Len : INTEGER

INPUT Text
Text ← LCASE(Text)
Len ← LENGTH(Text)
IsPalindrome ← TRUE

FOR i ← 1 TO Len DIV 2
   IF MID(Text, i, 1) <> MID(Text, Len - i + 1, 1)
      THEN
         IsPalindrome ← FALSE
   ENDIF
NEXT i

IF IsPalindrome
   THEN OUTPUT Text & " is a palindrome"
   ELSE OUTPUT Text & " is NOT a palindrome"
ENDIF`} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
