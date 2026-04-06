import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    title: "Exercise 1: Extract Each Digit from a 5-Digit Number",
    description: "Write pseudocode that inputs a 5-digit number (e.g. 48372) and outputs each digit on a separate line. Use DIV and MOD — no string functions allowed!",
    hints: [
      "MOD 10 gives you the LAST digit of any number. Example: 48372 MOD 10 = 2",
      "DIV 10 REMOVES the last digit. Example: 48372 DIV 10 = 4837",
      "But you need to start from the FIRST digit. Think about what you divide by to get the first digit of a 5-digit number. Hint: DIV 10000",
      "Pattern: Get first digit with DIV 10000, then remove it with MOD 10000. Then DIV 1000 for the next digit, and so on."
    ],
    solution: `DECLARE Number : INTEGER
DECLARE Digit : INTEGER

OUTPUT "Enter a 5-digit number: "
INPUT Number

// Extract digit 1 (ten-thousands place)
Digit ← Number DIV 10000
OUTPUT "Digit 1: ", Digit

// Remove first digit, get remaining 4-digit number
Number ← Number MOD 10000
// e.g. 48372 MOD 10000 = 8372

// Extract digit 2 (thousands place)
Digit ← Number DIV 1000
OUTPUT "Digit 2: ", Digit

// Remove digit 2
Number ← Number MOD 1000
// e.g. 8372 MOD 1000 = 372

// Extract digit 3 (hundreds place)
Digit ← Number DIV 100
OUTPUT "Digit 3: ", Digit

// Remove digit 3
Number ← Number MOD 100
// e.g. 372 MOD 100 = 72

// Extract digit 4 (tens place)
Digit ← Number DIV 10
OUTPUT "Digit 4: ", Digit

// Extract digit 5 (units place)
Digit ← Number MOD 10
OUTPUT "Digit 5: ", Digit`,
    explanation: "The key pattern is: DIV gets a digit, MOD removes that digit. For a 5-digit number like 48372:\n• 48372 DIV 10000 = 4 (first digit) → 48372 MOD 10000 = 8372\n• 8372 DIV 1000 = 8 (second digit) → 8372 MOD 1000 = 372\n• 372 DIV 100 = 3 (third digit) → 372 MOD 100 = 72\n• 72 DIV 10 = 7 (fourth digit)\n• 72 MOD 10 = 2 (fifth digit)\n\nThis is a CLASSIC exam question. Memorise the pattern!"
  },
  {
    title: "Exercise 2: Hours, Minutes, Seconds → Total Seconds",
    description: "Write pseudocode that inputs hours, minutes, and seconds separately, then calculates and outputs the total number of seconds.",
    hints: [
      "1 hour = 3600 seconds (60 × 60)",
      "1 minute = 60 seconds",
      "Total = (Hours × 3600) + (Minutes × 60) + Seconds",
      "Don't forget to DECLARE all your variables with the correct data types!"
    ],
    solution: `DECLARE Hours : INTEGER
DECLARE Minutes : INTEGER
DECLARE Seconds : INTEGER
DECLARE TotalSeconds : INTEGER

OUTPUT "Enter hours: "
INPUT Hours
OUTPUT "Enter minutes: "
INPUT Minutes
OUTPUT "Enter seconds: "
INPUT Seconds

// Convert everything to seconds
TotalSeconds ← (Hours * 3600) + (Minutes * 60) + Seconds

OUTPUT Hours, "h ", Minutes, "m ", Seconds, "s"
OUTPUT "= ", TotalSeconds, " total seconds"

// Example: 2h 30m 45s
// = (2 * 3600) + (30 * 60) + 45
// = 7200 + 1800 + 45
// = 9045 seconds`,
    explanation: "This is straightforward multiplication and addition:\n• Hours × 3600 converts hours to seconds\n• Minutes × 60 converts minutes to seconds\n• Seconds are already in seconds\n• Add them all up!\n\nThe brackets aren't strictly necessary here (× has higher precedence than +), but they make it clearer."
  },
  {
    title: "Exercise 3: Total Seconds → Hours, Minutes, Seconds",
    description: "Write pseudocode that inputs a total number of seconds (e.g. 9045) and converts it back into hours, minutes, and seconds. This is the REVERSE of Exercise 2. You MUST use DIV and MOD!",
    hints: [
      "Hours = TotalSeconds DIV 3600 (how many complete hours?)",
      "After extracting hours, you need the REMAINING seconds: Remaining ← TotalSeconds MOD 3600",
      "Minutes = Remaining DIV 60 (how many complete minutes in the remaining seconds?)",
      "Seconds = Remaining MOD 60 (what's left after extracting minutes)"
    ],
    solution: `DECLARE TotalSeconds : INTEGER
DECLARE Hours : INTEGER
DECLARE Minutes : INTEGER
DECLARE Seconds : INTEGER
DECLARE Remaining : INTEGER

OUTPUT "Enter total seconds: "
INPUT TotalSeconds

// Step 1: Extract hours
Hours ← TotalSeconds DIV 3600
// 9045 DIV 3600 = 2 hours

// Step 2: Get remaining seconds after removing hours
Remaining ← TotalSeconds MOD 3600
// 9045 MOD 3600 = 1845 seconds left

// Step 3: Extract minutes from remaining
Minutes ← Remaining DIV 60
// 1845 DIV 60 = 30 minutes

// Step 4: Get remaining seconds after removing minutes
Seconds ← Remaining MOD 60
// 1845 MOD 60 = 45 seconds

OUTPUT TotalSeconds, " seconds = "
OUTPUT Hours, " hours, ", Minutes, " minutes, ", Seconds, " seconds"
// Outputs: 9045 seconds = 2 hours, 30 minutes, 45 seconds`,
    explanation: "This is the REVERSE of Exercise 2 and it's a classic DIV/MOD problem!\n\nThe pattern is exactly like the digit extraction:\n1. DIV to extract the largest unit (hours)\n2. MOD to get the remainder\n3. DIV the remainder to extract the next unit (minutes)\n4. MOD the remainder to get the final value (seconds)\n\n9045 → DIV 3600 = 2 hours → MOD 3600 = 1845 remaining → DIV 60 = 30 minutes → MOD 60 = 45 seconds"
  },
  {
    title: "🌟 Bonus: Complete Digit Analysis",
    description: "Write pseudocode that inputs a 3-digit number, extracts each digit, then outputs: the sum of all digits, the reverse of the number, and whether the number is a palindrome (reads the same forwards and backwards, like 121 or 343).",
    hints: [
      "Extract: D1 ← Num DIV 100, D2 ← (Num DIV 10) MOD 10, D3 ← Num MOD 10",
      "Sum of digits: D1 + D2 + D3",
      "Reverse: D3 * 100 + D2 * 10 + D1",
      "Palindrome: A 3-digit number is a palindrome if the first digit equals the last digit (D1 = D3)"
    ],
    solution: `DECLARE Num : INTEGER
DECLARE D1 : INTEGER
DECLARE D2 : INTEGER
DECLARE D3 : INTEGER
DECLARE DigitSum : INTEGER
DECLARE Reversed : INTEGER

OUTPUT "Enter a 3-digit number: "
INPUT Num

// Extract each digit
D1 ← Num DIV 100         // hundreds digit
D2 ← (Num DIV 10) MOD 10 // tens digit  
D3 ← Num MOD 10          // units digit

OUTPUT "Digit 1: ", D1
OUTPUT "Digit 2: ", D2
OUTPUT "Digit 3: ", D3

// Sum of digits
DigitSum ← D1 + D2 + D3
OUTPUT "Sum of digits: ", DigitSum

// Reverse the number
Reversed ← D3 * 100 + D2 * 10 + D1
OUTPUT "Reversed: ", Reversed

// Check palindrome
IF Num = Reversed THEN
    OUTPUT Num, " is a palindrome!"
ELSE
    OUTPUT Num, " is NOT a palindrome"
ENDIF

// Example with 483:
// D1 = 4, D2 = 8, D3 = 3
// Sum = 15, Reversed = 384
// 483 <> 384 so NOT a palindrome

// Example with 343:
// D1 = 3, D2 = 4, D3 = 3
// Sum = 10, Reversed = 343
// 343 = 343 so IS a palindrome!`,
    explanation: "This combines everything from Day 2:\n• DIV and MOD for digit extraction\n• Arithmetic (+, *) for sum and reverse\n• Comparison (=) for palindrome check\n• IF/ELSE for the decision\n\nNote the clever trick for the tens digit: (Num DIV 10) MOD 10\n• 483 DIV 10 = 48, then 48 MOD 10 = 8 ✓"
  }
];

export default function D2Practice() {
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealNextHint = (exerciseIndex: number) => {
    const currentRevealed = revealedHints[exerciseIndex] || 0;
    if (currentRevealed < exercises[exerciseIndex].hints.length) {
      setRevealedHints(prev => ({ ...prev, [exerciseIndex]: currentRevealed + 1 }));
    }
  };

  const toggleSolution = (exerciseIndex: number) => {
    setShowSolution(prev => ({ ...prev, [exerciseIndex]: !prev[exerciseIndex] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Day 2 Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">Apply everything you learned — DIV, MOD, operators, and conversions</p>

      <div className="tip-box mb-8">
        <p className="font-bold text-amber-800">📝 How to Practice</p>
        <p className="text-amber-900 mt-1">
          <strong>Try each exercise on paper first!</strong> Write the pseudocode without looking at hints. 
          Then reveal hints one at a time if you're stuck. Only look at the solution after you've really tried. 
          The digit extraction exercise is a <strong>classic exam question</strong> — you WILL see it!
        </p>
      </div>

      <div className="space-y-8">
        {exercises.map((exercise, idx) => {
          const hintsRevealed = revealedHints[idx] || 0;
          const solutionShown = showSolution[idx] || false;

          return (
            <div key={idx} className="section-card">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{exercise.title}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{exercise.description}</p>

              {/* Hints */}
              <div className="mb-4">
                <button
                  onClick={() => revealNextHint(idx)}
                  disabled={hintsRevealed >= exercise.hints.length}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                    hintsRevealed >= exercise.hints.length
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  }`}
                >
                  {hintsRevealed >= exercise.hints.length
                    ? `All ${exercise.hints.length} hints revealed`
                    : `💡 Reveal Hint ${hintsRevealed + 1} of ${exercise.hints.length}`}
                </button>

                {hintsRevealed > 0 && (
                  <div className="mt-3 space-y-2">
                    {exercise.hints.slice(0, hintsRevealed).map((hint, hIdx) => (
                      <div key={hIdx} className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800 animate-fade-in-up">
                        <span className="font-bold">Hint {hIdx + 1}:</span> {hint}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Solution */}
              <button
                onClick={() => toggleSolution(idx)}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  solutionShown
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                {solutionShown ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>

              {solutionShown && (
                <div className="mt-4 animate-fade-in-up">
                  <CodeBlock title="Solution" code={exercise.solution} />
                  <div className="mt-4 bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-2">💡 Explanation</p>
                    <p className="text-green-700 text-sm whitespace-pre-line">{exercise.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
