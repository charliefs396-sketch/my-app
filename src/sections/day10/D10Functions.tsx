import CodeBlock from '../../components/CodeBlock';

export default function D10Functions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">📤 Functions</h1>
      <p className="text-gray-500 text-lg mb-8">Subroutines that CALCULATE and RETURN a value</p>

      {/* What is a function */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What is a FUNCTION?</h2>
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-4">
          <p className="font-bold text-emerald-800">📖 Exam Definition (memorise this!):</p>
          <p className="text-emerald-700 mt-1">A <strong>function</strong> is a named block of code that performs a specific task and <strong>returns a single value</strong> back to the part of the program that called it.</p>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="font-bold text-blue-800 mb-2">🎯 The Key Difference from Procedures:</p>
          <p className="text-blue-700 text-sm">A function gives something BACK. Think of it like asking a question and getting an answer. You call it, it calculates, and it hands the result back to you.</p>
          <p className="text-blue-600 text-sm mt-2">Real world: Like a calculator — you put numbers in, press = , and it gives you back the answer.</p>
        </div>
      </div>

      {/* Syntax breakdown */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 Function Syntax — Every Part Explained</h2>
        <CodeBlock language="pseudocode" code={`FUNCTION Maximum(A : INTEGER, B : INTEGER) RETURNS INTEGER
   IF A > B
      THEN
         RETURN A
      ELSE
         RETURN B
   ENDIF
ENDFUNCTION`} />
        <div className="mt-4 space-y-3">
          {[
            { part: 'FUNCTION', color: 'bg-emerald-100 text-emerald-800', desc: 'Keyword that starts the function definition.' },
            { part: 'Maximum', color: 'bg-blue-100 text-blue-800', desc: 'The name — descriptive of what it calculates. No spaces!' },
            { part: '(A : INTEGER, B : INTEGER)', color: 'bg-purple-100 text-purple-800', desc: 'Parameters — the inputs the function needs to do its calculation.' },
            { part: 'RETURNS INTEGER', color: 'bg-amber-100 text-amber-800', desc: 'CRITICAL — tells the examiner what type of value this function gives back. Must match the RETURN statement.' },
            { part: 'RETURN A', color: 'bg-red-100 text-red-800', desc: 'Sends the value back to whoever called the function. Execution stops here.' },
            { part: 'ENDFUNCTION', color: 'bg-gray-100 text-gray-800', desc: 'Ends the function definition.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`px-3 py-1 rounded-lg font-mono text-sm font-bold flex-shrink-0 ${item.color}`}>{item.part}</span>
              <p className="text-gray-600 text-sm pt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to call a function */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📞 How to CALL a Function</h2>
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl mb-4">
          <p className="font-bold text-yellow-800">⭐ KEY RULE: Functions do NOT use CALL. The return value must be used!</p>
          <p className="text-yellow-700 text-sm mt-1">You use a function inside an expression or assignment because it gives back a value.</p>
        </div>
        <CodeBlock language="pseudocode" code={`// Define the function
FUNCTION Maximum(A : INTEGER, B : INTEGER) RETURNS INTEGER
   IF A > B
      THEN
         RETURN A
      ELSE
         RETURN B
   ENDIF
ENDFUNCTION

// CORRECT ways to call a function:

// 1. Store result in a variable
DECLARE Result : INTEGER
Result ← Maximum(45, 72)
OUTPUT "The maximum is ", Result

// 2. Use directly in OUTPUT
OUTPUT Maximum(45, 72)

// 3. Use in another expression
DECLARE Doubled : INTEGER
Doubled ← Maximum(45, 72) * 2

// 4. Use as argument to another call
OUTPUT Maximum(Maximum(10, 20), 30)`} />

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">❌ WRONG:</p>
            <CodeBlock language="pseudocode" code={`// Don't use CALL with functions!
CALL Maximum(45, 72)

// Don't ignore the return value!
Maximum(45, 72)   // Result is wasted`} />
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT:</p>
            <CodeBlock language="pseudocode" code={`// Assign the return value
Result ← Maximum(45, 72)

// Or use directly
OUTPUT Maximum(45, 72)`} />
          </div>
        </div>
      </div>

      {/* Multiple examples */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📚 4 Complete Function Examples</h2>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <p className="font-bold text-gray-800">IsVowel — returns BOOLEAN</p>
            </div>
            <CodeBlock language="pseudocode" code={`FUNCTION IsVowel(Letter : CHAR) RETURNS BOOLEAN
   DECLARE LowerLetter : CHAR
   LowerLetter ← LCASE(Letter)
   IF LowerLetter = 'a' OR LowerLetter = 'e' OR LowerLetter = 'i'
      OR LowerLetter = 'o' OR LowerLetter = 'u'
      THEN
         RETURN TRUE
      ELSE
         RETURN FALSE
   ENDIF
ENDFUNCTION

// Using it:
IF IsVowel('A') = TRUE
   THEN
      OUTPUT "It's a vowel!"
ENDIF`} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <p className="font-bold text-gray-800">CountChar — returns INTEGER</p>
            </div>
            <CodeBlock language="pseudocode" code={`FUNCTION CountChar(Text : STRING, Target : CHAR) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   Count ← 0
   FOR i ← 1 TO LENGTH(Text)
      IF MID(Text, i, 1) = Target
         THEN
            Count ← Count + 1
      ENDIF
   NEXT i
   RETURN Count
ENDFUNCTION

// Using it:
DECLARE Vowels : INTEGER
Vowels ← CountChar("Hello World", 'l')
OUTPUT "Number of l's: ", Vowels   // Outputs 3`} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <p className="font-bold text-gray-800">Average — returns REAL</p>
            </div>
            <CodeBlock language="pseudocode" code={`FUNCTION Average(Total : INTEGER, Count : INTEGER) RETURNS REAL
   IF Count = 0
      THEN
         RETURN 0.0    // Avoid division by zero!
      ELSE
         RETURN Total / Count
   ENDIF
ENDFUNCTION

// Using it:
DECLARE Avg : REAL
Avg ← Average(250, 5)
OUTPUT "Class average: ", Avg   // 50.0`} />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <p className="font-bold text-gray-800">GetGrade — returns CHAR</p>
            </div>
            <CodeBlock language="pseudocode" code={`FUNCTION GetGrade(Mark : INTEGER) RETURNS CHAR
   IF Mark >= 80
      THEN
         RETURN 'A'
      ELSE
         IF Mark >= 70
            THEN
               RETURN 'B'
            ELSE
               IF Mark >= 60
                  THEN
                     RETURN 'C'
                  ELSE
                     RETURN 'F'
               ENDIF
         ENDIF
   ENDIF
ENDFUNCTION

// Using it:
DECLARE Grade : CHAR
Grade ← GetGrade(75)
OUTPUT "Grade: ", Grade    // Grade: B`} />
          </div>
        </div>
      </div>

      {/* RETURN details */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-amber-900 mb-4">⚡ RETURN — Important Details</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-amber-200">
            <p className="font-bold text-gray-800 mb-2">1. RETURN stops execution immediately</p>
            <CodeBlock language="pseudocode" code={`FUNCTION Absolute(N : INTEGER) RETURNS INTEGER
   IF N < 0
      THEN
         RETURN -N    // Returns here, rest of function is skipped
   ENDIF
   RETURN N           // Only reached if N >= 0
ENDFUNCTION`} />
          </div>
          <div className="bg-white rounded-xl p-4 border border-amber-200">
            <p className="font-bold text-gray-800 mb-2">2. RETURNS type must match what you actually return</p>
            <CodeBlock language="pseudocode" code={`// CORRECT - RETURNS INTEGER and returns an INTEGER
FUNCTION Double(N : INTEGER) RETURNS INTEGER
   RETURN N * 2          // INTEGER * INTEGER = INTEGER ✓
ENDFUNCTION

// WRONG - RETURNS INTEGER but returns REAL
FUNCTION Average(A : INTEGER, B : INTEGER) RETURNS INTEGER
   RETURN (A + B) / 2    // This might be REAL! Use RETURNS REAL instead
ENDFUNCTION`} />
          </div>
        </div>
      </div>
    </div>
  );
}
