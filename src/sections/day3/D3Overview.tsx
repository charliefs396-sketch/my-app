export default function D3Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🎯 Day 3 – Selection (IF and CASE)</h1>
      <p className="text-gray-500 mb-6 text-lg">Making your programs decide what to do</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn Today</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Days 1 and 2 taught you how to <strong>store data</strong> and <strong>work with it</strong>. 
          But so far, your programs just run every line from top to bottom. Today you learn how to make 
          programs <strong>choose different paths</strong> based on conditions. This is called <strong>selection</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2 text-lg">🔀 Simple IF</h3>
            <p className="text-indigo-700 text-sm leading-relaxed">
              IF...THEN...ELSE...ENDIF — the foundation of all decision-making in code. Every program uses this.
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">🪆 Nested IF</h3>
            <p className="text-purple-700 text-sm leading-relaxed">
              Putting IF statements inside other IF statements. <strong>A Level examiners love testing this</strong> — it's their favourite!
            </p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2 text-lg">📋 CASE Statement</h3>
            <p className="text-emerald-700 text-sm leading-relaxed">
              A cleaner alternative to many nested IFs. Perfect for menus and fixed options. Uses OTHERWISE not DEFAULT.
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Selection is So Important</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 1 & 2 (Theory)</h4>
              <p className="text-gray-600">You'll be given pseudocode with IF and CASE and asked to <strong>trace through it</strong> — 
              work out what the output is for specific inputs. Get the indentation wrong in your head, you get the wrong answer.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 4 (Programming)</h4>
              <p className="text-gray-600">Almost every programming question needs selection. Validation, grading, categorising, 
              searching — all need IF statements. You MUST get the syntax perfect.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">It's in EVERY Algorithm</h4>
              <p className="text-gray-600">Linear search? Needs IF. Binary search? Needs IF. Bubble sort? Needs IF. 
              Validation? Needs IF. There is no algorithm without selection.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">O Level vs A Level — What's Different?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Topic</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">O Level</th>
                <th className="py-3 text-gray-600 font-bold">A Level (What Changed)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">IF syntax</td>
                <td className="py-3 pr-4">Flexible, often missing THEN or ENDIF</td>
                <td className="py-3 font-bold text-indigo-600">MUST have IF, THEN, ELSE, ENDIF — every single time</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Nested IF</td>
                <td className="py-3 pr-4">Basic — maybe one level deep</td>
                <td className="py-3 font-bold text-indigo-600">Multi-level nesting, NO "ELSE IF" — you must nest properly</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">CASE</td>
                <td className="py-3 pr-4">Sometimes used DEFAULT</td>
                <td className="py-3 font-bold text-indigo-600">Must use OTHERWISE, ENDCASE — strict format</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Indentation</td>
                <td className="py-3 pr-4">Nice to have</td>
                <td className="py-3 font-bold text-indigo-600">Expected and can affect marks — shows program structure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 The BIGGEST A Level Trap</p>
        <p className="text-red-900 mt-1">
          In many other languages (Python, JavaScript), you can write <code className="bg-red-100 px-1 rounded">ELSE IF</code> or <code className="bg-red-100 px-1 rounded">ELIF</code>. 
          <strong> Cambridge pseudocode does NOT have ELSE IF!</strong> You must nest a brand new IF...ENDIF 
          inside the ELSE block. This catches out SO many students. Watch out for it.
        </p>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 How to Study This Section</p>
        <p className="text-amber-900 mt-1">
          Go through IF statements first (simple → nested), then CASE. Pay close attention to indentation 
          patterns — it's the key to understanding which ELSE matches which IF. 
          Then do ALL the practice exercises. The <strong>triangle classifier</strong> is a classic exam question.
        </p>
      </div>
    </div>
  );
}
