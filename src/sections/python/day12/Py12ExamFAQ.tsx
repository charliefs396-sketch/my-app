export default function Py12ExamFAQ() {
  const faqs = [
    {
      q: "What is the difference between a class and a TYPE in pseudocode?",
      a: "They do the same job — grouping related fields together. TYPE...ENDTYPE in pseudocode = class with __init__ in Python. The key difference is Python classes can also have methods (functions inside), but for A Level we mostly use them just as records.",
      tip: "TYPE → class, DECLARE field → self.field = default"
    },
    {
      q: "Why do we need self in __init__?",
      a: "self refers to the specific object being created. Without self, Python wouldn't know WHICH student's name you're setting. Every field must be self.fieldname so it belongs to that particular object.",
      tip: "Always: def __init__(self): — never forget self!"
    },
    {
      q: "Why do we write Student() with parentheses?",
      a: "The parentheses CALL the __init__ method to create the object. Without (), you're just referencing the class itself, not creating a new record. s = Student() creates ONE new student record.",
      tip: "Student = the class. Student() = a new record."
    },
    {
      q: "How do I store multiple records?",
      a: "Use a list: students = []. Create each object with s = Student(), fill its fields, then students.append(s). This is exactly like ARRAY[1:30] OF StudentRecord in pseudocode.",
      tip: "[] = empty list. append() adds to the end."
    },
    {
      q: "How do I swap two records in a list?",
      a: "Python makes this easy: students[j], students[j+1] = students[j+1], students[j]. The ENTIRE object swaps — all fields move together automatically. No need for a Temp variable!",
      tip: "Python swap = one line. Pseudocode swap = 3 lines with Temp."
    },
    {
      q: "What does return None mean in a search function?",
      a: "None is Python's way of saying 'nothing found'. When searching, if the target isn't in the list, return None. Then check: if result is not None: (not if result != None)",
      tip: "Use 'is not None' not '!= None' — best practice!"
    },
    {
      q: "Can I sort objects by a field?",
      a: "Yes! Use bubble sort comparing the specific field: if students[j].mark > students[j+1].mark. Or use Python's built-in: students.sort(key=lambda s: s.mark). Both work for the exam.",
      tip: "For exam: write manual bubble sort. In real code: use .sort(key=...)"
    },
    {
      q: "Do I need to know OOP (Object Oriented Programming) for A Level?",
      a: "No! For Cambridge 9618, you only need classes as simple records (like TYPE). You don't need inheritance, polymorphism, or encapsulation for Paper 4. Just class, __init__, self, and creating objects.",
      tip: "Keep it simple — class as record is all you need!"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Exam FAQ — Records & Classes</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Q{i+1}: {faq.q}</h3>
            <p className="text-gray-700 mb-3">{faq.a}</p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
              <p className="text-sm font-semibold text-emerald-700">💡 {faq.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
