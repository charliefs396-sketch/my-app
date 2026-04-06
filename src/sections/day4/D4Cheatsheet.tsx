import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D4Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    const n = new Set(checked);
    n.has(i) ? n.delete(i) : n.add(i);
    setChecked(n);
  };

  const items = [
    "I can write a FOR loop with correct syntax (FOR...TO...NEXT Counter)",
    "I can use STEP in a FOR loop (counting by 2, counting backwards)",
    "I know that FOR loops are COUNT-CONTROLLED",
    "I can trace through a FOR loop and predict output",
    "I can write a WHILE loop with correct syntax (WHILE...ENDWHILE)",
    "I know WHILE is PRE-CONDITION (checks BEFORE running)",
    "I know WHILE can run ZERO times if condition is initially FALSE",
    "I can initialise variables properly before a WHILE loop",
    "I can write a REPEAT...UNTIL loop with correct syntax",
    "I know REPEAT is POST-CONDITION (checks AFTER running)",
    "I know REPEAT always runs AT LEAST ONCE",
    "I understand WHILE condition is OPPOSITE of UNTIL condition",
    "I can choose the right loop type and JUSTIFY my choice",
    "I can use REPEAT for input validation",
    "I can use WHILE with a sentinel value pattern",
    "I can use FOR with an accumulator (running total)",
    "I can avoid infinite loops (always change the condition variable!)",
    "I know ENDWHILE is one word (not END WHILE)",
    "I know NEXT Counter includes the variable name",
    "I can combine loops with IF statements (validation + grading)",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Day 4 Cheatsheet — Loops</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything on one page — your quick reference</p>

      {/* FOR Loop Template */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">🔢 FOR Loop (Count-Controlled)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Basic FOR</h3>
            <CodeBlock code={`FOR Counter ← start TO end
   // body
NEXT Counter`} />
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-2">FOR with STEP</h3>
            <CodeBlock code={`FOR Counter ← start TO end STEP n
   // body
NEXT Counter`} />
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl text-sm">
          <p className="font-bold text-indigo-800 mb-1">Quick Facts:</p>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>Count-controlled — know exact iterations</li>
            <li>Counter auto-increments (or by STEP value)</li>
            <li>End with <strong>NEXT Counter</strong> (include variable name!)</li>
            <li>Use STEP -1 for counting backwards</li>
            <li>Iterations = (end - start) / step + 1</li>
          </ul>
        </div>
      </div>

      {/* WHILE Loop Template */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">🔄 WHILE Loop (Pre-Condition)</h2>
        
        <CodeBlock code={`// Initialise variable BEFORE the loop
Variable ← initial_value

WHILE condition_is_TRUE
   // body
   // MUST change something that affects condition!
ENDWHILE`} />

        <div className="bg-purple-50 p-4 rounded-xl text-sm mt-4">
          <p className="font-bold text-purple-800 mb-1">Quick Facts:</p>
          <ul className="list-disc list-inside text-purple-700 space-y-1">
            <li>Pre-condition — checks BEFORE running body</li>
            <li>Can run <strong>0 times</strong> if condition is initially FALSE</li>
            <li>Keeps going WHILE condition is TRUE</li>
            <li>Stops when condition becomes FALSE</li>
            <li>End with <strong>ENDWHILE</strong> (one word!)</li>
            <li>Must initialise variable before the loop</li>
            <li>Must change condition variable inside loop (avoid infinite loop!)</li>
          </ul>
        </div>
      </div>

      {/* REPEAT Loop Template */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">🔁 REPEAT Loop (Post-Condition)</h2>
        
        <CodeBlock code={`REPEAT
   // body runs FIRST
   // at least once guaranteed
UNTIL condition_is_TRUE`} />

        <div className="bg-emerald-50 p-4 rounded-xl text-sm mt-4">
          <p className="font-bold text-emerald-800 mb-1">Quick Facts:</p>
          <ul className="list-disc list-inside text-emerald-700 space-y-1">
            <li>Post-condition — checks AFTER running body</li>
            <li>Always runs <strong>at least once</strong></li>
            <li>Keeps going while condition is FALSE</li>
            <li>Stops when condition becomes TRUE</li>
            <li>End with <strong>UNTIL condition</strong></li>
            <li>No need to initialise — body runs before first check</li>
            <li>Perfect for input validation and menus</li>
          </ul>
        </div>
      </div>

      {/* Quick Comparison */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚡ Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-3 text-gray-600 font-bold"></th>
                <th className="py-3 px-3 text-indigo-600 font-bold">FOR</th>
                <th className="py-3 px-3 text-purple-600 font-bold">WHILE</th>
                <th className="py-3 px-3 text-emerald-600 font-bold">REPEAT</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-bold">Type</td>
                <td className="py-2 px-3">Count-controlled</td>
                <td className="py-2 px-3">Pre-condition</td>
                <td className="py-2 px-3">Post-condition</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 px-3 font-bold">Min runs</td>
                <td className="py-2 px-3">Known count</td>
                <td className="py-2 px-3 font-bold">0</td>
                <td className="py-2 px-3 font-bold">1</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-bold">Check when</td>
                <td className="py-2 px-3">Auto (counter)</td>
                <td className="py-2 px-3">Before</td>
                <td className="py-2 px-3">After</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 px-3 font-bold">Stops when</td>
                <td className="py-2 px-3">Counter passes end</td>
                <td className="py-2 px-3">Condition = FALSE</td>
                <td className="py-2 px-3">Condition = TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-bold">End keyword</td>
                <td className="py-2 px-3 font-mono">NEXT x</td>
                <td className="py-2 px-3 font-mono">ENDWHILE</td>
                <td className="py-2 px-3 font-mono">UNTIL ...</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 px-3 font-bold">Best for</td>
                <td className="py-2 px-3">Arrays, fixed count</td>
                <td className="py-2 px-3">Search, sentinel</td>
                <td className="py-2 px-3">Validation, menus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Guide */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Which Loop? (Quick Decision)</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-xl">
            <span className="text-xl">🔢</span>
            <div>
              <p className="font-bold text-indigo-800">"Process exactly N items" → FOR</p>
              <p className="text-indigo-700 text-sm">You know the count: "30 students", "12 months", "from 1 to 100"</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl">
            <span className="text-xl">🔄</span>
            <div>
              <p className="font-bold text-purple-800">"Keep going until something happens (might not happen)" → WHILE</p>
              <p className="text-purple-700 text-sm">File might be empty, list might already be sorted, search might find it immediately</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl">
            <span className="text-xl">🔁</span>
            <div>
              <p className="font-bold text-emerald-800">"Must do at least once, then check" → REPEAT</p>
              <p className="text-emerald-700 text-sm">Input validation, show a menu, roll dice, taste the food</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Common Exam Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Accumulator (Running Total)</h3>
            <CodeBlock code={`Total ← 0
FOR i ← 1 TO N
   Total ← Total + value
NEXT i`} />
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Counter</h3>
            <CodeBlock code={`Count ← 0
FOR i ← 1 TO N
   IF condition THEN
      Count ← Count + 1
   ENDIF
NEXT i`} />
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Input Validation</h3>
            <CodeBlock code={`REPEAT
   OUTPUT "Enter value: "
   INPUT Value
UNTIL Value >= min AND Value <= max`} />
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Sentinel Value</h3>
            <CodeBlock code={`INPUT Value
WHILE Value <> sentinel
   // process Value
   INPUT Value
ENDWHILE`} />
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Password + Max Attempts</h3>
            <CodeBlock code={`Pwd ← ""
Att ← 0
WHILE Pwd <> "secret" AND Att < 3
   Att ← Att + 1
   INPUT Pwd
ENDWHILE`} />
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-bold text-gray-700 mb-2">Menu System</h3>
            <CodeBlock code={`REPEAT
   // display menu
   INPUT Choice
   CASE OF Choice
      // handle options
   ENDCASE
UNTIL Choice = quit_option`} />
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Writing NEXT without the variable name</p>
              <p className="text-gray-600 text-sm">Wrong: <code className="bg-red-50 px-1 rounded">NEXT</code> → Right: <code className="bg-green-50 px-1 rounded">NEXT Counter</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Forgetting STEP -1 when counting backwards</p>
              <p className="text-gray-600 text-sm">Wrong: <code className="bg-red-50 px-1 rounded">FOR i ← 10 TO 1</code> → Right: <code className="bg-green-50 px-1 rounded">FOR i ← 10 TO 1 STEP -1</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Writing END WHILE (two words)</p>
              <p className="text-gray-600 text-sm">Wrong: <code className="bg-red-50 px-1 rounded">END WHILE</code> → Right: <code className="bg-green-50 px-1 rounded">ENDWHILE</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Mixing up WHILE and UNTIL conditions</p>
              <p className="text-gray-600 text-sm">WHILE uses the "keep going" condition. UNTIL uses the "stop" condition. They're opposites!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Infinite loops (not changing the condition variable)</p>
              <p className="text-gray-600 text-sm">Always ensure something inside the loop body changes what the condition checks!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">❌</span>
            <div>
              <p className="font-bold text-gray-800">Using WHILE when REPEAT is better (or vice versa)</p>
              <p className="text-gray-600 text-sm">Input validation → REPEAT (must ask once). Might not need to run → WHILE.</p>
            </div>
          </div>
        </div>
      </div>

      {/* WHILE vs UNTIL Quick Reference */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 WHILE ↔ UNTIL Condition Conversion</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 px-4 text-gray-600 font-bold">Scenario</th>
                <th className="py-3 px-4 text-purple-600 font-bold">WHILE version</th>
                <th className="py-3 px-4 text-emerald-600 font-bold">UNTIL version</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">Until correct password</td>
                <td className="py-2 px-4 font-mono text-sm">WHILE Pwd &lt;&gt; "abc"</td>
                <td className="py-2 px-4 font-mono text-sm">UNTIL Pwd = "abc"</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 px-4">Until positive number</td>
                <td className="py-2 px-4 font-mono text-sm">WHILE Num &lt;= 0</td>
                <td className="py-2 px-4 font-mono text-sm">UNTIL Num &gt; 0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4">Until valid range (0-100)</td>
                <td className="py-2 px-4 font-mono text-sm">WHILE M &lt; 0 OR M &gt; 100</td>
                <td className="py-2 px-4 font-mono text-sm">UNTIL M &gt;= 0 AND M &lt;= 100</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-2 px-4">Until user quits</td>
                <td className="py-2 px-4 font-mono text-sm">WHILE Ch &lt;&gt; "Q"</td>
                <td className="py-2 px-4 font-mono text-sm">UNTIL Ch = "Q"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Conversion trick:</p>
          <p className="text-amber-900 text-sm">Swap the operator: = ↔ &lt;&gt;, &lt; ↔ &gt;=, &gt; ↔ &lt;=, AND ↔ OR</p>
        </div>
      </div>

      {/* Checklist */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Confidence Checklist</h2>
        <p className="text-gray-600 mb-4">Tick off everything you're confident about:</p>
        <div className="space-y-2">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm flex items-center gap-3 ${
                checked.has(i)
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs ${
                checked.has(i) ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
              }`}>
                {checked.has(i) && '✓'}
              </span>
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
          <p className="text-2xl font-extrabold text-gray-800">{checked.size} / {items.length}</p>
          <p className="text-gray-500 text-sm">
            {checked.size === items.length
              ? '🌟 Perfect! You\'ve mastered Day 4 — Loops!'
              : checked.size >= 15
              ? '💪 Almost there! Review the unchecked items.'
              : checked.size >= 10
              ? '👍 Good progress! Keep going!'
              : '📚 Keep studying — tick items as you master them.'}
          </p>
        </div>
      </div>
    </div>
  );
}
