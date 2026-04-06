import CodeBlock from '../../components/CodeBlock';

export default function D5AsciiConversions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔢 ASCII & Type Conversions</h1>
      <p className="text-gray-500 mb-6 text-lg">ASC, CHR, NUM_TO_STR, STR_TO_NUM — converting between characters and numbers</p>

      {/* What is ASCII */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is ASCII? {"\uD83E\uDDD0"}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Every character on your keyboard has a <strong>number</strong> assigned to it. This numbering system is called 
          <strong> ASCII</strong> (American Standard Code for Information Interchange). The computer stores characters as numbers internally.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Why do you care? Because with ASC and CHR you can <strong>do maths on letters</strong> — which is exactly 
          how <strong>Caesar cipher encryption</strong> works!
        </p>

        <div className="overflow-x-auto mb-4">
          <p className="font-bold text-gray-700 mb-3">Key ASCII values you should know:</p>
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 px-3 text-gray-600">Character</th>
                <th className="py-2 px-3 text-gray-600">ASCII Code</th>
                <th className="py-2 px-3 text-gray-600">Character</th>
                <th className="py-2 px-3 text-gray-600">ASCII Code</th>
                <th className="py-2 px-3 text-gray-600">Character</th>
                <th className="py-2 px-3 text-gray-600">ASCII Code</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 font-mono font-bold text-indigo-600 text-lg">'A'</td>
                <td className="py-2 font-bold">65</td>
                <td className="py-2 font-mono font-bold text-purple-600 text-lg">'a'</td>
                <td className="py-2 font-bold">97</td>
                <td className="py-2 font-mono font-bold text-amber-600 text-lg">'0'</td>
                <td className="py-2 font-bold">48</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-mono font-bold text-indigo-600 text-lg">'B'</td>
                <td className="py-2 font-bold">66</td>
                <td className="py-2 font-mono font-bold text-purple-600 text-lg">'b'</td>
                <td className="py-2 font-bold">98</td>
                <td className="py-2 font-mono font-bold text-amber-600 text-lg">'1'</td>
                <td className="py-2 font-bold">49</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-mono font-bold text-indigo-600 text-lg">'C'</td>
                <td className="py-2 font-bold">67</td>
                <td className="py-2 font-mono font-bold text-purple-600 text-lg">'c'</td>
                <td className="py-2 font-bold">99</td>
                <td className="py-2 font-mono font-bold text-amber-600 text-lg">'9'</td>
                <td className="py-2 font-bold">57</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-mono text-indigo-600">...</td>
                <td className="py-2">...</td>
                <td className="py-2 font-mono text-purple-600">...</td>
                <td className="py-2">...</td>
                <td className="py-2 font-mono font-bold text-emerald-600 text-lg">' '</td>
                <td className="py-2 font-bold">32</td>
              </tr>
              <tr>
                <td className="py-2 font-mono font-bold text-indigo-600 text-lg">'Z'</td>
                <td className="py-2 font-bold">90</td>
                <td className="py-2 font-mono font-bold text-purple-600 text-lg">'z'</td>
                <td className="py-2 font-bold">122</td>
                <td className="py-2"></td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
          <p className="font-bold text-indigo-800 mb-2">{"\uD83D\uDD11"} Key Patterns to Remember</p>
          <div className="space-y-2 text-indigo-700 text-sm">
            <p>• <strong>'A' to 'Z'</strong> = 65 to 90 (26 uppercase letters, consecutive)</p>
            <p>• <strong>'a' to 'z'</strong> = 97 to 122 (26 lowercase letters, consecutive)</p>
            <p>• <strong>'0' to '9'</strong> = 48 to 57 (digit characters, consecutive)</p>
            <p>• <strong>Uppercase to lowercase:</strong> add 32 (e.g., 'A' is 65, 'a' is 97 = 65 + 32)</p>
            <p>• <strong>Letters are consecutive!</strong> So 'A' + 1 = 'B', 'A' + 2 = 'C', etc. — this makes Caesar cipher work!</p>
          </div>
        </div>
      </div>

      {/* ASC and CHR */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ASC(Character) & CHR(Number)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          These two functions convert <strong>between characters and their ASCII numbers</strong>. They're opposites of each other:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2 text-lg">ASC(Char) {"\u2192"} Number</h3>
            <p className="text-indigo-700 text-sm mb-2">
              Give it a <strong>character</strong>, it returns the <strong>ASCII number</strong>.
            </p>
            <p className="text-indigo-600 text-xs italic">
              "What number is this character?"
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">CHR(Number) {"\u2192"} Character</h3>
            <p className="text-purple-700 text-sm mb-2">
              Give it an <strong>ASCII number</strong>, it returns the <strong>character</strong>.
            </p>
            <p className="text-purple-600 text-xs italic">
              "What character is this number?"
            </p>
          </div>
        </div>

        <CodeBlock language="pseudocode" title="ASC and CHR examples" code={`// ASC - character to number
OUTPUT ASC('A')               // 65
OUTPUT ASC('B')               // 66
OUTPUT ASC('Z')               // 90
OUTPUT ASC('a')               // 97
OUTPUT ASC('0')               // 48  (the character '0', not the number 0!)

// CHR - number to character
OUTPUT CHR(65)                // A
OUTPUT CHR(66)                // B
OUTPUT CHR(90)                // Z
OUTPUT CHR(97)                // a
OUTPUT CHR(48)                // 0

// They are OPPOSITES:
OUTPUT CHR(ASC('A'))          // A   (number to char back to char)
OUTPUT ASC(CHR(65))           // 65  (char to number back to number)`} />

        <div className="mt-6 bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <p className="font-bold text-emerald-800 mb-3">{"\uD83C\uDFAF"} The Caesar Cipher Pattern — This is WHY ASC/CHR matter!</p>
          <p className="text-emerald-700 text-sm mb-3">
            To shift a letter by N positions (like Caesar cipher), you:
          </p>
          <ol className="text-emerald-700 text-sm space-y-2 list-decimal list-inside mb-3">
            <li><strong>Convert</strong> the character to a number using ASC</li>
            <li><strong>Add</strong> the shift amount</li>
            <li><strong>Convert back</strong> to a character using CHR</li>
          </ol>
          <CodeBlock language="pseudocode" title="Shifting 'A' by 3 positions" code={`// Encrypt 'A' with shift of 3:
DECLARE Code : INTEGER
DECLARE NewChar : CHAR

Code \u2190 ASC('A')               // Code = 65
Code \u2190 Code + 3                // Code = 68
NewChar \u2190 CHR(Code)            // NewChar = 'D'
OUTPUT NewChar                  // D

// 'A' shifted by 3 = 'D'  (A -> B -> C -> D)`} />
        </div>
      </div>

      {/* NUM_TO_STR and STR_TO_NUM */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 NUM_TO_STR & STR_TO_NUM</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          These convert between <strong>numbers and their string representation</strong>. 
          Remember from Day 2: you can't concatenate a number with a string directly!
        </p>

        <CodeBlock language="pseudocode" title="Type conversion examples" code={`DECLARE NumStr : STRING
DECLARE Num : INTEGER

// STR_TO_NUM - String to Number
NumStr \u2190 "42"
Num \u2190 STR_TO_NUM(NumStr)      // Num = 42 (the number!)
OUTPUT Num + 8                  // 50 (number addition)

// NUM_TO_STR - Number to String
Num \u2190 42
NumStr \u2190 NUM_TO_STR(Num)      // NumStr = "42" (the string!)

// WHY do you need this?
// Concatenation needs STRINGS, not numbers:

// WRONG - can't concatenate number with string
OUTPUT "Score: " & 42          // ERROR!

// CORRECT - convert number to string first
OUTPUT "Score: " & NUM_TO_STR(42)   // "Score: 42"`} />

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">🧠 When Do You Need These?</p>
          <div className="space-y-3 text-blue-700 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600 flex-shrink-0">STR_TO_NUM:</span>
              <span>When you have text like "42" but need to do <strong>maths</strong> with it. INPUT gives you strings, so if you read a number from input, you might need to convert it.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600 flex-shrink-0">NUM_TO_STR:</span>
              <span>When you want to <strong>concatenate</strong> a number into a message using &. Or when you need to process each <strong>digit</strong> of a number as a character.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ASC vs STR_TO_NUM */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\u26A0\uFE0F"} Don't Confuse: ASC vs STR_TO_NUM</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Students often mix these up. They do VERY different things:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Function</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Input</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Output</th>
                <th className="py-3 text-gray-600 font-bold">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100 bg-indigo-50">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">ASC('5')</td>
                <td className="py-3 pr-4">A single character</td>
                <td className="py-3 pr-4">Its ASCII code number</td>
                <td className="py-3 font-bold">53 (ASCII code of '5')</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="py-3 pr-4 font-mono font-bold text-purple-600">STR_TO_NUM("5")</td>
                <td className="py-3 pr-4">A string of digits</td>
                <td className="py-3 pr-4">The actual number value</td>
                <td className="py-3 font-bold">5 (the number five)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="font-bold text-red-800 mb-2">Key Difference</p>
          <p className="text-red-700 text-sm">
            <code className="bg-red-100 px-1 rounded">ASC('5')</code> = <strong>53</strong> (the ASCII code). 
            <code className="bg-red-100 px-1 rounded ml-2">STR_TO_NUM("5")</code> = <strong>5</strong> (the number). 
            Totally different! ASC gives the internal character code, STR_TO_NUM gives the human-readable number value.
          </p>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">{"\uD83D\uDCA1"} Exam Memory Aid</p>
        <p className="text-amber-900 mt-1">
          <strong>ASC</strong> = <strong>A</strong>SCII <strong>C</strong>ode — gives you the internal code number. 
          <strong> CHR</strong> = <strong>CH</strong>a<strong>R</strong>acter — gives you back the character. 
          They're always used together for encryption tasks. 
          <strong> STR_TO_NUM / NUM_TO_STR</strong> = for when you're converting "42" the text to 42 the number or vice versa.
        </p>
      </div>
    </div>
  );
}
