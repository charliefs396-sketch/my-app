export default function Py11Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🐍 Day 11: File Handling in Python
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618 | Python Track</p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '✍️', title: 'Write', desc: 'Create/overwrite files', color: 'bg-blue-50 border-blue-200 text-blue-700' },
          { icon: '📖', title: 'Read', desc: 'Read data from files', color: 'bg-green-50 border-green-200 text-green-700' },
          { icon: '➕', title: 'Append', desc: 'Add to existing files', color: 'bg-purple-50 border-purple-200 text-purple-700' },
        ].map((item) => (
          <div key={item.title} className={`p-4 rounded-xl border-2 ${item.color}`}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 File Modes — The 3 You MUST Know</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left font-bold">Mode</th>
                <th className="p-3 text-left font-bold">Python</th>
                <th className="p-3 text-left font-bold">Pseudocode</th>
                <th className="p-3 text-left font-bold">What it does</th>
                <th className="p-3 text-left font-bold">⚠️ Warning</th>
              </tr>
            </thead>
            <tbody>
              {[
                { mode: 'Write', py: '"w"', ps: 'FOR WRITE', what: 'Creates new / overwrites', warn: 'DELETES existing data!' },
                { mode: 'Read', py: '"r"', ps: 'FOR READ', what: 'Opens existing file', warn: 'Error if file missing' },
                { mode: 'Append', py: '"a"', ps: 'FOR APPEND', what: 'Adds to end of file', warn: 'Creates file if missing' },
              ].map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="p-3 font-bold">{row.mode}</td>
                  <td className="p-3 font-mono text-blue-600">{row.py}</td>
                  <td className="p-3 font-mono text-purple-600">{row.ps}</td>
                  <td className="p-3">{row.what}</td>
                  <td className="p-3 text-red-600 text-xs font-semibold">{row.warn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <h3 className="font-bold text-amber-800 mb-2">🌟 The with Keyword — Why It's Better</h3>
        <p className="text-amber-700 text-sm">Python's <code className="bg-amber-100 px-1 rounded">with open(...) as f:</code> automatically closes the file even if an error occurs. You NEVER need to call <code className="bg-amber-100 px-1 rounded">f.close()</code> manually. Always use <code className="bg-amber-100 px-1 rounded">with</code>!</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📅 Day 11 Roadmap</h2>
        <div className="space-y-2">
          {[
            { icon: '📖', label: 'Read & Write', desc: 'with open(), f.write(), f.read(), for line in f' },
            { icon: '📝', label: 'Process & Append', desc: 'CSV parsing, .strip(), .split(), append mode, delete pattern' },
            { icon: '❓', label: 'Exam FAQ', desc: 'Common mistakes and tricky questions' },
            { icon: '✍️', label: 'Practice', desc: '4 exercises: save, read, search, delete products' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions on file handling' },
            { icon: '📋', label: 'Cheatsheet', desc: 'All templates on one page' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
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
