import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py6Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(p => ({ ...p, [i]: !p[i] }));
  const total = 14;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Lists</h1>
      <p className="text-gray-500 mb-6">Complete Python list reference</p>

      {/* Creating Lists */}
      <div className="card mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3">📦 Creating Lists</h2>
        <CodeBlock language="python" code={`empty = []                    # Empty list
numbers = [5, 3, 8, 1, 9]    # List with values
zeros = [0] * 10              # 10 zeros
names = [""] * 5              # 5 empty strings

# Build with input
items = []
for i in range(n):
    items.append(input("Enter: "))

# Fixed size with input
items = [0] * n
for i in range(n):
    items[i] = int(input("Enter: "))`} />
      </div>

      {/* Access & Modify */}
      <div className="card mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3">🔍 Access & Modify</h2>
        <CodeBlock language="python" code={`lst = [10, 20, 30, 40, 50]

lst[0]          # 10 (first)
lst[-1]         # 50 (last)
lst[len(lst)-1] # 50 (last - alternative)
lst[1:3]        # [20, 30] (slicing)

lst[2] = 99     # Change element
len(lst)        # 5`} />
      </div>

      {/* Methods */}
      <div className="card mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3">🔧 Methods Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 font-bold border-b">Method</th>
                <th className="text-left p-2 font-bold border-b">Example</th>
                <th className="text-left p-2 font-bold border-b">Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['append(x)', "lst.append(99)", 'Adds 99 to end'],
                ['insert(i, x)', "lst.insert(0, 99)", 'Adds 99 at index 0'],
                ['remove(x)', "lst.remove(20)", 'Removes first 20'],
                ['pop(i)', "lst.pop(0)", 'Removes & returns index 0'],
                ['pop()', "lst.pop()", 'Removes & returns last'],
                ['sort()', "lst.sort()", 'Sorts ascending'],
                ['sort(reverse=True)', "lst.sort(reverse=True)", 'Sorts descending'],
                ['reverse()', "lst.reverse()", 'Reverses list'],
                ['count(x)', "lst.count(3)", 'Count occurrences of 3'],
                ['index(x)', "lst.index(30)", 'Position of 30'],
                ['copy()', "copy = lst.copy()", 'Makes real copy'],
                ['clear()', "lst.clear()", 'Removes all elements'],
              ].map(([method, example, result]) => (
                <tr key={method} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-mono text-emerald-700 font-bold text-xs">{method}</td>
                  <td className="p-2 font-mono text-xs text-gray-700">{example}</td>
                  <td className="p-2 text-xs text-gray-600">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Patterns */}
      <div className="card mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3">📊 Key Exam Patterns</h2>
        <CodeBlock language="python" code={`# Total and average
total = 0
for x in lst: total += x
average = total / len(lst)

# Max WITHOUT max()
maximum = lst[0]
for x in lst:
    if x > maximum: maximum = x

# Min WITHOUT min()
minimum = lst[0]
for x in lst:
    if x < minimum: minimum = x

# Count above average
count = 0
for x in lst:
    if x > average: count += 1

# Remove all occurrences
new_lst = []
for x in lst:
    if x != target: new_lst.append(x)

# Search (linear)
found = False
for i in range(len(lst)):
    if lst[i] == target:
        found = True
        break

# Parallel lists
for i in range(len(names)):
    print(f"{names[i]}: {marks[i]}")`} />
      </div>

      {/* Common Mistakes */}
      <div className="card mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3">❌ Common Mistakes</h2>
        <div className="space-y-3">
          {[
            ['list[1] is first element', 'list[0] is first element in Python!'],
            ['max_val = 0', 'max_val = list[0] — what if all negatives?'],
            ['copy = original', 'copy = original.copy() — not a real copy!'],
            ['remove while looping forward', 'Build new list or loop backwards'],
            ['list2 = list1 + item', 'list1.append(item) — + creates new list'],
          ].map(([wrong, right]) => (
            <div key={wrong} className="grid grid-cols-2 gap-2">
              <div className="bg-red-50 border border-red-200 rounded p-2 text-xs">
                <span className="text-red-600 font-bold">❌ </span>
                <span className="text-red-700">{wrong}</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-2 text-xs">
                <span className="text-green-600 font-bold">✅ </span>
                <span className="text-green-700">{right}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">✅ Confidence Checklist</h2>
          <span className={`text-sm font-bold px-3 py-1 rounded-full ${done === total ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
            {done}/{total} {done === total ? '🎉' : ''}
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all" style={{ width: `${(done/total)*100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            'I know Python lists are 0-indexed (first = index 0)',
            'I can create a list with [] and [0]*n',
            'I can access first (lst[0]) and last (lst[-1]) elements',
            'I can add items with append() and insert()',
            'I know difference between remove() and pop()',
            'I can loop with "for x in list" and "for i in range(len(list))"',
            'I can use enumerate() for both index and value',
            'I can find max/min WITHOUT using max()/min()',
            'I can calculate average without sum()',
            'I know the TWO PASS approach for count above average',
            'I can remove all occurrences by building a new list',
            'I know list2 = list1 is NOT a copy',
            'I can use .copy() to make a real copy',
            'I can use parallel lists (two lists with same index)',
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="w-4 h-4 accent-emerald-600" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        {done === total && (
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-emerald-700">Day 6 Complete! You know Python Lists!</p>
          </div>
        )}
      </div>
    </div>
  );
}
