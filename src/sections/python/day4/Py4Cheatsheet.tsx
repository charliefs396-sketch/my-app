import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py4Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — Loops
      </h1>
      <p className="text-gray-500 text-lg mb-8">Everything you need on one page — print this out!</p>

      {/* range() table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 range() Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-50 border-b border-emerald-200">
                <th className="text-left p-3 font-bold text-emerald-700">Python</th>
                <th className="text-left p-3 font-bold text-emerald-700">Output</th>
                <th className="text-left p-3 font-bold text-emerald-700">Pseudocode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['range(5)', '0, 1, 2, 3, 4', 'FOR i ← 0 TO 4'],
                ['range(1, 11)', '1, 2, ..., 10', 'FOR i ← 1 TO 10'],
                ['range(1, N+1)', '1, 2, ..., N', 'FOR i ← 1 TO N'],
                ['range(0, 10, 2)', '0, 2, 4, 6, 8', 'FOR i ← 0 TO 8 STEP 2'],
                ['range(10, 0, -1)', '10, 9, ..., 1', 'FOR i ← 10 TO 1 STEP -1'],
                ['range(10, -1, -1)', '10, 9, ..., 0', 'FOR i ← 10 TO 0 STEP -1'],
              ].map(([py, out, ps], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 font-mono text-purple-700 font-semibold">{py}</td>
                  <td className="p-3 text-gray-700">{out}</td>
                  <td className="p-3 font-mono text-cyan-700 text-xs">{ps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Code templates */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-bold text-gray-900 mb-3">🔢 FOR Loop Templates</h3>
          <CodeBlock language="python" code={`# Basic count
for i in range(1, n + 1):
    # body

# Accumulator
total = 0
for i in range(1, n + 1):
    total += i

# With condition
for i in range(1, n + 1):
    if i % 2 == 0:
        print(i)

# Nested loops
for row in range(1, 4):
    for col in range(1, 4):
        print(row * col)`} />
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-bold text-gray-900 mb-3">🔄 WHILE Loop Templates</h3>
          <CodeBlock language="python" code={`# Basic while
while condition:
    # body

# With counter
count = 0
while count < max_attempts:
    # body
    count += 1

# Sentinel value
num = int(input("Enter (-1 stop): "))
while num != -1:
    # process num
    num = int(input("Enter (-1 stop): "))

# REPEAT...UNTIL simulation
while True:
    value = int(input("Enter: "))
    if value > 0:
        break`} />
        </div>
      </div>

      {/* Loop comparison */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚖️ Which Loop? Decision Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-bold text-gray-700">Situation</th>
                <th className="text-left p-3 font-bold text-gray-700">Use</th>
                <th className="text-left p-3 font-bold text-gray-700">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Know exact count', 'for', '"Print 10 times", "Process 5 students"'],
                ['Unknown count, may run 0 times', 'while', '"Keep asking until correct password"'],
                ['Must run at least once', 'while True + break', '"Input validation — ask at least once"'],
                ['Sentinel value', 'while', '"Read numbers until -1 entered"'],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 text-gray-700">{row[0]}</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">{row[1]}</td>
                  <td className="p-3 text-gray-500 text-xs">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">❌ Common Mistakes</h2>
        <div className="space-y-3">
          {[
            { mistake: 'range(1, 10) to loop 1-10', fix: 'Use range(1, 11) — stop is EXCLUDED' },
            { mistake: 'total = 0 inside the loop', fix: 'Initialise accumulator BEFORE the loop' },
            { mistake: 'Forgetting count += 1 in while loop', fix: 'Always update loop variable to avoid infinite loops' },
            { mistake: 'range(10, 1, -1) to count down to 1', fix: 'Use range(10, 0, -1) — stop=0 gives 10 down to 1' },
            { mistake: 'Using for loop for unknown count', fix: 'Use while when you don\'t know how many iterations' },
            { mistake: 'Forgetting break in while True', fix: 'while True MUST have a break or it runs forever' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-red-500 text-lg flex-shrink-0">✗</span>
              <div>
                <p className="text-sm text-red-700 font-semibold">{item.mistake}</p>
                <p className="text-sm text-green-700">→ {item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-800 mb-2">✅ Confidence Checklist</h2>
        <p className="text-emerald-600 text-sm mb-4">Tick each item when you're confident:</p>
        <div className="space-y-2">
          {[
            'I know range() stops BEFORE the stop value',
            'I can write range() for: count up, count down, skip values',
            'I know when to use for vs while',
            'I can write the while True + break pattern',
            'I always initialise accumulators before loops',
            'I know what a sentinel value is and how to use it',
            'I can write a loop with max attempts (counter + condition)',
            'I know break exits the loop, continue skips one iteration',
            'I can write nested for loops',
            'I can trace through a loop and fill in a trace table',
            'I understand why while may run 0 times',
            'I can convert pseudocode loops to Python',
          ].map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${checked.has(i) ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 group-hover:border-emerald-400'}`}
                onClick={() => toggle(i)}>
                {checked.has(i) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className={`text-sm transition-colors ${checked.has(i) ? 'text-emerald-700 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 p-3 bg-white rounded-xl border border-emerald-200">
          <p className="text-sm font-bold text-emerald-700">{checked.size} of 12 completed — {Math.round((checked.size / 12) * 100)}%</p>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(checked.size / 12) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
