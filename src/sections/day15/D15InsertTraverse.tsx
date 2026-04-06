import CodeBlock from '../../components/CodeBlock';

export default function D15InsertTraverse() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">➕ Insert & Traverse</h1>
      <p className="text-gray-500 mb-6">The two most important linked list operations</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">➕ InsertAtStart — 5 Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
          {[
            { step: '1', title: 'Check full', desc: 'Is FreePointer = 0?', color: 'bg-red-50 border-red-200' },
            { step: '2', title: 'Take free node', desc: 'NewNode ← FreePointer', color: 'bg-orange-50 border-orange-200' },
            { step: '3', title: 'Update FreePointer', desc: 'FreePointer ← List[FreePointer].Pointer', color: 'bg-yellow-50 border-yellow-200' },
            { step: '4', title: 'Store data', desc: 'List[NewNode].Data ← NewData', color: 'bg-green-50 border-green-200' },
            { step: '5', title: 'Link to list', desc: 'List[NewNode].Pointer ← StartPointer\nStartPointer ← NewNode', color: 'bg-blue-50 border-blue-200' },
          ].map((s) => (
            <div key={s.step} className={`p-3 rounded-xl border-2 ${s.color}`}>
              <div className="text-2xl font-black text-gray-400 mb-1">{s.step}</div>
              <div className="font-bold text-gray-800 text-sm mb-1">{s.title}</div>
              <div className="text-xs text-gray-600 whitespace-pre-line">{s.desc}</div>
            </div>
          ))}
        </div>
        <CodeBlock code={`PROCEDURE InsertAtStart(BYVAL NewData : STRING)
   DECLARE NewNode : INTEGER
   IF FreePointer = 0
      THEN
         OUTPUT "List full"
      ELSE
         NewNode ← FreePointer                       // Step 2: claim free node
         FreePointer ← List[FreePointer].Pointer     // Step 3: advance free pointer
         List[NewNode].Data ← NewData                // Step 4: store data
         List[NewNode].Pointer ← StartPointer        // Step 5a: point to old start
         StartPointer ← NewNode                      // Step 5b: update start
   ENDIF
ENDPROCEDURE`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Trace: Inserting "A", "B", "C"</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-2">Operation</th>
                <th className="border border-gray-200 p-2">NewNode</th>
                <th className="border border-gray-200 p-2">FreePointer</th>
                <th className="border border-gray-200 p-2">StartPointer</th>
                <th className="border border-gray-200 p-2">List[1]</th>
                <th className="border border-gray-200 p-2">List[2]</th>
                <th className="border border-gray-200 p-2">List[3]</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Initial', '—', '1', '0', '—/2', '—/3', '—/4'],
                ['Insert "A"', '1', '2', '1', 'A/0', '—/3', '—/4'],
                ['Insert "B"', '2', '3', '2', 'A/0', 'B/1', '—/4'],
                ['Insert "C"', '3', '4', '3', 'A/0', 'B/1', 'C/2'],
              ].map(([op, nn, fp, sp, l1, l2, l3], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-semibold">{op}</td>
                  <td className="border border-gray-200 p-2 text-center">{nn}</td>
                  <td className="border border-gray-200 p-2 text-center text-purple-600 font-bold">{fp}</td>
                  <td className="border border-gray-200 p-2 text-center text-indigo-600 font-bold">{sp}</td>
                  <td className="border border-gray-200 p-2 text-center text-sm">{l1}</td>
                  <td className="border border-gray-200 p-2 text-center text-sm">{l2}</td>
                  <td className="border border-gray-200 p-2 text-center text-sm">{l3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">Format: Data/Pointer. After 3 inserts, list order is C→B→A (newest first). Traverse: StartPointer(3)→List[3]="C"→ptr=2→List[2]="B"→ptr=1→List[1]="A"→ptr=0(NULL)</p>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 DisplayAll — Traversal</h2>
        <CodeBlock code={`PROCEDURE DisplayAll()
   DECLARE Current : INTEGER
   Current ← StartPointer        // Start at the first node
   WHILE Current <> 0            // While not NULL
      OUTPUT List[Current].Data  // Print the data
      Current ← List[Current].Pointer  // Move to next node
   ENDWHILE
ENDPROCEDURE

// After inserting C, B, A above:
// Current=3 → output "C" → Current=2
// Current=2 → output "B" → Current=1  
// Current=1 → output "A" → Current=0
// Current=0 → WHILE ends`} language="pseudocode" />
        <div className="bg-indigo-50 rounded-xl p-4 mt-4">
          <h3 className="font-bold text-indigo-800 mb-2">💡 Why WHILE not FOR?</h3>
          <p className="text-sm text-indigo-700">We don't know how many nodes there are! WHILE Current &lt;&gt; 0 follows the pointer chain until it hits NULL (0). A FOR loop can't do this.</p>
        </div>
      </div>
    </div>
  );
}
