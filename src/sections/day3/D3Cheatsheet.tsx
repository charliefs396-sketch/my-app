import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D3Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const checklistItems = [
    "I know what selection means and can define it for the exam",
    "I can write a simple IF...THEN...ENDIF",
    "I can write IF...THEN...ELSE...ENDIF",
    "I know that THEN and ENDIF are ALWAYS required",
    "I know that = is for comparison, ← is for assignment",
    "I can use AND, OR, NOT in IF conditions",
    "I understand that ELSE IF does NOT exist in Cambridge pseudocode",
    "I can write properly nested IF statements (IF inside ELSE)",
    "I can count IFs and ENDIFs to make sure they match",
    "I can trace through nested IF with any input value",
    "I know the CASE OF...OTHERWISE...ENDCASE syntax",
    "I know to use OTHERWISE (not DEFAULT)",
    "I know when to use CASE vs when to use nested IF",
    "I can write a triangle classifier using nested IF",
    "I can write a grade calculator with validation using nested IF",
    "I can write a menu system using CASE",
    "I scored 10+ on the quiz"
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Day 3 Cheatsheet</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything about Selection on one page</p>

      {/* IF Statement Templates */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 IF Statement Templates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Simple IF (one path)</h3>
            <CodeBlock
              title="Template: Simple IF"
              code={`IF condition
   THEN
      statement(s)
ENDIF`}
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-2">IF...ELSE (two paths)</h3>
            <CodeBlock
              title="Template: IF...ELSE"
              code={`IF condition
   THEN
      statement(s) if TRUE
   ELSE
      statement(s) if FALSE
ENDIF`}
            />
          </div>
        </div>

        <h3 className="font-bold text-gray-700 mb-2 mt-4">Nested IF (multiple conditions)</h3>
        <CodeBlock
          title="Template: Nested IF"
          code={`IF condition1
   THEN
      // runs if condition1 is TRUE
   ELSE
      IF condition2
         THEN
            // runs if condition1 FALSE, condition2 TRUE
         ELSE
            IF condition3
               THEN
                  // runs if condition1 FALSE, condition2 FALSE, condition3 TRUE
               ELSE
                  // runs if ALL conditions are FALSE
            ENDIF
      ENDIF
ENDIF`}
        />
      </div>

      {/* CASE Template */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 CASE Statement Template</h2>
        <CodeBlock
          title="Template: CASE statement"
          code={`CASE OF Variable
   Value1 : statement(s)
   Value2 : statement(s)
   Value3 : statement(s)
   OTHERWISE statement(s)
ENDCASE`}
        />
      </div>

      {/* Quick Rules */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚡ Quick Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="font-bold text-green-800 mb-3">✅ IF Statement Rules</p>
            <ul className="text-green-700 text-sm space-y-2">
              <li>✅ Always use <strong>THEN</strong> after the condition</li>
              <li>✅ Always end with <strong>ENDIF</strong></li>
              <li>✅ ELSE is <strong>optional</strong></li>
              <li>✅ Use <strong>=</strong> for comparison in conditions</li>
              <li>✅ <strong>ELSE IF does NOT exist</strong> — use nested IF</li>
              <li>✅ Number of IFs = Number of ENDIFs</li>
              <li>✅ <strong>Indent</strong> the code inside THEN and ELSE</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="font-bold text-blue-800 mb-3">✅ CASE Statement Rules</p>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>✅ Start with <strong>CASE OF</strong> (don't forget OF)</li>
              <li>✅ End with <strong>ENDCASE</strong> (one word)</li>
              <li>✅ Use <strong>OTHERWISE</strong> (not DEFAULT)</li>
              <li>✅ Use <strong>colon :</strong> after each value</li>
              <li>✅ For <strong>exact values</strong> only (not ranges)</li>
              <li>✅ Checks <strong>one variable</strong></li>
              <li>✅ OTHERWISE is <strong>optional</strong> (but recommended)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* When to use which */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🤔 CASE vs Nested IF — Decision Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Situation</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Use This</th>
                <th className="py-3 text-gray-600 font-bold">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Check exact values (1, 2, 3...)</td>
                <td className="py-3 pr-4 font-bold text-blue-600">CASE</td>
                <td className="py-3">Menu options, day names</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Check ranges (&gt;=, &lt;=)</td>
                <td className="py-3 pr-4 font-bold text-indigo-600">Nested IF</td>
                <td className="py-3">Grade boundaries, age groups</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Check multiple variables</td>
                <td className="py-3 pr-4 font-bold text-indigo-600">Nested IF</td>
                <td className="py-3">Age AND hasID</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Using AND, OR, NOT</td>
                <td className="py-3 pr-4 font-bold text-indigo-600">IF</td>
                <td className="py-3">Complex conditions</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">TRUE/FALSE check</td>
                <td className="py-3 pr-4 font-bold text-indigo-600">Simple IF</td>
                <td className="py-3">IF Found = TRUE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">Question says "use CASE"</td>
                <td className="py-3 pr-4 font-bold text-blue-600">CASE</td>
                <td className="py-3">Do what the question says!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🚨 Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-red-800">❌ Using ELSE IF</p>
                <p className="text-red-700 text-sm mt-1">
                  <code className="bg-red-100 px-1 rounded">ELSE IF Mark &gt;= 70</code> → <strong>WRONG!</strong> 
                  Must nest a new IF inside the ELSE block.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800">❌ Forgetting ENDIF</p>
            <p className="text-red-700 text-sm mt-1">Every IF needs an ENDIF. 3 IFs = 3 ENDIFs. Count them!</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800">❌ Forgetting THEN</p>
            <p className="text-red-700 text-sm mt-1">IF without THEN is incomplete. <code className="bg-red-100 px-1 rounded">IF Age &gt;= 18 THEN</code> — always include it.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800">❌ Using DEFAULT in CASE</p>
            <p className="text-red-700 text-sm mt-1">It's OTHERWISE, not DEFAULT. Also ENDCASE (one word), not END CASE.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800">❌ Missing OF in CASE</p>
            <p className="text-red-700 text-sm mt-1"><code className="bg-red-100 px-1 rounded">CASE OF Choice</code> — the OF is required, don't write just <code className="bg-red-100 px-1 rounded">CASE Choice</code>.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <p className="font-bold text-red-800">❌ Using ← for comparison</p>
            <p className="text-red-700 text-sm mt-1">
              <code className="bg-red-100 px-1 rounded">IF Age ← 18</code> → WRONG! Use <code className="bg-red-100 px-1 rounded">IF Age = 18</code> for comparison.
            </p>
          </div>
        </div>
      </div>

      {/* Key Comparison Reference */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Comparison Operators Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-4 text-gray-600 font-bold">Symbol</th>
                <th className="py-2 pr-4 text-gray-600 font-bold">Meaning</th>
                <th className="py-2 text-gray-600 font-bold">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-mono">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">=</td><td className="py-2 pr-4 font-sans">Equal to</td><td className="py-2">IF Age = 18</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">&lt;&gt;</td><td className="py-2 pr-4 font-sans">Not equal to</td><td className="py-2">IF Name &lt;&gt; ""</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">&gt;</td><td className="py-2 pr-4 font-sans">Greater than</td><td className="py-2">IF Mark &gt; 50</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">&lt;</td><td className="py-2 pr-4 font-sans">Less than</td><td className="py-2">IF Temp &lt; 0</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">&gt;=</td><td className="py-2 pr-4 font-sans">Greater or equal</td><td className="py-2">IF Age &gt;= 18</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-bold">&lt;=</td><td className="py-2 pr-4 font-sans">Less or equal</td><td className="py-2">IF Count &lt;= 100</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Day 3 Confidence Checklist</h2>
        <p className="text-gray-500 mb-4">Tick everything off before moving to Day 4:</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500 font-medium">Progress</span>
            <span className="font-bold text-indigo-600">{checked.size}/{checklistItems.length}</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(checked.size / checklistItems.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {checklistItems.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full text-left p-3 rounded-xl border-2 transition-all text-sm flex items-center gap-3 ${
                checked.has(i)
                  ? 'border-green-300 bg-green-50 text-green-800'
                  : 'border-gray-200 hover:border-indigo-200 text-gray-700'
              }`}
            >
              <span className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${
                checked.has(i) ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
              }`}>
                {checked.has(i) && '✓'}
              </span>
              {item}
            </button>
          ))}
        </div>

        {checked.size === checklistItems.length && (
          <div className="mt-6 text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <p className="text-4xl mb-2">🎉</p>
            <p className="text-xl font-bold text-green-800">Day 3 Complete!</p>
            <p className="text-green-600 mt-1">You've mastered Selection! Ready for loops next.</p>
          </div>
        )}
      </div>
    </div>
  );
}
