import CodeBlock from '../../../components/CodeBlock';

export default function Py5Methods() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🔧 String Methods</h2>
      <p className="text-gray-500 mb-8">Python's built-in tools that make string manipulation powerful</p>

      {/* What are methods */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-blue-800 mb-2">📖 What is a Method?</h3>
        <p className="text-blue-700 text-sm mb-2">A method is a function that <strong>belongs to an object</strong>. You call it using a dot: <code className="bg-blue-100 px-1 rounded">object.method()</code></p>
        <p className="text-blue-700 text-sm">String methods always return a <strong>new string</strong> — they do NOT modify the original (strings are immutable!).</p>
      </div>

      {/* Case methods */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">1️⃣ Case Methods</h3>
        <CodeBlock language="python" code={`text = "Hello World"

print(text.upper())      # HELLO WORLD
print(text.lower())      # hello world
print(text.capitalize()) # Hello world  (only first letter capitalised)
print(text.title())      # Hello World  (each word capitalised)
print(text.swapcase())   # hELLO wORLD (flips each case)

# Does NOT modify text — creates a new string
print(text)              # Hello World (still the same!)

# VERY USEFUL: normalise input before comparing
name = input("Enter name: ").lower()
if name == "ali":        # works even if user types "ALI" or "Ali"
    print("Found!")`} />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-amber-800">💡 Exam Tip: Always use .lower() when comparing user input! This handles "Yes", "YES", "yes" all the same way.</p>
        </div>
      </div>

      {/* Search methods */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">2️⃣ Search Methods</h3>
        <CodeBlock language="python" code={`text = "Hello World Hello"

# find() — returns index of FIRST occurrence, -1 if not found
print(text.find("Hello"))    # 0   (found at index 0)
print(text.find("World"))    # 6   (found at index 6)
print(text.find("Python"))   # -1  (NOT found — returns -1!)
print(text.find("l"))        # 2   (first 'l' is at index 2)

# find() with start position
print(text.find("Hello", 1)) # 12  (find "Hello" starting from index 1)

# count() — how many times does it appear?
print(text.count("l"))       # 5   (counts ALL occurrences)
print(text.count("Hello"))   # 2
print(text.count("xyz"))     # 0   (not found = 0, not -1!)

# in operator — check if substring exists (returns True/False)
print("World" in text)       # True
print("Python" in text)      # False

# Typical usage:
if "error" in message.lower():
    print("An error was detected")`} />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-green-800 mb-2">find() returns:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✅ Index (0 or more) if <strong>found</strong></li>
              <li>✅ <strong>-1</strong> if NOT found</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-800 mb-2">count() returns:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>✅ Number of occurrences</li>
              <li>✅ <strong>0</strong> if NOT found (NOT -1!)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Replace and modify */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">3️⃣ Replace & Modify</h3>
        <CodeBlock language="python" code={`text = "Hello World"

# replace() — swap one substring for another
print(text.replace("World", "Python"))   # Hello Python
print(text.replace("l", "L"))            # HeLLo WorLd (ALL occurrences!)
print(text.replace("l", "L", 1))        # HeLlo World (only FIRST)

# strip() — remove whitespace from both ends
messy = "   hello   "
print(messy.strip())     # "hello"
print(messy.lstrip())    # "hello   " (left only)
print(messy.rstrip())    # "   hello" (right only)

# strip with characters
text2 = "***hello***"
print(text2.strip("*"))  # "hello"

# split() — split string into a list
sentence = "Hello World Python"
words = sentence.split()           # ['Hello', 'World', 'Python']
print(words[0])                    # Hello
print(len(words))                  # 3

csv_line = "Ali,17,Computer Science"
parts = csv_line.split(",")        # ['Ali', '17', 'Computer Science']
name = parts[0]                    # Ali
age = int(parts[1])                # 17

# join() — opposite of split, join a list into a string
words = ["Hello", "World", "Python"]
print(" ".join(words))             # Hello World Python
print("-".join(words))             # Hello-World-Python
print("".join(words))              # HelloWorldPython`} />
      </div>

      {/* Check methods */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">4️⃣ Check Methods — Returns True/False</h3>
        <CodeBlock language="python" code={`# All return True or False

print("hello".islower())     # True  — all lowercase?
print("HELLO".isupper())     # True  — all uppercase?
print("Hello".istitle())     # True  — title case?
print("12345".isdigit())     # True  — all digits?
print("hello".isalpha())     # True  — all letters?
print("hello123".isalnum())  # True  — letters or digits?
print("   ".isspace())       # True  — all whitespace?

# Mixed examples
print("Hello123".isalpha())  # False — contains digits
print("Hello 123".isalnum()) # False — contains space
print("hello".isupper())     # False — not all uppercase

# Super useful in exams:
def count_char_types(text):
    upper = lower = digit = space = other = 0
    for char in text:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1
        elif char.isdigit():
            digit += 1
        elif char.isspace():
            space += 1
        else:
            other += 1
    print(f"Upper: {upper}, Lower: {lower}, Digits: {digit}, Spaces: {space}")`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-bold text-gray-600">Method</th>
                <th className="px-4 py-2 text-left font-bold text-gray-600">Returns True if...</th>
                <th className="px-4 py-2 text-left font-bold text-gray-600">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['.isupper()', 'All letters are UPPERCASE', '"ABC".isupper() → True'],
                ['.islower()', 'All letters are lowercase', '"abc".islower() → True'],
                ['.isdigit()', 'All characters are digits 0-9', '"123".isdigit() → True'],
                ['.isalpha()', 'All characters are letters', '"Hello".isalpha() → True'],
                ['.isalnum()', 'All chars are letters or digits', '"Hi5".isalnum() → True'],
                ['.isspace()', 'All characters are whitespace', '"   ".isspace() → True'],
                ['.startswith(x)', 'String starts with x', '"Hello".startswith("He") → True'],
                ['.endswith(x)', 'String ends with x', '"Hello".endswith("lo") → True'],
              ].map(([m, desc, ex]) => (
                <tr key={m} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-mono text-emerald-700">{m}</td>
                  <td className="px-4 py-2 text-gray-600">{desc}</td>
                  <td className="px-4 py-2 font-mono text-xs text-gray-500">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key points */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-3">💡 Key Points</h3>
        <ul className="space-y-2 text-sm text-emerald-700">
          {[
            'String methods return NEW strings — they never change the original.',
            'find() returns -1 if not found. count() returns 0 if not found.',
            '.lower() before comparing user input is a MUST in real programs.',
            'split() turns a string into a list — great for processing CSV data.',
            'strip() removes leading/trailing spaces — always use on input data.',
          ].map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 bg-emerald-200 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
