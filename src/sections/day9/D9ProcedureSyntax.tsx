import CodeBlock from '../../components/CodeBlock';

export default function D9ProcedureSyntax() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔧 PROCEDURE Syntax & BYREF</h1>
      <p className="text-gray-500 mb-8">Understanding how to write PROCEDUREs — essential before you can write Bubble Sort</p>

      {/* PROCEDURE vs FUNCTION */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PROCEDURE vs FUNCTION</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-800 mb-2">🔧 PROCEDURE</p>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Does NOT return a value</li>
              <li>• Can modify variables using BYREF</li>
              <li>• Used for actions (sort, print, swap)</li>
              <li>• Called with: <code className="bg-purple-100 px-1 rounded">CALL ProcName(...)</code></li>
              <li>• Ends with: <code className="bg-purple-100 px-1 rounded">ENDPROCEDURE</code></li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">📤 FUNCTION</p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• RETURNS a value</li>
              <li>• Cannot modify original variables</li>
              <li>• Used for calculations</li>
              <li>• Called with: <code className="bg-blue-100 px-1 rounded">Result ← FuncName(...)</code></li>
              <li>• Ends with: <code className="bg-blue-100 px-1 rounded">ENDFUNCTION</code></li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-amber-800 text-sm font-semibold">💡 Bubble Sort uses a PROCEDURE (not FUNCTION) because it modifies the array directly — it doesn't return anything!</p>
        </div>
      </div>

      {/* BYVAL vs BYREF */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📨 BYVAL vs BYREF — The Most Important Concept</h2>
        <p className="text-gray-600 mb-4">When you pass a variable into a PROCEDURE, you can pass it two ways:</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">📋 BYVAL — Pass a COPY</p>
            <p className="text-sm text-red-600 mb-3">The procedure gets a photocopy. Changes inside the procedure do NOT affect the original variable.</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE Double(BYVAL Num : INTEGER)
   Num ← Num * 2
   OUTPUT Num   // Shows doubled value
ENDPROCEDURE

// In main program:
DECLARE X : INTEGER
X ← 5
CALL Double(X)
OUTPUT X   // Still 5! Not changed`} />
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">🔗 BYREF — Pass the ORIGINAL</p>
            <p className="text-sm text-green-600 mb-3">The procedure gets the real thing. Changes inside the procedure DO affect the original variable.</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE Double(BYREF Num : INTEGER)
   Num ← Num * 2
ENDPROCEDURE

// In main program:
DECLARE X : INTEGER
X ← 5
CALL Double(X)
OUTPUT X   // Now 10! X was changed`} />
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-indigo-800 mb-2">🎯 Why Bubble Sort uses BYREF:</p>
          <p className="text-indigo-700 text-sm">Bubble Sort needs to <strong>permanently modify</strong> the array — swap elements and keep them swapped. If we used BYVAL, the sort would happen on a copy and the original array would remain unsorted. So we MUST use BYREF!</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">BYVAL</th>
                <th className="border border-gray-200 px-4 py-2 text-left">BYREF</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['What is passed?', 'A copy of the value', 'The memory address (original)'],
                ['Can modify original?', '❌ No', '✅ Yes'],
                ['Memory used?', 'More (two copies exist)', 'Less (only one copy)'],
                ['Safe from accidents?', '✅ Yes', '❌ Be careful!'],
                ['Use when...', 'Reading only', 'Need to modify the variable'],
                ['Bubble Sort needs...', '—', '✅ BYREF for the array'],
              ].map(([feat, byval, byref], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">{feat}</td>
                  <td className="border border-gray-200 px-4 py-2 text-red-600">{byval}</td>
                  <td className="border border-gray-200 px-4 py-2 text-green-600">{byref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Swap */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 The 3-Variable Swap — The Most Important Pattern</h2>
        <p className="text-gray-600 mb-4">Before writing Bubble Sort, you MUST understand how to swap two values. You cannot just do <code className="bg-red-100 text-red-700 px-2 py-0.5 rounded">A ← B</code> and <code className="bg-red-100 text-red-700 px-2 py-0.5 rounded">B ← A</code> — that loses the original value of A!</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-bold text-red-600 mb-2">❌ WRONG — This doesn't work:</p>
            <CodeBlock language="pseudocode" code={`// A = 8, B = 3
A ← B   // A is now 3, B is still 3
B ← A   // B is now 3 (wrong! lost 8!)
// Result: A = 3, B = 3   ❌`} />
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">✅ CORRECT — Use a Temp variable:</p>
            <CodeBlock language="pseudocode" code={`// A = 8, B = 3
Temp ← A   // Temp = 8 (save A first!)
A ← B      // A = 3
B ← Temp   // B = 8 (restore from Temp)
// Result: A = 3, B = 8   ✅`} />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">🥛 Analogy — Two Glasses of Liquid:</p>
          <p className="text-amber-700 text-sm">Glass A has milk, Glass B has juice. To swap them, you need a THIRD empty glass (Temp).<br/>
          Pour A → Temp, then B → A, then Temp → B. Without the third glass, you'd mix them!</p>
        </div>
      </div>

      {/* Full PROCEDURE structure */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 PROCEDURE Structure — Every Keyword Explained</h2>
        <CodeBlock language="pseudocode" code={`PROCEDURE BubbleSort(BYREF Data : ARRAY, Size : INTEGER)
//  ─────────┬────────  ──────┬───── ────┬───── ──────┬─────
//           │               │          │             │
//    Keyword that       How array   Parameter    Read-only
//    starts it         is passed     name         (BYVAL
//                      (original!)               by default)

   DECLARE i : INTEGER       // Outer loop counter (pass number)
   DECLARE j : INTEGER       // Inner loop counter (comparison position)
   DECLARE Temp : INTEGER    // Temporary swap variable
   DECLARE Swapped : BOOLEAN // Optimisation flag

   FOR i ← 1 TO Size - 1    // We need at most (n-1) passes
      Swapped ← FALSE        // Assume nothing needs swapping this pass

      FOR j ← 1 TO Size - i // Each pass needs fewer comparisons
         IF Data[j] > Data[j + 1]  // Wrong order?
            THEN
               Temp ← Data[j]          // Step 1: Save Data[j]
               Data[j] ← Data[j + 1]  // Step 2: Move smaller value left
               Data[j + 1] ← Temp     // Step 3: Place larger value right
               Swapped ← TRUE         // A swap happened!
         ENDIF
      NEXT j

      IF NOT Swapped   // If NO swaps happened this pass...
         THEN
            RETURN     // Array is already sorted! Stop early.
      ENDIF
   NEXT i

ENDPROCEDURE  // ← Don't forget this!

// ─────────────────────────────────────────
// HOW TO CALL IT:
DECLARE Numbers : ARRAY[1:6] OF INTEGER
// ... populate array ...
CALL BubbleSort(Numbers, 6)
// Array is now sorted!`} />
      </div>

      {/* Why Size - i */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🧠 Why <code>Size - i</code> in the Inner Loop?</h2>
        <p className="text-gray-600 mb-4">After each pass <code>i</code>, the last <code>i</code> elements are already in their correct positions. We don't need to compare them again!</p>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-2">
          <div className="flex gap-4">
            <span className="text-purple-600 font-bold w-16">Pass 1:</span>
            <span>Compare positions 1 to <strong>5</strong> (Size - 1 = 6 - 1)</span>
            <span className="text-green-600">→ Position 6 sorted ✅</span>
          </div>
          <div className="flex gap-4">
            <span className="text-purple-600 font-bold w-16">Pass 2:</span>
            <span>Compare positions 1 to <strong>4</strong> (Size - 2 = 6 - 2)</span>
            <span className="text-green-600">→ Position 5, 6 sorted ✅</span>
          </div>
          <div className="flex gap-4">
            <span className="text-purple-600 font-bold w-16">Pass 3:</span>
            <span>Compare positions 1 to <strong>3</strong> (Size - 3 = 6 - 3)</span>
            <span className="text-green-600">→ Position 4, 5, 6 sorted ✅</span>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mt-4">
          <p className="text-green-800 text-sm font-semibold">💡 This is the optimisation! Without it, we'd waste time re-comparing already-sorted elements.</p>
        </div>
      </div>
    </div>
  );
}
