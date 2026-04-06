import CodeBlock from '../../components/CodeBlock';

export default function D15NodeType() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📦 Node TYPE & Initialisation</h1>
      <p className="text-gray-500 mb-6">How to define nodes and set up the free list</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔧 Defining a Node with TYPE</h2>
        <p className="text-gray-700 mb-4">Every linked list node needs TWO things: the <strong>data</strong> it stores, and a <strong>pointer</strong> to the next node.</p>
        <CodeBlock code={`TYPE Node
   DECLARE Data : STRING
   DECLARE Pointer : INTEGER
ENDTYPE

// The Pointer stores an INDEX into the array
// Pointer = 0 means NULL (no next node)`} language="pseudocode" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-indigo-50 rounded-xl p-4">
            <h3 className="font-bold text-indigo-800 mb-2">Data field</h3>
            <p className="text-sm text-indigo-700">Stores the actual value — can be STRING, INTEGER, REAL, CHAR or even another record type</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <h3 className="font-bold text-purple-800 mb-2">Pointer field</h3>
            <p className="text-sm text-purple-700">Stores an INTEGER — the array index of the next node. 0 = NULL (end of list)</p>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🏗️ Setting Up the Full Structure</h2>
        <CodeBlock code={`TYPE Node
   DECLARE Data : STRING
   DECLARE Pointer : INTEGER
ENDTYPE

DECLARE List : ARRAY[1:10] OF Node   // The array holding all nodes
DECLARE StartPointer : INTEGER        // Points to FIRST item in list
DECLARE FreePointer : INTEGER         // Points to FIRST free space

// Initialise
StartPointer ← 0    // List is empty (nothing in it yet)
FreePointer ← 1     // First free space is index 1

// Set up the free list (chain free spaces together)
FOR i ← 1 TO 9
   List[i].Pointer ← i + 1   // Each space points to next free space
NEXT i
List[10].Pointer ← 0         // Last space points to NULL`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 Visualising the Initial State</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 p-2">Index</th>
                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                  <th key={i} className="border border-indigo-200 p-2">[{i}]</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 font-bold bg-gray-50">Data</td>
                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                  <td key={i} className="border border-gray-200 p-2 text-center text-gray-400">—</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 font-bold bg-gray-50">Pointer</td>
                {[2,3,4,5,6,7,8,9,10,0].map((p, i) => (
                  <td key={i} className="border border-gray-200 p-2 text-center text-purple-600 font-bold">{p}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">StartPointer = 0 (empty list). FreePointer = 1. The free list: 1→2→3→4→5→6→7→8→9→10→NULL</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ Exam Points</h3>
        <ul className="space-y-1 text-amber-700 text-sm">
          <li>• The FOR loop goes 1 TO 9 (not 1 TO 10) because List[10].Pointer is set separately</li>
          <li>• StartPointer ← 0 means EMPTY — always initialise this!</li>
          <li>• FreePointer ← 1 means first free space is at index 1</li>
          <li>• Data type for Pointer must be INTEGER (it's an array index)</li>
        </ul>
      </div>
    </div>
  );
}
