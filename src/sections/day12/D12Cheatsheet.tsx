import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D12Cheatsheet() {
  const [checked, setChecked] = useState<boolean[]>(Array(12).fill(false));
  const toggle = (i: number) => { const n = [...checked]; n[i] = !n[i]; setChecked(n); };
  const checklist = [
    "I know the 3 file modes: FOR READ, FOR WRITE, FOR APPEND",
    "I always use OPENFILE before reading or writing",
    "I always use CLOSEFILE when finished",
    "I know FOR WRITE overwrites all existing data",
    "I know FOR APPEND adds to the end safely",
    "I use WHILE NOT EOF for reading all lines",
    "I use NUM_TO_STR() when writing numbers to a file",
    "I can write multiple fields to one line using &",
    "I can read lines from a file into a STRING variable",
    "I can count the number of lines in a file",
    "I can search a file for a specific record",
    "I can append a new record to an existing file",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — File Handling</h1>
      <p className="text-gray-500 mb-6">Everything you need for the exam on one page</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Write to File</h3>
          <CodeBlock code={`OPENFILE "file.txt" FOR WRITE
WRITEFILE "file.txt", DataString
CLOSEFILE "file.txt"`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Read All Lines</h3>
          <CodeBlock code={`DECLARE Line : STRING
OPENFILE "file.txt" FOR READ
WHILE NOT EOF("file.txt")
   READFILE "file.txt", Line
   OUTPUT Line
ENDWHILE
CLOSEFILE "file.txt"`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Append to File</h3>
          <CodeBlock code={`OPENFILE "file.txt" FOR APPEND
WRITEFILE "file.txt", NewData
CLOSEFILE "file.txt"`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Save Record as CSV</h3>
          <CodeBlock code={`WRITEFILE "file.txt",
   Record.ID & "," &
   Record.Name & "," &
   NUM_TO_STR(Record.Mark)`} />
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-3">📊 File Modes Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="text-left p-2">Mode</th><th className="text-left p-2">Creates file?</th><th className="text-left p-2">Keeps existing data?</th><th className="text-left p-2">Use for</th></tr></thead>
            <tbody>
              {[
                ["FOR READ", "No", "Yes (read only)", "Reading data"],
                ["FOR WRITE", "Yes", "No (overwrites!)", "First time saving"],
                ["FOR APPEND", "No (file must exist)", "Yes", "Adding new records"],
              ].map(([mode, creates, keeps, use], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="p-2 font-mono text-indigo-600 font-bold">{mode}</td>
                  <td className="p-2 text-gray-600">{creates}</td>
                  <td className="p-2 text-gray-600">{keeps}</td>
                  <td className="p-2 text-gray-600">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 className="font-bold text-gray-800 mb-4">✅ Confidence Checklist</h3>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <div onClick={() => toggle(i)} className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${checked[i] ? 'bg-green-500 border-green-500' : 'border-gray-300 group-hover:border-green-400'}`}>
                {checked[i] && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className={`text-sm ${checked[i] ? 'text-green-700 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-xl">
          <p className="text-sm font-semibold text-gray-600">{checked.filter(Boolean).length}/{checklist.length} completed</p>
          <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all" style={{ width: `${(checked.filter(Boolean).length / checklist.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
