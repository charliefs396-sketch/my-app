export default function Py6ExamFAQ() {
  const faqs = [
    {
      q: "Python list index starts at 0 but pseudocode starts at 1 — which do I use in the exam?",
      a: "Use whichever language the question asks! If writing Python code, use 0-indexed. If writing pseudocode, use 1-indexed. NEVER mix them up.",
      code: `# Python - 0-indexed
marks[0]   # first element

// Pseudocode - 1-indexed
Marks[1]   // first element`,
      type: "python"
    },
    {
      q: "What's the difference between remove() and pop()?",
      a: "remove() takes a VALUE and removes the first match. pop() takes an INDEX and removes that position. pop() also RETURNS the removed item, remove() doesn't.",
      code: `names = ["Ali", "Sara", "John"]
names.remove("Sara")   # removes by VALUE
item = names.pop(0)    # removes by INDEX, returns "Ali"`,
      type: "python"
    },
    {
      q: "Can I use max(), min(), sum() in the exam?",
      a: "YES — you can use built-in functions in Python. However, if the question says 'write an algorithm to find the maximum', write the loop version. If it just says 'find the maximum', max() is fine.",
      code: `# Both are acceptable:
maximum = max(marks)              # Using built-in

maximum = marks[0]                # Writing algorithm
for mark in marks:
    if mark > maximum:
        maximum = mark`,
      type: "python"
    },
    {
      q: "What happens if I do list2 = list1?",
      a: "They both point to the SAME list in memory! Changing list2 changes list1 too. Always use list2 = list1.copy() or list2 = list1[:] to make a real copy.",
      code: `original = [1, 2, 3]
copy = original          # NOT a copy!
copy.append(4)
print(original)          # [1, 2, 3, 4] -- changed!

real_copy = original.copy()  # Proper copy`,
      type: "python"
    },
    {
      q: "How do I find the second largest value?",
      a: "Find the maximum, then search again ignoring that value. Or sort and take index [-2]. In exams, the loop method is preferred to show your algorithm.",
      code: `marks = [85, 72, 91, 63, 78]

# Method 1: Sort approach
sorted_marks = sorted(marks)
second_largest = sorted_marks[-2]   # 85

# Method 2: Algorithm approach
first_max = max(marks)
second_max = -1
for mark in marks:
    if mark > second_max and mark != first_max:
        second_max = mark`,
      type: "python"
    },
    {
      q: "How do I check if a value exists in a list?",
      a: "Use the 'in' keyword — it's the simplest way. For exams asking you to write a search algorithm, use a for loop with a boolean flag.",
      code: `names = ["Ali", "Sara", "John"]

# Quick way
if "Sara" in names:
    print("Found!")

# Algorithm way (for exam questions)
found = False
for name in names:
    if name == "Sara":
        found = True
        break`,
      type: "python"
    },
    {
      q: "What's the difference between append() and insert()?",
      a: "append() always adds to the END. insert(index, value) adds at a specific POSITION. append() is O(1) — very fast. insert(0, value) is O(n) — slower for large lists.",
      code: `names = ["Ali", "Sara"]
names.append("John")       # ["Ali", "Sara", "John"]
names.insert(0, "Zara")   # ["Zara", "Ali", "Sara", "John"]`,
      type: "python"
    },
    {
      q: "How do I loop through two parallel lists together?",
      a: "Use range(len(list)) to get the index, then use that index for both lists. This is the Python equivalent of pseudocode parallel arrays.",
      code: `names = ["Ali", "Sara", "John"]
marks = [85, 72, 91]

# Loop through both together
for i in range(len(names)):
    print(f"{names[i]}: {marks[i]}")
# Ali: 85
# Sara: 72
# John: 91`,
      type: "python"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Lists</h1>
      <p className="text-gray-500 mb-6">8 most common exam questions about Python lists</p>

      <div className="space-y-5">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-emerald-500">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Q{i+1}</span>
              <p className="font-bold text-gray-900">{faq.q}</p>
            </div>
            <div className="ml-11">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-3">
                <p className="text-emerald-800 text-sm">{faq.a}</p>
              </div>
              {faq.code && (
                <pre className="bg-slate-900 text-slate-300 rounded-lg p-3 text-xs font-mono overflow-x-auto">
                  {faq.code}
                </pre>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
        <h3 className="font-bold text-emerald-800 mb-3">🎯 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            '0-indexed in Python, 1-indexed in pseudocode',
            'append() adds to end, insert() adds anywhere',
            'remove() by value, pop() by index',
            'list2 = list1 is NOT a copy!',
            'max(), min(), sum() are valid in Python',
            'Use "in" to check existence',
            'Never modify a list while looping forwards through it',
            'enumerate() gives both index and value',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-emerald-500">✓</span>
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
