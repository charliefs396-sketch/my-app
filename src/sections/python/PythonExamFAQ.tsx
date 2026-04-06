import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'input() always returns a string — why does this matter?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">This is the #1 Python beginner trap!</strong> Everything you type in
          <code className="bg-gray-100 px-2 py-0.5 rounded font-bold ml-1">input()</code> comes back as a <strong>string</strong>,
          even if you type a number.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ BUG — string concatenation</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`num = input("Enter number: ")
# User types 5
print(num + num)
# Output: "55" NOT 10!`}</pre>
            <p className="text-red-600 text-xs mt-2">&quot;5&quot; + &quot;5&quot; = &quot;55&quot; (string joining)</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ FIXED — convert to int</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`num = int(input("Enter number: "))
# User types 5
print(num + num)
# Output: 10 (correct!)`}</pre>
            <p className="text-green-600 text-xs mt-2">int() converts &quot;5&quot; to 5 first</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">📋 The standard pattern:</p>
          <pre className="font-mono text-sm text-amber-900 mt-2 whitespace-pre-wrap">{`name = input("Name: ")              # String - no conversion
age = int(input("Age: "))           # Integer - wrap with int()
height = float(input("Height: "))   # Decimal - wrap with float()`}</pre>
        </div>
      </div>
    ),
  },
  {
    question: 'What is the difference between = and == in Python?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          This is different from pseudocode! In Python:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-emerald-600 text-white">
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Meaning</th>
                <th className="p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-mono text-2xl font-bold text-blue-700">=</td>
                <td className="p-3"><strong>Assignment</strong> (store a value)</td>
                <td className="p-3 font-mono">age = 17</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-mono text-2xl font-bold text-purple-700">==</td>
                <td className="p-3"><strong>Comparison</strong> (check if equal)</td>
                <td className="p-3 font-mono">if age == 17:</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4">
          <p className="font-bold text-amber-800">⚠️ Compare with pseudocode:</p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-amber-200">
                  <th className="p-2 text-left">Action</th>
                  <th className="p-2 text-left">Pseudocode</th>
                  <th className="p-2 text-left">Python</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="p-2">Assignment</td>
                  <td className="p-2 font-mono">{`Age <- 17`}</td>
                  <td className="p-2 font-mono">age = 17</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2">Comparison</td>
                  <td className="p-2 font-mono">IF Age = 17</td>
                  <td className="p-2 font-mono">if age == 17:</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'Why does Python care about indentation? What is IndentationError?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Python uses indentation to define code blocks</strong> — unlike pseudocode which uses ENDIF, ENDWHILE etc.
          If your indentation is wrong, Python crashes with <code className="bg-red-100 px-2 py-0.5 rounded text-red-700">IndentationError</code>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ IndentationError!</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`if age >= 18:
print("Adult")    # Not indented!`}</pre>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Correct</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`if age >= 18:
    print("Adult")    # Indented with 4 spaces`}</pre>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">💡 Rules:</p>
          <ul className="text-blue-900 mt-2 space-y-1 text-sm">
            <li>• Use <strong>4 spaces</strong> for each level of indentation</li>
            <li>• Everything after <code>:</code> (colon) must be indented</li>
            <li>• Don&apos;t mix tabs and spaces!</li>
            <li>• VS Code handles this automatically if you press Tab</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'int() vs float() — when do I use which?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">Same as pseudocode INTEGER vs REAL:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <p className="font-mono text-xl font-bold text-blue-700 mb-2">int()</p>
            <p className="text-blue-800 font-bold">Whole numbers</p>
            <p className="text-gray-700 text-sm mt-2">Age, count, quantity, score</p>
            <pre className="font-mono text-sm text-blue-900 mt-2 whitespace-pre-wrap">{`age = int(input("Age: "))
# 17, 25, 100`}</pre>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <p className="font-mono text-xl font-bold text-purple-700 mb-2">float()</p>
            <p className="text-purple-800 font-bold">Decimal numbers</p>
            <p className="text-gray-700 text-sm mt-2">Price, height, temperature, average</p>
            <pre className="font-mono text-sm text-purple-900 mt-2 whitespace-pre-wrap">{`price = float(input("Price: "))
# 29.99, 1.75, 36.6`}</pre>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700">⚠️ Common crash:</p>
          <p className="text-red-800 mt-1">
            <code>int(&quot;3.14&quot;)</code> will <strong>CRASH</strong>! You can&apos;t convert a decimal string directly to int.
            Use <code>int(float(&quot;3.14&quot;))</code> if you need to — but usually just use <code>float()</code>.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'What is // (double slash) in Python? Is it the same as /?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>No!</strong> Python has TWO division operators:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-emerald-600 text-white">
                <th className="p-3 text-left">Python</th>
                <th className="p-3 text-left">Pseudocode</th>
                <th className="p-3 text-left">Example</th>
                <th className="p-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-mono font-bold text-blue-700">/</td>
                <td className="p-3">Normal division</td>
                <td className="p-3 font-mono">17 / 5</td>
                <td className="p-3 font-mono font-bold">3.4</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-mono font-bold text-purple-700">//</td>
                <td className="p-3 font-bold">DIV (integer division)</td>
                <td className="p-3 font-mono">17 // 5</td>
                <td className="p-3 font-mono font-bold">3</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-mono font-bold text-pink-700">%</td>
                <td className="p-3 font-bold">MOD (remainder)</td>
                <td className="p-3 font-mono">17 % 5</td>
                <td className="p-3 font-mono font-bold">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800">💡 Quick mapping:</p>
          <p className="text-green-900 mt-1">
            Pseudocode <code>DIV</code> = Python <code>//</code> &nbsp;&nbsp;|&nbsp;&nbsp;
            Pseudocode <code>MOD</code> = Python <code>%</code>
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'How do I print multiple things on one line?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">Python gives you several ways:</p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="font-mono text-sm space-y-3">
            <div>
              <p className="text-gray-400 text-xs mb-1"># Method 1: Commas (adds spaces automatically)</p>
              <p className="text-green-400">print(&quot;Hello&quot;, name, &quot;you are&quot;, age)</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1"># Method 2: f-strings (BEST way - most flexible)</p>
              <p className="text-green-400">{`print(f"Hello {name} you are {age}")`}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1"># Method 3: String concatenation (must convert numbers)</p>
              <p className="text-green-400">print(&quot;Hello &quot; + name + &quot; you are &quot; + str(age))</p>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <p className="font-bold text-emerald-800">🎯 Recommended: Use f-strings!</p>
          <p className="text-emerald-900 mt-1">
            f-strings are the cleanest and most readable. Just put <code>f</code> before the quotes and use
            <code className="mx-1">{'{variable}'}</code> for any variable inside.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Can I use capital letters in Python variable names?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Technically yes, but Python convention is snake_case</strong> (all lowercase with underscores):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Python style (snake_case)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`student_name = "Ali"
total_marks = 85
is_passed = True`}</pre>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border-2 border-amber-200">
            <p className="font-bold text-amber-700 mb-2">⚠️ Works but not convention</p>
            <pre className="font-mono text-sm text-amber-800 whitespace-pre-wrap">{`StudentName = "Ali"
TotalMarks = 85
IsPassed = True`}</pre>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">💡 For exams:</p>
          <p className="text-blue-900 mt-1">
            Constants in Python are written in ALL_CAPS: <code>TAX_RATE = 0.15</code>, <code>MAX_SIZE = 100</code>.
            This is a convention — Python doesn&apos;t enforce constants like pseudocode does.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'What does range() do and why is it confusing?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <code className="bg-gray-100 px-2 py-0.5 rounded font-bold">range()</code> generates numbers for a for loop.
          The confusing part: <strong>the end number is EXCLUDED</strong>!
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="font-mono text-sm space-y-3">
            <div>
              <p className="text-gray-400 text-xs mb-1"># range(5) = 0, 1, 2, 3, 4 (NOT 5!)</p>
              <p className="text-green-400">for i in range(5):</p>
              <p className="text-green-400 pl-4">print(i)  <span className="text-gray-500"># Prints 0,1,2,3,4</span></p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1"># range(1, 6) = 1, 2, 3, 4, 5</p>
              <p className="text-green-400">for i in range(1, 6):</p>
              <p className="text-green-400 pl-4">print(i)  <span className="text-gray-500"># Prints 1,2,3,4,5</span></p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1"># range(0, 10, 2) = 0, 2, 4, 6, 8</p>
              <p className="text-green-400">for i in range(0, 10, 2):</p>
              <p className="text-green-400 pl-4">print(i)  <span className="text-gray-500"># Even numbers</span></p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ Pseudocode vs Python:</p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-amber-200">
                  <th className="p-2 text-left">Pseudocode</th>
                  <th className="p-2 text-left">Python</th>
                  <th className="p-2 text-left">Numbers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="p-2 font-mono">{`FOR i <- 1 TO 5`}</td>
                  <td className="p-2 font-mono">for i in range(1, 6):</td>
                  <td className="p-2">1,2,3,4,5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-mono">{`FOR i <- 1 TO 10`}</td>
                  <td className="p-2 font-mono">for i in range(1, 11):</td>
                  <td className="p-2">1 to 10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-amber-900 mt-2 text-sm">
            In Python, always add 1 to the end value: <code>range(1, N+1)</code> = pseudocode <code>FOR i &larr; 1 TO N</code>
          </p>
        </div>
      </div>
    ),
  },
];

export default function PythonExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Python Essentials</h1>
      <p className="text-gray-500 mb-3 text-lg">Common Python mistakes and exam questions for Paper 4</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          <code className="bg-white px-3 py-1 rounded-lg font-bold text-emerald-700 text-xl">input()</code> <strong>ALWAYS returns a string!</strong> You
          must wrap it with <code className="bg-white px-2 py-1 rounded-lg font-bold text-blue-700">int()</code> or
          <code className="bg-white px-2 py-1 rounded-lg font-bold text-purple-700 ml-1">float()</code> if you need a number.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold text-sm">age = int(input(&quot;Age: &quot;)) ✅</span>
          <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg font-mono font-bold text-sm line-through">age = input(&quot;Age: &quot;) ❌</span>
        </div>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const priority = priorityColors[item.priority];
          return (
            <div key={index} className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-emerald-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
              <button onClick={() => setOpenIndex(isOpen ? -1 : index)} className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                <span className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 ${isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                  {isOpen ? '−' : '+'}
                </span>
                <div className="flex-1">
                  <p className={`font-bold text-lg ${isOpen ? 'text-emerald-700' : 'text-gray-800'}`}>{item.question}</p>
                  <span className={`inline-block mt-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full ${priority.bg} ${priority.text}`}>{priority.label}</span>
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 ml-12 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-4">{item.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
