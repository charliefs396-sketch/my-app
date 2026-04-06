import { useState } from 'react';

export default function D30Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const items = [
    'I know all 6 data types: INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE',
    'I can use DIV and MOD correctly',
    'I can write IF, nested IF, and CASE statements',
    'I can write FOR, WHILE, and REPEAT loops',
    'I can use string functions: LENGTH, MID, LEFT, RIGHT, UCASE, LCASE',
    'I can declare and use 1D and 2D arrays',
    'I can write LinearSearch and BinarySearch functions',
    'I can trace Bubble Sort and write it from memory',
    'I can trace Insertion Sort and write it from memory',
    'I know BYVAL vs BYREF and when to use each',
    'I can declare TYPE records and use dot notation',
    'I can write file handling with READ, WRITE, APPEND',
    'I can trace PUSH and POP on a stack',
    'I can trace ENQUEUE and DEQUEUE on a circular queue',
    'I can trace a linked list insertion',
    'I can complete trace tables accurately',
    'I can create identifier tables in Cambridge format',
    'I know the 3 error types: syntax, logic, runtime',
    'I know the 3 test data types: normal, abnormal, boundary',
    'I know Waterfall, Iterative, RAD models',
    'I can trace recursive functions (Factorial, Fibonacci)',
    'I can draw state-transition diagrams',
    'I know structure chart symbols and rules',
    'I have practised at least 2 past papers',
  ];

  const pct = Math.round((checked.size / items.length) * 100);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        📋 Master Cheatsheet
      </h1>
      <p className="text-gray-500 text-lg mb-6">Everything you need for Paper 2 — on one page</p>

      {/* Progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-gray-700">Exam Readiness</span>
          <span className="font-black text-orange-600">{pct}%</span>
        </div>
        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-sm text-gray-500 mt-2">{checked.size} of {items.length} topics confident</p>
      </div>

      {/* Quick Reference */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <h3 className="font-bold text-indigo-900 mb-3">⚡ Key Syntax Rules</h3>
          <ul className="space-y-1 text-sm text-indigo-800">
            <li>• Assignment: <code className="bg-indigo-100 px-1">←</code> NOT <code className="bg-indigo-100 px-1">=</code></li>
            <li>• Comparison: <code className="bg-indigo-100 px-1">=</code> (inside IF)</li>
            <li>• String concat: <code className="bg-indigo-100 px-1">&amp;</code></li>
            <li>• Integer div: <code className="bg-indigo-100 px-1">DIV</code></li>
            <li>• Remainder: <code className="bg-indigo-100 px-1">MOD</code></li>
            <li>• Every IF needs <code className="bg-indigo-100 px-1">THEN</code> and <code className="bg-indigo-100 px-1">ENDIF</code></li>
            <li>• Arrays: 1-indexed (not 0)</li>
            <li>• CALL keyword for procedures only</li>
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h3 className="font-bold text-purple-900 mb-3">🔧 Function Quick Ref</h3>
          <ul className="space-y-1 text-sm text-purple-800 font-mono">
            <li>LENGTH(str)</li>
            <li>MID(str, start, length)</li>
            <li>LEFT(str, n) / RIGHT(str, n)</li>
            <li>UCASE(str) / LCASE(str)</li>
            <li>ASC(char) / CHR(code)</li>
            <li>NUM_TO_STR(n) / STR_TO_NUM(s)</li>
          </ul>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✅ Final Confidence Checklist</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`w-full text-left p-3 rounded-lg border transition-all flex items-center gap-3 text-sm ${checked.has(i) ? 'bg-green-50 border-green-300 text-green-800' : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-300'}`}>
              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-xs ${checked.has(i) ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400'}`}>
                {checked.has(i) ? '✓' : ''}
              </span>
              {item}
            </button>
          ))}
        </div>
      </div>

      {pct === 100 && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 text-center text-white">
          <p className="text-5xl mb-3">🏆</p>
          <h2 className="text-3xl font-black mb-2">YOU ARE EXAM READY!</h2>
          <p className="text-lg opacity-90">You've completed all 30 days. Go get that A*! 🎉</p>
        </div>
      )}
    </div>
  );
}
