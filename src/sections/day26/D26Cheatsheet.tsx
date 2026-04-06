import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D26Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const items = [
    'I know Binary Search requires SORTED data',
    'I can write the full FUNCTION from memory',
    'I use DIV (not /) for the Mid calculation',
    'I know Low ← Mid + 1 for right half search',
    'I know High ← Mid - 1 for left half search',
    'I know RETURN -1 means not found',
    'I know the WHILE exits when Low > High',
    'I can complete a full trace table (6 columns)',
    'I know NOT to use CALL with functions',
    'I can explain Binary vs Linear Search efficiency',
    'I know log₂(N) is the worst case complexity',
    'I can adapt the function for strings',
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Binary Search Cheatsheet</h1>
      <p className="text-gray-500 mb-8">Everything on one page</p>

      <div className="mb-8">
        <h3 className="font-bold text-gray-800 mb-3">📝 The Complete Function</h3>
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
               THEN Low <- Mid + 1
               ELSE High <- Mid - 1
            ENDIF
      ENDIF
   ENDWHILE
   RETURN -1
ENDFUNCTION`} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-3">⚡ Quick Reference</h3>
          <div className="space-y-2 text-sm">
            {[
              ['Mid formula', '(Low + High) DIV 2'],
              ['Target found', 'RETURN Mid'],
              ['Target in right half', 'Low ← Mid + 1'],
              ['Target in left half', 'High ← Mid - 1'],
              ['Not found signal', 'RETURN -1'],
              ['Loop condition', 'WHILE Low <= High'],
              ['Exit condition', 'Low > High'],
              ['Worst case', 'log₂(N) comparisons'],
            ].map(([key, val], i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-600">{key}</span>
                <code className="text-indigo-700 font-mono text-xs font-bold">{val}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-3">⚖️ Binary vs Linear</h3>
          <div className="space-y-2 text-sm">
            {[
              ['Requires sorted data', '❌ No', '✅ Yes'],
              ['Worst case (N=1000)', '1000 checks', '10 checks'],
              ['Best case', '1 check', '1 check (Mid)'],
              ['Works on unsorted', '✅ Yes', '❌ No'],
              ['Type', 'FUNCTION', 'FUNCTION'],
            ].map(([label, linear, binary], i) => (
              <div key={i} className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-xs">
                <span className="text-gray-600 font-semibold">{label}</span>
                <span className="text-red-600">{linear}</span>
                <span className="text-green-600">{binary}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 mb-3">📋 Trace Table Template</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-indigo-50">
              <tr>{['Pass', 'Low', 'High', 'Mid (formula)', 'Data[Mid]', 'Action'].map(h=><th key={h} className="p-3 text-left font-bold text-indigo-800">{h}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ['Start', 1, 'Size', '-', '-', 'Initialise'],
                [1, '...', '...', '(L+H) DIV 2', '...', 'Found / → Left / → Right'],
                ['...', '...', '...', '...', '...', '...'],
                ['Check', '...', '...', '-', '-', 'Low > High → EXIT → RETURN -1'],
              ].map((row, i) => (
                <tr key={i} className={i%2===0?'bg-white':'bg-gray-50'}>
                  {row.map((c, j) => <td key={j} className="p-3 text-gray-500 italic text-xs">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 mb-3">❌ Common Mistakes</h3>
        <div className="space-y-2">
          {[
            ['Using / instead of DIV for Mid', 'Array indices must be integers. Use (Low + High) DIV 2'],
            ['Using CALL BinarySearch(...)', 'It\'s a FUNCTION, not PROCEDURE. Use: Position ← BinarySearch(...)'],
            ['Low ← Mid (not Mid + 1)', 'Causes infinite loop! Always use Mid + 1 and Mid - 1'],
            ['Forgetting RETURN -1', 'Without this, undefined value returned for not-found case'],
            ['Using unsorted data', 'Binary Search ONLY works on sorted arrays!'],
          ].map(([mistake, fix], i) => (
            <div key={i} className="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
              <span className="text-red-600 font-bold flex-shrink-0">❌</span>
              <div>
                <p className="text-red-800 font-semibold">{mistake}</p>
                <p className="text-red-600">✅ Fix: {fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold text-gray-800 mb-4">✅ Confidence Checklist</h3>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" checked={!!checked[i]} onChange={() => setChecked(prev => ({...prev, [i]: !prev[i]}))}
                className="w-4 h-4 rounded text-indigo-600" />
              <span className={`text-sm ${checked[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
          <p className="text-sm font-semibold text-indigo-700">
            {Object.values(checked).filter(Boolean).length}/{items.length} completed
            {Object.values(checked).filter(Boolean).length === items.length ? ' 🎉 Binary Search mastered!' : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
