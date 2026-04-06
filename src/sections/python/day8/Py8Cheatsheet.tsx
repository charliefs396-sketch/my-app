
import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py8Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const total = 14;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet – Functions & Procedures
      </h1>
      <p className="text-gray-500 text-lg mb-8">Everything on one page!</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-gray-700 mb-2">🔧 Function Template</h3>
          <CodeBlock language="python" code={`def function_name(param1, param2):
    # function body
    result = param1 + param2
    return result

# Call it:
answer = function_name(3, 4)`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-700 mb-2">📢 Procedure Template</h3>
          <CodeBlock language="python" code={`def procedure_name(param1, param2):
    # procedure body
    print(f"Result: {param1 + param2}")
    # No return statement

# Call it:
procedure_name(3, 4)`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-700 mb-2">🌍 Scope Template</h3>
          <CodeBlock language="python" code={`total = 0    # Global

def add(amount):
    global total    # Needed to modify
    total += amount

def show():
    x = 10   # Local only
    print(x)`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-700 mb-2">✅ Validation Function</h3>
          <CodeBlock language="python" code={`def get_valid_int(prompt, min_v, max_v):
    while True:
        try:
            val = int(input(prompt))
            if min_v <= val <= max_v:
                return val
            print(f"Enter {min_v}-{max_v}")
        except ValueError:
            print("Numbers only!")`} />
        </div>
      </div>

      {/* Quick reference */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">⚡ Quick Reference Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="px-4 py-2 text-left">Concept</th><th className="px-4 py-2 text-left">Python</th><th className="px-4 py-2 text-left">Pseudocode</th></tr></thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Define function', 'def name(params):', 'FUNCTION name(params) RETURNS type'],
                ['Define procedure', 'def name(params):', 'PROCEDURE name(params)'],
                ['Return value', 'return value', 'RETURN value'],
                ['No return', 'omit return', 'ENDPROCEDURE'],
                ['Call function', 'result = name(args)', 'result ← name(args)'],
                ['Call procedure', 'name(args)', 'CALL name(args)'],
                ['Modify global', 'global x then x = ...', 'BYREF parameter'],
                ['Local variable', 'just assign inside def', 'DECLARE inside PROCEDURE'],
              ].map(([concept, py, pseudo]) => (
                <tr key={concept} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-semibold text-gray-700">{concept}</td>
                  <td className="px-4 py-2 font-mono text-emerald-600 text-xs">{py}</td>
                  <td className="px-4 py-2 font-mono text-indigo-600 text-xs">{pseudo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-red-900 mb-3">❌ 5 Common Mistakes</h3>
        <div className="space-y-2">
          {[
            ['Using print instead of return', 'Function returns None silently'],
            ['Forgetting return entirely', 'Function returns None'],
            ['Modifying global without "global" keyword', 'UnboundLocalError crash'],
            ['Default parameter before non-default', 'SyntaxError'],
            ['Calling function without brackets', 'Gets function object, not result'],
          ].map(([mistake, consequence]) => (
            <div key={mistake} className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5">✗</span>
              <div>
                <span className="font-semibold text-red-800 text-sm">{mistake}</span>
                <span className="text-red-600 text-sm"> → {consequence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">✅ Confidence Checklist</h3>
          <span className="text-sm font-bold text-emerald-600">{done}/{total} done</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: `${(done / total) * 100}%` }} />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'I can write a function with def and return',
            'I can write a procedure with def (no return)',
            'I know the difference between parameter and argument',
            'I can use default parameters correctly',
            'I understand local vs global variables',
            'I can use the global keyword to modify globals',
            'I know why print() is not the same as return',
            'I can write get_valid_int() from memory',
            'I can write find_max() without built-in max()',
            'I can write count_char() for strings',
            'I can build a menu-driven program with functions',
            'I know functions return None without return',
            'I can convert pseudocode functions to Python',
            'I know best practice is pass params, return results',
          ].map((item, i) => (
            <label key={i} className="flex items-start gap-2 cursor-pointer group">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="mt-0.5 accent-emerald-600" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
