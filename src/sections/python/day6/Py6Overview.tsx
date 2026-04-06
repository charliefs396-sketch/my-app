import CodeBlock from '../../../components/CodeBlock';

export default function Py6Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        📋 Day 6: Lists (Arrays in Python)
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618 | Python Track</p>

      {/* What is a List */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 What is a List?</h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          A <strong>list</strong> in Python is like an array in pseudocode — it stores <strong>multiple values in one variable</strong>, accessed by index.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="font-bold text-indigo-700 mb-2">📝 Pseudocode</p>
            <code className="text-sm text-indigo-800">DECLARE Marks : ARRAY[1:5] OF INTEGER</code>
            <p className="text-xs text-indigo-600 mt-2">1-indexed, fixed size, must DECLARE type</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-700 mb-2">🐍 Python</p>
            <code className="text-sm text-emerald-800">marks = [0, 0, 0, 0, 0]</code>
            <p className="text-xs text-emerald-600 mt-2">0-indexed, flexible size, no type declaration</p>
          </div>
        </div>
      </div>

      {/* Key Differences */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Critical Differences from Pseudocode</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700 border-b">Feature</th>
                <th className="text-left p-3 font-bold text-indigo-700 border-b">Pseudocode Array</th>
                <th className="text-left p-3 font-bold text-emerald-700 border-b">Python List</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['First index', '1', '0'],
                ['Last index', 'Size', 'len(list) - 1'],
                ['Size', 'Fixed at declaration', 'Can grow/shrink'],
                ['Add item', 'Not possible (fixed)', '.append() or .insert()'],
                ['Remove item', 'Not possible', '.remove() or .pop()'],
                ['Mixed types', 'No — one type only', 'Yes — can mix types'],
                ['Built-in max/min', 'No', 'max(), min(), sum()'],
              ].map(([feat, pseudo, python]) => (
                <tr key={feat} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-700">{feat}</td>
                  <td className="p-3 text-indigo-700">{pseudo}</td>
                  <td className="p-3 text-emerald-700">{python}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Preview */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">👀 Quick Preview</h2>
        <CodeBlock language="python" code={`# Create a list
marks = [85, 72, 91, 63, 78]

# Access by index (0-indexed!)
print(marks[0])      # 85 (first)
print(marks[-1])     # 78 (last)

# Loop through
for mark in marks:
    print(mark)

# Built-in functions
print(max(marks))    # 91
print(min(marks))    # 63
print(sum(marks))    # 389
print(sum(marks) / len(marks))  # 77.8 average`} />
      </div>

      {/* Day 6 Roadmap */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Day 6 Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '📦', title: 'List Basics', desc: 'Create, access, modify lists' },
            { icon: '🔧', title: 'List Methods', desc: 'append, insert, remove, pop' },
            { icon: '🔄', title: 'Loops & Lists', desc: 'for loops, range(len()), enumerate' },
            { icon: '📊', title: 'List Operations', desc: 'max, min, average, search, sort' },
            { icon: '❓', title: 'Exam FAQ', desc: '8 common exam mistakes' },
            { icon: '✍️', title: 'Practice', desc: '4 exercises with full solutions' },
            { icon: '🧠', title: 'Quiz', desc: '12 questions with explanations' },
            { icon: '📋', title: 'Cheatsheet', desc: 'Complete reference' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Warning */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-5">
        <p className="font-bold text-red-700 text-lg mb-2">🚨 #1 Exam Mistake</p>
        <p className="text-red-700">Python lists are <strong>0-indexed</strong> but pseudocode arrays are <strong>1-indexed</strong>! The first element is <code className="bg-red-100 px-1 rounded">marks[0]</code> in Python but <code className="bg-red-100 px-1 rounded">Marks[1]</code> in pseudocode.</p>
      </div>
    </div>
  );
}
