import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py10Cheatsheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const total = 14;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        📋 Day 10 Cheatsheet
      </h1>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🫧 Bubble Sort Template</h2>
        <CodeBlock code={`def bubble_sort(data):
    n = len(data)
    for i in range(n - 1):          # n-1 passes
        swapped = False
        for j in range(n - 1 - i):  # skip sorted end
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
                swapped = True
        if not swapped:
            break
    return data`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔽 Descending Template</h2>
        <CodeBlock code={`# Change > to < (ONE character!)
if data[j] < data[j + 1]:
    data[j], data[j + 1] = data[j + 1], data[j]`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Sort Tuples Template</h2>
        <CodeBlock code={`# Sort by second element (index 1)
if students[j][1] > students[j + 1][1]:
    students[j], students[j + 1] = students[j + 1], students[j]`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">What</th>
                <th className="p-3 text-left">Code</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-medium">Swap two values</td><td className="p-3 font-mono">a, b = b, a</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Outer loop</td><td className="p-3 font-mono">for i in range(n - 1)</td></tr>
              <tr><td className="p-3 font-medium">Inner loop</td><td className="p-3 font-mono">for j in range(n - 1 - i)</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Compare adjacent</td><td className="p-3 font-mono">if data[j] &gt; data[j+1]</td></tr>
              <tr><td className="p-3 font-medium">Early exit</td><td className="p-3 font-mono">if not swapped: break</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Built-in sort</td><td className="p-3 font-mono">list.sort() or sorted(list)</td></tr>
              <tr><td className="p-3 font-medium">Descending built-in</td><td className="p-3 font-mono">list.sort(reverse=True)</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-medium">Sort by key</td><td className="p-3 font-mono">list.sort(key=lambda x: x[1])</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">❌ Common Mistakes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-50">
                <th className="p-3 text-left text-red-800">❌ Wrong</th>
                <th className="p-3 text-left text-green-800">✅ Correct</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3 font-mono text-red-600">range(n)</td><td className="p-3 font-mono text-green-600">range(n - 1)</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono text-red-600">range(n - 1)</td><td className="p-3 font-mono text-green-600">range(n - 1 - i)</td></tr>
              <tr><td className="p-3 font-mono text-red-600">swapped = False before outer</td><td className="p-3 font-mono text-green-600">swapped = False inside outer</td></tr>
              <tr className="bg-gray-50"><td className="p-3 font-mono text-red-600">if swapped: break</td><td className="p-3 font-mono text-green-600">if not swapped: break</td></tr>
              <tr><td className="p-3 font-mono text-red-600">data[j] = data[j+1]</td><td className="p-3 font-mono text-green-600">data[j], data[j+1] = data[j+1], data[j]</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ✅ Confidence Checklist ({done}/{total})
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(done/total)*100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            "I can write a bubble sort function from memory",
            "I understand why outer loop is range(n-1)",
            "I understand why inner loop is range(n-1-i)",
            "I can use Python swap: a, b = b, a",
            "I know what the swapped flag does",
            "I can trace bubble sort on paper",
            "I can sort in descending order",
            "I can sort tuples by a specific element",
            "I can sort parallel lists together",
            "I know when to use .sort() vs sorted()",
            "I can explain Bubble Sort vs Insertion Sort",
            "I understand best case O(n) with swapped flag",
            "I know bubble sort works on strings too",
            "I can write a complete sorting system with menu",
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" checked={checked[`c${i}`] || false} onChange={() => toggle(`c${i}`)} className="w-5 h-5 rounded border-gray-300 text-emerald-600" />
              <span className={`text-sm ${checked[`c${i}`] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        {done === total && (
          <div className="mt-4 p-4 bg-emerald-100 rounded-xl text-center">
            <p className="text-2xl">🎉</p>
            <p className="font-bold text-emerald-800">Day 10 Complete! You've mastered Bubble Sort in Python!</p>
          </div>
        )}
      </div>
    </div>
  );
}