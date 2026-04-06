export default function Introduction() {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
          📚 Day 1: Variables, Constants & Data Types
        </h1>
        <p className="text-gray-500 text-lg">A Level Computer Science – Cambridge 9618</p>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 What You'll Master Today</h2>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Right, so you already know variables from O Level — but A Level is a <strong>different beast</strong>. 
          The examiners are way stricter now. Every variable must be declared. Every type must be specified. 
          No shortcuts. Let's break it ALL down so you're 100% ready.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '📦', title: 'Variables', desc: 'What they are, how to DECLARE them properly' },
            { icon: '🔒', title: 'Constants', desc: 'When and why to use CONSTANT' },
            { icon: '🏷️', title: 'Data Types', desc: 'All 6 types: INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE' },
            { icon: '↔️', title: 'Assignment', desc: 'Using the ← arrow operator correctly' },
            { icon: '📥', title: 'Input/Output', desc: 'INPUT and OUTPUT statements' },
            { icon: '✍️', title: 'Practice Problems', desc: '3 full practice exercises with solutions' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 transition-all">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card bg-gradient-to-r from-indigo-50 to-purple-50">
        <h2 className="text-xl font-bold text-indigo-800 mb-3">🔑 The Big Difference: O Level vs A Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 p-5 rounded-xl">
            <h3 className="font-bold text-red-500 mb-3 text-lg">❌ O Level (What you used to do)</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-400">•</span> Could just use variables without declaring</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span> Data types were optional</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span> <code className="bg-gray-100 px-1 rounded">Name = "Ali"</code> was fine</li>
              <li className="flex items-start gap-2"><span className="text-red-400">•</span> Less strict pseudocode format</li>
            </ul>
          </div>
          <div className="bg-white/80 p-5 rounded-xl">
            <h3 className="font-bold text-green-600 mb-3 text-lg">✅ A Level (What you MUST do now)</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> MUST write <code className="bg-green-50 px-1 rounded font-bold">DECLARE</code> for every variable</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> MUST specify the data type</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Must use <code className="bg-green-50 px-1 rounded font-bold">←</code> arrow for assignment</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Strict Cambridge pseudocode format</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">⚠️ EXAM WARNING</p>
        <p className="text-red-700 mt-1">
          If you forget to DECLARE a variable or use <code>=</code> instead of <code>←</code>, you WILL lose marks. 
          The examiner follows the Cambridge pseudocode guide strictly. Build the habit NOW.
        </p>
      </div>
    </div>
  );
}
