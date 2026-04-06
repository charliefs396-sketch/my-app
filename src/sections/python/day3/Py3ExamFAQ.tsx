import CodeBlock from '../../../components/CodeBlock';

export default function Py3ExamFAQ() {
  const faqs = [
    {
      q: "Do I write 'if' or 'IF' in Python?",
      a: "Always lowercase: if, elif, else. Python is case-sensitive — 'IF' will cause a NameError because Python thinks it's a variable name, not a keyword.",
      code: `# WRONG
IF age >= 18:          # NameError!
    print("Adult")

# CORRECT
if age >= 18:
    print("Adult")`,
      type: 'error',
    },
    {
      q: "Does Python have 'ELSE IF' like pseudocode?",
      a: "NO! Python uses 'elif' (not 'else if' as two words, and not 'ELSE IF'). Writing 'else if' creates an else block containing an if, which works differently.",
      code: `# WRONG - two separate statements
else if mark >= 70:    # SyntaxError!
    grade = "B"

# CORRECT
elif mark >= 70:
    grade = "B"`,
      type: 'error',
    },
    {
      q: "Why do I need a colon after if/elif/else?",
      a: "The colon (:) tells Python 'the block of code below is what to run'. Without it, you get a SyntaxError. Never forget the colon!",
      code: `# WRONG
if age >= 18    # SyntaxError: expected ':'
    print("Adult")

# CORRECT
if age >= 18:
    print("Adult")`,
      type: 'error',
    },
    {
      q: "Can I use = instead of == in an if condition?",
      a: "NO! = is assignment (stores a value). == is comparison (checks if equal). Using = in a condition causes a SyntaxError in Python.",
      code: `# WRONG
if age = 18:    # SyntaxError!
    print("Yes")

# CORRECT
if age == 18:   # == for comparison
    print("Yes")`,
      type: 'error',
    },
    {
      q: "Do I need ENDIF in Python?",
      a: "No! Python uses indentation to show where the IF block ends. When you go back to the original indentation level, the IF block is over. No closing keyword needed.",
      code: `if age >= 18:
    print("Adult")    # inside IF
    print("Welcome")  # still inside IF

print("Outside")      # back to original indent = IF is done
# No ENDIF needed!`,
      type: 'info',
    },
    {
      q: "What happens if I mix tabs and spaces?",
      a: "Python raises a TabError! Always use 4 spaces consistently. Set your editor to convert tabs to spaces. Most editors (VS Code) do this automatically.",
      code: `if age >= 18:
    print("Adult")   # 4 spaces - OK
	print("Welcome") # Tab - TabError! mixing!`,
      type: 'error',
    },
    {
      q: "Can I have an elif without an else?",
      a: "Yes! else is always optional. If none of your conditions are True and there's no else, nothing happens — the code just skips to the next line after the if block.",
      code: `# This is perfectly valid
mark = 45

if mark >= 80:
    print("A")
elif mark >= 70:
    print("B")
elif mark >= 60:
    print("C")
# No else - if mark < 60, nothing prints
# That might be a bug but it's not a syntax error!`,
      type: 'info',
    },
    {
      q: "What's the difference between 'and' and 'or' for exam questions?",
      a: "AND = BOTH must be true. OR = AT LEAST ONE must be true. A common exam trick is to ask you which one to use in a boundary check.",
      code: `# AND - both conditions true
# Valid mark: must be >= 0 AND <= 100
if mark >= 0 and mark <= 100:
    print("Valid")

# OR - at least one true
# Invalid mark: less than 0 OR more than 100
if mark < 0 or mark > 100:
    print("Invalid")

# Notice: these are opposite conditions!`,
      type: 'info',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — IF Statements</h1>
      <p className="text-gray-500 mb-8">Every common mistake and question — answered clearly</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-start gap-4 p-6">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                faq.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {faq.type === 'error' ? '⚠️' : 'ℹ️'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Q: {faq.q}</h3>
                <p className="text-gray-600 mb-4">{faq.a}</p>
                <CodeBlock language="python" code={faq.code} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key points */}
      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <h2 className="text-lg font-bold text-emerald-800 mb-4">📌 Key Points to Remember</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'if / elif / else — all lowercase',
            'Always put a colon : after each',
            'Indent with 4 spaces inside each block',
            'No ENDIF — indentation closes the block',
            '== for comparison, = for assignment',
            'elif not else if (one word!)',
            'and/or/not all lowercase',
            'else is always optional',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/70 rounded-xl p-3">
              <span className="text-emerald-500 font-bold">✓</span>
              <p className="text-gray-700 text-sm">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
