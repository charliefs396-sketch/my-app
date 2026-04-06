import CodeBlock from '../../../components/CodeBlock';

export default function Py17Cheatsheet() {
  const factorialTemplate = `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`;

  const checklist = [
    'I can explain what recursion means',
    'I know what a base case is',
    'I know what a recursive case is',
    'I can trace factorial step by step',
    'I can trace Fibonacci step by step',
    'I can write sum_digits recursively',
    'I can write power recursively',
    'I can write reverse_string recursively',
    'I can explain why recursion can crash without a base case',
    'I can compare recursion vs iteration',
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Cheatsheet</h2>
      <p className="text-gray-600 mb-6">Everything important from Day 17 on one page</p>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">🧩 Standard Recursive Pattern</h3>
        <CodeBlock code={factorialTemplate} language="python" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">⚡ Key Rules</h3>
        </div>
        <div className="p-6 space-y-3 text-sm text-gray-700">
          <p><strong>Rule 1:</strong> Every recursive function needs a base case.</p>
          <p><strong>Rule 2:</strong> Every recursive call must make progress toward that base case.</p>
          <p><strong>Rule 3:</strong> Trace down first, then back up.</p>
          <p><strong>Rule 4:</strong> If calls never stop, Python throws <code>RecursionError</code>.</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-amber-800 mb-4">🧠 Memory Tricks</h3>
        <ul className="space-y-2 text-sm text-amber-900 list-disc list-inside">
          <li><strong>Base case</strong> = STOP</li>
          <li><strong>Recursive case</strong> = AGAIN</li>
          <li><strong>Progress</strong> = CLOSER TO STOP</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">✅ Confidence Checklist</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 accent-violet-600" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
