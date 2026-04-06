import CodeBlock from '../../components/CodeBlock';

export default function D4WhileLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔄 WHILE Loop (Pre-Condition)</h1>
      <p className="text-gray-500 mb-6 text-lg">Check FIRST, then run — might not run at all!</p>

      {/* What is WHILE */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a WHILE Loop?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A WHILE loop is a <strong>condition-controlled loop</strong> with a <strong>pre-condition</strong>. 
          That means it <strong>checks the condition BEFORE running the body</strong>. If the condition is 
          FALSE from the start, <strong>the body never runs at all</strong>.
        </p>

        <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 mb-4">
          <p className="font-bold text-purple-800 text-lg mb-2">📖 Exam Definition (Memorise This)</p>
          <p className="text-purple-900 text-lg italic">
            "A WHILE loop is a condition-controlled loop with a pre-condition. The condition is tested 
            before the loop body executes. If the condition is initially FALSE, the loop body will not execute at all. 
            The loop body may execute zero or more times."
          </p>
        </div>

        <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
          <h3 className="font-bold text-purple-800 mb-3">Think of it like this:</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm text-center">
              <p className="font-bold text-gray-800">1️⃣ Check: Is the condition TRUE?</p>
            </div>
            <p className="text-purple-600">↓</p>
            <div className="flex gap-8">
              <div className="bg-green-100 px-4 py-2 rounded-xl text-center">
                <p className="font-bold text-green-800">YES → Run the body</p>
                <p className="text-green-600 text-sm">Then go back to step 1</p>
              </div>
              <div className="bg-red-100 px-4 py-2 rounded-xl text-center">
                <p className="font-bold text-red-800">NO → Skip entirely</p>
                <p className="text-red-600 text-sm">Move to next line after ENDWHILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Syntax */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">WHILE Loop Syntax</h2>
        
        <CodeBlock code={`WHILE condition
   // body - code that repeats
   // MUST change something that affects the condition!
ENDWHILE`} />

        <div className="mt-4 overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Part</th>
                <th className="py-3 text-gray-600 font-bold">What It Does</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-purple-600">WHILE</td>
                <td className="py-3">Keyword + the condition to check BEFORE each iteration</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-purple-600">Body</td>
                <td className="py-3">The indented code that runs if the condition is TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-purple-600">ENDWHILE</td>
                <td className="py-3">Marks the end of the loop — goes back up to check the condition again</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box">
          <p className="font-bold text-red-800">⚠️ It's ENDWHILE — one word!</p>
          <p className="text-red-900 mt-1 text-sm">
            Not <code className="bg-red-100 px-1 rounded">END WHILE</code> (two words), 
            not <code className="bg-red-100 px-1 rounded">WEND</code>, 
            not <code className="bg-red-100 px-1 rounded">LOOP</code>. 
            Just <strong>ENDWHILE</strong>. One word, no space.
          </p>
        </div>
      </div>

      {/* Examples with Traces */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 1: Password Check</h2>
        
        <CodeBlock code={`DECLARE Password : STRING
Password ← ""

WHILE Password <> "secret"
   OUTPUT "Enter password: "
   INPUT Password
ENDWHILE

OUTPUT "Access granted!"`} />

        <h3 className="text-lg font-bold text-gray-700 mt-4 mb-3">Trace — User enters "hello", then "wrong", then "secret":</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">Step</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Password</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Condition: Password &lt;&gt; "secret"</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100 bg-blue-50">
                <td className="py-2 px-4">Start</td>
                <td className="py-2 px-4 font-mono">""</td>
                <td className="py-2 px-4 text-green-600 font-bold">TRUE (empty is not "secret")</td>
                <td className="py-2 px-4">Enter loop</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">1st input</td>
                <td className="py-2 px-4 font-mono">"hello"</td>
                <td className="py-2 px-4 text-green-600 font-bold">TRUE ("hello" is not "secret")</td>
                <td className="py-2 px-4">Loop again</td>
              </tr>
              <tr className="border-b border-gray-100 bg-blue-50">
                <td className="py-2 px-4">2nd input</td>
                <td className="py-2 px-4 font-mono">"wrong"</td>
                <td className="py-2 px-4 text-green-600 font-bold">TRUE ("wrong" is not "secret")</td>
                <td className="py-2 px-4">Loop again</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-2 px-4">3rd input</td>
                <td className="py-2 px-4 font-mono">"secret"</td>
                <td className="py-2 px-4 text-red-600 font-bold">FALSE ("secret" = "secret"!)</td>
                <td className="py-2 px-4 font-bold">Exit loop → "Access granted!"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Why we initialise Password ← ""</p>
          <p className="text-amber-900 text-sm mt-1">
            We set Password to an empty string <strong>before</strong> the loop. If we didn't, the variable 
            would be undefined when the WHILE checks its condition. The empty string ensures the condition 
            <code className="bg-amber-100 px-1 rounded">Password &lt;&gt; "secret"</code> is TRUE, so we enter the loop.
          </p>
        </div>
      </div>

      {/* Zero executions example */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 2: The "Zero Times" Scenario 🎯</h2>
        <p className="text-gray-700 mb-4">This is what makes WHILE special — it might not run AT ALL:</p>
        
        <CodeBlock code={`DECLARE Number : INTEGER
Number ← 0

WHILE Number > 0
   OUTPUT Number
   Number ← Number - 1
ENDWHILE

OUTPUT "Done"`} />

        <div className="bg-red-50 p-5 rounded-xl border border-red-200 mt-4">
          <p className="font-bold text-red-800 text-lg mb-2">What happens?</p>
          <p className="text-red-900">
            Number starts at 0. The condition is <code className="bg-red-100 px-1 rounded">0 &gt; 0</code> 
            which is <strong>FALSE</strong>. So the loop body <strong>NEVER runs</strong>. 
            The program jumps straight to <code className="bg-red-100 px-1 rounded">OUTPUT "Done"</code>.
          </p>
          <p className="text-red-800 mt-2 font-bold text-sm">
            🎯 This is the KEY difference between WHILE and REPEAT that the exam tests!
          </p>
        </div>
      </div>

      {/* Example 3: With counter */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 3: Password with Max Attempts</h2>
        <p className="text-gray-700 mb-4">This is a classic exam question — combining WHILE with a counter:</p>
        
        <CodeBlock code={`DECLARE Password : STRING
DECLARE Attempts : INTEGER
DECLARE LoggedIn : BOOLEAN

Password ← ""
Attempts ← 0
LoggedIn ← FALSE

WHILE (Password <> "secret") AND (Attempts < 3)
   Attempts ← Attempts + 1
   OUTPUT "Attempt ", Attempts, " of 3"
   OUTPUT "Enter password: "
   INPUT Password
ENDWHILE

IF Password = "secret"
   THEN
      LoggedIn ← TRUE
      OUTPUT "Access granted!"
   ELSE
      OUTPUT "Account locked! Too many failed attempts."
ENDIF`} />

        <div className="bg-gray-50 p-4 rounded-xl mt-4">
          <p className="font-bold text-gray-700 mb-2">Why this works:</p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            <li>The loop runs WHILE two conditions are BOTH true: wrong password AND under 3 attempts</li>
            <li>If user enters correct password → first condition becomes FALSE → loop stops</li>
            <li>If user uses all 3 attempts → second condition becomes FALSE → loop stops</li>
            <li>After the loop, we check WHY it stopped — correct password or too many attempts?</li>
          </ul>
        </div>
      </div>

      {/* Example 4: Reading data */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 4: Sentinel Value (Reading Until Done)</h2>
        <p className="text-gray-700 mb-4">
          A <strong>sentinel value</strong> is a special value that means "stop". This pattern is very common in exams:
        </p>
        
        <CodeBlock code={`// Keep reading numbers until user enters -1
DECLARE Number : INTEGER
DECLARE Total : INTEGER
DECLARE Count : INTEGER

Total ← 0
Count ← 0

OUTPUT "Enter a number (-1 to stop): "
INPUT Number

WHILE Number <> -1
   Total ← Total + Number
   Count ← Count + 1
   OUTPUT "Enter a number (-1 to stop): "
   INPUT Number
ENDWHILE

IF Count > 0
   THEN
      OUTPUT "Average: ", Total / Count
   ELSE
      OUTPUT "No numbers entered"
ENDIF`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Notice the INPUT pattern!</p>
          <p className="text-amber-900 text-sm mt-1">
            There are <strong>TWO INPUT statements</strong> — one BEFORE the loop (to get the first value to check) 
            and one INSIDE the loop (to get the next value). This is called <strong>"read-ahead"</strong> and is 
            a classic pattern. The exam expects you to know it!
          </p>
        </div>
      </div>

      {/* WHILE vs FOR */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">When to Use WHILE Instead of FOR</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-3">✅ Use FOR when:</h3>
            <ul className="space-y-2 text-indigo-700 text-sm">
              <li className="flex items-start gap-2">
                <span>🔢</span>
                <span>You know the exact number of repetitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔢</span>
                <span>"Repeat this 10 times"</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔢</span>
                <span>"Go through items 1 to N"</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔢</span>
                <span>"Process all 30 students"</span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-3">✅ Use WHILE when:</h3>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li className="flex items-start gap-2">
                <span>🔄</span>
                <span>You DON'T know how many repetitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔄</span>
                <span>"Keep going until user types 'quit'"</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔄</span>
                <span>"Read data until end of file"</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔄</span>
                <span>The loop might not need to run at all</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Common WHILE Mistakes ❌</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-2">Mistake 1: Infinite Loop (forgetting to update the condition)</p>
            <CodeBlock code={`// ❌ WRONG - This loops forever!
DECLARE X : INTEGER
X ← 1
WHILE X <= 10
   OUTPUT X
   // Forgot to add X ← X + 1
   // X never changes, so X <= 10 is ALWAYS true!
ENDWHILE`} />
            <p className="text-red-700 text-sm mt-2">
              <strong>Fix:</strong> Always make sure something inside the loop <strong>changes the condition</strong>. 
              Add <code className="bg-red-100 px-1 rounded">X ← X + 1</code> inside the loop.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-2">Mistake 2: Using = instead of &lt;&gt;</p>
            <CodeBlock code={`// ❌ WRONG
WHILE Password = "secret"   // This means "while correct"!
   INPUT Password            // That's backwards!
ENDWHILE

// ✅ CORRECT
WHILE Password <> "secret"  // While NOT correct, keep asking
   INPUT Password
ENDWHILE`} />
          </div>

          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-2">Mistake 3: Writing END WHILE (two words)</p>
            <p className="text-red-700 text-sm">
              ❌ <code className="bg-red-100 px-1 rounded">END WHILE</code> — two words = wrong<br/>
              ✅ <code className="bg-green-100 px-1 rounded">ENDWHILE</code> — one word = correct
            </p>
          </div>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 WHILE Loop Golden Rule</p>
        <p className="text-amber-900 mt-1">
          The condition says "keep going WHILE this is true". When the condition becomes FALSE, the loop stops. 
          So if you want to loop until the password is correct, the condition is 
          <code className="bg-amber-100 px-1 rounded">Password &lt;&gt; "secret"</code> — meaning "keep going while it's NOT correct".
        </p>
      </div>
    </div>
  );
}
