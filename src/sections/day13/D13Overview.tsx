export default function D13Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📚 Day 13: Stacks
      </h1>
      <p className="text-gray-500 text-lg mb-8">Abstract Data Types – Cambridge A Level 9618</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-800 mb-3">🧠 What is an Abstract Data Type?</h2>
        <p className="text-gray-700 mb-3">An <strong>Abstract Data Type (ADT)</strong> is a data structure defined by its <strong>behaviour</strong> (what it does) rather than how it is implemented internally.</p>
        <p className="text-gray-700">A <strong>Stack</strong> is one of the most important ADTs. It works like a pile of plates — you can only add or remove from the TOP.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="font-bold text-indigo-700 text-lg mb-4">🥞 Real World Analogy</h3>
          <div className="space-y-2">
            {[
              { icon: '🍽️', text: 'Stack of plates — add/remove from top only' },
              { icon: '📚', text: 'Stack of books — last book placed is first taken' },
              { icon: '↩️', text: 'Undo button in software uses a stack' },
              { icon: '🌐', text: 'Browser back button uses a stack' },
              { icon: '📞', text: 'Function calls in programs use a stack' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-indigo-50 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
          <h3 className="font-bold text-purple-700 text-lg mb-4">📋 Key Terminology</h3>
          <div className="space-y-3">
            {[
              { term: 'LIFO', def: 'Last In First Out — the fundamental rule', color: 'bg-red-100 text-red-700' },
              { term: 'Push', def: 'Add an item to the TOP of the stack', color: 'bg-green-100 text-green-700' },
              { term: 'Pop', def: 'Remove an item from the TOP of the stack', color: 'bg-blue-100 text-blue-700' },
              { term: 'Peek', def: 'Look at the top item WITHOUT removing it', color: 'bg-yellow-100 text-yellow-700' },
              { term: 'Overflow', def: 'Trying to Push when stack is FULL', color: 'bg-red-100 text-red-700' },
              { term: 'Underflow', def: 'Trying to Pop when stack is EMPTY', color: 'bg-orange-100 text-orange-700' },
              { term: 'TopPointer', def: 'Integer that tracks where the top is', color: 'bg-purple-100 text-purple-700' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`px-2 py-0.5 rounded font-bold text-xs ${item.color} whitespace-nowrap mt-0.5`}>{item.term}</span>
                <span className="text-gray-600 text-sm">{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Stack Diagram */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4">🎨 Visual: How a Stack Works</h3>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {[
            { label: 'Empty Stack', items: [], top: 0 },
            { label: 'After Push("A")', items: ['A'], top: 1 },
            { label: 'After Push("B")', items: ['A', 'B'], top: 2 },
            { label: 'After Push("C")', items: ['A', 'B', 'C'], top: 3 },
            { label: 'After Pop() → "C"', items: ['A', 'B'], top: 2 },
          ].map((state, si) => (
            <div key={si} className="flex flex-col items-center">
              <p className="text-xs font-bold text-gray-600 mb-2 text-center">{state.label}</p>
              <div className="w-16 border-2 border-gray-300 rounded-lg overflow-hidden">
                {[...Array(4)].map((_, i) => {
                  const itemIndex = i;
                  const item = state.items[3 - itemIndex] || null;
                  const isTop = state.items.length > 0 && (3 - itemIndex) === state.items.length - 1;
                  return (
                    <div key={i} className={`h-10 border-b border-gray-200 flex items-center justify-center text-sm font-bold ${
                      item ? (isTop ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-700') : 'bg-gray-50 text-gray-300'
                    }`}>
                      {item || '·'}
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 text-xs text-center">
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold">
                  Top={state.top}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">🔵 Blue = current top item | TopPointer tracks position</p>
      </div>

      {/* Day Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-indigo-800 text-lg mb-4">📅 What You'll Learn Today</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '🔧', label: 'Stack Implementation', desc: 'Using arrays + TopPointer' },
            { icon: '📤', label: 'Push Procedure', desc: 'Add to top, check for overflow' },
            { icon: '📥', label: 'Pop Function', desc: 'Remove from top, check for underflow' },
            { icon: '👁️', label: 'Peek Function', desc: 'Look at top without removing' },
            { icon: '📋', label: 'Trace Tables', desc: 'Step-by-step stack operations' },
            { icon: '💡', label: 'Applications', desc: 'Reversing strings, undo systems' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-indigo-100">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-amber-800 font-bold text-sm">⚠️ A Level Exam Note</p>
        <p className="text-amber-700 text-sm mt-1">Stacks appear in <strong>Paper 1 (theory)</strong> and <strong>Paper 2 (problem solving)</strong>. You need to be able to WRITE the Push/Pop procedures AND trace through operations on paper. This is a guaranteed topic!</p>
      </div>
    </div>
  );
}
