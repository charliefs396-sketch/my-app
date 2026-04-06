import CodeBlock from '../../components/CodeBlock';

export default function D16TraceExamples() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📊 More Trace Examples</h1>
      <p className="text-gray-500 mb-6">WHILE loops, arrays, and nested loops</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Example 2: WHILE Loop Trace</h2>
        <CodeBlock code={`DECLARE N : INTEGER
DECLARE Total : INTEGER
N ← 1
Total ← 0
WHILE N <= 5
   Total ← Total + N
   N ← N + 1
ENDWHILE
OUTPUT Total`} language="pseudocode" />
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-2 border border-purple-700">N</th>
                <th className="p-2 border border-purple-700">Total</th>
                <th className="p-2 border border-purple-700">N &lt;= 5?</th>
                <th className="p-2 border border-purple-700">OUTPUT</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1','0','—',''],
                ['','1','TRUE',''],
                ['2','','',''],
                ['','3','TRUE',''],
                ['3','','',''],
                ['','6','TRUE',''],
                ['4','','',''],
                ['','10','TRUE',''],
                ['5','','',''],
                ['','15','TRUE',''],
                ['6','','FALSE (loop ends)','15'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-2 border border-gray-200 text-center font-mono ${j === 3 && cell ? 'text-green-700 font-bold' : ''}`}>{cell || ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-indigo-700 font-semibold mt-2">Output: 15 (sum of 1+2+3+4+5)</p>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Example 3: Array Trace</h2>
        <CodeBlock code={`DECLARE Nums : ARRAY[1:4] OF INTEGER
DECLARE Max : INTEGER
Nums[1] ← 8
Nums[2] ← 3
Nums[3] ← 11
Nums[4] ← 5
Max ← Nums[1]
FOR i ← 2 TO 4
   IF Nums[i] > Max
      THEN Max ← Nums[i]
   ENDIF
NEXT i
OUTPUT Max`} language="pseudocode" />
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-rose-600 text-white">
                <th className="p-2 border border-rose-700">i</th>
                <th className="p-2 border border-rose-700">Max</th>
                <th className="p-2 border border-rose-700">Nums[i]</th>
                <th className="p-2 border border-rose-700">Nums[i] &gt; Max?</th>
                <th className="p-2 border border-rose-700">OUTPUT</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['—','8','—','—',''],
                ['2','','3','FALSE (3>8)',''],
                ['3','11','11','TRUE (11>8)',''],
                ['4','','5','FALSE (5>11)',''],
                ['END','','','','11'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-2 border border-gray-200 text-center font-mono ${j === 4 && cell ? 'text-green-700 font-bold' : j === 3 ? (cell.includes('TRUE') ? 'text-green-700' : cell.includes('FALSE') ? 'text-red-600' : '') : ''}`}>{cell || ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-green-700 font-semibold mt-2">Output: 11 (largest value)</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">🎯 Exam Tips for Trace Tables</h3>
        <ul className="space-y-1 text-amber-700 text-sm">
          <li>• Always check: do you have a column for EVERY variable declared?</li>
          <li>• WHILE: check condition BEFORE entering, and AGAIN each iteration</li>
          <li>• FOR: i starts at the initial value, and NEXT i increments it</li>
          <li>• If the output is wrong, trace again — you made an arithmetic error</li>
          <li>• Show ALL intermediate steps — don't combine multiple changes in one row</li>
        </ul>
      </div>
    </div>
  );
}
