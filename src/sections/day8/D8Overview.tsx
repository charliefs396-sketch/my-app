export default function D8Overview() {
  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider">Day 8</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">Cambridge 9618</span>
      </div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
        🔍 Linear Search Algorithm
      </h1>
      <p className="text-gray-500 text-lg mb-8">Master the most fundamental searching algorithm — step by step, trace by trace.</p>

      {/* What is Linear Search */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">🎯 What is Linear Search?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Linear search (also called <strong>sequential search</strong>) means going through an array 
          <strong> one element at a time</strong>, from the first to the last, checking if each one matches what you're looking for.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
          <p className="text-blue-800 font-bold mb-2">Real-Life Analogy 🔎</p>
          <p className="text-blue-700 text-sm">
            Imagine you lost your phone somewhere in your room. You search <em>every single spot</em> — under the pillow, 
            under the desk, in the drawer — one by one until you find it OR you've checked everywhere and it's not there.
            That's exactly linear search!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">✅</div>
            <p className="font-bold text-green-800 text-sm">Best Case</p>
            <p className="text-green-700 text-xs mt-1">Target is the <strong>first</strong> element. Found immediately!</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-bold text-amber-800 text-sm">Average Case</p>
            <p className="text-amber-700 text-xs mt-1">Target is <strong>somewhere in the middle</strong>. About n/2 checks.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">❌</div>
            <p className="font-bold text-red-800 text-sm">Worst Case</p>
            <p className="text-red-700 text-xs mt-1">Target is <strong>last</strong> OR not found. Checks ALL n elements!</p>
          </div>
        </div>
      </div>

      {/* Visual walkthrough */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">👁️ Visual Walkthrough — Searching for "Ali"</h2>
        <p className="text-gray-600 mb-4 text-sm">Array: Names = ["Sara", "Tom", "Ali", "Zara", "Ben"] — Size = 5 — Target = "Ali"</p>
        <div className="space-y-3">
          {[
            { i: 1, val: '"Sara"', match: false, action: 'Sara ≠ Ali → keep going' },
            { i: 2, val: '"Tom"', match: false, action: 'Tom ≠ Ali → keep going' },
            { i: 3, val: '"Ali"', match: true, action: 'Ali = Ali → FOUND! Return 3' },
          ].map((step) => (
            <div key={step.i} className={`flex items-center gap-4 p-3 rounded-xl border-2 ${step.match ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${step.match ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                i={step.i}
              </div>
              <div className={`px-4 py-2 rounded-lg font-mono text-sm font-bold flex-shrink-0 ${step.match ? 'bg-green-200 text-green-800' : 'bg-white border border-gray-300 text-gray-700'}`}>
                {step.val}
              </div>
              <div className={`text-sm font-medium ${step.match ? 'text-green-700' : 'text-gray-500'}`}>
                {step.action}
              </div>
              {step.match && <span className="ml-auto text-xl">🎉</span>}
            </div>
          ))}
          <div className="flex items-center gap-4 p-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 opacity-60">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-gray-100 text-gray-400">i=4</div>
            <div className="px-4 py-2 rounded-lg font-mono text-sm text-gray-400">"Zara"</div>
            <div className="text-sm text-gray-400">Never reached — already returned!</div>
          </div>
        </div>
      </div>

      {/* O Level vs A Level */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 O Level vs A Level</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-gray-500 font-bold">Feature</th>
                <th className="text-left py-3 px-4 text-orange-600 font-bold">O Level</th>
                <th className="text-left py-3 px-4 text-sky-600 font-bold">A Level (NEW)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Write search code', 'Sometimes asked', 'Always — must know by heart'],
                ['FUNCTION syntax', 'Not required', 'Must use FUNCTION...ENDFUNCTION'],
                ['RETURN value', 'Not required', 'Must RETURN position or -1'],
                ['Count occurrences', 'Not tested', 'Frequently tested'],
                ['Search + output all matches', 'Not tested', 'Common exam question'],
                ['Early exit with RETURN', 'Not required', 'Must know and use'],
              ].map(([f, o, a], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-semibold text-gray-700">{f}</td>
                  <td className="py-3 px-4 text-orange-700">{o}</td>
                  <td className="py-3 px-4 text-sky-700 font-medium">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What you'll learn */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📚 What You'll Learn Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: '🔧', title: 'FUNCTION Syntax', desc: 'How to write a proper search function with RETURNS' },
            { icon: '🔍', title: 'Basic Linear Search', desc: 'Search for first match — return position or -1' },
            { icon: '🔢', title: 'Count Occurrences', desc: 'Count how many times a value appears' },
            { icon: '📍', title: 'Find All Positions', desc: 'Output every position where target is found' },
            { icon: '❓', title: 'Exam FAQ', desc: 'Common mistakes and exam-style Q&A' },
            { icon: '✍️', title: 'Practice Exercises', desc: '3 exercises with hints and full solutions' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-sky-50 rounded-xl border border-sky-100">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-sky-800 text-sm">{item.title}</p>
                <p className="text-sky-600 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key fact */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">🧠 Key Exam Fact</h3>
        <p className="text-sky-100 text-sm leading-relaxed">
          Linear Search works on <strong>any array</strong> — sorted or unsorted. It doesn't care about order. 
          This is its main advantage over Binary Search (Day 9), which REQUIRES a sorted array. 
          The examiner will often ask you to choose between them — always justify your choice!
        </p>
      </div>
    </div>
  );
}
