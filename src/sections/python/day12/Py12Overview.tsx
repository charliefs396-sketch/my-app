export default function Py12Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🗂️ Day 12: Records using Classes
      </h1>
      <p className="text-gray-500 text-lg mb-6">Python for A Level – Cambridge 9618</p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-emerald-800 mb-2">📌 What is a Record?</h2>
        <p className="text-emerald-700">A record groups related data together. In Pseudocode we use <code className="bg-emerald-100 px-1 rounded">TYPE...ENDTYPE</code>. In Python we use a <strong>class</strong> to do the same thing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <h3 className="font-bold text-indigo-700 mb-2">📝 Pseudocode</h3>
          <pre className="text-sm text-indigo-800 font-mono">{`TYPE StudentRecord
  DECLARE Name : STRING
  DECLARE Age : INTEGER
  DECLARE Mark : INTEGER
ENDTYPE

DECLARE s : StudentRecord
s.Name ← "Ali"
s.Age ← 17
s.Mark ← 85`}</pre>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h3 className="font-bold text-emerald-700 mb-2">🐍 Python</h3>
          <pre className="text-sm text-emerald-800 font-mono">{`class Student:
    def __init__(self):
        self.name = ""
        self.age = 0
        self.mark = 0

s = Student()
s.name = "Ali"
s.age = 17
s.mark = 85`}</pre>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { icon: '📦', title: 'class', desc: 'Blueprint for a record — like TYPE in pseudocode', color: 'bg-blue-50 border-blue-200 text-blue-700' },
          { icon: '🔧', title: '__init__', desc: 'Sets up the fields when a new record is created', color: 'bg-purple-50 border-purple-200 text-purple-700' },
          { icon: '🔗', title: 'self', desc: 'Refers to THIS specific record (like dot notation)', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
        ].map((item) => (
          <div key={item.title} className={`border rounded-xl p-4 ${item.color}`}>
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">📅 Day 12 Roadmap</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            '📦 Classes as Records — class, __init__, self',
            '📋 Array of Records — list of objects',
            '🔍 Search & Sort records',
            '❓ Exam FAQ',
            '✍️ Practice — BookRecord system',
            '🧠 Quiz — 12 questions',
            '📋 Cheatsheet',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-amber-700">
              <span className="w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
