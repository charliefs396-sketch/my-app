import CodeBlock from '../../components/CodeBlock';

export default function D4RepeatLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔁 REPEAT Loop (Post-Condition)</h1>
      <p className="text-gray-500 mb-6 text-lg">Run FIRST, check AFTER — always executes at least once!</p>

      {/* What is REPEAT */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a REPEAT Loop?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A REPEAT loop is a <strong>condition-controlled loop</strong> with a <strong>post-condition</strong>. 
          That means it runs the body <strong>FIRST</strong>, and checks the condition <strong>AFTER</strong>. 
          This guarantees the body runs <strong>at least once</strong>.
        </p>

        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 mb-4">
          <p className="font-bold text-emerald-800 text-lg mb-2">📖 Exam Definition (Memorise This)</p>
          <p className="text-emerald-900 text-lg italic">
            "A REPEAT...UNTIL loop is a condition-controlled loop with a post-condition. The loop body executes first, 
            then the condition is tested. The loop body always executes at least once. The loop continues until the 
            condition becomes TRUE."
          </p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-3">How it works:</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm text-center">
              <p className="font-bold text-gray-800">1️⃣ Run the body (always happens!)</p>
            </div>
            <p className="text-emerald-600">↓</p>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm text-center">
              <p className="font-bold text-gray-800">2️⃣ Check: Is the UNTIL condition TRUE?</p>
            </div>
            <p className="text-emerald-600">↓</p>
            <div className="flex gap-8">
              <div className="bg-red-100 px-4 py-2 rounded-xl text-center">
                <p className="font-bold text-red-800">NO → Go back to step 1</p>
                <p className="text-red-600 text-sm">Keep repeating</p>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-xl text-center">
                <p className="font-bold text-green-800">YES → Stop!</p>
                <p className="text-green-600 text-sm">Move to next line</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Syntax */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">REPEAT Loop Syntax</h2>
        
        <CodeBlock code={`REPEAT
   // body - code that repeats
   // runs AT LEAST ONCE before checking
UNTIL condition`} />

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
                <td className="py-3 pr-4 font-mono font-bold text-emerald-600">REPEAT</td>
                <td className="py-3">Keyword that starts the loop — body runs immediately</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-emerald-600">Body</td>
                <td className="py-3">The indented code that runs (at least once!)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-emerald-600">UNTIL condition</td>
                <td className="py-3">Checks the condition AFTER running — stops when condition is TRUE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box">
          <p className="font-bold text-red-800">🚨 UNTIL means "stop WHEN this is TRUE"</p>
          <p className="text-red-900 mt-1 text-sm">
            This is the OPPOSITE of WHILE! <br/>
            <strong>WHILE</strong> keeps going while the condition is <strong>TRUE</strong> (stops when FALSE)<br/>
            <strong>UNTIL</strong> keeps going while the condition is <strong>FALSE</strong> (stops when TRUE)<br/>
            This trips up SO many students. Pay close attention!
          </p>
        </div>
      </div>

      {/* WHILE vs UNTIL conditions */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">WHILE vs UNTIL — The Condition is OPPOSITE! ⚡</h2>
        <p className="text-gray-700 mb-4">This is the #1 source of confusion. Let's clear it up:</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">What You Want</th>
                <th className="py-3 px-4 text-gray-600 font-bold">WHILE Condition</th>
                <th className="py-3 px-4 text-gray-600 font-bold">UNTIL Condition</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Keep asking until correct password</td>
                <td className="py-3 px-4 font-mono text-purple-600">WHILE Password &lt;&gt; "secret"</td>
                <td className="py-3 px-4 font-mono text-emerald-600">UNTIL Password = "secret"</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4">Keep going until number is positive</td>
                <td className="py-3 px-4 font-mono text-purple-600">WHILE Number &lt;= 0</td>
                <td className="py-3 px-4 font-mono text-emerald-600">UNTIL Number &gt; 0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Keep going until user says "quit"</td>
                <td className="py-3 px-4 font-mono text-purple-600">WHILE Choice &lt;&gt; "quit"</td>
                <td className="py-3 px-4 font-mono text-emerald-600">UNTIL Choice = "quit"</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4">Keep going until mark is 0-100</td>
                <td className="py-3 px-4 font-mono text-purple-600">WHILE Mark &lt; 0 OR Mark &gt; 100</td>
                <td className="py-3 px-4 font-mono text-emerald-600">UNTIL Mark &gt;= 0 AND Mark &lt;= 100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">📌 Easy way to remember:</p>
          <p className="text-blue-700 mt-1">
            <strong>WHILE</strong> = "keep going WHILE this is true" (condition = what keeps it running)<br/>
            <strong>UNTIL</strong> = "keep going UNTIL this is true" (condition = what makes it stop)
          </p>
        </div>
      </div>

      {/* Example 1: Input Validation */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 1: Input Validation ⭐</h2>
        <p className="text-gray-700 mb-4">
          This is the <strong>#1 use case</strong> for REPEAT...UNTIL. Input validation means making sure 
          the user enters a valid value. You MUST ask at least once, so REPEAT is perfect!
        </p>
        
        <CodeBlock code={`// Get a mark between 0 and 100
DECLARE Mark : INTEGER

REPEAT
   OUTPUT "Enter a mark (0-100): "
   INPUT Mark
   IF Mark < 0 OR Mark > 100
      THEN
         OUTPUT "Invalid! Must be between 0 and 100."
   ENDIF
UNTIL Mark >= 0 AND Mark <= 100

OUTPUT "You entered: ", Mark`} />

        <h3 className="text-lg font-bold text-gray-700 mt-4 mb-3">Trace — User enters 150, then -5, then 75:</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">Iteration</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Mark</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Output</th>
                <th className="py-3 px-4 text-gray-600 font-bold">UNTIL: Mark &ge; 0 AND Mark &le; 100?</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-bold">1st</td>
                <td className="py-2 px-4 font-mono">150</td>
                <td className="py-2 px-4">"Invalid! Must be between 0 and 100."</td>
                <td className="py-2 px-4 text-red-600 font-bold">FALSE → repeat</td>
              </tr>
              <tr className="border-b border-gray-100 bg-blue-50">
                <td className="py-2 px-4 font-bold">2nd</td>
                <td className="py-2 px-4 font-mono">-5</td>
                <td className="py-2 px-4">"Invalid! Must be between 0 and 100."</td>
                <td className="py-2 px-4 text-red-600 font-bold">FALSE → repeat</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-2 px-4 font-bold">3rd</td>
                <td className="py-2 px-4 font-mono">75</td>
                <td className="py-2 px-4">"You entered: 75"</td>
                <td className="py-2 px-4 text-green-600 font-bold">TRUE → stop!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Example 2: Menu System */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 2: Menu System</h2>
        <p className="text-gray-700 mb-4">
          Menus should show at least once, then keep showing until the user chooses to quit:
        </p>
        
        <CodeBlock code={`DECLARE Choice : INTEGER

REPEAT
   OUTPUT "===== MENU ====="
   OUTPUT "1. Play Game"
   OUTPUT "2. View Scores"
   OUTPUT "3. Settings"
   OUTPUT "4. Quit"
   OUTPUT "================"
   OUTPUT "Enter choice: "
   INPUT Choice
   
   CASE OF Choice
      1 : OUTPUT "Starting game..."
      2 : OUTPUT "Showing scores..."
      3 : OUTPUT "Opening settings..."
      4 : OUTPUT "Goodbye!"
      OTHERWISE OUTPUT "Invalid choice!"
   ENDCASE

UNTIL Choice = 4

OUTPUT "Program ended."`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Why REPEAT is perfect for menus</p>
          <p className="text-amber-900 text-sm mt-1">
            You MUST show the menu at least once — otherwise how will the user know what to choose? 
            REPEAT guarantees the menu appears before checking if the user wants to quit. 
            This is a very common exam question!
          </p>
        </div>
      </div>

      {/* Example 3: Guessing Game */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example 3: Number Guessing Game</h2>
        
        <CodeBlock code={`DECLARE Secret : INTEGER
DECLARE Guess : INTEGER
DECLARE Attempts : INTEGER

Secret ← 42
Attempts ← 0

REPEAT
   OUTPUT "Guess the number (1-100): "
   INPUT Guess
   Attempts ← Attempts + 1
   
   IF Guess < Secret
      THEN
         OUTPUT "Too low! Try higher."
      ELSE
         IF Guess > Secret
            THEN
               OUTPUT "Too high! Try lower."
         ENDIF
   ENDIF
UNTIL Guess = Secret

OUTPUT "Correct! You got it in ", Attempts, " attempts!"`} />

        <div className="bg-gray-50 p-4 rounded-xl mt-4">
          <p className="font-bold text-gray-700 mb-2">Why REPEAT here?</p>
          <p className="text-gray-600 text-sm">
            The user must guess at least once — you can't check if they're right without them guessing first! 
            So REPEAT is the natural choice. The loop runs UNTIL the guess matches the secret number.
          </p>
        </div>
      </div>

      {/* The BIG Comparison */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚡ The Complete Comparison: FOR vs WHILE vs REPEAT</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">Feature</th>
                <th className="py-3 px-4 text-indigo-600 font-bold">FOR</th>
                <th className="py-3 px-4 text-purple-600 font-bold">WHILE</th>
                <th className="py-3 px-4 text-emerald-600 font-bold">REPEAT</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Type</td>
                <td className="py-3 px-4">Count-controlled</td>
                <td className="py-3 px-4">Condition-controlled</td>
                <td className="py-3 px-4">Condition-controlled</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 font-medium">Condition check</td>
                <td className="py-3 px-4">Built-in counter</td>
                <td className="py-3 px-4 font-bold text-purple-600">BEFORE (pre-condition)</td>
                <td className="py-3 px-4 font-bold text-emerald-600">AFTER (post-condition)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Minimum runs</td>
                <td className="py-3 px-4">Known in advance</td>
                <td className="py-3 px-4 font-bold text-purple-600">0 times possible</td>
                <td className="py-3 px-4 font-bold text-emerald-600">At least 1 time</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 font-medium">Know iterations?</td>
                <td className="py-3 px-4">YES — exact count</td>
                <td className="py-3 px-4">NO — depends on condition</td>
                <td className="py-3 px-4">NO — depends on condition</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Stops when</td>
                <td className="py-3 px-4">Counter passes end value</td>
                <td className="py-3 px-4">Condition becomes FALSE</td>
                <td className="py-3 px-4">Condition becomes TRUE</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 font-medium">End keyword</td>
                <td className="py-3 px-4 font-mono">NEXT Counter</td>
                <td className="py-3 px-4 font-mono">ENDWHILE</td>
                <td className="py-3 px-4 font-mono">UNTIL condition</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Best for</td>
                <td className="py-3 px-4 text-sm">Processing arrays, fixed repetitions</td>
                <td className="py-3 px-4 text-sm">Searching, reading files, sentinel values</td>
                <td className="py-3 px-4 text-sm">Input validation, menus, guessing games</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Decision flowchart */}
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-emerald-50 p-6 rounded-xl border">
          <h3 className="font-bold text-gray-800 text-xl mb-4 text-center">🎯 Which Loop Should I Use? (Decision Guide)</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm text-center max-w-md">
              <p className="font-bold text-gray-800">Do you know how many times to repeat?</p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-green-600 font-bold">YES ↓</span>
                <div className="bg-indigo-100 px-4 py-3 rounded-xl text-center">
                  <p className="font-bold text-indigo-800">Use FOR 🔢</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-red-600 font-bold">NO ↓</span>
                <div className="bg-white px-6 py-3 rounded-xl shadow-sm text-center">
                  <p className="font-bold text-gray-800 text-sm">Must it run at least once?</p>
                </div>
              </div>
            </div>
            <div className="flex gap-8 ml-32">
              <div className="flex flex-col items-center gap-2">
                <span className="text-green-600 font-bold">YES ↓</span>
                <div className="bg-emerald-100 px-4 py-3 rounded-xl text-center">
                  <p className="font-bold text-emerald-800">Use REPEAT 🔁</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-red-600 font-bold">NO ↓</span>
                <div className="bg-purple-100 px-4 py-3 rounded-xl text-center">
                  <p className="font-bold text-purple-800">Use WHILE 🔄</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Same problem, three ways */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Same Problem, Three Loop Types</h2>
        <p className="text-gray-700 mb-4">Output numbers 1 to 5 — written with each loop type:</p>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
            <h3 className="font-bold text-indigo-800 mb-2">🔢 FOR Version (Best Choice)</h3>
            <CodeBlock code={`FOR Counter ← 1 TO 5
   OUTPUT Counter
NEXT Counter`} />
            <p className="text-indigo-700 text-sm mt-2">✅ Best — we know it's exactly 5 times</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2">🔄 WHILE Version</h3>
            <CodeBlock code={`DECLARE Counter : INTEGER
Counter ← 1
WHILE Counter <= 5
   OUTPUT Counter
   Counter ← Counter + 1
ENDWHILE`} />
            <p className="text-purple-700 text-sm mt-2">Works but more code — you manage the counter yourself</p>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
            <h3 className="font-bold text-emerald-800 mb-2">🔁 REPEAT Version</h3>
            <CodeBlock code={`DECLARE Counter : INTEGER
Counter ← 1
REPEAT
   OUTPUT Counter
   Counter ← Counter + 1
UNTIL Counter > 5`} />
            <p className="text-emerald-700 text-sm mt-2">Works but more code — notice UNTIL Counter &gt; 5 (not &le; 5!)</p>
          </div>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 Exam Answer Tip</p>
        <p className="text-amber-900 mt-1">
          When the exam asks "justify which loop type" — don't just say the name. Say <strong>WHY</strong>:<br/>
          ✅ "REPEAT because the user must enter a value at least once before it can be validated"<br/>
          ✅ "FOR because we know there are exactly 30 students to process"<br/>
          ✅ "WHILE because the file might be empty, so we may not need to read any data"
        </p>
      </div>
    </div>
  );
}
