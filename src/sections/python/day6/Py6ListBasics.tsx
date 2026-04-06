import CodeBlock from '../../../components/CodeBlock';

export default function Py6ListBasics() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📦 List Basics</h1>
      <p className="text-gray-500 mb-6">Creating, accessing and modifying lists</p>

      {/* Creating Lists */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Creating Lists</h2>
        <CodeBlock language="python" code={`# Empty list
empty = []

# List with values
numbers = [5, 3, 8, 1, 9, 2]
names = ["Ali", "Sara", "John"]
mixed = [1, "hello", True, 3.14]   # Python allows mixed types

# List of zeros (like pseudocode ARRAY of 0s)
zeros = [0] * 10        # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
empty_names = [""] * 5  # ["", "", "", "", ""]

# Create list with input
marks = []
for i in range(5):
    mark = int(input(f"Enter mark {i+1}: "))
    marks.append(mark)

# OR fixed size approach (like pseudocode)
marks = [0] * 5
for i in range(5):
    marks[i] = int(input(f"Enter mark {i+1}: "))`} />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="font-bold text-amber-700 text-sm">💡 Tip: Two ways to build a list</p>
          <p className="text-amber-700 text-sm mt-1"><strong>append() method</strong> — starts empty, grows as you add. <strong>Fixed size [0]*n</strong> — starts with zeros, replace using index. Both are valid in exams!</p>
        </div>
      </div>

      {/* Accessing Elements */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 Accessing Elements (0-indexed!)</h2>
        <div className="bg-slate-900 rounded-xl p-4 mb-4 font-mono text-sm overflow-x-auto">
          <p className="text-slate-400 mb-2"># names = ["Ali", "Sara", "John", "Tom", "Zara"]</p>
          <div className="grid grid-cols-5 gap-1 mb-2">
            {["Ali", "Sara", "John", "Tom", "Zara"].map((name, i) => (
              <div key={i} className="bg-emerald-800 rounded p-2 text-center">
                <div className="text-emerald-300 text-xs">index {i}</div>
                <div className="text-white font-bold">{name}</div>
                <div className="text-emerald-400 text-xs">index {i-5}</div>
              </div>
            ))}
          </div>
        </div>
        <CodeBlock language="python" code={`names = ["Ali", "Sara", "John", "Tom", "Zara"]

# Positive indexing (from start)
print(names[0])    # Ali   (first element)
print(names[1])    # Sara
print(names[4])    # Zara  (last element)

# Negative indexing (from end)
print(names[-1])   # Zara  (last element)
print(names[-2])   # Tom   (second to last)
print(names[-5])   # Ali   (first element)

# Length
print(len(names))  # 5

# Last element - two ways:
print(names[4])           # If you know the size
print(names[len(names)-1])  # Dynamic way
print(names[-1])           # Best way!`} />
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-bold text-red-700 text-sm">❌ Index out of range!</p>
          <p className="text-red-700 text-sm mt-1"><code>names[5]</code> crashes — list has indices 0-4 only. Always check <code>len(names)</code> first!</p>
        </div>
      </div>

      {/* Modifying Lists */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✏️ Modifying Elements</h2>
        <CodeBlock language="python" code={`names = ["Ali", "Sara", "John"]

# Change an element
names[1] = "Maria"
print(names)   # ["Ali", "Maria", "John"]

# You can change any element by index
names[0] = "Ahmed"
names[-1] = "Jane"
print(names)   # ["Ahmed", "Maria", "Jane"]

# Swap two elements (like pseudocode Temp swap!)
temp = names[0]
names[0] = names[1]
names[1] = temp
print(names)   # ["Maria", "Ahmed", "Jane"]

# Python shortcut for swap (not in pseudocode):
names[0], names[1] = names[1], names[0]`} />
      </div>

      {/* Pseudocode vs Python side by side */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Pseudocode vs Python Side by Side</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-center font-bold text-indigo-700 mb-2">📝 Pseudocode</p>
            <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:5] OF INTEGER

// Populate
FOR i <- 1 TO 5
   OUTPUT "Enter mark: "
   INPUT Marks[i]
NEXT i

// Access first and last
OUTPUT Marks[1]
OUTPUT Marks[5]`} />
          </div>
          <div>
            <p className="text-center font-bold text-emerald-700 mb-2">🐍 Python</p>
            <CodeBlock language="python" code={`marks = [0] * 5

# Populate
for i in range(5):
    marks[i] = int(input("Enter mark: "))

# Access first and last
print(marks[0])
print(marks[4])    # or marks[-1]`} />
          </div>
        </div>
      </div>
    </div>
  );
}
