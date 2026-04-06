import CodeBlock from '../../components/CodeBlock';

export default function D3CaseStatement() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 CASE Statement</h1>
      <p className="text-gray-500 mb-6 text-lg">A cleaner way to choose from many fixed options</p>

      {/* What is CASE */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a CASE Statement?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A CASE statement is an alternative to nested IF statements. It's used when you have 
          <strong> one variable</strong> that you're checking against <strong>several specific values</strong>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-4">
          <p className="text-indigo-800 text-lg text-center font-bold mb-4">🛤️ When to use CASE vs IF</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 p-4 rounded-xl">
              <p className="font-bold text-indigo-800 mb-2">Use CASE when:</p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>✅ Checking ONE variable against specific values</li>
                <li>✅ The values are exact matches (1, 2, 3... or "A", "B", "C"...)</li>
                <li>✅ You have many options (3+)</li>
                <li>✅ Think: menus, day of week, grade letters</li>
              </ul>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <p className="font-bold text-indigo-800 mb-2">Use IF when:</p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>✅ Checking ranges (&gt;=, &lt;=, &gt;, &lt;)</li>
                <li>✅ Checking multiple different variables</li>
                <li>✅ Using AND, OR, NOT conditions</li>
                <li>✅ Think: age ranges, mark ranges, complex conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-gray-700 font-semibold mb-2">📚 Exam Definition (memorise this!):</p>
          <p className="text-gray-800 italic">
            "A CASE statement is a selection construct that allows the program to execute 
            different statements based on the value of a single variable or expression."
          </p>
        </div>
      </div>

      {/* CASE Syntax */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📏 CASE Syntax</h2>

        <CodeBlock
          title="CASE statement — basic format"
          code={`CASE OF VariableName
   Value1 : statement(s)
   Value2 : statement(s)
   Value3 : statement(s)
   OTHERWISE statement(s)
ENDCASE`}
        />

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">🔍 Breaking it down:</p>
          <div className="space-y-2 text-blue-700 text-sm">
            <p><code className="bg-blue-100 px-1 rounded font-bold">CASE OF VariableName</code> — starts the CASE block, tells it which variable to check</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">Value : statement</code> — if the variable equals this value, run this statement</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">OTHERWISE</code> — if NONE of the values matched, run this (like ELSE for IF)</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">ENDCASE</code> — marks the end. <strong>You MUST have this!</strong></p>
          </div>
        </div>
      </div>

      {/* Example 1: Menu */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Example 1: Simple Menu</h2>
        <p className="text-gray-700 mb-4">The classic CASE example — a menu system:</p>

        <CodeBlock
          title="Menu system using CASE"
          code={`DECLARE Choice : INTEGER

OUTPUT "===== MAIN MENU ====="
OUTPUT "1. Play Game"
OUTPUT "2. View Scores"
OUTPUT "3. Settings"
OUTPUT "4. Quit"
OUTPUT "Enter your choice: "
INPUT Choice

CASE OF Choice
   1 : OUTPUT "Starting game..."
   2 : OUTPUT "Loading scores..."
   3 : OUTPUT "Opening settings..."
   4 : OUTPUT "Goodbye!"
   OTHERWISE OUTPUT "Invalid choice!"
ENDCASE`}
        />

        <div className="mt-4 bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800 mb-2">📊 Trace: Choice = 2</p>
          <div className="text-green-700 text-sm font-mono space-y-1">
            <p>CASE OF Choice → Choice is 2</p>
            <p>Check: is Choice = 1? → NO</p>
            <p>Check: is Choice = 2? → <strong>YES</strong></p>
            <p>→ OUTPUT "Loading scores..." ✅</p>
            <p>→ Skip all other options, go to ENDCASE</p>
          </div>
        </div>

        <div className="mt-4 bg-orange-50 p-4 rounded-xl border border-orange-200">
          <p className="font-bold text-orange-800 mb-2">📊 Trace: Choice = 7</p>
          <div className="text-orange-700 text-sm font-mono space-y-1">
            <p>CASE OF Choice → Choice is 7</p>
            <p>Check: is Choice = 1? → NO</p>
            <p>Check: is Choice = 2? → NO</p>
            <p>Check: is Choice = 3? → NO</p>
            <p>Check: is Choice = 4? → NO</p>
            <p>→ None matched → OTHERWISE</p>
            <p>→ OUTPUT "Invalid choice!" ✅</p>
          </div>
        </div>
      </div>

      {/* Example 2: Day of week */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Example 2: Day of the Week</h2>

        <CodeBlock
          title="Day of week using CASE"
          code={`DECLARE DayNum : INTEGER
DECLARE DayName : STRING

OUTPUT "Enter day number (1-7): "
INPUT DayNum

CASE OF DayNum
   1 : DayName ← "Monday"
   2 : DayName ← "Tuesday"
   3 : DayName ← "Wednesday"
   4 : DayName ← "Thursday"
   5 : DayName ← "Friday"
   6 : DayName ← "Saturday"
   7 : DayName ← "Sunday"
   OTHERWISE DayName ← "Invalid day"
ENDCASE

OUTPUT "The day is: ", DayName`}
        />

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mt-4">
          <p className="font-bold text-amber-800">🤔 Why not use IF here?</p>
          <p className="text-amber-700 mt-1 text-sm">
            You COULD write this with 7 nested IFs — but it would be ugly and hard to read. 
            CASE is much cleaner when checking one variable against many specific values. 
            The examiner may even specify "use a CASE statement" in the question.
          </p>
        </div>
      </div>

      {/* Example 3: Multiple statements */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Example 3: Multiple Statements per Case</h2>
        <p className="text-gray-700 mb-4">You can have multiple lines of code for each case value:</p>

        <CodeBlock
          title="Calculator using CASE"
          code={`DECLARE Num1 : REAL
DECLARE Num2 : REAL
DECLARE Operator : CHAR
DECLARE Result : REAL

OUTPUT "Enter first number: "
INPUT Num1
OUTPUT "Enter operator (+, -, *, /): "
INPUT Operator
OUTPUT "Enter second number: "
INPUT Num2

CASE OF Operator
   '+' : Result ← Num1 + Num2
         OUTPUT Num1, " + ", Num2, " = ", Result
   '-' : Result ← Num1 - Num2
         OUTPUT Num1, " - ", Num2, " = ", Result
   '*' : Result ← Num1 * Num2
         OUTPUT Num1, " * ", Num2, " = ", Result
   '/' : IF Num2 = 0
            THEN
               OUTPUT "Error: Cannot divide by zero!"
            ELSE
               Result ← Num1 / Num2
               OUTPUT Num1, " / ", Num2, " = ", Result
         ENDIF
   OTHERWISE OUTPUT "Unknown operator!"
ENDCASE`}
        />

        <div className="mt-4 bg-purple-50 p-4 rounded-xl border border-purple-200">
          <p className="font-bold text-purple-800 mb-2">🧠 Notice:</p>
          <ul className="text-purple-700 text-sm space-y-1">
            <li>• Each case can have <strong>multiple lines</strong> of code</li>
            <li>• You can even put an <strong>IF statement inside a CASE</strong> (like the division by zero check)</li>
            <li>• CHAR values use <strong>single quotes</strong> ('+', '-', '*', '/')</li>
          </ul>
        </div>
      </div>

      {/* Example 4: With strings */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Example 4: CASE with Strings</h2>
        <p className="text-gray-700 mb-4">CASE works with strings too, not just numbers:</p>

        <CodeBlock
          title="CASE with STRING values"
          code={`DECLARE Grade : CHAR

OUTPUT "Enter grade (A/B/C/D): "
INPUT Grade

CASE OF Grade
   'A' : OUTPUT "Excellent! 90-100%"
   'B' : OUTPUT "Good! 80-89%"
   'C' : OUTPUT "Average. 70-79%"
   'D' : OUTPUT "Below average. 60-69%"
   OTHERWISE OUTPUT "Invalid grade entered"
ENDCASE`}
        />
      </div>

      {/* CASE vs Nested IF comparison */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 CASE vs Nested IF — Side by Side</h2>
        <p className="text-gray-700 mb-4">See how much cleaner CASE is for the same problem:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CodeBlock
              title="❌ Nested IF — messy for menus"
              code={`IF Choice = 1
   THEN
      OUTPUT "Play"
   ELSE
      IF Choice = 2
         THEN
            OUTPUT "Scores"
         ELSE
            IF Choice = 3
               THEN
                  OUTPUT "Settings"
               ELSE
                  OUTPUT "Invalid"
            ENDIF
      ENDIF
ENDIF`}
            />
          </div>
          <div>
            <CodeBlock
              title="✅ CASE — clean and readable"
              code={`CASE OF Choice
   1 : OUTPUT "Play"
   2 : OUTPUT "Scores"
   3 : OUTPUT "Settings"
   OTHERWISE OUTPUT "Invalid"
ENDCASE`}
            />
          </div>
        </div>

        <div className="mt-4 bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800">✅ The rule of thumb:</p>
          <p className="text-green-700 mt-1 text-sm">
            If you're checking ONE variable against <strong>specific exact values</strong> → use CASE.<br/>
            If you're checking <strong>ranges</strong> (&gt;=, &lt;=) or <strong>multiple variables</strong> → use nested IF.
          </p>
        </div>
      </div>

      {/* Syntax rules */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📏 CASE Syntax Rules (Don't Lose Marks!)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-3">✅ CORRECT</p>
            <div className="space-y-2 text-green-700 text-sm">
              <p>✅ <code className="bg-green-100 px-1 rounded">CASE OF</code> — must have OF</p>
              <p>✅ <code className="bg-green-100 px-1 rounded">OTHERWISE</code> — not DEFAULT</p>
              <p>✅ <code className="bg-green-100 px-1 rounded">ENDCASE</code> — must end with this</p>
              <p>✅ Colon <code className="bg-green-100 px-1 rounded">:</code> after each value</p>
              <p>✅ OTHERWISE is optional (but recommended)</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-3">❌ WRONG</p>
            <div className="space-y-2 text-red-700 text-sm">
              <p>❌ <code className="bg-red-100 px-1 rounded">CASE Choice</code> — missing OF</p>
              <p>❌ <code className="bg-red-100 px-1 rounded">DEFAULT</code> — wrong keyword</p>
              <p>❌ <code className="bg-red-100 px-1 rounded">END CASE</code> — it's one word: ENDCASE</p>
              <p>❌ Using ranges like <code className="bg-red-100 px-1 rounded">1-5 :</code></p>
              <p>❌ Forgetting ENDCASE at the end</p>
            </div>
          </div>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 OTHERWISE not DEFAULT</p>
        <p className="text-red-900 mt-1">
          Many students write <code className="bg-red-100 px-1 rounded">DEFAULT</code> because that's what 
          Python's <code className="bg-red-100 px-1 rounded">match/case</code> or other languages use. 
          In Cambridge pseudocode, it's <strong>OTHERWISE</strong>. Writing DEFAULT will lose you marks!
        </p>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 Exam Tip: When the Question Says "Use CASE"</p>
        <p className="text-amber-900 mt-1">
          If the question specifically says "use a CASE statement", you <strong>must</strong> use CASE — don't use IF. 
          If it doesn't specify, pick whichever is more appropriate (CASE for exact values, IF for ranges).
          Some questions say "use appropriate selection" — then YOU choose.
        </p>
      </div>
    </div>
  );
}
