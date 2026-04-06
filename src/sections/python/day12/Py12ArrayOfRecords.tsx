import CodeBlock from '../../../components/CodeBlock';

export default function Py12ArrayOfRecords() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Array of Records</h2>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-emerald-800 mb-3">🔑 Key Concept</h3>
        <p className="text-emerald-700 mb-3">In Python, an "array of records" = a <strong>list of objects</strong>. Each item in the list is a Student object with its own fields.</p>
        <CodeBlock language="python" code={`class Student:
    def __init__(self):
        self.name = ""
        self.age = 0
        self.mark = 0

# Array of 3 records
students = []                    # Empty list

for i in range(3):
    s = Student()                # Create new record
    s.name = input(f"Name {i+1}: ")
    s.age = int(input("Age: "))
    s.mark = int(input("Mark: "))
    students.append(s)           # Add to list

# Display all
for s in students:
    print(f"{s.name} - Age: {s.age} - Mark: {s.mark}")`} />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">🔍 Search by Name</h3>
        <CodeBlock language="python" code={`def search_by_name(students, target):
    for s in students:
        if s.name.lower() == target.lower():
            return s
    return None

# Use it
target = input("Enter name to search: ")
result = search_by_name(students, target)

if result is not None:
    print(f"Found: {result.name}, Mark: {result.mark}")
else:
    print("Not found")`} />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">📊 Sort by Mark (Bubble Sort)</h3>
        <CodeBlock language="python" code={`def sort_by_mark(students):
    n = len(students)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if students[j].mark > students[j+1].mark:
                # Swap entire objects
                students[j], students[j+1] = students[j+1], students[j]

sort_by_mark(students)

print("Sorted by mark:")
for s in students:
    print(f"{s.name}: {s.mark}")`} />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">🏆 Find Highest Mark</h3>
        <CodeBlock language="python" code={`def find_highest(students):
    best = students[0]
    for s in students:
        if s.mark > best.mark:
            best = s
    return best

top = find_highest(students)
print(f"Highest: {top.name} with {top.mark}")`} />
      </div>
    </div>
  );
}
