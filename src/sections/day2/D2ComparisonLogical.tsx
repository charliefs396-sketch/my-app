import CodeBlock from '../../components/CodeBlock';

export default function D2ComparisonLogical() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">⚖️ Comparison & Logical Operators</h1>
      <p className="text-gray-500 mb-6 text-lg">How to compare values and combine conditions</p>

      {/* COMPARISON OPERATORS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Comparison Operators</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Comparison operators <strong>compare two values</strong> and give back a <strong>BOOLEAN</strong> result — 
          either <code className="bg-green-100 px-1 rounded text-green-700">TRUE</code> or <code className="bg-red-100 px-1 rounded text-red-700">FALSE</code>. 
          You use them in IF statements, WHILE loops, and REPEAT UNTIL loops.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Operator</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Meaning</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Example</th>
                <th className="py-3 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">=</td>
                <td className="py-3 pr-4">Equal to</td>
                <td className="py-3 pr-4 font-mono">5 = 5</td>
                <td className="py-3 font-bold text-green-600">TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">&lt;&gt;</td>
                <td className="py-3 pr-4">Not equal to</td>
                <td className="py-3 pr-4 font-mono">5 &lt;&gt; 3</td>
                <td className="py-3 font-bold text-green-600">TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">&lt;</td>
                <td className="py-3 pr-4">Less than</td>
                <td className="py-3 pr-4 font-mono">3 &lt; 5</td>
                <td className="py-3 font-bold text-green-600">TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">&gt;</td>
                <td className="py-3 pr-4">Greater than</td>
                <td className="py-3 pr-4 font-mono">3 &gt; 5</td>
                <td className="py-3 font-bold text-red-600">FALSE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">&lt;=</td>
                <td className="py-3 pr-4">Less than or equal to</td>
                <td className="py-3 pr-4 font-mono">5 &lt;= 5</td>
                <td className="py-3 font-bold text-green-600">TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600 text-lg">&gt;=</td>
                <td className="py-3 pr-4">Greater than or equal to</td>
                <td className="py-3 pr-4 font-mono">3 &gt;= 5</td>
                <td className="py-3 font-bold text-red-600">FALSE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box mb-4">
          <p className="font-bold text-red-800">⚠️ CRITICAL — Don't confuse = and ←</p>
          <p className="text-red-700 mt-1">
            <code>=</code> is for <strong>COMPARISON</strong>: <code>IF Age = 17 THEN</code> — "Is Age equal to 17?"<br />
            <code>←</code> is for <strong>ASSIGNMENT</strong>: <code>Age ← 17</code> — "Store 17 into Age"<br />
            This is one of the <strong>most common mistakes</strong> at A Level. Get it right!
          </p>
        </div>

        <CodeBlock title="Comparison Operators in IF Statements" code={`DECLARE Age : INTEGER
DECLARE Score : REAL
DECLARE Password : STRING

INPUT Age
INPUT Score  
INPUT Password

// Equal to
IF Age = 18 THEN
    OUTPUT "You are exactly 18"
ENDIF

// Not equal to
IF Password <> "admin123" THEN
    OUTPUT "Wrong password!"
ENDIF

// Greater than / Less than
IF Score >= 50 THEN
    OUTPUT "You passed!"
ELSE
    OUTPUT "You failed"
ENDIF

// Less than or equal
IF Age <= 17 THEN
    OUTPUT "You are underage"
ENDIF`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">📝 Not Equal: &lt;&gt; NOT !=</p>
          <p className="text-amber-900 mt-1">
            In pseudocode, "not equal" is written as <code>&lt;&gt;</code>. 
            Do NOT write <code>!=</code> (that's Python/programming syntax). 
            The examiner wants <code>&lt;&gt;</code> specifically.
          </p>
        </div>
      </div>

      {/* LOGICAL OPERATORS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Logical Operators: AND, OR, NOT</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Logical operators <strong>combine or modify</strong> boolean conditions. They let you build 
          complex conditions from simple ones.
        </p>

        {/* AND */}
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">AND — Both must be TRUE</h3>
          <p className="text-blue-700 mb-3">
            <code>Condition1 AND Condition2</code> is TRUE <strong>only if BOTH</strong> conditions are TRUE.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-blue-200">
                  <th className="py-2 px-3 text-blue-700">A</th>
                  <th className="py-2 px-3 text-blue-700">B</th>
                  <th className="py-2 px-3 text-blue-700 font-bold">A AND B</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-blue-100">
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 font-bold text-green-600">TRUE ✓</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 font-bold text-red-600">FALSE</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 font-bold text-red-600">FALSE</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 font-bold text-red-600">FALSE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-blue-600 text-sm mt-2 italic">Think: "I need a ticket AND an ID to enter" — both required!</p>
        </div>

        {/* OR */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 mb-6">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">OR — At least one must be TRUE</h3>
          <p className="text-emerald-700 mb-3">
            <code>Condition1 OR Condition2</code> is TRUE <strong>if at least one</strong> condition is TRUE.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="py-2 px-3 text-emerald-700">A</th>
                  <th className="py-2 px-3 text-emerald-700">B</th>
                  <th className="py-2 px-3 text-emerald-700 font-bold">A OR B</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-emerald-100">
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 font-bold text-green-600">TRUE ✓</td>
                </tr>
                <tr className="border-b border-emerald-100">
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 font-bold text-green-600">TRUE ✓</td>
                </tr>
                <tr className="border-b border-emerald-100">
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 text-green-600">TRUE</td>
                  <td className="py-2 px-3 font-bold text-green-600">TRUE ✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 text-red-600">FALSE</td>
                  <td className="py-2 px-3 font-bold text-red-600">FALSE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-emerald-600 text-sm mt-2 italic">Think: "Pay by cash OR card" — either one works!</p>
        </div>

        {/* NOT */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 mb-6">
          <h3 className="text-xl font-bold text-amber-800 mb-2">NOT — Flips the value</h3>
          <p className="text-amber-700 mb-3">
            <code>NOT Condition</code> <strong>reverses</strong> the boolean value. TRUE becomes FALSE, FALSE becomes TRUE.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm max-w-xs">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="py-2 px-4 text-amber-700">A</th>
                  <th className="py-2 px-4 text-amber-700 font-bold">NOT A</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-amber-100">
                  <td className="py-2 px-4 text-green-600">TRUE</td>
                  <td className="py-2 px-4 font-bold text-red-600">FALSE</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-red-600">FALSE</td>
                  <td className="py-2 px-4 font-bold text-green-600">TRUE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-amber-600 text-sm mt-2 italic">Think: "NOT raining" = the opposite of raining!</p>
        </div>

        <CodeBlock title="Logical Operators — Real Examples" code={`// AND — checking a range (age between 13 and 19)
DECLARE Age : INTEGER
INPUT Age
IF Age >= 13 AND Age <= 19 THEN
    OUTPUT "You are a teenager"
ENDIF

// OR — checking multiple valid options
DECLARE Choice : CHAR
INPUT Choice
IF Choice = 'Y' OR Choice = 'y' THEN
    OUTPUT "You selected Yes"
ENDIF

// NOT — inverting a condition
DECLARE LoggedIn : BOOLEAN
LoggedIn ← FALSE
IF NOT LoggedIn THEN
    OUTPUT "Please log in first"
ENDIF

// Combining AND and OR (use brackets!)
DECLARE Score : INTEGER
DECLARE HasBonus : BOOLEAN
INPUT Score
INPUT HasBonus
IF (Score >= 90 AND HasBonus) OR Score >= 95 THEN
    OUTPUT "You get a gold star!"
ENDIF`} />
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Operator Precedence for Logical Operators</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          When you have multiple logical operators, they follow this order:
        </p>

        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-4">
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">1</span>
              <span><strong>Brackets</strong> <code className="bg-gray-100 px-1 rounded">( )</code> — always first</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">2</span>
              <span><strong>NOT</strong> — evaluated next</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">3</span>
              <span><strong>AND</strong> — then AND</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">4</span>
              <span><strong>OR</strong> — last</span>
            </li>
          </ol>
        </div>

        <CodeBlock title="Why Precedence Matters" code={`// Without brackets — AND is done before OR!
// This means: A OR (B AND C)
IF A OR B AND C THEN ...

// If you want (A OR B) AND C, use brackets!
IF (A OR B) AND C THEN ...

// Example: Is someone eligible for a discount?
// Under 12 OR over 65 AND has membership
// Without brackets: Under 12 OR (over 65 AND has membership)
// That's probably not what you want!

// Better with brackets:
IF (Age < 12 OR Age > 65) AND HasMembership THEN
    OUTPUT "Discount applied!"
ENDIF`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Golden Rule</p>
          <p className="text-amber-900 mt-1">
            <strong>Always use brackets</strong> when mixing AND and OR. It makes your intention clear 
            and prevents mistakes. The examiner loves clear, unambiguous code.
          </p>
        </div>
      </div>
    </div>
  );
}
