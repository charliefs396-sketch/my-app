import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py12Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const items = [
    'I can define a class with __init__ and self',
    'I know that class = TYPE in pseudocode',
    'I can create a new object with ClassName()',
    'I can access fields using dot notation (s.name)',
    'I can create a list of objects',
    'I can input data into a list of records',
    'I can display all records with a for loop',
    'I can search records by a field',
    'I can sort records by a field using bubble sort',
    'I know return None means not found',
    'I use is not None to check search result',
    'I can swap two objects in one line',
  ];

  const completed = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Day 12 Cheatsheet</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-gray-800 mb-3">📦 Class Template</h3>
          <CodeBlock language="python" code={`class RecordName:
    def __init__(self):
        self.field1 = ""    # STRING
        self.field2 = 0     # INTEGER
        self.field3 = 0.0   # REAL

# Create one record
r = RecordName()
r.field1 = "value"
r.field2 = 42`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-3">📋 List of Records</h3>
          <CodeBlock language="python" code={`records = []

for i in range(n):
    r = RecordName()
    r.field1 = input("...")
    r.field2 = int(input("..."))
    records.append(r)

# Display all
for r in records:
    print(f"{r.field1}, {r.field2}")`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-3">🔍 Search Template</h3>
          <CodeBlock language="python" code={`def search(records, target):
    for r in records:
        if r.field1.lower() == target.lower():
            return r
    return None

result = search(records, "Ali")
if result is not None:
    print(f"Found: {result.field1}")
else:
    print("Not found")`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-3">📊 Sort Template</h3>
          <CodeBlock language="python" code={`def sort_by_field(records):
    n = len(records)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if records[j].field2 > records[j+1].field2:
                records[j], records[j+1] = records[j+1], records[j]

sort_by_field(records)`} />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">📊 Pseudocode vs Python Quick Reference</h3>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50"><th className="text-left p-2">Pseudocode</th><th className="text-left p-2">Python</th></tr></thead>
          <tbody>
            {[
              ['TYPE Student', 'class Student:'],
              ['DECLARE Name : STRING', 'self.name = ""'],
              ['ENDTYPE', '(end of __init__)'],
              ['DECLARE s : Student', 's = Student()'],
              ['s.Name <- "Ali"', 's.name = "Ali"'],
              ['ARRAY[1:30] OF Student', 'students = [] + append()'],
              ['IF Position <> -1', 'if result is not None:'],
            ].map(([ps, py]) => (
              <tr key={ps} className="border-t">
                <td className="p-2 font-mono text-indigo-600 text-xs">{ps}</td>
                <td className="p-2 font-mono text-emerald-600 text-xs">{py}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">✅ Confidence Checklist</h3>
          <span className="text-sm font-semibold text-emerald-600">{completed}/{items.length} complete</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(completed / items.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2">
              <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))} className="w-4 h-4 accent-emerald-500" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
