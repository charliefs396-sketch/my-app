export default function D10Overview() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-lime-100 text-lime-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">Day 10 — Pseudocode</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Procedures & Functions</h1>
        <p className="text-lg text-gray-500">Cambridge 9618 A Level — Modular Programming</p>
      </div>

      {/* What is this day about */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 border border-lime-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-lime-800 mb-4">🎯 What You'll Master Today</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🔧', title: 'Procedures', desc: 'Subroutines that DO something but return nothing. CALL to use them.' },
            { icon: '📤', title: 'Functions', desc: 'Subroutines that CALCULATE and RETURN a value back to the caller.' },
            { icon: '📨', title: 'BYVAL vs BYREF', desc: 'The most tested topic — does the original variable change or not?' },
            { icon: '🏷️', title: 'Parameters vs Arguments', desc: 'Two words that confuse everyone — clear them up today.' },
            { icon: '🏠', title: 'Local Variables', desc: 'Variables that only exist inside their subroutine — why they matter.' },
            { icon: '✍️', title: 'Practice', desc: 'Write IsVowel, DisplayArray, CountChar — then a full modular program.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/70 rounded-xl p-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why this matters */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🤔 Why Procedures & Functions?</h2>
        <p className="text-gray-600 mb-4">Imagine you're writing a program for a school and you need to calculate an average in 5 different places. Without subroutines:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">❌ Without Subroutines</p>
            <ul className="text-red-600 text-sm space-y-1">
              <li>• Copy-paste the same code 5 times</li>
              <li>• If there's a bug, fix it 5 times</li>
              <li>• Program becomes very long and hard to read</li>
              <li>• Easy to make mistakes</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">✅ With Subroutines</p>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Write the code ONCE as a function</li>
              <li>• CALL it 5 times — one line each</li>
              <li>• Bug? Fix it in ONE place</li>
              <li>• Clean, readable, professional code</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-blue-800 font-semibold text-sm">💡 Real-world analogy: A subroutine is like a recipe. You write the recipe once and anyone can CALL it whenever they need a cake. You don't rewrite the recipe every time!</p>
        </div>
      </div>

      {/* Big picture overview */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🗺️ The Big Picture — Types of Subroutine</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700 rounded-tl-lg">Feature</th>
                <th className="text-left p-3 font-bold text-indigo-700">PROCEDURE</th>
                <th className="text-left p-3 font-bold text-emerald-700 rounded-tr-lg">FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Keyword to define', 'PROCEDURE … ENDPROCEDURE', 'FUNCTION … ENDFUNCTION'],
                ['Returns a value?', '❌ No', '✅ Yes — must use RETURNS'],
                ['How to use it', 'CALL SubroutineName(args)', 'Use in expression: x ← FuncName(args)'],
                ['Can have parameters?', '✅ Yes', '✅ Yes'],
                ['BYVAL / BYREF?', '✅ Yes (both)', '✅ Yes (both)'],
                ['Typical use case', 'Print output, modify data', 'Calculate and give back a result'],
              ].map(([feat, proc, func], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="p-3 font-semibold text-gray-700">{feat}</td>
                  <td className="p-3 text-indigo-700 font-mono text-xs">{proc}</td>
                  <td className="p-3 text-emerald-700 font-mono text-xs">{func}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* O Level vs A Level */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-800 mb-4">📊 O Level vs A Level</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-xl p-4">
            <p className="font-bold text-gray-600 mb-3">At O Level you knew:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>✅ Basic subroutines / procedures exist</li>
              <li>✅ They make code reusable</li>
              <li>✅ You can pass values in</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <p className="font-bold text-amber-700 mb-3">NEW at A Level:</p>
            <ul className="text-amber-700 text-sm space-y-1">
              <li>🆕 BYVAL vs BYREF (most tested!)</li>
              <li>🆕 Parameter vs Argument terminology</li>
              <li>🆕 Local vs Global variables</li>
              <li>🆕 FUNCTION with RETURNS keyword</li>
              <li>🆕 RETURN statement inside functions</li>
              <li>🆕 Writing and calling both types correctly</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Exam weightage */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-800 mb-3">📝 Exam Importance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Paper 1', value: '★★★★☆', desc: 'Theory questions on BYVAL/BYREF, terminology' },
            { label: 'Paper 2', value: '★★★★★', desc: 'Write PROCEDURE/FUNCTION code in pseudocode' },
            { label: 'Paper 4', value: '★★★★★', desc: 'Implement in Python — same concepts apply!' },
            { label: 'Trace Tables', value: '★★★★☆', desc: 'Trace through code with BYVAL vs BYREF' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center">
              <p className="font-bold text-gray-700 text-sm">{item.label}</p>
              <p className="text-lg my-1">{item.value}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
