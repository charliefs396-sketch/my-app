import CodeBlock from '../../../components/CodeBlock';

export default function Py2StringOps() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔗 String Operations</h1>
      <p className="text-gray-500 mb-8">Python strings are powerful. You can join them, repeat them, slice them — and the exam loves testing all of these!</p>

      {/* Concatenation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">➕ String Concatenation (Joining Strings)</h2>
        <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-1 rounded font-mono">+</code> to join strings. In pseudocode this was <code className="bg-gray-100 px-1 rounded font-mono">&</code>.</p>

        <CodeBlock language="python" code={`first = "Hello"
last = "World"

# Concatenation with +
full = first + " " + last
print(full)             # Hello World

# MUST put space manually!
no_space = first + last
print(no_space)         # HelloWorld (no space!)

# Building a sentence
name = "Ali"
age = "17"
sentence = "My name is " + name + " and I am " + age + " years old."
print(sentence)`} />

        {/* Warning box */}
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="font-bold text-red-800 mb-2">⚠️ You CANNOT concatenate string + number directly!</p>
          <CodeBlock language="python" code={`name = "Ali"
age = 17          # integer, not string

# This CRASHES with TypeError:
print("Age: " + age)       # ❌ TypeError!

# Fix 1: convert to string first
print("Age: " + str(age))  # ✅ Age: 17

# Fix 2: use f-string (recommended!)
print(f"Age: {age}")       # ✅ Age: 17

# Fix 3: use comma in print (adds space automatically)
print("Age:", age)         # ✅ Age: 17`} />
        </div>
      </div>

      {/* String repetition */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✖️ String Repetition</h2>
        <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-1 rounded font-mono">*</code> to repeat a string. Pseudocode doesn't have this!</p>
        <CodeBlock language="python" code={`# Repeat a string n times
print("Hello" * 3)     # HelloHelloHello
print("-" * 20)        # -------------------- (divider line)
print("ha" * 5)        # hahahahaha

# Useful for formatting output
title = "Results"
print("=" * 20)
print(title)
print("=" * 20)
# ====================
# Results
# ====================

# Works with variables
char = "*"
width = 10
print(char * width)    # **********`} />
      </div>

      {/* f-strings deep dive */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🎯 f-strings — The Best Way to Format Output</h2>
        <p className="text-gray-600 mb-4">f-strings (formatted strings) are Python's cleanest way to mix variables and text. Always use these in your exam code — they're cleaner and less error-prone.</p>

        <CodeBlock language="python" code={`name = "Ali"
age = 17
height = 1.75
mark = 87.5

# Basic f-string: put f before the quote, variables in {}
print(f"Hello {name}")                    # Hello Ali
print(f"You are {age} years old")         # You are 17 years old
print(f"Height: {height}m")              # Height: 1.75m

# You can do calculations INSIDE the {}
print(f"Double age: {age * 2}")           # Double age: 34
print(f"Next year: {age + 1}")            # Next year: 18

# Format decimal places with :.2f
print(f"Mark: {mark:.2f}%")              # Mark: 87.50%
print(f"Height: {height:.1f}m")          # Height: 1.8m

# Combine multiple variables
print(f"{name} is {age} and {height}m tall")
# Ali is 17 and 1.75m tall`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Method</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Code</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Output</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Recommend?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['f-string', 'f"Hi {name}"', 'Hi Ali', '✅ Best'],
                ['Concatenation', '"Hi " + name', 'Hi Ali', '⚠️ Only for strings'],
                ['Comma in print', 'print("Hi", name)', 'Hi Ali', '✅ Quick prints'],
                ['str() conversion', '"Hi " + str(age)', 'Hi 17', '⚠️ Verbose'],
              ].map(([method, code, output, rec]) => (
                <tr key={method}>
                  <td className="py-2 px-4 font-medium text-gray-700">{method}</td>
                  <td className="py-2 px-4"><code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono text-xs">{code}</code></td>
                  <td className="py-2 px-4 text-gray-600">{output}</td>
                  <td className="py-2 px-4 font-semibold">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* String comparison */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 Comparing Strings</h2>
        <CodeBlock language="python" code={`# Strings compare alphabetically (lexicographic order)
print("apple" == "apple")   # True
print("apple" == "Apple")   # False (case sensitive!)
print("a" < "b")            # True (a comes before b)
print("b" > "a")            # True

# Useful for sorting/checking
password = input("Enter password: ")
if password == "secret123":
    print("Access granted")
else:
    print("Wrong password")

# Case-insensitive comparison:
user_input = "YES"
if user_input.lower() == "yes":   # convert to lowercase first
    print("User said yes")`} />
      </div>

      {/* Quick reference */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 String Operations Quick Reference</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { op: '+ (concatenate)', ex: '"Hi" + " " + "Ali"', res: '"Hi Ali"' },
            { op: '* (repeat)', ex: '"Ha" * 3', res: '"HaHaHa"' },
            { op: '== (compare)', ex: '"abc" == "abc"', res: 'True' },
            { op: 'f-string', ex: 'f"Hi {name}"', res: '"Hi Ali"' },
            { op: 'str(n)', ex: 'str(42)', res: '"42"' },
            { op: 'int(s)', ex: 'int("42")', res: '42' },
          ].map(item => (
            <div key={item.op} className="bg-white rounded-xl p-3 flex items-center gap-3">
              <code className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-mono font-bold shrink-0">{item.op}</code>
              <div className="text-xs">
                <code className="text-gray-600">{item.ex}</code>
                <span className="text-gray-400 mx-1">→</span>
                <code className="text-emerald-700 font-bold">{item.res}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
