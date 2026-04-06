import CodeBlock from '../../components/CodeBlock';

export default function D27Variations() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔄 Variations of Insertion Sort</h2>
      <p className="text-gray-500 mb-6">Exam often asks you to modify the sort — know these variations!</p>

      {/* Descending */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🔽 Descending Order — ONE Character Change!</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-amber-700">The Golden Rule: To sort descending, change <code>&gt;</code> to <code>&lt;</code> in the WHILE condition</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-blue-600 mb-2">Ascending (original)</p>
            <CodeBlock code={`WHILE j > 0 AND Data[j] > Key
   Data[j + 1] ← Data[j]
   j ← j - 1
ENDWHILE`} language="pseudocode" />
            <p className="text-xs text-gray-500 mt-1">Shifts elements that are LARGER than Key</p>
          </div>
          <div>
            <p className="font-bold text-fuchsia-600 mb-2">Descending (modified)</p>
            <CodeBlock code={`WHILE j > 0 AND Data[j] < Key
   Data[j + 1] ← Data[j]
   j ← j - 1
ENDWHILE`} language="pseudocode" />
            <p className="text-xs text-gray-500 mt-1">Shifts elements that are SMALLER than Key</p>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
          <p className="font-bold text-gray-700 mb-2">Trace: [5,3,8,1,9,2] sorted DESCENDING</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-fuchsia-50">
                <tr>
                  <th className="px-3 py-2 text-left text-fuchsia-700 font-bold">Pass</th>
                  <th className="px-3 py-2 text-left text-fuchsia-700 font-bold">Key</th>
                  <th className="px-3 py-2 text-left text-fuchsia-700 font-bold">Action</th>
                  <th className="px-3 py-2 text-left text-fuchsia-700 font-bold">Array After</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Start', '-', 'Initial state', '[5,3,8,1,9,2]'],
                  ['i=2', '3', '5 not < 3, no shift. Insert at pos 2', '[5,3,8,1,9,2]'],
                  ['i=3', '8', '5<8 shift, 3<8 shift. Insert at pos 1', '[8,5,3,1,9,2]'],
                  ['i=4', '1', '3 not < 1, no shift. Insert at pos 4', '[8,5,3,1,9,2]'],
                  ['i=5', '9', '1<9,3<9,5<9,8<9 all shift. Insert at pos 1', '[9,8,5,3,1,2]'],
                  ['i=6', '2', '1<2 shift. Insert at pos 5', '[9,8,5,3,2,1] ✓'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-3 py-2 ${j === 3 ? 'font-mono font-bold' : ''} ${i === 5 && j === 3 ? 'text-green-600' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Parallel Arrays */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🔗 Sorting Parallel Arrays</h3>
        <p className="text-sm text-gray-600 mb-4">When sorting marks, you must keep names aligned! Use a KeyName variable alongside Key.</p>
        <CodeBlock code={`PROCEDURE InsertionSortParallel(BYREF Marks : ARRAY, BYREF Names : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE j : INTEGER
   DECLARE Key : INTEGER
   DECLARE KeyName : STRING    // EXTRA variable for parallel array
   
   FOR i ← 2 TO Size
      Key ← Marks[i]
      KeyName ← Names[i]       // Save both values
      j ← i - 1
      WHILE j > 0 AND Marks[j] > Key
         Marks[j + 1] ← Marks[j]    // Shift mark right
         Names[j + 1] ← Names[j]    // Shift name right (keep aligned!)
         j ← j - 1
      ENDWHILE
      Marks[j + 1] ← Key        // Insert mark
      Names[j + 1] ← KeyName    // Insert name in same position
   NEXT i
ENDPROCEDURE

// Usage
CALL InsertionSortParallel(Marks, Names, 5)`} language="pseudocode" />
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-700 mb-2">📊 Example: Before and After</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-gray-600 mb-1">Before Sort:</p>
              <table className="w-full text-xs border border-gray-200 rounded">
                <thead className="bg-gray-100"><tr><th className="px-2 py-1">Pos</th><th className="px-2 py-1">Names</th><th className="px-2 py-1">Marks</th></tr></thead>
                <tbody>
                  {[['1','Ali','65'],['2','Sara','90'],['3','Omar','72'],['4','Zara','58'],['5','Raza','85']].map((r,i)=>(
                    <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                      <td className="px-2 py-1 text-center">{r[0]}</td><td className="px-2 py-1">{r[1]}</td><td className="px-2 py-1 text-center">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="font-bold text-gray-600 mb-1">After Sort (ascending):</p>
              <table className="w-full text-xs border border-gray-200 rounded">
                <thead className="bg-gray-100"><tr><th className="px-2 py-1">Pos</th><th className="px-2 py-1">Names</th><th className="px-2 py-1">Marks</th></tr></thead>
                <tbody>
                  {[['1','Zara','58'],['2','Ali','65'],['3','Omar','72'],['4','Raza','85'],['5','Sara','90']].map((r,i)=>(
                    <tr key={i} className={i%2===0?'bg-white':'bg-green-50'}>
                      <td className="px-2 py-1 text-center">{r[0]}</td><td className="px-2 py-1">{r[1]}</td><td className="px-2 py-1 text-center font-bold text-green-600">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Insertion vs Bubble full comparison */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">⚔️ Insertion Sort vs Bubble Sort — Full Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-bold text-gray-700">Feature</th>
                <th className="px-4 py-3 text-left font-bold text-fuchsia-600">Insertion Sort</th>
                <th className="px-4 py-3 text-left font-bold text-blue-600">Bubble Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Main operation', 'SHIFT elements right', 'SWAP adjacent pairs'],
                ['Key variable', 'Key (saves element to insert)', 'Temp (for 3-step swap)'],
                ['Inner loop', 'WHILE j > 0 AND Data[j] > Key', 'FOR j ← 1 TO Size - i'],
                ['Early exit', 'WHILE exits when correct position found', 'Swapped flag exits early'],
                ['Best case', 'O(n) — sorted array, no shifts', 'O(n) — with Swapped flag'],
                ['Worst case', 'O(n²) — reverse sorted', 'O(n²) — reverse sorted'],
                ['Best for', 'Nearly sorted, small datasets', 'General purpose'],
                ['Stability', 'Stable (equal elements keep order)', 'Stable'],
                ['Passes needed', 'n-1 (always)', 'n-1 max (may exit early)'],
              ].map(([feature, ins, bub], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-700">{feature}</td>
                  <td className="px-4 py-3 text-fuchsia-700">{ins}</td>
                  <td className="px-4 py-3 text-blue-700">{bub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
