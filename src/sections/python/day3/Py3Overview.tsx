import CodeBlock from '../../../components/CodeBlock';

export default function Py3Overview() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
          🐍 Python Track · Day 3
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">IF Statements in Python</h1>
        <p className="text-gray-500 text-lg">Selection, conditions, elif chains — Python style</p>
      </div>

      {/* What you'll learn */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: '🔀', title: 'Simple IF/ELSE', desc: 'Two-path decisions with clean syntax' },
          { icon: '🪜', title: 'elif chains', desc: 'Multiple conditions — Python\'s answer to nested IF' },
          { icon: '🪆', title: 'Nested IF', desc: 'IFs inside IFs for complex logic' },
          { icon: '🔗', title: 'and / or / not', desc: 'Combine conditions in one line' },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex gap-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The most important rule */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-black text-amber-800 mb-4">⚡ The #1 Rule — INDENTATION!</h2>
        <p className="text-gray-700 mb-4">
          In Python, <strong>indentation (spaces/tabs) is not optional</strong> — it IS the syntax. 
          Unlike pseudocode which uses THEN/ENDIF, Python uses indentation to show what's inside an IF block.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-red-600 font-bold text-sm mb-2">❌ WRONG (no indentation)</p>
            <CodeBlock language="python" code={`if age >= 18:
print("Adult")    # Error! Not indented`} />
          </div>
          <div>
            <p className="text-green-600 font-bold text-sm mb-2">✅ CORRECT (4 spaces)</p>
            <CodeBlock language="python" code={`if age >= 18:
    print("Adult")  # 4 spaces inside`} />
          </div>
        </div>
      </div>

      {/* Python vs Pseudocode quick look */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Python vs Pseudocode — Side by Side</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-indigo-600 font-bold text-sm mb-2">📝 Pseudocode</p>
            <CodeBlock language="pseudocode" code={`IF Mark >= 80
   THEN
      Grade ← "A"
   ELSE
      Grade ← "F"
ENDIF`} />
          </div>
          <div>
            <p className="text-emerald-600 font-bold text-sm mb-2">🐍 Python</p>
            <CodeBlock language="python" code={`if mark >= 80:
    grade = "A"
else:
    grade = "F"`} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { ps: 'IF', py: 'if', note: 'lowercase!' },
            { ps: 'THEN', py: ':', note: 'colon instead' },
            { ps: 'ELSE IF', py: 'elif', note: 'Python only!' },
            { ps: 'ENDIF', py: '(indentation)', note: 'no closing keyword' },
            { ps: '<>', py: '!=', note: 'not equal' },
            { ps: 'AND/OR', py: 'and/or', note: 'lowercase' },
          ].map((row) => (
            <div key={row.ps} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-indigo-600 font-mono font-bold text-sm">{row.ps}</div>
              <div className="text-gray-400 text-xs my-1">→</div>
              <div className="text-emerald-600 font-mono font-bold text-sm">{row.py}</div>
              <div className="text-gray-400 text-xs mt-1">{row.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What's new vs Day 2 */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <h2 className="text-lg font-bold text-emerald-800 mb-3">📋 Day 3 Roadmap</h2>
        <div className="space-y-2">
          {[
            { step: '1', label: 'Simple IF & ELSE', desc: 'Basic two-path decisions' },
            { step: '2', label: 'elif chains', desc: 'Python\'s clean multi-condition syntax (no nested nightmare!)' },
            { step: '3', label: 'Nested IF', desc: 'IFs inside IFs for complex logic' },
            { step: '4', label: 'and / or / not', desc: 'Combining conditions with logical operators' },
            { step: '5', label: 'Exam FAQ', desc: 'Every common mistake explained' },
            { step: '6', label: 'Practice', desc: 'Leap year, triangle classifier, menu system' },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</span>
              <div>
                <span className="font-semibold text-gray-900">{item.label}</span>
                <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
