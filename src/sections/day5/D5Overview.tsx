export default function D5Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🎯 Day 5 – String Manipulation</h1>
      <p className="text-gray-500 mb-6 text-lg">Taking strings apart, building them up, and processing them character by character</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn Today</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Strings aren't just text you print out — at A Level you need to <strong>take them apart</strong>, 
          <strong> examine each character</strong>, <strong>convert between types</strong>, and <strong>build new strings</strong>. 
          This is one of the <strong>most heavily tested topics</strong> in Cambridge 9618.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Good news: these functions are given on your <strong>exam insert page</strong> (you don't memorise the exact names). 
          But you <strong>MUST know how to USE them correctly</strong> — that's what gets the marks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2 text-lg">🔧 String Functions</h3>
            <p className="text-indigo-700 text-sm leading-relaxed mb-2">
              Built-in tools: <strong>LENGTH</strong>, <strong>UCASE</strong>, <strong>LCASE</strong>, <strong>LEFT</strong>, <strong>RIGHT</strong>, <strong>MID</strong>, <strong>SUBSTRING</strong>
            </p>
            <p className="text-indigo-600 text-xs italic">
              "How long is this string?", "Give me the first 3 characters"
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2 text-lg">🔢 ASCII & Conversions</h3>
            <p className="text-purple-700 text-sm leading-relaxed mb-2">
              Converting between characters and numbers: <strong>ASC</strong>, <strong>CHR</strong>, <strong>NUM_TO_STR</strong>, <strong>STR_TO_NUM</strong>
            </p>
            <p className="text-purple-600 text-xs italic">
              "What number is 'A'?" → 65. Essential for encryption!
            </p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-2 text-lg">🔄 Char-by-Char Processing</h3>
            <p className="text-emerald-700 text-sm leading-relaxed mb-2">
              The A Level pattern: <strong>loop through every character</strong> using FOR + MID, checking or transforming each one.
            </p>
            <p className="text-emerald-600 text-xs italic">
              Count vowels, reverse a string, Caesar cipher — all use this pattern!
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🆕 What's NEW at A Level vs O Level?</h2>
        <p className="text-gray-600 mb-4">At O Level you might have used basic string operations. A Level goes much deeper:</p>
        
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
                <td className="py-3 pr-4 font-medium">String functions</td>
                <td className="py-3 pr-4">Maybe LENGTH and basic concatenation</td>
                <td className="py-3 font-bold text-indigo-600">MUST know LEFT, RIGHT, MID, SUBSTRING, UCASE, LCASE</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">ASCII</td>
                <td className="py-3 pr-4">Know what ASCII is (theory)</td>
                <td className="py-3 font-bold text-indigo-600">USE ASC() and CHR() in actual code — required for Caesar cipher!</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Char-by-char processing</td>
                <td className="py-3 pr-4">Not really tested</td>
                <td className="py-3 font-bold text-indigo-600">Major exam topic — loop through string, process each character</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Indexing</td>
                <td className="py-3 pr-4">Sometimes 0-indexed</td>
                <td className="py-3 font-bold text-indigo-600">Cambridge pseudocode is 1-INDEXED — first character is position 1, not 0!</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium">Type conversions</td>
                <td className="py-3 pr-4">Implicit (automatic)</td>
                <td className="py-3 font-bold text-indigo-600">EXPLICIT — must use NUM_TO_STR() and STR_TO_NUM()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why String Manipulation is CRITICAL for Exams</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 2 (Problem Solving)</h4>
              <p className="text-gray-600">"Write pseudocode to count the vowels in a string" or "Write pseudocode to encrypt 
              a message using Caesar cipher" — these are <strong>classic 6-8 mark questions</strong> that appear almost every year.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-bold text-gray-800">Paper 4 (Programming)</h4>
              <p className="text-gray-600">String manipulation in Python is tested directly. You'll need to process 
              text files, validate input, and transform strings. <strong>This is where pseudocode knowledge translates to code.</strong></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔐</span>
            <div>
              <h4 className="font-bold text-gray-800">Encryption Questions</h4>
              <p className="text-gray-600">Caesar cipher is a <strong>guaranteed topic</strong>. It combines string functions (MID), 
              ASCII (ASC/CHR), arithmetic (+ shift), and loops. If you master today's content, you can handle any encryption question.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="warning-box">
        <p className="font-bold text-red-800">🚨 The #1 Indexing Mistake</p>
        <p className="text-red-900 mt-1">
          Cambridge pseudocode strings are <strong>1-indexed</strong>. The first character is at position <strong>1</strong>, not 0. 
          So in <code className="bg-red-100 px-1 rounded">"Hello"</code>, <code className="bg-red-100 px-1 rounded">MID("Hello", 1, 1)</code> gives <code className="bg-red-100 px-1 rounded">"H"</code>. 
          If you write <code className="bg-red-100 px-1 rounded">MID("Hello", 0, 1)</code> you'll lose marks! 
          (Note: Python uses 0-indexing — don't mix them up!)
        </p>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 How to Study This Section</p>
        <p className="text-amber-900 mt-1">
          <strong>(1)</strong> Learn each function and what it does — try to predict the output before reading the answer. 
          <strong>(2)</strong> Master the character-by-character processing pattern — it's the foundation of all string exam questions. 
          <strong>(3)</strong> Do the practice — Caesar cipher is essential. 
          <strong>(4)</strong> Take the quiz to test yourself.
        </p>
      </div>
    </div>
  );
}
