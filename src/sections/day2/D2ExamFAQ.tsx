import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the difference between DIV and / (normal division)?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">This is a TOP exam question!</strong> They do completely different things:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Operator</th>
                <th className="p-3 text-left">What it does</th>
                <th className="p-3 text-left">Example</th>
                <th className="p-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-mono font-bold text-blue-700">/</td>
                <td className="p-3">Normal division (gives decimal)</td>
                <td className="p-3 font-mono">17 / 5</td>
                <td className="p-3 font-mono font-bold">3.4</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-mono font-bold text-purple-700">DIV</td>
                <td className="p-3">Integer division (whole number only)</td>
                <td className="p-3 font-mono">17 DIV 5</td>
                <td className="p-3 font-mono font-bold">3</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3 font-mono font-bold text-pink-700">MOD</td>
                <td className="p-3">Remainder after division</td>
                <td className="p-3 font-mono">17 MOD 5</td>
                <td className="p-3 font-mono font-bold">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Golden Rule:</p>
          <p className="text-amber-900 mt-1 font-mono text-center text-lg py-2">
            17 = (17 DIV 5) * 5 + (17 MOD 5)
          </p>
          <p className="text-amber-900 text-center">
            17 = 3 * 5 + 2 ✅
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'When should I use MOD? What are the common exam patterns?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          MOD appears in <strong>almost every A Level paper</strong>. Here are the patterns you MUST know:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-blue-800 mb-1">1. Check if a number is even or odd</p>
            <pre className="font-mono text-sm text-blue-900 whitespace-pre-wrap">{`IF Number MOD 2 = 0
   THEN OUTPUT "Even"
   ELSE OUTPUT "Odd"
ENDIF`}</pre>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <p className="font-bold text-purple-800 mb-1">2. Check if divisible by any number</p>
            <pre className="font-mono text-sm text-purple-900 whitespace-pre-wrap">{`IF Number MOD 3 = 0
   THEN OUTPUT "Divisible by 3"
ENDIF`}</pre>
          </div>
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
            <p className="font-bold text-pink-800 mb-1">3. Extract the last digit</p>
            <pre className="font-mono text-sm text-pink-900 whitespace-pre-wrap">{`LastDigit <- Number MOD 10
// e.g., 1234 MOD 10 = 4`}</pre>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-1">4. Remove the last digit (use DIV)</p>
            <pre className="font-mono text-sm text-green-900 whitespace-pre-wrap">{`Remaining <- Number DIV 10
// e.g., 1234 DIV 10 = 123`}</pre>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700">⚠️ Common mistake:</p>
          <p className="text-red-800 mt-1">
            Students confuse DIV and MOD! Remember: <strong>DIV = how many times it fits</strong>, <strong>MOD = what&apos;s left over</strong>.
            Think of sharing sweets: 17 sweets among 5 kids = each gets 3 (DIV), 2 left over (MOD).
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Can I use AND and OR in the same condition?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Yes, but be careful with precedence!</strong> AND is evaluated before OR (just like * before +).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">⚠️ Confusing (no brackets)</p>
            <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">{`IF A = 1 OR B = 2 AND C = 3`}</pre>
            <p className="text-red-600 text-xs mt-2">This checks: A=1 OR (B=2 AND C=3) — NOT what you might expect!</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Clear (use brackets)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`IF (A = 1 OR B = 2) AND C = 3`}</pre>
            <p className="text-green-600 text-xs mt-2">Now it&apos;s clear what you mean!</p>
          </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
          <p className="font-bold text-indigo-800">📋 Rule of thumb:</p>
          <p className="text-indigo-900 mt-1">
            <strong>Always use brackets</strong> when mixing AND and OR. Even if you know the precedence,
            brackets make your code clearer and the examiner won&apos;t doubt your understanding.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'When do I need to use & for concatenation vs commas in OUTPUT?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Both work in OUTPUT, but <code className="bg-gray-100 px-2 py-0.5 rounded font-bold">&amp;</code> is specifically for <strong>joining strings together</strong>:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">OUTPUT WITH COMMAS (common way):</p>
          <p className="font-mono text-green-400 text-sm">OUTPUT "Hello ", Name, " you are ", Age</p>
          <p className="text-gray-400 text-xs font-bold mt-4 mb-2">OUTPUT WITH &amp; (concatenation):</p>
          <p className="font-mono text-green-400 text-sm">OUTPUT "Hello " &amp; Name &amp; " you are " &amp; NUM_TO_STR(Age)</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ Key difference with &amp;:</p>
          <p className="text-amber-900 mt-1">
            When using <code>&amp;</code>, you can only join <strong>strings with strings</strong>. If you have an INTEGER,
            you need <code>NUM_TO_STR()</code> first. With commas in OUTPUT, it handles this automatically.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'When do I need STR_TO_NUM() and NUM_TO_STR()?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          You need these when <strong>converting between strings and numbers</strong>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <p className="font-mono text-xl font-bold text-blue-700 mb-2">STR_TO_NUM()</p>
            <p className="text-blue-800 font-bold mb-2">String to Number</p>
            <p className="text-gray-700 text-sm mb-2">When you need to do MATHS with text input</p>
            <pre className="font-mono text-sm text-blue-900 whitespace-pre-wrap">{`NumStr <- "42"
Num <- STR_TO_NUM(NumStr)
// Now you can do: Num + 10 = 52`}</pre>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <p className="font-mono text-xl font-bold text-purple-700 mb-2">NUM_TO_STR()</p>
            <p className="text-purple-800 font-bold mb-2">Number to String</p>
            <p className="text-gray-700 text-sm mb-2">When you need to JOIN a number with text using &amp;</p>
            <pre className="font-mono text-sm text-purple-900 whitespace-pre-wrap">{`Age <- 17
Msg <- "Age: " & NUM_TO_STR(Age)
// "Age: 17"`}</pre>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800">💡 When NOT needed:</p>
          <p className="text-green-900 mt-1">
            You do NOT need these when using commas in OUTPUT:
            <code className="block mt-1 bg-white px-3 py-1 rounded">OUTPUT "Age: ", Age</code>
            This works fine without conversion because OUTPUT handles it.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'What is the order of operations / operator precedence?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Same as maths — <strong>BODMAS/BIDMAS</strong> applies:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Priority</th>
                <th className="p-3 text-left">Operators</th>
                <th className="p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50 border-b">
                <td className="p-3 font-bold">1st (highest)</td>
                <td className="p-3 font-mono">( )</td>
                <td className="p-3 font-mono">(2 + 3) * 4 = 20</td>
              </tr>
              <tr className="bg-orange-50 border-b">
                <td className="p-3 font-bold">2nd</td>
                <td className="p-3 font-mono">NOT</td>
                <td className="p-3 font-mono">NOT TRUE = FALSE</td>
              </tr>
              <tr className="bg-yellow-50 border-b">
                <td className="p-3 font-bold">3rd</td>
                <td className="p-3 font-mono">* / DIV MOD</td>
                <td className="p-3 font-mono">2 + 3 * 4 = 14</td>
              </tr>
              <tr className="bg-green-50 border-b">
                <td className="p-3 font-bold">4th</td>
                <td className="p-3 font-mono">+ -</td>
                <td className="p-3 font-mono">10 - 3 + 2 = 9</td>
              </tr>
              <tr className="bg-blue-50 border-b">
                <td className="p-3 font-bold">5th</td>
                <td className="p-3 font-mono">= &lt;&gt; &lt; &gt; &lt;= &gt;=</td>
                <td className="p-3 font-mono">IF x &gt; 5</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="p-3 font-bold">6th (lowest)</td>
                <td className="p-3 font-mono">AND OR</td>
                <td className="p-3 font-mono">x &gt; 5 AND x &lt; 10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Exam tip:</p>
          <p className="text-amber-900 mt-1">
            When in doubt, <strong>use brackets!</strong> They make your pseudocode clearer and guarantee the right order.
            You&apos;ll never lose marks for using too many brackets.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Is <> the same as != (not equal)?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>In pseudocode, use <code className="bg-indigo-100 px-2 py-0.5 rounded font-bold text-indigo-700">&lt;&gt;</code> for &quot;not equal&quot;.</strong> Do NOT use <code>!=</code> — that&apos;s Python/programming syntax.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT (Pseudocode)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`IF Password <> "secret"
   THEN
      OUTPUT "Wrong!"
ENDIF`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`IF Password != "secret"
   THEN
      OUTPUT "Wrong!"
ENDIF`}</pre>
            <p className="text-red-600 text-xs mt-2">!= is Python, not pseudocode!</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function D2ExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Day 2: Operators</h1>
      <p className="text-gray-500 mb-3 text-lg">Common exam questions about operators, DIV, MOD, and type conversions</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          <code className="bg-white px-3 py-1 rounded-lg font-bold text-purple-700 text-xl">DIV</code> gives the <strong>whole number</strong> part and
          <code className="bg-white px-3 py-1 rounded-lg font-bold text-pink-700 text-xl ml-1">MOD</code> gives the <strong>remainder</strong>.
          These two are used in nearly EVERY exam paper. Know them inside out!
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">17 DIV 5 = 3 ✅</span>
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">17 MOD 5 = 2 ✅</span>
          <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg font-mono font-bold">17 / 5 = 3.4 ✅</span>
        </div>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const priority = priorityColors[item.priority];
          return (
            <div key={index} className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-indigo-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
              <button onClick={() => setOpenIndex(isOpen ? -1 : index)} className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                <span className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 ${isOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}>
                  {isOpen ? '−' : '+'}
                </span>
                <div className="flex-1">
                  <p className={`font-bold text-lg ${isOpen ? 'text-indigo-700' : 'text-gray-800'}`}>{item.question}</p>
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
