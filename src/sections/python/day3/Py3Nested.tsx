import CodeBlock from '../../../components/CodeBlock';

export default function Py3Nested() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🪆 Nested IF & Logical Operators</h1>
      <p className="text-gray-500 mb-8">IFs inside IFs, and combining conditions with and/or/not</p>

      {/* Nested IF */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🪆 Nested IF Statements</h2>
        <p className="text-gray-600 mb-4">
          A nested IF is an IF inside another IF. Use it when one decision depends on another.
          Think of it like a two-stage security check: <strong>first check age, then check if they have ID.</strong>
        </p>
        <CodeBlock language="python" code={`age = int(input("Enter your age: "))
has_id = input("Do you have ID? (yes/no): ").lower()

if age >= 18:
    if has_id == "yes":
        print("Entry allowed!")
    else:
        print("Sorry, you need ID even if you're 18+")
else:
    print("Sorry, you're too young")
    print("Come back when you're 18!")`} />

        <div className="mt-4 bg-blue-50 rounded-xl p-4">
          <h3 className="font-bold text-blue-800 mb-3">📊 All 4 possible outcomes:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="px-3 py-2 text-left rounded-tl-lg">age</th>
                  <th className="px-3 py-2 text-left">has_id</th>
                  <th className="px-3 py-2 text-left">age &gt;= 18?</th>
                  <th className="px-3 py-2 text-left">has_id == yes?</th>
                  <th className="px-3 py-2 text-left rounded-tr-lg">Output</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: '20', id: 'yes', a: 'True', b: 'True', out: 'Entry allowed!', color: 'text-green-600' },
                  { age: '20', id: 'no', a: 'True', b: 'False', out: 'Sorry, you need ID', color: 'text-amber-600' },
                  { age: '16', id: 'yes', a: 'False', b: 'N/A (not checked)', out: "Sorry, you're too young", color: 'text-red-600' },
                  { age: '16', id: 'no', a: 'False', b: 'N/A (not checked)', out: "Sorry, you're too young", color: 'text-red-600' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                    <td className="px-3 py-2 font-mono border-b border-blue-100">{row.age}</td>
                    <td className="px-3 py-2 font-mono border-b border-blue-100">{row.id}</td>
                    <td className="px-3 py-2 border-b border-blue-100">{row.a}</td>
                    <td className="px-3 py-2 border-b border-blue-100">{row.b}</td>
                    <td className={`px-3 py-2 font-semibold border-b border-blue-100 ${row.color}`}>{row.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-1">⚠️ Indentation is CRITICAL in nested IFs</p>
          <p className="text-amber-700 text-sm">The inner IF is indented 4 spaces more than the outer IF. That means 8 spaces total for the inner content!</p>
        </div>
      </div>

      {/* Logical operators */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔗 Logical Operators: and / or / not</h2>
        <p className="text-gray-600 mb-4">
          Instead of nesting IFs, you can often combine conditions with <code className="bg-gray-100 px-1 rounded font-mono text-emerald-700">and</code>, 
          <code className="bg-gray-100 px-1 rounded font-mono text-emerald-700"> or</code>, and 
          <code className="bg-gray-100 px-1 rounded font-mono text-emerald-700"> not</code>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-50 rounded-xl p-4">
            <h3 className="font-bold text-purple-800 mb-2">AND</h3>
            <p className="text-purple-700 text-sm mb-3">BOTH conditions must be True</p>
            <div className="text-xs font-mono space-y-1">
              <p><span className="text-green-600">True</span> and <span className="text-green-600">True</span> = <span className="text-green-600 font-bold">True</span></p>
              <p><span className="text-green-600">True</span> and <span className="text-red-500">False</span> = <span className="text-red-500 font-bold">False</span></p>
              <p><span className="text-red-500">False</span> and <span className="text-green-600">True</span> = <span className="text-red-500 font-bold">False</span></p>
              <p><span className="text-red-500">False</span> and <span className="text-red-500">False</span> = <span className="text-red-500 font-bold">False</span></p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-bold text-blue-800 mb-2">OR</h3>
            <p className="text-blue-700 text-sm mb-3">AT LEAST ONE must be True</p>
            <div className="text-xs font-mono space-y-1">
              <p><span className="text-green-600">True</span> or <span className="text-green-600">True</span> = <span className="text-green-600 font-bold">True</span></p>
              <p><span className="text-green-600">True</span> or <span className="text-red-500">False</span> = <span className="text-green-600 font-bold">True</span></p>
              <p><span className="text-red-500">False</span> or <span className="text-green-600">True</span> = <span className="text-green-600 font-bold">True</span></p>
              <p><span className="text-red-500">False</span> or <span className="text-red-500">False</span> = <span className="text-red-500 font-bold">False</span></p>
            </div>
          </div>
          <div className="bg-teal-50 rounded-xl p-4">
            <h3 className="font-bold text-teal-800 mb-2">NOT</h3>
            <p className="text-teal-700 text-sm mb-3">Flips True/False</p>
            <div className="text-xs font-mono space-y-1">
              <p>not <span className="text-green-600">True</span> = <span className="text-red-500 font-bold">False</span></p>
              <p>not <span className="text-red-500">False</span> = <span className="text-green-600 font-bold">True</span></p>
            </div>
          </div>
        </div>

        <CodeBlock language="python" code={`temperature = int(input("Enter temperature: "))

# AND - both must be true
if temperature >= 20 and temperature <= 30:
    print("Pleasant weather!")

# OR - at least one must be true
if temperature < 0 or temperature > 40:
    print("Extreme weather! Stay inside!")

# NOT - flip the condition
is_raining = True
if not is_raining:
    print("Go outside!")
else:
    print("Stay inside!")`} />
      </div>

      {/* Nested IF vs logical operators */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🤔 Nested IF vs Logical Operators — Which to use?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-semibold mb-2">Same result — two ways:</p>
            <p className="text-xs text-gray-400 mb-1">🪆 Nested IF:</p>
            <CodeBlock language="python" code={`if age >= 18:
    if has_id == "yes":
        print("Entry allowed")`} />
            <p className="text-xs text-gray-400 mt-3 mb-1">🔗 Logical AND:</p>
            <CodeBlock language="python" code={`if age >= 18 and has_id == "yes":
    print("Entry allowed")`} />
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-gray-800 mb-3">When to use each:</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-700 text-sm">Use logical AND/OR when:</p>
                <p className="text-blue-600 text-xs mt-1">Both conditions lead to the same action. One-liner is cleaner.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="font-bold text-purple-700 text-sm">Use nested IF when:</p>
                <p className="text-purple-600 text-xs mt-1">The inner IF has its own else clause. The branches do different things.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Python chained comparisons */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✨ Python-only: Chained Comparisons</h2>
        <p className="text-gray-600 mb-4">Python lets you chain comparisons in a very natural way — like maths notation!</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm mb-2">Other languages / Pseudocode:</p>
            <CodeBlock language="pseudocode" code={`IF Mark >= 0 AND Mark <= 100
   THEN
      OUTPUT "Valid mark"
ENDIF`} />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-2">Python — chained comparison:</p>
            <CodeBlock language="python" code={`if 0 <= mark <= 100:
    print("Valid mark")`} />
          </div>
        </div>
        <CodeBlock language="python" code={`# More examples of chained comparisons
age = 25

if 18 <= age <= 65:
    print("Working age")

score = 73

if 70 <= score < 80:
    print("Grade B")`} />
        <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="font-bold text-emerald-700 mb-1">💡 Exam tip</p>
          <p className="text-emerald-600 text-sm">Chained comparisons are very readable and Python-specific. Use them in your Paper 4 programs to show off clean coding style!</p>
        </div>
      </div>
    </div>
  );
}
