import CodeBlock from '../../components/CodeBlock';

export default function PythonCheatsheet() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Python Day 1 Cheatsheet</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything from today on one page — save this!</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🐍 Quick Reference</h2>

        <CodeBlock language="python" title="Complete Day 1 Reference" code={'# ===== COMMENTS =====\n# This is a single-line comment\n\n# ===== VARIABLES =====\nname = "Ali"              # str (String)\nage = 17                  # int (Integer)\nheight = 1.75             # float (Real/Decimal)\nis_student = True         # bool (Boolean)\n\n# ===== CONSTANTS (convention) =====\nTAX_RATE = 0.15           # ALL_CAPS = constant\nMAX_SIZE = 100\n\n# ===== OUTPUT =====\nprint("Hello World")\nprint("Name:", name)\nprint(f"Hello {name}, age {age}")  # f-string (BEST)\n\n# ===== INPUT =====\nname = input("Enter name: ")         # Returns string\nage = int(input("Enter age: "))      # Convert to int\nprice = float(input("Enter price: "))  # Convert to float\n\n# ===== TYPE CONVERSION =====\nint("17")       # String to Integer\nfloat("3.14")   # String to Float\nstr(42)         # Integer to String\nbool(1)         # Integer to Boolean (True)\n\n# ===== CHECK TYPE =====\ntype(name)      # <class \'str\'>\ntype(age)       # <class \'int\'>\ntype(height)    # <class \'float\'>\ntype(True)      # <class \'bool\'>\n\n# ===== ASSIGNMENT =====\n# =  means "store this value" (assignment)\n# == means "is this equal?" (comparison)'} />
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Type Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-emerald-50">
                <th className="p-3 font-bold border border-gray-200">Concept</th>
                <th className="p-3 font-bold text-indigo-700 border border-gray-200">Pseudocode</th>
                <th className="p-3 font-bold text-emerald-700 border border-gray-200">Python</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Declare variable</td>
                <td className="p-3 border border-gray-200 text-indigo-600">DECLARE x : INTEGER</td>
                <td className="p-3 border border-gray-200 text-emerald-600">x = 0</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold">Assign</td>
                <td className="p-3 border border-gray-200 text-indigo-600">x &larr; 5</td>
                <td className="p-3 border border-gray-200 text-emerald-600">x = 5</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Output</td>
                <td className="p-3 border border-gray-200 text-indigo-600">OUTPUT "hi"</td>
                <td className="p-3 border border-gray-200 text-emerald-600">print("hi")</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold">Input</td>
                <td className="p-3 border border-gray-200 text-indigo-600">INPUT x</td>
                <td className="p-3 border border-gray-200 text-emerald-600">x = input()</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Compare</td>
                <td className="p-3 border border-gray-200 text-indigo-600">IF x = 5</td>
                <td className="p-3 border border-gray-200 text-emerald-600">if x == 5:</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold">Constant</td>
                <td className="p-3 border border-gray-200 text-indigo-600">CONSTANT PI = 3.14</td>
                <td className="p-3 border border-gray-200 text-emerald-600">PI = 3.14</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Comment</td>
                <td className="p-3 border border-gray-200 text-indigo-600">// comment</td>
                <td className="p-3 border border-gray-200 text-emerald-600"># comment</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold">String</td>
                <td className="p-3 border border-gray-200 text-indigo-600">STRING</td>
                <td className="p-3 border border-gray-200 text-emerald-600">str</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Integer</td>
                <td className="p-3 border border-gray-200 text-indigo-600">INTEGER</td>
                <td className="p-3 border border-gray-200 text-emerald-600">int</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold">Decimal</td>
                <td className="p-3 border border-gray-200 text-indigo-600">REAL</td>
                <td className="p-3 border border-gray-200 text-emerald-600">float</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold">Boolean</td>
                <td className="p-3 border border-gray-200 text-indigo-600">BOOLEAN</td>
                <td className="p-3 border border-gray-200 text-emerald-600">bool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          {[
            { wrong: 'Forgetting to convert input()', right: 'Always use int() or float() for numbers' },
            { wrong: 'Writing true/false (lowercase)', right: 'Python uses True/False (capital T and F)' },
            { wrong: 'Using = for comparison', right: '= is assignment, == is comparison' },
            { wrong: 'Mixing up print() and input()', right: 'print() shows output, input() gets user input' },
            { wrong: 'Not putting f before f-strings', right: 'Must write f"..." not just "..." to use {variables}' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="flex-1">
                <p className="text-sm font-bold text-red-600">❌ {item.wrong}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-green-600">✅ {item.right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card bg-gradient-to-r from-emerald-50 to-green-50">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">✅ Day 1 Checklist</h2>
        <p className="text-gray-600 mb-4">Tick off what you have learned:</p>
        <div className="space-y-2">
          {[
            'I installed Python and can run python --version',
            'I installed VS Code with the Python extension',
            'I can create and run a .py file',
            'I understand print() for output',
            'I understand variables: str, int, float, bool',
            'I understand input() returns a STRING always',
            'I can convert input using int() and float()',
            'I can use f-strings to format output',
            'I know = is assignment and == is comparison',
            'I know constants use ALL_CAPS by convention',
            'I completed calculator.py',
            'I completed greeting.py',
            'I completed converter.py',
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 cursor-pointer transition-all">
              <input type="checkbox" className="w-5 h-5 rounded accent-emerald-600" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="success-box mt-6">
        <p className="font-bold text-green-800 text-lg">🎉 Day 1 Complete!</p>
        <p className="text-green-700 mt-1">
          You now know variables, types, input/output and type conversion in BOTH pseudocode AND Python.
          Tomorrow (Day 2) we tackle <strong>Selection (IF statements)</strong> — the concept is the same in both languages,
          just different syntax. You are doing great! 💪
        </p>
      </div>
    </div>
  );
}
