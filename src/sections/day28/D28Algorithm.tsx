import CodeBlock from '../../components/CodeBlock';

export default function D28Algorithm() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔧 The Factorial Algorithm — Every Line Explained</h2>
      <p className="text-gray-500 mb-6">Understanding WHY each line exists is what gets you marks in the exam.</p>

      {/* Full function with annotations */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Your Exact Cambridge Function</h3>
        <CodeBlock language="pseudocode" code={`FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1
      ELSE
         RETURN N * Factorial(N - 1)
   ENDIF
ENDFUNCTION`} />
      </div>

      {/* Line by line explanation */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Line-by-Line Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-violet-100">
                <th className="border border-violet-200 px-4 py-2 text-left font-bold">Line</th>
                <th className="border border-violet-200 px-4 py-2 text-left font-bold">Code</th>
                <th className="border border-violet-200 px-4 py-2 text-left font-bold">WHY it's there</th>
              </tr>
            </thead>
            <tbody>
              {[
                { line: '1', code: 'FUNCTION Factorial(N : INTEGER) RETURNS INTEGER', why: 'Defines a FUNCTION (not procedure) because it returns a value. Takes N as input. Returns an INTEGER.' },
                { line: '2', code: 'IF N <= 1', why: 'Checks the BASE CASE. We use <= 1 (not = 1) to handle N=0 and negative numbers safely.' },
                { line: '3', code: 'THEN RETURN 1', why: 'BASE CASE: Factorial of 1 (and 0) is 1. This STOPS the recursion. No more calls!' },
                { line: '4', code: 'ELSE RETURN N * Factorial(N - 1)', why: 'RECURSIVE CASE: Multiply N by the factorial of (N-1). Calls itself with a SMALLER value — moving toward base case.' },
                { line: '5', code: 'ENDIF', why: 'Closes the IF statement. Required in Cambridge pseudocode.' },
                { line: '6', code: 'ENDFUNCTION', why: 'Closes the FUNCTION definition.' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-mono font-bold text-violet-600">{row.line}</td>
                  <td className="border border-gray-200 px-4 py-2 font-mono text-xs bg-slate-900 text-cyan-300">{row.code}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The call stack */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">📚 The Call Stack — What Happens in Memory</h3>
        <p className="text-gray-600 mb-4">Every time a function calls itself, a new <strong>stack frame</strong> is added to the call stack. When the base case is hit, the frames start unwinding.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-bold text-red-600 mb-2">⬇️ Winding DOWN (building up calls)</p>
            <div className="space-y-1">
              {[
                { call: 'Factorial(4)', status: 'waiting for Factorial(3)...', color: 'bg-red-100 border-red-300' },
                { call: 'Factorial(3)', status: 'waiting for Factorial(2)...', color: 'bg-orange-100 border-orange-300' },
                { call: 'Factorial(2)', status: 'waiting for Factorial(1)...', color: 'bg-yellow-100 border-yellow-300' },
                { call: 'Factorial(1)', status: 'BASE CASE → returns 1 ✅', color: 'bg-green-100 border-green-300' },
              ].map((frame, i) => (
                <div key={i} className={`${frame.color} border rounded-lg px-4 py-2 font-mono text-sm`} style={{ marginLeft: `${i * 16}px` }}>
                  <span className="font-bold">{frame.call}</span> — <span className="text-gray-600 text-xs">{frame.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">⬆️ Winding UP (returning values)</p>
            <div className="space-y-1">
              {[
                { call: 'Factorial(1)', result: '= 1', color: 'bg-green-100 border-green-300' },
                { call: 'Factorial(2)', result: '= 2 × 1 = 2', color: 'bg-yellow-100 border-yellow-300' },
                { call: 'Factorial(3)', result: '= 3 × 2 = 6', color: 'bg-orange-100 border-orange-300' },
                { call: 'Factorial(4)', result: '= 4 × 6 = 24 🎉', color: 'bg-red-100 border-red-300' },
              ].map((frame, i) => (
                <div key={i} className={`${frame.color} border rounded-lg px-4 py-2 font-mono text-sm`} style={{ marginLeft: `${(3 - i) * 16}px` }}>
                  <span className="font-bold">{frame.call}</span> → <span className="text-green-700 font-bold">{frame.result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Your exact trace from the notes */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📝 Your Exact Trace: Factorial(4)</h3>
        <CodeBlock language="pseudocode" code={`// Trace Factorial(4):
// Factorial(4) = 4 * Factorial(3)
//   Factorial(3) = 3 * Factorial(2)
//     Factorial(2) = 2 * Factorial(1)
//       Factorial(1) = 1  // BASE CASE - stops here!
//     Factorial(2) = 2 * 1 = 2
//   Factorial(3) = 3 * 2 = 6
// Factorial(4) = 4 * 6 = 24`} />
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="font-bold text-green-800">✅ Final Answer: Factorial(4) = 24</p>
          <p className="text-sm text-gray-600 mt-1">4! = 4 × 3 × 2 × 1 = 24</p>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-red-800 mb-4">⚠️ 5 Common Mistakes</h3>
        <div className="space-y-3">
          {[
            { wrong: 'IF N = 0', correct: 'IF N <= 1', why: 'N=0 base case misses N=1 — causes infinite loop for Factorial(1)' },
            { wrong: 'RETURN Factorial(N)', correct: 'RETURN N * Factorial(N - 1)', why: 'Must reduce N each call or it loops forever' },
            { wrong: 'CALL Factorial(N-1)', correct: 'RETURN N * Factorial(N - 1)', why: 'It\'s a FUNCTION — use RETURN, not CALL. Must use the return value!' },
            { wrong: 'No ENDIF', correct: 'Always close with ENDIF', why: 'Cambridge pseudocode requires ENDIF for every IF' },
            { wrong: 'No base case', correct: 'Always include IF base case THEN RETURN', why: 'Without base case = infinite recursion = stack overflow' },
          ].map((m, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-2 bg-white rounded-lg p-3 border border-red-100">
              <div className="bg-red-100 rounded p-2 font-mono text-xs text-red-700">❌ {m.wrong}</div>
              <div className="bg-green-100 rounded p-2 font-mono text-xs text-green-700">✅ {m.correct}</div>
              <div className="text-xs text-gray-600 flex items-center">{m.why}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
