import CodeBlock from '../../components/CodeBlock';

export default function D8LinearSearch() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔍 Linear Search — Deep Dive</h1>
      <p className="text-gray-500 mb-8">Every variation you need to know for the A Level exam.</p>

      {/* Version 1 - Basic string search */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Version 1 — Search for a String</h2>
        <p className="text-gray-500 text-sm mb-4">The classic version from the syllabus — searches an array of names.</p>
        <CodeBlock language="pseudocode" code={`FUNCTION LinearSearch(DataArray : ARRAY[1:10] OF STRING,
                      Size : INTEGER,
                      Target : STRING) RETURNS INTEGER
   DECLARE i : INTEGER
   
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   
   RETURN -1
ENDFUNCTION

// ── How to call it ──────────────────────────────────
DECLARE Names : ARRAY[1:10] OF STRING
DECLARE Position : INTEGER

// Populate Names array here...

Position ← LinearSearch(Names, 10, "Ali")

IF Position <> -1
   THEN
      OUTPUT "Found at position ", Position
   ELSE
      OUTPUT "Ali not found in the array"
ENDIF`} />

        {/* Full trace table */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-3">📊 Full Trace Table — Searching for "Tom"</h3>
          <p className="text-gray-500 text-xs mb-3">Array: ["Ali", "Sara", "Tom", "Zara", "Ben"] — Size=5 — Target="Tom"</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">i</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">DataArray[i]</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">DataArray[i] = "Tom"?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', '"Ali"', 'FALSE', 'Continue loop'],
                  ['2', '"Sara"', 'FALSE', 'Continue loop'],
                  ['3', '"Tom"', 'TRUE', '🎉 RETURN 3 — exit function immediately'],
                  ['4', '"Zara"', '—', 'Never reached'],
                  ['5', '"Ben"', '—', 'Never reached'],
                ].map(([i, val, cond, action], idx) => (
                  <tr key={idx} className={idx === 2 ? 'bg-green-50 font-bold' : idx > 2 ? 'bg-gray-50 opacity-50' : ''}>
                    <td className="border border-gray-200 px-4 py-2 font-mono">{i}</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">{val}</td>
                    <td className={`border border-gray-200 px-4 py-2 font-semibold ${cond === 'TRUE' ? 'text-green-600' : cond === 'FALSE' ? 'text-red-500' : 'text-gray-300'}`}>{cond}</td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-green-700 font-semibold mt-2">Result: Position ← 3 ✅</p>
        </div>

        {/* Trace table - not found */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 mb-3">📊 Trace Table — Target NOT FOUND ("Mike")</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">i</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">DataArray[i]</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">DataArray[i] = "Mike"?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', '"Ali"', 'FALSE', 'Continue'],
                  ['2', '"Sara"', 'FALSE', 'Continue'],
                  ['3', '"Tom"', 'FALSE', 'Continue'],
                  ['4', '"Zara"', 'FALSE', 'Continue'],
                  ['5', '"Ben"', 'FALSE', 'Continue'],
                  ['—', '—', '—', '❌ Loop ends → RETURN -1'],
                ].map(([i, val, cond, action], idx) => (
                  <tr key={idx} className={idx === 5 ? 'bg-red-50 font-bold text-red-700' : ''}>
                    <td className="border border-gray-200 px-4 py-2 font-mono">{i}</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">{val}</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold text-red-500">{cond}</td>
                    <td className="border border-gray-200 px-4 py-2 text-sm">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-red-700 font-semibold mt-2">Result: Position ← -1 — "Mike not found" is output ❌</p>
        </div>
      </div>

      {/* Version 2 - Integer search */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Version 2 — Search an INTEGER Array</h2>
        <p className="text-gray-500 text-sm mb-4">Same logic — just change the data type to INTEGER.</p>
        <CodeBlock language="pseudocode" code={`FUNCTION SearchNumber(Numbers : ARRAY[1:8] OF INTEGER,
                      Size : INTEGER,
                      Target : INTEGER) RETURNS INTEGER
   DECLARE i : INTEGER
   
   FOR i ← 1 TO Size
      IF Numbers[i] = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   
   RETURN -1
ENDFUNCTION

// Usage
DECLARE Temperatures : ARRAY[1:8] OF INTEGER
DECLARE Found : INTEGER

Temperatures[1] ← 23
Temperatures[2] ← 17
Temperatures[3] ← 31
Temperatures[4] ← 19
Temperatures[5] ← 27
Temperatures[6] ← 15
Temperatures[7] ← 31
Temperatures[8] ← 22

Found ← SearchNumber(Temperatures, 8, 31)

IF Found <> -1
   THEN
      OUTPUT "31 found at position ", Found
   ELSE
      OUTPUT "31 not in the array"
ENDIF`} />
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-800 mb-1">💡 Notice: Only ONE line changed!</p>
          <p className="text-blue-700 text-sm">The data type changed from STRING to INTEGER — everything else stays identical. This is why understanding the pattern matters more than memorising specific code.</p>
        </div>
      </div>

      {/* Version 3 - WHILE version */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Version 3 — Using WHILE Loop (Early Exit)</h2>
        <p className="text-gray-500 text-sm mb-4">Some exam questions ask you to write it with WHILE. This version exits the moment the target is found — more efficient.</p>
        <CodeBlock language="pseudocode" code={`FUNCTION LinearSearchWhile(DataArray : ARRAY[1:10] OF STRING,
                           Size : INTEGER,
                           Target : STRING) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Found : BOOLEAN
   
   i ← 1
   Found ← FALSE
   
   WHILE i <= Size AND Found = FALSE
      IF DataArray[i] = Target
         THEN
            Found ← TRUE
         ELSE
            i ← i + 1
      ENDIF
   ENDWHILE
   
   IF Found = TRUE
      THEN
         RETURN i
      ELSE
         RETURN -1
   ENDIF
ENDFUNCTION`} />
        <div className="mt-4 overflow-x-auto">
          <h3 className="font-bold text-gray-700 mb-3">📊 Trace — Searching for "Sara" in ["Ali", "Sara", "Tom"]</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">i</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Found</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Condition</th>
                <th className="border border-gray-200 px-3 py-2 text-left">DataArray[i]</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'FALSE', '1<=3 AND FALSE=FALSE → TRUE', '"Ali"', 'Ali≠Sara → i becomes 2'],
                ['2', 'FALSE', '2<=3 AND FALSE=FALSE → TRUE', '"Sara"', 'Sara=Sara → Found becomes TRUE'],
                ['2', 'TRUE', '2<=3 AND TRUE=FALSE → FALSE', '—', 'WHILE exits'],
                ['—', '—', '—', '—', 'Found=TRUE → RETURN 2 🎉'],
              ].map((row, i) => (
                <tr key={i} className={i === 3 ? 'bg-green-50 font-bold text-green-700' : ''}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-gray-200 px-3 py-2 text-xs">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOR vs WHILE comparison */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <h3 className="font-bold text-indigo-800 mb-3">⚖️ FOR vs WHILE for Linear Search</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2">FOR Version</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ Shorter, cleaner code</li>
              <li>✅ Easier to write under pressure</li>
              <li>✅ RETURN exits immediately anyway</li>
              <li>⚠️ Looks like it always completes all iterations</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 border border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2">WHILE Version</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ Explicitly shows "stop when found"</li>
              <li>✅ Uses BOOLEAN flag — good practice</li>
              <li>✅ Exam may specifically ask for WHILE</li>
              <li>⚠️ Longer, more to go wrong</li>
            </ul>
          </div>
        </div>
        <p className="text-indigo-700 text-sm mt-3 font-medium">
          💡 Use FOR version unless the exam specifically asks for WHILE or a Boolean flag.
        </p>
      </div>
    </div>
  );
}
