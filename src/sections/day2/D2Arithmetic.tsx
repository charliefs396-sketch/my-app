import CodeBlock from '../../components/CodeBlock';

export default function D2Arithmetic() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📐 Arithmetic Operators</h1>
      <p className="text-gray-500 mb-6 text-lg">The maths operators — especially DIV and MOD which examiners LOVE</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Basic Four</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          You already know these from O Level, but let's be precise:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Operator</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Symbol</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Example</th>
                <th className="py-3 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-mono">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-sans font-medium">Addition</td>
                <td className="py-3 pr-4 text-indigo-600 font-bold">+</td>
                <td className="py-3 pr-4">10 + 3</td>
                <td className="py-3 font-bold">13</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-sans font-medium">Subtraction</td>
                <td className="py-3 pr-4 text-indigo-600 font-bold">-</td>
                <td className="py-3 pr-4">10 - 3</td>
                <td className="py-3 font-bold">7</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-sans font-medium">Multiplication</td>
                <td className="py-3 pr-4 text-indigo-600 font-bold">*</td>
                <td className="py-3 pr-4">10 * 3</td>
                <td className="py-3 font-bold">30</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-sans font-medium">Division</td>
                <td className="py-3 pr-4 text-indigo-600 font-bold">/</td>
                <td className="py-3 pr-4">10 / 3</td>
                <td className="py-3 font-bold">3.333...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <p className="font-bold text-amber-800">📝 Important</p>
          <p className="text-amber-900 mt-1">
            Regular division <code>/</code> gives a <strong>REAL</strong> result (with decimals). 
            If you divide <code>10 / 3</code>, you get <code>3.333...</code>, NOT <code>3</code>. 
            If you want just the whole number part, you need <strong>DIV</strong>.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ DIV — Integer Division (THE BIG ONE)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <code className="bg-indigo-100 px-2 py-0.5 rounded font-bold text-indigo-700">DIV</code> divides 
          two numbers and gives you <strong>only the whole number part</strong>. It throws away any decimal.
        </p>

        <div className="bg-indigo-50 p-5 rounded-xl mb-6 border border-indigo-100">
          <p className="font-mono text-lg text-indigo-900 font-bold text-center">
            Result ← Number1 DIV Number2
          </p>
          <p className="text-center text-indigo-600 text-sm mt-2">
            "How many times does Number2 fit <strong>completely</strong> into Number1?"
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-indigo-200 bg-indigo-50">
                <th className="py-3 px-4 text-indigo-700 font-bold">Expression</th>
                <th className="py-3 px-4 text-indigo-700 font-bold">Think of it as...</th>
                <th className="py-3 px-4 text-indigo-700 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-mono">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">17 DIV 5</td>
                <td className="py-3 px-4 font-sans text-gray-500">17 ÷ 5 = 3.4 → take the 3</td>
                <td className="py-3 px-4 font-bold text-indigo-600">3</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">10 DIV 3</td>
                <td className="py-3 px-4 font-sans text-gray-500">10 ÷ 3 = 3.33 → take the 3</td>
                <td className="py-3 px-4 font-bold text-indigo-600">3</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">25 DIV 10</td>
                <td className="py-3 px-4 font-sans text-gray-500">25 ÷ 10 = 2.5 → take the 2</td>
                <td className="py-3 px-4 font-bold text-indigo-600">2</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">7 DIV 7</td>
                <td className="py-3 px-4 font-sans text-gray-500">7 ÷ 7 = 1.0 → take the 1</td>
                <td className="py-3 px-4 font-bold text-indigo-600">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">3 DIV 5</td>
                <td className="py-3 px-4 font-sans text-gray-500">3 ÷ 5 = 0.6 → take the 0</td>
                <td className="py-3 px-4 font-bold text-indigo-600">0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">100 DIV 7</td>
                <td className="py-3 px-4 font-sans text-gray-500">100 ÷ 7 = 14.28 → take the 14</td>
                <td className="py-3 px-4 font-bold text-indigo-600">14</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock title="DIV in Action" code={`DECLARE Hours : INTEGER
DECLARE TotalMinutes : INTEGER

TotalMinutes ← 150

// How many complete hours in 150 minutes?
Hours ← TotalMinutes DIV 60
// 150 DIV 60 = 2 (two complete hours)

OUTPUT "Hours: ", Hours
// Outputs: Hours: 2`} />
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ MOD — Remainder (THE OTHER BIG ONE)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <code className="bg-purple-100 px-2 py-0.5 rounded font-bold text-purple-700">MOD</code> divides 
          two numbers and gives you <strong>only the remainder</strong>. It's the "leftover" after division.
        </p>

        <div className="bg-purple-50 p-5 rounded-xl mb-6 border border-purple-100">
          <p className="font-mono text-lg text-purple-900 font-bold text-center">
            Result ← Number1 MOD Number2
          </p>
          <p className="text-center text-purple-600 text-sm mt-2">
            "What's <strong>left over</strong> after dividing Number1 by Number2?"
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-purple-200 bg-purple-50">
                <th className="py-3 px-4 text-purple-700 font-bold">Expression</th>
                <th className="py-3 px-4 text-purple-700 font-bold">Think of it as...</th>
                <th className="py-3 px-4 text-purple-700 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-mono">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">17 MOD 5</td>
                <td className="py-3 px-4 font-sans text-gray-500">17 ÷ 5 = 3 remainder <strong>2</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">2</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">10 MOD 3</td>
                <td className="py-3 px-4 font-sans text-gray-500">10 ÷ 3 = 3 remainder <strong>1</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">25 MOD 10</td>
                <td className="py-3 px-4 font-sans text-gray-500">25 ÷ 10 = 2 remainder <strong>5</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">5</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">7 MOD 7</td>
                <td className="py-3 px-4 font-sans text-gray-500">7 ÷ 7 = 1 remainder <strong>0</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">3 MOD 5</td>
                <td className="py-3 px-4 font-sans text-gray-500">3 ÷ 5 = 0 remainder <strong>3</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">3</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">100 MOD 7</td>
                <td className="py-3 px-4 font-sans text-gray-500">100 ÷ 7 = 14 remainder <strong>2</strong></td>
                <td className="py-3 px-4 font-bold text-purple-600">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock title="MOD in Action" code={`DECLARE RemainingMinutes : INTEGER
DECLARE TotalMinutes : INTEGER

TotalMinutes ← 150

// What's left over after taking out complete hours?
RemainingMinutes ← TotalMinutes MOD 60
// 150 MOD 60 = 30 (thirty minutes left over)

OUTPUT "Remaining minutes: ", RemainingMinutes
// Outputs: Remaining minutes: 30`} />
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 The DIV + MOD Connection</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          DIV and MOD are <strong>partners</strong>. They split a division into two parts. 
          Here's the golden rule:
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6 border border-indigo-100">
          <p className="font-mono text-lg text-gray-800 font-bold text-center mb-2">
            Number = (Number DIV Divisor) × Divisor + (Number MOD Divisor)
          </p>
          <p className="text-center text-gray-600 text-sm">
            Example: 17 = (17 DIV 5) × 5 + (17 MOD 5) = 3 × 5 + 2 = 15 + 2 = 17 ✓
          </p>
        </div>

        <CodeBlock title="DIV + MOD Together — Time Conversion" code={`// Convert 150 minutes into hours and minutes
DECLARE TotalMinutes : INTEGER
DECLARE Hours : INTEGER
DECLARE Minutes : INTEGER

TotalMinutes ← 150

Hours ← TotalMinutes DIV 60      // 150 DIV 60 = 2
Minutes ← TotalMinutes MOD 60    // 150 MOD 60 = 30

OUTPUT Hours, " hours and ", Minutes, " minutes"
// Outputs: 2 hours and 30 minutes`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">📝 Exam Definition (MEMORISE)</p>
          <ul className="text-amber-900 mt-2 space-y-1">
            <li>• <strong>DIV</strong>: "Returns the integer part (quotient) of a division"</li>
            <li>• <strong>MOD</strong>: "Returns the remainder of an integer division"</li>
          </ul>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Classic Uses of DIV and MOD</h2>
        <p className="text-gray-700 mb-4">These patterns come up again and again in exams:</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">1. Check if a number is Even or Odd</h3>
            <CodeBlock code={`// If remainder when dividing by 2 is 0, it's even
DECLARE Num : INTEGER
INPUT Num

IF Num MOD 2 = 0 THEN
    OUTPUT "Even"
ELSE
    OUTPUT "Odd"
ENDIF`} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">2. Check if a number is divisible by another</h3>
            <CodeBlock code={`// If MOD gives 0, it divides perfectly
IF Num MOD 3 = 0 THEN
    OUTPUT Num, " is divisible by 3"
ENDIF`} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">3. Extract the last digit of a number</h3>
            <CodeBlock code={`// MOD 10 gives the last digit
DECLARE Num : INTEGER
DECLARE LastDigit : INTEGER

Num ← 4567
LastDigit ← Num MOD 10     // gives 7
OUTPUT LastDigit`} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">4. Remove the last digit of a number</h3>
            <CodeBlock code={`// DIV 10 removes the last digit
DECLARE Num : INTEGER
Num ← 4567
Num ← Num DIV 10     // gives 456`} />
          </div>
        </div>

        <div className="warning-box mt-6">
          <p className="font-bold text-red-800">⚠️ Common Exam Trap</p>
          <p className="text-red-700 mt-1">
            Don't confuse DIV and MOD! Remember: <strong>DIV = Divide (whole part)</strong>, 
            <strong> MOD = Modulo (remainder/leftover)</strong>. If you mix them up on a trace table, 
            everything after goes wrong.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔢 Operator Precedence (Order of Operations)</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Just like in maths, operators follow an order. This is called <strong>precedence</strong>:
        </p>

        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-4">
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">1</span>
              <span><strong>Brackets</strong> <code className="bg-gray-100 px-1 rounded">( )</code> — always done first</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">2</span>
              <span><strong>Multiply / Divide / DIV / MOD</strong> <code className="bg-gray-100 px-1 rounded">* / DIV MOD</code></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">3</span>
              <span><strong>Add / Subtract</strong> <code className="bg-gray-100 px-1 rounded">+ -</code></span>
            </li>
          </ol>
        </div>

        <CodeBlock title="Precedence Examples" code={`// Without brackets: * is done before +
Result ← 2 + 3 * 4        // = 2 + 12 = 14

// With brackets: brackets first
Result ← (2 + 3) * 4      // = 5 * 4 = 20

// MOD has same precedence as *
Result ← 10 + 17 MOD 5    // = 10 + 2 = 12
Result ← (10 + 17) MOD 5  // = 27 MOD 5 = 2`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Exam Tip</p>
          <p className="text-amber-900 mt-1">
            When in doubt, <strong>use brackets</strong>! They make your code clearer AND ensure the right 
            order. The examiner will never penalise you for using brackets.
          </p>
        </div>
      </div>
    </div>
  );
}
