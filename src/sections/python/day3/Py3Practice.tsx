import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 'leap-year',
    title: 'Leap Year Checker',
    description: 'Write a Python program that inputs a year and outputs whether it is a leap year or not.\n\nA leap year rule:\n• Divisible by 4 → leap year\n• BUT if divisible by 100 → NOT a leap year\n• UNLESS also divisible by 400 → IS a leap year\n\nExamples: 2000 ✓ leap, 1900 ✗ not leap, 2024 ✓ leap, 2023 ✗ not leap',
    difficulty: 'Medium',
    hints: [
      'Use % (modulus) to check divisibility. If year % 4 == 0, it\'s divisible by 4.',
      'The order matters! Check 400 first, then 100, then 4. Use elif so only one runs.',
      'A year divisible by 400 is ALWAYS a leap year (overrides the 100 rule).',
      'Structure: if % 400 == 0 → leap. elif % 100 == 0 → not leap. elif % 4 == 0 → leap. else → not leap.',
    ],
    solution: `year = int(input("Enter a year: "))

if year % 400 == 0:
    print(f"{year} is a leap year")
elif year % 100 == 0:
    print(f"{year} is NOT a leap year")
elif year % 4 == 0:
    print(f"{year} is a leap year")
else:
    print(f"{year} is NOT a leap year")`,
    explanation: 'The order of checks is critical: check 400 first (most restrictive), then 100, then 4. This is because 2000 is divisible by all three but IS a leap year. If we checked 4 first, we\'d wrongly say 1900 is a leap year.',
  },
  {
    id: 'triangle',
    title: 'Triangle Classifier',
    description: 'Write a program that inputs 3 side lengths and classifies the triangle:\n• Equilateral: all 3 sides equal\n• Isosceles: exactly 2 sides equal\n• Scalene: all 3 sides different\n• Invalid: if any side is 0 or negative, or if the triangle inequality fails (a+b must be > c for any two sides)\n\nTriangle inequality: the sum of any two sides must be greater than the third side.',
    difficulty: 'Medium',
    hints: [
      'First validate: check if all sides are > 0 before anything else.',
      'Triangle inequality: a + b > c AND a + c > b AND b + c > a. If any fails, invalid triangle.',
      'For equilateral: a == b and b == c (all three equal).',
      'For isosceles: check if any TWO are equal: a == b or b == c or a == c. Note: equilateral also satisfies this, so check equilateral first!',
    ],
    solution: `a = float(input("Enter side 1: "))
b = float(input("Enter side 2: "))
c = float(input("Enter side 3: "))

# First check validity
if a <= 0 or b <= 0 or c <= 0:
    print("Invalid: sides must be positive")
elif a + b <= c or a + c <= b or b + c <= a:
    print("Invalid: not a valid triangle")
elif a == b and b == c:
    print("Equilateral triangle")
elif a == b or b == c or a == c:
    print("Isosceles triangle")
else:
    print("Scalene triangle")`,
    explanation: 'Always validate input first. Then check equilateral before isosceles — since equilateral also has two equal sides, checking isosceles first would give wrong results for equilateral triangles.',
  },
  {
    id: 'menu',
    title: 'Simple Menu System',
    description: 'Write a program that shows a menu and handles the user\'s choice:\n1 = Add (print "Adding item...")\n2 = Delete (print "Deleting item...")\n3 = Search (print "Searching...")\n4 = Quit (print "Goodbye!")\nAnything else = "Invalid choice!"\n\nBonus: Use a while loop to keep showing the menu until the user picks 4.',
    difficulty: 'Easy',
    hints: [
      'Use elif for options 1, 2, 3, 4 and else for invalid.',
      'Convert input to int first: choice = int(input(...))',
      'For the bonus loop version, use: while choice != 4:',
      'Make sure to get the next choice at the end of the while loop body.',
    ],
    solution: `# Basic version
print("=== MENU ===")
print("1. Add")
print("2. Delete")
print("3. Search")
print("4. Quit")

choice = int(input("Enter choice (1-4): "))

if choice == 1:
    print("Adding item...")
elif choice == 2:
    print("Deleting item...")
elif choice == 3:
    print("Searching...")
elif choice == 4:
    print("Goodbye!")
else:
    print("Invalid choice! Please enter 1-4")

# Bonus: Loop version
print()
print("=== LOOP VERSION ===")
choice = 0

while choice != 4:
    print("\\n1. Add  2. Delete  3. Search  4. Quit")
    choice = int(input("Choice: "))
    
    if choice == 1:
        print("Adding item...")
    elif choice == 2:
        print("Deleting item...")
    elif choice == 3:
        print("Searching...")
    elif choice == 4:
        print("Goodbye!")
    else:
        print("Invalid! Try again.")`,
    explanation: 'The basic version checks once. The loop version keeps running until the user picks 4. Notice choice = 0 initialises the variable before the while loop so the condition can be checked.',
  },
  {
    id: 'bonus',
    title: '🌟 Bonus: Ticket Pricing System',
    description: 'A cinema charges:\n• Under 5: Free\n• 5 to 12: £5.00\n• 13 to 17: £7.50\n• 18 to 64: £10.00\n• 65 and over: £6.00\n• Also: if it\'s a Wednesday, everyone gets 20% off\n\nInput: age and whether it\'s Wednesday (yes/no). Output: price to pay.',
    difficulty: 'Hard',
    hints: [
      'Use elif chain to determine base price based on age.',
      'After setting the base price, check if day == "wednesday" (use .lower() to handle case).',
      'Apply 20% discount: price = price * 0.80 (or price * (1 - 0.20))',
      'Use f-string with :.2f to format to 2 decimal places: f"£{price:.2f}"',
    ],
    solution: `age = int(input("Enter age: "))
day = input("Is it Wednesday? (yes/no): ").lower()

# Determine base price
if age < 5:
    price = 0.00
elif age <= 12:
    price = 5.00
elif age <= 17:
    price = 7.50
elif age <= 64:
    price = 10.00
else:
    price = 6.00

# Wednesday discount
if day == "yes":
    price = price * 0.80
    print("Wednesday discount applied!")

if price == 0:
    print("Free entry!")
else:
    print(f"Ticket price: £{price:.2f}")`,
    explanation: 'Two separate IF chains: one for age-based pricing, one for the Wednesday discount. Using :.2f ensures the price always shows 2 decimal places (e.g. £8.00 not £8.0).',
  },
];

export default function Py3Practice() {
  const [revealed, setRevealed] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const revealHint = (id: string, total: number) => {
    setRevealed(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, total) }));
  };

  const toggleSolution = (id: string) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-8">Day 3 — IF Statements in Python</p>

      <div className="space-y-8">
        {exercises.map((ex) => (
          <div key={ex.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 p-6 border-b border-gray-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-bold text-gray-900">{ex.title}</h2>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    ex.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    ex.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>{ex.difficulty}</span>
                </div>
                <pre className="text-gray-600 text-sm whitespace-pre-wrap font-sans">{ex.description}</pre>
              </div>
            </div>

            <div className="p-6">
              {/* Hints */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-700">💡 Hints</h3>
                  <button
                    onClick={() => revealHint(ex.id, ex.hints.length)}
                    disabled={(revealed[ex.id] || 0) >= ex.hints.length}
                    className="text-sm bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full font-semibold hover:bg-amber-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {(revealed[ex.id] || 0) >= ex.hints.length ? 'All hints shown' : `Reveal hint ${(revealed[ex.id] || 0) + 1}/${ex.hints.length}`}
                  </button>
                </div>
                {(revealed[ex.id] || 0) === 0 && (
                  <p className="text-gray-400 text-sm italic">Try it yourself first! Click "Reveal hint" if you're stuck.</p>
                )}
                <div className="space-y-2">
                  {ex.hints.slice(0, revealed[ex.id] || 0).map((hint, i) => (
                    <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3">
                      <span className="text-amber-500 font-bold text-sm flex-shrink-0">#{i + 1}</span>
                      <p className="text-amber-800 text-sm">{hint}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <button
                  onClick={() => toggleSolution(ex.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <span className="font-semibold text-gray-700">{showSolution[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}</span>
                  <span className="text-gray-400">{showSolution[ex.id] ? '▲' : '▼'}</span>
                </button>
                {showSolution[ex.id] && (
                  <div className="mt-4 space-y-4">
                    <CodeBlock language="python" code={ex.solution} />
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <h4 className="font-bold text-blue-800 mb-2">📝 Explanation</h4>
                      <p className="text-blue-700 text-sm">{ex.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
