import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py7Practice() {
  const [shown, setShown] = useState<{[key: string]: boolean}>({});
  const toggle = (key: string) => setShown(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-500 mb-6">2D Lists — Cambridge 9618 style questions</p>

      {/* Exercise 1 */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">1</span>
          <div>
            <h3 className="font-bold text-gray-900">5×5 Multiplication Table</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Easy</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">Create a 5×5 2D list filled with multiplication values. Display it as a formatted table.</p>
        <div className="space-y-2 mb-4">
          {['Create a 5×5 grid using list comprehension', 'Use nested loops: table[row][col] = (row+1)*(col+1)', 'Display with formatted print using :4 and end=""'].map((hint, i) => (
            <button key={i} onClick={() => toggle(`e1h${i}`)} className="w-full text-left px-4 py-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-sm text-emerald-800 transition-colors">
              {shown[`e1h${i}`] ? `✅ Hint ${i+1}: ${hint}` : `💡 Show Hint ${i+1}`}
            </button>
          ))}
        </div>
        <button onClick={() => toggle('e1s')} className="btn-primary text-sm mb-3">
          {shown['e1s'] ? '🙈 Hide Solution' : '👁️ Show Solution'}
        </button>
        {shown['e1s'] && (
          <CodeBlock code={`size = 5
table = [[0] * size for _ in range(size)]

for row in range(size):
    for col in range(size):
        table[row][col] = (row + 1) * (col + 1)

# Print header
print("   ", end="")
for col in range(size):
    print(f"{col+1:4}", end="")
print()
print("  " + "-" * 22)

# Print table
for row in range(size):
    print(f"{row+1} |", end="")
    for col in range(size):
        print(f"{table[row][col]:4}", end="")
    print()`} language="python" />
        )}
      </div>

      {/* Exercise 2 */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">2</span>
          <div>
            <h3 className="font-bold text-gray-900">Highest Mark in Each Row</h3>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Medium</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">Given a 3×4 marks table, find each student's highest mark and which subject it was in.</p>
        <div className="space-y-2 mb-4">
          {['Outer loop goes through rows (students)', 'Start best = marks[row][0], then inner loop from col 1', 'Track both the value AND the column index'].map((hint, i) => (
            <button key={i} onClick={() => toggle(`e2h${i}`)} className="w-full text-left px-4 py-2 bg-teal-50 hover:bg-teal-100 rounded-lg text-sm text-teal-800 transition-colors">
              {shown[`e2h${i}`] ? `✅ Hint ${i+1}: ${hint}` : `💡 Show Hint ${i+1}`}
            </button>
          ))}
        </div>
        <button onClick={() => toggle('e2s')} className="btn-primary text-sm mb-3">
          {shown['e2s'] ? '🙈 Hide Solution' : '👁️ Show Solution'}
        </button>
        {shown['e2s'] && (
          <CodeBlock code={`marks = [
    [85, 72, 91, 68],
    [73, 88, 65, 79],
    [92, 61, 84, 77]
]
names = ["Ali", "Sara", "John"]
subjects = 4
students = 3

for row in range(students):
    best = marks[row][0]
    best_col = 0
    for col in range(1, subjects):
        if marks[row][col] > best:
            best = marks[row][col]
            best_col = col
    print(f"{names[row]}: Best = {best} (Subject {best_col+1})")

# Output:
# Ali:  Best = 91 (Subject 3)
# Sara: Best = 88 (Subject 2)
# John: Best = 92 (Subject 1)`} language="python" />
        )}
      </div>

      {/* Exercise 3 */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold">3</span>
          <div>
            <h3 className="font-bold text-gray-900">Highest Mark in Each Column</h3>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold">Hard</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">Find the best student for each subject (highest mark per column).</p>
        <div className="space-y-2 mb-4">
          {['Outer loop goes through COLUMNS (subjects)', 'Inner loop goes through ROWS (students)', 'Start best = marks[0][col], then inner loop from row 1'].map((hint, i) => (
            <button key={i} onClick={() => toggle(`e3h${i}`)} className="w-full text-left px-4 py-2 bg-cyan-50 hover:bg-cyan-100 rounded-lg text-sm text-cyan-800 transition-colors">
              {shown[`e3h${i}`] ? `✅ Hint ${i+1}: ${hint}` : `💡 Show Hint ${i+1}`}
            </button>
          ))}
        </div>
        <button onClick={() => toggle('e3s')} className="btn-primary text-sm mb-3">
          {shown['e3s'] ? '🙈 Hide Solution' : '👁️ Show Solution'}
        </button>
        {shown['e3s'] && (
          <CodeBlock code={`marks = [
    [85, 72, 91, 68],
    [73, 88, 65, 79],
    [92, 61, 84, 77]
]
names = ["Ali", "Sara", "John"]
subjects = 4
students = 3

for col in range(subjects):
    best = marks[0][col]
    best_row = 0
    for row in range(1, students):
        if marks[row][col] > best:
            best = marks[row][col]
            best_row = row
    print(f"Subject {col+1}: Best = {names[best_row]} with {best}")

# Output:
# Subject 1: Best = John with 92
# Subject 2: Best = Sara with 88
# Subject 3: Best = Ali  with 91
# Subject 4: Best = Sara with 79`} language="python" />
        )}
      </div>

      {/* Bonus */}
      <div className="card border-2 border-amber-200 bg-amber-50">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">⭐</span>
          <div>
            <h3 className="font-bold text-gray-900">Bonus: Full School Report System</h3>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Challenge</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">Input marks for 3 students × 4 subjects. Output: student averages, subject averages, overall highest, overall lowest.</p>
        <button onClick={() => toggle('bonus')} className="btn-primary text-sm mb-3">
          {shown['bonus'] ? '🙈 Hide Solution' : '👁️ Show Solution'}
        </button>
        {shown['bonus'] && (
          <CodeBlock code={`students = 3
subjects = 4
marks = [[0]*subjects for _ in range(students)]
names = [""] * students

for row in range(students):
    names[row] = input(f"Student {row+1} name: ")
    for col in range(subjects):
        marks[row][col] = int(input(f"  Subject {col+1}: "))

print("\n=== Student Averages ===")
for row in range(students):
    total = sum(marks[row])
    print(f"{names[row]}: {total/subjects:.1f}")

print("\n=== Subject Averages ===")
for col in range(subjects):
    total = sum(marks[row][col] for row in range(students))
    print(f"Subject {col+1}: {total/students:.1f}")

highest = marks[0][0]
lowest = marks[0][0]
for row in range(students):
    for col in range(subjects):
        if marks[row][col] > highest:
            highest = marks[row][col]
        if marks[row][col] < lowest:
            lowest = marks[row][col]

print(f"\nHighest mark overall: {highest}")
print(f"Lowest mark overall:  {lowest}")`} language="python" />
        )}
      </div>
    </div>
  );
}
