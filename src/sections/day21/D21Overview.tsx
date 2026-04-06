export default function D21Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔄 Day 21: State-Transition Diagrams
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – 9618 | Paper 2 Topic</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: '⭕', label: 'States', desc: 'Circles showing system conditions', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
          { icon: '➡️', label: 'Transitions', desc: 'Arrows between states', color: 'bg-purple-50 border-purple-200 text-purple-700' },
          { icon: '⚡', label: 'Events', desc: 'Labels that cause transitions', color: 'bg-pink-50 border-pink-200 text-pink-700' },
          { icon: '🎬', label: 'Actions', desc: 'What happens during transition', color: 'bg-amber-50 border-amber-200 text-amber-700' },
        ].map(item => (
          <div key={item.label} className={`border-2 rounded-xl p-4 ${item.color}`}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-lg">{item.label}</div>
            <div className="text-sm mt-1 opacity-80">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🤔 What is a State-Transition Diagram?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A <strong>state-transition diagram</strong> is a visual representation of a system that can be in different <strong>states</strong>. 
          It shows how the system moves from one state to another when certain <strong>events</strong> occur.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-blue-800 mb-2">📖 Exam-Ready Definition</h3>
          <p className="text-blue-700 text-sm">
            A state-transition diagram shows the <strong>states</strong> a system can be in, the <strong>events</strong> that cause the system to change state, 
            and the <strong>transitions</strong> (changes) between those states.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: '🚦 Traffic Light', states: 'Red, RedAmber, Green, Amber', event: 'Timer expires' },
            { title: '🔐 Login System', states: 'Locked, Attempt1, Attempt2, Unlocked, Blocked', event: 'Password entered' },
            { title: '🎰 Vending Machine', states: 'Idle, Selecting, Paying, Dispensing', event: 'Button pressed / coin inserted' },
          ].map(ex => (
            <div key={ex.title} className="bg-gray-50 rounded-xl p-4">
              <div className="font-bold text-gray-900 mb-2">{ex.title}</div>
              <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">States:</span> {ex.states}</div>
              <div className="text-xs text-gray-600"><span className="font-semibold">Event:</span> {ex.event}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Day 21 Roadmap</h2>
        <div className="space-y-3">
          {[
            { icon: '⭕', topic: 'States & Transitions', desc: 'The 4 components in detail with login system example' },
            { icon: '🚦', topic: 'Traffic Light System', desc: 'Full diagram + pseudocode conversion' },
            { icon: '🎰', topic: 'Vending Machine', desc: 'Complex diagram with multiple transitions' },
            { icon: '❓', topic: 'Exam FAQ', desc: '8 most common exam mistakes' },
            { icon: '✍️', topic: 'Practice', desc: '3 exercises with full solutions' },
            { icon: '📋', topic: 'Cheatsheet', desc: 'Everything on one page' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
              <div>
                <div className="font-semibold text-gray-900">{item.topic}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ Exam Warning</h3>
        <p className="text-amber-700 text-sm">
          State-transition diagrams appear in <strong>Paper 2</strong>. You may be asked to: draw a diagram, identify states/transitions, 
          add missing transitions, or convert a diagram to pseudocode. <strong>Always label your arrows with the event that causes the transition!</strong>
        </p>
      </div>
    </div>
  );
}
