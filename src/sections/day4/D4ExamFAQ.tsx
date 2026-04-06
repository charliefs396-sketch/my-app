import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'Do I need to write NEXT Counter or just NEXT?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">You MUST write the variable name after NEXT!</strong> Just writing
          <code className="bg-red-100 px-2 py-0.5 rounded">NEXT</code> on its own will lose marks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`FOR Counter <- 1 TO 10
   OUTPUT Counter
NEXT Counter`}</pre>
            <p className="text-green-600 text-xs mt-2">Variable name matches!</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`FOR Counter <- 1 TO 10
   OUTPUT Counter
NEXT`}</pre>
            <p className="text-red-600 text-xs mt-2">Missing the variable name!</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 The rule:</p>
          <p className="text-amber-900 mt-1 font-mono text-center text-lg py-2">
            FOR <strong>x</strong> &larr; 1 TO 10 ... NEXT <strong>x</strong>
          </p>
          <p className="text-amber-900 text-center">The variable after NEXT must match the variable after FOR!</p>
        </div>
      </div>
    ),
  },
  {
    question: 'WHILE vs REPEAT — how do I know which one to use?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is one of the <strong>most common exam questions</strong>. Here&apos;s the key difference:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-center">WHILE</th>
                <th className="p-3 text-center">REPEAT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">When is condition checked?</td>
                <td className="p-3 text-center font-bold text-blue-700">BEFORE each loop</td>
                <td className="p-3 text-center font-bold text-purple-700">AFTER each loop</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-bold">Minimum executions</td>
                <td className="p-3 text-center font-bold text-blue-700">0 times</td>
                <td className="p-3 text-center font-bold text-purple-700">1 time (at least once!)</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">Condition type</td>
                <td className="p-3 text-center">Loops WHILE true</td>
                <td className="p-3 text-center">Loops UNTIL true</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-bold">Best for</td>
                <td className="p-3 text-center">Might not need to run</td>
                <td className="p-3 text-center">Input validation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-3">
          <p className="font-bold text-green-800">🎯 Quick Decision:</p>
          <ul className="text-green-900 mt-2 space-y-1 text-sm">
            <li>• &quot;Keep going <strong>while</strong> something is true&quot; &rarr; <strong>WHILE</strong></li>
            <li>• &quot;Keep going <strong>until</strong> something becomes true&quot; &rarr; <strong>REPEAT</strong></li>
            <li>• &quot;Must do it at least once&quot; (like asking for input) &rarr; <strong>REPEAT</strong></li>
            <li>• &quot;Might not need to do it at all&quot; &rarr; <strong>WHILE</strong></li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
          <p className="font-bold text-red-700">⚠️ EXAM TRAP — Conditions are OPPOSITE!</p>
          <p className="text-red-800 mt-1">
            WHILE loops when condition is <strong>TRUE</strong>. REPEAT loops when condition is <strong>FALSE</strong> (until it becomes true).
            So <code>WHILE x &lt;&gt; 0</code> is equivalent to <code>REPEAT...UNTIL x = 0</code> — notice the conditions are flipped!
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'What causes an infinite loop? How do I avoid it?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          An infinite loop happens when the <strong>condition never becomes false</strong> (WHILE) or <strong>never becomes true</strong> (REPEAT).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ INFINITE LOOP</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`Count <- 1
WHILE Count <= 10
   OUTPUT Count
ENDWHILE`}</pre>
            <p className="text-red-600 text-xs mt-2">Count never changes! It stays 1 forever!</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ FIXED</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`Count <- 1
WHILE Count <= 10
   OUTPUT Count
   Count <- Count + 1
ENDWHILE`}</pre>
            <p className="text-green-600 text-xs mt-2">Count increases, eventually stops!</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Prevention checklist:</p>
          <ul className="text-amber-900 mt-2 space-y-1 text-sm">
            <li>✅ Does the loop variable <strong>change</strong> inside the loop?</li>
            <li>✅ Does the change move <strong>towards</strong> the exit condition?</li>
            <li>✅ Will the condition <strong>eventually</strong> become false/true?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'FOR vs WHILE vs REPEAT — which one should I pick?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The exam may ask you to <strong>justify your choice</strong>. Here&apos;s the decision tree:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-blue-800 text-lg mb-1">🔢 Do you know how many times?</p>
            <p className="text-blue-900">YES &rarr; Use <strong>FOR</strong></p>
            <p className="text-gray-600 text-sm mt-1">Example: &quot;Print numbers 1 to 10&quot;, &quot;Process 20 students&quot;</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <p className="font-bold text-purple-800 text-lg mb-1">🔄 Must execute at least once?</p>
            <p className="text-purple-900">YES &rarr; Use <strong>REPEAT...UNTIL</strong></p>
            <p className="text-gray-600 text-sm mt-1">Example: &quot;Keep asking until valid input&quot;, &quot;Menu - show at least once&quot;</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
            <p className="font-bold text-teal-800 text-lg mb-1">⏭️ Might not execute at all?</p>
            <p className="text-teal-900">YES &rarr; Use <strong>WHILE</strong></p>
            <p className="text-gray-600 text-sm mt-1">Example: &quot;Read file while not end&quot;, &quot;Process while data available&quot;</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">📝 Exam justification template:</p>
          <p className="text-amber-900 mt-1 italic">
            &quot;I used [LOOP TYPE] because [the number of iterations is known / the loop must execute at least once / the loop might not need to execute].&quot;
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Is it ENDWHILE or END WHILE (with a space)?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>It&apos;s one word: <code className="bg-indigo-100 px-2 py-1 rounded font-bold text-indigo-700">ENDWHILE</code></strong>. Same pattern for all endings:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <div className="font-mono text-sm text-green-800 space-y-1">
              <p>ENDIF</p>
              <p>ENDWHILE</p>
              <p>ENDCASE</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <div className="font-mono text-sm text-red-700 space-y-1">
              <p>END IF</p>
              <p>END WHILE</p>
              <p>END CASE</p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          All end keywords are <strong>one word</strong> — no spaces!
        </p>
      </div>
    ),
  },
  {
    question: 'Can I modify the FOR loop counter inside the loop?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600">NO — you should never modify the loop counter inside a FOR loop.</strong> The FOR loop manages the counter automatically.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ BAD PRACTICE</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`FOR i <- 1 TO 10
   OUTPUT i
   i <- i + 2
NEXT i`}</pre>
            <p className="text-red-600 text-xs mt-2">Don&apos;t change i inside the loop!</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Use STEP instead</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`FOR i <- 1 TO 10 STEP 2
   OUTPUT i
NEXT i`}</pre>
            <p className="text-green-600 text-xs mt-2">STEP controls the increment!</p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">💡 Rule:</p>
          <p className="text-blue-900 mt-1">
            If you need to skip values or change the increment, use <code>STEP</code>.
            If you need more control over when to stop, use <code>WHILE</code> or <code>REPEAT</code> instead.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'How do I trace through a loop in the exam?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Draw a trace table!</strong> This is a favourite exam question. Here&apos;s how:
        </p>
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">CODE TO TRACE:</p>
          <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">{`Total <- 0
FOR i <- 1 TO 3
   Total <- Total + i
NEXT i
OUTPUT Total`}</pre>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden text-center">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Iteration</th>
                <th className="p-3">i</th>
                <th className="p-3">Total (before)</th>
                <th className="p-3">Total + i</th>
                <th className="p-3">Total (after)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3">Start</td><td className="p-3">—</td><td className="p-3">0</td><td className="p-3">—</td><td className="p-3 font-bold">0</td>
              </tr>
              <tr className="bg-blue-50 border-b">
                <td className="p-3">1st</td><td className="p-3 font-bold">1</td><td className="p-3">0</td><td className="p-3">0+1</td><td className="p-3 font-bold">1</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3">2nd</td><td className="p-3 font-bold">2</td><td className="p-3">1</td><td className="p-3">1+2</td><td className="p-3 font-bold">3</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3">3rd</td><td className="p-3 font-bold">3</td><td className="p-3">3</td><td className="p-3">3+3</td><td className="p-3 font-bold">6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 font-bold">OUTPUT: 6</p>
      </div>
    ),
  },
];

export default function D4ExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Day 4: Loops</h1>
      <p className="text-gray-500 mb-3 text-lg">Common exam traps with FOR, WHILE, and REPEAT loops</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          <strong>Know WHEN to use each loop and be able to JUSTIFY it!</strong> The exam will ask
          &quot;Why did you use a WHILE loop?&quot; — you must explain: &quot;Because the number of iterations is unknown
          and the loop might not need to execute.&quot;
        </p>
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
