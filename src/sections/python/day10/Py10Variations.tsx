import CodeBlock from '../../../components/CodeBlock';

export default function Py10Variations() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🔄 Variations
      </h1>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔽 Sort Descending</h2>
        <p className="text-gray-700 mb-3">Change ONE character: <code className="bg-gray-100 px-2 py-1 rounded">&gt;</code> becomes <code className="bg-gray-100 px-2 py-1 rounded">&lt;</code></p>
        <CodeBlock code={`def bubble_sort_desc(data):
    n = len(data)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if data[j] < data[j + 1]:    # < instead of >
                data[j], data[j + 1] = data[j + 1], data[j]
                swapped = True
        if not swapped:
            break
    return data

numbers = [5, 3, 8, 1, 9, 2]
bubble_sort_desc(numbers)
print(numbers)  # [9, 8, 5, 3, 2, 1]`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Sort Tuples by Second Element</h2>
        <p className="text-gray-700 mb-3">Sort a list of (name, mark) tuples by the mark:</p>
        <CodeBlock code={`def bubble_sort_by_mark(students):
    n = len(students)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            # Compare the second element (index 1 = mark)
            if students[j][1] > students[j + 1][1]:
                students[j], students[j + 1] = students[j + 1], students[j]
                swapped = True
        if not swapped:
            break

students = [("Ali", 85), ("Sara", 72), ("Tom", 91), ("Emma", 68)]
bubble_sort_by_mark(students)
for name, mark in students:
    print(f"{name}: {mark}")
# Emma: 68
# Sara: 72
# Ali: 85
# Tom: 91`} language="python" />

        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
          <p className="font-bold text-blue-800">💡 Key Point</p>
          <p className="text-blue-700">
            <code>students[j][1]</code> accesses the second element (mark) of each tuple.
            <code>[0]</code> would be the name.
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Sort Parallel Lists</h2>
        <p className="text-gray-700 mb-3">Keep names aligned with marks when sorting marks:</p>
        <CodeBlock code={`def bubble_sort_parallel(names, marks):
    n = len(marks)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if marks[j] > marks[j + 1]:
                # Swap BOTH lists!
                marks[j], marks[j + 1] = marks[j + 1], marks[j]
                names[j], names[j + 1] = names[j + 1], names[j]
                swapped = True
        if not swapped:
            break

names = ["Ali", "Sara", "Tom", "Emma"]
marks = [85, 72, 91, 68]
bubble_sort_parallel(names, marks)

for i in range(len(names)):
    print(f"{names[i]}: {marks[i]}")
# Emma: 68
# Sara: 72
# Ali: 85
# Tom: 91`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🐍 Python Built-in Sorting</h2>
        <p className="text-gray-700 mb-3">Python has built-in sorting — but you MUST know Bubble Sort for the exam:</p>
        <CodeBlock code={`# Built-in sort (modifies original list)
numbers = [5, 3, 8, 1, 9, 2]
numbers.sort()              # Ascending
numbers.sort(reverse=True)  # Descending

# sorted() returns NEW list (original unchanged)
original = [5, 3, 8, 1, 9, 2]
new_list = sorted(original)
print(original)  # [5, 3, 8, 1, 9, 2] - unchanged!
print(new_list)   # [1, 2, 3, 5, 8, 9]

# Sort with key function
students = [("Ali", 85), ("Sara", 72), ("Tom", 91)]
students.sort(key=lambda x: x[1])  # Sort by mark`} language="python" />

        <div className="mt-4 p-4 bg-amber-50 rounded-xl">
          <p className="font-bold text-amber-800">⚠️ Exam Warning</p>
          <p className="text-amber-700">
            You can use <code>.sort()</code> and <code>sorted()</code> in Paper 4, but if the question says
            "write a bubble sort" you MUST write the full algorithm — not use built-ins!
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚔️ Bubble Sort vs Insertion Sort</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left font-bold">Feature</th>
                <th className="p-3 text-left font-bold">Bubble Sort</th>
                <th className="p-3 text-left font-bold">Insertion Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-medium">How it works</td><td className="p-3">Compare adjacent, swap</td><td className="p-3">Pick element, insert in correct position</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Best case</td><td className="p-3">O(n) with swapped flag</td><td className="p-3">O(n) already sorted</td></tr>
              <tr><td className="p-3 font-medium">Worst case</td><td className="p-3">O(n²)</td><td className="p-3">O(n²)</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Swaps</td><td className="p-3">Many swaps per pass</td><td className="p-3">Shifts, not swaps</td></tr>
              <tr><td className="p-3 font-medium">Better for</td><td className="p-3">Nearly sorted data</td><td className="p-3">Small datasets</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}