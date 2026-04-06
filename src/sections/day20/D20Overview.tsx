export default function D20Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔄 Day 20: Program Development Life Cycle
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science – Cambridge 9618 | Paper 1 Theory</p>

      {/* Why it matters */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-amber-800 text-lg mb-2">⭐ Why This Topic Matters</h2>
        <p className="text-amber-900">
          SDLC (Software Development Life Cycle) appears in <strong>Paper 1 and Paper 2</strong> every year.
          You need to know the models, their stages, advantages, disadvantages, and the 3 types of maintenance.
          These are guaranteed marks if you memorise them properly!
        </p>
      </div>

      {/* 3 models overview */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 The 3 Models You Must Know</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="text-3xl mb-2">💧</div>
          <h3 className="font-bold text-blue-800 text-lg mb-2">Waterfall Model</h3>
          <p className="text-blue-700 text-sm mb-3">Linear, step-by-step approach. Each stage must be completed before the next begins.</p>
          <div className="text-xs font-semibold text-blue-600">Analysis → Design → Coding → Testing → Maintenance</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="text-3xl mb-2">🔁</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Iterative Model</h3>
          <p className="text-green-700 text-sm mb-3">Repeating cycles of building and refining prototypes based on feedback.</p>
          <div className="text-xs font-semibold text-green-600">Prototype → Test → Refine → Repeat</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-bold text-purple-800 text-lg mb-2">RAD Model</h3>
          <p className="text-purple-700 text-sm mb-3">Rapid Application Development — fast prototyping with constant user feedback.</p>
          <div className="text-xs font-semibold text-purple-600">Fast Prototype → User Feedback → Deliver</div>
        </div>
      </div>

      {/* Maintenance types */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔧 3 Types of Maintenance</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { type: 'Corrective', emoji: '🐛', desc: 'Fixing bugs and errors', example: 'Fix crash when entering invalid date', color: 'red' },
          { type: 'Adaptive', emoji: '🌍', desc: 'Adapting to new environment', example: 'Update for new OS version', color: 'blue' },
          { type: 'Perfective', emoji: '🚀', desc: 'Improving performance', example: 'Make search faster', color: 'green' },
        ].map(m => (
          <div key={m.type} className={`bg-${m.color}-50 border border-${m.color}-200 rounded-xl p-5`}>
            <div className="text-2xl mb-2">{m.emoji}</div>
            <h3 className={`font-bold text-${m.color}-800 mb-1`}>{m.type}</h3>
            <p className={`text-${m.color}-700 text-sm mb-2`}>{m.desc}</p>
            <p className={`text-xs text-${m.color}-600 italic`}>Example: {m.example}</p>
          </div>
        ))}
      </div>

      {/* Memory trick */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-indigo-800 mb-2">🧠 Memory Trick — CAP</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center"><span className="text-3xl font-black text-indigo-600">C</span><p className="text-sm text-indigo-700 font-semibold">Corrective</p><p className="text-xs text-gray-600">Fix bugs</p></div>
          <div className="text-center"><span className="text-3xl font-black text-indigo-600">A</span><p className="text-sm text-indigo-700 font-semibold">Adaptive</p><p className="text-xs text-gray-600">New environment</p></div>
          <div className="text-center"><span className="text-3xl font-black text-indigo-600">P</span><p className="text-sm text-indigo-700 font-semibold">Perfective</p><p className="text-xs text-gray-600">Better performance</p></div>
        </div>
      </div>

      {/* Day roadmap */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Day 20 Roadmap</h2>
      <div className="space-y-2">
        {[
          { icon: '💧', title: 'Life Cycle Models', desc: 'Waterfall, Iterative, RAD — stages, pros, cons, when to use' },
          { icon: '🔧', title: 'Maintenance Types', desc: 'Corrective, Adaptive, Perfective with real examples' },
          { icon: '❓', title: 'Exam FAQ', desc: 'Most common exam mistakes and how to avoid them' },
          { icon: '✍️', title: 'Practice', desc: 'Your 3 exact practice tasks with model answers' },
          { icon: '🧠', title: 'Quiz', desc: '12 questions to test your knowledge' },
          { icon: '📋', title: 'Cheatsheet', desc: 'Everything on one page for quick revision' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-lg hover:border-indigo-200 transition-colors">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
