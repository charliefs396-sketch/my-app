import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py9Cheatsheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const total = 12;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — Linear Search in Python
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-3">🔍 Basic Linear Search</h3>
          <CodeBlock code={`def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return i
    return -1`} language="python" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-3">🔢 Count Occurrences</h3>
          <CodeBlock code={`def count_occurrences(data, target):
    count = 0
    for i in range(len(data)):
        if data[i] == target:
            count += 1
    return count`} language="python" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-3">📍 Find All Positions</h3>
          <CodeBlock code={`def find_all(data, target):
    positions = []
    for i in range(len(data)):
        if data[i] == target:
            positions.append(i)
    return positions`} language="python" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-3">🔠 Case-Insensitive Search</h3>
          <CodeBlock code={`def search_ignore_case(data, target):
    for i in range(len(data)):
        if data[i].lower() == target.lower():
            return i
    return -1`} language="python" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Version</th>
                <th className="border p-3 text-left">Returns</th>
                <th className="border p-3 text-left">Use When</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-mono">linear_search()</td><td className="border p-3">int (index or -1)</td><td className="border p-3">Find WHERE something is</td></tr>
              <tr className="bg-gray-50"><td className="border p-3 font-mono">count_occurrences()</td><td className="border p-3">int (count)</td><td className="border p-3">Find HOW MANY times</td></tr>
              <tr><td className="border p-3 font-mono">find_all()</td><td className="border p-3">list of ints</td><td className="border p-3">Find ALL positions</td></tr>
              <tr className="bg-gray-50"><td className="border p-3 font-mono">search_ignore_case()</td><td className="border p-3">int (index or -1)</td><td className="border p-3">Case doesn't matter</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4">❌ Common Mistakes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-50">
                <th className="border p-3 text-left">❌ Wrong</th>
                <th className="border p-3 text-left">✅ Correct</th>
                <th className="border p-3 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-mono text-red-600">if data[i] = target</td><td className="border p-3 font-mono text-green-600">if data[i] == target</td><td className="border p-3">= is assignment, == is comparison</td></tr>
              <tr className="bg-gray-50"><td className="border p-3 font-mono text-red-600">return -1 inside loop</td><td className="border p-3 font-mono text-green-600">return -1 after loop</td><td className="border p-3">Must check ALL elements first</td></tr>
              <tr><td className="border p-3 font-mono text-red-600">return 0 for not found</td><td className="border p-3 font-mono text-green-600">return -1 for not found</td><td className="border p-3">0 is a valid index!</td></tr>
              <tr className="bg-gray-50"><td className="border p-3 font-mono text-red-600">for x in data (need index)</td><td className="border p-3 font-mono text-green-600">for i in range(len(data))</td><td className="border p-3">Need index to return position</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-emerald-800">✅ Confidence Checklist</h3>
          <span className="text-emerald-600 font-bold">{done}/{total}</span>
        </div>
        <div className="w-full bg-emerald-100 rounded-full h-3 mb-4">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(done/total)*100}%` }} />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            "I can write a basic linear search function",
            "I know why we return -1 for not found",
            "I use == not = for comparison",
            "I know why range(len(data)) is needed",
            "I put return -1 AFTER the loop",
            "I can trace through a linear search",
            "I can count all occurrences",
            "I can find all positions (return a list)",
            "I can do case-insensitive search",
            "I know linear search works on unsorted data",
            "I can explain best/worst/average case",
            "I can compare Python vs pseudocode linear search"
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors">
              <input type="checkbox" checked={checked[`c${i}`] || false} onChange={() => toggle(`c${i}`)} className="w-4 h-4 text-emerald-600 rounded" />
              <span className={`text-sm ${checked[`c${i}`] ? 'text-emerald-700 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}