import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D18Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">✍️ Practice Exercises</h2>
      <p className="text-gray-600">Try each exercise yourself before revealing hints or solutions.</p>

      {/* Exercise 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <span className="w-10 h-10 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Draw a Structure Chart: Student Management System</h3>
            <p className="text-gray-600 text-sm mt-1">Draw a structure chart for a system with modules: Main, InputStudents, FindHighest, DisplayResults. Show appropriate parameters between modules.</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            "Main sits at the top and calls all 3 other modules",
            "InputStudents needs Names and Marks arrays — it fills them, so arrows go DOWN (input) and UP (output) both with filled circles",
            "FindHighest needs Marks array (down ●) and returns Highest value (up ●) and HighestName (up ●)",
            "DisplayResults receives Names, Marks, Highest (down ●) — it only outputs, nothing comes back up",
            "If any module returns a boolean (e.g. Success), use empty circle ○ not filled circle ●",
          ].map((hint, i) => (
            <div key={i}>
              <button onClick={() => toggle(`e1h${i}`)} className="text-sm text-pink-600 hover:text-pink-800 font-medium">
                {revealed[`e1h${i}`] ? '▼' : '▶'} Hint {i + 1}
              </button>
              {revealed[`e1h${i}`] && <div className="mt-1 ml-4 p-3 bg-pink-50 border border-pink-200 rounded-lg text-sm text-pink-700">{hint}</div>}
            </div>
          ))}
          <button onClick={() => toggle('e1sol')} className="btn-primary text-sm mt-2">
            {revealed['e1sol'] ? 'Hide Solution' : 'Show Solution'}
          </button>
          {revealed['e1sol'] && (
            <div className="mt-3 space-y-3">
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-green-300">
                <pre>{`
                    ┌─────────────────┐
                    │      Main       │
                    └────────┬────────┘
           ┌─────────────────┼──────────────────┐
     ⬇️● Names         ⬇️● Names            ⬇️● Names
     ⬆️● Names         ⬇️● Marks            ⬇️● Marks
     ⬇️● Marks         ⬆️● Highest          ⬇️● Highest
     ⬆️● Marks         ⬆️● HighestName
           │                │                   │
  ┌────────┴──────┐  ┌──────┴──────┐  ┌────────┴────────┐
  │ InputStudents │  │FindHighest  │  │ DisplayResults  │
  └───────────────┘  └─────────────┘  └─────────────────┘`}</pre>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                <strong>Note:</strong> InputStudents returns arrays (⬆️●) because it fills them. FindHighest returns data values. DisplayResults only receives — nothing goes back up.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <span className="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Convert Pseudocode to Flowchart</h3>
            <p className="text-gray-600 text-sm mt-1">Convert this pseudocode to a flowchart. Draw on paper and check your symbols!</p>
          </div>
        </div>
        <CodeBlock language="pseudocode" code={`DECLARE Total : INTEGER
DECLARE Count : INTEGER
DECLARE Num : INTEGER
Total ← 0
Count ← 0

REPEAT
   OUTPUT "Enter number (-1 to stop): "
   INPUT Num
   IF Num <> -1
      THEN
         Total ← Total + Num
         Count ← Count + 1
   ENDIF
UNTIL Num = -1

IF Count > 0
   THEN
      OUTPUT "Average: ", Total / Count
   ELSE
      OUTPUT "No numbers entered"
ENDIF`} />
        <div className="space-y-3 mt-4">
          {[
            "Start with START, then two rectangles for Total←0 and Count←0",
            "REPEAT means the process box comes BEFORE the diamond — draw parallelogram (INPUT Num) before the condition",
            "Inside the loop: diamond for Num<>-1, then two rectangles (Total+Num, Count+1), then UNTIL diamond at bottom",
            "After the loop: diamond for Count>0 with two branches (YES → output average, NO → output message)",
            "Both branches join and flow to STOP",
          ].map((hint, i) => (
            <div key={i}>
              <button onClick={() => toggle(`e2h${i}`)} className="text-sm text-rose-600 hover:text-rose-800 font-medium">
                {revealed[`e2h${i}`] ? '▼' : '▶'} Hint {i + 1}
              </button>
              {revealed[`e2h${i}`] && <div className="mt-1 ml-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-sm text-rose-700">{hint}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <span className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Convert Flowchart to Pseudocode</h3>
            <p className="text-gray-600 text-sm mt-1">Convert this described flowchart to pseudocode:</p>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
              START → Rectangle: Counter←0, Sum←0 → Diamond: Counter &lt; 5? → YES: Parallelogram: INPUT Value → Rectangle: Sum←Sum+Value, Counter←Counter+1 → (back to diamond) → NO: Parallelogram: OUTPUT Sum/5 → STOP
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <button onClick={() => toggle('e3sol')} className="btn-primary text-sm">
            {revealed['e3sol'] ? 'Hide Solution' : 'Show Solution'}
          </button>
          {revealed['e3sol'] && (
            <CodeBlock language="pseudocode" code={`DECLARE Counter : INTEGER
DECLARE Sum : INTEGER
DECLARE Value : INTEGER

Counter ← 0
Sum ← 0

WHILE Counter < 5
   INPUT Value
   Sum ← Sum + Value
   Counter ← Counter + 1
ENDWHILE

OUTPUT Sum / 5`} />
          )}
        </div>
      </div>

      {/* Exercise 4 - Past paper style */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <span className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">🌟 Past Paper Style: Structure Chart Description</h3>
            <p className="text-gray-600 text-sm mt-1">A library system has the following modules: Main, AddBook, SearchBook, DeleteBook, SaveToFile. Describe what parameters each module would need and the direction of each parameter using the correct circle notation.</p>
          </div>
        </div>
        <button onClick={() => toggle('e4sol')} className="btn-primary text-sm">
          {revealed['e4sol'] ? 'Hide Solution' : 'Show Solution'}
        </button>
        {revealed['e4sol'] && (
          <div className="mt-3 space-y-3">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-purple-50"><th className="text-left p-3 border border-purple-200 text-purple-800">Module</th><th className="text-left p-3 border border-purple-200 text-purple-800">Parameters In (⬇️)</th><th className="text-left p-3 border border-purple-200 text-purple-800">Parameters Out (⬆️)</th></tr></thead>
                <tbody>
                  {[
                    ['Main', 'None (it\'s the top module)', 'None'],
                    ['AddBook', '● Books array, ● Count', '● Books array (updated), ● Count (updated)'],
                    ['SearchBook', '● Books array, ● Count, ● Target title', '○ Found (boolean flag)'],
                    ['DeleteBook', '● Books array, ● Count, ● Target', '● Books array (updated), ● Count (updated), ○ Deleted flag'],
                    ['SaveToFile', '● Books array, ● Count, ● Filename', '○ Success flag'],
                  ].map(([mod, inP, outP], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-bold text-purple-700 border border-gray-200">{mod}</td>
                      <td className="p-3 text-gray-700 border border-gray-200">{inP}</td>
                      <td className="p-3 text-gray-700 border border-gray-200">{outP}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-700">
              <strong>Key pattern:</strong> Arrays that get modified use ● both ways (in and out). Boolean results use ○ going up. The filename is data so it uses ●.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
