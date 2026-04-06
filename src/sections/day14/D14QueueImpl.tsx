import CodeBlock from '../../components/CodeBlock';

export default function D14QueueImpl() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔧 Queue Implementation</h1>
      <p className="text-gray-500 mb-6">Declaration, Enqueue and Dequeue with full traces</p>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📦 Declaration & Initialisation</h2>
      <CodeBlock language="pseudocode" code={`CONSTANT MAXSIZE = 5
DECLARE Queue : ARRAY[1:MAXSIZE] OF STRING
DECLARE Front : INTEGER
DECLARE Rear : INTEGER
DECLARE Size : INTEGER

// Initialise
Front ← 1    // Front starts at position 1
Rear ← 0     // Rear starts at 0 (no items yet)
Size ← 0     // Queue is empty`} />

      <div className="grid grid-cols-3 gap-4 my-6">
        {[
          { label: 'Front', desc: 'Index of item to be Dequeued next', color: 'bg-blue-50 border-blue-200 text-blue-700' },
          { label: 'Rear', desc: 'Index where last item was Enqueued', color: 'bg-green-50 border-green-200 text-green-700' },
          { label: 'Size', desc: 'Current number of items in queue', color: 'bg-purple-50 border-purple-200 text-purple-700' },
        ].map((item, i) => (
          <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
            <p className="font-bold font-mono">{item.label}</p>
            <p className="text-xs mt-1 opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">➕ Enqueue Procedure</h2>
      <CodeBlock language="pseudocode" code={`PROCEDURE Enqueue(BYVAL Item : STRING)
   IF Size = MAXSIZE
      THEN
         OUTPUT "Queue Full"
      ELSE
         Rear ← (Rear MOD MAXSIZE) + 1   // Wrap around if needed
         Queue[Rear] ← Item               // Store at new Rear
         Size ← Size + 1                  // Increase count
   ENDIF
ENDPROCEDURE

// HOW TO CALL:
CALL Enqueue("Ali")
CALL Enqueue("Sara")
CALL Enqueue("Tom")`} />

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
        <h3 className="font-bold text-green-800 mb-3">📋 Enqueue Trace (MAXSIZE=5)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-green-100"><th className="p-2 text-left">Operation</th><th className="p-2">Front</th><th className="p-2">Rear</th><th className="p-2">Size</th><th className="p-2 text-left">Queue Contents</th></tr></thead>
            <tbody>
              {[
                { op: 'Start', f: 1, r: 0, s: 0, q: '[ ]' },
                { op: 'Enqueue("Ali")', f: 1, r: 1, s: 1, q: '["Ali"]' },
                { op: 'Enqueue("Sara")', f: 1, r: 2, s: 2, q: '["Ali","Sara"]' },
                { op: 'Enqueue("Tom")', f: 1, r: 3, s: 3, q: '["Ali","Sara","Tom"]' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  <td className="p-2 font-mono text-green-700 font-bold">{row.op}</td>
                  <td className="p-2 text-center font-bold">{row.f}</td>
                  <td className="p-2 text-center font-bold">{row.r}</td>
                  <td className="p-2 text-center font-bold">{row.s}</td>
                  <td className="p-2 font-mono">{row.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">➖ Dequeue Function</h2>
      <CodeBlock language="pseudocode" code={`FUNCTION Dequeue() RETURNS STRING
   DECLARE Item : STRING
   IF Size = 0
      THEN
         OUTPUT "Queue Empty"
         RETURN ""
      ELSE
         Item ← Queue[Front]              // Save front item
         Front ← (Front MOD MAXSIZE) + 1  // Move Front forward (wrap!)
         Size ← Size - 1                  // Decrease count
         RETURN Item
   ENDIF
ENDFUNCTION

// HOW TO CALL (it's a FUNCTION - no CALL keyword!):
DECLARE Result : STRING
Result ← Dequeue()
OUTPUT "Served: ", Result`} />

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6">
        <h3 className="font-bold text-red-800 mb-3">📋 Dequeue Trace (continuing from above)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-red-100"><th className="p-2 text-left">Operation</th><th className="p-2">Front</th><th className="p-2">Rear</th><th className="p-2">Size</th><th className="p-2 text-left">Returns</th></tr></thead>
            <tbody>
              {[
                { op: 'Start (3 items)', f: 1, r: 3, s: 3, ret: '-' },
                { op: 'Dequeue()', f: 2, r: 3, s: 2, ret: '"Ali"' },
                { op: 'Dequeue()', f: 3, r: 3, s: 1, ret: '"Sara"' },
                { op: 'Dequeue()', f: 4, r: 3, s: 0, ret: '"Tom"' },
                { op: 'Dequeue()', f: 4, r: 3, s: 0, ret: 'ERROR: Queue Empty' },
              ].map((row, i) => (
                <tr key={i} className={i === 4 ? 'bg-red-200' : (i % 2 === 0 ? 'bg-white' : 'bg-red-50')}>
                  <td className="p-2 font-mono text-red-700 font-bold">{row.op}</td>
                  <td className="p-2 text-center font-bold">{row.f}</td>
                  <td className="p-2 text-center font-bold">{row.r}</td>
                  <td className="p-2 text-center font-bold">{row.s}</td>
                  <td className="p-2 font-bold text-purple-700">{row.ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="font-bold text-amber-800">⚠️ Key Exam Points</p>
        <ul className="text-amber-700 text-sm mt-2 space-y-1 list-disc list-inside">
          <li>Enqueue is a <strong>PROCEDURE</strong> — use CALL</li>
          <li>Dequeue is a <strong>FUNCTION</strong> — no CALL keyword</li>
          <li>Check Size = MAXSIZE for full, Size = 0 for empty</li>
          <li>The MOD formula wraps Rear and Front around — this makes it CIRCULAR</li>
          <li>Size tracks count separately — never calculate from Front and Rear alone</li>
        </ul>
      </div>
    </div>
  );
}
