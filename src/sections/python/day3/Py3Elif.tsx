import CodeBlock from '../../../components/CodeBlock';

export default function Py3Elif() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🪜 elif — Python's Superpower</h1>
      <p className="text-gray-500 mb-8">Handle multiple conditions cleanly — no nested nightmare!</p>

      {/* What is elif */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What is elif?</h2>
        <p className="text-gray-600 mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded font-mono text-emerald-700">elif</code> stands for 
          <strong> "else if"</strong>. It lets you check multiple conditions in sequence. 
          Python checks each one in order — the FIRST one that's True runs, then all the rest are skipped.
        </p>

        {/* The Grade Example */}
        <CodeBlock language="python" code={`mark = int(input("Enter your mark (0-100): "))

if mark >= 80:
    grade = "A"
elif mark >= 70:
    grade = "B"
elif mark >= 60:
    grade = "C"
elif mark >= 50:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")`} />

        {/* Step by step for mark = 73 */}
        <div className="mt-6 bg-blue-50 rounded-xl p-5">
          <h3 className="font-bold text-blue-800 mb-3">🎯 Step-by-step trace: mark = 73</h3>
          <div className="space-y-2">
            {[
              { check: 'mark >= 80', result: '73 >= 80 → False', action: 'Skip, move to elif', color: 'bg-red-100 text-red-700' },
              { check: 'mark >= 70', result: '73 >= 70 → True', action: 'grade = "B", STOP checking!', color: 'bg-green-100 text-green-700' },
              { check: 'mark >= 60', result: 'NEVER CHECKED', action: 'Already found True above', color: 'bg-gray-100 text-gray-500' },
              { check: 'mark >= 50', result: 'NEVER CHECKED', action: 'Already found True above', color: 'bg-gray-100 text-gray-500' },
              { check: 'else', result: 'NEVER RUNS', action: 'Because an elif was True', color: 'bg-gray-100 text-gray-500' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-mono text-sm bg-white px-3 py-1 rounded-lg border border-blue-100 min-w-[120px]">{row.check}</span>
                <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${row.color}`}>{row.result}</span>
                <span className="text-gray-600 text-sm">{row.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full trace table */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-3">📊 Full Trace Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-3 py-2 text-left rounded-tl-lg">mark</th>
                  <th className="px-3 py-2 text-left">&gt;=80</th>
                  <th className="px-3 py-2 text-left">&gt;=70</th>
                  <th className="px-3 py-2 text-left">&gt;=60</th>
                  <th className="px-3 py-2 text-left">&gt;=50</th>
                  <th className="px-3 py-2 text-left rounded-tr-lg">grade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: 95, a: 'T✓', b: '-', c: '-', d: '-', g: 'A' },
                  { m: 80, a: 'T✓', b: '-', c: '-', d: '-', g: 'A' },
                  { m: 73, a: 'F', b: 'T✓', c: '-', d: '-', g: 'B' },
                  { m: 61, a: 'F', b: 'F', c: 'T✓', d: '-', g: 'C' },
                  { m: 50, a: 'F', b: 'F', c: 'F', d: 'T✓', g: 'D' },
                  { m: 30, a: 'F', b: 'F', c: 'F', d: 'F', g: 'F (else)' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 font-mono border-b border-gray-100">{row.m}</td>
                    {[row.a, row.b, row.c, row.d].map((v, j) => (
                      <td key={j} className={`px-3 py-2 font-bold border-b border-gray-100 ${v === 'T✓' ? 'text-green-600' : v === '-' ? 'text-gray-300' : 'text-red-500'}`}>{v}</td>
                    ))}
                    <td className="px-3 py-2 font-bold text-emerald-600 border-b border-gray-100">{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">T✓ = True (this branch runs) · F = False (checked but skipped) · - = Never checked</p>
        </div>
      </div>

      {/* Python elif vs Pseudocode nested IF */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 elif vs Pseudocode Nested IF</h2>
        <p className="text-gray-600 mb-4">This is <strong>the biggest advantage Python has over pseudocode</strong>. Look how much cleaner elif is:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-indigo-600 font-bold text-sm mb-2">📝 Pseudocode — Nested nightmare</p>
            <CodeBlock language="pseudocode" code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      IF Mark >= 70
         THEN
            Grade ← "B"
         ELSE
            IF Mark >= 60
               THEN
                  Grade ← "C"
               ELSE
                  Grade ← "F"
            ENDIF
      ENDIF
ENDIF`} />
          </div>
          <div>
            <p className="text-emerald-600 font-bold text-sm mb-2">🐍 Python — Clean elif chain</p>
            <CodeBlock language="python" code={`if mark >= 80:
    grade = "A"
elif mark >= 70:
    grade = "B"
elif mark >= 60:
    grade = "C"
else:
    grade = "F"`} />
            <div className="mt-3 bg-emerald-50 rounded-xl p-3">
              <p className="text-emerald-700 text-sm font-semibold">✨ Same logic, half the lines!</p>
              <p className="text-emerald-600 text-xs mt-1">Python's elif replaces all those nested IF/ENDIF blocks</p>
            </div>
          </div>
        </div>
      </div>

      {/* elif rules */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📏 elif Rules</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { rule: 'You can have 0 to many elif blocks', ok: true },
            { rule: 'else at the end is optional', ok: true },
            { rule: 'Only ONE branch ever runs', ok: true },
            { rule: 'Order matters — check most restrictive first', ok: true },
            { rule: 'elif can appear without else', ok: true },
            { rule: 'else can appear without elif', ok: true },
          ].map((item) => (
            <div key={item.rule} className={`flex items-center gap-3 p-3 rounded-xl ${item.ok ? 'bg-green-50' : 'bg-red-50'}`}>
              <span className={`text-lg flex-shrink-0 ${item.ok ? 'text-green-500' : 'text-red-500'}`}>{item.ok ? '✅' : '❌'}</span>
              <p className="text-gray-700 text-sm">{item.rule}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real examples */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🌟 Real Examples</h2>

        <h3 className="font-bold text-gray-700 mb-2">BMI Calculator:</h3>
        <CodeBlock language="python" code={`bmi = float(input("Enter your BMI: "))

if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print(f"Category: {category}")`} />

        <h3 className="font-bold text-gray-700 mb-2 mt-6">Day of week:</h3>
        <CodeBlock language="python" code={`day = int(input("Enter day number (1-7): "))

if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("Invalid day number!")`} />
      </div>
    </div>
  );
}
