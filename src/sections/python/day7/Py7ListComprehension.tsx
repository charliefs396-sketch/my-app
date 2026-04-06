import CodeBlock from '../../../components/CodeBlock';

export default function Py7ListComprehension() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🏗️ Creating 2D Lists</h2>
      <p className="text-gray-500 mb-6">The right way to create and initialise 2D lists in Python</p>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Correct Way — List Comprehension</h3>
        <CodeBlock code={`# Syntax: [[default_value] * cols for _ in range(rows)]

# 3 rows, 4 columns — all zeros
marks = [[0] * 4 for _ in range(3)]
print(marks)
# [[0, 0, 0, 0],
#  [0, 0, 0, 0],
#  [0, 0, 0, 0]]

# 5 rows, 5 columns — multiplication table
grid = [[0] * 5 for _ in range(5)]

# 3 rows, 3 columns — all empty strings
names = [[""] * 3 for _ in range(3)]

# Create with actual values directly
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]`} language="python" />
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Breaking It Down</h3>
        <div className="bg-gray-50 rounded-xl p-5 font-mono text-lg mb-4 text-center">
          <span className="text-gray-500">marks = </span>
          <span className="text-blue-600">[[</span>
          <span className="text-amber-600">0</span>
          <span className="text-blue-600">] * </span>
          <span className="text-green-600">4</span>
          <span className="text-purple-600"> for _ in range(</span>
          <span className="text-red-600">3</span>
          <span className="text-purple-600">)</span>
          <span className="text-blue-600">]</span>
        </div>
        <div className="space-y-2">
          {[
            { color: 'bg-amber-100 text-amber-800', part: '0', desc: 'Default value for every cell' },
            { color: 'bg-green-100 text-green-800', part: '4', desc: 'Number of COLUMNS (items per row)' },
            { color: 'bg-red-100 text-red-800', part: '3', desc: 'Number of ROWS' },
            { color: 'bg-purple-100 text-purple-800', part: 'for _ in range(3)', desc: 'Repeat 3 times (one per row). _ means we dont use the loop variable' },
            { color: 'bg-blue-100 text-blue-800', part: '[[...]]', desc: 'Outer list contains inner lists — list of lists!' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`px-2 py-1 rounded font-mono text-sm font-bold ${item.color} flex-shrink-0`}>{item.part}</span>
              <span className="text-gray-700 text-sm pt-1">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">❌ The Shared Reference Trap</h3>
        <CodeBlock code={`# WRONG WAY - all rows point to SAME list!
marks = [[0] * 4] * 3

marks[0][0] = 99
print(marks)
# [[99, 0, 0, 0], [99, 0, 0, 0], [99, 0, 0, 0]]
# ALL rows changed! Because they all share the same inner list

# CORRECT WAY - each row is independent
marks = [[0] * 4 for _ in range(3)]

marks[0][0] = 99
print(marks)
# [[99, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
# Only row 0 changed - each row is its own list`} language="python" />
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-800 font-semibold text-sm">⚠️ This is one of the most common Python exam mistakes! Always use list comprehension for 2D lists.</p>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📥 Inputting into a 2D List</h3>
        <CodeBlock code={`students = 3
subjects = 4

# Create empty 2D list
marks = [[0] * subjects for _ in range(students)]
names = [""] * students

# Input all values
for row in range(students):
    names[row] = input(f"Enter name for student {row+1}: ")
    for col in range(subjects):
        marks[row][col] = int(input(f"  Subject {col+1} mark: "))

# Display nicely
print()
print("Name        Sub1  Sub2  Sub3  Sub4")
print("-" * 35)
for row in range(students):
    print(f"{names[row]:<12}", end="")
    for col in range(subjects):
        print(f"{marks[row][col]:<6}", end="")
    print()`} language="python" />
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Accessing and Modifying</h3>
        <CodeBlock code={`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access single element
print(matrix[0][0])   # 1  (row 0, col 0)
print(matrix[1][2])   # 6  (row 1, col 2)
print(matrix[2][1])   # 8  (row 2, col 1)

# Modify element
matrix[1][1] = 99
print(matrix[1])      # [4, 99, 6]

# Access entire row
print(matrix[0])      # [1, 2, 3]

# Length
print(len(matrix))      # 3 (number of rows)
print(len(matrix[0]))   # 3 (number of columns)`} language="python" />
      </div>
    </div>
  );
}
