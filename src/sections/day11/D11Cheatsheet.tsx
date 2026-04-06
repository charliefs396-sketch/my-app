import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D11Cheatsheet() {
  const [checked, setChecked] = useState<boolean[]>(Array(12).fill(false));
  const toggle = (i: number) => { const n = [...checked]; n[i] = !n[i]; setChecked(n); };
  const checklist = [
    "I can define a record type using TYPE...ENDTYPE",
    "I use DECLARE inside TYPE for each field",
    "I can declare a variable of a record type",
    "I use dot notation to access fields (Variable.Field)",
    "I can input data into record fields",
    "I can declare an array of records",
    "I use Students[i].Field to access fields in array of records",
    "I can search an array of records by field value",
    "I can find the maximum/minimum by field value",
    "I use DECLARE Temp : RecordType when swapping records",
    "I know TYPE definition must come before variable declarations",
    "I can sort records by a field using bubble sort",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Records (TYPE)</h1>
      <p className="text-gray-500 mb-6">Everything you need for the exam on one page</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Define a Record Type</h3>
          <CodeBlock code={`TYPE RecordName
   DECLARE Field1 : TYPE1
   DECLARE Field2 : TYPE2
   DECLARE Field3 : TYPE3
ENDTYPE`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Declare & Use</h3>
          <CodeBlock code={`DECLARE Var : RecordName
Var.Field1 ← value1
INPUT Var.Field2
OUTPUT Var.Field3`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Array of Records</h3>
          <CodeBlock code={`DECLARE Items : ARRAY[1:N] OF RecordName
FOR i ← 1 TO N
   INPUT Items[i].Field1
   INPUT Items[i].Field2
NEXT i`} />
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-3">Swap Records</h3>
          <CodeBlock code={`DECLARE Temp : RecordName
Temp     ← Items[j]
Items[j] ← Items[j+1]
Items[j+1] ← Temp`} />
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-3">⚠️ Common Mistakes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="text-left p-2">Wrong</th><th className="text-left p-2">Correct</th><th className="text-left p-2">Why</th></tr></thead>
            <tbody>
              {[
                ["Student[Name]", "Student.Name", "Use dot not brackets for fields"],
                ["StudentRecord.Name", "Student.Name", "Use variable name not type name"],
                ["DECLARE Temp : STRING", "DECLARE Temp : StudentRecord", "Temp must match record type"],
                ["Missing ENDTYPE", "Always close with ENDTYPE", "ENDTYPE is required"],
              ].map(([w, c, why], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="p-2 text-red-600 font-mono">{w}</td>
                  <td className="p-2 text-green-600 font-mono">{c}</td>
                  <td className="p-2 text-gray-500">{why}</td>
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
            <div className="h-full bg-gradient-to-r from-red-500 to-rose-600 rounded-full transition-all" style={{ width: `${(checked.filter(Boolean).length / checklist.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
