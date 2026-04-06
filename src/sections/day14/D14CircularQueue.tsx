import CodeBlock from '../../components/CodeBlock';

export default function D14CircularQueue() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔄 Circular Queue</h1>
      <p className="text-gray-500 mb-6">Why circular queues exist and how the MOD formula works</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
        <h2 className="font-bold text-indigo-800 text-lg mb-3">❓ The Problem with Linear Queues</h2>
        <p className="text-gray-700 text-sm mb-3">In a linear queue, after many Enqueue/Dequeue operations, Front moves forward and the positions at the start of the array become <strong>wasted</strong> — even though they're empty!</p>
        <div className="bg-white rounded-lg p-4 border border-indigo-100 text-sm font-mono">
          <p className="text-red-600 font-bold mb-2">Linear Queue Problem:</p>
          <p>After 3 Enqueue + 2 Dequeue: Front=3, Rear=3</p>
          <p>Positions [1] and [2] are EMPTY but WASTED</p>
          <p className="text-green-600 font-bold mt-2">Circular Queue Solution:</p>
          <p>Rear wraps back to [1] when it reaches MAXSIZE</p>
          <p>No wasted space!</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">🔑 The MOD Formula — MEMORISE THIS!</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-bold text-green-800 mb-2">Rear Formula (Enqueue):</p>
          <p className="font-mono text-green-700 text-lg">Rear ← (Rear MOD MAXSIZE) + 1</p>
          <p className="text-gray-600 text-sm mt-2">When Rear = MAXSIZE (e.g. 5), MOD gives 0, then +1 = 1 → wraps to start!</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-800 mb-2">Front Formula (Dequeue):</p>
          <p className="font-mono text-blue-700 text-lg">Front ← (Front MOD MAXSIZE) + 1</p>
          <p className="text-gray-600 text-sm mt-2">Same formula! When Front = MAXSIZE, it wraps back to 1.</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📋 Full Circular Queue Trace (MAXSIZE=5)</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead><tr className="bg-indigo-600 text-white"><th className="p-3 text-left">Operation</th><th className="p-3">Front</th><th className="p-3">Rear</th><th className="p-3">Size</th><th className="p-3 text-left">Notes</th></tr></thead>
          <tbody>
            {[
              { op: 'Start', f: 1, r: 0, s: 0, note: 'Empty queue' },
              { op: 'Enqueue("A")', f: 1, r: 1, s: 1, note: 'Rear: (0 MOD 5)+1=1' },
              { op: 'Enqueue("B")', f: 1, r: 2, s: 2, note: 'Rear: (1 MOD 5)+1=2' },
              { op: 'Enqueue("C")', f: 1, r: 3, s: 3, note: 'Rear: (2 MOD 5)+1=3' },
              { op: 'Dequeue() → "A"', f: 2, r: 3, s: 2, note: 'Front: (1 MOD 5)+1=2' },
              { op: 'Dequeue() → "B"', f: 3, r: 3, s: 1, note: 'Front: (2 MOD 5)+1=3' },
              { op: 'Enqueue("D")', f: 3, r: 4, s: 2, note: 'Rear: (3 MOD 5)+1=4' },
              { op: 'Enqueue("E")', f: 3, r: 5, s: 3, note: 'Rear: (4 MOD 5)+1=5' },
              { op: 'Enqueue("F")', f: 3, r: 1, s: 4, note: '⭐ Rear WRAPS: (5 MOD 5)+1=1' },
              { op: 'Enqueue("G")', f: 3, r: 2, s: 5, note: 'Rear: (1 MOD 5)+1=2. FULL!' },
              { op: 'Enqueue("H")', f: 3, r: 2, s: 5, note: '❌ Queue Full — Size=MAXSIZE' },
            ].map((row, i) => (
              <tr key={i} className={row.note.includes('WRAPS') ? 'bg-yellow-100' : row.note.includes('FULL') || row.note.includes('❌') ? 'bg-red-100' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                <td className="p-3 font-mono font-bold text-indigo-700">{row.op}</td>
                <td className="p-3 text-center font-bold">{row.f}</td>
                <td className="p-3 text-center font-bold">{row.r}</td>
                <td className="p-3 text-center font-bold">{row.s}</td>
                <td className="p-3 text-gray-600 text-xs">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-3">📝 Complete Circular Queue Code</h2>
      <CodeBlock language="pseudocode" code={`CONSTANT MAXSIZE = 5
DECLARE Queue : ARRAY[1:MAXSIZE] OF STRING
DECLARE Front : INTEGER
DECLARE Rear : INTEGER
DECLARE Size : INTEGER

Front ← 1
Rear ← 0
Size ← 0

PROCEDURE Enqueue(BYVAL Item : STRING)
   IF Size = MAXSIZE
      THEN
         OUTPUT "Queue Full"
      ELSE
         Rear ← (Rear MOD MAXSIZE) + 1
         Queue[Rear] ← Item
         Size ← Size + 1
   ENDIF
ENDPROCEDURE

FUNCTION Dequeue() RETURNS STRING
   DECLARE Item : STRING
   IF Size = 0
      THEN
         OUTPUT "Queue Empty"
         RETURN ""
      ELSE
         Item ← Queue[Front]
         Front ← (Front MOD MAXSIZE) + 1
         Size ← Size - 1
         RETURN Item
   ENDIF
ENDFUNCTION`} />

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <p className="font-bold text-amber-800">⭐ Why Circular is Better Than Linear</p>
        <ul className="text-amber-700 text-sm mt-2 space-y-1 list-disc list-inside">
          <li><strong>No wasted space</strong> — positions are reused after Dequeue</li>
          <li><strong>Efficient memory use</strong> — array never has permanent empty slots</li>
          <li><strong>Fixed memory</strong> — uses exactly MAXSIZE positions, no more, no less</li>
          <li>Linear queues waste positions that can never be reclaimed</li>
        </ul>
      </div>
    </div>
  );
}
