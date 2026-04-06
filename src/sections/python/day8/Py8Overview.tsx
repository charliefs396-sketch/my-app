
export default function Py8Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🐍 Day 8: Functions & Procedures
      </h1>
      <p className="text-gray-500 text-lg mb-8">Python for A Level Computer Science – Cambridge 9618</p>

      {/* What you'll learn */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 className="font-bold text-emerald-800 text-lg mb-3">📚 What You'll Learn</h3>
          <ul className="space-y-2 text-emerald-700 text-sm">
            <li>✅ How to write functions with <code className="bg-emerald-100 px-1 rounded">def</code></li>
            <li>✅ Return values vs printing</li>
            <li>✅ Parameters and arguments</li>
            <li>✅ Default parameters</li>
            <li>✅ Local vs Global scope</li>
            <li>✅ The <code className="bg-emerald-100 px-1 rounded">global</code> keyword</li>
            <li>✅ Pseudocode vs Python functions</li>
          </ul>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <h3 className="font-bold text-violet-800 text-lg mb-3">⚠️ Key Differences</h3>
          <ul className="space-y-2 text-violet-700 text-sm">
            <li>❌ No FUNCTION/PROCEDURE keywords</li>
            <li>❌ No ENDFUNCTION/ENDPROCEDURE</li>
            <li>❌ No BYVAL/BYREF</li>
            <li>✅ Just use <code className="bg-violet-100 px-1 rounded">def</code> for both</li>
            <li>✅ Use <code className="bg-violet-100 px-1 rounded">return</code> for functions</li>
            <li>✅ Omit return for procedures</li>
            <li>✅ Indentation defines the block</li>
          </ul>
        </div>
      </div>

      {/* Function vs Procedure */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Function vs Procedure</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-bold text-gray-700">Feature</th>
                <th className="px-4 py-3 text-left font-bold text-emerald-700">Function</th>
                <th className="px-4 py-3 text-left font-bold text-blue-700">Procedure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Returns value?', 'Yes — uses return', 'No — no return statement'],
                ['Python keyword', 'def', 'def'],
                ['How to call', 'result = my_func()', 'my_proc()'],
                ['Pseudocode', 'FUNCTION ... RETURNS', 'PROCEDURE'],
                ['Example', 'calculate_average()', 'display_menu()'],
                ['Used when', 'You need a result back', 'You just want an action done'],
              ].map(([feature, func, proc]) => (
                <tr key={feature} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">{feature}</td>
                  <td className="px-4 py-3 text-emerald-700">{func}</td>
                  <td className="px-4 py-3 text-blue-700">{proc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick taste */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-900 rounded-xl p-5">
          <p className="text-xs font-bold text-emerald-400 mb-3">🐍 FUNCTION (returns a value)</p>
          <pre className="text-sm text-gray-100 font-mono leading-relaxed">{`def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

result = calculate_average([80, 70, 90])
print(f"Average: {result}")  # 80.0`}</pre>
        </div>
        <div className="bg-slate-900 rounded-xl p-5">
          <p className="text-xs font-bold text-blue-400 mb-3">🐍 PROCEDURE (no return)</p>
          <pre className="text-sm text-gray-100 font-mono leading-relaxed">{`def display_menu():
    print("1. Add")
    print("2. Delete")
    print("3. Search")
    print("4. Quit")

display_menu()  # Just call it`}</pre>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">🗺️ Day 8 Roadmap</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: '🔧', label: 'def Syntax', desc: 'How to write functions' },
            { icon: '🌍', label: 'Scope', desc: 'Local vs Global variables' },
            { icon: '❓', label: 'Exam FAQ', desc: 'Common mistakes' },
            { icon: '✍️', label: 'Practice', desc: '4 exercises' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-3 text-center border border-emerald-100">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="font-bold text-gray-800 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
