export default function D2Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🎯 Day 2 – Operators & Type Conversions</h1>
      <p className="text-gray-500 mb-6 text-lg">The tools that make your programs actually DO things</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn Today</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Yesterday you learned how to <strong>store data</strong> (variables, constants, data types). 
          Today you'll learn how to <strong>work with that data</strong> — doing maths, comparing values, 
          combining conditions, joining strings, and converting between types.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2 text-lg">📐 Arithmetic Operators</h3>
            <p className="text-indigo-700 text-sm leading-relaxed">
              +, −, *, / plus the A Level favourites: <strong>DIV</strong> (integer division) and <strong>MOD</strong> (remainder). 
              These come up in EVERY exam paper.
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">⚖️ Comparison Operators</h3>
            <p className="text-purple-700 text-sm leading-relaxed">
              =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;= — used in IF statements and loops. 
              You need all six for the exam.
            </p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2 text-lg">🔗 Logical Operators</h3>
            <p className="text-emerald-700 text-sm leading-relaxed">
              AND, OR, NOT — combine multiple conditions. Essential for complex IF statements 
              and search algorithms.
            </p>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-800 mb-2 text-lg">🔄 String Ops & Conversions</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Joining strings with &amp;, and converting between types using STR_TO_NUM and NUM_TO_STR. 
              New at A Level!
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why This Matters for the Exam</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 1 & 2 (Theory)</h4>
              <p className="text-gray-600">You'll be asked to read pseudocode with DIV, MOD, AND, OR and trace through it — 
              predict the output. If you don't know what <code className="bg-gray-100 px-1 rounded">17 MOD 5</code> gives, you'll get the whole trace wrong.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 4 (Programming)</h4>
              <p className="text-gray-600">You'll need to write programs that extract digits, validate input ranges, 
              combine multiple conditions, and convert data types.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">Every Single Algorithm</h4>
              <p className="text-gray-600">Searching, sorting, validation — they ALL use these operators. 
              Master them now and everything else becomes easier.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">O Level vs A Level — What's New?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Topic</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">O Level</th>
                <th className="py-3 text-gray-600 font-bold">A Level (NEW)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">DIV & MOD</td>
                <td className="py-3 pr-4">May have seen briefly</td>
                <td className="py-3 font-bold text-indigo-600">Must know deeply — digit extraction, even/odd checks, time conversions</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Logical Ops</td>
                <td className="py-3 pr-4">Basic AND, OR</td>
                <td className="py-3 font-bold text-indigo-600">Complex nested conditions, truth tables, NOT operator</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">String Concatenation</td>
                <td className="py-3 pr-4">Used + or &</td>
                <td className="py-3 font-bold text-indigo-600">Must use &amp; symbol specifically</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Type Conversions</td>
                <td className="py-3 pr-4">Not required</td>
                <td className="py-3 font-bold text-indigo-600">STR_TO_NUM, NUM_TO_STR — brand new!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 How to Study This Section</p>
        <p className="text-amber-900 mt-1">
          Go through each topic in order. Pay special attention to <strong>DIV and MOD</strong> — they're 
          the most tested operators at A Level. Then do ALL the practice exercises. The digit extraction 
          problem is a <strong>classic exam question</strong>.
        </p>
      </div>
    </div>
  );
}
