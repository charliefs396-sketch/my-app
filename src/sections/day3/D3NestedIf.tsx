import CodeBlock from '../../components/CodeBlock';

export default function D3NestedIf() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🪆 Nested IF Statements</h1>
      <p className="text-gray-500 mb-6 text-lg">A Level's favourite — IF inside IF inside IF</p>

      {/* What is nesting */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Nesting?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>Nesting</strong> means putting one IF statement <strong>inside another</strong>. 
          You do this when you need to check <strong>multiple conditions one after another</strong>, 
          and each condition narrows down the result.
        </p>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-4">
          <p className="text-indigo-800 text-lg text-center font-bold mb-4">🛤️ Real Life Analogy</p>
          <div className="text-indigo-700 leading-relaxed space-y-2">
            <p>Think of it like a decision tree at a restaurant:</p>
            <p className="ml-4">→ Are you hungry? <strong>YES</strong></p>
            <p className="ml-8">→ Do you want hot food? <strong>YES</strong></p>
            <p className="ml-12">→ Do you want spicy? → <strong>Order curry</strong></p>
            <p className="ml-12">→ Not spicy? → <strong>Order pasta</strong></p>
            <p className="ml-8">→ Cold food? → <strong>Order salad</strong></p>
            <p className="ml-4">→ Not hungry? → <strong>Just a drink</strong></p>
          </div>
          <p className="text-indigo-600 text-sm mt-3 italic">
            Each level is a nested IF — you go deeper into the decision tree.
          </p>
        </div>
      </div>

      {/* Why NOT "ELSE IF" */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🚨 WHY You Can't Use "ELSE IF"</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is the <strong>number one thing</strong> that confuses students coming from Python or other languages. 
          In Python you write <code className="bg-gray-100 px-1 rounded">elif</code>. In Cambridge pseudocode, 
          <strong> "ELSE IF" does NOT exist</strong>. Instead, you nest a completely new IF...ENDIF inside the ELSE block.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-2">❌ WRONG — "ELSE IF" doesn't exist</p>
            <CodeBlock
              title="❌ This will LOSE marks"
              code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE IF Mark >= 60
      Grade ← "B"
   ELSE IF Mark >= 40
      Grade ← "C"
   ELSE
      Grade ← "Fail"
ENDIF`}
            />
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-2">✅ CORRECT — Properly nested</p>
            <CodeBlock
              title="✅ This gets FULL marks"
              code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      IF Mark >= 60
         THEN
            Grade ← "B"
         ELSE
            IF Mark >= 40
               THEN
                  Grade ← "C"
               ELSE
                  Grade ← "Fail"
            ENDIF
      ENDIF
ENDIF`}
            />
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">🧠 The Rule:</p>
          <p className="text-amber-700 mt-1">
            Every <code className="bg-amber-100 px-1 rounded font-bold">IF</code> must have its own matching 
            <code className="bg-amber-100 px-1 rounded font-bold"> ENDIF</code>. 
            Count them — if you have 3 IFs, you need 3 ENDIFs. They pair up from the inside out, like brackets.
          </p>
        </div>
      </div>

      {/* Step by step nested IF */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Building Nested IF Step by Step</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Let's build the grade calculator step by step so you can see HOW nesting works:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Step 1: Start with the first check</h3>
            <CodeBlock
              title="Step 1 — First condition"
              code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      // What goes here? We need to check more conditions...
ENDIF`}
            />
            <p className="text-gray-600 text-sm mt-2">
              If mark is 80+, it's an A. But if it's less than 80, we need more checks...
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Step 2: Add the second check INSIDE the ELSE</h3>
            <CodeBlock
              title="Step 2 — Second condition nested in ELSE"
              code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      IF Mark >= 60
         THEN
            Grade ← "B"
         ELSE
            // Still need more checks...
      ENDIF
ENDIF`}
            />
            <p className="text-gray-600 text-sm mt-2">
              Notice: the second IF...ENDIF is <strong>completely inside</strong> the first ELSE. The second ENDIF comes before the first ENDIF.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Step 3: Add the third check INSIDE the second ELSE</h3>
            <CodeBlock
              title="Step 3 — Complete nested IF"
              code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      IF Mark >= 60
         THEN
            Grade ← "B"
         ELSE
            IF Mark >= 40
               THEN
                  Grade ← "C"
               ELSE
                  Grade ← "Fail"
            ENDIF
      ENDIF
ENDIF`}
            />
          </div>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">🔢 Counting the pairs:</p>
          <div className="text-blue-700 text-sm space-y-1">
            <p>IF #1 (Mark &gt;= 80) → ENDIF #1 (the LAST one, at the bottom)</p>
            <p>IF #2 (Mark &gt;= 60) → ENDIF #2 (the second from bottom)</p>
            <p>IF #3 (Mark &gt;= 40) → ENDIF #3 (the first ENDIF, innermost)</p>
            <p className="font-bold mt-2">3 IFs = 3 ENDIFs. They pair from inside out!</p>
          </div>
        </div>
      </div>

      {/* Trace through */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Tracing Through Nested IF</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Let's trace through the grade calculator with different values. This is <strong>exactly</strong> what the exam asks you to do.
        </p>

        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-2">📊 Trace: Mark = 75</p>
            <div className="text-green-700 text-sm font-mono space-y-1">
              <p>IF 75 &gt;= 80 → <span className="text-red-600 font-bold">FALSE</span> → skip THEN, go to ELSE</p>
              <p className="ml-4">IF 75 &gt;= 60 → <span className="text-green-600 font-bold">TRUE</span> → go to THEN</p>
              <p className="ml-8">Grade ← "B" ✅</p>
              <p className="ml-4">Skip the inner ELSE</p>
              <p>Output: <strong>Grade = "B"</strong></p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-blue-800 mb-2">📊 Trace: Mark = 45</p>
            <div className="text-blue-700 text-sm font-mono space-y-1">
              <p>IF 45 &gt;= 80 → <span className="text-red-600 font-bold">FALSE</span> → go to ELSE</p>
              <p className="ml-4">IF 45 &gt;= 60 → <span className="text-red-600 font-bold">FALSE</span> → go to ELSE</p>
              <p className="ml-8">IF 45 &gt;= 40 → <span className="text-green-600 font-bold">TRUE</span> → go to THEN</p>
              <p className="ml-12">Grade ← "C" ✅</p>
              <p>Output: <strong>Grade = "C"</strong></p>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
            <p className="font-bold text-orange-800 mb-2">📊 Trace: Mark = 25</p>
            <div className="text-orange-700 text-sm font-mono space-y-1">
              <p>IF 25 &gt;= 80 → <span className="text-red-600 font-bold">FALSE</span> → go to ELSE</p>
              <p className="ml-4">IF 25 &gt;= 60 → <span className="text-red-600 font-bold">FALSE</span> → go to ELSE</p>
              <p className="ml-8">IF 25 &gt;= 40 → <span className="text-red-600 font-bold">FALSE</span> → go to ELSE</p>
              <p className="ml-12">Grade ← "Fail" ✅</p>
              <p>Output: <strong>Grade = "Fail"</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* More nested examples */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 More Nested IF Examples</h2>

        <h3 className="font-bold text-gray-700 mb-2 text-lg">Example: Number Classification</h3>
        <p className="text-gray-600 mb-3">Classify a number as positive, negative, or zero:</p>
        <CodeBlock
          title="Number classification — nested IF"
          code={`DECLARE Num : INTEGER
OUTPUT "Enter a number: "
INPUT Num

IF Num > 0
   THEN
      OUTPUT "Positive"
   ELSE
      IF Num < 0
         THEN
            OUTPUT "Negative"
         ELSE
            OUTPUT "Zero"
      ENDIF
ENDIF`}
        />

        <h3 className="font-bold text-gray-700 mb-2 mt-6 text-lg">Example: Largest of Three Numbers</h3>
        <p className="text-gray-600 mb-3">Find which of three numbers is the biggest:</p>
        <CodeBlock
          title="Largest of three numbers"
          code={`DECLARE A : INTEGER
DECLARE B : INTEGER
DECLARE C : INTEGER
DECLARE Largest : INTEGER

OUTPUT "Enter three numbers: "
INPUT A
INPUT B
INPUT C

IF A >= B
   THEN
      IF A >= C
         THEN
            Largest ← A
         ELSE
            Largest ← C
      ENDIF
   ELSE
      IF B >= C
         THEN
            Largest ← B
         ELSE
            Largest ← C
      ENDIF
ENDIF

OUTPUT "The largest number is: ", Largest`}
        />

        <div className="mt-4 bg-purple-50 p-4 rounded-xl border border-purple-200">
          <p className="font-bold text-purple-800 mb-2">🧠 Notice the pattern:</p>
          <p className="text-purple-700 text-sm">
            This one nests differently — the second IF is inside the THEN (not the ELSE). 
            You can nest inside THEN, ELSE, or both. The structure depends on the logic you need.
          </p>
        </div>
      </div>

      {/* Indentation guide */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📐 Indentation Rules</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Proper indentation is <strong>critical</strong> for nested IFs. It shows which code belongs to which IF. 
          Here are the rules:
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">1</span>
            <p className="text-gray-700">IF, ELSE, and ENDIF should be at the <strong>same indentation level</strong></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">2</span>
            <p className="text-gray-700">Everything <strong>inside</strong> THEN and ELSE should be indented <strong>one more level</strong></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">3</span>
            <p className="text-gray-700">A nested IF starts a <strong>new indentation level</strong></p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">4</span>
            <p className="text-gray-700">Use <strong>3 spaces</strong> per indentation level (consistent spacing)</p>
          </div>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 Exam Warning: ENDIF Count</p>
        <p className="text-red-900 mt-1">
          The examiner can instantly spot if you've forgotten an ENDIF. <strong>Count your IFs and count your ENDIFs — 
          the numbers MUST match.</strong> If your code has 4 IF statements, it needs exactly 4 ENDIFs. 
          Write the ENDIF immediately after writing the IF — then fill in the middle.
        </p>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 Pro Tip: Write the Skeleton First</p>
        <p className="text-amber-900 mt-1">
          When writing nested IF in an exam, write the skeleton first (all the IF/THEN/ELSE/ENDIF keywords), 
          then fill in the conditions and statements. This way you'll never forget an ENDIF:
        </p>
        <div className="mt-2 bg-amber-100/50 p-3 rounded-lg text-amber-800 font-mono text-sm">
          <p>IF _____</p>
          <p>&nbsp;&nbsp;&nbsp;THEN</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____</p>
          <p>&nbsp;&nbsp;&nbsp;ELSE</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF _____</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THEN</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ELSE</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENDIF</p>
          <p>ENDIF</p>
        </div>
      </div>
    </div>
  );
}
