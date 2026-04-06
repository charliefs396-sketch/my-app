import CodeBlock from '../../../components/CodeBlock';

export default function Py3IfElse() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔀 Simple IF & ELSE</h1>
      <p className="text-gray-500 mb-8">The foundation of all selection in Python</p>

      {/* IF only */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">1️⃣ Simple IF (one path)</h2>
        <p className="text-gray-600 mb-4">Use when you only want to do something IF a condition is true. If it's false, nothing happens.</p>
        <CodeBlock language="python" code={`temperature = int(input("Enter temperature: "))

if temperature > 30:
    print("It's hot!")
    print("Drink water!")

print("Have a nice day!")  # Always runs`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">If temperature = 35:</p>
            <div className="font-mono text-sm text-green-800 space-y-1">
              <p>→ 35 &gt; 30 is True</p>
              <p>→ prints "It's hot!"</p>
              <p>→ prints "Drink water!"</p>
              <p>→ prints "Have a nice day!"</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="font-bold text-blue-700 mb-2">If temperature = 20:</p>
            <div className="font-mono text-sm text-blue-800 space-y-1">
              <p>→ 20 &gt; 30 is False</p>
              <p>→ skips both prints</p>
              <p>→ prints "Have a nice day!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* IF ELSE */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">2️⃣ IF...ELSE (two paths)</h2>
        <p className="text-gray-600 mb-4">Use when you want one thing to happen if TRUE and a different thing if FALSE. Exactly one branch always runs.</p>
        <CodeBlock language="python" code={`age = int(input("Enter your age: "))

if age >= 18:
    print("You are an adult")
    print("You can vote!")
else:
    print("You are a minor")
    print("Come back when you're 18!")

print("Thanks for visiting")`} />

        {/* Anatomy breakdown */}
        <div className="mt-6 bg-gray-50 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-4">🔬 Anatomy of IF...ELSE</h3>
          <div className="space-y-3">
            {[
              { part: 'if', color: 'bg-purple-100 text-purple-700', desc: 'Keyword — must be lowercase' },
              { part: 'age >= 18', color: 'bg-amber-100 text-amber-700', desc: 'Condition — evaluates to True or False' },
              { part: ':', color: 'bg-red-100 text-red-700', desc: 'Colon — NEVER forget this! Replaces THEN' },
              { part: '    print(...)', color: 'bg-green-100 text-green-700', desc: '4 spaces indent — this is inside the IF block' },
              { part: 'else:', color: 'bg-blue-100 text-blue-700', desc: 'else at same level as if, also needs colon' },
              { part: '    print(...)', color: 'bg-teal-100 text-teal-700', desc: '4 spaces — inside the ELSE block' },
            ].map((item) => (
              <div key={item.part} className="flex items-center gap-3">
                <span className={`font-mono text-sm font-bold px-3 py-1 rounded-lg ${item.color} min-w-fit`}>{item.part}</span>
                <span className="text-gray-600 text-sm">→ {item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trace table */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-3">📊 Trace Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-2 text-left rounded-tl-lg">age input</th>
                  <th className="px-4 py-2 text-left">age &gt;= 18</th>
                  <th className="px-4 py-2 text-left">Branch taken</th>
                  <th className="px-4 py-2 text-left rounded-tr-lg">Output</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: '25', cond: 'True', branch: 'IF block', out: 'You are an adult / You can vote!' },
                  { age: '18', cond: 'True', branch: 'IF block', out: 'You are an adult / You can vote!' },
                  { age: '17', cond: 'False', branch: 'ELSE block', out: 'You are a minor / Come back...' },
                  { age: '0', cond: 'False', branch: 'ELSE block', out: 'You are a minor / Come back...' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 font-mono border-b border-gray-100">{row.age}</td>
                    <td className={`px-4 py-2 font-bold border-b border-gray-100 ${row.cond === 'True' ? 'text-green-600' : 'text-red-600'}`}>{row.cond}</td>
                    <td className="px-4 py-2 border-b border-gray-100">{row.branch}</td>
                    <td className="px-4 py-2 font-mono text-xs border-b border-gray-100">{row.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Multiple statements */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">3️⃣ Multiple Statements in a Block</h2>
        <p className="text-gray-600 mb-4">You can have as many statements as you want inside an IF or ELSE block — they ALL need to be indented at the same level.</p>
        <CodeBlock language="python" code={`score = int(input("Enter score: "))

if score >= 50:
    print("Congratulations! You passed!")
    grade = "Pass"
    bonus = score * 2
    print(f"Your bonus points: {bonus}")
else:
    print("Sorry, you failed.")
    grade = "Fail"
    print("Please revise and try again.")

# This is outside the IF - always runs
print(f"Final grade: {grade}")`} />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-bold text-amber-800 mb-2">⚠️ Indentation Rule</p>
          <p className="text-amber-700 text-sm">All lines inside an IF/ELSE block must have the <strong>same indentation level</strong>. Mix of 4 spaces and 8 spaces = IndentationError!</p>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🚨 Common Mistakes</h2>
        <div className="space-y-4">
          {[
            {
              wrong: `if age >= 18\n    print("Adult")  # Missing colon!`,
              right: `if age >= 18:\n    print("Adult")`,
              mistake: 'Missing colon after condition',
            },
            {
              wrong: `if age = 18:  # = is assignment!\n    print("Adult")`,
              right: `if age == 18:  # == is comparison\n    print("Adult")`,
              mistake: 'Using = instead of == for comparison',
            },
            {
              wrong: `if age >= 18:\nprint("Adult")  # Not indented!`,
              right: `if age >= 18:\n    print("Adult")  # 4 spaces`,
              mistake: 'Missing indentation inside IF block',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-red-50 px-4 py-2 border-b border-gray-200">
                <span className="text-red-700 font-bold text-sm">❌ Mistake: {item.mistake}</span>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="p-3 border-r border-gray-200">
                  <p className="text-xs font-semibold text-red-500 mb-1">WRONG</p>
                  <CodeBlock language="python" code={item.wrong} />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-green-500 mb-1">CORRECT</p>
                  <CodeBlock language="python" code={item.right} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
