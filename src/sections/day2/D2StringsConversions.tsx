import CodeBlock from '../../components/CodeBlock';

export default function D2StringsConversions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔗 String Operations & Type Conversions</h1>
      <p className="text-gray-500 mb-6 text-lg">Joining strings together and converting between data types</p>

      {/* STRING CONCATENATION */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">String Concatenation — The & Operator</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>Concatenation</strong> means <strong>joining strings together</strong> to make a longer string. 
          In Cambridge pseudocode, you use the <code className="bg-indigo-100 px-2 py-0.5 rounded font-bold text-indigo-700">&</code> (ampersand) symbol.
        </p>

        <div className="bg-indigo-50 p-5 rounded-xl mb-6 border border-indigo-100">
          <p className="font-mono text-lg text-indigo-900 font-bold text-center">
            Result ← String1 & String2
          </p>
          <p className="text-center text-indigo-600 text-sm mt-2">
            Joins String1 and String2 into one combined string
          </p>
        </div>

        <CodeBlock title="String Concatenation Examples" code={`DECLARE FirstName : STRING
DECLARE LastName : STRING
DECLARE FullName : STRING

FirstName ← "Ali"
LastName ← "Khan"

// Join them with a space in between
FullName ← FirstName & " " & LastName
// FullName now contains "Ali Khan"

OUTPUT FullName
// Outputs: Ali Khan

// You can chain multiple concatenations
DECLARE Greeting : STRING
Greeting ← "Hello, " & FirstName & "! Welcome to " & "our school."
// Greeting = "Hello, Ali! Welcome to our school."
OUTPUT Greeting`} />

        <div className="warning-box mt-4 mb-6">
          <p className="font-bold text-red-800">⚠️ Don't forget the space!</p>
          <p className="text-red-700 mt-1">
            <code>FirstName & LastName</code> gives <code>"AliKhan"</code> — no space!<br />
            <code>FirstName & " " & LastName</code> gives <code>"Ali Khan"</code> — with space! ✓<br />
            You must <strong>manually add</strong> the space as a separate string <code>" "</code>.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">Concatenation vs OUTPUT with Commas</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          These are <strong>different things</strong>! Don't confuse them:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2">& (Concatenation)</h4>
            <p className="text-blue-600 text-sm mb-2">Creates a <strong>new string</strong> by joining</p>
            <pre className="text-sm font-mono bg-white p-2 rounded text-blue-800">
{`FullName ← First & " " & Last
// FullName is now ONE string
// "Ali Khan"`}</pre>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">, (Comma in OUTPUT)</h4>
            <p className="text-green-600 text-sm mb-2">Just <strong>displays</strong> things side by side</p>
            <pre className="text-sm font-mono bg-white p-2 rounded text-green-800">
{`OUTPUT First, " ", Last
// Displays: Ali Khan
// But doesn't create a variable`}</pre>
          </div>
        </div>

        <div className="tip-box">
          <p className="font-bold text-amber-800">📝 When to use &</p>
          <p className="text-amber-900 mt-1">
            Use <code>&</code> when you need to <strong>store</strong> the combined result in a variable. 
            Use commas in OUTPUT when you just want to <strong>display</strong> values together.
          </p>
        </div>
      </div>

      {/* CONCATENATION WITH NON-STRINGS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Concatenation Only Works with Strings!</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          You can only use <code>&</code> to join <strong>strings with strings</strong>. 
          If you want to join a number with a string, you must <strong>convert the number to a string first</strong>. 
          This is where type conversions come in!
        </p>

        <CodeBlock title="The Problem" code={`DECLARE Name : STRING
DECLARE Age : INTEGER
DECLARE Message : STRING

Name ← "Ali"
Age ← 17

// THIS WOULD BE WRONG:
// Message ← Name & " is " & Age & " years old"
// Can't concatenate INTEGER with STRING!

// YOU NEED TO CONVERT FIRST:
Message ← Name & " is " & NUM_TO_STR(Age) & " years old"
// Message = "Ali is 17 years old"  ✓`} />
      </div>

      {/* TYPE CONVERSIONS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 Type Conversions (NEW at A Level!)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Type conversion means <strong>changing data from one type to another</strong>. 
          This was NOT required at O Level, but it IS required at A Level. 
          There are two main conversion functions you must know:
        </p>

        {/* NUM_TO_STR */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">NUM_TO_STR() — Number → String</h3>
          <p className="text-blue-700 mb-3">
            Converts a number (INTEGER or REAL) into its STRING representation.
          </p>
          <div className="bg-white p-4 rounded-lg mb-3">
            <p className="font-mono text-blue-900 font-bold text-center text-lg">
              StringVar ← NUM_TO_STR(NumberValue)
            </p>
          </div>
          <div className="space-y-2 text-blue-700 text-sm">
            <p>• <code>NUM_TO_STR(42)</code> → <code>"42"</code> (the string, not the number)</p>
            <p>• <code>NUM_TO_STR(3.14)</code> → <code>"3.14"</code></p>
            <p>• <code>NUM_TO_STR(0)</code> → <code>"0"</code></p>
          </div>
        </div>

        <CodeBlock title="NUM_TO_STR in Action" code={`// Why do you need this?
// When you want to concatenate a number with a string!

DECLARE Score : INTEGER
DECLARE Message : STRING

Score ← 95
Message ← "Your score is: " & NUM_TO_STR(Score)
// Message = "Your score is: 95"
OUTPUT Message

// Another example — building an output string
DECLARE Price : REAL
DECLARE Output : STRING

Price ← 29.99
Output ← "Total: $" & NUM_TO_STR(Price)
// Output = "Total: $29.99"`} />

        {/* STR_TO_NUM */}
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mb-6 mt-6">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">STR_TO_NUM() — String → Number</h3>
          <p className="text-emerald-700 mb-3">
            Converts a string that contains a number into an actual INTEGER or REAL value so you can do maths with it.
          </p>
          <div className="bg-white p-4 rounded-lg mb-3">
            <p className="font-mono text-emerald-900 font-bold text-center text-lg">
              NumberVar ← STR_TO_NUM(StringValue)
            </p>
          </div>
          <div className="space-y-2 text-emerald-700 text-sm">
            <p>• <code>STR_TO_NUM("42")</code> → <code>42</code> (the number)</p>
            <p>• <code>STR_TO_NUM("3.14")</code> → <code>3.14</code></p>
            <p>• <code>STR_TO_NUM("hello")</code> → ERROR! Can't convert text to a number</p>
          </div>
        </div>

        <CodeBlock title="STR_TO_NUM in Action" code={`// Why do you need this?
// When you read input that's a string but you need a number

DECLARE NumStr : STRING
DECLARE Num : INTEGER
DECLARE Result : INTEGER

NumStr ← "42"

// Can't do maths with a string!
// Result ← NumStr + 8  // WRONG — "42" is a string!

// Convert first, then do maths
Num ← STR_TO_NUM(NumStr)
Result ← Num + 8
// Result = 50  ✓

OUTPUT "Result: ", Result

// Another example — extracting digits from a string
DECLARE PhoneDigit : STRING
DECLARE DigitValue : INTEGER

PhoneDigit ← "7"
DigitValue ← STR_TO_NUM(PhoneDigit)
// Now you can do maths with it`} />
      </div>

      {/* WHY TYPE CONVERSIONS MATTER */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Type Conversions Are Important</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">1️⃣</span>
            <div>
              <h4 className="font-bold text-gray-800">Building output messages</h4>
              <p className="text-gray-600">When you want to include a number inside a string message, 
              you need <code>NUM_TO_STR()</code> to convert the number first before using <code>&</code>.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">2️⃣</span>
            <div>
              <h4 className="font-bold text-gray-800">Processing string input as numbers</h4>
              <p className="text-gray-600">If you read individual characters from a string and they happen 
              to be digits, you need <code>STR_TO_NUM()</code> before doing maths.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">3️⃣</span>
            <div>
              <h4 className="font-bold text-gray-800">Data validation</h4>
              <p className="text-gray-600">Sometimes you read data as a string, validate it, then convert 
              it to a number for processing.</p>
            </div>
          </div>
        </div>

        <CodeBlock title="Complete Example — Putting It All Together" code={`// Program to input two numbers as strings,
// convert them, add them, and display the result

DECLARE Input1 : STRING
DECLARE Input2 : STRING
DECLARE Num1 : INTEGER
DECLARE Num2 : INTEGER
DECLARE Sum : INTEGER
DECLARE Result : STRING

OUTPUT "Enter first number: "
INPUT Input1
OUTPUT "Enter second number: "
INPUT Input2

// Convert strings to numbers
Num1 ← STR_TO_NUM(Input1)
Num2 ← STR_TO_NUM(Input2)

// Do the calculation
Sum ← Num1 + Num2

// Build the result message
Result ← Input1 & " + " & Input2 & " = " & NUM_TO_STR(Sum)
OUTPUT Result
// If user entered "25" and "17", outputs: 25 + 17 = 42`} />
      </div>

      {/* QUICK REFERENCE */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Operation</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Syntax</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Input → Output</th>
                <th className="py-3 text-gray-600 font-bold">When to Use</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Concatenation</td>
                <td className="py-3 pr-4 font-mono">&</td>
                <td className="py-3 pr-4 font-mono">"Hi" & "!" → "Hi!"</td>
                <td className="py-3">Joining strings together</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Num to String</td>
                <td className="py-3 pr-4 font-mono">NUM_TO_STR()</td>
                <td className="py-3 pr-4 font-mono">42 → "42"</td>
                <td className="py-3">Before concatenating numbers</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">String to Num</td>
                <td className="py-3 pr-4 font-mono">STR_TO_NUM()</td>
                <td className="py-3 pr-4 font-mono">"42" → 42</td>
                <td className="py-3">Before doing maths with string data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">📝 Exam Definitions (MEMORISE)</p>
        <ul className="text-amber-900 mt-2 space-y-2">
          <li>• <strong>Concatenation</strong>: "Joining two or more strings together to form a single string"</li>
          <li>• <strong>Type conversion/casting</strong>: "Converting a value from one data type to another"</li>
        </ul>
      </div>
    </div>
  );
}
