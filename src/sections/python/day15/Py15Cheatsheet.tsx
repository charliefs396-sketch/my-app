import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py15Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));

  const template = `def binary_search(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Usage
result = binary_search(data, target)
if result != -1:
    print(f"Found at index {result}")
else:
    print("Not found")`;

  const checklist = [
    "Data MUST be sorted before binary search",
    "Python: low = 0, high = len(data) - 1",
    "Pseudocode: Low = 1, High = Size",
    "mid = (low + high) // 2 (use // not /)",
    "Found: return mid (the index)",
    "Target in right half: low = mid + 1",
    "Target in left half: high = mid - 1",
    "Not found: return -1 (when low > high)",
    "Check result: if result != -1",
    "Works on strings (alphabetical comparison)",
    "O(log n) — much faster than linear O(n)",
    "1,000,000 items = max 20 comparisons",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — Binary Search
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">⚡ Complete Template</h2>
        <CodeBlock code={template} language="python" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h3 className="font-bold text-gray-800 mb-3">📊 Quick Reference</h3>
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-cyan-50"><th className="border p-2">Variable</th><th className="border p-2">Initial Value</th><th className="border p-2">Meaning</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 font-mono">low</td><td className="border p-2">0</td><td className="border p-2">Start of search range</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono">high</td><td className="border p-2">len(data)-1</td><td className="border p-2">End of search range</td></tr>
              <tr><td className="border p-2 font-mono">mid</td><td className="border p-2">(low+high)//2</td><td className="border p-2">Middle index</td></tr>
              <tr className="bg-gray-50"><td className="border p-2 font-mono">return</td><td className="border p-2">mid or -1</td><td className="border p-2">Found index or -1</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h3 className="font-bold text-gray-800 mb-3">⚡ Efficiency</h3>
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-cyan-50"><th className="border p-2">Items</th><th className="border p-2">Linear</th><th className="border p-2">Binary</th></tr></thead>
            <tbody>
              <tr><td className="border p-2">10</td><td className="border p-2 text-red-600">10</td><td className="border p-2 text-green-600">4</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">100</td><td className="border p-2 text-red-600">100</td><td className="border p-2 text-green-600">7</td></tr>
              <tr><td className="border p-2">1,000</td><td className="border p-2 text-red-600">1,000</td><td className="border p-2 text-green-600">10</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">1,000,000</td><td className="border p-2 text-red-600">1,000,000</td><td className="border p-2 text-green-600">20</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-3">☑️ Confidence Checklist</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {checklist.map((item, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all text-sm ${checked[i] ? 'bg-green-50 border-green-300 text-green-800' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-cyan-50'}`}>
              <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 ${checked[i] ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {checked[i] ? '✓' : ''}
              </span>
              {item}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          {Object.values(checked).filter(Boolean).length} / {checklist.length} completed
        </p>
      </div>
    </div>
  );
}
