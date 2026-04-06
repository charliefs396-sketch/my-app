import { useState } from 'react';

export default function D20Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const count = Object.values(checked).filter(Boolean).length;

  const checklist = [
    "I know the 5 stages of Waterfall in order",
    "I know Waterfall is good for fixed, well-defined requirements",
    "I know Waterfall is bad for changing requirements",
    "I know Iterative uses repeating cycles of prototyping",
    "I know Iterative can be 'never-ending' due to scope creep",
    "I know RAD uses timeboxing and fast prototyping",
    "I know RAD needs constant user involvement",
    "I know RAD may lack documentation",
    "I can compare all 3 models in a table",
    "I know Corrective maintenance = fixing bugs",
    "I know Adaptive maintenance = new environment (law/OS/hardware)",
    "I know Perfective maintenance = improvements and new features",
    "I remember the CAP memory trick",
    "I can classify maintenance type from a scenario",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — Day 20
      </h1>
      <p className="text-gray-500 text-lg mb-8">Everything on one page — perfect for last-minute revision!</p>

      {/* Waterfall stages */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-blue-700 mb-4">💧 Waterfall Model — 5 Stages</h2>
        <div className="flex flex-wrap gap-2 items-center justify-center mb-4">
          {['1. Analysis', '2. Design', '3. Coding', '4. Testing', '5. Maintenance'].map((s, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-blue-100 border-2 border-blue-400 rounded-lg px-4 py-2 font-bold text-blue-800 text-sm text-center">{s}</div>
              {i < arr.length - 1 && <span className="text-blue-400 font-bold text-xl">→</span>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs font-bold text-green-700 mb-1">✅ Good for:</p>
            <p className="text-xs text-green-600">Fixed, well-defined requirements. Small projects. Needs documentation.</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3">
            <p className="text-xs font-bold text-red-700 mb-1">❌ Bad for:</p>
            <p className="text-xs text-red-600">Changing requirements. Complex projects. When errors found late.</p>
          </div>
        </div>
      </div>

      {/* All 3 models comparison */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm overflow-x-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 3 Models Comparison</h2>
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2 font-bold">Feature</th>
              <th className="text-left p-2 font-bold text-blue-700">💧 Waterfall</th>
              <th className="text-left p-2 font-bold text-green-700">🔁 Iterative</th>
              <th className="text-left p-2 font-bold text-purple-700">⚡ RAD</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Type', 'Linear/Sequential', 'Repeating cycles', 'Fast prototyping'],
              ['Requirements', 'Fixed upfront', 'Can change', 'Flexible, evolving'],
              ['User involvement', 'Start & end only', 'Each iteration', 'Constant'],
              ['Documentation', 'Thorough', 'Less formal', 'Minimal'],
              ['Best for', 'Fixed requirements', 'Complex projects', 'Tight deadlines'],
              ['Worst for', 'Changing requirements', 'Fixed budgets', 'Large systems'],
            ].map(([f, w, it, rad], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 font-semibold text-gray-700">{f}</td>
                <td className="p-2 text-blue-700">{w}</td>
                <td className="p-2 text-green-700">{it}</td>
                <td className="p-2 text-purple-700">{rad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Maintenance types */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🔧 Maintenance Types — CAP</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-bold">Type</th>
                <th className="text-left p-3 font-bold">What it is</th>
                <th className="text-left p-3 font-bold">Example</th>
                <th className="text-left p-3 font-bold">Key word</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="p-3 font-bold text-red-700">🐛 Corrective</td>
                <td className="p-3">Fixing bugs</td>
                <td className="p-3 italic text-gray-600">Fix crash when entering invalid date</td>
                <td className="p-3 font-bold text-red-600">bug/crash/error</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 font-bold text-blue-700">🌍 Adaptive</td>
                <td className="p-3">New environment</td>
                <td className="p-3 italic text-gray-600">Update for new OS version</td>
                <td className="p-3 font-bold text-blue-600">law/OS/hardware</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 font-bold text-green-700">🚀 Perfective</td>
                <td className="p-3">Improve performance</td>
                <td className="p-3 italic text-gray-600">Make search faster</td>
                <td className="p-3 font-bold text-green-600">faster/better/new feature</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">✅ Day 20 Confidence Checklist</h2>
          <span className={`text-sm font-bold px-3 py-1 rounded-full ${count === checklist.length ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
            {count}/{checklist.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${(count / checklist.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <label key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${checked[i] ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="w-5 h-5 accent-indigo-600" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        {count === checklist.length && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-700 font-bold">🎉 Day 20 Complete! Ready for Day 21!</p>
          </div>
        )}
      </div>
    </div>
  );
}
