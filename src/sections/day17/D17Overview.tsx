

export default function D17Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent mb-3">
        📐 Day 17: Identifier Tables & Algorithm Design
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 Paper 2</p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
          <div className="text-3xl mb-2">📋</div>
          <h3 className="font-bold text-sky-800 mb-2">Identifier Tables</h3>
          <p className="text-sky-700 text-sm">Formal way to document all variables, constants and arrays used in a program — required in Paper 2 algorithm design questions.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="text-3xl mb-2">🪜</div>
          <h3 className="font-bold text-blue-800 mb-2">Stepwise Refinement</h3>
          <p className="text-blue-700 text-sm">Breaking a big problem into smaller and smaller pieces until each piece is simple enough to write as pseudocode. Also called top-down design.</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <div className="text-3xl mb-2">🏗️</div>
          <h3 className="font-bold text-indigo-800 mb-2">Structure Charts</h3>
          <p className="text-indigo-700 text-sm">Diagram showing how a program is broken into modules and how they connect. Common in Paper 2 design questions.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <div className="text-3xl mb-2">✍️</div>
          <h3 className="font-bold text-purple-800 mb-2">Algorithm Design</h3>
          <p className="text-purple-700 text-sm">Writing complete pseudocode solutions from a problem description — the core skill of Paper 2.</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-amber-800 mb-3">⭐ Why This Day Matters for Your Exam</h3>
        <div className="space-y-2 text-amber-700 text-sm">
          <div className="flex items-start gap-2"><span>📌</span><span><strong>Paper 2 Section B</strong> always asks you to design an algorithm with an identifier table</span></div>
          <div className="flex items-start gap-2"><span>📌</span><span><strong>6–8 marks</strong> typically awarded just for the identifier table alone</span></div>
          <div className="flex items-start gap-2"><span>📌</span><span><strong>Stepwise refinement</strong> questions appear almost every year</span></div>
          <div className="flex items-start gap-2"><span>📌</span><span>Students who plan with identifier tables write <strong>better, more complete</strong> pseudocode</span></div>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 O Level vs A Level — What's New</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="text-left p-3 font-semibold text-gray-700">Topic</th><th className="text-left p-3 font-semibold text-gray-700">O Level</th><th className="text-left p-3 font-semibold text-sky-700">A Level</th></tr></thead>
            <tbody>
              {[
                ['Identifier Tables', 'Not required', 'Required — formal format with Type and Description'],
                ['Stepwise Refinement', 'Basic decomposition', 'Multi-level numbered refinement'],
                ['Structure Charts', 'Not required', 'May be asked in Paper 2'],
                ['Algorithm Design', 'Simple programs', 'Full system design with multiple modules'],
                ['Documentation', 'Not tested', 'Expected as part of algorithm answers'],
              ].map(([topic, o, a], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-medium text-gray-800">{topic}</td>
                  <td className="p-3 text-gray-600">{o}</td>
                  <td className="p-3 text-sky-700 font-medium">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 className="font-bold text-gray-800 mb-4">🗺️ Day 17 Roadmap</h3>
        <div className="space-y-3">
          {[
            { icon: '📋', title: 'Identifier Tables', desc: 'Format, columns, what to include, common mistakes' },
            { icon: '🪜', title: 'Stepwise Refinement', desc: 'Top-down design, numbered levels, when to stop refining' },
            { icon: '🏗️', title: 'Algorithm Design', desc: 'Converting refinement to full pseudocode, complete examples' },
            { icon: '❓', title: 'Exam FAQ', desc: 'Most common mistakes in Paper 2 design questions' },
            { icon: '✍️', title: 'Practice', desc: 'Library system, student grade system, shopping system' },
            { icon: '🧠', title: 'Quiz', desc: '12 questions on identifier tables and algorithm design' },
            { icon: '📋', title: 'Cheatsheet', desc: 'Complete reference and templates' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
