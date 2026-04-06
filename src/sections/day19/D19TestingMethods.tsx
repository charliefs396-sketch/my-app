export default function D19TestingMethods() {
  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔬 Testing Methods
      </h1>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
        <p className="text-blue-700">
          The Cambridge 9618 syllabus requires you to know <strong>7 testing methods</strong>. The exam will ask you to
          <strong> describe</strong> them and explain <strong>when to use each</strong>.
        </p>
      </div>

      {/* All 7 Methods */}
      <div className="space-y-4">
        {/* Dry Run */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📝</span>
            <h2 className="text-xl font-bold text-gray-800">1. Dry Run</h2>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 mb-3 border border-indigo-200">
            <p className="text-sm text-indigo-700"><strong>Definition:</strong> Manually tracing through the code <strong>on paper</strong> using a <strong>trace table</strong>, without running it on a computer.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs font-bold text-green-700 mb-1">✅ Advantages</p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• No computer needed</li>
                <li>• Finds logic errors</li>
                <li>• Tests understanding of code</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-xs font-bold text-red-700 mb-1">❌ Disadvantages</p>
              <ul className="text-xs text-red-600 space-y-1">
                <li>• Time-consuming for long programs</li>
                <li>• Human error in tracing</li>
                <li>• Not practical for complex code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Walkthrough */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">👥</span>
            <h2 className="text-xl font-bold text-gray-800">2. Walkthrough</h2>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 mb-3 border border-indigo-200">
            <p className="text-sm text-indigo-700"><strong>Definition:</strong> A <strong>team of programmers</strong> reviews the code together, line by line, discussing potential issues.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs font-bold text-green-700 mb-1">✅ Advantages</p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Multiple perspectives catch more errors</li>
                <li>• Shares knowledge across team</li>
                <li>• Finds design issues early</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-xs font-bold text-red-700 mb-1">❌ Disadvantages</p>
              <ul className="text-xs text-red-600 space-y-1">
                <li>• Requires multiple people</li>
                <li>• Time-consuming meetings</li>
                <li>• May miss runtime errors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* White-box */}
        <div className="bg-white rounded-xl border-2 border-blue-300 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⬜</span>
            <h2 className="text-xl font-bold text-gray-800">3. White-box Testing</h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">EXAM FAVOURITE</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-200">
            <p className="text-sm text-blue-700"><strong>Definition:</strong> Testing where the tester <strong>can see the code</strong>. Test data is chosen to test <strong>every path</strong> through the program (every IF branch, every loop condition).</p>
          </div>
          <p className="text-sm text-gray-700 mb-3">Also called: <strong>structural testing</strong>, <strong>glass-box testing</strong>, <strong>clear-box testing</strong></p>
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
            <p className="text-sm text-amber-700"><strong>Key point:</strong> The goal is <strong>100% code coverage</strong> — every line of code must be executed at least once during testing.</p>
          </div>
        </div>

        {/* Black-box */}
        <div className="bg-white rounded-xl border-2 border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⬛</span>
            <h2 className="text-xl font-bold text-gray-800">4. Black-box Testing</h2>
            <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded-full font-bold">EXAM FAVOURITE</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-300">
            <p className="text-sm text-gray-700"><strong>Definition:</strong> Testing where the tester <strong>cannot see the code</strong>. Only <strong>inputs and outputs</strong> are tested. The program is treated as a "black box".</p>
          </div>
          <p className="text-sm text-gray-700 mb-3">Also called: <strong>functional testing</strong></p>
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
            <p className="text-sm text-amber-700"><strong>Key point:</strong> Test data is based on the <strong>specification</strong> (what the program should do), not the code itself.</p>
          </div>
        </div>

        {/* White vs Black comparison */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-100 rounded-xl p-6 border border-blue-200">
          <h3 className="font-bold text-gray-800 mb-3">⚖️ White-box vs Black-box — The Most Tested Comparison!</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-2 font-bold">Feature</th>
                  <th className="text-left p-2 font-bold text-blue-600">⬜ White-box</th>
                  <th className="text-left p-2 font-bold">⬛ Black-box</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-2 font-semibold">Can see code?</td><td className="p-2">✅ Yes</td><td className="p-2">❌ No</td></tr>
                <tr className="border-t bg-white"><td className="p-2 font-semibold">What's tested?</td><td className="p-2">Every path in code</td><td className="p-2">Inputs and outputs only</td></tr>
                <tr className="border-t"><td className="p-2 font-semibold">Based on?</td><td className="p-2">The code structure</td><td className="p-2">The specification</td></tr>
                <tr className="border-t bg-white"><td className="p-2 font-semibold">Who does it?</td><td className="p-2">Developer (programmer)</td><td className="p-2">Tester / end user</td></tr>
                <tr className="border-t"><td className="p-2 font-semibold">Finds what?</td><td className="p-2">Logic errors, dead code</td><td className="p-2">Missing features, wrong outputs</td></tr>
                <tr className="border-t bg-white"><td className="p-2 font-semibold">Also called</td><td className="p-2">Structural / glass-box</td><td className="p-2">Functional testing</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stub Testing */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧩</span>
            <h2 className="text-xl font-bold text-gray-800">5. Stub Testing</h2>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 mb-3 border border-indigo-200">
            <p className="text-sm text-indigo-700"><strong>Definition:</strong> Replace incomplete modules with <strong>simple "stub" versions</strong> that return dummy data, so you can test the rest of the program.</p>
          </div>
          <p className="text-sm text-gray-700 mb-3">Example: You haven't written the search function yet, so you create a stub that always returns TRUE. This lets you test the rest of the program.</p>
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
            <p className="text-sm text-amber-700"><strong>When to use:</strong> When working in a team and some modules aren't finished yet, or when testing top-down.</p>
          </div>
        </div>

        {/* Alpha */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏢</span>
            <h2 className="text-xl font-bold text-gray-800">6. Alpha Testing</h2>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 mb-3 border border-indigo-200">
            <p className="text-sm text-indigo-700"><strong>Definition:</strong> Testing done <strong>internally</strong> by the <strong>development team</strong> or testers within the company, in a <strong>controlled environment</strong>.</p>
          </div>
          <p className="text-sm text-gray-700">Happens <strong>before</strong> beta testing. Done in the developer's office/lab.</p>
        </div>

        {/* Beta */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">👤</span>
            <h2 className="text-xl font-bold text-gray-800">7. Beta Testing</h2>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 mb-3 border border-indigo-200">
            <p className="text-sm text-indigo-700"><strong>Definition:</strong> Testing done by <strong>selected external users</strong> in a <strong>real environment</strong>. Users report bugs and feedback to the developers.</p>
          </div>
          <p className="text-sm text-gray-700">Happens <strong>after</strong> alpha testing. Done on users' own devices.</p>
        </div>

        {/* Alpha vs Beta */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="font-bold text-gray-800 mb-3">⚖️ Alpha vs Beta — Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-2 font-bold">Feature</th>
                  <th className="text-left p-2 font-bold text-purple-600">Alpha</th>
                  <th className="text-left p-2 font-bold text-pink-600">Beta</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-2 font-semibold">Who tests?</td><td className="p-2">Developers / internal team</td><td className="p-2">Selected external users</td></tr>
                <tr className="border-t bg-white"><td className="p-2 font-semibold">Where?</td><td className="p-2">In-house (controlled)</td><td className="p-2">User's environment (real)</td></tr>
                <tr className="border-t"><td className="p-2 font-semibold">When?</td><td className="p-2">First (before beta)</td><td className="p-2">After alpha testing</td></tr>
                <tr className="border-t bg-white"><td className="p-2 font-semibold">Purpose</td><td className="p-2">Find bugs before release</td><td className="p-2">Real-world feedback</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 All 7 Methods — Summary Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 font-bold">Method</th>
                <th className="text-left p-2 font-bold">Description</th>
                <th className="text-left p-2 font-bold">When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-2 font-semibold">Dry run</td><td className="p-2">Trace through code on paper</td><td className="p-2">Finding logic errors, exam questions</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-2 font-semibold">Walkthrough</td><td className="p-2">Team reviews code together</td><td className="p-2">Early development, team projects</td></tr>
              <tr className="border-t"><td className="p-2 font-semibold">White-box</td><td className="p-2">Test all code paths</td><td className="p-2">Developer testing every branch</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-2 font-semibold">Black-box</td><td className="p-2">Test inputs/outputs only</td><td className="p-2">Testing without seeing code</td></tr>
              <tr className="border-t"><td className="p-2 font-semibold">Stub testing</td><td className="p-2">Dummy modules for testing</td><td className="p-2">Modules not finished yet</td></tr>
              <tr className="border-t bg-gray-50"><td className="p-2 font-semibold">Alpha</td><td className="p-2">Internal testing</td><td className="p-2">Before public release</td></tr>
              <tr className="border-t"><td className="p-2 font-semibold">Beta</td><td className="p-2">External user testing</td><td className="p-2">Real-world validation</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
