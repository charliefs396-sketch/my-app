import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py3Cheatsheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  const checklist = [
    { id: 'c1', text: 'I know to use if (lowercase) not IF' },
    { id: 'c2', text: 'I always put a colon : after if / elif / else' },
    { id: 'c3', text: 'I indent with 4 spaces inside every block' },
    { id: 'c4', text: 'I use == for comparison, = for assignment' },
    { id: 'c5', text: 'I know elif (not else if or ELSE IF)' },
    { id: 'c6', text: 'I know only ONE branch runs in an if/elif/else chain' },
    { id: 'c7', text: 'I know and needs BOTH true, or needs AT LEAST ONE' },
    { id: 'c8', text: 'I know not flips True to False and vice versa' },
    { id: 'c9', text: 'I can use chained comparisons: 0 <= x <= 100' },
    { id: 'c10', text: 'I know there is no ENDIF in Python' },
    { id: 'c11', text: 'I can write nested IFs with correct double indentation' },
    { id: 'c12', text: 'I know else is always optional' },
  ];

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — IF Statements</h1>
      <p className="text-gray-500 mb-8">Everything on one page · Python Day 3</p>

      {/* Templates */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">🔀 Simple IF</h3>
          <CodeBlock language="python" code={`if condition:
    # runs if True

# continues here always`} />
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">🔀 IF...ELSE</h3>
          <CodeBlock language="python" code={`if condition:
    # runs if True
else:
    # runs if False`} />
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">🪜 elif chain</h3>
          <CodeBlock language="python" code={`if condition1:
    # runs if cond1 True
elif condition2:
    # runs if cond2 True
elif condition3:
    # runs if cond3 True
else:
    # runs if all False`} />
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">🪆 Nested IF</h3>
          <CodeBlock language="python" code={`if outer_condition:
    if inner_condition:
        # both true
    else:
        # outer true, inner false
else:
    # outer false`} />
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Python vs Pseudocode</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 text-left rounded-tl-lg">Feature</th>
                <th className="px-4 py-2 text-left">Pseudocode</th>
                <th className="px-4 py-2 text-left rounded-tr-lg">Python</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Start IF', ps: 'IF condition', py: 'if condition:' },
                { feature: 'Then keyword', ps: 'THEN', py: ': (colon)' },
                { feature: 'Else if', ps: 'ELSE IF (nested)', py: 'elif condition:' },
                { feature: 'Else', ps: 'ELSE', py: 'else:' },
                { feature: 'End IF', ps: 'ENDIF', py: '(indentation)' },
                { feature: 'Equal check', ps: '=', py: '==' },
                { feature: 'Not equal', ps: '<>', py: '!=' },
                { feature: 'Logical AND', ps: 'AND', py: 'and' },
                { feature: 'Logical OR', ps: 'OR', py: 'or' },
                { feature: 'Logical NOT', ps: 'NOT', py: 'not' },
                { feature: 'Block marker', ps: 'THEN / ELSE', py: 'Indentation' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-100">{row.feature}</td>
                  <td className="px-4 py-2 font-mono text-indigo-600 border-b border-gray-100">{row.ps}</td>
                  <td className="px-4 py-2 font-mono text-emerald-600 border-b border-gray-100">{row.py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🚨 Common Mistakes</h2>
        <div className="space-y-3">
          {[
            { mistake: 'Missing colon', wrong: 'if age >= 18', right: 'if age >= 18:' },
            { mistake: 'Wrong case', wrong: 'IF age >= 18:', right: 'if age >= 18:' },
            { mistake: 'Assignment in condition', wrong: 'if x = 5:', right: 'if x == 5:' },
            { mistake: 'else if instead of elif', wrong: 'else if mark >= 70:', right: 'elif mark >= 70:' },
            { mistake: 'Missing indentation', wrong: 'if x > 0:\nprint("positive")', right: 'if x > 0:\n    print("positive")' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 items-center p-3 bg-gray-50 rounded-xl">
              <span className="font-semibold text-gray-700 text-sm">{item.mistake}</span>
              <code className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-mono">{item.wrong}</code>
              <code className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-mono">{item.right}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-emerald-800">✅ Confidence Checklist</h2>
          <span className="text-emerald-600 font-bold">{done}/{checklist.length}</span>
        </div>
        <div className="w-full h-3 bg-emerald-200 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(done / checklist.length) * 100}%` }} />
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {checklist.map((item) => (
            <label key={item.id} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${checked[item.id] ? 'bg-emerald-100' : 'bg-white/70 hover:bg-white'}`}>
              <input type="checkbox" checked={!!checked[item.id]} onChange={() => toggle(item.id)} className="w-4 h-4 accent-emerald-500" />
              <span className={`text-sm font-medium ${checked[item.id] ? 'text-emerald-700 line-through' : 'text-gray-700'}`}>{item.text}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
