import CodeBlock from '../../components/CodeBlock';

export default function D18Converting() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🔄 Converting Between Representations</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-blue-700 text-sm"><strong>Three representations of the same algorithm:</strong> Pseudocode ↔ Flowchart ↔ Structure Chart. The exam will ask you to convert between them. Learn the mapping rules!</p>
      </div>

      {/* Pseudocode to Flowchart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">📝 → 🔷 Pseudocode to Flowchart Rules</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="text-left p-3 font-bold text-indigo-800 border border-indigo-200">Pseudocode</th>
                <th className="text-left p-3 font-bold text-indigo-800 border border-indigo-200">Flowchart Shape</th>
                <th className="text-left p-3 font-bold text-indigo-800 border border-indigo-200">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['INPUT x', 'Parallelogram', '/ INPUT x /'],
                ['OUTPUT "Hello"', 'Parallelogram', '/ OUTPUT "Hello" /'],
                ['x ← 5', 'Rectangle', '[ x ← 5 ]'],
                ['Total ← Total + 1', 'Rectangle', '[ Total ← Total + 1 ]'],
                ['IF x > 0', 'Diamond', '◇ x > 0? ◇ with YES/NO'],
                ['FOR i ← 1 TO 10', 'Diamond + back arrow', '◇ i <= 10? ◇'],
                ['WHILE condition', 'Diamond before process', '◇ condition? ◇ at top'],
                ['REPEAT...UNTIL', 'Diamond after process', '◇ condition? ◇ at bottom'],
                ['CALL Procedure()', 'Rectangle (sometimes predefined process ▭)', '[ CALL Procedure() ]'],
              ].map(([pseudo, shape, example], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-mono text-purple-600 border border-gray-200">{pseudo}</td>
                  <td className="p-3 text-gray-700 border border-gray-200">{shape}</td>
                  <td className="p-3 font-mono text-green-600 text-xs border border-gray-200">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full conversion example */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">✅ Full Conversion Example: Password Checker</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-purple-600 mb-2 text-sm">📝 Pseudocode:</p>
            <CodeBlock language="pseudocode" code={`DECLARE Password : STRING
DECLARE Attempts : INTEGER
Attempts ← 0

REPEAT
   OUTPUT "Enter password: "
   INPUT Password
   Attempts ← Attempts + 1
UNTIL Password = "secret" OR Attempts = 3

IF Password = "secret"
   THEN
      OUTPUT "Access granted"
   ELSE
      OUTPUT "Account locked"
ENDIF`} />
          </div>
          <div>
            <p className="font-semibold text-blue-600 mb-2 text-sm">🔷 Flowchart:</p>
            <div className="bg-slate-900 rounded-xl p-3 font-mono text-xs text-green-300">
              <pre>{`
╔══════════╗
║  START   ║
╚════╤═════╝
     │
╔════╧════════════╗
║ Attempts ← 0   ║
╚════╤════════════╝
     │
╔════╧════════════════╗
║ OUTPUT"Enter pass:" ║
╚════╤════════════════╝
     │
╔════╧════════════╗
║ INPUT Password  ║
╚════╤════════════╝
     │
╔════╧══════════════════╗
║Attempts←Attempts + 1  ║
╚════╤══════════════════╝
     │
◇────┴─────────────────◇
│Pass="secret"          │
│OR Attempts=3?         │
◇───────────────────────◇
│NO              │YES
└→(back to       │
   OUTPUT)    ◇──┴──────────◇
              │Pass="secret"?│
              ◇──────────────◇
           YES│          NO│
╔═════════════╧╗  ╔════════╧═══════╗
║OUTPUT"Access"║  ║OUTPUT"Locked"  ║
╚═════════════╤╝  ╚════════╤═══════╝
              └─────┬───────┘
                    │
              ╔═════╧═════╗
              ║   STOP    ║
              ╚═══════════╝`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Flowchart to Pseudocode */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">🔷 → 📝 Flowchart to Pseudocode Rules</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { from: 'Parallelogram', to: 'INPUT x  OR  OUTPUT x', color: 'bg-blue-50 border-blue-200', tc: 'text-blue-800' },
            { from: 'Rectangle', to: 'Assignment: x ← value  OR  CALL Procedure()', color: 'bg-purple-50 border-purple-200', tc: 'text-purple-800' },
            { from: 'Diamond with back arrow going UP', to: 'WHILE condition  or  REPEAT...UNTIL', color: 'bg-amber-50 border-amber-200', tc: 'text-amber-800' },
            { from: 'Diamond with two forward paths', to: 'IF...THEN...ELSE...ENDIF', color: 'bg-green-50 border-green-200', tc: 'text-green-800' },
            { from: 'Back arrow goes to BEFORE diamond', to: 'WHILE loop (condition checked first)', color: 'bg-rose-50 border-rose-200', tc: 'text-rose-800' },
            { from: 'Back arrow goes to BEFORE process box', to: 'REPEAT...UNTIL loop (condition checked after)', color: 'bg-teal-50 border-teal-200', tc: 'text-teal-800' },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg border ${item.color}`}>
              <p className={`font-bold text-sm ${item.tc}`}>🔷 {item.from}</p>
              <p className={`text-xs mt-1 ${item.tc} opacity-80`}>→ Pseudocode: <span className="font-mono">{item.to}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="font-bold text-red-800 mb-2">⚠️ Common Exam Mistakes</h3>
        <div className="space-y-2 text-sm text-red-700">
          <p>• Using a rectangle for INPUT/OUTPUT instead of a parallelogram ❌</p>
          <p>• Forgetting to label YES and NO on diamonds ❌</p>
          <p>• Missing STOP at the end ❌</p>
          <p>• Using arrows without direction markers ❌</p>
          <p>• Putting a WHILE condition in a rectangle instead of a diamond ❌</p>
        </div>
      </div>
    </div>
  );
}
