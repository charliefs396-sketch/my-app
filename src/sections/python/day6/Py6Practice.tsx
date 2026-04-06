import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

interface Exercise {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Bonus';
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 'ex1',
    title: 'Max, Min, Average WITHOUT built-ins',
    difficulty: 'Medium',
    description: 'Store 10 numbers entered by the user in a list. Find and display the maximum, minimum, and average WITHOUT using max(), min(), or sum() functions. Write the algorithm yourself.',
    hints: [
      'Use a for loop to input 10 numbers with append()',
      'Start maximum = numbers[0] and minimum = numbers[0] BEFORE the loop',
      'Compare each number to current max/min inside the loop',
      'For average: accumulate total in a loop, then divide by len(numbers)',
    ],
    solution: `numbers = []
for i in range(10):
    num = float(input(f"Enter number {i+1}: "))
    numbers.append(num)

# Find max
maximum = numbers[0]
for num in numbers:
    if num > maximum:
        maximum = num

# Find min
minimum = numbers[0]
for num in numbers:
    if num < minimum:
        minimum = num

# Calculate average
total = 0
for num in numbers:
    total += num
average = total / len(numbers)

print(f"Maximum: {maximum}")
print(f"Minimum: {minimum}")
print(f"Average: {average:.2f}")`,
    explanation: 'Always initialise max/min to numbers[0], not 0! If all numbers are negative, initialising to 0 would give wrong answer. Use separate loops for clarity in exams.'
  },
  {
    id: 'ex2',
    title: 'Count Values Above Average',
    difficulty: 'Medium',
    description: 'Input 8 test scores from the user. Calculate the average, then count and display how many scores are above average AND how many are below average.',
    hints: [
      'You need TWO passes through the list — one for average, one for counting',
      'You cannot count above/below average in the SAME loop as calculating average (you don\'t know average yet!)',
      'Use two counters: above_count and below_count',
      'What about scores equal to average? Don\'t count them in either!',
    ],
    solution: `scores = []
for i in range(8):
    score = float(input(f"Enter score {i+1}: "))
    scores.append(score)

# Pass 1: Calculate average
total = 0
for score in scores:
    total += score
average = total / len(scores)

# Pass 2: Count above and below
above_count = 0
below_count = 0
for score in scores:
    if score > average:
        above_count += 1
    elif score < average:
        below_count += 1

print(f"Average: {average:.2f}")
print(f"Above average: {above_count}")
print(f"Below average: {below_count}")
print(f"Equal to average: {len(scores) - above_count - below_count}")`,
    explanation: 'The TWO PASS approach is critical — you MUST calculate average first (pass 1), then count (pass 2). This is a very common exam question!'
  },
  {
    id: 'ex3',
    title: 'Remove All Occurrences',
    difficulty: 'Hard',
    description: 'Create a list of 10 numbers (include some duplicates). Ask the user for a value to remove. Remove ALL occurrences of that value from the list and display the result.',
    hints: [
      'Cannot remove while iterating forwards — list changes size and you skip elements',
      'Method 1: Loop backwards using while i >= 0',
      'Method 2: Build a new list with only the items you want to keep',
      'Print the count of how many items were removed',
    ],
    solution: `# Input 10 numbers
numbers = []
for i in range(10):
    num = int(input(f"Enter number {i+1}: "))
    numbers.append(num)

print(f"Original list: {numbers}")

target = int(input("Enter value to remove: "))

# Count occurrences first
count = numbers.count(target)

# Remove all occurrences using new list method
new_list = []
for num in numbers:
    if num != target:
        new_list.append(num)

print(f"Removed {count} occurrence(s) of {target}")
print(f"New list: {new_list}")`,
    explanation: 'Building a new list with items that do NOT match is the safest approach in exams. Avoid modifying a list while iterating through it forwards.'
  },
  {
    id: 'ex4',
    title: '🌟 Bonus: Student Marks System',
    difficulty: 'Bonus',
    description: 'Input names and marks for 5 students into two parallel lists. Display: all students and marks, the student with the highest mark, all students who passed (mark >= 50), and the class average.',
    hints: [
      'Use TWO lists: names = [] and marks = []',
      'Use append() to add to both lists in the same loop',
      'For highest: track both max_mark AND max_name using the same index',
      'For passed students: loop through range(len(names)) and check marks[i]',
    ],
    solution: `names = []
marks = []

# Input
for i in range(5):
    name = input(f"Enter student {i+1} name: ")
    mark = int(input(f"Enter {name}'s mark: "))
    names.append(name)
    marks.append(mark)

# Display all
print("\\n--- All Students ---")
for i in range(len(names)):
    print(f"{names[i]}: {marks[i]}")

# Find highest
max_mark = marks[0]
max_name = names[0]
for i in range(len(marks)):
    if marks[i] > max_mark:
        max_mark = marks[i]
        max_name = names[i]
print(f"\\nHighest: {max_name} with {max_mark}")

# Students who passed
print("\\n--- Passed Students ---")
for i in range(len(names)):
    if marks[i] >= 50:
        print(f"{names[i]}: {marks[i]}")

# Average
total = 0
for mark in marks:
    total += mark
average = total / len(marks)
print(f"\\nClass Average: {average:.1f}")`,
    explanation: 'Parallel lists are the Python equivalent of pseudocode parallel arrays. Always use the same index i to access both lists together.'
  }
];

export default function Py6Practice() {
  const [revealed, setRevealed] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const revealHint = (id: string, total: number) => {
    setRevealed(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, total) }));
  };

  const diffColor: Record<string, string> = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-amber-100 text-amber-700',
    Hard: 'bg-red-100 text-red-700',
    Bonus: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Lists</h1>
      <p className="text-gray-500 mb-6">4 exercises covering all key list patterns</p>

      <div className="space-y-8">
        {exercises.map((ex, idx) => (
          <div key={ex.id} className="card border-t-4 border-emerald-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-black text-gray-400">#{idx + 1}</span>
                  <h3 className="text-xl font-bold text-gray-900">{ex.title}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${diffColor[ex.difficulty]}`}>
                  {ex.difficulty}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-gray-700">{ex.description}</p>
            </div>

            {/* Hints */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-gray-600">
                  Hints revealed: {revealed[ex.id] || 0}/{ex.hints.length}
                </span>
                {(revealed[ex.id] || 0) < ex.hints.length && (
                  <button
                    onClick={() => revealHint(ex.id, ex.hints.length)}
                    className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 font-semibold"
                  >
                    💡 Show Hint
                  </button>
                )}
              </div>
              {(revealed[ex.id] || 0) > 0 && (
                <div className="space-y-2">
                  {ex.hints.slice(0, revealed[ex.id] || 0).map((hint, i) => (
                    <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg p-2">
                      <span className="text-amber-500 font-bold text-sm">💡</span>
                      <p className="text-amber-800 text-sm">{hint}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solution */}
            <button
              onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
              className="w-full py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition mb-3"
            >
              {showSolution[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}
            </button>

            {showSolution[ex.id] && (
              <div className="animate-fade-in-up">
                <CodeBlock language="python" code={ex.solution} />
                <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="font-bold text-blue-700 text-sm mb-1">💡 Why this works:</p>
                  <p className="text-blue-700 text-sm">{ex.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
