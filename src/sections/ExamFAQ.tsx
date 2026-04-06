import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the ← arrow? Is it necessary for the exam?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">YES — 100% necessary!</strong> The <code className="bg-indigo-100 px-2 py-1 rounded font-bold text-indigo-700 text-lg">←</code> arrow
          is the <strong>assignment operator</strong> in Cambridge pseudocode. It means <em>"store this value into this variable"</em>.
        </p>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">WHAT IT MEANS:</p>
          <p className="font-mono text-green-400 text-lg">Name ← "Ali"</p>
          <p className="text-gray-400 mt-2 text-sm">This reads as: <em>"Store the value Ali into the variable Name"</em></p>
          <p className="text-gray-400 text-sm">Think of it as an arrow pointing <strong>INTO</strong> the variable — the value flows from right to left</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 text-lg mb-2">✅ CORRECT (Full marks)</p>
            <code className="text-green-800 font-mono block">Age ← 17</code>
            <code className="text-green-800 font-mono block">Name ← "Ali"</code>
            <code className="text-green-800 font-mono block">Total ← Price * Qty</code>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 text-lg mb-2">❌ WRONG (Lose marks)</p>
            <code className="text-red-700 font-mono block">Age = 17</code>
            <code className="text-red-700 font-mono block">Name = "Ali"</code>
            <code className="text-red-700 font-mono block">Total = Price * Qty</code>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ Why does this matter?</p>
          <p className="text-amber-900 mt-1">
            In Cambridge pseudocode, <code>=</code> is used ONLY for <strong>comparison</strong> (checking if two things are equal),
            like in <code>IF Age = 17 THEN</code>. If you write <code>Age = 17</code> for assignment, the examiner thinks you mean
            "is Age equal to 17?" — that's a completely different thing!
          </p>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">🖊️ How to write ← on paper</p>
          <p className="text-blue-900 mt-1">
            In your written exam, just draw a left-pointing arrow: write a less-than sign <code>&lt;</code> followed by
            a dash <code>-</code> like this: <code className="text-2xl font-bold">&lt;-</code> or draw it as one arrow: <code className="text-2xl font-bold">←</code>.
            Both are accepted. On a computer, some people type <code>&lt;-</code> and that's fine too.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Do I HAVE to write DECLARE for every variable?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">YES!</strong> At A Level (9618), every variable must be declared
          with its data type before you use it. This is different from O Level where you could sometimes skip it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ A Level (CORRECT)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`DECLARE Name : STRING
DECLARE Age : INTEGER
OUTPUT "Enter name: "
INPUT Name
OUTPUT "Enter age: "
INPUT Age`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ O Level style (WRONG at A Level)</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`OUTPUT "Enter name: "
INPUT Name
OUTPUT "Enter age: "
INPUT Age`}</pre>
            <p className="text-red-600 text-xs mt-2">Missing declarations = lost marks!</p>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
          <p className="font-bold text-indigo-800">📋 The rule:</p>
          <p className="text-indigo-900 mt-1 font-mono text-lg text-center py-2">DECLARE &lt;name&gt; : &lt;DATA TYPE&gt;</p>
          <p className="text-indigo-700 text-sm text-center">Always declare ALL variables at the TOP of your pseudocode, before any logic.</p>
        </div>
      </div>
    ),
  },
  {
    question: 'What\'s the difference between = and ← ?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is one of the <strong>most common mistakes</strong> students make. They do completely different things:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-4 text-left">Symbol</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">What it does</th>
                <th className="p-4 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50 border-b border-blue-100">
                <td className="p-4 font-mono text-2xl font-bold text-blue-700">←</td>
                <td className="p-4 font-bold text-blue-800">Assignment</td>
                <td className="p-4 text-gray-700"><strong>Stores</strong> a value into a variable</td>
                <td className="p-4 font-mono text-blue-800">Age ← 17</td>
              </tr>
              <tr className="bg-purple-50 border-b border-purple-100">
                <td className="p-4 font-mono text-2xl font-bold text-purple-700">=</td>
                <td className="p-4 font-bold text-purple-800">Comparison</td>
                <td className="p-4 text-gray-700"><strong>Checks</strong> if two values are equal</td>
                <td className="p-4 font-mono text-purple-800">IF Age = 17 THEN</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 rounded-xl p-5">
          <p className="text-gray-400 text-xs font-bold mb-3">SEE THE DIFFERENCE:</p>
          <div className="space-y-2 font-mono">
            <p className="text-green-400">Age ← 17          <span className="text-gray-500">// "Store 17 into Age"</span></p>
            <p className="text-yellow-400">IF Age = 18 THEN   <span className="text-gray-500">// "Is Age equal to 18?"</span></p>
            <p className="text-yellow-400">    OUTPUT "Adult"</p>
            <p className="text-yellow-400">ENDIF</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'Is CONSTANT necessary? Can I just use a variable?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>YES, you must use CONSTANT when the value never changes.</strong> The examiner specifically looks for this.
          If a question says "the tax rate is always 15%" and you use a variable instead of a constant, you'll lose marks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <code className="font-mono text-green-800">CONSTANT TAXRATE = 0.15</code>
            <p className="text-green-700 text-sm mt-2">Note: Constants DO use <code>=</code> (not ←)</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <code className="font-mono text-red-700">DECLARE TaxRate : REAL</code>
            <br />
            <code className="font-mono text-red-700">TaxRate ← 0.15</code>
            <p className="text-red-600 text-sm mt-2">This is a variable — it CAN change. Tax rate shouldn't change!</p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ Tricky detail:</p>
          <p className="text-amber-900 mt-1">
            Notice that CONSTANT uses <code>=</code> (equals sign), NOT <code>←</code> (arrow).
            This is because you're <strong>defining</strong> the constant, not assigning to a variable.
            <br /><br />
            <code className="bg-amber-100 px-2 py-1 rounded">CONSTANT PI = 3.14159</code> ← correct
            <br />
            <code className="bg-red-100 px-2 py-1 rounded line-through">CONSTANT PI ← 3.14159</code> ← wrong!
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'When do I use STRING vs CHAR?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          This trips up a lot of students:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">What it holds</th>
                <th className="p-4 text-left">Quotes</th>
                <th className="p-4 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-4 font-bold font-mono text-indigo-700">CHAR</td>
                <td className="p-4">Exactly <strong>ONE</strong> character</td>
                <td className="p-4">Single quotes <code>' '</code></td>
                <td className="p-4 font-mono">'A', 'x', '7', '?'</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-4 font-bold font-mono text-purple-700">STRING</td>
                <td className="p-4"><strong>Zero or more</strong> characters</td>
                <td className="p-4">Double quotes <code>" "</code></td>
                <td className="p-4 font-mono">"Hello", "A", ""</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">EXAMPLES:</p>
          <div className="space-y-1 font-mono text-sm">
            <p className="text-green-400">DECLARE Grade : CHAR        <span className="text-gray-500">// 'A', 'B', 'C' — one letter</span></p>
            <p className="text-green-400">DECLARE Initial : CHAR      <span className="text-gray-500">// 'J' — one letter</span></p>
            <p className="text-green-400">DECLARE FullName : STRING   <span className="text-gray-500">// "John Smith" — multiple chars</span></p>
            <p className="text-green-400">DECLARE Address : STRING    <span className="text-gray-500">// "123 Main St" — multiple chars</span></p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Quick rule:</p>
          <p className="text-amber-900 mt-1">
            If it will <strong>always be exactly one character</strong> → use <strong>CHAR</strong><br />
            If it could be <strong>any length</strong> (or you're not sure) → use <strong>STRING</strong>
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'When do I use INTEGER vs REAL?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Simple rule:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <p className="font-mono text-2xl font-bold text-blue-700 mb-2">INTEGER</p>
            <p className="text-blue-800 font-bold mb-2">Whole numbers ONLY</p>
            <p className="text-gray-700 text-sm mb-2">No decimal point</p>
            <div className="space-y-1 text-sm">
              <p>• Age → <code>17</code></p>
              <p>• Number of students → <code>30</code></p>
              <p>• Score out of 100 → <code>85</code></p>
              <p>• Counter → <code>0, 1, 2, 3...</code></p>
            </div>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <p className="font-mono text-2xl font-bold text-purple-700 mb-2">REAL</p>
            <p className="text-purple-800 font-bold mb-2">Numbers WITH decimals</p>
            <p className="text-gray-700 text-sm mb-2">Has a decimal point</p>
            <div className="space-y-1 text-sm">
              <p>• Price → <code>29.99</code></p>
              <p>• Average → <code>72.5</code></p>
              <p>• Temperature → <code>36.6</code></p>
              <p>• Percentage → <code>0.85</code></p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700">⚠️ Exam trap!</p>
          <p className="text-red-800 mt-1">
            If a question asks you to calculate an <strong>average</strong>, ALWAYS use REAL — because
            averages almost always have decimals. Even if the example happens to give a whole number,
            declare it as REAL because it <em>could</em> have decimals.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Do I need to put OUTPUT before every INPUT?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Yes, it's best practice</strong> and most mark schemes expect it. Always show a prompt
          telling the user what to enter before the INPUT statement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Good practice</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`OUTPUT "Enter your name: "
INPUT Name`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">⚠️ Not ideal</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`INPUT Name`}</pre>
            <p className="text-red-600 text-xs mt-2">User wouldn't know what to type!</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          Some mark schemes specifically award a mark for the OUTPUT prompt. Don't lose easy marks!
        </p>
      </div>
    ),
  },
  {
    question: 'What about phone numbers — INTEGER or STRING?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          This is a <strong>classic exam trick question!</strong>
        </p>

        <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200 mb-4">
          <p className="text-2xl font-bold text-green-700 mb-2">Answer: STRING</p>
          <p className="text-green-800">
            Phone numbers should ALWAYS be stored as STRING, never INTEGER.
          </p>
        </div>

        <p className="text-gray-700 mb-3"><strong>Why?</strong> Three reasons:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>Phone numbers can start with <strong>0</strong> (like 07123456789). An INTEGER would drop the leading zero → 7123456789. Wrong!</li>
          <li>Phone numbers can have <strong>spaces or dashes</strong> (like 071-234-5678). Integers can't store those.</li>
          <li>You never do <strong>maths</strong> with phone numbers. You don't add or multiply them. So they're not really "numbers".</li>
        </ol>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 The rule of thumb:</p>
          <p className="text-amber-900 mt-1">
            If you <strong>don't do maths with it</strong>, it's probably a STRING — even if it looks like a number.
            Phone numbers, postcodes, student IDs, house numbers — all STRING.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'How do I combine/join text and variables in OUTPUT?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Use <strong>commas</strong> to separate text and variables in OUTPUT, or use the <strong>&amp;</strong> concatenation operator:
        </p>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="space-y-2 font-mono text-sm">
            <p className="text-gray-400">// Method 1: Using commas (most common)</p>
            <p className="text-green-400">OUTPUT "Hello ", Name, " you are ", Age, " years old"</p>
            <p className="text-gray-400 mt-3">// Method 2: Using & (concatenation)</p>
            <p className="text-green-400">OUTPUT "Hello " & Name & " you are " & Age & " years old"</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">Both methods are accepted in the exam. Use whichever you're more comfortable with.</p>
      </div>
    ),
  },
  {
    question: 'Can I write pseudocode in lowercase?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Keywords should be UPPERCASE.</strong> Variable names can be any case.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`DECLARE name : STRING
OUTPUT "Enter name: "
INPUT name
IF name = "Ali" THEN
    OUTPUT "Welcome!"
ENDIF`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">⚠️ Risky</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`declare name : string
output "Enter name: "
input name
if name = "Ali" then
    output "Welcome!"
endif`}</pre>
          </div>
        </div>

        <p className="text-gray-700">
          Keywords that must be UPPERCASE: <code>DECLARE</code>, <code>CONSTANT</code>, <code>INPUT</code>,
          <code>OUTPUT</code>, <code>IF</code>, <code>THEN</code>, <code>ELSE</code>, <code>ENDIF</code>,
          <code>FOR</code>, <code>WHILE</code>, <code>REPEAT</code>, etc.
        </p>
        <p className="text-gray-700 mt-2">
          Data types must also be UPPERCASE: <code>INTEGER</code>, <code>REAL</code>, <code>STRING</code>,
          <code>CHAR</code>, <code>BOOLEAN</code>, <code>DATE</code>
        </p>
      </div>
    ),
  },
];

export default function ExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL — Will lose marks' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT — Often tested' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Your Questions Answered</h1>
      <p className="text-gray-500 mb-3 text-lg">Every question you might have about Day 1 topics, answered in detail</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          The <code className="bg-white px-3 py-1 rounded-lg font-bold text-indigo-700 text-xl">←</code> arrow is the
          <strong> assignment operator</strong>. It stores a value into a variable.
          You <strong>MUST</strong> use it instead of <code>=</code> when assigning values.
          The <code>=</code> sign is ONLY for <strong>comparison</strong> (and for defining constants).
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">Age ← 17 ✅</span>
          <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg font-mono font-bold line-through">Age = 17 ❌</span>
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">IF Age = 17 THEN ✅</span>
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">CONSTANT PI = 3.14 ✅</span>
        </div>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const priority = priorityColors[item.priority];

          return (
            <div
              key={index}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-indigo-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 ${
                  isOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'
                }`}>
                  {isOpen ? '−' : '+'}
                </span>
                <div className="flex-1">
                  <p className={`font-bold text-lg ${isOpen ? 'text-indigo-700' : 'text-gray-800'}`}>
                    {item.question}
                  </p>
                  <span className={`inline-block mt-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full ${priority.bg} ${priority.text}`}>
                    {priority.label}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 ml-12 animate-fade-in-up">
                  <div className="border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="section-card mt-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">📊 Quick Summary: What's Exam-Essential?</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Concept</th>
                <th className="p-3 text-center">Needed in Exam?</th>
                <th className="p-3 text-left">Quick Rule</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">← (assignment arrow)</td>
                <td className="p-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">MUST USE</span></td>
                <td className="p-3">Always use ← for storing values. Never use = for assignment.</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-bold">DECLARE</td>
                <td className="p-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">MUST USE</span></td>
                <td className="p-3">Every variable must be declared with its data type.</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">CONSTANT</td>
                <td className="p-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">MUST USE</span></td>
                <td className="p-3">Use for values that never change. Uses = not ←.</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-bold">Data types</td>
                <td className="p-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">MUST KNOW</span></td>
                <td className="p-3">INTEGER, REAL, STRING, CHAR, BOOLEAN, DATE</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">UPPERCASE keywords</td>
                <td className="p-3 text-center"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">SHOULD DO</span></td>
                <td className="p-3">DECLARE, INPUT, OUTPUT, IF, THEN, etc. should be caps.</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-bold">OUTPUT before INPUT</td>
                <td className="p-3 text-center"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">SHOULD DO</span></td>
                <td className="p-3">Always show a prompt so the user knows what to type.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold">Meaningful names</td>
                <td className="p-3 text-center"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">BEST PRACTICE</span></td>
                <td className="p-3">Use StudentName not x. Examiners prefer clear code.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
