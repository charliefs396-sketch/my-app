import CodeBlock from '../../../components/CodeBlock';

export default function Py4WhileLoops() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🔄 WHILE Loops & break
      </h1>
      <p className="text-gray-500 text-lg mb-8">Condition-controlled loops — when you don't know how many times in advance</p>

      {/* What is while */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 What is a WHILE Loop?</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <p className="text-emerald-800 font-semibold">📖 Exam Definition:</p>
          <p className="text-emerald-700 mt-1">A WHILE loop checks the condition <strong>BEFORE</strong> each iteration. If the condition is False from the start, the loop body runs <strong>zero times</strong>.</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 mb-4">
          <p className="text-slate-400 text-sm font-mono mb-3">Anatomy of a while loop:</p>
          <div className="font-mono text-sm space-y-1">
            <div><span className="text-purple-400 font-bold">while</span> <span className="text-amber-300">condition</span><span className="text-white">:</span><span className="text-slate-500">   # ← keyword, condition, colon</span></div>
            <div><span className="text-slate-500">    </span><span className="text-emerald-300">    body code</span><span className="text-slate-500">        # ← MUST be indented 4 spaces</span></div>
            <div><span className="text-slate-500">    </span><span className="text-emerald-300">    body code</span><span className="text-slate-500">        # ← all body lines indented same</span></div>
          </div>
        </div>

        <CodeBlock language="python" code={`# Password check — runs until correct password entered
password = ""                        # initialise BEFORE loop
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")             # only reaches here when correct

# The loop may run 0 times if already correct:
password = "secret"
while password != "secret":
    password = input("Enter password: ")  # never executes!
print("Access granted!")             # runs immediately`} />
      </div>

      {/* While with counter */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔢 WHILE with Counter (Max Attempts)</h2>
        <p className="text-gray-600 mb-4">A very common exam pattern — limit how many times a user can try:</p>
        <CodeBlock language="python" code={`# Password with maximum 3 attempts
attempts = 0
password = ""

while attempts < 3 and password != "secret":
    password = input("Enter password: ")
    attempts += 1                            # increment counter

if password == "secret":
    print("Access granted!")
else:
    print(f"Account locked after {attempts} attempts")`} />

        {/* Trace table */}
        <div className="mt-4 overflow-x-auto">
          <p className="text-sm font-bold text-gray-700 mb-2">📊 Trace Table (user enters "wrong", "wrong", "secret"):</p>
          <table className="w-full text-xs border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-2 border border-gray-200 text-emerald-700">Iteration</th>
                <th className="p-2 border border-gray-200 text-emerald-700">attempts (before)</th>
                <th className="p-2 border border-gray-200 text-emerald-700">password input</th>
                <th className="p-2 border border-gray-200 text-emerald-700">attempts (after)</th>
                <th className="p-2 border border-gray-200 text-emerald-700">condition check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', '0', '"wrong"', '1', '1 < 3 AND "wrong" ≠ "secret" → TRUE'],
                ['2', '1', '"wrong"', '2', '2 < 3 AND "wrong" ≠ "secret" → TRUE'],
                ['3', '2', '"secret"', '3', '3 < 3 → FALSE → EXIT LOOP'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-2 border border-gray-200 ${j === 4 ? (i === 2 ? 'text-red-600 font-semibold' : 'text-green-600') : 'text-gray-700'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sentinel values */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🚨 Sentinel Values — Classic Exam Pattern!</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-blue-800 font-semibold">📖 What is a Sentinel Value?</p>
          <p className="text-blue-700 text-sm mt-1">A <strong>sentinel value</strong> (also called a "rogue value" or "flag value") is a special value that signals the end of input. Common examples: -1, 0, "quit", "done".</p>
        </div>
        <CodeBlock language="python" code={`# Count numbers — enter -1 to stop
count = 0
total = 0
num = int(input("Enter number (-1 to stop): "))  # read BEFORE loop

while num != -1:                    # -1 is the sentinel value
    total += num
    count += 1
    num = int(input("Enter number (-1 to stop): "))  # read AGAIN at end

if count > 0:
    average = total / count
    print(f"Count: {count}")
    print(f"Total: {total}")
    print(f"Average: {average:.2f}")
else:
    print("No numbers entered")`} />
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-sm text-amber-800"><strong>⚠️ Pattern:</strong> Read the first value BEFORE the loop, then read again at the END of the loop body. This is called the "read-ahead" or "priming read" pattern.</p>
        </div>
      </div>

      {/* break and continue */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🛑 break and continue</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="font-bold text-red-700 mb-3">break — Exit the loop immediately</h3>
            <CodeBlock language="python" code={`# Search for a number
numbers = [3, 7, 2, 9, 5]
target = 9

for num in numbers:
    if num == target:
        print("Found it!")
        break              # stop searching
    print(f"Checking {num}")

# Output:
# Checking 3
# Checking 7
# Checking 2
# Found it!`} />
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-3">continue — Skip to next iteration</h3>
            <CodeBlock language="python" code={`# Print only odd numbers
for i in range(1, 11):
    if i % 2 == 0:
        continue          # skip even numbers
    print(i)

# Output: 1, 3, 5, 7, 9

# Skip negative numbers
numbers = [3, -1, 5, -2, 8]
for n in numbers:
    if n < 0:
        continue
    print(n)   # 3, 5, 8`} />
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-700"><strong>Exam tip:</strong> break and continue work in both for and while loops. In Paper 4, you'll mostly use break for the REPEAT...UNTIL simulation pattern.</p>
        </div>
      </div>

      {/* REPEAT UNTIL simulation */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔁 Simulating REPEAT...UNTIL in Python</h2>
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 mb-4">
          <p className="text-cyan-800 font-semibold">📖 Key Concept:</p>
          <p className="text-cyan-700 text-sm mt-1">Python has NO repeat...until statement! We simulate it with <code className="bg-cyan-200 px-1 rounded font-mono">while True: ... if condition: break</code></p>
          <p className="text-cyan-700 text-sm mt-1"><strong>Critical difference:</strong> The loop body runs AT LEAST ONCE before checking the condition.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-bold text-cyan-700 mb-2">📝 Pseudocode</p>
            <CodeBlock language="pseudocode" code={`REPEAT
   OUTPUT "Enter positive number: "
   INPUT Number
UNTIL Number > 0`} />
          </div>
          <div>
            <p className="text-sm font-bold text-purple-700 mb-2">🐍 Python</p>
            <CodeBlock language="python" code={`while True:
    number = int(input("Enter positive number: "))
    if number > 0:
        break`} />
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-sm text-amber-800"><strong>Note:</strong> Pseudocode says UNTIL Number &gt; 0 (exit when true). Python says if number &gt; 0: break (also exit when true). Same logic!</p>
        </div>
      </div>
    </div>
  );
}
