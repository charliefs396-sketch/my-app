import CodeBlock from '../../../components/CodeBlock';

export default function Py4ExamFAQ() {
  const faqs = [
    {
      q: "Why does range(1, 10) only go up to 9 and not 10?",
      a: "range() always STOPS BEFORE the stop value. This is by design in Python. To include 10, you must write range(1, 11). Think of it as: the stop value is EXCLUDED. Memory trick: range(start, stop+1) to include stop.",
      code: `# WRONG — only goes 1 to 9
for i in range(1, 10):
    print(i)

# CORRECT — goes 1 to 10
for i in range(1, 11):
    print(i)

# General rule: to loop 1 to N inclusive
for i in range(1, N + 1):
    print(i)`,
      type: 'danger'
    },
    {
      q: "What's the difference between while and for? When do I use each?",
      a: "Use FOR when you know the exact number of repetitions before the loop starts. Use WHILE when you don't know how many times — the loop depends on a condition that changes inside the loop.",
      code: `# FOR — know exactly how many: "print 5 times"
for i in range(5):
    print(i)

# WHILE — don't know how many: "keep asking until valid"
password = ""
while password != "secret":
    password = input("Password: ")`,
      type: 'info'
    },
    {
      q: "What does 'while True' mean? Why does it not loop forever?",
      a: "while True creates an infinite loop (True never becomes False). It only stops because of a break statement inside. This is Python's way of simulating REPEAT...UNTIL — the loop body always runs at least once.",
      code: `while True:              # infinite loop
    num = int(input("Enter positive: "))
    if num > 0:
        break            # THIS stops the loop
    print("Must be positive!")  # only shown if invalid

# The loop MUST execute at least once — user must enter something`,
      type: 'info'
    },
    {
      q: "Why do I get wrong answers when I put total = 0 inside the loop?",
      a: "If you initialise total inside the loop, it resets to 0 on EVERY iteration! The accumulator must be initialised ONCE before the loop starts.",
      code: `# WRONG — resets total every time!
for i in range(1, 6):
    total = 0           # ← resets to 0 each loop!
    total += i
print(total)            # only shows 5 (last value of i)

# CORRECT — initialise BEFORE the loop
total = 0               # ← set once before loop
for i in range(1, 6):
    total += i
print(total)            # 15 (correct sum)`,
      type: 'danger'
    },
    {
      q: "How do I count backwards in Python? Like FOR i ← 10 TO 1 STEP -1?",
      a: "Use range() with a negative step. Remember: the stop value is EXCLUDED, so to count down to 1, stop must be 0. To count down to 0, stop must be -1.",
      code: `# Count 10 down to 1
for i in range(10, 0, -1):
    print(i)            # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

# Count 10 down to 0 (include 0)
for i in range(10, -1, -1):
    print(i)            # 10, 9, 8, ..., 1, 0

# Pseudocode: FOR i ← 10 TO 1 STEP -1
# Python:     for i in range(10, 0, -1)`,
      type: 'info'
    },
    {
      q: "What is an infinite loop and how do I avoid it?",
      a: "An infinite loop runs forever because the condition never becomes False. Common causes: forgetting to update the loop variable, wrong condition, or forgetting break.",
      code: `# INFINITE LOOP — count never changes!
count = 0
while count < 5:
    print(count)
    # forgot count += 1 — runs forever!

# FIXED
count = 0
while count < 5:
    print(count)
    count += 1          # must update the variable!

# INFINITE LOOP — condition is always True
while True:
    num = int(input("Enter positive: "))
    # forgot if/break — runs forever!

# FIXED
while True:
    num = int(input("Enter positive: "))
    if num > 0:
        break           # must have an exit!`,
      type: 'danger'
    },
    {
      q: "What is the difference between break and continue?",
      a: "break exits the entire loop immediately. continue skips the rest of the current iteration and goes back to the loop condition. break is much more commonly tested at A Level.",
      code: `# break — exits the loop completely
for i in range(1, 11):
    if i == 5:
        break
    print(i)            # prints 1, 2, 3, 4 then stops

# continue — skips current iteration only
for i in range(1, 11):
    if i == 5:
        continue
    print(i)            # prints 1,2,3,4,6,7,8,9,10 (skips 5)`,
      type: 'info'
    },
    {
      q: "Can I use a for loop without using the loop variable?",
      a: "Yes! If you just need to repeat something N times and don't care about the counter value, you can use _ as the variable name (Python convention for 'I don't need this').",
      code: `# Repeat "Hello" 5 times without needing i
for _ in range(5):
    print("Hello")

# More practical: input N numbers
n = int(input("How many numbers? "))
total = 0
for _ in range(n):
    num = int(input("Enter a number: "))
    total += num
print(f"Total: {total}")`,
      type: 'info'
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Loops
      </h1>
      <p className="text-gray-500 text-lg mb-8">Every question students get wrong about Python loops — answered clearly</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className={`p-4 border-l-4 ${faq.type === 'danger' ? 'border-red-500 bg-red-50' : 'border-emerald-500 bg-emerald-50'}`}>
              <p className="font-bold text-gray-900">Q{i + 1}: {faq.q}</p>
            </div>
            <div className="p-5">
              <p className="text-gray-700 mb-4 leading-relaxed">{faq.a}</p>
              <CodeBlock language="python" code={faq.code} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-emerald-800 mb-3">🎯 Key Points to Remember</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'range(1, 11) goes from 1 to 10 — stop is EXCLUDED',
            'while True + break = REPEAT...UNTIL simulation',
            'Accumulators must be initialised BEFORE the loop',
            'FOR = known count, WHILE = unknown count',
            'break exits loop, continue skips one iteration',
            'range(10, 0, -1) counts 10 down to 1',
            'Forgetting to update loop variable = infinite loop',
            'While loop may run 0 times if condition starts False',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <p className="text-sm text-emerald-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
