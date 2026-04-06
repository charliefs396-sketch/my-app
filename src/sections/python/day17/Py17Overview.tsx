export default function Py17Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent mb-3">
        🐍 Day 17: Recursion in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 | Python Track</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-100">
          <h3 className="font-bold text-violet-800 text-lg mb-3">🪆 What is Recursion?</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Recursion is when a function calls <strong>itself</strong>. It keeps calling itself on a smaller version of the problem until it reaches a stopping point called the <strong>base case</strong>.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="font-bold text-emerald-800 text-lg mb-3">🔑 Three Things Every Recursive Function Needs</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div><strong>1. Base case</strong> — when to stop</div>
            <div><strong>2. Recursive case</strong> — call itself again</div>
            <div><strong>3. Progress</strong> — move toward the base case</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">📦 First Mental Model: Stack of Calls</h3>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>Every time a recursive function is called, Python puts that call on the <strong>call stack</strong>.</p>
          <p>The calls build up going <strong>down</strong> to the base case, then return one by one coming <strong>back up</strong>.</p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 font-mono text-sm">
            factorial(4)
            <br />↳ factorial(3)
            <br />&nbsp;&nbsp;↳ factorial(2)
            <br />&nbsp;&nbsp;&nbsp;&nbsp;↳ factorial(1)  ← base case
            <br />&nbsp;&nbsp;&nbsp;&nbsp;← returns 1
            <br />&nbsp;&nbsp;← returns 2
            <br />← returns 6
            <br />← returns 24
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">🆚 Recursion vs Iteration</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Feature</th>
                <th className="px-4 py-2 text-left text-violet-700">Recursion</th>
                <th className="px-4 py-2 text-left text-emerald-700">Iteration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['How it repeats', 'Function calls itself', 'Loop repeats'],
                ['Needs base case?', 'Yes', 'No'],
                ['Uses call stack?', 'Yes', 'No'],
                ['Usually easier for', 'Tree-like / self-similar problems', 'Simple repetition'],
                ['Big risk', 'Infinite recursion', 'Infinite loop'],
              ].map(([a, b, c], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{a}</td>
                  <td className="px-4 py-2 text-violet-700">{b}</td>
                  <td className="px-4 py-2 text-emerald-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-3">⚠️ Most Important Rule</h3>
        <p className="text-sm text-amber-900 leading-relaxed">
          If your recursive function does <strong>not</strong> reach its base case, it will keep calling itself forever until Python crashes with a <strong>RecursionError</strong>.
        </p>
      </div>
    </div>
  );
}
