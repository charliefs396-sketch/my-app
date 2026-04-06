import CodeBlock from '../../../components/CodeBlock';

export default function Py6ListLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔄 Loops with Lists</h1>
      <p className="text-gray-500 mb-6">for loops, range(len()), enumerate, and common patterns</p>

      {/* Two ways to loop */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Two Ways to Loop Through a List</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-700 mb-2">Method 1: for item in list</p>
            <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

for mark in marks:
    print(mark)
# 85
# 72
# 91
# 63
# 78`} />
            <p className="text-emerald-700 text-xs mt-2">✅ Use when you DON'T need the index. Clean and simple.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-700 mb-2">Method 2: range(len(list))</p>
            <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

for i in range(len(marks)):
    print(f"Position {i}: {marks[i]}")
# Position 0: 85
# Position 1: 72
# Position 2: 91
# Position 3: 63
# Position 4: 78`} />
            <p className="text-blue-700 text-xs mt-2">✅ Use when you NEED the index (to modify, compare adjacent, etc.)</p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <p className="font-bold text-purple-700 mb-2">Method 3: enumerate() — best of both worlds</p>
          <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

for i, mark in enumerate(marks):
    print(f"Student {i+1}: {mark}")
# Student 1: 85
# Student 2: 72
# etc.`} />
          <p className="text-purple-700 text-xs mt-2">✅ Gives you BOTH index AND value. Very Pythonic!</p>
        </div>
      </div>

      {/* Common patterns */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Essential List Patterns for Exams</h2>

        <h3 className="font-bold text-gray-800 mb-2">Pattern 1: Total and Average</h3>
        <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

# Using built-ins (quick but exam may ask without them)
total = sum(marks)
average = sum(marks) / len(marks)
print(f"Total: {total}, Average: {average:.1f}")

# WITHOUT built-ins (exam might ask this way)
total = 0
for mark in marks:
    total = total + mark
average = total / len(marks)
print(f"Total: {total}, Average: {average:.1f}")`} />

        <h3 className="font-bold text-gray-800 mt-5 mb-2">Pattern 2: Find Max and Min (WITHOUT max/min)</h3>
        <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

# Find maximum (exam favourite!)
maximum = marks[0]          # Start with first element
for mark in marks:
    if mark > maximum:
        maximum = mark
print(f"Maximum: {maximum}")   # 91

# Find minimum
minimum = marks[0]          # Start with first element
for mark in marks:
    if mark < minimum:
        minimum = mark
print(f"Minimum: {minimum}")   # 63

# Find max AND its index
max_val = marks[0]
max_index = 0
for i in range(len(marks)):
    if marks[i] > max_val:
        max_val = marks[i]
        max_index = i
print(f"Max {max_val} at position {max_index}")`} />

        <h3 className="font-bold text-gray-800 mt-5 mb-2">Pattern 3: Count Above Average</h3>
        <CodeBlock language="python" code={`marks = [85, 72, 91, 63, 78]

# Step 1: Calculate average
total = 0
for mark in marks:
    total += mark
average = total / len(marks)

# Step 2: Count above average
count_above = 0
for mark in marks:
    if mark > average:
        count_above += 1

print(f"Average: {average:.1f}")
print(f"Above average: {count_above}")`} />

        <h3 className="font-bold text-gray-800 mt-5 mb-2">Pattern 4: Search a List</h3>
        <CodeBlock language="python" code={`names = ["Ali", "Sara", "John", "Tom", "Zara"]

# Check if exists
target = "John"
if target in names:
    print(f"{target} found!")

# Find index
if target in names:
    position = names.index(target)
    print(f"{target} is at position {position}")

# Linear search (exam style - without .index())
found = False
for i in range(len(names)):
    if names[i] == target:
        print(f"Found at position {i}")
        found = True
        break
if not found:
    print("Not found")`} />
      </div>

      {/* Remove all occurrences */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🗑️ Remove All Occurrences</h2>
        <CodeBlock language="python" code={`numbers = [3, 1, 4, 1, 5, 9, 2, 6, 1, 3]

# Remove ALL occurrences of 1
# Method 1: Loop backwards (safest for exam)
i = len(numbers) - 1
while i >= 0:
    if numbers[i] == 1:
        numbers.pop(i)
    i -= 1
print(numbers)  # [3, 4, 5, 9, 2, 6, 3]

# Method 2: Build a new list
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 1, 3]
result = []
for num in numbers:
    if num != 1:
        result.append(num)
print(result)   # [3, 4, 5, 9, 2, 6, 3]

# Method 3: List comprehension (advanced)
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 1, 3]
result = [x for x in numbers if x != 1]
print(result)   # [3, 4, 5, 9, 2, 6, 3]`} />
        <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-bold text-red-700 text-sm">⚠️ Don't remove while looping forwards!</p>
          <CodeBlock language="python" code={`# WRONG - skips elements after removal!
for i in range(len(numbers)):
    if numbers[i] == 1:
        numbers.pop(i)  # Changes list size mid-loop!`} />
        </div>
      </div>
    </div>
  );
}
