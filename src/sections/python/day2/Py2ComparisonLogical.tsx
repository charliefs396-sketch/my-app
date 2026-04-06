import CodeBlock from '../../../components/CodeBlock';

export default function Py2ComparisonLogical() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">⚖️ Comparison & Logical Operators</h1>
      <p className="text-gray-500 mb-8">These operators return <code className="bg-gray-100 px-1 rounded font-mono">True</code> or <code className="bg-gray-100 px-1 rounded font-mono">False</code>. They're the building blocks of every IF statement and WHILE loop.</p>

      {/* Comparison operators */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Comparison Operators (6 total)</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Python</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Meaning</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Pseudocode</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Example</th>
                <th className="text-left py-3 px-4 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['==', 'Equal to', '=', '5 == 5', 'True'],
                ['!=', 'Not equal to', '<>', '5 != 3', 'True'],
                ['<', 'Less than', '<', '3 < 5', 'True'],
                ['>', 'Greater than', '>', '5 > 3', 'True'],
                ['<=', 'Less than or equal', '<=', '5 <= 5', 'True'],
                ['>=', 'Greater than or equal', '>=', '4 >= 5', 'False'],
              ].map(([py, meaning, pseudo, ex, res]) => (
                <tr key={py}>
                  <td className="py-3 px-4"><code className="text-lg font-bold text-emerald-700 font-mono">{py}</code></td>
                  <td className="py-3 px-4 text-gray-700">{meaning}</td>
                  <td className="py-3 px-4"><code className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono">{pseudo}</code></td>
                  <td className="py-3 px-4"><code className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">{ex}</code></td>
                  <td className="py-3 px-4"><span className={`font-bold ${res === 'True' ? 'text-green-600' : 'text-red-600'}`}>{res}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BIG WARNING about = vs == */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
          <p className="font-bold text-red-800 text-lg mb-3">🚨 THE #1 EXAM MISTAKE: = vs ==</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-bold text-red-700 mb-2">= means ASSIGNMENT (store a value)</p>
              <CodeBlock language="python" code={`age = 18      # Store 18 into age
name = "Ali"  # Store "Ali" into name`} />
            </div>
            <div>
              <p className="text-sm font-bold text-green-700 mb-2">== means COMPARISON (check if equal)</p>
              <CodeBlock language="python" code={`if age == 18:   # Is age equal to 18?
    print("Adult")`} />
            </div>
          </div>
          <div className="mt-3 bg-red-100 rounded-xl p-3">
            <p className="text-sm font-mono text-red-800">if age = 18:   # ❌ SyntaxError! Python won't even run</p>
          </div>
          <p className="text-xs text-red-600 mt-2">💡 In pseudocode, = does BOTH jobs. In Python, they are DIFFERENT symbols. This trips up almost every student!</p>
        </div>
      </div>

      {/* Logical operators */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🧠 Logical Operators: and, or, not</h2>
        <p className="text-gray-600 mb-4">Python uses lowercase <code className="bg-gray-100 px-1 rounded font-mono">and</code>, <code className="bg-gray-100 px-1 rounded font-mono">or</code>, <code className="bg-gray-100 px-1 rounded font-mono">not</code>. Pseudocode uses uppercase AND, OR, NOT.</p>

        {/* AND */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">AND — Both must be True</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-3 text-gray-600">A</th>
                    <th className="py-2 px-3 text-gray-600">B</th>
                    <th className="py-2 px-3 text-gray-600">A and B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-center">
                  {[['True','True','True ✅'],['True','False','False ❌'],['False','True','False ❌'],['False','False','False ❌']].map(([a,b,r],i) => (
                    <tr key={i} className={r.includes('✅') ? 'bg-green-50' : 'bg-red-50'}>
                      <td className="py-2 px-3 font-mono text-sm">{a}</td>
                      <td className="py-2 px-3 font-mono text-sm">{b}</td>
                      <td className="py-2 px-3 font-bold font-mono text-sm">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock language="python" code={`age = 20
has_id = True

# Both must be True
if age >= 18 and has_id:
    print("Entry allowed")

# Real example
mark = 75
if mark >= 0 and mark <= 100:
    print("Valid mark")`} />
          </div>
        </div>

        {/* OR */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">OR — At least one must be True</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-3 text-gray-600">A</th>
                    <th className="py-2 px-3 text-gray-600">B</th>
                    <th className="py-2 px-3 text-gray-600">A or B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-center">
                  {[['True','True','True ✅'],['True','False','True ✅'],['False','True','True ✅'],['False','False','False ❌']].map(([a,b,r],i) => (
                    <tr key={i} className={r.includes('✅') ? 'bg-green-50' : 'bg-red-50'}>
                      <td className="py-2 px-3 font-mono text-sm">{a}</td>
                      <td className="py-2 px-3 font-mono text-sm">{b}</td>
                      <td className="py-2 px-3 font-bold font-mono text-sm">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <CodeBlock language="python" code={`# Pay by cash OR card
has_cash = False
has_card = True

if has_cash or has_card:
    print("Can pay")

# Vowel check
char = 'e'
if char == 'a' or char == 'e' or char == 'i' or char == 'o' or char == 'u':
    print("Vowel")`} />
          </div>
        </div>

        {/* NOT */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-2">NOT — Flips True to False and vice versa</h3>
          <CodeBlock language="python" code={`is_raining = False

if not is_raining:
    print("Go outside!")    # This runs because not False = True

# NOT with other conditions
logged_in = False
if not logged_in:
    print("Please log in first")

# Equivalent ways to write the same thing:
x = 5
print(not (x == 5))   # False (x IS 5, so not True = False)
print(x != 5)         # False (same result, cleaner!)`} />
        </div>
      </div>

      {/* Chaining comparisons */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔗 Python's Special: Chained Comparisons</h2>
        <p className="text-gray-600 mb-4">Python lets you chain comparisons — you CANNOT do this in pseudocode or most other languages!</p>
        <CodeBlock language="python" code={`mark = 75

# Pseudocode way (always works):
if mark >= 0 and mark <= 100:
    print("Valid")

# Python shortcut (chained comparison):
if 0 <= mark <= 100:
    print("Valid")     # Same result! More readable

# More chaining examples:
x = 5
print(1 < x < 10)     # True  (is x between 1 and 10?)
print(0 < x < 5)      # False (x is not less than 5)

age = 20
print(18 <= age <= 65)  # True (working age range?)`} />
      </div>

      {/* Combining */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔀 Combining Comparison + Logical Operators</h2>
        <CodeBlock language="python" code={`age = 25
income = 30000
has_job = True

# Complex condition
if age >= 18 and income > 20000 and has_job:
    print("Loan approved")

# Grade boundaries
mark = 78
if mark >= 90:
    grade = 'A*'
elif mark >= 80:
    grade = 'A'
elif mark >= 70:
    grade = 'B'
elif mark >= 60:
    grade = 'C'
else:
    grade = 'Fail'

print(f"Grade: {grade}")   # B

# Operator precedence with logical operators:
# not > and > or
# Use brackets to be safe!
x = True
y = False
z = True
print(x or y and z)        # True (and runs first: y and z = False, then x or False = True)
print((x or y) and z)      # True (brackets first: True and True = True)`} />
      </div>
    </div>
  );
}
