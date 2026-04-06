import CodeBlock from '../../components/CodeBlock';

export default function D8FunctionSyntax() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔧 FUNCTION Syntax</h1>
      <p className="text-gray-500 mb-8">Before writing Linear Search, you MUST understand how FUNCTION works at A Level.</p>

      {/* What is a function */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📦 What is a FUNCTION?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          A <strong>FUNCTION</strong> is a named block of code that <strong>takes inputs (parameters)</strong> and 
          <strong> always returns a value</strong>. Think of it as a machine — you put something in, it processes it, and gives you something back.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-1">📥</div>
            <p className="font-bold text-blue-800 text-sm">Input</p>
            <p className="text-blue-600 text-xs">Parameters passed in</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-1">⚙️</div>
            <p className="font-bold text-purple-800 text-sm">Process</p>
            <p className="text-purple-600 text-xs">Code runs inside</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-1">📤</div>
            <p className="font-bold text-green-800 text-sm">Output</p>
            <p className="text-green-600 text-xs">RETURN sends value back</p>
          </div>
        </div>
      </div>

      {/* Full syntax breakdown */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Full FUNCTION Syntax — Every Part Explained</h2>
        <CodeBlock language="pseudocode" code={`FUNCTION FunctionName(Param1 : TYPE, Param2 : TYPE) RETURNS TYPE
   // Your code here
   RETURN SomeValue
ENDFUNCTION`} />
        <div className="mt-4 space-y-3">
          {[
            { part: 'FUNCTION', color: 'bg-sky-100 text-sky-800', desc: 'Keyword that starts the function definition' },
            { part: 'FunctionName', color: 'bg-purple-100 text-purple-800', desc: 'Name you choose — use a meaningful name like LinearSearch' },
            { part: 'Param1 : TYPE', color: 'bg-amber-100 text-amber-800', desc: 'Parameters = the inputs. Each one MUST have a name AND data type' },
            { part: 'RETURNS TYPE', color: 'bg-green-100 text-green-800', desc: 'What TYPE the function gives back — INTEGER, STRING, BOOLEAN, etc.' },
            { part: 'RETURN SomeValue', color: 'bg-pink-100 text-pink-800', desc: 'Sends a value back to wherever the function was called — exits the function immediately' },
            { part: 'ENDFUNCTION', color: 'bg-gray-200 text-gray-700', desc: 'Marks the end of the function body — always required!' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <code className={`px-3 py-1.5 rounded-lg font-mono text-sm font-bold flex-shrink-0 ${item.color}`}>{item.part}</code>
              <p className="text-gray-600 text-sm pt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Linear Search function */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">🔍 The Linear Search Function — Full Code</h2>
        <p className="text-gray-500 text-sm mb-4">This is the core code you MUST know for the exam:</p>
        <CodeBlock language="pseudocode" code={`FUNCTION LinearSearch(DataArray : ARRAY[1:10] OF STRING,
                      Size : INTEGER,
                      Target : STRING) RETURNS INTEGER
   DECLARE i : INTEGER
   
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            RETURN i       // Found! Return the position immediately
      ENDIF
   NEXT i
   
   RETURN -1              // Not found — -1 is the convention
ENDFUNCTION`} />
        <div className="mt-4 space-y-3">
          {[
            { label: 'DataArray', color: 'blue', desc: 'The array to search through — passed in as parameter' },
            { label: 'Size', color: 'purple', desc: 'How many elements to check — avoids hardcoding 10' },
            { label: 'Target', color: 'amber', desc: 'What we are looking for — the search key' },
            { label: 'RETURNS INTEGER', color: 'green', desc: 'Returns a position (1 to Size) if found, or -1 if not found' },
            { label: 'RETURN i', color: 'pink', desc: 'Early exit — as soon as we find it, we stop and return the index' },
            { label: 'RETURN -1', color: 'red', desc: '-1 is used because no valid array position is ever -1, so it safely means "not found"' },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-xl bg-${item.color}-50 border border-${item.color}-100 flex items-start gap-3`}>
              <code className="font-mono text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded border flex-shrink-0">{item.label}</code>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Calling the function */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📞 Calling the Function — How to Use It</h2>
        <CodeBlock language="pseudocode" code={`// First, declare your array and fill it
DECLARE Names : ARRAY[1:10] OF STRING
DECLARE Position : INTEGER

// ... (populate the array here)

// Call the function — store the result
Position ← LinearSearch(Names, 10, "Ali")

// Check the result and respond
IF Position <> -1
   THEN
      OUTPUT "Found at position ", Position
   ELSE
      OUTPUT "Not found"
ENDIF`} />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">⚠️ Critical Point — Always Check for -1!</p>
          <p className="text-amber-700 text-sm">
            After calling LinearSearch, you MUST check <code className="bg-amber-100 px-1 rounded">IF Position &lt;&gt; -1</code> before using the position. 
            If you skip this check and the item isn't found, you'd try to access <code className="bg-amber-100 px-1 rounded">Names[-1]</code> which is invalid!
          </p>
        </div>
      </div>

      {/* PROCEDURE vs FUNCTION */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚖️ FUNCTION vs PROCEDURE — Know the Difference!</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-gray-500 font-bold">Feature</th>
                <th className="text-left py-3 px-4 text-blue-600 font-bold">FUNCTION</th>
                <th className="text-left py-3 px-4 text-purple-600 font-bold">PROCEDURE</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Returns a value?', '✅ YES — always', '❌ NO — never'],
                ['RETURNS keyword?', '✅ Required', '❌ Not used'],
                ['RETURN inside?', '✅ Required', '❌ Not used'],
                ['Called as expression?', '✅ Position ← LinearSearch(...)', '❌ Just: SearchArray(Names, 10, "Ali")'],
                ['End keyword?', 'ENDFUNCTION', 'ENDPROCEDURE'],
                ['Use case?', 'When you need a value back', 'When you just do something (print, update)'],
              ].map(([f, fn, pr], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-semibold text-gray-700">{f}</td>
                  <td className="py-3 px-4 text-blue-700">{fn}</td>
                  <td className="py-3 px-4 text-purple-700">{pr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h3 className="font-bold text-red-800 mb-3">🚫 Most Common FUNCTION Mistakes</h3>
        <div className="space-y-3">
          {[
            { wrong: 'FUNCTION LinearSearch(...) RETURN INTEGER', right: 'FUNCTION LinearSearch(...) RETURNS INTEGER', tip: 'RETURNS not RETURN at the top!' },
            { wrong: 'RETURN', right: 'RETURN -1', tip: 'RETURN must always be followed by the value you\'re returning' },
            { wrong: 'Position = LinearSearch(Names, 10, "Ali")', right: 'Position ← LinearSearch(Names, 10, "Ali")', tip: 'Assignment uses ← not =' },
            { wrong: 'Forgetting ENDFUNCTION', right: 'Always end with ENDFUNCTION', tip: 'Every function MUST have ENDFUNCTION' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-red-100">
              <div className="flex gap-3 mb-2">
                <span className="text-red-500 font-bold text-xs">❌ WRONG</span>
                <code className="text-red-700 font-mono text-xs">{item.wrong}</code>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold text-xs">✅ RIGHT</span>
                <code className="text-green-700 font-mono text-xs">{item.right}</code>
              </div>
              <p className="text-gray-500 text-xs mt-2">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
