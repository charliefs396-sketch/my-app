export default function D19Overview() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🧪 Day 19: Testing and Test Data
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science — Cambridge 9618</p>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
        <h2 className="text-xl font-bold text-gray-800 mb-3">📌 Why This Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Testing is a <strong>guaranteed topic</strong> in Paper 2. You WILL be asked to create test data tables,
          identify error types, or describe testing methods. The good news? This is one of the <strong>easiest topics
          to score full marks on</strong> — if you know the vocabulary!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border-2 border-red-200 p-5">
          <div className="text-3xl mb-2">🐛</div>
          <h3 className="font-bold text-red-700 mb-2">3 Error Types</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Syntax</strong> — won't run at all</li>
            <li>• <strong>Logic</strong> — runs but wrong answer</li>
            <li>• <strong>Runtime</strong> — crashes mid-execution</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border-2 border-orange-200 p-5">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-orange-700 mb-2">3 Data Types</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Normal</strong> — valid expected data</li>
            <li>• <strong>Abnormal</strong> — invalid / rejected</li>
            <li>• <strong>Boundary</strong> — edge cases</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border-2 border-amber-200 p-5">
          <div className="text-3xl mb-2">🔬</div>
          <h3 className="font-bold text-amber-700 mb-2">7 Testing Methods</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Dry run & Walkthrough</li>
            <li>• White-box & Black-box</li>
            <li>• Stub, Alpha & Beta</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🆕 What's New at A Level vs O Level?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700">Topic</th>
                <th className="text-left p-3 font-bold text-gray-700">O Level</th>
                <th className="text-left p-3 font-bold text-gray-700">A Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">Error types</td><td className="p-3">Syntax, logic, runtime</td><td className="p-3 font-semibold text-red-600">Same but must explain WHY each occurs</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-3">Test data</td><td className="p-3">Normal, abnormal, boundary</td><td className="p-3 font-semibold text-red-600">Must create FULL test plans with expected results</td></tr>
              <tr className="border-t"><td className="p-3">Testing methods</td><td className="p-3">Basic descriptions</td><td className="p-3 font-semibold text-red-600">White-box vs Black-box, Alpha vs Beta, Stub testing</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-3">Trace tables</td><td className="p-3">Simple tracing</td><td className="p-3 font-semibold text-red-600">Complex traces with arrays, functions, nested loops</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
        <h3 className="font-bold text-indigo-800 mb-3">🗺️ Day 19 Roadmap</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '🐛', label: 'Types of Errors', desc: 'Syntax, Logic, Runtime — identify and fix each' },
            { icon: '📊', label: 'Test Data Types', desc: 'Normal, Abnormal, Boundary — create test plans' },
            { icon: '🔬', label: 'Testing Methods', desc: 'All 7 methods explained with when to use each' },
            { icon: '✍️', label: 'Practice', desc: 'Create test plans and identify errors' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-indigo-100">
              <span className="text-xl">{item.icon}</span>
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
