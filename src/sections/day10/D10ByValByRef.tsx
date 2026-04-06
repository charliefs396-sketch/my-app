import CodeBlock from '../../components/CodeBlock';

export default function D10ByValByRef() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">📨 BYVAL vs BYREF</h1>
      <p className="text-gray-500 text-lg mb-8">The most tested A Level topic — master it completely</p>

      {/* The big concept */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-purple-900 mb-4">🧠 The Core Concept</h2>
        <p className="text-gray-700 mb-4">When you pass a variable to a procedure or function, you need to decide: <strong>should the subroutine be able to permanently change the original variable?</strong></p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="text-2xl mb-2">📋 BYVAL</p>
            <p className="font-bold text-purple-800 mb-2">"By Value" — Pass a copy</p>
            <p className="text-gray-600 text-sm">A copy of the variable's value is made. The subroutine works on the COPY. The original variable is <strong>NOT changed</strong>.</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="text-2xl mb-2">🔗 BYREF</p>
            <p className="font-bold text-indigo-800 mb-2">"By Reference" — Pass the real thing</p>
            <p className="text-gray-600 text-sm">A reference (link) to the actual variable is passed. Any changes the subroutine makes <strong>DO change</strong> the original.</p>
          </div>
        </div>
      </div>

      {/* Real world analogy */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🍹 Real World Analogy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-3">📋 BYVAL — Photocopy</p>
            <p className="text-blue-700 text-sm mb-3">You have an important document. A friend wants to read and edit it. You give them a <strong>photocopy</strong>. They can write all over their copy. Your original is <strong>safe and unchanged</strong>.</p>
            <p className="text-blue-600 text-xs italic">Changes to the photocopy don't affect the original.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-800 mb-3">🔗 BYREF — The Original Document</p>
            <p className="text-purple-700 text-sm mb-3">You hand over the <strong>original document</strong> itself. Your friend edits it directly. When they give it back, your document has <strong>all their changes</strong>.</p>
            <p className="text-purple-600 text-xs italic">Changes to the original affect what you have too.</p>
          </div>
        </div>
      </div>

      {/* Side by side code comparison */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💻 Code Comparison — Side by Side</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="bg-blue-100 rounded-t-xl px-4 py-2">
              <p className="font-bold text-blue-800">BYVAL — Copy is passed</p>
            </div>
            <CodeBlock language="pseudocode" code={`PROCEDURE DoubleIt(BYVAL X : INTEGER)
   X ← X * 2
   OUTPUT "Inside: ", X   // 10
ENDPROCEDURE

DECLARE Num : INTEGER
Num ← 5
CALL DoubleIt(Num)
OUTPUT "Outside: ", Num   // Still 5!
// Original NOT changed`} />
          </div>
          <div>
            <div className="bg-purple-100 rounded-t-xl px-4 py-2">
              <p className="font-bold text-purple-800">BYREF — Original is changed</p>
            </div>
            <CodeBlock language="pseudocode" code={`PROCEDURE DoubleRef(BYREF X : INTEGER)
   X ← X * 2
ENDPROCEDURE

DECLARE Num : INTEGER
Num ← 5
CALL DoubleRef(Num)
OUTPUT "Outside: ", Num   // Now 10!
// Original IS changed`} />
          </div>
        </div>

        {/* Step by step trace */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-3">Step-by-step trace — BYVAL</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-2 text-left">Step</th>
                  <th className="p-2 text-left">Action</th>
                  <th className="p-2 text-left">Num (original)</th>
                  <th className="p-2 text-left">X (copy inside proc)</th>
                  <th className="p-2 text-left">Output</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Num ← 5', '5', '—', '—'],
                  ['2', 'CALL DoubleIt(Num)', '5', '5 (copy made)', '—'],
                  ['3', 'X ← X * 2 (inside proc)', '5 ← unchanged!', '10', '—'],
                  ['4', 'OUTPUT "Inside: ", X', '5', '10', '"Inside: 10"'],
                  ['5', 'Procedure ends, X destroyed', '5', '— (gone)', '—'],
                  ['6', 'OUTPUT "Outside: ", Num', '5', '—', '"Outside: 5"'],
                ].map(([step, action, num, x, output], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 font-bold text-blue-600">{step}</td>
                    <td className="p-2 font-mono text-xs">{action}</td>
                    <td className="p-2 font-bold text-gray-700">{num}</td>
                    <td className="p-2 font-bold text-blue-600">{x}</td>
                    <td className="p-2 text-green-600 font-mono text-xs">{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* When to use each */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🤔 When to Use BYVAL vs BYREF</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700">Situation</th>
                <th className="text-left p-3 font-bold text-blue-700">Use BYVAL</th>
                <th className="text-left p-3 font-bold text-purple-700">Use BYREF</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['You just want to READ the value', '✅ Yes — safe, no accidental changes', '❌ Risky — might accidentally change it'],
                ['You want to MODIFY the original', '❌ Won\'t work — copy is changed', '✅ Yes — directly modifies original'],
                ['Sorting an array', '❌ Won\'t sort the original', '✅ Yes — must use BYREF for arrays'],
                ['Calculating a result', '✅ Usually BYVAL is enough', '❌ No need to modify original'],
                ['Input validation procedure', '❌ Can\'t update the variable', '✅ Use BYREF so the valid value is kept'],
                ['Functions (as parameters)', '✅ Default — usually BYVAL', 'Use BYREF only when modifying needed'],
              ].map(([sit, byval, byref], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="p-3 font-medium text-gray-700">{sit}</td>
                  <td className="p-3 text-blue-700 text-xs">{byval}</td>
                  <td className="p-3 text-purple-700 text-xs">{byref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Default is BYVAL */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📌 Default Passing Method</h2>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
          <p className="font-bold text-amber-800">⭐ Important Rule:</p>
          <p className="text-amber-700 text-sm mt-1">If you don't write BYVAL or BYREF, Cambridge pseudocode defaults to <strong>BYVAL</strong>. But in the exam — ALWAYS write it explicitly to show the examiner you know the difference!</p>
        </div>
        <CodeBlock language="pseudocode" code={`// These three mean the same thing:
PROCEDURE Example(X : INTEGER)         // Implicitly BYVAL
PROCEDURE Example(BYVAL X : INTEGER)   // Explicitly BYVAL (preferred!)

// This is different:
PROCEDURE Example(BYREF X : INTEGER)   // BYREF - original is changed

// RULE: Always write BYVAL or BYREF explicitly in your exam answers!`} />
      </div>

      {/* BYREF with arrays */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-green-900 mb-4">📊 BYREF with Arrays — The Most Common Use</h2>
        <p className="text-gray-600 mb-4">Arrays are almost always passed BYREF because you want to modify the actual array (like when sorting):</p>
        <CodeBlock language="pseudocode" code={`// Sorting needs BYREF - we're modifying the actual array
PROCEDURE BubbleSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Temp : INTEGER
   FOR i ← 1 TO Size - 1
      FOR j ← 1 TO Size - i
         IF Data[j] > Data[j + 1]
            THEN
               Temp ← Data[j]
               Data[j] ← Data[j + 1]
               Data[j + 1] ← Temp
         ENDIF
      NEXT j
   NEXT i
ENDPROCEDURE

// Display only needs BYVAL - we're just reading, not changing
PROCEDURE DisplayArray(BYVAL Data : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   FOR i ← 1 TO Size
      OUTPUT Data[i]
   NEXT i
ENDPROCEDURE`} />
        <div className="mt-4 p-4 bg-white rounded-xl border border-green-200">
          <p className="font-bold text-green-800 mb-2">🎯 Golden Rule for Arrays:</p>
          <p className="text-green-700 text-sm">If the procedure/function is <strong>reading</strong> the array → BYVAL. If it's <strong>changing</strong> the array → BYREF.</p>
        </div>
      </div>
    </div>
  );
}
