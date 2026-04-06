
import CodeBlock from '../../../components/CodeBlock';

export default function Py8Scope() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🌍 Scope – Local vs Global
      </h1>
      <p className="text-gray-500 text-lg mb-8">One of the most important concepts for A Level exams!</p>

      {/* What is scope */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 What is Scope?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">🏠 Local Variable</h3>
            <p className="text-blue-700 text-sm mb-2">Created INSIDE a function. Only exists while that function runs. Destroyed when function ends.</p>
            <div className="bg-blue-900 rounded p-2 mt-2">
              <pre className="text-blue-200 text-xs font-mono">{`def my_func():
    x = 10    # LOCAL
    print(x)  # works

my_func()
print(x)  # ERROR! x gone`}</pre>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-bold text-emerald-800 mb-2">🌍 Global Variable</h3>
            <p className="text-emerald-700 text-sm mb-2">Created OUTSIDE all functions. Exists for the entire program. Can be READ inside functions.</p>
            <div className="bg-emerald-900 rounded p-2 mt-2">
              <pre className="text-emerald-200 text-xs font-mono">{`total = 100    # GLOBAL

def my_func():
    print(total)  # READ OK

my_func()     # 100
print(total)  # 100`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Your exact example */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📋 Your Exact Exam Example — Traced</h2>
        <p className="text-gray-600 text-sm mb-4">This is the exact code from the Cambridge syllabus — know it perfectly!</p>
        <CodeBlock language="python" code={`# Local vs Global
total = 100         # Global variable

def add_to_total(amount):
    global total    # Must declare global to MODIFY it
    total += amount

def show_local():
    total = 50      # This is a LOCAL variable, different from global!
    print(f"Local total: {total}")    # 50

add_to_total(20)
print(f"Global total: {total}")       # 120
show_local()                           # 50
print(f"Global total: {total}")       # Still 120`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="px-3 py-2 text-left">Step</th><th className="px-3 py-2 text-left">Code runs</th><th className="px-3 py-2 text-left">Global total</th><th className="px-3 py-2 text-left">Output</th></tr></thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['1', 'total = 100', '100', '—'],
                ['2', 'add_to_total(20) — global total += 20', '120', '—'],
                ['3', 'print(f"Global total: {total}")', '120', 'Global total: 120'],
                ['4', 'show_local() — local total = 50', '120 (unchanged!)', 'Local total: 50'],
                ['5', 'print(f"Global total: {total}")', '120', 'Global total: 120'],
              ].map(([step, code, glob, out]) => (
                <tr key={step} className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-bold text-gray-500">{step}</td>
                  <td className="px-3 py-2 font-mono text-xs text-gray-700">{code}</td>
                  <td className="px-3 py-2 font-bold text-emerald-600">{glob}</td>
                  <td className="px-3 py-2 font-mono text-xs text-amber-600">{out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* global keyword */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-3">⚡ The global Keyword</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-red-600 mb-2">❌ WITHOUT global — Error!</p>
            <CodeBlock language="python" code={`count = 0

def increment():
    count += 1    # UnboundLocalError!
    # Python thinks count is local
    # because you're assigning to it

increment()`} />
          </div>
          <div>
            <p className="text-xs font-bold text-green-600 mb-2">✅ WITH global — Works!</p>
            <CodeBlock language="python" code={`count = 0

def increment():
    global count   # Tell Python: use global!
    count += 1     # Now modifies global count

increment()
increment()
print(count)  # 2`} />
          </div>
        </div>
        <div className="mt-4 p-3 bg-amber-100 rounded-lg">
          <p className="text-amber-800 text-sm font-bold">📌 Rules for global keyword:</p>
          <ul className="text-amber-700 text-sm mt-1 space-y-1">
            <li>✅ You can READ a global variable without declaring it global</li>
            <li>✅ You must declare <code className="bg-amber-200 px-1 rounded">global x</code> to MODIFY a global variable</li>
            <li>⚠️ Best practice: avoid global variables — pass as parameters instead!</li>
          </ul>
        </div>
      </div>

      {/* Best practice */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Best Practice — Avoid Globals!</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-red-600 mb-2">❌ BAD — Using global</p>
            <CodeBlock language="python" code={`total = 0

def add_marks(marks):
    global total
    for mark in marks:
        total += mark

add_marks([80, 70, 90])
print(total)  # 240`} />
          </div>
          <div>
            <p className="text-xs font-bold text-green-600 mb-2">✅ GOOD — Pass and return</p>
            <CodeBlock language="python" code={`def add_marks(marks):
    total = 0
    for mark in marks:
        total += mark
    return total   # Return result!

total = add_marks([80, 70, 90])
print(total)  # 240`} />
          </div>
        </div>
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-emerald-800 font-bold text-sm">✅ The Pythonic Way: Pass values IN as parameters, get values OUT with return!</p>
        </div>
      </div>
    </div>
  );
}
