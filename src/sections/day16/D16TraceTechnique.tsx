import CodeBlock from '../../components/CodeBlock';

export default function D16TraceTechnique() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📐 Trace Technique — Step by Step</h1>
      <p className="text-gray-500 mb-6">The exact algorithm from your notes, fully traced</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Code to Trace</h2>
        <CodeBlock code={`DECLARE X : INTEGER
DECLARE Y : INTEGER
DECLARE Z : INTEGER

X ← 5
Y ← 3

FOR Z ← 1 TO 4
   IF X > Y
      THEN
         X ← X - 1
         Y ← Y + 1
      ELSE
         X ← X + 2
   ENDIF
NEXT Z

OUTPUT X
OUTPUT Y`} language="pseudocode" />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Complete Trace Table</h2>
        <p className="text-gray-600 mb-4 text-sm">Columns: Z (loop counter), X, Y, condition X&gt;Y (TRUE/FALSE), OUTPUT</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 border border-indigo-700 text-left">Z</th>
                <th className="p-3 border border-indigo-700 text-left">X</th>
                <th className="p-3 border border-indigo-700 text-left">Y</th>
                <th className="p-3 border border-indigo-700 text-left">X &gt; Y?</th>
                <th className="p-3 border border-indigo-700 text-left">Action taken</th>
                <th className="p-3 border border-indigo-700 text-left">OUTPUT</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['—', '5', '3', '—', 'X←5, Y←3 (initialise)', ''],
                ['1', '4', '4', 'TRUE (5>3)', 'X←5-1=4, Y←3+1=4', ''],
                ['2', '6', '', 'FALSE (4>4)', 'X←4+2=6', ''],
                ['3', '5', '5', 'TRUE (6>4)', 'X←6-1=5, Y←4+1=5', ''],
                ['4', '7', '', 'FALSE (5>5)', 'X←5+2=7', ''],
                ['END', '', '', '—', 'Loop finished', '7\n5'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-3 border border-gray-200 font-mono ${j === 5 && cell ? 'text-green-700 font-bold' : j === 3 ? (cell.includes('TRUE') ? 'text-green-700' : cell.includes('FALSE') ? 'text-red-600' : '') : 'text-gray-800'}`}>
                      {cell || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 rounded-xl p-4 mt-4">
          <p className="font-bold text-green-800 mb-1">Final Output:</p>
          <p className="font-mono text-green-700">7<br />5</p>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Key Observations</h2>
        <div className="space-y-3">
          {[
            { point: 'Start before the loop', detail: 'Write the initial values of X=5 and Y=3 BEFORE Z starts. The examiner needs to see initialisation.' },
            { point: 'Z column shows the iteration', detail: 'Write Z=1, Z=2, Z=3, Z=4 — each gets its own row(s). The NEXT Z updates Z at the END of each iteration.' },
            { point: 'Blank means unchanged', detail: 'In row Z=2, Y is blank because X+2 only changes X. Y stays at 4. Blank = not changed.' },
            { point: 'Output goes in its own column', detail: 'OUTPUT X and OUTPUT Y appear after the loop ends. Write 7 and 5 in separate rows of the OUTPUT column.' },
            { point: 'Show condition evaluation', detail: 'Writing TRUE/FALSE for each condition shows the examiner you evaluated it. Dont just write the result — show why.' },
          ].map((o, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><span className="font-bold text-gray-900">{o.point}: </span><span className="text-gray-600 text-sm">{o.detail}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
