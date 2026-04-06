import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py16Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const count = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Day 16 Cheatsheet</h2>
      <p className="text-gray-600 mb-6">Everything you need for Insertion Sort in Python</p>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">📥 Ascending (Standard)</h3>
        <CodeBlock code={`def insertion_sort(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j] > key:
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data`} language="python" />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🔽 Descending</h3>
        <CodeBlock code={`def insertion_sort_desc(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j] < key:  # < instead of >
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key`} language="python" />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🔑 Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-4 py-2 text-left text-indigo-700">Element</th>
                <th className="px-4 py-2 text-left text-indigo-700">Value</th>
                <th className="px-4 py-2 text-left text-indigo-700">WHY</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['range start', '1', 'Index 0 is already sorted'],
                ['j condition', 'j >= 0', '0-indexed — must include index 0'],
                ['Comparison', 'data[j] > key', 'Shift bigger elements right'],
                ['Shift', 'data[j+1] = data[j]', 'Move element one right'],
                ['j decrement', 'j -= 1', 'Scan leftwards'],
                ['Insert', 'data[j+1] = key', 'j went one too far left'],
              ].map(([el, val, why], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{el}</td>
                  <td className="px-4 py-2 font-mono text-indigo-700">{val}</td>
                  <td className="px-4 py-2 text-gray-600">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Confidence Checklist</h3>
        <div className="mb-2 text-sm text-gray-600">{count}/12 completed</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 bg-indigo-500 rounded-full transition-all" style={{ width: `${(count / 12) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            'I know why range starts at 1',
            'I know why j >= 0 not j > 0',
            'I know why we save key before shifting',
            'I can trace insertion sort on paper',
            'I know why data[j+1] = key at the end',
            'I can write descending insertion sort',
            'I can sort tuples by second element',
            'I know best case is O(n)',
            'I know worst case is O(n²)',
            'I know Python lists are passed by reference',
            'I can compare insertion vs bubble sort',
            'I can write insertion sort from memory',
          ].map((item, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all ${checked[i] ? 'bg-green-50 border-green-200 text-green-800' : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-300'}`}>
              <span className="text-lg">{checked[i] ? '✅' : '⬜'}</span>
              <span className="text-sm">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
