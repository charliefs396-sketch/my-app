import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Bonus';
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Multiplication Table',
    description: 'Ask the user for a number, then print its multiplication table from 1 to 12. Format each line as: "5 x 3 = 15"',
    difficulty: 'Easy',
    hints: [
      'Use a FOR loop with range(1, 13) — that gives 1 to 12',
      'Calculate result = number * i inside the loop',
      'Use an f-string to format: f"{number} x {i} = {result}"',
    ],
    solution: `n = int(input("Enter a number: "))

for i in range(1, 13):
    result = n * i
    print(f"{n} x {i} = {result}")`,
    explanation: 'range(1, 13) gives 1,2,3,...,12. We multiply n by each value of i and format the output with f-string.'
  },
  {
    id: 2,
    title: 'Sum of 1 to N',
    description: 'Ask the user for a number N. Calculate and display the sum of all integers from 1 to N. Also display the average.',
    difficulty: 'Easy',
    hints: [
      'Initialise total = 0 BEFORE the loop',
      'Use range(1, N+1) to include N',
      'Use total += i inside the loop',
      'Average = total / N (use float division)',
    ],
    solution: `n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total += i

average = total / n
print(f"Sum of 1 to {n} = {total}")
print(f"Average = {average:.2f}")`,
    explanation: 'The accumulator total starts at 0, then each i from 1 to N is added. range(1, n+1) ensures we include n. Average uses :.2f for 2 decimal places.'
  },
  {
    id: 3,
    title: 'Password with Max 3 Attempts',
    description: 'Ask the user for a password. Give them maximum 3 attempts. After 3 wrong attempts, display "Account locked". If correct, display "Access granted". The correct password is "python123".',
    difficulty: 'Medium',
    hints: [
      'Use a WHILE loop with condition: attempts < 3 and password != "python123"',
      'Initialise attempts = 0 and password = "" before the loop',
      'Increment attempts inside the loop',
      'After the loop, check IF password is correct to decide which message to show',
    ],
    solution: `correct = "python123"
attempts = 0
password = ""

while attempts < 3 and password != correct:
    password = input("Enter password: ")
    attempts += 1
    if password != correct and attempts < 3:
        print(f"Wrong! {3 - attempts} attempts remaining")

if password == correct:
    print("Access granted!")
else:
    print(f"Account locked after {attempts} attempts")`,
    explanation: 'The while condition uses AND — both must be true to continue. We track attempts with a counter. After the loop, we check if password is correct to decide which message to print.'
  },
  {
    id: 4,
    title: 'Guess the Number Game',
    description: 'Generate a random number between 1 and 100. Keep asking the user to guess until they get it right. Tell them if their guess is too high or too low. Count and display the number of guesses at the end.',
    difficulty: 'Hard',
    hints: [
      'Use: import random then secret = random.randint(1, 100)',
      'Use while True with break when guess == secret',
      'Use if/elif to tell user "Too high" or "Too low"',
      'Increment a guesses counter each attempt',
    ],
    solution: `import random

secret = random.randint(1, 100)
guesses = 0

print("I'm thinking of a number between 1 and 100!")

while True:
    guess = int(input("Your guess: "))
    guesses += 1
    
    if guess == secret:
        print(f"Correct! You got it in {guesses} guesses!")
        break
    elif guess < secret:
        print("Too low! Try higher.")
    else:
        print("Too high! Try lower.")`,
    explanation: 'random.randint(1, 100) gives a random integer including both 1 and 100. while True runs until break. The elif chain handles all three cases: correct, too low, too high.'
  },
];

export default function Py4Practice() {
  const [revealed, setRevealed] = useState<Record<number, { hints: number; solution: boolean }>>({});

  const getState = (id: number) => revealed[id] || { hints: 0, solution: false };

  const revealHint = (id: number, total: number) => {
    const state = getState(id);
    if (state.hints < total) {
      setRevealed(prev => ({ ...prev, [id]: { ...getState(id), hints: state.hints + 1 } }));
    }
  };

  const revealSolution = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: { ...getState(id), solution: true } }));
  };

  const difficultyColor = (d: string) => {
    if (d === 'Easy') return 'bg-green-100 text-green-700';
    if (d === 'Medium') return 'bg-amber-100 text-amber-700';
    if (d === 'Hard') return 'bg-red-100 text-red-700';
    return 'bg-purple-100 text-purple-700';
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ✍️ Practice — Loops
      </h1>
      <p className="text-gray-500 text-lg mb-8">Write the code yourself first — only peek at hints if stuck!</p>

      <div className="space-y-8">
        {exercises.map((ex) => {
          const state = getState(ex.id);
          return (
            <div key={ex.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                      {ex.id}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">{ex.title}</h2>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor(ex.difficulty)}`}>
                    {ex.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{ex.description}</p>
              </div>

              <div className="p-6 space-y-4">
                {/* Hints */}
                {state.hints > 0 && (
                  <div className="space-y-2">
                    {ex.hints.slice(0, state.hints).map((hint, i) => (
                      <div key={i} className="flex items-start gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                        <span className="text-amber-500 font-bold text-sm mt-0.5">💡 Hint {i + 1}:</span>
                        <p className="text-amber-800 text-sm">{hint}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Solution */}
                {state.solution && (
                  <div>
                    <p className="text-sm font-bold text-green-700 mb-2">✅ Solution:</p>
                    <CodeBlock language="python" code={ex.solution} />
                    <div className="mt-3 bg-blue-50 rounded-xl p-3 border border-blue-100">
                      <p className="text-sm text-blue-800"><strong>💬 Explanation:</strong> {ex.explanation}</p>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  {state.hints < ex.hints.length && !state.solution && (
                    <button
                      onClick={() => revealHint(ex.id, ex.hints.length)}
                      className="px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-sm font-semibold hover:bg-amber-200 transition-colors"
                    >
                      💡 Hint {state.hints + 1} of {ex.hints.length}
                    </button>
                  )}
                  {!state.solution && (
                    <button
                      onClick={() => revealSolution(ex.id)}
                      className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-semibold hover:bg-emerald-200 transition-colors"
                    >
                      ✅ Show Solution
                    </button>
                  )}
                  {state.solution && (
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-semibold">
                      ✓ Solution revealed
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus challenge */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-800 mb-2">🌟 Bonus Challenge</h2>
        <p className="text-purple-700 mb-4">FizzBuzz — the classic interview question! Print numbers 1-50. But for multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".</p>
        <CodeBlock language="python" code={`for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")      # check BOTH first!
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`} />
        <p className="text-sm text-purple-600 mt-3"><strong>Key:</strong> Check the BOTH condition first (% 3 == 0 and % 5 == 0), otherwise 15 would print "Fizz" instead of "FizzBuzz"!</p>
      </div>
    </div>
  );
}
