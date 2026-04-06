import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D8Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const items = [
    'I can write a FUNCTION with correct syntax (FUNCTION...RETURNS...ENDFUNCTION)',
    'I know RETURNS goes in the header and RETURN goes inside the body',
    'I can write Linear Search using a FOR loop with RETURN i inside',
    'I can write Linear Search using a WHILE loop with a boolean flag',
    'I know to return -1 when the target is NOT found',
    'I always check IF Position <> -1 after calling LinearSearch',
    'I can count occurrences WITHOUT using early RETURN (use Count ← Count + 1)',
    'I can output all positions using a PROCEDURE with Found boolean flag',
    'I know FUNCTION returns a value; PROCEDURE does not',
    'I declare local variables with DECLARE inside the function',
    'I know linear search works on UNSORTED and SORTED arrays',
    'I know binary search (Day 9) is faster but needs a SORTED array',
    'I can trace through a linear search and fill in a trace table',
    'I know the worst case is checking ALL n elements',
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Cheatsheet — Linear Search</h1>
      <p className="text-gray-500 mb-8">Everything on one page. Tick off each item as you're confident!</p>

      {/* Template 1 */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Template 1 — Basic Search (FOR loop)</h2>
        <CodeBlock language="pseudocode" code={`FUNCTION LinearSearch(DataArray : ARRAY[1:SIZE] OF TYPE,
                      Size : INTEGER,
                      Target : TYPE) RETURNS INTEGER
   DECLARE i : INTEGER
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   RETURN -1
ENDFUNCTION`} />
      </div>

      {/* Template 2 */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Template 2 — Count Occurrences</h2>
        <CodeBlock language="pseudocode" code={`FUNCTION CountOccurrences(DataArray : ARRAY[1:SIZE] OF TYPE,
                          Size : INTEGER,
                          Target : TYPE) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   Count ← 0
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            Count ← Count + 1   // NEVER use RETURN here!
      ENDIF
   NEXT i
   RETURN Count
ENDFUNCTION`} />
      </div>

      {/* Template 3 */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Template 3 — Find All Positions (PROCEDURE)</h2>
        <CodeBlock language="pseudocode" code={`PROCEDURE FindAllPositions(DataArray : ARRAY[1:SIZE] OF TYPE,
                           Size : INTEGER,
                           Target : TYPE)
   DECLARE i : INTEGER
   DECLARE Found : BOOLEAN
   Found ← FALSE
   FOR i ← 1 TO Size
      IF DataArray[i] = Target
         THEN
            OUTPUT "Found at position ", i
            Found ← TRUE
      ENDIF
   NEXT i
   IF Found = FALSE
      THEN
         OUTPUT "Not found"
   ENDIF
ENDPROCEDURE`} />
      </div>

      {/* Template 4 - Calling */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Template 4 — Calling the Function</h2>
        <CodeBlock language="pseudocode" code={`// Calling a FUNCTION (use assignment ←)
Position ← LinearSearch(Names, 10, "Ali")
IF Position <> -1
   THEN
      OUTPUT "Found at position ", Position
   ELSE
      OUTPUT "Not found"
ENDIF

// Calling a PROCEDURE (no assignment needed)
FindAllPositions(Names, 10, "Ali")`} />
      </div>

      {/* Quick reference */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">⚡ Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 font-bold text-gray-600">Task</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600">Key Point</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600">Returns</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Find first match', 'FUNCTION', 'RETURN i inside loop — exits early', 'Position or -1'],
                ['Count all matches', 'FUNCTION', 'Count ← Count+1, RETURN after loop', 'Integer count'],
                ['Output all positions', 'PROCEDURE', 'OUTPUT inside loop + Found flag', 'Nothing'],
                ['WHILE search', 'FUNCTION', 'Found boolean stops loop', 'Position or -1'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-4 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">🚫 Common Exam Mistakes</h2>
        <div className="space-y-3">
          {[
            { wrong: 'FUNCTION Name(...) RETURN INTEGER', right: 'FUNCTION Name(...) RETURNS INTEGER', tip: 'RETURNS (with S) in header' },
            { wrong: 'Position = LinearSearch(...)', right: 'Position ← LinearSearch(...)', tip: 'Assignment uses ← not =' },
            { wrong: 'Using RETURN i inside a COUNT function', right: 'Use Count ← Count + 1 inside, RETURN Count after loop', tip: 'Never exit early when counting' },
            { wrong: 'Not checking IF Position <> -1', right: 'Always check before using Position', tip: '-1 means not found — using it as an index crashes!' },
            { wrong: 'Forgetting ENDFUNCTION', right: 'Every FUNCTION must end with ENDFUNCTION', tip: 'Easy mark lost if you forget this' },
            { wrong: 'RETURN -1 inside the loop', right: 'RETURN -1 must be AFTER the loop ends', tip: 'If inside the loop, it returns -1 on the first non-match!' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-500 text-sm font-bold flex-shrink-0">❌</span>
                <code className="text-red-700 font-mono text-xs">{item.wrong}</code>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-green-500 text-sm font-bold flex-shrink-0">✅</span>
                <code className="text-green-700 font-mono text-xs">{item.right}</code>
              </div>
              <p className="text-gray-500 text-xs ml-6">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="card">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          ✅ Confidence Checklist — {checked.size}/{items.length} Complete
        </h2>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all"
            style={{ width: `${(checked.size / items.length) * 100}%` }}
          />
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                checked.has(i) ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200 hover:border-sky-200'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                checked.has(i) ? 'bg-green-500 border-green-500' : 'border-gray-300'
              }`}>
                {checked.has(i) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className={`text-sm font-medium ${checked.has(i) ? 'text-green-800 line-through' : 'text-gray-700'}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
        {checked.size === items.length && (
          <div className="mt-6 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-4 text-white text-center">
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold">Day 8 Complete! Linear Search mastered!</p>
            <p className="text-sky-200 text-sm mt-1">Next up: Day 9 — Binary Search (much faster, but needs sorted data)</p>
          </div>
        )}
      </div>
    </div>
  );
}
