export default function PythonOverview() {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 bg-clip-text text-transparent mb-3">
          🐍 Day 1: Python – Setup & First Program
        </h1>
        <p className="text-gray-500 text-lg">A Level Computer Science – Practical Programming</p>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 What You'll Build Today</h2>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Today you go from <strong>zero to running Python code</strong>. By the end, you'll have Python installed,
          you'll understand variables, input/output, and you'll have built 3 mini programs. Let's go!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '\u2699\uFE0F', title: 'Setup Python', desc: 'Install Python + VS Code on your machine' },
            { icon: '\uD83D\uDE80', title: 'First Program', desc: 'Write and run your first Python script' },
            { icon: '\uD83D\uDCE6', title: 'Variables & Types', desc: 'Strings, integers, floats, booleans' },
            { icon: '\u2328\uFE0F', title: 'Input & Output', desc: 'print(), input(), and type conversion' },
            { icon: '\uD83D\uDD04', title: 'Python vs Pseudocode', desc: 'See how the two languages compare' },
            { icon: '\u270D\uFE0F', title: 'Build 3 Programs', desc: 'Calculator, greeting, and converter' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-all">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card bg-gradient-to-r from-emerald-50 to-green-50">
        <h2 className="text-xl font-bold text-emerald-800 mb-3">🤔 Why Python for A Level?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-5 rounded-xl">
            <h3 className="font-bold text-emerald-700 mb-3 text-lg">📝 Paper 1 & 2 (Theory)</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Uses <strong>pseudocode</strong> — you learned this already!</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Tests your understanding of algorithms</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> You write code on paper</li>
            </ul>
          </div>
          <div className="bg-white/80 p-5 rounded-xl">
            <h3 className="font-bold text-emerald-700 mb-3 text-lg">💻 Paper 4 (Practical)</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> You write <strong>real Python code</strong> on a computer</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Must actually run and produce correct output</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500">•</span> Python is the most popular choice for 9618</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-box">
        <p className="font-bold text-green-800">✅ THE CONNECTION</p>
        <p className="text-green-700 mt-1">
          Every pseudocode concept maps directly to Python. Learn the concept in pseudocode (theory exam),
          then implement it in Python (practical exam). <strong>Two birds, one stone!</strong>
        </p>
      </div>
    </div>
  );
}
