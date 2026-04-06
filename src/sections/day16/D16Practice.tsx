import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D16Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setRevealed(p => ({ ...p, [k]: !p[k] }));

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Trace Tables</h1>
      <p className="text-gray-500 mb-6">Try each trace on paper first, then reveal the answer</p>

      {[
        {
          id: 'p1', num: 1, title: 'Simple accumulator',
          code: `DECLARE Count : INTEGER\nDECLARE Sum : INTEGER\nCount ← 1\nSum ← 0\nWHILE Count <= 4\n   Sum ← Sum + Count * 2\n   Count ← Count + 1\nENDWHILE\nOUTPUT Sum`,
          solution: `Count | Sum  | Count<=4? | OUTPUT
  1   |  0  |    —      |
      |  2  |  TRUE     |
  2   |     |           |
      |  6  |  TRUE     |
  3   |     |           |
      | 12  |  TRUE     |
  4   |     |           |
      | 20  |  TRUE     |
  5   |     |  FALSE    | 20

Output: 20 (2+4+6+8 = 20)`,
        },
        {
          id: 'p2', num: 2, title: 'REPEAT loop with condition',
          code: `DECLARE X : INTEGER\nX ← 10\nREPEAT\n   X ← X - 3\nUNTIL X < 0\nOUTPUT X`,
          solution: `X    | X<0? | OUTPUT
10   |  —  |
 7   | FALSE|
 4   | FALSE|
 1   | FALSE|
-2   | TRUE |  -2

Output: -2
Note: REPEAT always runs at least once. Check UNTIL after each run.`,
        },
        {
          id: 'p3', num: 3, title: 'Nested IF in loop',
          code: `DECLARE i : INTEGER\nDECLARE Val : INTEGER\nVal ← 0\nFOR i ← 1 TO 5\n   IF i MOD 2 = 0\n      THEN\n         Val ← Val + i\n   ENDIF\nNEXT i\nOUTPUT Val`,
          solution: `i | i MOD 2 | i MOD 2=0? | Val | OUTPUT
1 |    1    |   FALSE    |  0  |
2 |    0    |   TRUE     |  2  |
3 |    1    |   FALSE    |     |
4 |    0    |   TRUE     |  6  |
5 |    1    |   FALSE    |     |
END                            |  6

Output: 6 (2+4 = 6, only even numbers added)`,
        },
      ].map((ex) => (
        <div key={ex.id} className="card mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Exercise {ex.num}: {ex.title}</h2>
          <p className="text-gray-600 text-sm mb-3">Trace this code and complete the trace table. Write your answer on paper first!</p>
          <CodeBlock code={ex.code} language="pseudocode" />
          <button onClick={() => toggle(ex.id)} className="btn-primary text-sm mt-4">
            {revealed[ex.id] ? 'Hide Answer' : 'Show Answer'}
          </button>
          {revealed[ex.id] && (
            <div className="mt-4 bg-gray-900 rounded-xl p-4">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">{ex.solution}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
