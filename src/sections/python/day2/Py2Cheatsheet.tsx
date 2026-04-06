import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py2Cheatsheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Day 2: Operators</h1>
      <p className="text-gray-500 mb-8">Everything from Day 2 on one page. Save this for quick reference!</p>

      {/* Arithmetic */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">➕ Arithmetic Operators</h2>
        <CodeBlock language="python" code={`a, b = 17, 5
print(a + b)    # 22  — Addition
print(a - b)    # 12  — Subtraction
print(a * b)    # 85  — Multiplication
print(a / b)    # 3.4 — Division (ALWAYS float!)
print(a // b)   # 3   — Integer division (like DIV)
print(a % b)    # 2   — Modulus/remainder (like MOD)
print(a ** b)   # 1419857 — Power (Python only!)`} />
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">⚖️ Comparison Operators (return True/False)</h2>
        <CodeBlock language="python" code={`print(5 == 5)   # True  — equal to (NOT = !)
print(5 != 3)   # True  — not equal (pseudocode: <>)
print(5 > 3)    # True  — greater than
print(3 < 5)    # True  — less than
print(5 >= 5)   # True  — greater than or equal
print(4 <= 5)   # True  — less than or equal

# Chained comparison (Python only):
x = 5
print(1 < x < 10)  # True — is x between 1 and 10?`} />
      </div>

      {/* Logical */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">🧠 Logical Operators (lowercase!)</h2>
        <CodeBlock language="python" code={`# and — both must be True
print(True and True)    # True
print(True and False)   # False

# or — at least one must be True
print(True or False)    # True
print(False or False)   # False

# not — flips True/False
print(not True)         # False
print(not False)        # True

# Precedence: not > and > or (use brackets to be safe!)
print(True or False and False)   # True (and runs first)`} />
      </div>

      {/* String ops */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">🔗 String Operations</h2>
        <CodeBlock language="python" code={`# Concatenation (join strings)
first = "Hello"
last = "World"
print(first + " " + last)   # Hello World

# Repetition
print("Ha" * 3)              # HaHaHa
print("-" * 20)              # --------------------

# f-strings (best way to mix strings + variables)
name = "Ali"
age = 17
print(f"Hello {name}, you are {age}")   # Hello Ali, you are 17
print(f"Pi is {3.14159:.2f}")           # Pi is 3.14

# CANNOT mix string + int with +:
# print("Age: " + 17)        # ❌ TypeError!
print("Age: " + str(17))     # ✅ Age: 17
print(f"Age: {17}")          # ✅ Age: 17 (better!)`} />
      </div>

      {/* Digit extraction */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">🔢 Digit Extraction Pattern</h2>
        <CodeBlock language="python" code={`n = 1234
units     = n % 10            # 4
tens      = (n % 100) // 10   # 3
hundreds  = (n % 1000) // 100 # 2
thousands = n // 1000         # 1`} />
      </div>

      {/* Quick reference table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">📊 Python vs Pseudocode Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-2 px-3 text-gray-600 font-bold">Operation</th>
                <th className="text-left py-2 px-3 text-gray-600 font-bold">Python</th>
                <th className="text-left py-2 px-3 text-gray-600 font-bold">Pseudocode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Integer division', 'a // b', 'a DIV b'],
                ['Remainder', 'a % b', 'a MOD b'],
                ['Power', 'a ** b', '(not available)'],
                ['Not equal', 'a != b', 'a <> b'],
                ['Assignment', 'a = b', 'a ← b'],
                ['Equality check', 'a == b', 'a = b'],
                ['Logical AND', 'and', 'AND'],
                ['Logical OR', 'or', 'OR'],
                ['Logical NOT', 'not', 'NOT'],
                ['String join', 'str1 + str2', 'str1 & str2'],
                ['String repeat', 'str * n', '(not available)'],
              ].map(([op, py, pseudo]) => (
                <tr key={op}>
                  <td className="py-2 px-3 text-gray-700 font-medium">{op}</td>
                  <td className="py-2 px-3"><code className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-mono text-xs">{py}</code></td>
                  <td className="py-2 px-3"><code className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono text-xs">{pseudo}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">✅ Day 2 Confidence Checklist</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            { id: 'div', label: 'I know / gives float, // gives integer' },
            { id: 'mod', label: 'I know % gives remainder (like MOD)' },
            { id: 'eq', label: 'I know = is assignment, == is comparison' },
            { id: 'pow', label: 'I know ** is the power operator' },
            { id: 'logic', label: 'I use and, or, not (lowercase)' },
            { id: 'fstr', label: 'I can use f-strings for formatted output' },
            { id: 'concat', label: 'I know string + integer needs str() conversion' },
            { id: 'digit', label: 'I can extract digits using // and %' },
            { id: 'prec', label: 'I know operator precedence (BODMAS)' },
            { id: 'chain', label: 'I can use chained comparisons (1 < x < 10)' },
            { id: 'repeat', label: 'I can repeat strings with * (e.g. "-" * 20)' },
            { id: 'tax', label: 'I completed all 3 practice exercises' },
          ].map(item => (
            <label key={item.id} className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-emerald-50 transition-colors">
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 text-emerald-600 rounded"
              />
              <span className={`text-sm ${checked[item.id] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-4 p-3 bg-white rounded-xl text-center">
          <p className="text-sm font-bold text-emerald-700">
            {Object.values(checked).filter(Boolean).length} / 12 completed
          </p>
        </div>
      </div>
    </div>
  );
}
