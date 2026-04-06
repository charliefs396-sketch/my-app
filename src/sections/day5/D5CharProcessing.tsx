import CodeBlock from '../../components/CodeBlock';

export default function D5CharProcessing() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔄 Character-by-Character Processing</h1>
      <p className="text-gray-500 mb-6 text-lg">The #1 A Level string pattern — loop through every character and do something with it</p>

      {/* The Pattern */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\uD83C\uDFAF"} The Master Pattern</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Almost every string exam question follows <strong>one pattern</strong>. Once you master it, 
          you can solve counting vowels, reversing strings, encrypting, validating — everything. Here it is:
        </p>

        <CodeBlock language="pseudocode" title="The character-by-character template" code={`DECLARE Text : STRING
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR

INPUT Text

FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)    // Get ONE character at position i
   
   // Do something with CurrentChar here
   // (count it, check it, transform it, etc.)
   
NEXT i`} />

        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 mt-4">
          <p className="font-bold text-indigo-800 mb-3">Breaking it down:</p>
          <div className="space-y-3 text-indigo-700 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold text-indigo-500 flex-shrink-0">Line 1:</span>
              <span><code className="bg-indigo-100 px-1 rounded">FOR i ← 1 TO LENGTH(Text)</code> — loop from position 1 to the last position. If Text has 11 characters, i goes 1, 2, 3... 11.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-indigo-500 flex-shrink-0">Line 2:</span>
              <span><code className="bg-indigo-100 px-1 rounded">CurrentChar ← MID(Text, i, 1)</code> — extract the single character at position i. This is the KEY line.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-indigo-500 flex-shrink-0">Line 3:</span>
              <span>Do whatever the question asks — count, compare, transform, add to new string, etc.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Example 1: Count Vowels */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 1: Count Vowels in a String</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the <strong>classic exam question</strong>. Let's trace through it step by step.
        </p>

        <CodeBlock language="pseudocode" title="Count vowels — full solution" code={`DECLARE Text : STRING
DECLARE VowelCount : INTEGER
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR

OUTPUT "Enter text: "
INPUT Text
VowelCount \u2190 0

FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 LCASE(MID(Text, i, 1))
   IF CurrentChar = 'a' OR CurrentChar = 'e' OR CurrentChar = 'i' OR CurrentChar = 'o' OR CurrentChar = 'u'
      THEN
         VowelCount \u2190 VowelCount + 1
   ENDIF
NEXT i

OUTPUT "Vowels: ", VowelCount`} />

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">{"\uD83D\uDD0D"} Key Details:</p>
          <div className="space-y-2 text-blue-700 text-sm">
            <p>• <strong>LCASE(MID(...))</strong> — we convert each character to lowercase FIRST, so we catch 'A' and 'a' with one check</p>
            <p>• <strong>VowelCount ← 0</strong> — always initialise counters to 0 BEFORE the loop</p>
            <p>• <strong>OR</strong> not AND — a character can be 'a' OR 'e' OR 'i' etc. It can't be all of them at once!</p>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <p className="font-bold text-gray-700 mb-3">Trace table for Text = "Hello":</p>
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 px-3 text-gray-600">i</th>
                <th className="py-2 px-3 text-gray-600">MID(Text, i, 1)</th>
                <th className="py-2 px-3 text-gray-600">CurrentChar (lowered)</th>
                <th className="py-2 px-3 text-gray-600">Is vowel?</th>
                <th className="py-2 px-3 text-gray-600">VowelCount</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold">1</td>
                <td className="py-2 font-mono">'H'</td>
                <td className="py-2 font-mono">'h'</td>
                <td className="py-2 text-red-600">{"\u2717"} No</td>
                <td className="py-2 font-bold">0</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-2 font-bold">2</td>
                <td className="py-2 font-mono">'e'</td>
                <td className="py-2 font-mono">'e'</td>
                <td className="py-2 text-green-600 font-bold">{"\u2713"} YES</td>
                <td className="py-2 font-bold text-green-700">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold">3</td>
                <td className="py-2 font-mono">'l'</td>
                <td className="py-2 font-mono">'l'</td>
                <td className="py-2 text-red-600">{"\u2717"} No</td>
                <td className="py-2 font-bold">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold">4</td>
                <td className="py-2 font-mono">'l'</td>
                <td className="py-2 font-mono">'l'</td>
                <td className="py-2 text-red-600">{"\u2717"} No</td>
                <td className="py-2 font-bold">1</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-2 font-bold">5</td>
                <td className="py-2 font-mono">'o'</td>
                <td className="py-2 font-mono">'o'</td>
                <td className="py-2 text-green-600 font-bold">{"\u2713"} YES</td>
                <td className="py-2 font-bold text-green-700">2</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Output: <code className="bg-gray-100 px-2 rounded">Vowels: 2</code></p>
        </div>
      </div>

      {/* Example 2: Reverse a String */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 2: Reverse a String</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Another exam favourite. Build a new string by adding each character to the <strong>front</strong> 
          (or loop backwards).
        </p>

        <CodeBlock language="pseudocode" title="Method 1: Build reversed string (prepend)" code={`DECLARE Text : STRING
DECLARE Reversed : STRING
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR

OUTPUT "Enter text: "
INPUT Text
Reversed \u2190 ""

FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)
   Reversed \u2190 CurrentChar & Reversed    // Add to FRONT
NEXT i

OUTPUT "Reversed: ", Reversed`} />

        <div className="mt-4 overflow-x-auto">
          <p className="font-bold text-gray-700 mb-3">Trace table for Text = "CAT":</p>
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 px-3 text-gray-600">i</th>
                <th className="py-2 px-3 text-gray-600">CurrentChar</th>
                <th className="py-2 px-3 text-gray-600">CurrentChar & Reversed</th>
                <th className="py-2 px-3 text-gray-600">Reversed</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2">-</td>
                <td className="py-2">-</td>
                <td className="py-2">-</td>
                <td className="py-2 font-mono font-bold">""</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold">1</td>
                <td className="py-2 font-mono">'C'</td>
                <td className="py-2 font-mono">'C' & "" = "C"</td>
                <td className="py-2 font-mono font-bold text-indigo-600">"C"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold">2</td>
                <td className="py-2 font-mono">'A'</td>
                <td className="py-2 font-mono">'A' & "C" = "AC"</td>
                <td className="py-2 font-mono font-bold text-indigo-600">"AC"</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">3</td>
                <td className="py-2 font-mono">'T'</td>
                <td className="py-2 font-mono">'T' & "AC" = "TAC"</td>
                <td className="py-2 font-mono font-bold text-green-600">"TAC"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock language="pseudocode" title="Method 2: Loop backwards (also valid)" code={`DECLARE Text : STRING
DECLARE Reversed : STRING
DECLARE i : INTEGER

INPUT Text
Reversed \u2190 ""

FOR i \u2190 LENGTH(Text) TO 1 STEP -1
   Reversed \u2190 Reversed & MID(Text, i, 1)    // Add to END
NEXT i

OUTPUT Reversed`} />

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mt-4">
          <p className="font-bold text-amber-800 mb-2">{"\uD83D\uDCA1"} Both methods are correct!</p>
          <p className="text-amber-700 text-sm">
            <strong>Method 1:</strong> Loop forwards, add each char to the FRONT of the result. 
            <strong> Method 2:</strong> Loop backwards using STEP -1, add each char to the END. 
            Both produce the same result. Use whichever feels more natural to you.
          </p>
        </div>
      </div>

      {/* Example 3: Count different character types */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 3: Count Character Types</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Count how many uppercase, lowercase, digits, and spaces are in a string. 
          This uses <strong>ASC()</strong> to check what type each character is.
        </p>

        <CodeBlock language="pseudocode" title="Count uppercase, lowercase, digits, spaces" code={`DECLARE Text : STRING
DECLARE Upper, Lower, Digits, Spaces : INTEGER
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR
DECLARE Code : INTEGER

INPUT Text
Upper \u2190 0
Lower \u2190 0
Digits \u2190 0
Spaces \u2190 0

FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)
   Code \u2190 ASC(CurrentChar)
   
   IF Code >= 65 AND Code <= 90
      THEN
         Upper \u2190 Upper + 1           // A-Z
      ELSE
         IF Code >= 97 AND Code <= 122
            THEN
               Lower \u2190 Lower + 1     // a-z
            ELSE
               IF Code >= 48 AND Code <= 57
                  THEN
                     Digits \u2190 Digits + 1  // 0-9
                  ELSE
                     IF CurrentChar = ' '
                        THEN
                           Spaces \u2190 Spaces + 1
                     ENDIF
               ENDIF
         ENDIF
   ENDIF
NEXT i

OUTPUT "Uppercase: ", Upper
OUTPUT "Lowercase: ", Lower
OUTPUT "Digits: ", Digits
OUTPUT "Spaces: ", Spaces`} />

        <div className="mt-4 bg-purple-50 p-4 rounded-xl border border-purple-100">
          <p className="font-bold text-purple-800 mb-2">{"\uD83E\uDDD0"} Why use ASC() ranges instead of checking every letter?</p>
          <p className="text-purple-700 text-sm">
            Because the letters are <strong>consecutive in ASCII</strong>! Instead of checking 
            <code className="bg-purple-100 px-1 rounded">IF Char = 'A' OR Char = 'B' OR ... OR Char = 'Z'</code> (26 checks!), 
            you just check <code className="bg-purple-100 px-1 rounded">IF Code {">"}= 65 AND Code {"<"}= 90</code> (one range check). 
            Much cleaner and fewer marks lost!
          </p>
        </div>
      </div>

      {/* 4 Common Patterns */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\uD83D\uDCCB"} 4 Common String Processing Patterns</h2>
        <p className="text-gray-700 mb-4">These patterns appear in most string exam questions. Learn to recognise them:</p>

        <div className="space-y-4">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2">Pattern 1: COUNTING</h3>
            <p className="text-indigo-700 text-sm mb-2">Initialise counter to 0. Loop through. IF condition met, increment counter.</p>
            <p className="text-indigo-600 text-xs italic">Count vowels, count digits, count spaces, count uppercase letters</p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">Pattern 2: BUILDING A NEW STRING</h3>
            <p className="text-purple-700 text-sm mb-2">Initialise NewString to "". Loop through. Concatenate characters to build result.</p>
            <p className="text-purple-600 text-xs italic">Reverse string, remove vowels, encrypt text, extract digits only</p>
          </div>
          
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2">Pattern 3: CHECKING/VALIDATING</h3>
            <p className="text-emerald-700 text-sm mb-2">Set a flag (BOOLEAN). Loop through. If any character fails, set flag to FALSE.</p>
            <p className="text-emerald-600 text-xs italic">Check if palindrome, check if all digits, validate email format</p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-800 mb-2">Pattern 4: TRANSFORMING</h3>
            <p className="text-amber-700 text-sm mb-2">Loop through. Transform each character (shift, swap case, etc). Build new string.</p>
            <p className="text-amber-600 text-xs italic">Caesar cipher, toggle case, ROT13 encryption</p>
          </div>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">{"\uD83D\uDEA8"} Common Exam Mistakes</p>
        <div className="space-y-2 text-red-900 text-sm mt-2">
          <p>• <strong>Starting at 0:</strong> Pseudocode strings start at position <strong>1</strong>, not 0!</p>
          <p>• <strong>Forgetting to initialise:</strong> Always set counters to 0 and new strings to "" BEFORE the loop.</p>
          <p>• <strong>Using AND instead of OR for vowels:</strong> A character is 'a' <strong>OR</strong> 'e', not 'a' AND 'e'!</p>
          <p>• <strong>Not converting case:</strong> If you check for 'a' but the text has 'A', you'll miss it. Use LCASE() first!</p>
        </div>
      </div>
    </div>
  );
}
