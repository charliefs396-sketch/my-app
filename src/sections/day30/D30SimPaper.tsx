import CodeBlock from '../../components/CodeBlock';

export default function D30SimPaper() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        📝 Simulation Paper
      </h1>
      <p className="text-gray-500 text-lg mb-6">Full Paper 2 Style — 4 Questions — 2 Hours</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
        <p className="text-blue-800 font-semibold">⏱️ Tip: Set a 2-hour timer. Attempt ALL questions before checking solutions!</p>
      </div>

      {/* Question 1 */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Question 1 — Trace Table</h2>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">20 marks</span>
        </div>

        <p className="text-gray-700 mb-4">Study the following pseudocode algorithm:</p>

        <CodeBlock language="pseudocode" code={`DECLARE Numbers : ARRAY[1:6] OF INTEGER
DECLARE i : INTEGER
DECLARE j : INTEGER
DECLARE Temp : INTEGER
DECLARE Count : INTEGER

Numbers[1] ← 4
Numbers[2] ← 2
Numbers[3] ← 7
Numbers[4] ← 1
Numbers[5] ← 9
Numbers[6] ← 3

Count ← 0
FOR i ← 1 TO 5
   FOR j ← 1 TO 6 - i
      IF Numbers[j] > Numbers[j + 1]
         THEN
            Temp ← Numbers[j]
            Numbers[j] ← Numbers[j + 1]
            Numbers[j + 1] ← Temp
            Count ← Count + 1
      ENDIF
   NEXT j
NEXT i

OUTPUT Count`} />

        <div className="space-y-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(a) What is the purpose of this algorithm? <span className="text-gray-500 font-normal">[1 mark]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <p className="mt-2 text-green-800 bg-green-50 p-3 rounded-lg text-sm">Sorts the array in ascending order using Bubble Sort and counts the number of swaps made.</p>
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(b) Complete the trace table for Pass 1 (i=1) only: <span className="text-gray-500 font-normal">[6 marks]</span></p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-300 p-2">j</th>
                    <th className="border border-gray-300 p-2">Numbers[j]</th>
                    <th className="border border-gray-300 p-2">Numbers[j+1]</th>
                    <th className="border border-gray-300 p-2">Swap?</th>
                    <th className="border border-gray-300 p-2">Count</th>
                    <th className="border border-gray-300 p-2">Array State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2 text-center">Start</td><td className="border p-2" colSpan={4}></td><td className="border p-2">4,2,7,1,9,3</td></tr>
                  {[1,2,3,4,5].map(j => (
                    <tr key={j}><td className="border p-2 text-center">{j}</td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td><td className="border p-2"></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <details className="mt-3">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-gray-300 p-2">j</th>
                      <th className="border border-gray-300 p-2">Numbers[j]</th>
                      <th className="border border-gray-300 p-2">Numbers[j+1]</th>
                      <th className="border border-gray-300 p-2">Swap?</th>
                      <th className="border border-gray-300 p-2">Count</th>
                      <th className="border border-gray-300 p-2">Array State</th>
                    </tr>
                  </thead>
                  <tbody className="text-green-800">
                    <tr><td className="border p-2 text-center font-bold">Start</td><td className="border p-2" colSpan={4}></td><td className="border p-2 font-mono">4,2,7,1,9,3</td></tr>
                    <tr><td className="border p-2 text-center">1</td><td className="border p-2 text-center">4</td><td className="border p-2 text-center">2</td><td className="border p-2 text-center">YES</td><td className="border p-2 text-center">1</td><td className="border p-2 font-mono">2,4,7,1,9,3</td></tr>
                    <tr><td className="border p-2 text-center">2</td><td className="border p-2 text-center">4</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">NO</td><td className="border p-2 text-center">1</td><td className="border p-2 font-mono">2,4,7,1,9,3</td></tr>
                    <tr><td className="border p-2 text-center">3</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">1</td><td className="border p-2 text-center">YES</td><td className="border p-2 text-center">2</td><td className="border p-2 font-mono">2,4,1,7,9,3</td></tr>
                    <tr><td className="border p-2 text-center">4</td><td className="border p-2 text-center">7</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">NO</td><td className="border p-2 text-center">2</td><td className="border p-2 font-mono">2,4,1,7,9,3</td></tr>
                    <tr><td className="border p-2 text-center">5</td><td className="border p-2 text-center">9</td><td className="border p-2 text-center">3</td><td className="border p-2 text-center">YES</td><td className="border p-2 text-center">3</td><td className="border p-2 font-mono">2,4,1,7,3,9</td></tr>
                  </tbody>
                </table>
              </div>
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(c) What is the final value of Count output by the algorithm? <span className="text-gray-500 font-normal">[1 mark]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <p className="mt-2 text-green-800 bg-green-50 p-3 rounded-lg text-sm">Count = 7 (total swaps across all passes)</p>
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(d) Modify the algorithm to sort in DESCENDING order. <span className="text-gray-500 font-normal">[1 mark]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <p className="mt-2 text-green-800 bg-green-50 p-3 rounded-lg text-sm">Change line: <code className="bg-gray-100 px-1">IF Numbers[j] &gt; Numbers[j + 1]</code> → <code className="bg-gray-100 px-1">IF Numbers[j] &lt; Numbers[j + 1]</code></p>
            </details>
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Question 2 — Algorithm Design</h2>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">25 marks</span>
        </div>

        <p className="text-gray-700 mb-4">A library system needs to manage books. Each book has: BookID (STRING), Title (STRING), Author (STRING), IsAvailable (BOOLEAN).</p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(a) Declare a suitable record type for a book. <span className="text-gray-500 font-normal">[3 marks]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <CodeBlock language="pseudocode" code={`TYPE BookRecord
   DECLARE BookID : STRING
   DECLARE Title : STRING
   DECLARE Author : STRING
   DECLARE IsAvailable : BOOLEAN
ENDTYPE`} />
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(b) Declare an array to store 50 books and write pseudocode to input data for all 50. <span className="text-gray-500 font-normal">[5 marks]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <CodeBlock language="pseudocode" code={`DECLARE Library : ARRAY[1:50] OF BookRecord
DECLARE i : INTEGER

FOR i ← 1 TO 50
   INPUT Library[i].BookID
   INPUT Library[i].Title
   INPUT Library[i].Author
   Library[i].IsAvailable ← TRUE
NEXT i`} />
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-2">(c) Write a FUNCTION SearchBook that takes a BookID and returns the position (-1 if not found). <span className="text-gray-500 font-normal">[6 marks]</span></p>
            <details className="mt-2">
              <summary className="text-indigo-600 cursor-pointer font-medium text-sm">Show Answer</summary>
              <CodeBlock language="pseudocode" code={`FUNCTION SearchBook(Target : STRING) RETURNS INTEGER
   DECLARE i : INTEGER
   FOR i ← 1 TO 50
      IF Library[i].BookID = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   RETURN -1
ENDFUNCTION`} />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
