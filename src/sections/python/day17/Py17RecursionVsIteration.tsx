import CodeBlock from '../../../components/CodeBlock';

export default function Py17RecursionVsIteration() {
  const recursive = `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`;

  const iterative = `def factorial_loop(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result`;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔄 Recursion vs Iteration</h2>
      <p className="text-gray-600 mb-6">Same problem, two different approaches</p>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-violet-700 mb-4">Recursive Factorial</h3>
          <CodeBlock code={recursive} language="python" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-emerald-700 mb-4">Iterative Factorial</h3>
          <CodeBlock code={iterative} language="python" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Feature</th>
                <th className="px-4 py-2 text-left text-violet-700">Recursion</th>
                <th className="px-4 py-2 text-left text-emerald-700">Iteration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Looks elegant?', 'Usually yes', 'Sometimes longer'],
                ['Uses stack frames?', 'Yes', 'No'],
                ['Risk', 'RecursionError', 'Infinite loop'],
                ['Often faster?', 'Usually no', 'Usually yes'],
                ['Best for', 'Self-similar problems', 'Simple repetition'],
              ].map(([a, b, c], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{a}</td>
                  <td className="px-4 py-2 text-violet-700">{b}</td>
                  <td className="px-4 py-2 text-emerald-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
