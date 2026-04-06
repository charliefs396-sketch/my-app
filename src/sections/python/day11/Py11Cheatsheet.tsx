import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py11Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const total = 12;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">📋 Day 11 Cheatsheet — File Handling</h2>

      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {[
          { mode: '"w"', label: 'Write', desc: 'Create/Overwrite', color: 'bg-red-100 text-red-700 border-red-200' },
          { mode: '"r"', label: 'Read', desc: 'Read existing', color: 'bg-blue-100 text-blue-700 border-blue-200' },
          { mode: '"a"', label: 'Append', desc: 'Add to end', color: 'bg-green-100 text-green-700 border-green-200' },
        ].map(m => (
          <div key={m.mode} className={`p-3 rounded-xl border-2 ${m.color} text-center`}>
            <p className="font-black text-2xl font-mono">{m.mode}</p>
            <p className="font-bold">{m.label}</p>
            <p className="text-xs opacity-75">{m.desc}</p>
          </div>
        ))}
      </div>

      <CodeBlock language="python" code={`# WRITE (create/overwrite)
with open("file.txt", "w") as f:
    f.write(f"{value1},{value2}\\n")`} />

      <CodeBlock language="python" code={`# READ (loop through lines)
with open("file.txt", "r") as f:
    for line in f:
        parts = line.strip().split(",")
        value1 = parts[0]
        value2 = int(parts[1])    # convert if needed`} />

      <CodeBlock language="python" code={`# APPEND (add to end)
with open("file.txt", "a") as f:
    f.write(f"{value1},{value2}\\n")`} />

      <CodeBlock language="python" code={`# SEARCH for a record
def search(filename, target):
    with open(filename, "r") as f:
        for line in f:
            parts = line.strip().split(",")
            if parts[0].lower() == target.lower():
                return parts[1]    # Found!
    return -1                       # Not found`} />

      <CodeBlock language="python" code={`# DELETE a record
def delete(filename, target):
    with open(filename, "r") as f:
        lines = f.readlines()
    kept = [l for l in lines if l.strip().split(",")[0].lower() != target.lower()]
    with open(filename, "w") as f:
        f.writelines(kept)`} />

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-bold text-gray-900 mb-3">⚠️ Common Mistakes</h3>
        <div className="space-y-2">
          {[
            ['Using "w" to add more data', 'Use "a" to append'],
            ['Forgetting .strip() when reading', 'Always strip before split'],
            ['Not converting strings to int/float', 'Use int() or float() after reading'],
            ['Trying to delete directly from file', 'Read → filter → write back'],
            ['Forgetting \\n when writing', 'Always end with f.write("...\\n")'],
          ].map(([wrong, fix], i) => (
            <div key={i} className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-red-50 p-2 rounded text-red-700">❌ {wrong}</div>
              <div className="bg-green-50 p-2 rounded text-green-700">✅ {fix}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">✅ Confidence Checklist</h3>
          <span className="text-sm font-bold text-emerald-600">{done}/{total} done</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: `${(done / total) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            'I know what "w", "r", "a" modes do',
            'I always use with open() syntax',
            'I know "w" overwrites existing data',
            'I use .strip() before processing lines',
            'I use .split(",") to parse CSV data',
            'I convert strings to int/float after reading',
            'I can write data to a file with f.write()',
            'I can loop through file lines with for line in f',
            'I can search for a record in a file',
            'I can append new records to a file',
            'I know the delete pattern (read → filter → write)',
            'I can build a complete file CRUD system',
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="w-4 h-4 accent-emerald-500" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
