import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py10Practice() {
  const [showHints, setShowHints] = useState<Record<string, number>>({});
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});

  const revealHint = (id: string, max: number) => {
    setShowHints(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, max) }));
  };
  const toggleSolution = (id: string) => {
    setShowSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice Exercises
      </h1>

      {/* Exercise 1 */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Exercise 1: Sort Descending</h3>
        <p className="text-gray-700 mb-2">Write a bubble sort function that sorts a list in <strong>descending</strong> order (largest first). Test it with [64, 34, 25, 12, 22, 11, 90].</p>

        <button onClick={() => revealHint('e1', 3)} className="btn-secondary text-sm mt-2">💡 Hint ({showHints['e1'] || 0}/3)</button>
        {(showHints['e1'] || 0) >= 1 && <p className="mt-2 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 1: Copy the ascending bubble sort function</p>}
        {(showHints['e1'] || 0) >= 2 && <p className="mt-1 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 2: Change exactly ONE character in the comparison</p>}
        {(showHints['e1'] || 0) >= 3 && <p className="mt-1 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 3: Change &gt; to &lt; so smaller values bubble to the end instead</p>}

        <button onClick={() => toggleSolution('e1')} className="btn-primary text-sm mt-3">{showSolutions['e1'] ? 'Hide' : 'Show'} Solution</button>
        {showSolutions['e1'] && (
          <div className="mt-3">
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

numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort_desc(numbers)
print(numbers)  # [90, 64, 34, 25, 22, 12, 11]`} language="python" />
          </div>
        )}
      </div>

      {/* Exercise 2 */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Exercise 2: Sort Tuples by Mark</h3>
        <p className="text-gray-700 mb-2">Sort this list of (name, mark) tuples by the mark in ascending order:</p>
        <CodeBlock code={`students = [("Ali", 85), ("Sara", 72), ("Tom", 91), ("Emma", 68), ("John", 79)]`} language="python" />

        <button onClick={() => revealHint('e2', 3)} className="btn-secondary text-sm mt-2">💡 Hint ({showHints['e2'] || 0}/3)</button>
        {(showHints['e2'] || 0) >= 1 && <p className="mt-2 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 1: Each element is a tuple. Access mark with [1] and name with [0]</p>}
        {(showHints['e2'] || 0) >= 2 && <p className="mt-1 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 2: Compare students[j][1] with students[j+1][1]</p>}
        {(showHints['e2'] || 0) >= 3 && <p className="mt-1 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">Hint 3: Swap the entire tuple, not just the mark</p>}

        <button onClick={() => toggleSolution('e2')} className="btn-primary text-sm mt-3">{showSolutions['e2'] ? 'Hide' : 'Show'} Solution</button>
        {showSolutions['e2'] && (
          <div className="mt-3">
            <CodeBlock code={`def bubble_sort_by_mark(students):
    n = len(students)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if students[j][1] > students[j + 1][1]:
                students[j], students[j + 1] = students[j + 1], students[j]
                swapped = True
        if not swapped:
            break

students = [("Ali", 85), ("Sara", 72), ("Tom", 91), ("Emma", 68), ("John", 79)]
bubble_sort_by_mark(students)
for name, mark in students:
    print(f"{name}: {mark}")
# Emma: 68
# Sara: 72
# John: 79
# Ali: 85
# Tom: 91`} language="python" />
          </div>
        )}
      </div>

      {/* Exercise 3 - Bonus */}
      <div className="card border-2 border-amber-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">⭐ Bonus: Full Sorting System</h3>
        <p className="text-gray-700 mb-2">Create a menu-driven program that lets the user:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Enter student names and marks</li>
          <li>Sort by name (ascending)</li>
          <li>Sort by mark (ascending or descending)</li>
          <li>Display sorted results</li>
        </ul>

        <button onClick={() => toggleSolution('e3')} className="btn-primary text-sm mt-3">{showSolutions['e3'] ? 'Hide' : 'Show'} Solution</button>
        {showSolutions['e3'] && (
          <div className="mt-3">
            <CodeBlock code={`def bubble_sort_students(students, by="mark", descending=False):
    n = len(students)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if by == "mark":
                compare = students[j][1] > students[j + 1][1]
            else:
                compare = students[j][0] > students[j + 1][0]
            
            if descending:
                compare = not compare
            
            if compare:
                students[j], students[j + 1] = students[j + 1], students[j]
                swapped = True
        if not swapped:
            break

def display(students):
    print(f"{'Name':<15} {'Mark':<10}")
    print("-" * 25)
    for name, mark in students:
        print(f"{name:<15} {mark:<10}")

# Input
students = []
n = int(input("How many students? "))
for i in range(n):
    name = input(f"Name {i+1}: ")
    mark = int(input(f"Mark {i+1}: "))
    students.append((name, mark))

# Menu
while True:
    print("\\n1. Sort by name")
    print("2. Sort by mark (ascending)")
    print("3. Sort by mark (descending)")
    print("4. Display")
    print("5. Quit")
    choice = input("Choice: ")
    
    if choice == "1":
        bubble_sort_students(students, "name")
        print("Sorted by name!")
    elif choice == "2":
        bubble_sort_students(students, "mark")
        print("Sorted by mark (ascending)!")
    elif choice == "3":
        bubble_sort_students(students, "mark", True)
        print("Sorted by mark (descending)!")
    elif choice == "4":
        display(students)
    elif choice == "5":
        break`} language="python" />
          </div>
        )}
      </div>
    </div>
  );
}