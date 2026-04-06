import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "⏱️ Seconds Converter",
    description: "Input a number of seconds (e.g. 3661) and convert it to hours, minutes, and seconds format (e.g. 1 hour 1 minute 1 second). Use // and % operators.",
    hints: [
      "Hours = total_seconds // 3600 (3600 seconds in an hour)",
      "Remaining seconds after removing hours = total_seconds % 3600",
      "Minutes = remaining // 60",
      "Seconds left = remaining % 60",
      "Use f-string to format: f'{hours}h {minutes}m {seconds}s'",
    ],
    solution: `total_seconds = int(input("Enter seconds: "))

hours   = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60

print(f"{hours} hour(s), {minutes} minute(s), {seconds} second(s)")

# Test: 3661 seconds = 1h 1m 1s
# Test: 7384 seconds = 2h 3m 4s`,
    explanation: "Uses // for integer division to find whole hours/minutes, and % to get the remainder for the next unit. This is the classic time conversion pattern — it appears in almost every A Level exam!"
  },
  {
    id: 2,
    title: "🏷️ Tax Calculator",
    description: "Input a price and a tax rate (as a percentage, e.g. 15). Calculate and display the tax amount, and the total price including tax. Round to 2 decimal places.",
    hints: [
      "tax_rate comes in as percentage — divide by 100 to get decimal (15% → 0.15)",
      "tax_amount = price * (tax_rate / 100)",
      "total = price + tax_amount",
      "Use :.2f inside f-string to round to 2 decimal places",
      "f'{total:.2f}' will format as 2 decimal places",
    ],
    solution: `price = float(input("Enter price: "))
tax_rate = float(input("Enter tax rate (%): "))

tax_amount = price * (tax_rate / 100)
total = price + tax_amount

print(f"Original price: £{price:.2f}")
print(f"Tax ({tax_rate}%):    £{tax_amount:.2f}")
print(f"Total:          £{total:.2f}")

# Test: price=100, tax=15 → tax=15.00, total=115.00
# Test: price=49.99, tax=20 → tax=9.998 → £10.00, total=£59.99`,
    explanation: "Uses float() for decimal inputs, arithmetic operators for calculation, and :.2f formatting for currency display. Notice the tax_rate/100 conversion — percentages always need dividing by 100 first!"
  },
  {
    id: 3,
    title: "🔢 Even or Odd Checker",
    description: "Input a number and check if it's even or odd using the % operator. Then extend it: also check if it's divisible by 3, 5, and both (FizzBuzz style).",
    hints: [
      "Even numbers have remainder 0 when divided by 2: n % 2 == 0",
      "Odd numbers have remainder 1: n % 2 == 1 (or != 0)",
      "Divisible by 3: n % 3 == 0",
      "Divisible by 5: n % 5 == 0",
      "Check 'both' FIRST in FizzBuzz — order matters with if/elif!",
    ],
    solution: `number = int(input("Enter a number: "))

# Even or odd
if number % 2 == 0:
    print(f"{number} is EVEN")
else:
    print(f"{number} is ODD")

# FizzBuzz style divisibility
print()  # blank line
if number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz! (divisible by both 3 and 5)")
elif number % 3 == 0:
    print("Fizz (divisible by 3)")
elif number % 5 == 0:
    print("Buzz (divisible by 5)")
else:
    print(f"{number} is not divisible by 3 or 5")

# Bonus: last digit
last_digit = number % 10
print(f"Last digit: {last_digit}")`,
    explanation: "This exercise shows multiple uses of % in one program. Note that checking 'divisible by BOTH' must come BEFORE checking each individually — otherwise if/elif will match the first true condition and skip the rest!"
  },
  {
    id: 4,
    title: "🌟 BONUS: Digit Extractor",
    description: "Input any 4-digit number and display each digit separately (thousands, hundreds, tens, units). Then reconstruct the original number from the digits to verify.",
    hints: [
      "Validate: use a while loop to keep asking until 1000 <= n <= 9999",
      "Thousands = n // 1000",
      "Hundreds = (n % 1000) // 100",
      "Tens = (n % 100) // 10",
      "Units = n % 10",
    ],
    solution: `# Input with validation
number = int(input("Enter a 4-digit number: "))
while number < 1000 or number > 9999:
    print("Must be a 4-digit number!")
    number = int(input("Enter a 4-digit number: "))

# Extract digits
thousands = number // 1000
hundreds  = (number % 1000) // 100
tens      = (number % 100) // 10
units     = number % 10

# Display
print(f"Number: {number}")
print(f"Thousands: {thousands}")
print(f"Hundreds:  {hundreds}")
print(f"Tens:      {tens}")
print(f"Units:     {units}")

# Verify by rebuilding
rebuilt = thousands*1000 + hundreds*100 + tens*10 + units
print(f"Rebuilt: {rebuilt}")
print(f"Match: {number == rebuilt}")`,
    explanation: "Combines input validation (while loop), digit extraction (// and %), and verification (rebuilding). This exact pattern comes up in A Level exams regularly!"
  },
];

export default function Py2Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (exerciseId: number, total: number) => {
    setRevealed(prev => ({
      ...prev,
      [exerciseId]: Math.min((prev[exerciseId] || 0) + 1, total)
    }));
  };

  const toggleSolution = (exerciseId: number) => {
    setShowSolution(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice Exercises — Day 2</h1>
      <p className="text-gray-500 mb-8">Write these in VS Code and run them. Try solving without hints first — only peek when stuck!</p>

      <div className="space-y-8">
        {exercises.map((exercise) => {
          const hintsShown = revealed[exercise.id] || 0;
          const solutionShown = showSolution[exercise.id] || false;

          return (
            <div key={exercise.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h2>
                <p className="text-gray-600">{exercise.description}</p>
              </div>

              {/* Hints */}
              <div className="p-6 bg-amber-50 border-b border-amber-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-amber-800">💡 Hints ({hintsShown}/{exercise.hints.length} revealed)</p>
                  {hintsShown < exercise.hints.length && (
                    <button
                      onClick={() => revealHint(exercise.id, exercise.hints.length)}
                      className="text-xs bg-amber-200 hover:bg-amber-300 text-amber-800 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                    >
                      Reveal Hint {hintsShown + 1}
                    </button>
                  )}
                </div>
                {hintsShown > 0 && (
                  <ol className="space-y-1.5">
                    {exercise.hints.slice(0, hintsShown).map((hint, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-amber-900">
                        <span className="font-bold text-amber-600 shrink-0">{i + 1}.</span>
                        {hint}
                      </li>
                    ))}
                  </ol>
                )}
                {hintsShown === 0 && (
                  <p className="text-sm text-amber-700">Try it yourself first! Click "Reveal Hint 1" if you're stuck.</p>
                )}
              </div>

              {/* Solution toggle */}
              <div className="p-6">
                <button
                  onClick={() => toggleSolution(exercise.id)}
                  className="text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors mb-4"
                >
                  {solutionShown ? '🙈 Hide Solution' : '👁️ Show Solution'}
                </button>

                {solutionShown && (
                  <div className="space-y-4">
                    <CodeBlock language="python" code={exercise.solution} />
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-sm font-bold text-green-800 mb-1">📖 Explanation</p>
                      <p className="text-sm text-green-700">{exercise.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
