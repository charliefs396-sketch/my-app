export default function D25Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📝 Day 25 – Past Paper Practice (Paper 2)
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge 9618 – Full Mixed Practice</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-1">Day 25 — Full Mixed Practice</h3>
            <p className="text-amber-700">Today you practice ALL topics from Days 19–21 plus a full mixed Paper 2 simulation. This is your final preparation before the advanced topics.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {[
          { topic: 'Testing & Test Data', days: 'Day 19', icon: '🐛', color: 'bg-red-50 border-red-200 text-red-800' },
          { topic: 'Program Development Life Cycle', days: 'Day 20', icon: '🔄', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
          { topic: 'State-Transition Diagrams', days: 'Day 21', icon: '⭕', color: 'bg-sky-50 border-sky-200 text-sky-800' },
          { topic: 'Full Mixed Paper 2 Simulation', days: 'All Days', icon: '📄', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
        ].map((item, i) => (
          <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold">{item.topic}</p>
                <p className="text-sm opacity-75">Covered in {item.days}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-indigo-800 text-lg mb-3">⏱️ Timed Simulation Tips</h3>
        <ol className="space-y-2 text-indigo-700">
          <li className="flex items-start gap-2"><span className="font-bold">1.</span> Paper 2 is 2 hours — allocate 1 mark = 1 minute</li>
          <li className="flex items-start gap-2"><span className="font-bold">2.</span> Always attempt every question — never leave blank</li>
          <li className="flex items-start gap-2"><span className="font-bold">3.</span> For trace tables — use a ruler and show every step</li>
          <li className="flex items-start gap-2"><span className="font-bold">4.</span> For pseudocode — use correct keywords (DECLARE, THEN, ENDIF etc.)</li>
          <li className="flex items-start gap-2"><span className="font-bold">5.</span> Check your work — look for missing ENDIFs, wrong operators</li>
        </ol>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-green-800 text-lg mb-3">✅ After Practice Checklist</h3>
        <ul className="space-y-2 text-green-700">
          <li>☐ Marked all answers against mark scheme</li>
          <li>☐ Identified weak topics to revisit</li>
          <li>☐ Reviewed all lost marks</li>
          <li>☐ Redone all incorrect questions</li>
          <li>☐ Ready for advanced topics (Days 26–30)</li>
        </ul>
      </div>
    </div>
  );
}
