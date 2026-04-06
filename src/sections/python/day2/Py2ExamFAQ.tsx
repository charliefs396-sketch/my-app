export default function Py2ExamFAQ() {
  const faqs = [
    {
      q: "What's the difference between / and // in Python?",
      a: "/ always returns a float (e.g. 10/2 = 5.0). // returns an integer, rounded DOWN (e.g. 10//2 = 5, 17//5 = 3). Use // when you want whole number division — like DIV in pseudocode.",
      code: "print(10 / 2)   # 5.0 (float)\nprint(10 // 2)  # 5   (int)",
      tag: "Critical"
    },
    {
      q: "Why does 5 == 5 return True but = give a SyntaxError in an if statement?",
      a: "= is assignment (storing a value). == is comparison (checking equality). Python keeps them strictly separate. Pseudocode uses = for both, which is why this trips students up.",
      code: "age = 18         # assignment (no if)\nif age == 18:    # comparison inside if",
      tag: "Most Common Mistake"
    },
    {
      q: "What does % actually do?",
      a: "% gives the REMAINDER after integer division. 17 % 5 = 2 because 17 = 3×5 + 2. It's the same as MOD in pseudocode. Use it to check even/odd (n%2==0), extract digits, or check divisibility.",
      code: "print(17 % 5)   # 2\nprint(10 % 2)   # 0 (even!)\nprint(7 % 2)    # 1 (odd!)",
      tag: "Exam Favourite"
    },
    {
      q: "Can I use 'AND' and 'OR' in Python like pseudocode?",
      a: "No! Python uses lowercase and, or, not. Writing AND, OR, NOT in Python gives a NameError because Python thinks they're variable names. Always lowercase in Python.",
      code: "# Pseudocode: IF x > 0 AND x < 10\n# Python:\nif x > 0 and x < 10:  # lowercase!\n    print(\"In range\")",
      tag: "Common Mistake"
    },
    {
      q: "What order do operators run in? (Precedence)",
      a: "BODMAS applies: Brackets first, then ** (power), then * / // % (multiply/divide), then + - (add/subtract). For logical: not runs first, then and, then or. When in doubt, use brackets!",
      code: "print(2 + 3 * 4)       # 14 (not 20!)\nprint((2 + 3) * 4)     # 20\nprint(True or False and False)  # True (and first)",
      tag: "Exam Trap"
    },
    {
      q: "Can I add a string and a number with +?",
      a: "No! This causes a TypeError. You must convert the number to a string first using str(), or use an f-string which handles it automatically.",
      code: "age = 17\n# print(\"Age: \" + age)      # ❌ TypeError!\nprint(\"Age: \" + str(age))  # ✅ works\nprint(f\"Age: {age}\")        # ✅ better!",
      tag: "Common Error"
    },
    {
      q: "What does ** do?",
      a: "** is the power/exponent operator. 2**8 = 256. Pseudocode doesn't have this operator. You can also use it for square roots: 16**0.5 = 4.0.",
      code: "print(2 ** 8)      # 256\nprint(3 ** 3)      # 27\nprint(16 ** 0.5)   # 4.0 (square root!)",
      tag: "Python Only"
    },
    {
      q: "How do I extract individual digits from a number?",
      a: "Use // and % together. Units digit: n%10. Tens digit: (n%100)//10. Hundreds: (n%1000)//100. Thousands: n//1000. This is a classic exam question!",
      code: "n = 1234\nunits    = n % 10           # 4\ntens     = (n % 100) // 10  # 3\nhundreds = (n % 1000) // 100 # 2\nthousands = n // 1000        # 1",
      tag: "Exam Favourite"
    },
  ];

  const tagColors: Record<string, string> = {
    'Critical': 'bg-red-100 text-red-700',
    'Most Common Mistake': 'bg-red-100 text-red-700',
    'Exam Favourite': 'bg-purple-100 text-purple-700',
    'Common Mistake': 'bg-orange-100 text-orange-700',
    'Exam Trap': 'bg-yellow-100 text-yellow-700',
    'Common Error': 'bg-orange-100 text-orange-700',
    'Python Only': 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Day 2: Operators</h1>
      <p className="text-gray-500 mb-8">The most common questions and mistakes students make in exams on Python operators.</p>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-50">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-sm shrink-0">Q</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColors[faq.tag] || 'bg-gray-100 text-gray-600'}`}>{faq.tag}</span>
                  </div>
                  <p className="font-bold text-gray-900">{faq.q}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-sm shrink-0">A</span>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            </div>
            <div className="bg-slate-900 p-4">
              <pre className="text-sm font-mono text-slate-200 whitespace-pre-wrap leading-relaxed">{faq.code}</pre>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">💡 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            '/ always gives float, // gives integer',
            '= is assignment, == is comparison',
            '% gives remainder (like MOD in pseudocode)',
            'and, or, not must be lowercase in Python',
            'Use f-strings for clean output formatting',
            '** is power — pseudocode has no equivalent',
            'Can\'t concatenate string + integer directly',
            'Use brackets when mixing and/or for clarity',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold">✓</span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
