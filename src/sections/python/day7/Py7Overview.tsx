import CodeBlock from '../../../components/CodeBlock';

export default function Py7Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🗂️ Day 7: 2D Lists
      </h1>
      <p className="text-gray-500 text-lg mb-8">Python for A Level Computer Science – Cambridge 9618</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '🏗️', title: 'Create', desc: 'Make 2D lists with list comprehension', color: 'bg-emerald-50 border-emerald-200' },
          { icon: '🔢', title: 'Access', desc: 'Use [row][col] to read and write values', color: 'bg-teal-50 border-teal-200' },
          { icon: '🔁', title: 'Process', desc: 'Nested loops for rows and columns', color: 'bg-cyan-50 border-cyan-200' },
        ].map((card, i) => (
          <div key={i} className={`${card.color} border rounded-xl p-5`}>
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 What is a 2D List?</h2>
        <p className="text-gray-700 mb-4">A 2D list is a <strong>list of lists</strong> — like a table or spreadsheet with rows and columns.</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-teal-50">
                <th className="border border-teal-200 px-3 py-2">Row\Col</th>
                {[0,1,2,3].map(c => <th key={c} className="border border-teal-200 px-3 py-2">Col {c}</th>)}
              </tr>
            </thead>
            <tbody>
              {[['marks[0]',85,72,91,68],['marks[1]',73,88,65,79],['marks[2]',92,61,84,77]].map((row, i) => (
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`border border-gray-200 px-3 py-2 text-center font-mono ${j===0?'font-bold text-teal-700':''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">Access: <code className="bg-gray-100 px-1 rounded">marks[1][2]</code> = Row 1, Col 2 = <strong>65</strong></p>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Pseudocode vs Python</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">Pseudocode</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Python</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['DECLARE Marks : ARRAY[1:3, 1:4] OF INTEGER', 'marks = [[0]*4 for _ in range(3)]'],
                ['Marks[1, 2] ← 85', 'marks[0][1] = 85'],
                ['1-indexed (starts at 1)', '0-indexed (starts at 0)'],
                ['FOR Row ← 1 TO 3', 'for row in range(3):'],
                ['FOR Col ← 1 TO 4', '    for col in range(4):'],
              ].map(([ps, py], i) => (
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-mono text-indigo-700 text-xs">{ps}</td>
                  <td className="border border-gray-200 px-4 py-2 font-mono text-emerald-700 text-xs">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-red-800 mb-2">⚠️ #1 Exam Mistake</h3>
        <p className="text-red-700 text-sm mb-2">NEVER create a 2D list like this:</p>
        <CodeBlock code={`# WRONG! All rows share the same list object
marks = [[0] * 4] * 3
marks[0][0] = 99
print(marks)  # [[99,0,0,0],[99,0,0,0],[99,0,0,0]] ALL changed!

# CORRECT! Each row is a separate list
marks = [[0] * 4 for _ in range(3)]
marks[0][0] = 99
print(marks)  # [[99,0,0,0],[0,0,0,0],[0,0,0,0]] Only row 0 changed!`} language="python" />
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🗺️ Day 7 Roadmap</h2>
        <div className="space-y-2">
          {[
            { icon: '🗂️', label: 'Overview', desc: 'What 2D lists are — you are here!' },
            { icon: '🏗️', label: 'List Comprehension', desc: 'Creating 2D lists correctly' },
            { icon: '🔁', label: 'Nested Loops', desc: 'Processing rows and columns' },
            { icon: '❓', label: 'Exam FAQ', desc: 'Common mistakes and how to avoid them' },
            { icon: '✍️', label: 'Practice', desc: 'Multiplication table, row/column max' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions on 2D lists' },
            { icon: '📋', label: 'Cheatsheet', desc: 'Full reference and templates' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">{item.icon}</span>
              <div>
                <span className="font-semibold text-gray-900">{item.label}</span>
                <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
