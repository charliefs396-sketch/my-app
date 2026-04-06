
import CodeBlock from '../../../components/CodeBlock';

export default function Py8Functions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🔧 Writing Functions in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">def, parameters, return values, default parameters</p>

      {/* def syntax */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 The def Keyword</h2>
        <div className="bg-slate-900 rounded-xl p-5 mb-4">
          <pre className="text-sm font-mono leading-relaxed">
            <span className="text-purple-400 font-bold">def </span>
            <span className="text-yellow-300 font-bold">function_name</span>
            <span className="text-white">(</span>
            <span className="text-orange-300">parameter1</span>
            <span className="text-white">, </span>
            <span className="text-orange-300">parameter2</span>
            <span className="text-white">):</span>
            {'\n'}
            <span className="text-white">    </span>
            <span className="text-gray-400"># function body (indented!)</span>
            {'\n'}
            <span className="text-white">    </span>
            <span className="text-purple-400 font-bold">return </span>
            <span className="text-emerald-300">result</span>
          </pre>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="px-4 py-2 text-left">Part</th><th className="px-4 py-2 text-left">Meaning</th><th className="px-4 py-2 text-left">Pseudocode equivalent</th></tr></thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['def', 'Define a function/procedure', 'FUNCTION or PROCEDURE'],
                ['function_name', 'Name you choose (snake_case)', 'Name after FUNCTION'],
                ['(parameters)', 'Input values the function needs', 'Parameters in header'],
                [':', 'Start of the function block', 'THEN in pseudocode'],
                ['indentation', 'Everything inside the function', 'Lines before ENDFUNCTION'],
                ['return', 'Send a value back to caller', 'RETURN in pseudocode'],
              ].map(([part, meaning, pseudo]) => (
                <tr key={part} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-mono text-purple-600 font-bold">{part}</td>
                  <td className="px-4 py-2 text-gray-700">{meaning}</td>
                  <td className="px-4 py-2 text-indigo-600 font-mono text-xs">{pseudo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Complete Examples</h2>
        <CodeBlock language="python" code={`# Function - returns a value
def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

# Function with validation
def is_valid_mark(mark):
    return 0 <= mark <= 100     # Returns True or False

# Function with multiple parameters
def get_grade(mark, pass_mark=50):    # default parameter!
    if mark >= 80:
        return 'A'
    elif mark >= 70:
        return 'B'
    elif mark >= 60:
        return 'C'
    elif mark >= pass_mark:
        return 'D'
    else:
        return 'F'

# Calling functions
marks = [80, 70, 90, 65]
avg = calculate_average(marks)
print(f"Average: {avg:.1f}")            # Average: 76.2

print(is_valid_mark(85))               # True
print(is_valid_mark(150))              # False

print(get_grade(75))                   # B (uses default pass_mark=50)
print(get_grade(45, pass_mark=40))     # D (custom pass_mark)`} />
      </div>

      {/* Default parameters */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-3">⚡ Default Parameters</h2>
        <CodeBlock language="python" code={`# Default parameter - used if not provided
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Ali")              # Hello, Ali!     (uses default)
greet("Ali", "Hi")        # Hi, Ali!        (overrides default)
greet("Sara", "Salam")    # Salam, Sara!    (custom greeting)

# RULE: Default parameters must come LAST
def func(a, b=10, c=20):  # OK
    pass

# def func(a=10, b):      # ERROR! Non-default after default`} />
        <div className="mt-3 p-3 bg-amber-100 rounded-lg">
          <p className="text-amber-800 text-sm font-semibold">⚠️ Exam Tip: Default parameters must always come AFTER non-default parameters!</p>
        </div>
      </div>

      {/* Pseudocode vs Python */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Pseudocode vs Python</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-indigo-600 mb-2">📝 PSEUDOCODE</p>
            <CodeBlock code={`FUNCTION IsVowel(Ch : CHAR) 
        RETURNS BOOLEAN
   IF Ch = 'a' OR Ch = 'e' OR 
      Ch = 'i' OR Ch = 'o' OR 
      Ch = 'u'
      THEN
         RETURN TRUE
      ELSE
         RETURN FALSE
   ENDIF
ENDFUNCTION`} />
          </div>
          <div>
            <p className="text-xs font-bold text-emerald-600 mb-2">🐍 PYTHON</p>
            <CodeBlock language="python" code={`def is_vowel(ch):
    return ch.lower() in 'aeiou'




# Much shorter in Python!
# No ENDFUNCTION needed
# No data types needed
# Boolean returned directly`} />
          </div>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-800 mb-4">❌ Common Mistakes</h2>
        <div className="space-y-4">
          {[
            {
              wrong: `def add(a, b):\n    result = a + b\n# Missing return!\nprint(add(3, 4))   # None`,
              right: `def add(a, b):\n    result = a + b\n    return result\nprint(add(3, 4))   # 7`,
              tip: 'Forgetting return — function returns None silently!'
            },
            {
              wrong: `def greet(name):\n    print(f"Hello {name}")\n\nresult = greet("Ali")\nprint(result.upper())  # AttributeError`,
              right: `def greet(name):\n    return f"Hello {name}"\n\nresult = greet("Ali")\nprint(result.upper())  # HELLO ALI`,
              tip: 'Using print() inside when you needed return'
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-3">
              <div className="bg-red-900 rounded-lg p-3">
                <p className="text-red-400 text-xs font-bold mb-2">❌ WRONG — {item.tip}</p>
                <pre className="text-red-200 text-xs font-mono">{item.wrong}</pre>
              </div>
              <div className="bg-green-900 rounded-lg p-3">
                <p className="text-green-400 text-xs font-bold mb-2">✅ CORRECT</p>
                <pre className="text-green-200 text-xs font-mono">{item.right}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
