import CodeBlock from '../../components/CodeBlock';

export default function D3IfStatements() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔀 IF Statements</h1>
      <p className="text-gray-500 mb-6 text-lg">The foundation of all decision-making in programs</p>

      {/* What is Selection */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Selection?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>Selection</strong> means the program checks a condition and takes a different path depending 
          on whether it's TRUE or FALSE. Think of it like a fork in the road:
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-4">
          <p className="text-indigo-800 text-lg text-center font-bold mb-4">🛤️ Real Life Example</p>
          <div className="text-center text-indigo-700 leading-relaxed">
            <p>You arrive at school...</p>
            <p className="font-bold mt-2">IF it's before 8:00</p>
            <p className="ml-8">THEN → Go to assembly</p>
            <p className="font-bold">ELSE</p>
            <p className="ml-8">→ Go straight to class (you're late!)</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-gray-700 font-semibold mb-2">📚 Exam Definition (memorise this!):</p>
          <p className="text-gray-800 italic">
            "Selection is a construct that allows the program to execute different statements 
            depending on whether a condition evaluates to TRUE or FALSE."
          </p>
        </div>
      </div>

      {/* Simple IF — one path */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">1️⃣ Simple IF (One Path)</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The simplest form — <strong>do something only IF a condition is true</strong>. If it's false, do nothing.
        </p>

        <CodeBlock
          title="Simple IF — one path"
          code={`// Check if someone is old enough to vote
DECLARE Age : INTEGER
OUTPUT "Enter your age: "
INPUT Age

IF Age >= 18
   THEN
      OUTPUT "You can vote!"
ENDIF`}
        />

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">🔍 Breaking it down:</p>
          <div className="space-y-2 text-blue-700 text-sm">
            <p><code className="bg-blue-100 px-1 rounded font-bold">IF Age &gt;= 18</code> — the condition being checked. Is it TRUE or FALSE?</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">THEN</code> — marks the start of what to do if TRUE</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">OUTPUT "You can vote!"</code> — only runs if condition is TRUE</p>
            <p><code className="bg-blue-100 px-1 rounded font-bold">ENDIF</code> — marks the END of the IF block. <strong>You MUST have this!</strong></p>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 p-4 rounded-xl border border-amber-100">
          <p className="font-bold text-amber-800">🤔 What if Age is 15?</p>
          <p className="text-amber-700 mt-1">
            The condition <code className="bg-amber-100 px-1 rounded">15 &gt;= 18</code> is <strong>FALSE</strong>, 
            so the program skips everything between THEN and ENDIF. Nothing is output. The program continues after ENDIF.
          </p>
        </div>
      </div>

      {/* IF...ELSE — two paths */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2️⃣ IF...ELSE (Two Paths)</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Do one thing if TRUE, <strong>something different</strong> if FALSE. This is the most common pattern.
        </p>

        <CodeBlock
          title="IF...ELSE — two paths"
          code={`// Check if adult or minor
DECLARE Age : INTEGER
OUTPUT "Enter your age: "
INPUT Age

IF Age >= 18
   THEN
      OUTPUT "Adult"
   ELSE
      OUTPUT "Minor"
ENDIF`}
        />

        <div className="mt-4 bg-green-50 p-4 rounded-xl border border-green-100">
          <p className="font-bold text-green-800 mb-2">📊 Trace through with Age = 20:</p>
          <div className="space-y-1 text-green-700 text-sm font-mono">
            <p>Age ← 20</p>
            <p>IF 20 &gt;= 18 → <strong>TRUE</strong></p>
            <p>→ Goes to THEN branch</p>
            <p>→ OUTPUT "Adult" ✅</p>
            <p>→ Skips ELSE branch</p>
            <p>→ Continues after ENDIF</p>
          </div>
        </div>

        <div className="mt-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
          <p className="font-bold text-orange-800 mb-2">📊 Trace through with Age = 12:</p>
          <div className="space-y-1 text-orange-700 text-sm font-mono">
            <p>Age ← 12</p>
            <p>IF 12 &gt;= 18 → <strong>FALSE</strong></p>
            <p>→ Skips THEN branch</p>
            <p>→ Goes to ELSE branch</p>
            <p>→ OUTPUT "Minor" ✅</p>
            <p>→ Continues after ENDIF</p>
          </div>
        </div>
      </div>

      {/* Multiple statements */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">3️⃣ Multiple Statements Inside IF</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          You can have <strong>as many lines as you want</strong> between THEN and ELSE, or between ELSE and ENDIF. 
          Not just one line!
        </p>

        <CodeBlock
          title="Multiple statements in IF"
          code={`DECLARE Mark : INTEGER
DECLARE Grade : STRING
DECLARE Message : STRING

OUTPUT "Enter your mark: "
INPUT Mark

IF Mark >= 50
   THEN
      Grade ← "Pass"
      Message ← "Well done!"
      OUTPUT Grade
      OUTPUT Message
   ELSE
      Grade ← "Fail"
      Message ← "Try harder next time"
      OUTPUT Grade
      OUTPUT Message
ENDIF`}
        />
      </div>

      {/* Conditions with logical operators */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">4️⃣ Complex Conditions (Using AND, OR, NOT)</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Remember the logical operators from Day 2? You can use them inside IF conditions to check multiple things at once.
        </p>

        <CodeBlock
          title="Using AND — both conditions must be TRUE"
          code={`// Both conditions must be TRUE
DECLARE Age : INTEGER
DECLARE HasID : BOOLEAN

IF Age >= 18 AND HasID = TRUE
   THEN
      OUTPUT "Entry allowed"
   ELSE
      OUTPUT "Entry denied"
ENDIF`}
        />

        <CodeBlock
          title="Using OR — at least one condition must be TRUE"
          code={`// At least one must be TRUE
DECLARE Day : STRING

IF Day = "Saturday" OR Day = "Sunday"
   THEN
      OUTPUT "Weekend!"
   ELSE
      OUTPUT "Weekday"
ENDIF`}
        />

        <CodeBlock
          title="Using NOT — flips the condition"
          code={`// NOT flips TRUE to FALSE and vice versa
DECLARE Found : BOOLEAN

IF NOT Found
   THEN
      OUTPUT "Item not found in list"
ENDIF`}
        />

        <div className="mt-4 bg-purple-50 p-4 rounded-xl border border-purple-100">
          <p className="font-bold text-purple-800 mb-2">🧠 Quick Memory Aid:</p>
          <div className="space-y-2 text-purple-700">
            <p><strong>AND</strong> = BOTH must be true (strict bouncer — needs ticket AND ID)</p>
            <p><strong>OR</strong> = at least ONE must be true (flexible — cash OR card)</p>
            <p><strong>NOT</strong> = flips the result (opposite day)</p>
          </div>
        </div>
      </div>

      {/* The EXACT syntax rules */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📏 The EXACT Syntax Rules</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Cambridge is <strong>very strict</strong> about IF statement syntax. Miss any of these and you lose marks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-3">✅ CORRECT Format</p>
            <div className="space-y-2 text-green-700 text-sm">
              <p>✅ IF must be followed by a condition</p>
              <p>✅ THEN must appear (on same line as IF or next line)</p>
              <p>✅ ELSE is optional (only if you need it)</p>
              <p>✅ ENDIF must ALWAYS be at the end</p>
              <p>✅ Indent the code inside THEN and ELSE</p>
              <p>✅ Use <code className="bg-green-100 px-1 rounded">=</code> for comparison (not ←)</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-3">❌ WRONG — Common Mistakes</p>
            <div className="space-y-2 text-red-700 text-sm">
              <p>❌ Forgetting THEN after the condition</p>
              <p>❌ Forgetting ENDIF at the end</p>
              <p>❌ Using "ELSE IF" (doesn't exist!)</p>
              <p>❌ Using ← for comparison instead of =</p>
              <p>❌ No indentation (hard to read, may lose marks)</p>
              <p>❌ Using == (that's Python, not pseudocode!)</p>
            </div>
          </div>
        </div>

        <CodeBlock
          title="❌ WRONG vs ✅ CORRECT"
          code={`// ❌ WRONG — missing THEN and ENDIF
IF Age >= 18
   OUTPUT "Adult"

// ❌ WRONG — using ← for comparison
IF Age ← 18
   THEN
      OUTPUT "Exactly 18"
ENDIF

// ❌ WRONG — using ELSE IF
IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE IF Mark >= 60
      Grade ← "B"
ENDIF

// ✅ CORRECT
IF Age >= 18
   THEN
      OUTPUT "Adult"
   ELSE
      OUTPUT "Minor"
ENDIF`}
        />
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 = vs ← — The Most Common Exam Mistake</p>
        <p className="text-red-900 mt-1">
          Remember from Day 1: <code className="bg-red-100 px-1 rounded">=</code> is for <strong>comparison</strong> (checking if equal), 
          <code className="bg-red-100 px-1 rounded">←</code> is for <strong>assignment</strong> (storing a value). 
          In IF statements, you ALWAYS use <code className="bg-red-100 px-1 rounded">=</code> because you're <strong>comparing</strong>.
        </p>
        <div className="mt-2 font-mono text-sm bg-red-100/50 p-3 rounded-lg text-red-800">
          <p>IF Age = 18 THEN   ← This is COMPARISON: "is Age equal to 18?" ✅</p>
          <p>Age ← 18           ← This is ASSIGNMENT: "store 18 into Age" ✅</p>
          <p>IF Age ← 18 THEN   ← This is WRONG: you can't assign inside IF ❌</p>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 Exam Tip: Reading IF Statements Out Loud</p>
        <p className="text-amber-900 mt-1">
          When tracing through IF statements, read them as English questions: 
          <br/><code className="bg-amber-100 px-1 rounded">IF Age &gt;= 18</code> → "Is Age greater than or equal to 18?"
          <br/><code className="bg-amber-100 px-1 rounded">IF Found = TRUE</code> → "Is Found equal to TRUE?"
          <br/>Answer the question with YES (TRUE) or NO (FALSE), then follow the right path.
        </p>
      </div>
    </div>
  );
}
