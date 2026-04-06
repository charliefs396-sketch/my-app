export default function D23Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📝 Day 23 – Past Paper Practice (Paper 2)
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge 9618 – Topical Past Paper Questions</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-1">How to Use This Day</h3>
            <p className="text-amber-700">This day is dedicated to past paper practice. Work through Paper 2 questions on the topics covered in Days 8–14.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {[
          { topic: 'Linear Search', days: 'Day 8', icon: '🔍', color: 'bg-blue-50 border-blue-200 text-blue-800' },
          { topic: 'Bubble Sort', days: 'Day 9', icon: '🫧', color: 'bg-violet-50 border-violet-200 text-violet-800' },
          { topic: 'Procedures and Functions', days: 'Day 10', icon: '🔧', color: 'bg-rose-50 border-rose-200 text-rose-800' },
          { topic: 'Records (TYPE)', days: 'Day 11', icon: '📋', color: 'bg-red-50 border-red-200 text-red-800' },
          { topic: 'File Handling', days: 'Day 12', icon: '📁', color: 'bg-orange-50 border-orange-200 text-orange-800' },
          { topic: 'Stacks (ADT)', days: 'Day 13', icon: '📚', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
          { topic: 'Queues (ADT)', days: 'Day 14', icon: '🎢', color: 'bg-sky-50 border-sky-200 text-sky-800' },
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

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-green-800 text-lg mb-3">✅ Where to Find Past Papers</h3>
        <ul className="space-y-2 text-green-700">
          <li>• <strong>Cambridge website</strong> – search "9618 past papers"</li>
          <li>• <strong>Papa Cambridge</strong> – papacambridge.com</li>
          <li>• <strong>Save My Exams</strong> – savemyexams.com</li>
          <li>• <strong>GCE Guide</strong> – gceguide.com</li>
        </ul>
      </div>
    </div>
  );
}
