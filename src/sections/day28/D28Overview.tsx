import CodeBlock from '../../components/CodeBlock';

export default function D28Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent mb-3">
        🔄 Day 28: Recursion in Pseudocode
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 | Paper 2</p>

      {/* What is recursion */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-violet-800 mb-3">🎯 What is Recursion?</h2>
        <p className="text-gray-700 mb-4">A function or procedure that <strong>calls itself</strong> as part of its own definition. Like standing between two mirrors — you see a reflection of a reflection of a reflection...</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🏁', title: 'Base Case', desc: 'The stopping condition. WITHOUT this, recursion goes on forever and crashes (stack overflow)!', color: 'bg-red-100 border-red-300' },
            { icon: '🔄', title: 'Recursive Case', desc: 'The part where the function calls ITSELF with a smaller/simpler version of the problem.', color: 'bg-blue-100 border-blue-300' },
            { icon: '📉', title: 'Progress', desc: 'Each call must move CLOSER to the base case. Otherwise you get infinite recursion.', color: 'bg-green-100 border-green-300' },
          ].map((c, i) => (
            <div key={i} className={`${c.color} border rounded-xl p-4`}>
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1">{c.title}</h3>
              <p className="text-sm text-gray-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real world analogy */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-amber-800 mb-3">🪆 Russian Dolls Analogy</h2>
        <p className="text-gray-700 mb-3">Imagine a set of Russian dolls. To open the smallest doll (base case), you must first open each bigger doll one at a time (recursive calls). Once you reach the smallest, you close them all back up (returning values).</p>
        <div className="font-mono text-sm bg-amber-100 rounded-lg p-4">
          <p>Open BIG doll → Open MEDIUM doll → Open SMALL doll → <span className="text-red-600 font-bold">FOUND smallest (base case!)</span></p>
          <p className="mt-2">← Close SMALL ← Close MEDIUM ← Close BIG → <span className="text-green-600 font-bold">DONE</span></p>
        </div>
      </div>

      {/* First look at the function */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">👀 Your First Recursive Function</h2>
        <CodeBlock language="pseudocode" code={`FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1         // BASE CASE - stops here!
      ELSE
         RETURN N * Factorial(N - 1)   // RECURSIVE CASE
   ENDIF
ENDFUNCTION`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-2">✅ Base Case: N &lt;= 1</h3>
            <p className="text-sm text-gray-700">When N is 1 or less, just return 1. No more recursive calls. This is what STOPS the recursion.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">🔄 Recursive Case: N * Factorial(N-1)</h3>
            <p className="text-sm text-gray-700">Call Factorial again with N-1. Each call gets CLOSER to the base case (N decreases by 1 each time).</p>
          </div>
        </div>
      </div>

      {/* Recursion vs Iteration quick view */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚔️ Recursion vs Iteration — Quick View</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-purple-600 mb-2">🔄 Recursive Factorial</p>
            <CodeBlock language="pseudocode" code={`FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1
      ELSE
         RETURN N * Factorial(N - 1)
   ENDIF
ENDFUNCTION`} />
          </div>
          <div>
            <p className="text-sm font-bold text-blue-600 mb-2">🔁 Iterative Factorial</p>
            <CodeBlock language="pseudocode" code={`FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   DECLARE Result : INTEGER
   DECLARE i : INTEGER
   Result ← 1
   FOR i ← 1 TO N
      Result ← Result * i
   NEXT i
   RETURN Result
ENDFUNCTION`} />
          </div>
        </div>
      </div>

      {/* Exam importance */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-indigo-800 mb-3">📋 Day 28 Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '🔧', label: 'Algorithm Deep Dive', desc: 'Every line of Factorial explained + call stack' },
            { icon: '📋', label: 'Trace Tables', desc: 'Wind down and wind up — full traces' },
            { icon: '🔄', label: 'More Examples', desc: 'Fibonacci, Countdown, Sum — all traced' },
            { icon: '❓', label: 'Exam FAQ', desc: '8 most common recursion exam questions' },
            { icon: '✍️', label: 'Practice', desc: '4 exercises from easy to hard' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions to test your understanding' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-indigo-100">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
