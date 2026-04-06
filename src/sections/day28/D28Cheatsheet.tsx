import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D28Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const checklist = [
    "I know what a base case is and why it's essential",
    "I know what a recursive case is",
    "I can trace Factorial(4) completely with winding down and up",
    "I can trace Factorial(5) = 120",
    "I can trace Factorial(6) = 720",
    "I understand the call stack and stack frames",
    "I know what stack overflow means and what causes it",
    "I can write a recursive SumTo(N) function",
    "I can write a recursive Power(Base, Exp) function",
    "I know the difference between recursive FUNCTION and PROCEDURE",
    "I know FUNCTION uses RETURN value, PROCEDURE uses CALL",
    "I can explain recursion vs iteration advantages/disadvantages",
    "I know Fibonacci makes exponentially many calls (inefficient)",
    "I can answer 'how many recursive calls does Factorial(N) make?' = N-1",
  ];

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Day 28 Cheatsheet — Recursion</h2>
      <p className="text-gray-500 mb-6">Everything you need for the exam on one page.</p>

      {/* Templates */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-gray-800 mb-2">🔄 Recursive FUNCTION Template</h3>
          <CodeBlock language="pseudocode" code={`FUNCTION FuncName(N : INTEGER) RETURNS INTEGER
   IF <base case condition>
      THEN
         RETURN <base value>
      ELSE
         RETURN <expression> FuncName(N - 1)
   ENDIF
ENDFUNCTION`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-2">🔄 Recursive PROCEDURE Template</h3>
          <CodeBlock language="pseudocode" code={`PROCEDURE ProcName(N : INTEGER)
   IF <base case condition>
      THEN
         OUTPUT <base action>
      ELSE
         <do something>
         CALL ProcName(N - 1)
   ENDIF
ENDPROCEDURE`} />
        </div>
      </div>

      {/* Key functions */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 Key Recursive Functions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-violet-100">
                <th className="border border-violet-200 px-3 py-2">Function</th>
                <th className="border border-violet-200 px-3 py-2">Base Case</th>
                <th className="border border-violet-200 px-3 py-2">Recursive Case</th>
                <th className="border border-violet-200 px-3 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                { func: 'Factorial(N)', base: 'N <= 1 → RETURN 1', rec: 'RETURN N * Factorial(N-1)', ex: 'Factorial(4) = 24' },
                { func: 'SumTo(N)', base: 'N <= 1 → RETURN 1', rec: 'RETURN N + SumTo(N-1)', ex: 'SumTo(4) = 10' },
                { func: 'Power(B, E)', base: 'E = 0 → RETURN 1', rec: 'RETURN B * Power(B, E-1)', ex: 'Power(2,4) = 16' },
                { func: 'Fibonacci(N)', base: 'N <= 1 → RETURN N', rec: 'RETURN Fib(N-1) + Fib(N-2)', ex: 'Fibonacci(5) = 5' },
                { func: 'Countdown(N)', base: 'N <= 0 → OUTPUT "Go!"', rec: 'OUTPUT N; CALL Countdown(N-1)', ex: 'Countdown(3): 3,2,1,Go!' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-xs font-bold text-violet-600">{row.func}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-xs text-green-700">{row.base}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-xs text-blue-700">{row.rec}</td>
                  <td className="border border-gray-200 px-3 py-2 text-xs">{row.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Factorial values */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🔢 Factorial Values to Memorise</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { n: '0!', val: '1' }, { n: '1!', val: '1' }, { n: '2!', val: '2' },
            { n: '3!', val: '6' }, { n: '4!', val: '24' }, { n: '5!', val: '120' },
            { n: '6!', val: '720' }, { n: '7!', val: '5040' }, { n: '8!', val: '40320' },
          ].map((f, i) => (
            <div key={i} className="bg-violet-50 border border-violet-200 rounded-lg p-3 text-center">
              <p className="font-mono font-bold text-violet-700">{f.n}</p>
              <p className="text-xl font-black text-gray-800">{f.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick reference */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3">⚔️ Recursion vs Iteration</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-2 py-1">Aspect</th>
                  <th className="border border-gray-200 px-2 py-1">Recursion</th>
                  <th className="border border-gray-200 px-2 py-1">Iteration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: 'Memory', rec: 'More (call stack)', iter: 'Less' },
                  { aspect: 'Speed', rec: 'Slower', iter: 'Faster' },
                  { aspect: 'Code length', rec: 'Shorter', iter: 'Longer' },
                  { aspect: 'Readability', rec: 'Elegant', iter: 'More obvious' },
                  { aspect: 'Risk', rec: 'Stack overflow', iter: 'Infinite loop' },
                  { aspect: 'Best for', rec: 'Trees, factorial', iter: 'Simple loops' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 px-2 py-1 font-bold">{row.aspect}</td>
                    <td className="border border-gray-200 px-2 py-1 text-purple-700">{row.rec}</td>
                    <td className="border border-gray-200 px-2 py-1 text-blue-700">{row.iter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-bold text-red-800 mb-3">⚠️ Common Mistakes</h3>
          <div className="space-y-2">
            {[
              ['Forgetting the base case', 'Always check N <= 1 or N = 0'],
              ['Using CALL for a FUNCTION', 'Functions: use return value. Procedures: use CALL'],
              ['Not reducing N each call', 'Must use N-1 or N-2 to progress toward base case'],
              ['Wrong base condition', 'Use <= 1 not = 1 for Factorial'],
              ['No ENDIF', 'Every IF needs ENDIF in Cambridge pseudocode'],
            ].map(([wrong, fix], i) => (
              <div key={i} className="bg-white rounded-lg p-2 border border-red-100 text-xs">
                <p className="text-red-700 font-bold">❌ {wrong}</p>
                <p className="text-green-700">✅ {fix}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trace table template */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-3">📋 Trace Table Template for Recursion</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-violet-100">
                <th className="border border-violet-200 px-3 py-2">Call #</th>
                <th className="border border-violet-200 px-3 py-2">Function Call</th>
                <th className="border border-violet-200 px-3 py-2">N value</th>
                <th className="border border-violet-200 px-3 py-2">Base case?</th>
                <th className="border border-violet-200 px-3 py-2">Action</th>
                <th className="border border-violet-200 px-3 py-2">Returns</th>
              </tr>
            </thead>
            <tbody>
              {['1', '2', '3 (base)', '2↑', '1↑'].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold text-violet-600">{row}</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-400 text-xs">Fill in...</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-400 text-xs">N = ?</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-400 text-xs">Yes/No</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-400 text-xs">What happens?</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-400 text-xs">Value?</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">✅ Confidence Checklist</h3>
          <span className="text-sm font-bold text-violet-600">{completedCount}/{checklist.length} completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all" style={{ width: `${(completedCount / checklist.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
              <input
                type="checkbox"
                checked={checked[i] || false}
                onChange={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
                className="mt-0.5 w-4 h-4 text-violet-600 rounded"
              />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        {completedCount === checklist.length && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-green-800">Day 28 Complete! You've mastered Recursion!</p>
          </div>
        )}
      </div>
    </div>
  );
}
