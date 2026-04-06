import CodeBlock from '../../components/CodeBlock';

export default function D28TraceTable() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Trace Tables for Recursion</h2>
      <p className="text-gray-500 mb-6">Trace tables for recursion show each function call, the value of N, and what gets returned. This is a Paper 2 exam favourite!</p>

      {/* Factorial(4) full trace table */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Full Trace Table: Factorial(4)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-violet-100">
                <th className="border border-violet-200 px-3 py-2">Call #</th>
                <th className="border border-violet-200 px-3 py-2">Function Call</th>
                <th className="border border-violet-200 px-3 py-2">N value</th>
                <th className="border border-violet-200 px-3 py-2">N &lt;= 1?</th>
                <th className="border border-violet-200 px-3 py-2">Action</th>
                <th className="border border-violet-200 px-3 py-2">Returns</th>
              </tr>
            </thead>
            <tbody>
              {[
                { call: '1', func: 'Factorial(4)', n: '4', check: 'No', action: 'RETURN 4 * Factorial(3)', returns: 'Waiting...', color: 'bg-red-50' },
                { call: '2', func: 'Factorial(3)', n: '3', check: 'No', action: 'RETURN 3 * Factorial(2)', returns: 'Waiting...', color: 'bg-orange-50' },
                { call: '3', func: 'Factorial(2)', n: '2', check: 'No', action: 'RETURN 2 * Factorial(1)', returns: 'Waiting...', color: 'bg-yellow-50' },
                { call: '4', func: 'Factorial(1)', n: '1', check: '✅ YES!', action: 'RETURN 1 (base case)', returns: '1', color: 'bg-green-50' },
                { call: '3↑', func: 'Factorial(2)', n: '2', check: '-', action: '2 * 1', returns: '2', color: 'bg-yellow-50' },
                { call: '2↑', func: 'Factorial(3)', n: '3', check: '-', action: '3 * 2', returns: '6', color: 'bg-orange-50' },
                { call: '1↑', func: 'Factorial(4)', n: '4', check: '-', action: '4 * 6', returns: '24 🎉', color: 'bg-red-50' },
              ].map((row, i) => (
                <tr key={i} className={row.color}>
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold">{row.call}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.func}</td>
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold text-violet-600">{row.n}</td>
                  <td className="border border-gray-200 px-3 py-2 text-center">{row.check}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.action}</td>
                  <td className="border border-gray-200 px-3 py-2 text-center font-bold text-green-700">{row.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-violet-50 border border-violet-200 rounded-lg p-3">
          <p className="text-sm font-bold text-violet-800">🔑 Key Insight: The arrows ↑ show the UNWINDING phase — where each call gets its answer back and completes its multiplication.</p>
        </div>
      </div>

      {/* Factorial(5) trace */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Trace: Factorial(5)</h3>
        <CodeBlock language="pseudocode" code={`// Factorial(5) step by step:
Factorial(5) = 5 * Factorial(4)
  Factorial(4) = 4 * Factorial(3)
    Factorial(3) = 3 * Factorial(2)
      Factorial(2) = 2 * Factorial(1)
        Factorial(1) = 1              // BASE CASE
      Factorial(2) = 2 * 1 = 2       // UNWIND
    Factorial(3) = 3 * 2 = 6         // UNWIND
  Factorial(4) = 4 * 6 = 24          // UNWIND
Factorial(5) = 5 * 24 = 120          // FINAL ANSWER`} />
        <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="font-bold text-green-800">✅ Factorial(5) = 120 &nbsp;|&nbsp; 5! = 5 × 4 × 3 × 2 × 1 = 120</p>
        </div>
      </div>

      {/* Fibonacci trace */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🌀 Fibonacci — Another Classic Recursive Function</h3>
        <CodeBlock language="pseudocode" code={`FUNCTION Fibonacci(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN N        // Fib(0)=0, Fib(1)=1
      ELSE
         RETURN Fibonacci(N - 1) + Fibonacci(N - 2)
   ENDIF
ENDFUNCTION

// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...
// Fib(0)=0, Fib(1)=1, Fib(2)=1, Fib(3)=2, Fib(4)=3, Fib(5)=5`} />
        <div className="mt-4">
          <p className="font-bold text-gray-700 mb-3">Trace of Fibonacci(4):</p>
          <CodeBlock language="pseudocode" code={`Fibonacci(4) = Fibonacci(3) + Fibonacci(2)
  Fibonacci(3) = Fibonacci(2) + Fibonacci(1)
    Fibonacci(2) = Fibonacci(1) + Fibonacci(0)
      Fibonacci(1) = 1  // base case
      Fibonacci(0) = 0  // base case
    Fibonacci(2) = 1 + 0 = 1
    Fibonacci(1) = 1    // base case
  Fibonacci(3) = 1 + 1 = 2
  Fibonacci(2) = Fibonacci(1) + Fibonacci(0)
    Fibonacci(1) = 1    // base case
    Fibonacci(0) = 0    // base case
  Fibonacci(2) = 1 + 0 = 1
Fibonacci(4) = 2 + 1 = 3`} />
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="font-bold text-amber-800">⚠️ Notice: Fibonacci(2) and Fibonacci(1) are calculated MULTIPLE TIMES — this is why Fibonacci recursion is inefficient!</p>
          </div>
        </div>
      </div>

      {/* Countdown procedure */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">⏱️ Countdown — Recursive PROCEDURE (no return value)</h3>
        <CodeBlock language="pseudocode" code={`PROCEDURE Countdown(N : INTEGER)
   IF N <= 0
      THEN
         OUTPUT "Go!"      // BASE CASE
      ELSE
         OUTPUT N
         CALL Countdown(N - 1)   // RECURSIVE CASE
   ENDIF
ENDPROCEDURE

// Calling: CALL Countdown(3)
// Output:
// 3
// 2
// 1
// Go!`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="font-bold text-blue-800 text-sm">📝 Key Difference from Factorial</p>
            <p className="text-sm text-gray-700 mt-1">Countdown is a PROCEDURE not a FUNCTION — it OUTPUTs instead of RETURNing. Use CALL when calling it.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="font-bold text-purple-800 text-sm">📝 Order Matters!</p>
            <p className="text-sm text-gray-700 mt-1">OUTPUT N comes BEFORE the recursive call — so numbers print 3,2,1 in order. If OUTPUT was AFTER, it would print 1,2,3!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
