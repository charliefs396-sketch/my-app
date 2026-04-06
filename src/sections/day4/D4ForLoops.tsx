import CodeBlock from '../../components/CodeBlock';

export default function D4ForLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔢 FOR Loop (Count-Controlled)</h1>
      <p className="text-gray-500 mb-6 text-lg">When you know EXACTLY how many times to repeat</p>

      {/* What is a FOR loop */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a FOR Loop?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A FOR loop is a <strong>count-controlled loop</strong>. That means you tell it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
            <p className="text-3xl mb-2">1️⃣</p>
            <p className="font-bold text-blue-800">Where to START</p>
            <p className="text-blue-600 text-sm">The starting number</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
            <p className="text-3xl mb-2">2️⃣</p>
            <p className="font-bold text-blue-800">Where to END</p>
            <p className="text-blue-600 text-sm">The finishing number</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
            <p className="text-3xl mb-2">3️⃣</p>
            <p className="font-bold text-blue-800">How to COUNT</p>
            <p className="text-blue-600 text-sm">By 1? By 2? Backwards?</p>
          </div>
        </div>

        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 mb-4">
          <p className="font-bold text-indigo-800 text-lg mb-2">📖 Exam Definition (Memorise This)</p>
          <p className="text-indigo-900 text-lg italic">
            "A FOR loop is a count-controlled loop that repeats a fixed number of times, 
            using a counter variable that automatically increments (or decrements) with each iteration."
          </p>
        </div>
      </div>

      {/* Basic Syntax */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic FOR Loop Syntax</h2>
        
        <CodeBlock code={`FOR Counter ← 1 TO 5
   OUTPUT Counter
NEXT Counter`} />

        <p className="text-gray-700 mt-4 mb-4">Let's break down every part:</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Part</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Example</th>
                <th className="py-3 text-gray-600 font-bold">What It Does</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">FOR</td>
                <td className="py-3 pr-4 font-mono">FOR</td>
                <td className="py-3">Keyword that starts the loop</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">Counter ←</td>
                <td className="py-3 pr-4 font-mono">Counter ← 1</td>
                <td className="py-3">Sets the counter variable to start at 1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">TO</td>
                <td className="py-3 pr-4 font-mono">TO 5</td>
                <td className="py-3">Sets the end value (loop stops after reaching 5)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">Body</td>
                <td className="py-3 pr-4 font-mono">OUTPUT Counter</td>
                <td className="py-3">The code that runs each time (indented!)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">NEXT Counter</td>
                <td className="py-3 pr-4 font-mono">NEXT Counter</td>
                <td className="py-3">Ends the loop — adds 1 to Counter and goes back to FOR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="warning-box">
          <p className="font-bold text-red-800">⚠️ MUST include "Counter" after NEXT!</p>
          <p className="text-red-900 mt-1">
            Writing just <code className="bg-red-100 px-1 rounded">NEXT</code> will lose marks. 
            It must be <code className="bg-red-100 px-1 rounded">NEXT Counter</code> — 
            you must name the variable that's being counted.
          </p>
        </div>
      </div>

      {/* Trace Through */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Trace Through — Step by Step 🔍</h2>
        <p className="text-gray-600 mb-4">Let's trace what happens with this code:</p>
        
        <CodeBlock code={`FOR Counter ← 1 TO 5
   OUTPUT Counter
NEXT Counter`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">Iteration</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Counter Value</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Action</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Output</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-3 px-4 font-bold">1st</td>
                <td className="py-3 px-4 font-mono">1</td>
                <td className="py-3 px-4">Counter ← 1 (start). Is 1 &le; 5? YES → run body</td>
                <td className="py-3 px-4 font-mono font-bold">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-bold">2nd</td>
                <td className="py-3 px-4 font-mono">2</td>
                <td className="py-3 px-4">NEXT → Counter becomes 2. Is 2 &le; 5? YES → run body</td>
                <td className="py-3 px-4 font-mono font-bold">2</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-3 px-4 font-bold">3rd</td>
                <td className="py-3 px-4 font-mono">3</td>
                <td className="py-3 px-4">NEXT → Counter becomes 3. Is 3 &le; 5? YES → run body</td>
                <td className="py-3 px-4 font-mono font-bold">3</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-bold">4th</td>
                <td className="py-3 px-4 font-mono">4</td>
                <td className="py-3 px-4">NEXT → Counter becomes 4. Is 4 &le; 5? YES → run body</td>
                <td className="py-3 px-4 font-mono font-bold">4</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-3 px-4 font-bold">5th</td>
                <td className="py-3 px-4 font-mono">5</td>
                <td className="py-3 px-4">NEXT → Counter becomes 5. Is 5 &le; 5? YES → run body</td>
                <td className="py-3 px-4 font-mono font-bold">5</td>
              </tr>
              <tr className="bg-red-50">
                <td className="py-3 px-4 font-bold text-red-600">STOP</td>
                <td className="py-3 px-4 font-mono text-red-600">6</td>
                <td className="py-3 px-4 text-red-600">NEXT → Counter becomes 6. Is 6 &le; 5? NO → exit loop</td>
                <td className="py-3 px-4 text-red-600">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4">
          <p className="font-bold text-blue-800">📌 Total output: 1 2 3 4 5 (each on its own line)</p>
          <p className="text-blue-700 text-sm mt-1">The loop ran <strong>exactly 5 times</strong>. That's 5 - 1 + 1 = 5. 
          Formula: <strong>(end - start + 1)</strong> iterations.</p>
        </div>
      </div>

      {/* More Examples */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">More FOR Loop Examples</h2>
        
        <h3 className="text-xl font-bold text-gray-700 mb-3">Example 1: Sum of numbers 1 to 10</h3>
        <CodeBlock code={`DECLARE Total : INTEGER
DECLARE Counter : INTEGER
Total ← 0

FOR Counter ← 1 TO 10
   Total ← Total + Counter
NEXT Counter

OUTPUT "Sum is: ", Total`} />

        <div className="bg-gray-50 p-4 rounded-xl mt-3 mb-6">
          <p className="font-bold text-gray-700 mb-2">What's happening here?</p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Total ← Total + Counter</strong> is called an <strong>accumulator</strong>. 
            Each time the loop runs, it adds the current counter value to the running total.
          </p>
          <p className="text-gray-600 text-sm">
            Iteration 1: Total = 0 + 1 = <strong>1</strong> → 
            Iteration 2: Total = 1 + 2 = <strong>3</strong> → 
            Iteration 3: Total = 3 + 3 = <strong>6</strong> → ... → 
            Final: Total = <strong>55</strong>
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mb-3">Example 2: Times table</h3>
        <CodeBlock code={`DECLARE Number : INTEGER
DECLARE Counter : INTEGER

OUTPUT "Enter a number: "
INPUT Number

FOR Counter ← 1 TO 12
   OUTPUT Number, " x ", Counter, " = ", Number * Counter
NEXT Counter`} />

        <div className="bg-gray-50 p-4 rounded-xl mt-3 mb-6">
          <p className="font-bold text-gray-700 mb-2">If user enters 7:</p>
          <p className="text-gray-600 text-sm font-mono">
            7 x 1 = 7<br/>
            7 x 2 = 14<br/>
            7 x 3 = 21<br/>
            ... (all the way to)<br/>
            7 x 12 = 84
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mb-3">Example 3: Average of N numbers</h3>
        <CodeBlock code={`DECLARE N : INTEGER
DECLARE Counter : INTEGER
DECLARE Num : REAL
DECLARE Total : REAL
DECLARE Average : REAL

Total ← 0
OUTPUT "How many numbers? "
INPUT N

FOR Counter ← 1 TO N
   OUTPUT "Enter number ", Counter, ": "
   INPUT Num
   Total ← Total + Num
NEXT Counter

Average ← Total / N
OUTPUT "Average is: ", Average`} />

        <div className="tip-box mt-3">
          <p className="font-bold text-amber-800">💡 Notice the counter in the prompt!</p>
          <p className="text-amber-900 text-sm mt-1">
            <code className="bg-amber-100 px-1 rounded">OUTPUT "Enter number ", Counter, ": "</code> — 
            we use the Counter variable in the output message so the user sees "Enter number 1:", "Enter number 2:", etc. 
            Very useful and examiners like to see it!
          </p>
        </div>
      </div>

      {/* FOR with STEP */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FOR Loop with STEP ⚡</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          By default, the counter goes up by 1 each time. But what if you want to count by 2s? Or go backwards? 
          That's what <strong>STEP</strong> is for.
        </p>

        <h3 className="text-xl font-bold text-gray-700 mb-3">Counting by 2 (even numbers)</h3>
        <CodeBlock code={`// Output all even numbers from 2 to 20
FOR Counter ← 2 TO 20 STEP 2
   OUTPUT Counter
NEXT Counter`} />
        <p className="text-gray-600 text-sm mt-2 mb-6">
          Output: <strong>2, 4, 6, 8, 10, 12, 14, 16, 18, 20</strong> — Counter jumps by 2 each time
        </p>

        <h3 className="text-xl font-bold text-gray-700 mb-3">Counting backwards (countdown!)</h3>
        <CodeBlock code={`// Countdown from 10 to 1
FOR Counter ← 10 TO 1 STEP -1
   OUTPUT Counter
NEXT Counter
OUTPUT "Blast off! 🚀"`} />
        <p className="text-gray-600 text-sm mt-2 mb-6">
          Output: <strong>10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Blast off! 🚀</strong>
        </p>

        <h3 className="text-xl font-bold text-gray-700 mb-3">Counting by 5</h3>
        <CodeBlock code={`// Output multiples of 5 from 0 to 50
FOR Counter ← 0 TO 50 STEP 5
   OUTPUT Counter
NEXT Counter`} />
        <p className="text-gray-600 text-sm mt-2 mb-4">
          Output: <strong>0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50</strong>
        </p>

        <div className="warning-box">
          <p className="font-bold text-red-800">⚠️ STEP -1 is essential for counting backwards!</p>
          <p className="text-red-900 mt-1 text-sm">
            If you write <code className="bg-red-100 px-1 rounded">FOR Counter ← 10 TO 1</code> <strong>without STEP -1</strong>, 
            the loop will run <strong>0 times</strong>! Because the counter starts at 10, and 10 is already past 1 when counting forwards. 
            Always use <strong>STEP -1</strong> for counting down.
          </p>
        </div>
      </div>

      {/* Trace with STEP */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Trace Through with STEP 🔍</h2>
        
        <CodeBlock code={`FOR Counter ← 10 TO 0 STEP -2
   OUTPUT Counter
NEXT Counter`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-bold">Iteration</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Counter</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Is Counter &ge; 0?</th>
                <th className="py-3 px-4 text-gray-600 font-bold">Output</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-2 px-4">1st</td>
                <td className="py-2 px-4 font-mono">10</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">10</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">2nd</td>
                <td className="py-2 px-4 font-mono">8</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">8</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-2 px-4">3rd</td>
                <td className="py-2 px-4 font-mono">6</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">6</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">4th</td>
                <td className="py-2 px-4 font-mono">4</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">4</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50">
                <td className="py-2 px-4">5th</td>
                <td className="py-2 px-4 font-mono">2</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">2</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">6th</td>
                <td className="py-2 px-4 font-mono">0</td>
                <td className="py-2 px-4 text-green-600 font-bold">YES</td>
                <td className="py-2 px-4 font-mono">0</td>
              </tr>
              <tr className="bg-red-50">
                <td className="py-2 px-4 text-red-600">STOP</td>
                <td className="py-2 px-4 font-mono text-red-600">-2</td>
                <td className="py-2 px-4 text-red-600 font-bold">NO</td>
                <td className="py-2 px-4 text-red-600">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3">
          Total output: <strong>10, 8, 6, 4, 2, 0</strong> — the loop ran 6 times
        </p>
      </div>

      {/* Common Patterns */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Common FOR Loop Patterns 📋</h2>
        <p className="text-gray-600 mb-4">These patterns come up in exams ALL the time. Learn them!</p>

        <div className="space-y-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2">Pattern 1: Counter / Counting</h3>
            <p className="text-indigo-700 text-sm mb-3">Just counting things — the simplest pattern</p>
            <CodeBlock code={`// Count how many even numbers between 1 and N
DECLARE N : INTEGER
DECLARE Counter : INTEGER
DECLARE EvenCount : INTEGER
EvenCount ← 0

INPUT N
FOR Counter ← 1 TO N
   IF Counter MOD 2 = 0
      THEN
         EvenCount ← EvenCount + 1
   ENDIF
NEXT Counter
OUTPUT "Even numbers found: ", EvenCount`} />
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">Pattern 2: Accumulator (Running Total)</h3>
            <p className="text-purple-700 text-sm mb-3">Adding values together as you go</p>
            <CodeBlock code={`// Calculate factorial of N (N!)
// 5! = 5 × 4 × 3 × 2 × 1 = 120
DECLARE N : INTEGER
DECLARE Counter : INTEGER
DECLARE Factorial : INTEGER
Factorial ← 1

INPUT N
FOR Counter ← 1 TO N
   Factorial ← Factorial * Counter
NEXT Counter
OUTPUT N, "! = ", Factorial`} />
          </div>

          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2">Pattern 3: Find Max / Min</h3>
            <p className="text-emerald-700 text-sm mb-3">Going through values to find the biggest or smallest</p>
            <CodeBlock code={`// Find the largest of 5 numbers
DECLARE Counter : INTEGER
DECLARE Num : INTEGER
DECLARE Largest : INTEGER

INPUT Num
Largest ← Num     // First number is the largest so far

FOR Counter ← 2 TO 5
   INPUT Num
   IF Num > Largest
      THEN
         Largest ← Num
   ENDIF
NEXT Counter
OUTPUT "Largest number: ", Largest`} />
          </div>
        </div>
      </div>

      {/* Key Rules */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FOR Loop Rules — Don't Lose Marks! ✅</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-2">✅ Correct</p>
            <div className="space-y-2 text-sm">
              <p className="text-green-700 font-mono">FOR Counter ← 1 TO 10</p>
              <p className="text-green-700 font-mono">NEXT Counter</p>
              <p className="text-green-700 font-mono">FOR i ← 0 TO 99</p>
              <p className="text-green-700 font-mono">FOR x ← 10 TO 1 STEP -1</p>
              <p className="text-green-700 font-mono">FOR c ← 2 TO 20 STEP 2</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800 mb-2">❌ Wrong — Lose Marks!</p>
            <div className="space-y-2 text-sm">
              <p className="text-red-700 font-mono">FOR Counter = 1 TO 10 <span className="text-red-500">(use ←, not =)</span></p>
              <p className="text-red-700 font-mono">NEXT <span className="text-red-500">(must include variable name)</span></p>
              <p className="text-red-700 font-mono">ENDFOR <span className="text-red-500">(it's NEXT, not ENDFOR)</span></p>
              <p className="text-red-700 font-mono">FOR 1 TO 10 <span className="text-red-500">(missing counter variable)</span></p>
              <p className="text-red-700 font-mono">FOR Counter ← 10 TO 1 <span className="text-red-500">(need STEP -1!)</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 When to Use a FOR Loop</p>
        <p className="text-amber-900 mt-1">
          Use FOR when you <strong>know the exact number of repetitions before the loop starts</strong>. 
          Examples: "do this 10 times", "go through marks 1 to N", "count down from 100 to 0". 
          If you DON'T know how many times — use WHILE or REPEAT instead.
        </p>
      </div>
    </div>
  );
}
