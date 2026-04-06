export default function D4Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🎯 Day 4 – Loops (FOR, WHILE, REPEAT)</h1>
      <p className="text-gray-500 mb-6 text-lg">Making your programs repeat things — the real power of programming</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn Today</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          So far your programs run from top to bottom, maybe choosing a path with IF/CASE. But what if you need 
          to do something <strong>100 times</strong>? You're not going to write the same line 100 times! 
          Today you learn <strong>loops</strong> — how to make the computer repeat things automatically.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          There are <strong>3 types of loops</strong> in Cambridge pseudocode. Each one has a specific purpose, 
          and the exam WILL ask you to choose the right one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2 text-lg">🔢 FOR Loop</h3>
            <p className="text-indigo-700 text-sm leading-relaxed mb-2">
              <strong>Count-controlled</strong> — you know EXACTLY how many times to repeat.
            </p>
            <p className="text-indigo-600 text-xs italic">
              "Do this 10 times" or "Go through items 1 to 50"
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">🔄 WHILE Loop</h3>
            <p className="text-purple-700 text-sm leading-relaxed mb-2">
              <strong>Pre-condition</strong> — checks BEFORE running. Might run <strong>0 times</strong>.
            </p>
            <p className="text-purple-600 text-xs italic">
              "Keep going WHILE this is true" — but maybe it's already false!
            </p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2 text-lg">🔁 REPEAT Loop</h3>
            <p className="text-emerald-700 text-sm leading-relaxed mb-2">
              <strong>Post-condition</strong> — checks AFTER running. Always runs <strong>at least once</strong>.
            </p>
            <p className="text-emerald-600 text-xs italic">
              "Do this, then check if we should stop" — perfect for input validation!
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Real Life Analogies 🧠</h2>
        <p className="text-gray-600 mb-4">Understanding loops is easier with real-life examples:</p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-indigo-50 p-4 rounded-xl">
            <span className="text-3xl">🔢</span>
            <div>
              <h4 className="font-bold text-indigo-800">FOR = "Do 20 push-ups"</h4>
              <p className="text-indigo-700 text-sm">
                You know EXACTLY how many. You count: 1, 2, 3... 20. Done. That's a FOR loop — 
                you know the start (1), the end (20), and you count up each time.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-xl">
            <span className="text-3xl">🔄</span>
            <div>
              <h4 className="font-bold text-purple-800">WHILE = "While it's raining, stay inside"</h4>
              <p className="text-purple-700 text-sm">
                You check the weather FIRST. If it's already sunny, you go out immediately — <strong>you never stay inside</strong> (0 executions). 
                If it IS raining, you keep checking until it stops.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-emerald-50 p-4 rounded-xl">
            <span className="text-3xl">🔁</span>
            <div>
              <h4 className="font-bold text-emerald-800">REPEAT = "Taste the food, then decide if it needs more salt"</h4>
              <p className="text-emerald-700 text-sm">
                You MUST taste it at least once before you can decide. You can't check if it needs salt without tasting first. 
                That's why REPEAT always runs <strong>at least once</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Loops are CRITICAL for Exams</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 1 & 2 (Theory)</h4>
              <p className="text-gray-600">"Trace through this loop and write the output" is one of the <strong>most common 
              exam questions</strong>. You MUST be able to follow each iteration step by step.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 4 (Programming)</h4>
              <p className="text-gray-600">Every real program needs loops — processing arrays, searching, sorting, 
              input validation, menus. <strong>You cannot write a useful program without loops.</strong></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h4 className="font-bold text-gray-800">"Explain which loop" Questions (3-4 marks)</h4>
              <p className="text-gray-600">The exam will describe a scenario and ask you to <strong>justify which loop type</strong> you'd use. 
              You need to know the difference between pre-condition and post-condition, and when each applies.</p>
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
                <td className="py-3 pr-4 font-medium">FOR syntax</td>
                <td className="py-3 pr-4">Sometimes loose — might forget NEXT</td>
                <td className="py-3 font-bold text-indigo-600">MUST have FOR...TO...NEXT Counter — always name the counter in NEXT</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">STEP keyword</td>
                <td className="py-3 pr-4">Rarely used</td>
                <td className="py-3 font-bold text-indigo-600">Must know STEP for counting by 2s, backwards, etc.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">WHILE vs REPEAT</td>
                <td className="py-3 pr-4">Often used interchangeably</td>
                <td className="py-3 font-bold text-indigo-600">MUST know the difference — pre vs post condition, 0 times vs at least once</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Choosing loops</td>
                <td className="py-3 pr-4">Not tested much</td>
                <td className="py-3 font-bold text-indigo-600">Exam asks "justify which loop" — you need clear reasoning</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Loop tracing</td>
                <td className="py-3 pr-4">Simple traces</td>
                <td className="py-3 font-bold text-indigo-600">Complex traces with nested loops, counters, accumulators</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 How to Study This Section</p>
        <p className="text-amber-900 mt-1">
          Go through each loop type one at a time. For EACH one, make sure you understand: <strong>(1)</strong> the syntax, 
          <strong>(2)</strong> when to use it, <strong>(3)</strong> how to trace through it. Then do the practice exercises — 
          they specifically test choosing the RIGHT loop for the situation.
        </p>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 The #1 Exam Mistake</p>
        <p className="text-red-900 mt-1">
          Students use WHILE and REPEAT interchangeably. They are <strong>NOT the same!</strong> 
          WHILE checks <strong>before</strong> running (might run 0 times). 
          REPEAT checks <strong>after</strong> running (always runs at least once). 
          The exam WILL test this difference. Learn it properly today.
        </p>
      </div>
    </div>
  );
}
