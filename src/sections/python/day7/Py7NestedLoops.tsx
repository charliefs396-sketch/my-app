import CodeBlock from '../../../components/CodeBlock';

export default function Py7NestedLoops() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔁 Nested Loops & Operations</h2>
      <p className="text-gray-500 mb-6">Processing 2D lists row by row and column by column</p>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Row Average (per student)</h3>
        <CodeBlock code={`marks = [
    [85, 72, 91, 68],   # Student 0
    [73, 88, 65, 79],   # Student 1
    [92, 61, 84, 77]    # Student 2
]
names = ["Ali", "Sara", "John"]
subjects = 4
students = 3

# Average per student (row average)
for row in range(students):
    total = 0
    for col in range(subjects):
        total += marks[row][col]
    avg = total / subjects
    print(f"{names[row]}: Average = {avg:.1f}")

# Output:
# Ali:  Average = 79.0
# Sara: Average = 76.3
# John: Average = 78.5`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Column Average (per subject)</h3>
        <CodeBlock code={`# Average per subject (column average)
# Note: outer loop is COLUMNS, inner loop is ROWS
for col in range(subjects):
    total = 0
    for row in range(students):
        total += marks[row][col]
    avg = total / students
    print(f"Subject {col+1}: Average = {avg:.1f}")

# Output:
# Subject 1: Average = 83.3
# Subject 2: Average = 73.7
# Subject 3: Average = 80.0
# Subject 4: Average = 74.7`} language="python" />
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-semibold text-sm">💡 Key insight: To process by COLUMN, make the outer loop go through columns and inner loop go through rows — the OPPOSITE of row processing!</p>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Find Max in Each Row</h3>
        <CodeBlock code={`# Find highest mark for each student (best subject)
for row in range(students):
    best = marks[row][0]           # Start with first subject
    best_subject = 0
    for col in range(1, subjects):
        if marks[row][col] > best:
            best = marks[row][col]
            best_subject = col
    print(f"{names[row]}: Best mark = {best} (Subject {best_subject+1})")

# Output:
# Ali:  Best mark = 91 (Subject 3)
# Sara: Best mark = 88 (Subject 2)
# John: Best mark = 92 (Subject 1)`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Find Max in Each Column</h3>
        <CodeBlock code={`# Find best student for each subject
for col in range(subjects):
    best = marks[0][col]
    best_student = 0
    for row in range(1, students):
        if marks[row][col] > best:
            best = marks[row][col]
            best_student = row
    print(f"Subject {col+1}: Best = {names[best_student]} with {best}")`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 5x5 Multiplication Table</h3>
        <CodeBlock code={`# Create 5x5 multiplication table
size = 5
table = [[0] * size for _ in range(size)]

# Fill with multiplication values
for row in range(size):
    for col in range(size):
        table[row][col] = (row + 1) * (col + 1)

# Display nicely
print("    ", end="")
for col in range(size):
    print(f"{col+1:4}", end="")
print()
print("  " + "-" * 22)

for row in range(size):
    print(f"{row+1} |", end="")
    for col in range(size):
        print(f"{table[row][col]:4}", end="")
    print()

# Output:
#       1   2   3   4   5
#   ----------------------
# 1 |   1   2   3   4   5
# 2 |   2   4   6   8  10
# 3 |   3   6   9  12  15
# 4 |   4   8  12  16  20
# 5 |   5  10  15  20  25`} language="python" />
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Student System</h3>
        <CodeBlock code={`students = 3
subjects = 4
marks = [[0] * subjects for _ in range(students)]
names = [""] * students

# Input
for row in range(students):
    names[row] = input(f"Student {row+1} name: ")
    for col in range(subjects):
        marks[row][col] = int(input(f"  Subject {col+1}: "))

# Row averages
print("\n--- Student Averages ---")
for row in range(students):
    total = sum(marks[row])
    print(f"{names[row]}: {total/subjects:.1f}")

# Column averages
print("\n--- Subject Averages ---")
for col in range(subjects):
    total = sum(marks[row][col] for row in range(students))
    print(f"Subject {col+1}: {total/students:.1f}")

# Overall highest
highest = marks[0][0]
best_student = 0
best_subject = 0
for row in range(students):
    for col in range(subjects):
        if marks[row][col] > highest:
            highest = marks[row][col]
            best_student = row
            best_subject = col
print(f"\nHighest: {names[best_student]} in Subject {best_subject+1} = {highest}")`} language="python" />
      </div>
    </div>
  );
}
