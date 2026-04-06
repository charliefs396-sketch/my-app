export default function D22Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📝 Day 22 – Past Paper Practice (Paper 2)
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge 9618 – Topical Past Paper Questions</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-1">How to Use This Day</h3>
            <p className="text-amber-700">This day is dedicated to past paper practice. Use the Cambridge 9618 past papers and work through Paper 2 questions on the topics covered in Days 1–7.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        {[
          { topic: 'Variables, Data Types & Constants', days: 'Day 1', icon: '📦', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
          { topic: 'Operators & Type Conversions', days: 'Day 2', icon: '➕', color: 'bg-purple-50 border-purple-200 text-purple-800' },
          { topic: 'Selection – IF and CASE', days: 'Day 3', icon: '🔀', color: 'bg-pink-50 border-pink-200 text-pink-800' },
          { topic: 'Loops – FOR, WHILE, REPEAT', days: 'Day 4', icon: '🔁', color: 'bg-amber-50 border-amber-200 text-amber-800' },
          { topic: 'String Manipulation', days: 'Day 5', icon: '🔤', color: 'bg-green-50 border-green-200 text-green-800' },
          { topic: '1D Arrays', days: 'Day 6', icon: '📊', color: 'bg-teal-50 border-teal-200 text-teal-800' },
          { topic: '2D Arrays', days: 'Day 7', icon: '🗃️', color: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
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
