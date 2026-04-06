import CodeBlock from '../../../components/CodeBlock';

export default function Py7ExamFAQ() {
  const faqs = [
    {
      q: "What is marks[row][col]? Which comes first — row or column?",
      a: "ROW always comes first, then COLUMN. Think of it as marks[ROW][COL]. Row = which student, Col = which subject.",
      code: `marks[0][2]   # Row 0, Col 2 = first student, third subject
marks[2][0]   # Row 2, Col 0 = third student, first subject`,
      tip: "Memory trick: Read like a book — left to right is row first, then column."
    },
    {
      q: "Why use [[0]*4 for _ in range(3)] instead of [[0]*4]*3?",
      a: "[[0]*4]*3 creates 3 references to the SAME inner list. Changing one row changes ALL rows. List comprehension creates 3 SEPARATE lists.",
      code: `# WRONG - shared reference
bad = [[0]*4] * 3
bad[0][0] = 99
print(bad)  # [[99,0,0,0],[99,0,0,0],[99,0,0,0]] ALL changed!

# CORRECT - separate lists
good = [[0]*4 for _ in range(3)]
good[0][0] = 99
print(good)  # [[99,0,0,0],[0,0,0,0],[0,0,0,0]] Only row 0`,
      tip: "Always use list comprehension for 2D lists in exams!"
    },
    {
      q: "How do I get the number of rows and columns?",
      a: "len(grid) gives rows. len(grid[0]) gives columns.",
      code: `grid = [[1,2,3],[4,5,6],[7,8,9]]
rows = len(grid)      # 3
cols = len(grid[0])   # 3`,
      tip: "len(grid[0]) assumes all rows have the same length — which they always should in A Level."
    },
    {
      q: "How do I swap the outer and inner loops for column processing?",
      a: "For ROW processing: outer=rows, inner=cols. For COLUMN processing: outer=cols, inner=rows.",
      code: `# Row processing (per student)
for row in range(students):
    for col in range(subjects):
        # process marks[row][col]

# Column processing (per subject)
for col in range(subjects):
    for row in range(students):
        # process marks[row][col]`,
      tip: "The access marks[row][col] stays the SAME — only the loop order changes!"
    },
    {
      q: "What does the _ mean in 'for _ in range(3)'?",
      a: "_ is a convention meaning 'I don't need this variable'. It's just a throwaway loop variable when you only care about HOW MANY times to loop, not the value.",
      code: `# These are identical - _ just means "don't care about the value"
for _ in range(3):
    print("Hello")

for i in range(3):
    print("Hello")`,
      tip: "Use _ when you don't use the loop variable — it's cleaner and shows intent."
    },
    {
      q: "How do I print a 2D list nicely?",
      a: "Loop through rows and use end='' to print on same line, then print() for a new line.",
      code: `matrix = [[1,2,3],[4,5,6],[7,8,9]]

# Method 1: Simple
for row in matrix:
    print(row)

# Method 2: Formatted
for row in matrix:
    for val in row:
        print(f"{val:4}", end="")
    print()  # new line after each row`,
      tip: "The :4 format specifier right-aligns numbers in a field of width 4."
    },
    {
      q: "How do I find the global maximum in a 2D list?",
      a: "Start with the first element, then use nested loops to check every element.",
      code: `grid = [[3,7,2],[9,1,5],[4,8,6]]
maximum = grid[0][0]
max_row = 0
max_col = 0
for row in range(len(grid)):
    for col in range(len(grid[0])):
        if grid[row][col] > maximum:
            maximum = grid[row][col]
            max_row = row
            max_col = col
print(f"Max = {maximum} at [{max_row}][{max_col}]")`,
      tip: "Always initialise max/min with grid[0][0], not 0 — the values might all be negative!"
    },
    {
      q: "Pseudocode uses ARRAY[1:5, 1:3] but Python is 0-indexed. How do I convert?",
      a: "Pseudocode row 1 = Python row 0. Pseudocode row 5 = Python row 4. Always subtract 1 from pseudocode indices.",
      code: `# Pseudocode: FOR Row <- 1 TO 5
#               FOR Col <- 1 TO 3
#                 Marks[Row, Col] <- ...
# Python equivalent:
for row in range(5):      # 0 to 4 (5 rows)
    for col in range(3):  # 0 to 2 (3 cols)
        marks[row][col] = ...`,
      tip: "In exams: if pseudocode says ARRAY[1:5, 1:3], Python needs range(5) and range(3)."
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">❓ Exam FAQ — 2D Lists</h2>
      <p className="text-gray-500 mb-6">Most common exam questions and mistakes on 2D lists</p>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="card">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Q{i+1}</span>
              <h3 className="font-bold text-gray-900">{faq.q}</h3>
            </div>
            <div className="ml-11">
              <p className="text-gray-700 mb-3">{faq.a}</p>
              <CodeBlock code={faq.code} language="python" />
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">💡 <strong>Exam Tip:</strong> {faq.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
