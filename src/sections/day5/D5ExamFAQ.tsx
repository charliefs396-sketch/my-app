import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  priority: 'critical' | 'important' | 'good-to-know';
}

const faqItems: FAQItem[] = [
  {
    question: 'Are strings 1-indexed or 0-indexed in pseudocode?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-red-600 text-lg">1-INDEXED!</strong> In Cambridge pseudocode, the first character is at position <strong>1</strong>, not 0.
          This is different from Python where strings start at 0!
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-gray-400 text-xs font-bold mb-2">POSITIONS IN PSEUDOCODE:</p>
          <div className="font-mono text-lg">
            <p className="text-green-400 mb-2">{`Text <- "HELLO"`}</p>
            <div className="flex gap-0 mb-1">
              {['H','E','L','L','O'].map((c, i) => (
                <div key={i} className="w-12 h-12 bg-indigo-800 border border-indigo-600 flex items-center justify-center text-white font-bold">{c}</div>
              ))}
            </div>
            <div className="flex gap-0">
              {[1,2,3,4,5].map(n => (
                <div key={n} className="w-12 h-6 flex items-center justify-center text-yellow-400 text-sm font-bold">{n}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
            <p className="font-bold text-green-700 mb-2">✅ Pseudocode (1-indexed)</p>
            <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap">{`MID("HELLO", 1, 1) = "H"
MID("HELLO", 3, 2) = "LL"`}</pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
            <p className="font-bold text-blue-700 mb-2">🐍 Python (0-indexed)</p>
            <pre className="font-mono text-sm text-blue-800 whitespace-pre-wrap">{`"HELLO"[0] = "H"
"HELLO"[2:4] = "LL"`}</pre>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'What is the difference between MID and SUBSTRING?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Both extract characters from a string but the <strong>parameters are different</strong>:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Function</th>
                <th className="p-3 text-left">Parameters</th>
                <th className="p-3 text-left">Example</th>
                <th className="p-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-mono font-bold text-purple-700">MID(s, start, length)</td>
                <td className="p-3">Start position + <strong>how many</strong> chars</td>
                <td className="p-3 font-mono">MID(&quot;HELLO&quot;, 2, 3)</td>
                <td className="p-3 font-mono font-bold">&quot;ELL&quot;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-mono font-bold text-blue-700">SUBSTRING(s, start, end)</td>
                <td className="p-3">Start position + <strong>end position</strong></td>
                <td className="p-3 font-mono">SUBSTRING(&quot;HELLO&quot;, 2, 4)</td>
                <td className="p-3 font-mono font-bold">&quot;ELL&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4">
          <p className="font-bold text-amber-800">💡 How to remember:</p>
          <ul className="text-amber-900 mt-2 space-y-1">
            <li>• <strong>MID</strong> = start + <strong>LENGTH</strong> (how many characters to take)</li>
            <li>• <strong>SUBSTRING</strong> = start + <strong>END position</strong> (where to stop)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800">📋 Both are on the exam insert!</p>
          <p className="text-green-900 mt-1">You don&apos;t need to memorise these — they&apos;ll be given to you. But you MUST know how to USE them correctly!</p>
        </div>
      </div>
    ),
  },
  {
    question: 'Do I use single quotes or double quotes for characters?',
    priority: 'critical',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Yes, this matters!</strong> Cambridge pseudocode uses different quotes for different types:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Quotes</th>
                <th className="p-3 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold text-purple-700">CHAR</td>
                <td className="p-3 font-bold">Single quotes <code className="text-xl">&apos; &apos;</code></td>
                <td className="p-3 font-mono">&apos;A&apos;, &apos;x&apos;, &apos;7&apos;, &apos;?&apos;</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-bold text-blue-700">STRING</td>
                <td className="p-3 font-bold">Double quotes <code className="text-xl">&quot; &quot;</code></td>
                <td className="p-3 font-mono">&quot;Hello&quot;, &quot;A&quot;, &quot;World&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="font-mono text-sm space-y-1">
            <p className="text-green-400">DECLARE Letter : CHAR</p>
            <p className="text-green-400">DECLARE Word : STRING</p>
            <p className="text-green-400">Letter &lt;- &apos;A&apos;       <span className="text-gray-500">// Single quotes for CHAR</span></p>
            <p className="text-green-400">Word &lt;- &quot;Hello&quot;    <span className="text-gray-500">// Double quotes for STRING</span></p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ ASC() uses single quotes:</p>
          <p className="text-amber-900 mt-1 font-mono">
            ASC(&apos;A&apos;) = 65 ✅ &nbsp;&nbsp; ASC(&quot;A&quot;) ❌
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Does LENGTH count spaces?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>YES!</strong> LENGTH counts <strong>every character</strong> including spaces, punctuation, and digits.
        </p>
        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <div className="font-mono text-sm space-y-2">
            <p className="text-green-400">LENGTH(&quot;Hello&quot;)       = <span className="text-yellow-400 font-bold">5</span></p>
            <p className="text-green-400">LENGTH(&quot;Hello World&quot;) = <span className="text-yellow-400 font-bold">11</span> <span className="text-gray-500">// space counts!</span></p>
            <p className="text-green-400">LENGTH(&quot;Hi there!&quot;)   = <span className="text-yellow-400 font-bold">9</span> <span className="text-gray-500">// space + ! count</span></p>
            <p className="text-green-400">LENGTH(&quot;&quot;)            = <span className="text-yellow-400 font-bold">0</span> <span className="text-gray-500">// empty string</span></p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="font-bold text-blue-800">💡 This matters for loops:</p>
          <pre className="font-mono text-sm text-blue-900 mt-2 whitespace-pre-wrap">{`FOR i <- 1 TO LENGTH(Text)
   // This correctly processes EVERY character
   // including spaces!
NEXT i`}</pre>
        </div>
      </div>
    ),
  },
  {
    question: 'What ASCII values do I need to know for the exam?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          You don&apos;t need to memorise the whole ASCII table, but know these <strong>key ranges</strong>:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">Characters</th>
                <th className="p-3 text-center">ASCII Range</th>
                <th className="p-3 text-left">Key Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">A - Z (uppercase)</td>
                <td className="p-3 text-center font-mono font-bold">65 - 90</td>
                <td className="p-3">&apos;A&apos; = 65, &apos;Z&apos; = 90</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-3 font-bold">a - z (lowercase)</td>
                <td className="p-3 text-center font-mono font-bold">97 - 122</td>
                <td className="p-3">&apos;a&apos; = 97, &apos;z&apos; = 122</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-3 font-bold">0 - 9 (digits)</td>
                <td className="p-3 text-center font-mono font-bold">48 - 57</td>
                <td className="p-3">&apos;0&apos; = 48, &apos;9&apos; = 57</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-bold">Space</td>
                <td className="p-3 text-center font-mono font-bold">32</td>
                <td className="p-3">Useful for counting words</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-3">
          <p className="font-bold text-green-800">🎯 The gap between upper and lowercase:</p>
          <p className="text-green-900 mt-1 font-mono text-center text-lg">
            &apos;a&apos; - &apos;A&apos; = 97 - 65 = <strong>32</strong>
          </p>
          <p className="text-green-900 text-center text-sm mt-1">
            To convert uppercase to lowercase: add 32. Lowercase to uppercase: subtract 32.
          </p>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">💡 Caesar Cipher uses this!</p>
          <p className="text-amber-900 mt-1">
            To shift a letter by N positions: get its ASCII value with ASC(), add N, convert back with CHR().
            This is a classic A Level exam question!
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'LEFT, RIGHT, MID — which one should I use?',
    priority: 'important',
    answer: (
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">Quick guide:</p>
        <div className="space-y-3 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-blue-800">LEFT(text, n) — Get first N characters</p>
            <p className="font-mono text-blue-900 mt-1">LEFT(&quot;HELLO&quot;, 3) = &quot;HEL&quot;</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <p className="font-bold text-purple-800">RIGHT(text, n) — Get last N characters</p>
            <p className="font-mono text-purple-900 mt-1">RIGHT(&quot;HELLO&quot;, 3) = &quot;LLO&quot;</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
            <p className="font-bold text-pink-800">MID(text, start, length) — Get from any position</p>
            <p className="font-mono text-pink-900 mt-1">MID(&quot;HELLO&quot;, 2, 3) = &quot;ELL&quot;</p>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="font-bold text-green-800">💡 Character-by-character processing:</p>
          <p className="text-green-900 mt-1">
            To get <strong>one character at a time</strong> in a loop, use:
            <code className="block mt-2 bg-white px-3 py-2 rounded font-mono">MID(Text, i, 1)</code>
            This gets 1 character at position i. This pattern appears in almost every string question!
          </p>
        </div>
      </div>
    ),
  },
  {
    question: 'Are the string functions given in the exam or do I memorise them?',
    priority: 'good-to-know',
    answer: (
      <div>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong className="text-green-600 text-lg">They are given on the exam insert!</strong> You&apos;ll get a reference sheet with all the built-in functions.
        </p>
        <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200 mb-4">
          <p className="font-bold text-green-700 text-lg mb-2">Functions on the insert:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="font-mono text-green-800">LENGTH(s)</p>
            <p className="font-mono text-green-800">UCASE(s)</p>
            <p className="font-mono text-green-800">LCASE(s)</p>
            <p className="font-mono text-green-800">LEFT(s, n)</p>
            <p className="font-mono text-green-800">RIGHT(s, n)</p>
            <p className="font-mono text-green-800">MID(s, x, n)</p>
            <p className="font-mono text-green-800">ASC(c)</p>
            <p className="font-mono text-green-800">CHR(n)</p>
            <p className="font-mono text-green-800">NUM_TO_STR(n)</p>
            <p className="font-mono text-green-800">STR_TO_NUM(s)</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <p className="font-bold text-amber-800">⚠️ BUT you still need to know HOW to use them!</p>
          <p className="text-amber-900 mt-1">
            The insert tells you the function exists, but <strong>you must know how to apply them</strong> — 
            like using MID in a loop, or using ASC/CHR for Caesar cipher. Practice is key!
          </p>
        </div>
      </div>
    ),
  },
];

export default function D5ExamFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const priorityColors = {
    'critical': { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 CRITICAL' },
    'important': { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 IMPORTANT' },
    'good-to-know': { bg: 'bg-blue-100', text: 'text-blue-700', label: '🔵 GOOD TO KNOW' },
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ – Day 5: String Manipulation</h1>
      <p className="text-gray-500 mb-3 text-lg">Common exam questions about strings, ASCII, and character processing</p>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl border border-red-200 mb-8">
        <p className="font-bold text-red-800 text-lg">🎯 The #1 Thing to Remember</p>
        <p className="text-red-900 mt-2 text-lg leading-relaxed">
          Pseudocode strings are <strong>1-indexed</strong> (first character is position 1), NOT 0-indexed like Python!
          And use <code className="bg-white px-2 py-1 rounded-lg font-bold text-purple-700">MID(Text, i, 1)</code> to get one character at a time in a loop.
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
