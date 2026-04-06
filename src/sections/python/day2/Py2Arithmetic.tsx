import CodeBlock from '../../../components/CodeBlock';

export default function Py2Arithmetic() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">➕ Arithmetic Operators</h1>
      <p className="text-gray-500 mb-8">Python has 7 arithmetic operators. Most are the same as maths — but 3 are exam favourites!</p>

      {/* All 7 operators */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">All 7 Arithmetic Operators</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 rounded-xl">
                <th className="text-left py-3 px-4 text-gray-600 font-bold rounded-l-xl">Operator</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Name</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Example</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Result</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold rounded-r-xl">Pseudocode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['+', 'Addition', '17 + 5', '22', '+'],
                ['-', 'Subtraction', '17 - 5', '12', '-'],
                ['*', 'Multiplication', '17 * 5', '85', '*'],
                ['/', 'Division (float!)', '17 / 5', '3.4', '/'],
                ['//', 'Integer Division', '17 // 5', '3', 'DIV'],
                ['%', 'Modulus / Remainder', '17 % 5', '2', 'MOD'],
                ['**', 'Power / Exponent', '2 ** 8', '256', 'not available'],
              ].map(([op, name, ex, res, pseudo]) => (
                <tr key={op} className={op === '//' || op === '%' ? 'bg-yellow-50' : ''}>
                  <td className="py-3 px-4"><code className="text-lg font-bold text-emerald-700 font-mono">{op}</code></td>
                  <td className="py-3 px-4 text-gray-700 font-medium">{name} {(op === '//' || op === '%') && <span className="text-xs bg-yellow-200 text-yellow-800 px-1 rounded">⭐ exam fav</span>}</td>
                  <td className="py-3 px-4"><code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono">{ex}</code></td>
                  <td className="py-3 px-4"><code className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">{res}</code></td>
                  <td className="py-3 px-4"><code className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono text-xs">{pseudo}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* / vs // — the critical difference */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🔑 The Critical Difference: / vs //</h2>
        <p className="text-gray-600 mb-4">This is the most tested operator distinction at A Level. Learn it cold!</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">/ (Normal Division)</p>
            <p className="text-blue-700 text-sm mb-3">ALWAYS gives a <strong>float</strong> (decimal), even if the answer is whole</p>
            <CodeBlock language="python" code={`print(10 / 2)   # 5.0 not 5!
print(17 / 5)   # 3.4
print(7 / 2)    # 3.5
print(6 / 3)    # 2.0 (still float!)`} />
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-800 mb-2">// (Integer Division)</p>
            <p className="text-emerald-700 text-sm mb-3">Rounds DOWN to nearest integer (floor division)</p>
            <CodeBlock language="python" code={`print(10 // 2)  # 5 (int, no decimal)
print(17 // 5)  # 3 (not 3.4, floor!)
print(7 // 2)   # 3 (not 3.5, floor!)
print(-7 // 2)  # -4 (floors DOWN!)`} />
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-1">💡 Memory Trick</p>
          <p className="text-amber-700 text-sm">Think of <code className="bg-amber-100 px-1 rounded">//</code> as "double slash = drop the decimal". One slash gives you the full answer, double slash chops it off!</p>
        </div>
      </div>

      {/* MOD deep dive */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🔄 Modulus (%) — The Remainder Operator</h2>
        <p className="text-gray-600 mb-4">% gives the REMAINDER after division. Used constantly in exam questions!</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-bold text-gray-800 mb-2">How to work it out:</p>
            <div className="bg-gray-50 rounded-xl p-4 space-y-2 font-mono text-sm">
              <p>17 % 5 = ?</p>
              <p className="text-gray-500">→ 17 ÷ 5 = 3 remainder <span className="text-emerald-600 font-bold">2</span></p>
              <p className="text-gray-500">→ 17 % 5 = <span className="text-emerald-600 font-bold">2</span></p>
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-800 mb-2">The golden relationship:</p>
            <div className="bg-emerald-50 rounded-xl p-4 font-mono text-sm">
              <p className="text-emerald-800">a = (a // b) * b + (a % b)</p>
              <p className="text-gray-500 mt-2 font-sans text-xs">17 = (17//5)*5 + (17%5)</p>
              <p className="text-gray-500 font-sans text-xs">17 = 3*5 + 2 = 15 + 2 = 17 ✓</p>
            </div>
          </div>
        </div>

        <CodeBlock language="python" code={`# Common uses of %
# 1. Check if even or odd
number = 7
if number % 2 == 0:
    print("Even")
else:
    print("Odd")

# 2. Check divisibility
if 100 % 4 == 0:
    print("100 is divisible by 4")

# 3. Get last digit of a number
n = 12345
last_digit = n % 10    # gives 5

# 4. Wrap around (useful in menus, circular arrays)
day = 8 % 7   # gives 1 (Monday after Sunday)`} />
      </div>

      {/* Power operator */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">⚡ Power Operator (**)</h2>
        <p className="text-gray-600 mb-4">Python uses <code className="bg-gray-100 px-1 rounded font-mono">**</code> for exponents. Pseudocode doesn't have this — it's Python-only!</p>
        <CodeBlock language="python" code={`print(2 ** 8)     # 256 (2 to the power 8)
print(3 ** 3)     # 27  (3 cubed)
print(16 ** 0.5)  # 4.0 (square root! power of 0.5)
print(10 ** 0)    # 1   (anything to power 0 = 1)

# Useful for area/volume calculations
radius = 5
import math
area = math.pi * radius ** 2   # pi * r squared`} />
      </div>

      {/* BODMAS / operator precedence */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 Operator Precedence (BODMAS in Python)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Priority</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Operator</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Name</th>
                <th className="text-left py-2 px-4 text-gray-600 font-bold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['1 (highest)', '()', 'Brackets', '(2 + 3) * 4 = 20'],
                ['2', '**', 'Power', '2 ** 3 + 1 = 9'],
                ['3', '* / // %', 'Multiply/Divide', '2 + 3 * 4 = 14'],
                ['4 (lowest)', '+ -', 'Add/Subtract', '10 - 3 + 2 = 9'],
              ].map(([pri, op, name, ex]) => (
                <tr key={pri}>
                  <td className="py-2 px-4 font-bold text-gray-700">{pri}</td>
                  <td className="py-2 px-4"><code className="bg-gray-100 text-emerald-700 px-2 py-0.5 rounded font-mono font-bold">{op}</code></td>
                  <td className="py-2 px-4 text-gray-600">{name}</td>
                  <td className="py-2 px-4"><code className="text-gray-600 font-mono text-xs">{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock language="python" code={`# Precedence examples - predict the output!
print(2 + 3 * 4)       # 14 (not 20! * first)
print((2 + 3) * 4)     # 20 (brackets first)
print(2 ** 3 ** 2)     # 512 (** is right-to-left: 2**(3**2) = 2**9)
print(10 // 3 + 1)     # 4 (// first, then +)
print(10 % 3 * 2)      # 2 (% first gives 1, then 1*2=2)`} />
      </div>

      {/* Digit extraction */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🔢 Digit Extraction — Classic Exam Question!</h2>
        <p className="text-gray-600 mb-4">Extracting individual digits from a number using <code className="bg-white px-1 rounded font-mono">//</code> and <code className="bg-white px-1 rounded font-mono">%</code> is a favourite exam question. Learn the pattern!</p>
        <CodeBlock language="python" code={`number = int(input("Enter a 4-digit number: "))
# Let's say number = 1234

thousands = number // 1000          # 1234 // 1000 = 1
hundreds  = (number % 1000) // 100  # 234 // 100 = 2
tens      = (number % 100) // 10    # 34 // 10 = 3
units     = number % 10             # 1234 % 10 = 4

print(f"Thousands: {thousands}")    # 1
print(f"Hundreds:  {hundreds}")     # 2
print(f"Tens:      {tens}")         # 3
print(f"Units:     {units}")        # 4

# Verify: reverse the process
rebuilt = thousands*1000 + hundreds*100 + tens*10 + units
print(f"Rebuilt: {rebuilt}")        # 1234`} />
        <div className="mt-4 bg-white rounded-xl p-4">
          <p className="font-bold text-purple-800 mb-2">📋 The Pattern (memorise this!):</p>
          <div className="grid grid-cols-2 gap-2 text-sm font-mono">
            <div className="bg-purple-50 p-2 rounded"><span className="text-purple-700">units</span> = n % 10</div>
            <div className="bg-purple-50 p-2 rounded"><span className="text-purple-700">tens</span> = (n % 100) // 10</div>
            <div className="bg-purple-50 p-2 rounded"><span className="text-purple-700">hundreds</span> = (n % 1000) // 100</div>
            <div className="bg-purple-50 p-2 rounded"><span className="text-purple-700">thousands</span> = n // 1000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
