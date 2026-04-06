export default function D20Maintenance() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🔧 Types of Maintenance
      </h1>
      <p className="text-gray-500 text-lg mb-8">The 3 types you MUST know — with examples and memory tricks</p>

      {/* Memory trick */}
      <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-indigo-800 text-lg mb-3">🧠 Memory Trick — Remember "CAP"</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center bg-white rounded-xl p-4 shadow-sm">
            <div className="text-5xl font-black text-red-500 mb-1">C</div>
            <div className="font-bold text-gray-800">Corrective</div>
            <div className="text-sm text-gray-500">Fix bugs</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-sm">
            <div className="text-5xl font-black text-blue-500 mb-1">A</div>
            <div className="font-bold text-gray-800">Adaptive</div>
            <div className="text-sm text-gray-500">New environment</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-sm">
            <div className="text-5xl font-black text-green-500 mb-1">P</div>
            <div className="font-bold text-gray-800">Perfective</div>
            <div className="text-sm text-gray-500">Better performance</div>
          </div>
        </div>
      </div>

      {/* Your exact table */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 The Exact Exam Table</h2>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="text-left p-4 font-bold">Type</th>
              <th className="text-left p-4 font-bold">What it is</th>
              <th className="text-left p-4 font-bold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-red-50 border-b border-gray-200">
              <td className="p-4 font-bold text-red-700">🐛 Corrective</td>
              <td className="p-4 text-gray-700">Fixing bugs</td>
              <td className="p-4 text-gray-600 italic">Fix crash when entering invalid date</td>
            </tr>
            <tr className="bg-blue-50 border-b border-gray-200">
              <td className="p-4 font-bold text-blue-700">🌍 Adaptive</td>
              <td className="p-4 text-gray-700">Adapting to new environment</td>
              <td className="p-4 text-gray-600 italic">Update for new OS version</td>
            </tr>
            <tr className="bg-green-50">
              <td className="p-4 font-bold text-green-700">🚀 Perfective</td>
              <td className="p-4 text-gray-700">Improving performance</td>
              <td className="p-4 text-gray-600 italic">Make search faster</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deep dive each type */}
      <div className="space-y-6 mb-8">
        {/* Corrective */}
        <div className="bg-white border-l-4 border-red-400 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🐛</span>
            <h2 className="text-xl font-bold text-red-700">Corrective Maintenance</h2>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Corrective maintenance</strong> involves fixing errors (bugs) that are found AFTER the system has been delivered and is being used. These are problems that weren't caught during testing.
          </p>
          <div className="bg-red-50 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-red-800 mb-2">📋 More Examples:</h3>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• Program crashes when a user enters a negative number</li>
              <li>• Tax calculation gives wrong result for certain values</li>
              <li>• Login system allows access with wrong password</li>
              <li>• Report generates incorrect totals at month end</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800"><strong>💡 Exam tip:</strong> Corrective = fixing something that is BROKEN. The bug already exists and is causing problems.</p>
          </div>
        </div>

        {/* Adaptive */}
        <div className="bg-white border-l-4 border-blue-400 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🌍</span>
            <h2 className="text-xl font-bold text-blue-700">Adaptive Maintenance</h2>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Adaptive maintenance</strong> involves modifying the system to keep it working in a changing environment. The software itself isn't broken — the world around it has changed.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-blue-800 mb-2">📋 More Examples:</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Update program to work with Windows 11 (was built for Windows 10)</li>
              <li>• Modify system to comply with new data protection law (GDPR)</li>
              <li>• Update VAT calculation after government changes the rate</li>
              <li>• Rewrite app to work on mobile phones (was desktop only)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800"><strong>💡 Exam tip:</strong> Adaptive = changing because the ENVIRONMENT changed, not because it was broken. Law changes, OS changes, hardware changes.</p>
          </div>
        </div>

        {/* Perfective */}
        <div className="bg-white border-l-4 border-green-400 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🚀</span>
            <h2 className="text-xl font-bold text-green-700">Perfective Maintenance</h2>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Perfective maintenance</strong> involves improving the system even though it's working correctly. Adding new features, improving performance, or making it easier to use.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-green-800 mb-2">📋 More Examples:</h3>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Make the search function run 10x faster</li>
              <li>• Add a new "export to PDF" feature users requested</li>
              <li>• Redesign the interface to be easier to use</li>
              <li>• Rewrite inefficient code to use less memory</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800"><strong>💡 Exam tip:</strong> Perfective = making something BETTER that already works. Adding features, improving speed, better user interface.</p>
          </div>
        </div>
      </div>

      {/* Classify these scenarios */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Classify These Scenarios (Exam Practice)</h2>
        <div className="space-y-3">
          {[
            { scenario: 'The payroll system calculates wrong salary when an employee works overtime.', answer: 'Corrective', color: 'red', reason: 'It\'s broken — calculating wrong values is a bug.' },
            { scenario: 'Add a dark mode option to the application.', answer: 'Perfective', color: 'green', reason: 'It works fine already — this is an improvement/new feature.' },
            { scenario: 'The system needs updating after the company switches from Windows to Mac.', answer: 'Adaptive', color: 'blue', reason: 'The environment (OS) changed, not a bug.' },
            { scenario: 'The database queries are taking too long — rewrite them to be faster.', answer: 'Perfective', color: 'green', reason: 'Improving performance of something that already works.' },
            { scenario: 'New privacy law requires storing less personal data.', answer: 'Adaptive', color: 'blue', reason: 'Changing due to external law change — adaptive.' },
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-50 border border-${item.color}-200 rounded-lg p-4`}>
              <p className="text-gray-800 font-medium mb-2">Scenario {i + 1}: <span className="italic">"{item.scenario}"</span></p>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 bg-${item.color}-200 text-${item.color}-800 rounded-full text-sm font-bold`}>
                  {item.answer}
                </span>
                <span className="text-sm text-gray-600">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
