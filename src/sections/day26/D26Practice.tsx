import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D26Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Binary Search — Practice</h1>
      <p className="text-gray-500 mb-8">4 exercises — attempt each one before revealing hints or solutions!</p>

      {/* Exercise 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <div>
            <h3 className="font-bold text-gray-800">Trace Binary Search on this array</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Easy</span>
          </div>
        </div>
        <p className="text-gray-700 mb-3">Array: [3, 7, 11, 15, 22, 28, 35, 42] — Size = 8. Target = 22. Complete a full trace table.</p>
        <button onClick={() => toggle('e1hint')} className="text-sm text-indigo-600 font-semibold mr-4 hover:underline">
          {revealed['e1hint'] ? '▼ Hide Hint' : '▶ Show Hint'}
        </button>
        <button onClick={() => toggle('e1sol')} className="text-sm text-green-600 font-semibold hover:underline">
          {revealed['e1sol'] ? '▼ Hide Solution' : '▶ Show Solution'}
        </button>
        {revealed['e1hint'] && (
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700">
            Start with Low=1, High=8. Calculate Mid=(1+8) DIV 2=4. Data[4]=15. Is 22 &gt; 15? Yes, so move Low up.
          </div>
        )}
        {revealed['e1sol'] && (
          <div className="mt-3">
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
                <thead className="bg-green-50">
                  <tr>{['Pass','Low','High','Mid','Data[Mid]','Action'].map(h=><th key={h} className="p-2 text-left font-bold text-green-800">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ['Start',1,8,'-','-','Initialise'],
                    [1,1,8,'(1+8) DIV 2 = 4',15,'22 > 15 → Low = 5'],
                    [2,5,8,'(5+8) DIV 2 = 6',28,'22 < 28 → High = 5'],
                    [3,5,5,'(5+5) DIV 2 = 5',22,'22 = 22 → RETURN 5 ✅'],
                  ].map((row,i)=>(
                    <tr key={i} className={i===3?'bg-green-50 font-semibold':i%2===0?'bg-white':'bg-gray-50'}>
                      {row.map((c,j)=><td key={j} className="p-2">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-green-700 font-semibold mt-2 text-sm">Found at index 5 in 3 passes!</p>
          </div>
        )}
      </div>

      {/* Exercise 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <div>
            <h3 className="font-bold text-gray-800">Trace NOT FOUND case</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Medium</span>
          </div>
        </div>
        <p className="text-gray-700 mb-3">Same array: [3, 7, 11, 15, 22, 28, 35, 42]. Target = 20. Show full trace including where Low &gt; High.</p>
        <button onClick={() => toggle('e2hint')} className="text-sm text-indigo-600 font-semibold mr-4 hover:underline">
          {revealed['e2hint'] ? '▼ Hide Hint' : '▶ Show Hint'}
        </button>
        <button onClick={() => toggle('e2sol')} className="text-sm text-green-600 font-semibold hover:underline">
          {revealed['e2sol'] ? '▼ Hide Solution' : '▶ Show Solution'}
        </button>
        {revealed['e2hint'] && (
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700">
            Keep going until Low &gt; High. At that point, write "Low &gt; High → EXIT WHILE → RETURN -1".
          </div>
        )}
        {revealed['e2sol'] && (
          <div className="mt-3">
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
                <thead className="bg-red-50">
                  <tr>{['Pass','Low','High','Mid','Data[Mid]','Action'].map(h=><th key={h} className="p-2 text-left font-bold text-red-800">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ['Start',1,8,'-','-','Initialise'],
                    [1,1,8,4,15,'20 > 15 → Low = 5'],
                    [2,5,8,6,28,'20 < 28 → High = 5'],
                    [3,5,5,5,22,'20 < 22 → High = 4'],
                    ['Check',5,4,'-','-','Low (5) > High (4) → EXIT → RETURN -1 ❌'],
                  ].map((row,i)=>(
                    <tr key={i} className={i===4?'bg-red-50 font-semibold':i%2===0?'bg-white':'bg-gray-50'}>
                      {row.map((c,j)=><td key={j} className="p-2">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Exercise 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
          <div>
            <h3 className="font-bold text-gray-800">Write the full Binary Search function</h3>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Medium</span>
          </div>
        </div>
        <p className="text-gray-700 mb-3">Write the complete Binary Search FUNCTION in pseudocode from memory. Include declaration, WHILE loop, both IF branches, and the -1 return.</p>
        <button onClick={() => toggle('e3sol')} className="text-sm text-green-600 font-semibold hover:underline">
          {revealed['e3sol'] ? '▼ Hide Solution' : '▶ Show Solution'}
        </button>
        {revealed['e3sol'] && (
          <div className="mt-3">
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
        )}
      </div>

      {/* Exercise 4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">4</span>
          <div>
            <h3 className="font-bold text-gray-800">🌟 Bonus — Explain Binary Search vs Linear Search</h3>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Exam Style</span>
          </div>
        </div>
        <p className="text-gray-700 mb-3">A student has an array of 1000 sorted names. Give TWO reasons why Binary Search is better than Linear Search for this data. [2 marks]</p>
        <button onClick={() => toggle('e4sol')} className="text-sm text-green-600 font-semibold hover:underline">
          {revealed['e4sol'] ? '▼ Hide Answer' : '▶ Show Answer'}
        </button>
        {revealed['e4sol'] && (
          <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800 space-y-2">
            <p>✅ <strong>Fewer comparisons</strong> — Binary Search needs at most log₂(1000) ≈ 10 comparisons, whereas Linear Search may need all 1000.</p>
            <p>✅ <strong>More efficient for large datasets</strong> — As N grows, Binary Search grows logarithmically (slowly) while Linear Search grows linearly (quickly).</p>
            <p className="text-green-600 text-xs mt-2">Note: You must also mention the data is already sorted (given in question), so no sorting overhead needed here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
