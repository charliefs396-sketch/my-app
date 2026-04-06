import CodeBlock from '../../components/CodeBlock';

export default function D27Algorithm() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔧 The Algorithm — Every Line Explained</h2>
      <p className="text-gray-500 mb-6">Understanding WHY each line exists is the key to full marks</p>

      {/* Full code */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">The Complete Procedure</h3>
        <CodeBlock code={`PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER      // Outer loop counter - marks boundary
   DECLARE j : INTEGER      // Inner pointer - scans left through sorted portion
   DECLARE Key : INTEGER    // The element being inserted
   
   FOR i ← 2 TO Size        // Start at 2 (position 1 is already "sorted")
      Key ← Data[i]         // Save the element to be inserted
      j ← i - 1             // Start scanning from element to the LEFT of Key
      WHILE j > 0 AND Data[j] > Key   // While not at start AND element > Key
         Data[j + 1] ← Data[j]        // Shift element ONE position RIGHT
         j ← j - 1                    // Move pointer one step LEFT
      ENDWHILE
      Data[j + 1] ← Key     // Insert Key into the gap created
   NEXT i
ENDPROCEDURE`} language="pseudocode" />
      </div>

      {/* Line by line explanation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📖 Line-by-Line Breakdown</h3>
        <div className="space-y-3">
          {[
            {
              line: 'PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)',
              why: 'BYREF means the ORIGINAL array is sorted. Without BYREF, only a copy would be sorted and the caller would see no change. Size tells us how many elements to sort.',
              color: 'border-l-fuchsia-400 bg-fuchsia-50'
            },
            {
              line: 'DECLARE Key : INTEGER',
              why: 'Key temporarily holds the element being inserted. We MUST save it before shifting overwrites it. This is similar to Temp in Bubble Sort but serves a different purpose.',
              color: 'border-l-purple-400 bg-purple-50'
            },
            {
              line: 'FOR i ← 2 TO Size',
              why: 'We start at position 2 because position 1 is trivially "already sorted" (a single element is always sorted). i marks the boundary: positions 1..i-1 are sorted, position i is the next to insert.',
              color: 'border-l-pink-400 bg-pink-50'
            },
            {
              line: 'Key ← Data[i]',
              why: 'Save Data[i] into Key BEFORE we start shifting. The shifting process will overwrite Data[i], so we must save it first. This is the element we want to insert.',
              color: 'border-l-orange-400 bg-orange-50'
            },
            {
              line: 'j ← i - 1',
              why: 'j starts at i-1 (the element just to the LEFT of Key). j will scan leftwards through the sorted portion looking for where Key belongs.',
              color: 'border-l-amber-400 bg-amber-50'
            },
            {
              line: 'WHILE j > 0 AND Data[j] > Key',
              why: 'TWO conditions: (1) j > 0 stops us going off the left edge of the array. (2) Data[j] > Key means the element at j is too big and needs shifting right. BOTH must be true to continue.',
              color: 'border-l-green-400 bg-green-50'
            },
            {
              line: 'Data[j + 1] ← Data[j]',
              why: 'Shift element at position j ONE position to the RIGHT (to j+1). This creates a "gap" where Key will eventually go. Note: j+1 is overwritten (that is why we saved Key earlier!).',
              color: 'border-l-teal-400 bg-teal-50'
            },
            {
              line: 'j ← j - 1',
              why: 'Move pointer one step LEFT. We continue scanning leftwards to find more elements that need shifting.',
              color: 'border-l-cyan-400 bg-cyan-50'
            },
            {
              line: 'Data[j + 1] ← Key',
              why: 'The WHILE loop stopped because either j=0 (reached start) or Data[j] <= Key (found correct position). j+1 is where Key belongs — insert it there.',
              color: 'border-l-blue-400 bg-blue-50'
            },
          ].map((item, i) => (
            <div key={i} className={`border-l-4 ${item.color} rounded-r-xl p-4`}>
              <code className="text-xs font-mono font-bold text-gray-800 block mb-2 bg-slate-800 text-cyan-300 px-3 py-1.5 rounded-lg">{item.line}</code>
              <p className="text-sm text-gray-700"><span className="font-bold">WHY: </span>{item.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The WHILE condition deep dive */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🔍 The WHILE Condition — Deep Dive</h3>
        <div className="bg-slate-900 rounded-xl p-4 mb-4">
          <code className="text-cyan-400 font-mono font-bold text-lg">WHILE j &gt; 0 AND Data[j] &gt; Key</code>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-700 mb-2">Condition 1: j &gt; 0</p>
            <p className="text-sm text-blue-800 mb-2">Prevents going off the LEFT edge of the array.</p>
            <div className="bg-white rounded-lg p-2 text-xs font-mono">
              <p>If j = 0, there's nothing left to compare.</p>
              <p>Key must go at position 1 (Data[j+1] = Data[1]).</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">Condition 2: Data[j] &gt; Key</p>
            <p className="text-sm text-red-800 mb-2">The element at j is LARGER than Key — it needs to shift right.</p>
            <div className="bg-white rounded-lg p-2 text-xs font-mono">
              <p>If Data[j] &lt;= Key, we found the right spot.</p>
              <p>Key goes at position j+1.</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-bold text-yellow-700 mb-2">⚠️ The AND is critical!</p>
          <p className="text-sm text-yellow-800">Both conditions must be true. If EITHER is false, we stop and insert Key at j+1. This is called <strong>short-circuit evaluation</strong> — if j=0, Python/pseudocode won't even check Data[j] (which would be Data[0], out of bounds!).</p>
        </div>
      </div>

      {/* BYREF explanation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📨 Why BYREF is Essential</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-red-600 mb-2">❌ BYVAL — WRONG for sorting</p>
            <CodeBlock code={`// BYVAL makes a COPY
PROCEDURE Sort(BYVAL Data : ARRAY, Size : INTEGER)
   // ... sorts the COPY ...
ENDPROCEDURE

DECLARE Nums : ARRAY[1:6] OF INTEGER
// ... fill Nums ...
CALL Sort(Nums, 6)
OUTPUT Nums[1]  // STILL UNSORTED!
// The copy was sorted, not Nums`} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">✅ BYREF — CORRECT for sorting</p>
            <CodeBlock code={`// BYREF passes the ORIGINAL
PROCEDURE Sort(BYREF Data : ARRAY, Size : INTEGER)
   // ... sorts the ORIGINAL ...
ENDPROCEDURE

DECLARE Nums : ARRAY[1:6] OF INTEGER
// ... fill Nums ...
CALL Sort(Nums, 6)
OUTPUT Nums[1]  // NOW SORTED!
// Nums itself was sorted`} language="pseudocode" />
          </div>
        </div>
      </div>

      {/* Calling the procedure */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📞 How to Call InsertionSort</h3>
        <CodeBlock code={`// Declare and fill array
DECLARE Numbers : ARRAY[1:6] OF INTEGER
DECLARE i : INTEGER

FOR i ← 1 TO 6
   OUTPUT "Enter number ", i, ": "
   INPUT Numbers[i]
NEXT i

// Call the sort (use CALL keyword - it's a PROCEDURE not a FUNCTION)
CALL InsertionSort(Numbers, 6)

// Now Numbers is sorted!
OUTPUT "Sorted array:"
FOR i ← 1 TO 6
   OUTPUT Numbers[i]
NEXT i`} language="pseudocode" />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-700 mb-1">⚠️ Critical Exam Points</p>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>• Use <strong>CALL</strong> keyword — InsertionSort is a PROCEDURE (no return value)</li>
            <li>• Pass the array NAME (Numbers) not individual elements</li>
            <li>• Pass Size as a separate parameter (6 in this case)</li>
          </ul>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">❌ Common Mistakes to Avoid</h3>
        <div className="space-y-3">
          {[
            { mistake: 'FOR i ← 1 TO Size (starting at 1)', fix: 'Must start at 2! Position 1 is already sorted. Starting at 1 would try to insert Data[1] with j=0, which skips the WHILE entirely — works but wastes a pass.' },
            { mistake: 'Forgetting to save Key before shifting', fix: 'If you shift without saving Key first, Data[i] gets overwritten and you lose the value you were trying to insert.' },
            { mistake: 'WHILE j >= 1 instead of WHILE j > 0', fix: 'Both work the same (j >= 1 is equivalent to j > 0 for integers), but j > 0 is the Cambridge standard.' },
            { mistake: 'Data[j] ← Data[j+1] (shifting LEFT instead of RIGHT)', fix: 'Must be Data[j+1] ← Data[j] to shift elements RIGHTWARD to create space for Key.' },
            { mistake: 'Data[j] ← Key instead of Data[j+1] ← Key', fix: 'After the WHILE loop, j has gone one step TOO FAR left. Key goes at j+1 (the gap), not j.' },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-xs font-bold text-red-600 mb-1">❌ Mistake</p>
                <code className="text-xs text-red-800 font-mono">{item.mistake}</code>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <p className="text-xs font-bold text-green-600 mb-1">✅ Correct Approach</p>
                <p className="text-xs text-green-800">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
