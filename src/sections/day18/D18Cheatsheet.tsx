import { useState } from 'react';

export default function D18Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; });

  const checklist = [
    "I know all 5 flowchart symbols (rounded rect, parallelogram, rectangle, diamond, arrow)",
    "I know parallelogram = BOTH input AND output",
    "I know rectangle = processing/assignment only",
    "I know diamond = condition with exactly YES and NO exits",
    "I can draw a FOR loop as a flowchart",
    "I can draw a WHILE loop as a flowchart (diamond first)",
    "I can draw a REPEAT loop as a flowchart (process first, diamond after)",
    "I know filled circle (●) = data parameter",
    "I know empty circle (○) = flag/boolean parameter",
    "I know arrow DOWN = parameter passed TO module",
    "I know arrow UP = parameter returned FROM module",
    "I can draw a structure chart with correct arrows and circles",
    "I can convert pseudocode to a flowchart",
    "I can convert a flowchart to pseudocode",
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">📋 Day 18 Cheatsheet</h2>

      {/* Flowchart Symbols */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">🔷 Flowchart Symbols — Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-blue-50"><th className="p-3 border border-blue-200 text-blue-800 text-left">Shape</th><th className="p-3 border border-blue-200 text-blue-800 text-left">Name</th><th className="p-3 border border-blue-200 text-blue-800 text-left">Used For</th></tr></thead>
            <tbody>
              {[
                ['( )', 'Rounded Rectangle (Terminal)', 'START and STOP only'],
                ['/ /', 'Parallelogram', 'INPUT and OUTPUT'],
                ['[ ]', 'Rectangle', 'Assignment, calculation, CALL'],
                ['◇', 'Diamond', 'Conditions — exactly 2 exits (YES/NO)'],
                ['→', 'Arrow', 'Flow direction between shapes'],
              ].map(([shape, name, use], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-mono text-purple-600 border border-gray-200 text-lg">{shape}</td>
                  <td className="p-3 font-semibold text-gray-700 border border-gray-200">{name}</td>
                  <td className="p-3 text-gray-600 border border-gray-200">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Structure Chart Symbols */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">🏗️ Structure Chart Arrows — Quick Reference</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            { symbol: '⬇️●', meaning: 'Data passed TO module (input)', color: 'bg-green-50 border-green-200 text-green-800' },
            { symbol: '⬆️●', meaning: 'Data returned FROM module (output)', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { symbol: '⬇️○', meaning: 'Flag/boolean passed TO module', color: 'bg-amber-50 border-amber-200 text-amber-800' },
            { symbol: '⬆️○', meaning: 'Flag/boolean returned FROM module', color: 'bg-purple-50 border-purple-200 text-purple-800' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${item.color}`}>
              <span className="text-2xl">{item.symbol}</span>
              <span className="font-medium">{item.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Loop patterns */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">🔄 Loop Flowchart Patterns</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <p className="font-bold text-blue-800 mb-2">FOR Loop</p>
            <p className="text-blue-700 text-xs">Counter init → Diamond (counter ≤ end?) → YES: process + increment → back to diamond → NO: exit</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
            <p className="font-bold text-purple-800 mb-2">WHILE Loop</p>
            <p className="text-purple-700 text-xs">Diamond FIRST → YES: process → back to diamond → NO: exit. Can run 0 times!</p>
          </div>
          <div className="bg-rose-50 rounded-lg p-3 border border-rose-200">
            <p className="font-bold text-rose-800 mb-2">REPEAT Loop</p>
            <p className="text-rose-700 text-xs">Process FIRST → Diamond after → NO: back to process → YES: exit. Runs at least once!</p>
          </div>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="font-bold text-red-800 mb-3">⚠️ Common Exam Mistakes</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-red-700">
          {[
            "Using rectangle for INPUT/OUTPUT instead of parallelogram",
            "Forgetting to label YES and NO on diamonds",
            "Diamond with 3 exits (always exactly 2!)",
            "Using filled circle when it should be empty (boolean)",
            "Missing START or STOP",
            "Arrows without direction markers",
            "WHILE loop with process BEFORE diamond",
            "REPEAT loop with diamond BEFORE process",
          ].map((m, i) => <p key={i}>❌ {m}</p>)}
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">✅ Confidence Checklist</h3>
        <p className="text-sm text-gray-500 mb-3">{checked.size}/{checklist.length} completed</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 bg-pink-500 rounded-full transition-all" style={{ width: `${(checked.size / checklist.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <button key={i} onClick={() => toggle(i)} className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-all ${checked.has(i) ? 'bg-pink-50 border-pink-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
              <span className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${checked.has(i) ? 'bg-pink-500 border-pink-500 text-white' : 'border-gray-300'}`}>
                {checked.has(i) && '✓'}
              </span>
              <span className={`text-sm ${checked.has(i) ? 'text-pink-700 line-through' : 'text-gray-700'}`}>{item}</span>
            </button>
          ))}
        </div>
        {checked.size === checklist.length && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-green-800">Day 18 Complete! Ready for Paper 2 diagrams!</p>
          </div>
        )}
      </div>
    </div>
  );
}
