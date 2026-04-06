export default function D24Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📝 Day 24 – Past Paper Practice (Paper 2)
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge 9618 – Topical Past Paper Questions</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-1">How to Use This Day</h3>
            <p className="text-amber-700">This day is dedicated to past paper practice. Work through Paper 2 questions on the topics covered in Days 15–18.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {[
          { topic: 'Linked Lists', days: 'Day 15', icon: '🔗', color: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-800' },
          { topic: 'Trace Tables', days: 'Day 16', icon: '📊', color: 'bg-lime-50 border-lime-200 text-lime-800' },
          { topic: 'Identifier Tables & Algorithm Design', days: 'Day 17', icon: '📋', color: 'bg-amber-50 border-amber-200 text-amber-800' },
          { topic: 'Structure Charts & Flowcharts', days: 'Day 18', icon: '📐', color: 'bg-pink-50 border-pink-200 text-pink-800' },
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

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-blue-800 text-lg mb-3">📋 Practice Strategy</h3>
        <ol className="space-y-2 text-blue-700">
          <li className="flex items-start gap-2"><span className="font-bold">1.</span> Do the question under timed conditions (1 mark ≈ 1 minute)</li>
          <li className="flex items-start gap-2"><span className="font-bold">2.</span> Check your answer against the mark scheme</li>
          <li className="flex items-start gap-2"><span className="font-bold">3.</span> For every mark lost — go back to that day's content and review</li>
          <li className="flex items-start gap-2"><span className="font-bold">4.</span> Redo the question without looking at the answer</li>
        </ol>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="font-bold text-purple-800 text-lg mb-3">🎯 Focus Areas for Paper 2</h3>
        <ul className="space-y-2 text-purple-700">
          <li>• <strong>Trace tables</strong> — always show your working step by step</li>
          <li>• <strong>Structure charts</strong> — label arrows with parameter names and direction</li>
          <li>• <strong>Linked lists</strong> — draw the array showing Data and Pointer columns</li>
          <li>• <strong>Algorithm design</strong> — use correct pseudocode syntax for full marks</li>
        </ul>
      </div>
    </div>
  );
}
