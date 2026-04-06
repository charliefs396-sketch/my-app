import CodeBlock from '../../components/CodeBlock';

export default function D19TestData() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📊 Test Data Types
      </h1>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
        <p className="font-bold text-blue-800 text-lg mb-2">📖 Why Test Data Matters</p>
        <p className="text-blue-700">
          A program is only as good as its testing. You need to test with <strong>three types of data</strong> to
          prove your program works correctly AND handles errors gracefully.
        </p>
      </div>

      {/* The 3 Types */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border-2 border-green-300 p-5">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-green-700 text-lg mb-2">Normal Data</h3>
          <p className="text-sm text-gray-600 mb-3">Valid, expected data that the program <strong>should accept</strong> and process correctly.</p>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs font-bold text-green-700 mb-1">Example (mark 0-100):</p>
            <p className="text-sm font-mono text-green-800">55, 72, 83, 0, 100</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Pick values from the MIDDLE of the valid range</p>
        </div>

        <div className="bg-white rounded-xl border-2 border-red-300 p-5">
          <div className="text-3xl mb-2">❌</div>
          <h3 className="font-bold text-red-700 text-lg mb-2">Abnormal Data</h3>
          <p className="text-sm text-gray-600 mb-3">Invalid data that the program <strong>should reject</strong>. Also called <strong>erroneous</strong> data.</p>
          <div className="bg-red-50 rounded-lg p-3">
            <p className="text-xs font-bold text-red-700 mb-1">Example (mark 0-100):</p>
            <p className="text-sm font-mono text-red-800">-5, 101, 200, "abc", ""</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Include wrong types, negatives, and out-of-range values</p>
        </div>

        <div className="bg-white rounded-xl border-2 border-amber-300 p-5">
          <div className="text-3xl mb-2">⚠️</div>
          <h3 className="font-bold text-amber-700 text-lg mb-2">Boundary Data</h3>
          <p className="text-sm text-gray-600 mb-3">Values at the <strong>edges</strong> of the valid range. These find the most bugs!</p>
          <div className="bg-amber-50 rounded-lg p-3">
            <p className="text-xs font-bold text-amber-700 mb-1">Example (mark 0-100):</p>
            <p className="text-sm font-mono text-amber-800">-1, 0, 100, 101</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Always test: just below min, min, max, just above max</p>
        </div>
      </div>

      {/* The Boundary Rule */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
        <h2 className="text-xl font-bold text-gray-800 mb-3">🎯 The Boundary Data Rule — MEMORISE THIS!</h2>
        <p className="text-gray-700 mb-4">For any range from <strong>MIN</strong> to <strong>MAX</strong>, you need <strong>4 boundary values</strong>:</p>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-red-100 rounded-lg p-3 text-center border border-red-200">
            <p className="text-2xl font-black text-red-600">MIN - 1</p>
            <p className="text-xs text-red-700 font-semibold mt-1">Just BELOW valid</p>
            <p className="text-xs text-gray-500">Should be REJECTED</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 text-center border border-green-200">
            <p className="text-2xl font-black text-green-600">MIN</p>
            <p className="text-xs text-green-700 font-semibold mt-1">Lowest valid</p>
            <p className="text-xs text-gray-500">Should be ACCEPTED</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 text-center border border-green-200">
            <p className="text-2xl font-black text-green-600">MAX</p>
            <p className="text-xs text-green-700 font-semibold mt-1">Highest valid</p>
            <p className="text-xs text-gray-500">Should be ACCEPTED</p>
          </div>
          <div className="bg-red-100 rounded-lg p-3 text-center border border-red-200">
            <p className="text-2xl font-black text-red-600">MAX + 1</p>
            <p className="text-xs text-red-700 font-semibold mt-1">Just ABOVE valid</p>
            <p className="text-xs text-gray-500">Should be REJECTED</p>
          </div>
        </div>
        <p className="text-sm text-amber-700 mt-3 font-semibold">Example: For mark 0-100 → boundary values are: -1, 0, 100, 101</p>
      </div>

      {/* Full Test Plan */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Complete Test Plan Example</h2>
        <p className="text-gray-600 mb-3">Program: Validate a mark between 0 and 100, then assign a grade.</p>
        
        <CodeBlock code={`REPEAT
   OUTPUT "Enter mark (0-100): "
   INPUT Mark
UNTIL Mark >= 0 AND Mark <= 100

IF Mark >= 80
   THEN Grade ← "A"
   ELSE IF Mark >= 60
      THEN Grade ← "B"
      ELSE Grade ← "Fail"
   ENDIF
ENDIF
OUTPUT "Grade: ", Grade`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 font-bold">Test #</th>
                <th className="text-left p-2 font-bold">Test Data</th>
                <th className="text-left p-2 font-bold">Type</th>
                <th className="text-left p-2 font-bold">Expected Result</th>
                <th className="text-left p-2 font-bold">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t bg-green-50"><td className="p-2">1</td><td className="p-2 font-mono">55</td><td className="p-2">Normal</td><td className="p-2">Grade: Fail</td><td className="p-2 text-xs">Valid mid-range, below 60</td></tr>
              <tr className="border-t bg-green-50"><td className="p-2">2</td><td className="p-2 font-mono">72</td><td className="p-2">Normal</td><td className="p-2">Grade: B</td><td className="p-2 text-xs">Valid, between 60-79</td></tr>
              <tr className="border-t bg-green-50"><td className="p-2">3</td><td className="p-2 font-mono">85</td><td className="p-2">Normal</td><td className="p-2">Grade: A</td><td className="p-2 text-xs">Valid, 80 or above</td></tr>
              <tr className="border-t bg-amber-50"><td className="p-2">4</td><td className="p-2 font-mono">0</td><td className="p-2">Boundary</td><td className="p-2">Grade: Fail</td><td className="p-2 text-xs">Lowest valid mark (accepted)</td></tr>
              <tr className="border-t bg-amber-50"><td className="p-2">5</td><td className="p-2 font-mono">100</td><td className="p-2">Boundary</td><td className="p-2">Grade: A</td><td className="p-2 text-xs">Highest valid mark (accepted)</td></tr>
              <tr className="border-t bg-amber-50"><td className="p-2">6</td><td className="p-2 font-mono">-1</td><td className="p-2">Boundary</td><td className="p-2">Rejected, ask again</td><td className="p-2 text-xs">Just below minimum (rejected)</td></tr>
              <tr className="border-t bg-amber-50"><td className="p-2">7</td><td className="p-2 font-mono">101</td><td className="p-2">Boundary</td><td className="p-2">Rejected, ask again</td><td className="p-2 text-xs">Just above maximum (rejected)</td></tr>
              <tr className="border-t bg-red-50"><td className="p-2">8</td><td className="p-2 font-mono">-50</td><td className="p-2">Abnormal</td><td className="p-2">Rejected, ask again</td><td className="p-2 text-xs">Negative number</td></tr>
              <tr className="border-t bg-red-50"><td className="p-2">9</td><td className="p-2 font-mono">500</td><td className="p-2">Abnormal</td><td className="p-2">Rejected, ask again</td><td className="p-2 text-xs">Far above maximum</td></tr>
              <tr className="border-t bg-red-50"><td className="p-2">10</td><td className="p-2 font-mono">"abc"</td><td className="p-2">Abnormal</td><td className="p-2">Rejected / error</td><td className="p-2 text-xs">Wrong data type (string)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
        <p className="font-bold text-green-800 mb-2">💡 Exam Tip</p>
        <p className="text-green-700 text-sm">
          When creating a test plan in the exam, ALWAYS include <strong>at least one of each type</strong> (normal, abnormal, boundary).
          For boundary, always include <strong>all 4 values</strong> (MIN-1, MIN, MAX, MAX+1). This shows the examiner you truly understand testing.
        </p>
      </div>
    </div>
  );
}
