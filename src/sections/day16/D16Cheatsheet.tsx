import { useState } from 'react';

export default function D16Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const items = ['I know to create one column per variable + OUTPUT','I only write in a cell when the variable changes','I show condition evaluation (TRUE/FALSE) as a column','I correctly trace FOR loops showing each iteration','I correctly trace WHILE loops (check before body)','I correctly trace REPEAT loops (check after body)','I can trace code with DIV and MOD operations','I can trace array accesses like Nums[i]','I write OUTPUT values exactly as they would appear','I know to cross out mistakes neatly in exams'];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Day 16 Cheatsheet — Trace Tables</h1>
      <p className="text-gray-500 mb-6">Golden rules for full marks</p>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">📐 Trace Table Format</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-2 border border-indigo-700">Variable 1</th>
                <th className="p-2 border border-indigo-700">Variable 2</th>
                <th className="p-2 border border-indigo-700">Variable 3</th>
                <th className="p-2 border border-indigo-700">Condition?</th>
                <th className="p-2 border border-indigo-700">OUTPUT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white"><td className="p-2 border border-gray-200 text-center">init value</td><td className="p-2 border border-gray-200 text-center">init value</td><td className="p-2 border border-gray-200 text-center">init value</td><td className="p-2 border border-gray-200 text-center">—</td><td className="p-2 border border-gray-200"></td></tr>
              <tr className="bg-gray-50"><td className="p-2 border border-gray-200"></td><td className="p-2 border border-gray-200 text-center">new value</td><td className="p-2 border border-gray-200"></td><td className="p-2 border border-gray-200 text-center text-green-600">TRUE</td><td className="p-2 border border-gray-200"></td></tr>
              <tr className="bg-white"><td className="p-2 border border-gray-200 text-center">new value</td><td className="p-2 border border-gray-200"></td><td className="p-2 border border-gray-200"></td><td className="p-2 border border-gray-200 text-center text-red-600">FALSE</td><td className="p-2 border border-gray-200 text-center font-bold text-green-700">value</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { title: 'FOR Loop', rules: ['Counter in own column', 'Write counter at START of each iteration', 'NEXT increments at end', 'Check TO condition before each iteration'] },
          { title: 'WHILE Loop', rules: ['Check condition BEFORE body', 'If FALSE at start → skip entirely', 'Check condition again after each iteration', 'When FALSE → exit loop, go to next line'] },
          { title: 'REPEAT Loop', rules: ['Always executes ONCE', 'Check UNTIL condition AFTER body', 'If FALSE → repeat', 'When TRUE → exit loop'] },
        ].map((card, i) => (
          <div key={i} className="card">
            <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
            <ul className="space-y-1">
              {card.rules.map((rule, j) => (
                <li key={j} className="text-xs text-gray-600 flex gap-2"><span className="text-indigo-500">•</span>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">✅ Confidence Checklist</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${checked[i] ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
              <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked(p => ({ ...p, [i]: !p[i] }))} className="w-4 h-4 accent-green-500" />
              <span className={`text-sm ${checked[i] ? 'text-green-800 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-3 text-sm font-semibold text-gray-600">{Object.values(checked).filter(Boolean).length}/{items.length} completed</div>
      </div>
    </div>
  );
}
