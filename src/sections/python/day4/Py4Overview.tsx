import CodeBlock from '../../../components/CodeBlock';

export default function Py4Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🔁 Day 4: Loops
      </h1>
      <p className="text-gray-500 text-lg mb-8">Python for A Level CS – Cambridge 9618 | Paper 4</p>

      {/* What you'll learn */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">📚 What You'll Learn Today</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🔢', title: 'FOR Loops', desc: 'range() function, counting up/down, step values' },
            { icon: '🔄', title: 'WHILE Loops', desc: 'Pre-condition loops, break, sentinel values' },
            { icon: '🔁', title: 'REPEAT simulation', desc: 'while True + break pattern, input validation' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick comparison table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Look: 3 Loop Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-bold text-gray-700">Loop Type</th>
                <th className="text-left p-3 font-bold text-gray-700">When to Use</th>
                <th className="text-left p-3 font-bold text-gray-700">Python Syntax</th>
                <th className="text-left p-3 font-bold text-gray-700">Pseudocode Equivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { type: 'FOR', when: 'Know exact number of repetitions', python: 'for i in range(n):', pseudo: 'FOR i ← 1 TO n' },
                { type: 'WHILE', when: 'May run 0 or more times', python: 'while condition:', pseudo: 'WHILE condition' },
                { type: 'REPEAT', when: 'Must run at least once', python: 'while True: ... break', pseudo: 'REPEAT...UNTIL' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 font-bold text-emerald-600">{row.type}</td>
                  <td className="p-3 text-gray-700">{row.when}</td>
                  <td className="p-3 font-mono text-sm text-purple-700">{row.python}</td>
                  <td className="p-3 font-mono text-sm text-cyan-700">{row.pseudo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* range() quick reference */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 range() — Memorise This Table!</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-50 border-b border-emerald-200">
                <th className="text-left p-3 font-bold text-emerald-700">Python</th>
                <th className="text-left p-3 font-bold text-emerald-700">Numbers Generated</th>
                <th className="text-left p-3 font-bold text-emerald-700">Pseudocode Equivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { py: 'range(5)', nums: '0, 1, 2, 3, 4', pseudo: 'FOR i ← 0 TO 4' },
                { py: 'range(1, 11)', nums: '1, 2, 3, ..., 10', pseudo: 'FOR i ← 1 TO 10' },
                { py: 'range(1, 11, 2)', nums: '1, 3, 5, 7, 9', pseudo: 'FOR i ← 1 TO 10 STEP 2' },
                { py: 'range(10, 0, -1)', nums: '10, 9, 8, ..., 1', pseudo: 'FOR i ← 10 TO 1 STEP -1' },
                { py: 'range(0, 20, 2)', nums: '0, 2, 4, ..., 18', pseudo: 'FOR i ← 0 TO 18 STEP 2' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 font-mono text-purple-700 font-semibold">{row.py}</td>
                  <td className="p-3 text-gray-700">{row.nums}</td>
                  <td className="p-3 font-mono text-cyan-700 text-xs">{row.pseudo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* O Level vs A Level */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📈 What's NEW at A Level vs O Level</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <h3 className="font-bold text-red-700 mb-3">❌ O Level Approach</h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li>• Basic for loops only</li>
              <li>• Simple while loops</li>
              <li>• No break/continue</li>
              <li>• No nested loops tested heavily</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <h3 className="font-bold text-green-700 mb-3">✅ A Level Expects</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• range() with all 3 parameters</li>
              <li>• while True + break pattern</li>
              <li>• Sentinel values (stop on -1)</li>
              <li>• Nested loops (2D arrays)</li>
              <li>• Loop + accumulator patterns</li>
              <li>• Input validation with loops</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick taste */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">👀 Quick Taste — All 3 Loops</h2>
        <CodeBlock language="python" code={`# FOR loop — count 1 to 5
for i in range(1, 6):
    print(i)                 # 1, 2, 3, 4, 5

# WHILE loop — keep going until condition false
count = 1
while count <= 5:
    print(count)             # 1, 2, 3, 4, 5
    count += 1

# REPEAT simulation — must run at least once
while True:
    num = int(input("Enter positive number: "))
    if num > 0:
        break                # Exit when valid input given`} />
      </div>
    </div>
  );
}
