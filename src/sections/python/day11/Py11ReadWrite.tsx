import CodeBlock from '../../../components/CodeBlock';

export default function Py11ReadWrite() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">📖 Reading & Writing Files</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✍️ Writing to a File</h3>
        <CodeBlock language="python" code={`# WRITE mode - creates new file or overwrites existing
with open("students.txt", "w") as f:
    f.write("Ali,85\\n")       # \\n = newline character
    f.write("Sara,92\\n")
    f.write("John,78\\n")

# File now contains:
# Ali,85
# Sara,92
# John,78`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 className="font-bold text-red-800 mb-1">⚠️ WARNING</h4>
            <p className="text-red-700 text-sm">"w" mode DELETES the file contents first! If students.txt already had data, it's gone!</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <h4 className="font-bold text-blue-800 mb-1">💡 Remember</h4>
            <p className="text-blue-700 text-sm">Always add \n at the end of each line. Without it, all data goes on one line!</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Reading a File — 3 Methods</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Method 1: Loop through lines (BEST for A Level)</h4>
            <CodeBlock language="python" code={`with open("students.txt", "r") as f:
    for line in f:
        print(line.strip())    # .strip() removes \\n at end

# Output:
# Ali,85
# Sara,92
# John,78`} />
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Method 2: Read all lines into a list</h4>
            <CodeBlock language="python" code={`with open("students.txt", "r") as f:
    lines = f.readlines()     # Returns a list

print(lines[0])               # 'Ali,85\\n'
print(lines[0].strip())       # 'Ali,85'
print(len(lines))             # 3`} />
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Method 3: Read entire file as one string</h4>
            <CodeBlock language="python" code={`with open("students.txt", "r") as f:
    content = f.read()        # One big string
print(content)`} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 The .strip() and .split() Methods</h3>
        <CodeBlock language="python" code={`# Reading and PROCESSING each line
with open("students.txt", "r") as f:
    for line in f:
        line = line.strip()           # Remove \\n and spaces
        parts = line.split(",")       # Split by comma -> list
        name = parts[0]               # "Ali"
        mark = int(parts[1])          # 85 (convert string to int!)
        print(f"{name} scored {mark}")`} />

        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold text-gray-800 mb-2">Step by Step for line "Ali,85\n":</h4>
          <div className="space-y-1 text-sm font-mono">
            <p><span className="text-blue-600">line</span> = <span className="text-green-600">"Ali,85\n"</span></p>
            <p><span className="text-blue-600">line.strip()</span> = <span className="text-green-600">"Ali,85"</span></p>
            <p><span className="text-blue-600">line.split(",")</span> = <span className="text-green-600">["Ali", "85"]</span></p>
            <p><span className="text-blue-600">parts[0]</span> = <span className="text-green-600">"Ali"</span></p>
            <p><span className="text-blue-600">int(parts[1])</span> = <span className="text-green-600">85</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
