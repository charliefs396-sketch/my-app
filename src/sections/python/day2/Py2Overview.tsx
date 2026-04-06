import CodeBlock from '../../../components/CodeBlock';

export default function Py2Overview() {
  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">Day 2</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Python Track</span>
      </div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 bg-clip-text text-transparent mb-3">
        🔢 Operators & Operations
      </h1>
      <p className="text-gray-500 text-lg mb-8">Python for A Level Computer Science – Cambridge 9618</p>

      {/* What you'll learn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: '➕', title: 'Arithmetic Operators', desc: '+  −  *  /  //  %  **  and how they differ from pseudocode' },
          { icon: '⚖️', title: 'Comparison Operators', desc: '==  !=  <  >  <=  >= and returning True/False' },
          { icon: '🧠', title: 'Logical Operators', desc: 'and  or  not — same logic as pseudocode AND OR NOT' },
          { icon: '🔗', title: 'String Operations', desc: 'Concatenation with + and repetition with *' },
          { icon: '🔢', title: 'Digit Extraction', desc: 'Classic exam question using // and % together' },
          { icon: '✍️', title: 'Practice', desc: '3 exercises: seconds converter, tax calculator, even/odd checker' },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* O Level vs A Level */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 mb-8 border border-emerald-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 What's new compared to Day 1?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-emerald-200">
                <th className="text-left py-2 pr-4 text-gray-500 font-semibold">Topic</th>
                <th className="text-left py-2 pr-4 text-emerald-700 font-semibold">What you learn today</th>
                <th className="text-left py-2 text-gray-500 font-semibold">Pseudocode equivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {[
                ['Integer division', 'a // b', 'a DIV b'],
                ['Remainder', 'a % b', 'a MOD b'],
                ['Power', 'a ** b', 'not in pseudocode'],
                ['Equality check', 'a == b', 'a = b'],
                ['Not equal', 'a != b', 'a <> b'],
                ['Logical AND', 'a and b', 'a AND b'],
                ['Concatenation', 'str1 + str2', 'str1 & str2'],
                ['String repeat', 'str * n', 'not in pseudocode'],
              ].map(([topic, python, pseudo]) => (
                <tr key={topic}>
                  <td className="py-2 pr-4 text-gray-700 font-medium">{topic}</td>
                  <td className="py-2 pr-4"><code className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs font-mono">{python}</code></td>
                  <td className="py-2"><code className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-mono">{pseudo}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick preview */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Taste — All operators in one go</h2>
        <CodeBlock language="python" code={`a = 17
b = 5

# Arithmetic
print(a + b)    # 22
print(a - b)    # 12
print(a * b)    # 85
print(a / b)    # 3.4  (always float!)
print(a // b)   # 3    (integer division - like DIV)
print(a % b)    # 2    (remainder - like MOD)
print(a ** b)   # 1419857 (17 to the power 5)

# Comparison (return True or False)
print(5 == 5)   # True
print(5 != 3)   # True
print(5 > 3)    # True

# Logical
print(True and False)  # False
print(True or False)   # True
print(not True)        # False`} />
      </div>

      {/* Big warning */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-bold text-red-800 text-lg">The Most Common Mistake in Exams</p>
            <p className="text-red-700 mt-2 mb-3">Using <code className="bg-red-100 px-1 rounded">=</code> for comparison instead of <code className="bg-red-100 px-1 rounded">==</code></p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-100 rounded-xl p-3">
                <p className="text-xs font-bold text-red-700 mb-1">❌ WRONG</p>
                <code className="text-sm text-red-800 font-mono">if age = 18:</code>
                <p className="text-xs text-red-600 mt-1">SyntaxError! = is assignment only</p>
              </div>
              <div className="bg-green-100 rounded-xl p-3">
                <p className="text-xs font-bold text-green-700 mb-1">✅ CORRECT</p>
                <code className="text-sm text-green-800 font-mono">if age == 18:</code>
                <p className="text-xs text-green-600 mt-1">== checks if equal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
