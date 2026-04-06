export default function D30Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        🏆 Day 30: Final Exam Simulation
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science 9618 – Paper 2 Style</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-5">
          <div className="text-3xl mb-2">⏱️</div>
          <h3 className="font-bold text-gray-900 mb-1">Time: 2 Hours</h3>
          <p className="text-sm text-gray-600">Paper 2 is 2 hours long. That's 1.2 minutes per mark.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
          <div className="text-3xl mb-2">📝</div>
          <h3 className="font-bold text-gray-900 mb-1">100 Marks Total</h3>
          <p className="text-sm text-gray-600">4-6 questions. Each question has multiple parts.</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-bold text-gray-900 mb-1">Show All Working</h3>
          <p className="text-sm text-gray-600">Write clearly. Examiners can only mark what they can read!</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Paper 2 Topics Tested</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { topic: 'Pseudocode & Algorithms', days: 'Days 1-10' },
            { topic: 'Data Structures (Arrays, Records)', days: 'Days 6-7, 11' },
            { topic: 'Abstract Data Types (Stack, Queue, Linked List)', days: 'Days 13-15' },
            { topic: 'Searching & Sorting', days: 'Days 8-9, 26-27' },
            { topic: 'Recursion', days: 'Day 28' },
            { topic: 'File Handling', days: 'Day 12' },
            { topic: 'Trace Tables', days: 'Day 16' },
            { topic: 'Algorithm Design & Identifier Tables', days: 'Day 17' },
            { topic: 'Testing & Error Types', days: 'Day 19' },
            { topic: 'SDLC & Maintenance', days: 'Day 20' },
            { topic: 'State-Transition Diagrams', days: 'Day 21' },
            { topic: 'Structure Charts & Flowcharts', days: 'Day 18' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-800 text-sm">{item.topic}</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-semibold">{item.days}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⏰ Time Management Strategy</h2>
        <div className="space-y-3">
          {[
            { time: 'First 5 mins', action: 'Read ALL questions. Mark the ones you know best.', color: 'bg-green-100 text-green-800' },
            { time: '1.2 mins/mark', action: 'Spend proportional time. 10-mark question = 12 minutes max.', color: 'bg-blue-100 text-blue-800' },
            { time: 'Trace tables', action: 'Do these carefully — easy marks if you follow the code.', color: 'bg-purple-100 text-purple-800' },
            { time: 'Last 10 mins', action: 'Review. Check ENDIF, ENDWHILE, NEXT Counter etc.', color: 'bg-amber-100 text-amber-800' },
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ${tip.color}`}>{tip.time}</span>
              <p className="text-gray-700 text-sm">{tip.action}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h3 className="font-bold text-red-800 mb-3">🚨 Last-Minute Reminders</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'Use ← for assignment, = for comparison',
            'DECLARE every variable with its type',
            'Arrays are 1-indexed at A Level',
            'FUNCTION returns a value, PROCEDURE does not',
            'BYREF changes original, BYVAL does not',
            'Bubble Sort uses BYREF for the array',
            'Binary Search needs SORTED data',
            'Every IF needs THEN and ENDIF',
            'REPEAT runs at least once, WHILE might not',
            'Base case stops recursion — always check it',
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-red-800">
              <span className="text-red-500">⚠️</span> {r}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
