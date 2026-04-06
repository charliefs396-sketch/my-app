import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

function Exercise({ number, title, description, hints, solution, explanation }: {
  number: number;
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}) {
  const [showHints, setShowHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="section-card">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Exercise {number}: {title}
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {hints.map((_, i) => (
          <button
            key={i}
            onClick={() => setShowHints(Math.max(showHints, i + 1))}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              showHints > i
                ? 'bg-amber-100 text-amber-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            💡 Hint {i + 1}
          </button>
        ))}
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            showSolution
              ? 'bg-green-100 text-green-800'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          }`}
        >
          {showSolution ? '🙈 Hide Solution' : '✅ Show Solution'}
        </button>
      </div>

      {showHints > 0 && (
        <div className="space-y-2 mb-4">
          {hints.slice(0, showHints).map((hint, i) => (
            <div key={i} className="tip-box">
              <p className="text-amber-900 text-sm"><strong>Hint {i + 1}:</strong> {hint}</p>
            </div>
          ))}
        </div>
      )}

      {showSolution && (
        <div className="mt-4">
          <CodeBlock code={solution} />
          <div className="bg-green-50 p-4 rounded-xl border border-green-200 mt-3">
            <p className="font-bold text-green-800">📝 Explanation:</p>
            <p className="text-green-900 text-sm mt-1 whitespace-pre-line">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function D4Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">5 exercises covering all 3 loop types — try before revealing!</p>

      <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 mb-8">
        <p className="font-bold text-indigo-800 text-lg">📋 Instructions</p>
        <p className="text-indigo-700 mt-2">
          For each exercise: <strong>(1)</strong> Read the problem. <strong>(2)</strong> Decide which loop type 
          to use and WHY. <strong>(3)</strong> Try writing the pseudocode yourself on paper. 
          <strong>(4)</strong> Use hints if stuck. <strong>(5)</strong> Check the solution.
        </p>
        <p className="text-indigo-600 text-sm mt-2 italic">
          Remember: DECLARE all variables, use ← for assignment, indent properly!
        </p>
      </div>

      {/* Exercise 1: Sum 1 to N */}
      <Exercise
        number={1}
        title="Sum of all numbers from 1 to N (FOR loop)"
        description="Ask the user to input a number N. Then calculate and output the sum of all numbers from 1 to N. For example, if N = 5, the sum is 1 + 2 + 3 + 4 + 5 = 15."
        hints={[
          "You need a variable to store the running total. Initialise it to 0 before the loop.",
          "Use a FOR loop from 1 TO N. Inside the loop, add the counter to the total.",
          "The accumulator pattern: Total ← Total + Counter. After the loop, OUTPUT the total."
        ]}
        solution={`DECLARE N : INTEGER
DECLARE Counter : INTEGER
DECLARE Total : INTEGER

Total ← 0

OUTPUT "Enter a number: "
INPUT N

FOR Counter ← 1 TO N
   Total ← Total + Counter
NEXT Counter

OUTPUT "Sum of 1 to ", N, " is: ", Total`}
        explanation={`This uses the ACCUMULATOR pattern with a FOR loop.

Why FOR? Because we know exactly how many times to repeat — N times.

How it works:
• Total starts at 0
• Each iteration adds the current Counter value
• If N = 5: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
• Final output: "Sum of 1 to 5 is: 15"

Key exam points:
• Total MUST be initialised to 0 before the loop
• The loop uses Counter ← 1 TO N (not 0 to N)
• NEXT Counter includes the variable name`}
      />

      {/* Exercise 2: Password max 3 attempts */}
      <Exercise
        number={2}
        title="Keep asking for password, max 3 attempts (WHILE + counter)"
        description='Keep asking the user for a password. The correct password is "admin123". The user gets a maximum of 3 attempts. After 3 wrong attempts, show "Account locked". If they get it right, show "Welcome!".'
        hints={[
          "You need TWO conditions in the WHILE: wrong password AND under 3 attempts. Use AND to combine them.",
          "Initialise Password to an empty string (so the loop runs at least once). Initialise Attempts to 0.",
          "Inside the loop: increment Attempts first, then INPUT. After the loop, check WHY it stopped — was the password correct or did they run out of attempts?"
        ]}
        solution={`DECLARE Password : STRING
DECLARE Attempts : INTEGER

Password ← ""
Attempts ← 0

WHILE (Password <> "admin123") AND (Attempts < 3)
   Attempts ← Attempts + 1
   OUTPUT "Attempt ", Attempts, " of 3"
   OUTPUT "Enter password: "
   INPUT Password
ENDWHILE

IF Password = "admin123"
   THEN
      OUTPUT "Welcome!"
   ELSE
      OUTPUT "Account locked! Too many failed attempts."
ENDIF`}
        explanation={`This uses a WHILE loop because the loop might run 1, 2, or 3 times — we don't know in advance.

Why WHILE not REPEAT? Actually, REPEAT would also work here. But WHILE is the classic approach because:
• The condition makes it very clear: keep going WHILE wrong AND under 3 attempts
• If we pre-set the password correctly (which won't happen, but logically), it wouldn't enter the loop

The two conditions:
• Password <> "admin123" — keep going while password is wrong
• Attempts < 3 — keep going while under 3 attempts
• AND means BOTH must be true to continue

After the loop, we check WHY it stopped:
• If Password = "admin123" → they got it right
• Otherwise → they used all 3 attempts

This "check after loop" pattern is very common in exam questions!`}
      />

      {/* Exercise 3: Input validation */}
      <Exercise
        number={3}
        title="Input validation: get a mark between 0 and 100 (REPEAT...UNTIL)"
        description="Ask the user to enter a mark. Keep asking until they enter a valid mark between 0 and 100 (inclusive). If they enter an invalid mark, show an error message. Once valid, output the mark and its grade (A: 80+, B: 70+, C: 60+, D: 50+, Fail: below 50)."
        hints={[
          "Use REPEAT...UNTIL because you MUST ask at least once — you can't validate without input first.",
          "The UNTIL condition should be: Mark >= 0 AND Mark <= 100 (stop when mark is valid).",
          "After the validation loop, use nested IF statements to determine the grade. Remember: no ELSE IF — nest properly!"
        ]}
        solution={`DECLARE Mark : INTEGER
DECLARE Grade : STRING

REPEAT
   OUTPUT "Enter a mark (0-100): "
   INPUT Mark
   IF Mark < 0 OR Mark > 100
      THEN
         OUTPUT "Error: Mark must be between 0 and 100!"
   ENDIF
UNTIL Mark >= 0 AND Mark <= 100

IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      IF Mark >= 70
         THEN
            Grade ← "B"
         ELSE
            IF Mark >= 60
               THEN
                  Grade ← "C"
               ELSE
                  IF Mark >= 50
                     THEN
                        Grade ← "D"
                     ELSE
                        Grade ← "Fail"
                  ENDIF
            ENDIF
      ENDIF
ENDIF

OUTPUT "Mark: ", Mark, " Grade: ", Grade`}
        explanation={`This combines two Day 4 and Day 3 concepts: REPEAT for validation + nested IF for grading.

Why REPEAT? Because you MUST get input at least once before you can check if it's valid. The UNTIL condition is "Mark >= 0 AND Mark <= 100" — stop when the mark IS valid.

The error message inside the IF only shows when the mark is invalid.

The grading uses nested IF (not ELSE IF!) as required by Cambridge pseudocode:
• Check highest grade first (80+)
• Each ELSE contains the next check
• "Fail" is the final ELSE (below 50)
• Count: 4 IFs = 4 ENDIFs

This is a VERY common exam question pattern — validation + grading together!`}
      />

      {/* Exercise 4: Even numbers between two values */}
      <Exercise
        number={4}
        title="Output all even numbers between two given numbers"
        description="Ask the user for two numbers: Start and End. Output all even numbers between Start and End (inclusive). Make sure it works even if Start is odd (start from the next even number). Also output a count of how many even numbers were found."
        hints={[
          "First, check if Start is even or odd using MOD 2. If Start MOD 2 <> 0, it's odd — add 1 to make it even.",
          "Use a FOR loop with STEP 2 — starting from the first even number, going up by 2 each time, you'll hit every even number automatically.",
          "Keep a counter variable initialised to 0. Increment it inside the loop each time you output an even number."
        ]}
        solution={`DECLARE Start : INTEGER
DECLARE End : INTEGER
DECLARE Counter : INTEGER
DECLARE EvenCount : INTEGER

OUTPUT "Enter start number: "
INPUT Start
OUTPUT "Enter end number: "
INPUT End

// Make sure Start is even
IF Start MOD 2 <> 0
   THEN
      Start ← Start + 1
ENDIF

EvenCount ← 0

FOR Counter ← Start TO End STEP 2
   OUTPUT Counter
   EvenCount ← EvenCount + 1
NEXT Counter

OUTPUT "Total even numbers found: ", EvenCount`}
        explanation={`This uses several concepts together:

MOD to check odd/even (from Day 2):
• If Start MOD 2 <> 0, Start is odd → add 1 to make it even
• For example: Start = 3 → 3 MOD 2 = 1 (not 0) → Start becomes 4

FOR with STEP 2 (from today):
• Starting from an even number, STEP 2 hits every even number
• For example: 4, 6, 8, 10, 12...

Why FOR? Because once we know Start and End, we know exactly the range. STEP 2 makes it efficient — we don't need to check each number with MOD.

Example run: Start = 3, End = 12
• Start becomes 4 (was odd)
• FOR Counter ← 4 TO 12 STEP 2
• Output: 4, 6, 8, 10, 12
• Total even numbers found: 5

This combines Day 2 (MOD) + Day 4 (FOR with STEP) — exactly what the exam loves to do!`}
      />

      {/* Exercise 5: Countdown timer */}
      <Exercise
        number={5}
        title="🌟 Countdown timer from N to 0"
        description={"Ask the user for a starting number N. Then count down from N to 0, outputting each number. When you reach 0, output BLAST OFF! Also make it output a message at the halfway point saying Halfway there! Use a FOR loop with a negative STEP."}
        hints={[
          "Use a FOR loop with STEP -1 to count backwards: FOR Counter ← N TO 0 STEP -1",
          "To find the halfway point, calculate: Halfway ← N DIV 2. Inside the loop, check IF Counter = Halfway.",
          "After the loop ends, output the blast-off message. Remember: the loop already outputs 0 as the last number."
        ]}
        solution={`DECLARE N : INTEGER
DECLARE Counter : INTEGER
DECLARE Halfway : INTEGER

OUTPUT "Enter countdown start: "
INPUT N

Halfway ← N DIV 2

OUTPUT "Countdown starting from ", N, "..."
OUTPUT ""

FOR Counter ← N TO 0 STEP -1
   OUTPUT Counter
   IF Counter = Halfway
      THEN
         OUTPUT "** Halfway there! **"
   ENDIF
NEXT Counter

OUTPUT ""
OUTPUT "BLAST OFF!"`}
        explanation={`This uses a FOR loop with STEP -1 to count backwards.

Key concepts:
• FOR Counter ← N TO 0 STEP -1 counts DOWN
• STEP -1 means subtract 1 each time (N, N-1, N-2, ... 1, 0)
• Inside the loop, we check IF Counter = Halfway for the midpoint message

Why FOR? Because we know exactly how many times to repeat: from N down to 0.

DIV for halfway (from Day 2):
• Halfway ← N DIV 2 gives integer division
• If N = 10: Halfway = 5
• If N = 7: Halfway = 3 (DIV rounds down — 7 DIV 2 = 3, not 3.5)

Example run with N = 6:
• Halfway = 6 DIV 2 = 3
• Output: 6, 5, 4, 3, "** Halfway there! **", 2, 1, 0
• Then outputs "BLAST OFF!"

This combines:
• FOR with STEP -1 (counting backwards)
• DIV (finding the halfway point — Day 2)
• IF inside a loop (Day 3 + Day 4 combined)
• String output

A great exercise because it tests multiple concepts together — just like exam questions do!`}
      />

      <div className="tip-box mt-8">
        <p className="font-bold text-amber-800">💡 Self-Assessment</p>
        <p className="text-amber-900 mt-1">
          Before moving on, ask yourself:
        </p>
        <ul className="list-disc list-inside text-amber-900 text-sm mt-2 space-y-1">
          <li>Can I write a FOR loop with and without STEP (including negative STEP)?</li>
          <li>Can I write a WHILE loop with proper initialisation and combined conditions?</li>
          <li>Can I write a REPEAT...UNTIL for input validation?</li>
          <li>Can I explain WHY I chose each loop type?</li>
          <li>Can I trace through a loop and predict the output?</li>
          <li>Can I combine loops with IF statements and operators from earlier days?</li>
        </ul>
        <p className="text-amber-800 text-sm mt-2 font-bold">If yes to all → move to the Quiz! If not → re-read the relevant section.</p>
      </div>
    </div>
  );
}
