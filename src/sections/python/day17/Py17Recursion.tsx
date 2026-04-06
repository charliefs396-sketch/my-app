import CodeBlock from '../../../components/CodeBlock';

export default function Py17Recursion() {
  const code = `def factorial(n):
    if n <= 1:          # Base case
        return 1
    return n * factorial(n - 1)    # Recursive case

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def sum_digits(n):
    if n < 10:
        return n
    return (n % 10) + sum_digits(n // 10)

def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(factorial(5))        # 120
print(fibonacci(7))        # 13
print(sum_digits(1234))    # 10
print(power(2, 8))         # 256`;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔁 Recursive Functions</h2>
      <p className="text-gray-600 mb-6">Your exact Day 17 code, with each pattern explained clearly</p>

      <CodeBlock code={code} language="python" />

      <div className="grid md:grid-cols-2 gap-6 mt-8 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-3">📌 Factorial</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Factorial means multiplying all whole numbers down to 1.
          </p>
          <div className="bg-violet-50 rounded-lg p-4 font-mono text-sm text-gray-800">
            5! = 5 × 4 × 3 × 2 × 1 = 120
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p><strong>Base case:</strong> if n {'<='} 1 → return 1</p>
            <p><strong>Recursive case:</strong> return n * factorial(n - 1)</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-3">🌱 Fibonacci</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Each Fibonacci number is the sum of the two previous ones.
          </p>
          <div className="bg-emerald-50 rounded-lg p-4 font-mono text-sm text-gray-800">
            0, 1, 1, 2, 3, 5, 8, 13, ...
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p><strong>Base case:</strong> if n {'<='} 1 → return n</p>
            <p><strong>Recursive case:</strong> fibonacci(n-1) + fibonacci(n-2)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">🧮 Trace: factorial(4)</h3>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-800 leading-relaxed">
          factorial(4) = 4 * factorial(3)
          <br />factorial(3) = 3 * factorial(2)
          <br />factorial(2) = 2 * factorial(1)
          <br />factorial(1) = 1  ← base case
          <br /><br />factorial(2) = 2 * 1 = 2
          <br />factorial(3) = 3 * 2 = 6
          <br />factorial(4) = 4 * 6 = 24
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-3">🔢 sum_digits(n)</h3>
          <p className="text-sm text-gray-700 mb-3">Break the number into:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Last digit: <code>n % 10</code></li>
            <li>Rest of number: <code>n // 10</code></li>
          </ul>
          <div className="mt-4 bg-blue-50 rounded-lg p-4 font-mono text-sm text-gray-800">
            sum_digits(1234)
            <br />= 4 + sum_digits(123)
            <br />= 4 + 3 + sum_digits(12)
            <br />= 4 + 3 + 2 + sum_digits(1)
            <br />= 4 + 3 + 2 + 1
            <br />= 10
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-3">⚡ power(base, exp)</h3>
          <p className="text-sm text-gray-700 mb-3">This computes repeated multiplication:</p>
          <div className="bg-amber-50 rounded-lg p-4 font-mono text-sm text-gray-800">
            power(2, 4)
            <br />= 2 * power(2, 3)
            <br />= 2 * 2 * power(2, 2)
            <br />= 2 * 2 * 2 * power(2, 1)
            <br />= 2 * 2 * 2 * 2 * power(2, 0)
            <br />= 16
          </div>
          <p className="mt-4 text-sm text-gray-700"><strong>Base case:</strong> if exponent is 0, return 1.</p>
        </div>
      </div>
    </div>
  );
}
