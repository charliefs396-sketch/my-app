export default function D29Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        🏆 Day 29: Final Review
      </h1>
      <p className="text-gray-500 text-lg mb-6">Cambridge A Level Computer Science 9618 – All 28 Days in One!</p>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-yellow-800 mb-2">🎯 What is Day 29?</h3>
        <p className="text-yellow-700">This is your <strong>complete review</strong> of all 28 days. Every topic has an interesting practice question so you can test yourself before the real exam. Work through each section, try the questions yourself first, then check the solution!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { emoji: '📝', label: 'Days 1–5', topics: 'Variables, Operators, IF, Loops, Strings', color: 'bg-blue-50 border-blue-200' },
          { emoji: '📊', label: 'Days 6–10', topics: 'Arrays, Search, Sort, Functions', color: 'bg-purple-50 border-purple-200' },
          { emoji: '🏗️', label: 'Days 11–21', topics: 'Records, Files, ADTs, Design', color: 'bg-green-50 border-green-200' },
          { emoji: '🔬', label: 'Days 26–28', topics: 'Binary Search, Insertion Sort, Recursion', color: 'bg-red-50 border-red-200' },
        ].map((section) => (
          <div key={section.label} className={`${section.color} border rounded-xl p-4 text-center`}>
            <div className="text-3xl mb-2">{section.emoji}</div>
            <p className="font-bold text-gray-800 text-sm">{section.label}</p>
            <p className="text-xs text-gray-500 mt-1">{section.topics}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-3">📋 How to Use Day 29</h3>
        <div className="space-y-3">
          {[
            { step: '1', text: 'Read the quick summary of each topic', color: 'bg-blue-500' },
            { step: '2', text: 'Try the practice question YOURSELF first — no peeking!', color: 'bg-purple-500' },
            { step: '3', text: 'Check your answer against the solution', color: 'bg-green-500' },
            { step: '4', text: 'If you got it wrong, go back to that day and revise!', color: 'bg-red-500' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className={`w-7 h-7 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {item.step}
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="font-bold text-red-800 mb-2">⚡ Weak Spot Finder</h3>
        <p className="text-red-700 text-sm mb-3">Tick off topics you're confident with. Any you skip = go revise that day!</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {['Variables & Types', 'DIV and MOD', 'Nested IF', 'FOR/WHILE/REPEAT', 'String Functions', '1D Arrays', '2D Arrays', 'Linear Search', 'Bubble Sort', 'BYVAL vs BYREF', 'Records (TYPE)', 'File Handling', 'Stack (LIFO)', 'Queue (FIFO)', 'Linked Lists', 'Trace Tables', 'Identifier Tables', 'Structure Charts', 'Error Types', 'SDLC Models', 'State Diagrams', 'Binary Search', 'Insertion Sort', 'Recursion'].map((topic) => (
            <label key={topic} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-red-500" />
              <span className="text-gray-700">{topic}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
