import CodeBlock from '../../../components/CodeBlock';

export default function Py4ForLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🔢 FOR Loops & range()
      </h1>
      <p className="text-gray-500 text-lg mb-8">Count-controlled loops — when you know exactly how many times</p>

      {/* What is a FOR loop */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 What is a FOR Loop?</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <p className="text-emerald-800 font-semibold">📖 Exam Definition:</p>
          <p className="text-emerald-700 mt-1">A FOR loop repeats a block of code a <strong>fixed, known number of times</strong>. In Python, it iterates over a <strong>sequence</strong> (like range()).</p>
        </div>
        <p className="text-gray-600 mb-4">Think of it like: <strong>"Do this exactly 10 times"</strong> — like doing 10 push-ups. You know exactly how many before you start.</p>
      </div>

      {/* range() deep dive */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 The range() Function — Deep Dive</h2>
        <div className="bg-slate-900 rounded-xl p-4 mb-6">
          <p className="text-cyan-400 font-mono text-center text-lg">range(start, stop, step)</p>
          <p className="text-slate-400 font-mono text-center text-sm mt-1">range(stop)  ←  only 1 argument: starts at 0</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">start</h3>
            <p className="text-sm text-blue-600">Where counting begins. <strong>Default = 0</strong> if not given.</p>
            <p className="text-xs font-mono text-blue-800 mt-2 bg-blue-100 rounded p-1">range(5) → starts at 0</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">stop</h3>
            <p className="text-sm text-red-600"><strong>STOPS BEFORE this number!</strong> Never includes stop itself.</p>
            <p className="text-xs font-mono text-red-800 mt-2 bg-red-100 rounded p-1">range(1, 11) → stops at 10</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <h3 className="font-bold text-green-700 mb-2">step</h3>
            <p className="text-sm text-green-600">How much to add each time. <strong>Default = 1.</strong> Can be negative.</p>
            <p className="text-xs font-mono text-green-800 mt-2 bg-green-100 rounded p-1">range(0, 10, 2) → 0,2,4,6,8</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-amber-800 font-bold">⚠️ BIGGEST MISTAKE: The Off-By-One Error!</p>
          <p className="text-amber-700 text-sm mt-1">To loop from 1 to 10 <strong>inclusive</strong>, you need <code className="bg-amber-200 px-1 rounded">range(1, 11)</code> — stop is 11, NOT 10!</p>
          <p className="text-amber-700 text-sm">To loop from 1 to N: use <code className="bg-amber-200 px-1 rounded">range(1, N+1)</code></p>
        </div>

        <CodeBlock language="python" code={`# ONE argument — starts at 0, stops BEFORE 5
for i in range(5):
    print(i)               # 0, 1, 2, 3, 4

# TWO arguments — start=1, stops BEFORE 11
for i in range(1, 11):
    print(i)               # 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

# THREE arguments — step of 2
for i in range(0, 20, 2):
    print(i)               # 0, 2, 4, 6, 8, 10, 12, 14, 16, 18

# NEGATIVE step — count backwards!
for i in range(10, 0, -1):
    print(i)               # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

# Count down to 0 (include 0 — stop = -1)
for i in range(5, -1, -1):
    print(i)               # 5, 4, 3, 2, 1, 0`} />
      </div>

      {/* Pseudocode comparison */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Python vs Pseudocode — FOR Loops</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-purple-700 mb-2">🐍 Python</p>
            <CodeBlock language="python" code={`for i in range(1, 11):
    print(i)

for i in range(1, 11, 2):
    print(i)

for i in range(10, 0, -1):
    print(i)`} />
          </div>
          <div>
            <p className="text-sm font-bold text-cyan-700 mb-2">📝 Pseudocode</p>
            <CodeBlock language="pseudocode" code={`FOR i ← 1 TO 10
   OUTPUT i
NEXT i

FOR i ← 1 TO 10 STEP 2
   OUTPUT i
NEXT i

FOR i ← 10 TO 1 STEP -1
   OUTPUT i
NEXT i`} />
          </div>
        </div>
      </div>

      {/* Common patterns */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">⚙️ 4 Essential FOR Loop Patterns</h2>

        <div className="space-y-6">
          {/* Pattern 1: Accumulator */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">1</span>
              <h3 className="font-bold text-gray-900">Accumulator (Running Total)</h3>
            </div>
            <CodeBlock language="python" code={`# Sum of 1 to N
n = int(input("Enter N: "))
total = 0                        # initialise BEFORE the loop

for i in range(1, n + 1):
    total = total + i            # or: total += i

print(f"Sum = {total}")          # Sum = 55  (for N=10)`} />
            <div className="mt-2 bg-blue-50 rounded-xl p-3">
              <p className="text-sm text-blue-700"><strong>Key rule:</strong> Always initialise accumulator to 0 BEFORE the loop. Never inside!</p>
            </div>
          </div>

          {/* Pattern 2: Counter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="font-bold text-gray-900">Counter (Count Items Meeting Condition)</h3>
            </div>
            <CodeBlock language="python" code={`# Count how many numbers from 1-100 are divisible by 7
count = 0

for i in range(1, 101):
    if i % 7 == 0:
        count += 1

print(f"Divisible by 7: {count}")   # 14`} />
          </div>

          {/* Pattern 3: Find Max/Min */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="font-bold text-gray-900">Find Maximum / Minimum</h3>
            </div>
            <CodeBlock language="python" code={`# Find the maximum of N numbers input by user
n = int(input("How many numbers? "))
max_val = None                       # None = not set yet

for i in range(1, n + 1):
    num = int(input(f"Enter number {i}: "))
    if max_val is None or num > max_val:
        max_val = num

print(f"Maximum is: {max_val}")`} />
          </div>

          {/* Pattern 4: Nested loops */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">4</span>
              <h3 className="font-bold text-gray-900">Nested FOR Loops (Multiplication Table)</h3>
            </div>
            <CodeBlock language="python" code={`# Multiplication table for N
n = int(input("Enter number: "))

for i in range(1, 13):
    result = n * i
    print(f"{n} x {i} = {result}")

# 2D output — grid of numbers
for row in range(1, 4):
    for col in range(1, 4):
        print(row * col, end="\t")   # \t = tab
    print()                           # new line after each row`} />
            <div className="mt-2 bg-purple-50 rounded-xl p-3">
              <p className="text-sm text-purple-700"><strong>Trace:</strong> For each value of row (1,2,3), col goes through 1,2,3 — so the inner loop runs 9 times total.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOR with strings */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔤 FOR Loop with Strings (Bonus — A Level!)</h2>
        <p className="text-gray-600 mb-4">In Python, you can loop directly over characters in a string — no index needed!</p>
        <CodeBlock language="python" code={`text = "Hello"

# Loop over each character directly
for char in text:
    print(char)              # H, e, l, l, o

# Count vowels
vowel_count = 0
for char in text.lower():
    if char in "aeiou":
        vowel_count += 1

print(f"Vowels: {vowel_count}")

# Using range + index (pseudocode-style — needed for MID equivalent)
for i in range(len(text)):
    print(f"Position {i}: {text[i]}")   # 0-indexed in Python!`} />
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-sm text-amber-800"><strong>⚠️ Remember:</strong> Python strings are 0-indexed! text[0] = 'H', text[1] = 'e'. This is DIFFERENT from pseudocode which is 1-indexed!</p>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">❌ Common FOR Loop Mistakes</h2>
        <div className="space-y-4">
          {[
            {
              wrong: 'for i in range(1, 10):\n    print(i)   # Only goes to 9, not 10!',
              right: 'for i in range(1, 11):\n    print(i)   # Goes 1 to 10 ✓',
              tip: 'range() stops BEFORE the stop value. To include 10, use 11.'
            },
            {
              wrong: 'for i in range(10, 1, -1):\n    print(i)   # Stops at 2, misses 1!',
              right: 'for i in range(10, 0, -1):\n    print(i)   # Goes 10 down to 1 ✓',
              tip: 'Counting backwards: to include 1, stop must be 0.'
            },
            {
              wrong: 'total = 0\nfor i in range(1, 6):\n    total = 0    # WRONG: resets every loop!\n    total += i',
              right: 'total = 0                 # ✓ BEFORE the loop\nfor i in range(1, 6):\n    total += i',
              tip: 'Never initialise accumulators inside the loop — they reset each iteration!'
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-bold text-red-600 mb-1">❌ Wrong</p>
                <CodeBlock language="python" code={item.wrong} />
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 mb-1">✅ Correct</p>
                <CodeBlock language="python" code={item.right} />
              </div>
              <div className="md:col-span-2 bg-blue-50 rounded-lg p-2">
                <p className="text-xs text-blue-700"><strong>Why:</strong> {item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
