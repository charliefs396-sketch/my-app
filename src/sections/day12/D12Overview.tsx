import CodeBlock from '../../components/CodeBlock';

export default function D12Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-3">
        📁 Day 12: File Handling
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618</p>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-orange-800 mb-3">Why Do We Need Files?</h2>
        <p className="text-orange-700 mb-4">
          Variables only store data while a program is running. When the program ends, all data is <strong>lost</strong>.
          Files let us <strong>save data permanently</strong> on storage — so it survives after the program closes.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '📖', mode: 'FOR READ', desc: 'Opens existing file to read data from it' },
            { icon: '✏️', mode: 'FOR WRITE', desc: 'Creates new file (overwrites existing!)' },
            { icon: '➕', mode: 'FOR APPEND', desc: 'Adds data to end of existing file' },
          ].map(item => (
            <div key={item.mode} className="bg-white rounded-xl p-4 border border-orange-100 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <code className="text-orange-600 font-bold text-sm">{item.mode}</code>
              <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">The 4 File Commands</h2>
        <div className="space-y-3">
          {[
            { cmd: 'OPENFILE "file.txt" FOR READ/WRITE/APPEND', desc: 'Opens a file — MUST do this before anything else' },
            { cmd: 'WRITEFILE "file.txt", Data', desc: 'Writes data to the file (WRITE or APPEND mode)' },
            { cmd: 'READFILE "file.txt", Variable', desc: 'Reads one line from the file into Variable (READ mode)' },
            { cmd: 'CLOSEFILE "file.txt"', desc: 'Closes the file — MUST do this when finished' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-3">
              <code className="text-indigo-600 font-bold text-sm whitespace-nowrap">{item.cmd}</code>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Example</h2>
        <CodeBlock code={`// Write to file
OPENFILE "students.txt" FOR WRITE
WRITEFILE "students.txt", "Ali,85,A"
CLOSEFILE "students.txt"

// Read from file
DECLARE Line : STRING
OPENFILE "students.txt" FOR READ
WHILE NOT EOF("students.txt")
   READFILE "students.txt", Line
   OUTPUT Line
ENDWHILE
CLOSEFILE "students.txt"`} />
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="font-bold text-red-700">⚠️ The #1 Mistake — WRITE vs APPEND</p>
        <p className="text-red-700 text-sm mt-1">
          <strong>FOR WRITE</strong> creates a brand new file every time — it <strong>deletes all existing data!</strong><br />
          <strong>FOR APPEND</strong> adds to the end of the file — existing data is kept safe.<br />
          If you want to ADD a new record without losing the old ones, always use APPEND!
        </p>
      </div>
    </div>
  );
}
