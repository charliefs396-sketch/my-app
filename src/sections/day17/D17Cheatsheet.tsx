import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D17Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(p => ({ ...p, [i]: !p[i] }));
  const total = 14;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">📋 Day 17 Cheatsheet</h2>
      <p className="text-gray-500 mb-6">Complete reference for identifier tables and algorithm design</p>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 Identifier Table Format</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead><tr className="bg-indigo-600 text-white"><th className="p-3 text-left">Identifier</th><th className="p-3 text-left">Data Type</th><th className="p-3 text-left">Description</th></tr></thead>
            <tbody>
              {[
                ['VarName','STRING / INTEGER / REAL / BOOLEAN / CHAR','What it stores and what values are valid'],
                ['ArrayName','ARRAY[1:N] OF TYPE','What each element stores, size N'],
                ['CONSTNAME','INTEGER (CONSTANT)','The constant value and what it represents'],
                ['i / j','INTEGER','Loop counter / array index'],
                ['Flag','BOOLEAN','TRUE if [condition], FALSE if [other condition]'],
              ].map(([id,type,desc],i) => (
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  <td className="p-3 font-mono text-indigo-700 font-semibold">{id}</td>
                  <td className="p-3 text-pink-600">{type}</td>
                  <td className="p-3 text-gray-600 italic">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🪜 Stepwise Refinement Template</h3>
        <CodeBlock language="pseudocode" code={`// Level 1 — High level (3-5 broad steps)
1. Input data
2. Process data
3. Output results

// Level 2 — Medium detail (numbered sub-steps in English)
1. Input data
   1.1 Repeat for each item:
      1.1.1 Input field 1
      1.1.2 Input field 2
      1.1.3 Validate inputs
      1.1.4 Store in arrays

2. Process data
   2.1 Calculate total
   2.2 Calculate average
   2.3 Find maximum value
   2.4 Find minimum value

3. Output results
   3.1 Display summary statistics
   3.2 Display items meeting criteria

// Level 3 — Pseudocode (write actual code for each step)`} />
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">⚡ Quick Reference Rules</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            ['Average type', 'Always REAL'],
            ['Array format', 'ARRAY[1:N] OF TYPE'],
            ['BOOLEAN description', 'TRUE if X, FALSE if Y'],
            ['Level 2 language', 'Plain English, NOT pseudocode'],
            ['Numbering', '1, 1.1, 1.1.1, 1.2, 2, 2.1'],
            ['Loop counters', 'Always in identifier table'],
            ['Constants', 'In table as INTEGER (CONSTANT)'],
            ['Validation', 'Always include REPEAT...UNTIL'],
            ['FUNCTION vs PROCEDURE', 'FUNCTION returns, PROCEDURE acts'],
            ['Modular design', 'Separate tasks into PROCEDURE/FUNCTION'],
          ].map(([rule, val], i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700">{rule}</span>
              <span className="text-indigo-600 font-mono text-xs bg-indigo-50 px-2 py-1 rounded">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">❌ Common Mistakes Table</h3>
        <div className="space-y-2 text-sm">
          {[
            ['Forgetting i, j in identifier table', 'Add ALL identifiers including loop counters'],
            ['Using INTEGER for average', 'Average must be REAL'],
            ['Writing pseudocode at Level 2', 'Level 2 = English descriptions only'],
            ['Missing array bounds', 'Write ARRAY[1:10] OF INTEGER not just ARRAY'],
            ['Vague description', 'Be specific about values, range, purpose'],
            ['Missing validation', 'Always add REPEAT...UNTIL for input checking'],
          ].map(([mistake, fix], i) => (
            <div key={i} className="grid grid-cols-2 gap-2 p-2 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-start gap-1 text-red-700"><span>✗</span><span>{mistake}</span></div>
              <div className="flex items-start gap-1 text-green-700"><span>✓</span><span>{fix}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">✅ Day 17 Confidence Checklist</h3>
          <span className="text-sm font-semibold text-indigo-600">{done}/{total} done</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
          <div className="h-2 bg-indigo-500 rounded-full transition-all" style={{ width: `${(done/total)*100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            'I know the 3 columns of an identifier table',
            'I include loop counters (i, j) in identifier tables',
            'I use REAL for averages, never INTEGER',
            'I describe BOOLEANs with what TRUE and FALSE each mean',
            'I write array bounds in full: ARRAY[1:10] OF STRING',
            'I include constants in the identifier table',
            'I understand Level 1 = broad English overview',
            'I understand Level 2 = detailed English, NOT pseudocode',
            'I use decimal numbering: 1.1, 1.1.1, 1.2',
            'I know when to use FUNCTION vs PROCEDURE',
            'I always include input validation in pseudocode',
            'I DECLARE every variable at the top of pseudocode',
            'I can write a complete algorithm from a problem description',
            'I can trace through my own algorithm to check it is correct',
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="w-4 h-4 accent-indigo-600" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
