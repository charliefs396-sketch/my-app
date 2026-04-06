import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'I keep forgetting THEN or ENDIF — will I lose marks?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">YES!</strong> Missing THEN or ENDIF will cost you marks. Every IF needs <strong>three</strong> things:
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">THE COMPLETE IF STRUCTURE:</p>
          <div className="font-mono text-sm space-y-1">
            <p><span className="text-cyan-400 font-bold">IF</span> <span className="text-yellow-300">condition</span></p>
            <p className="pl-4"><span className="text-cyan-400 font-bold">THEN</span> <span className="text-gray-500">{"<-- Don't forget this!"}</span></p>
            <p className="pl-8 text-green-400">// do something</p>
            <p className="pl-4"><span className="text-cyan-400 font-bold">ELSE</span> <span className="text-gray-500">{"<-- Optional"}</span></p>
            <p className="pl-8 text-green-400">// do something else</p>
            <p><span className="text-cyan-400 font-bold">ENDIF</span> <span className="text-gray-500">{"<-- Don't forget this!"}</span></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`IF Age >= 18
   THEN
      OUTPUT "Adult"
ENDIF`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG (3 ways)</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`IF Age >= 18
   OUTPUT "Adult"

IF Age >= 18 THEN
   OUTPUT "Adult"

IF Age >= 18
   THEN OUTPUT "Adult"
ENDIF`}</pre>
            <p className="text-red-600 text-xs mt-2">Missing THEN, missing ENDIF, or wrong format!</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'Can I write ELSE IF? My O Level teacher said it was fine!',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">NO! ELSE IF does NOT exist in Cambridge pseudocode!</strong> This is the
          <strong> #1 mistake</strong> students make coming from O Level. At A Level, you must use <strong>nested IF</strong> instead.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG — ELSE IF doesn&apos;t exist</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`IF Mark >= 80
   THEN Grade <- "A"
ELSE IF Mark >= 70
   THEN Grade <- "B"
ELSE IF Mark >= 60
   THEN Grade <- "C"
ELSE Grade <- "Fail"
ENDIF`}</pre>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT — Nested IF</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`IF Mark >= 80
   THEN
      Grade <- "A"
   ELSE
      IF Mark >= 70
         THEN
            Grade <- "B"
         ELSE
            IF Mark >= 60
               THEN
                  Grade <- "C"
               ELSE
                  Grade <- "Fail"
            ENDIF
      ENDIF
ENDIF`}</pre>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Counting Rule:</p>
          <p className="text-amber-900 mt-1">
            <strong>Count your IFs, count your ENDIFs — they must match!</strong> 3 IFs = 3 ENDIFs. Always.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Inside an IF condition, do I use = or <- ?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Inside the IF condition, you <strong>always use = for comparison</strong>. The arrow is only for assignment.
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="font-mono text-sm space-y-2">
            <p className="text-gray-400">// COMPARISON (uses =)</p>
            <p><span className="text-cyan-400">IF</span> <span className="text-yellow-300">Password = &quot;secret&quot;</span> <span className="text-gray-500">{"<-- Is Password equal to 'secret'?"}</span></p>
            <p className="text-gray-400 mt-3">// ASSIGNMENT (uses arrow)</p>
            <p><span className="text-yellow-300">Password</span> <span className="text-yellow-400 font-bold">&lt;-</span> <span className="text-green-400">&quot;secret&quot;</span> <span className="text-gray-500">{"<-- Store 'secret' into Password"}</span></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <code className="font-mono text-green-800">IF Score = 100 THEN</code>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <code className="font-mono text-red-700">{`IF Score <- 100 THEN`}</code>
            <p className="text-red-600 text-xs mt-2">This would mean &quot;assign 100 to Score&quot; — not a comparison!</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'When should I use CASE instead of IF?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Use this simple decision guide:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Scenario</th>
                <th className="p-3 text-center">Use</th>
                <th className="p-3 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3">Checking ONE variable against SPECIFIC values</td>
                <td className="p-3 text-center font-bold text-purple-700">CASE</td>
                <td className="p-3">Cleaner and shorter</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3">Menu with numbered options (1, 2, 3...)</td>
                <td className="p-3 text-center font-bold text-purple-700">CASE</td>
                <td className="p-3">Perfect for menus</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3">Checking ranges (Mark &gt;= 80)</td>
                <td className="p-3 text-center font-bold text-blue-700">IF</td>
                <td className="p-3">CASE can&apos;t do ranges</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3">Multiple different conditions</td>
                <td className="p-3 text-center font-bold text-blue-700">IF</td>
                <td className="p-3">More flexible</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3">Checking 2+ variables</td>
                <td className="p-3 text-center font-bold text-blue-700">IF</td>
                <td className="p-3">CASE only checks one variable</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Exam tip:</p>
          <p className="text-amber-900 mt-1">
            If the exam says &quot;use a CASE statement&quot; or &quot;use a menu&quot; — use CASE.
            If it says &quot;use selection&quot; — use whichever fits. If checking ranges — always IF.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Is it OTHERWISE or DEFAULT in CASE?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>In Cambridge pseudocode, it&apos;s <code className="bg-indigo-100 px-2 py-1 rounded font-bold text-indigo-700">OTHERWISE</code>.</strong> Do NOT use DEFAULT — that&apos;s from other programming languages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ CORRECT</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`CASE OF Choice
   1 : OUTPUT "Option 1"
   2 : OUTPUT "Option 2"
   OTHERWISE OUTPUT "Invalid"
ENDCASE`}</pre>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <p className="font-bold text-red-600 mb-2">❌ WRONG</p>
            <pre className="font-mono text-sm text-red-700 whitespace-pre-wrap">{`CASE OF Choice
   1 : OUTPUT "Option 1"
   2 : OUTPUT "Option 2"
   DEFAULT OUTPUT "Invalid"
ENDCASE`}</pre>
            <p className="text-red-600 text-xs mt-2">DEFAULT is from other languages, not pseudocode!</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'Do I need to indent my IF statements?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Indentation is not technically required</strong>, but it&apos;s <strong>strongly recommended</strong>. It makes your code readable, and examiners appreciate clear code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Easy to read (indented)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`IF Mark >= 50
   THEN
      OUTPUT "Pass"
   ELSE
      OUTPUT "Fail"
ENDIF`}</pre>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border-2 border-amber-200">
            <p className="font-bold text-amber-700 mb-2">⚠️ Hard to read (no indent)</p>
            <pre className="font-mono text-sm text-amber-800 whitespace-pre-wrap">{`IF Mark >= 50
THEN
OUTPUT "Pass"
ELSE
OUTPUT "Fail"
ENDIF`}</pre>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">💡 Tip:</p>
          <p className="text-blue-900 mt-1">
            Good indentation especially helps with <strong>nested IFs</strong> — without it, you can&apos;t tell which ENDIF matches which IF!
          </p>
        </div>
      </div>
    ),
  },
];

export default function D3ExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Day 3: Selection</h1>
      <p className="text-gray-500 mb-3 text-lg">Common exam mistakes with IF, Nested IF, and CASE statements</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          <strong>ELSE IF does NOT exist!</strong> At A Level, you must write <strong>nested IFs</strong> with full
          <code className="bg-white px-2 py-1 rounded-lg font-bold text-cyan-700 ml-1">IF...THEN...ELSE...ENDIF</code> blocks.
          Every IF must have a matching ENDIF!
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
