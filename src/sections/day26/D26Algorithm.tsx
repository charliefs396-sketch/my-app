import CodeBlock from '../../components/CodeBlock';

export default function D26Algorithm() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔍 The Binary Search Algorithm</h1>
      <p className="text-gray-500 mb-8">Every line explained — exactly as Cambridge wants it</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-indigo-800 mb-2">The 3 Key Variables</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Low', desc: 'Lower bound of current search area. Starts at 1.', color: 'bg-blue-100 text-blue-800' },
            { name: 'High', desc: 'Upper bound of current search area. Starts at Size.', color: 'bg-purple-100 text-purple-800' },
            { name: 'Mid', desc: 'Middle index = (Low + High) DIV 2. Checked each pass.', color: 'bg-pink-100 text-pink-800' },
          ].map((v, i) => (
            <div key={i} className={`rounded-lg p-3 ${v.color}`}>
              <p className="font-bold text-lg">{v.name}</p>
              <p className="text-sm mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-3">📝 The Full Function — Your Exact Cambridge Version</h3>
        <CodeBlock language="pseudocode" code={`FUNCTION BinarySearch(Data : ARRAY, Size : INTEGER, Target : INTEGER) RETURNS INTEGER
   DECLARE Low : INTEGER
   DECLARE High : INTEGER
   DECLARE Mid : INTEGER
   
   Low <- 1
   High <- Size
   
   WHILE Low <= High
      Mid <- (Low + High) DIV 2
      IF Data[Mid] = Target
         THEN
            RETURN Mid
         ELSE
            IF Data[Mid] < Target
               THEN
                  Low <- Mid + 1
               ELSE
                  High <- Mid - 1
            ENDIF
      ENDIF
   ENDWHILE
   
   RETURN -1
ENDFUNCTION`} />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-800 mb-4">🔎 Every Line Explained</h3>
        <div className="space-y-3">
          {[
            { line: 'FUNCTION BinarySearch(...) RETURNS INTEGER', explain: 'It is a FUNCTION (returns a value). Returns the INDEX where found, or -1 if not found.' },
            { line: 'Low ← 1 / High ← Size', explain: 'Start with the FULL array as the search area.' },
            { line: 'WHILE Low <= High', explain: 'Keep searching while the search area is valid. When Low > High, the item is NOT in the array.' },
            { line: 'Mid ← (Low + High) DIV 2', explain: 'Find the exact middle. DIV gives integer division (no decimals).' },
            { line: 'IF Data[Mid] = Target → RETURN Mid', explain: 'Found it! Return the position immediately.' },
            { line: 'IF Data[Mid] < Target → Low ← Mid + 1', explain: 'Target is in the RIGHT half. Move Low up past Mid.' },
            { line: 'ELSE → High ← Mid - 1', explain: 'Target is in the LEFT half. Move High down past Mid.' },
            { line: 'RETURN -1', explain: 'Only reached if WHILE exits. Means not found. -1 is the standard "not found" signal.' },
          ].map((row, i) => (
            <div key={i} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
              <code className="text-indigo-700 font-mono text-sm font-bold min-w-0 flex-shrink-0 w-64">{row.line}</code>
              <p className="text-gray-600 text-sm">{row.explain}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-3">📞 How to CALL the Function</h3>
        <CodeBlock language="pseudocode" code={`DECLARE Names : ARRAY[1:8] OF INTEGER
DECLARE Position : INTEGER

// Call the function - NO CALL keyword for functions!
Position <- BinarySearch(Data, 8, 31)

IF Position <> -1
   THEN
      OUTPUT "Found at position ", Position
   ELSE
      OUTPUT "Not found"
ENDIF`} />
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-amber-800 text-sm font-semibold">⚠️ Remember: No CALL keyword for functions! CALL is only for PROCEDURES.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-800 mb-4">📐 The Mid Formula — Worked Examples</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold">Low</th>
                <th className="text-left p-3 font-semibold">High</th>
                <th className="text-left p-3 font-semibold">(Low + High)</th>
                <th className="text-left p-3 font-semibold">DIV 2</th>
                <th className="text-left p-3 font-semibold">Mid</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, 8, 9, '9 DIV 2', 4],
                [5, 8, 13, '13 DIV 2', 6],
                [5, 5, 10, '10 DIV 2', 5],
                [1, 7, 8, '8 DIV 2', 4],
                [3, 6, 9, '9 DIV 2', 4],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
