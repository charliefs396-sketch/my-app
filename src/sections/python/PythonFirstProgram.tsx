import CodeBlock from '../../components/CodeBlock';

export default function PythonFirstProgram() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🚀 Your First Python Program</h1>
      <p className="text-gray-500 mb-6 text-lg">Let's write real code that actually runs!</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hello World!</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Every programmer's journey starts with <strong>Hello World</strong>. It's the simplest program
          possible — it just prints text to the screen. In Python, it's literally <strong>one line</strong>:
        </p>

        <CodeBlock language="python" title="hello.py — Your first program" code={`# This is a comment - Python ignores it
# Comments start with # and are notes for humans

# Your very first Python program!
print("Hello World!")
print("I am learning Python for A Levels")`} />

        <div className="info-box mt-4">
          <p className="font-bold text-blue-800">🔍 What's happening here?</p>
          <ul className="text-blue-700 mt-2 space-y-2">
            <li><code className="bg-blue-100 px-1 rounded font-mono">#</code> — This starts a <strong>comment</strong>. Python ignores everything after <code>#</code>. Use comments to explain your code.</li>
            <li><code className="bg-blue-100 px-1 rounded font-mono">print()</code> — This is a <strong>function</strong> that displays text on screen. Think of it like <code>OUTPUT</code> in pseudocode.</li>
            <li><code className="bg-blue-100 px-1 rounded font-mono">"Hello World!"</code> — This is a <strong>string</strong> (text). Strings go inside quotes.</li>
          </ul>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Variables — Storing Data</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In pseudocode, you must write <code className="bg-gray-100 px-1 rounded">DECLARE Name : STRING</code>.
          In Python, it's <strong>way simpler</strong> — you just assign a value and Python figures out the type automatically:
        </p>

        <CodeBlock language="python" title="variables.py — No DECLARE needed!" code={`# Variables - just assign a value, Python figures out the type!
name = "Ali"              # This is a String (text)
age = 17                  # This is an Integer (whole number)
height = 1.75             # This is a Float (decimal number)
is_student = True         # This is a Boolean (True/False)

# Print each variable
print(name)
print(age)
print(height)
print(is_student)`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Python vs Pseudocode: Key Difference</p>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="font-bold text-indigo-700 text-sm mb-1">📝 Pseudocode:</p>
              <code className="text-sm text-gray-700 font-mono">DECLARE Name : STRING</code><br/>
              <code className="text-sm text-gray-700 font-mono">Name &larr; "Ali"</code>
            </div>
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="font-bold text-emerald-700 text-sm mb-1">🐍 Python:</p>
              <code className="text-sm text-gray-700 font-mono">name = "Ali"</code><br/>
              <span className="text-xs text-gray-500">That's it. One line. Done.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Printing Multiple Things</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          There are several ways to print variables with text. Here are all of them — the <strong>f-string</strong> method is the best:
        </p>

        <CodeBlock language="python" title="printing.py — Different ways to print" code={`name = "Ali"
age = 17

# Method 1: Commas (simple, adds spaces automatically)
print("Name:", name, "Age:", age)
# Output: Name: Ali Age: 17

# Method 2: Concatenation with + (strings only!)
print("Hello " + name)
# Output: Hello Ali

# Method 3: f-strings (THE BEST - use this!)
print(f"Hello {name}, you are {age} years old")
# Output: Hello {name}, you are 17 years old`} />

        <div className="mt-6 bg-emerald-50 p-5 rounded-xl border border-emerald-200">
          <h3 className="font-bold text-emerald-800 text-lg mb-3">🌟 f-strings Explained (IMPORTANT)</h3>
          <p className="text-gray-700 mb-3">
            f-strings are the <strong>modern, recommended</strong> way to put variables inside text. Here's how they work:
          </p>
          <ol className="space-y-2 text-gray-700">
            <li><strong>1.</strong> Put <code className="bg-emerald-100 px-1 rounded font-mono font-bold">f</code> before the opening quote</li>
            <li><strong>2.</strong> Put any variable inside <code className="bg-emerald-100 px-1 rounded font-mono font-bold">{"{ }"}</code> curly braces</li>
            <li><strong>3.</strong> Python replaces the braces with the actual values!</li>
          </ol>

          <CodeBlock language="python" title="f-string examples" code={`name = "Ali"
score = 85
average = 78.5

# You can put ANY expression inside the braces
print(f"Name: {name}")
print(f"Score: {score} out of 100")
print(f"Double score: {score * 2}")
print(f"Average: {average:.1f}")  # .1f means 1 decimal place`} />
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Python Data Types</h2>
        <p className="text-gray-700 mb-4">Here are the types you'll use most:</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Python Type</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Pseudocode Type</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">What it stores</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">str</td>
                <td className="p-3 border border-gray-200 font-mono text-indigo-600">STRING</td>
                <td className="p-3 border border-gray-200 text-gray-700">Text</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">"Hello"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">int</td>
                <td className="p-3 border border-gray-200 font-mono text-indigo-600">INTEGER</td>
                <td className="p-3 border border-gray-200 text-gray-700">Whole numbers</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">42</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">float</td>
                <td className="p-3 border border-gray-200 font-mono text-indigo-600">REAL</td>
                <td className="p-3 border border-gray-200 text-gray-700">Decimal numbers</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">3.14</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">bool</td>
                <td className="p-3 border border-gray-200 font-mono text-indigo-600">BOOLEAN</td>
                <td className="p-3 border border-gray-200 text-gray-700">True or False</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">True</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock language="python" title="Check the type of any variable" code={`name = "Ali"
age = 17
height = 1.75
passed = True

# type() tells you what type a variable is
print(type(name))     # <class 'str'>
print(type(age))      # <class 'int'>
print(type(height))   # <class 'float'>
print(type(passed))   # <class 'bool'>`} />

        <div className="warning-box mt-4">
          <p className="font-bold text-red-800">⚠️ Watch Out: Python is Case-Sensitive!</p>
          <p className="text-red-700 mt-1">
            <code>True</code> and <code>False</code> must start with a <strong>capital letter</strong> in Python.
            Writing <code>true</code> or <code>TRUE</code> will give you an error!
            This is different from pseudocode which uses <code>TRUE</code> and <code>FALSE</code> (all caps).
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">= in Python vs ← in Pseudocode</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Remember how we said <code>=</code> is NOT for assignment in pseudocode? Well, in Python it IS for assignment!
          This can be confusing, so here's the clear comparison:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200">
            <h3 className="font-bold text-indigo-800 mb-3">📝 Pseudocode</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-700">
              <li><code className="text-purple-600 font-bold">&larr;</code> is for <strong>assignment</strong></li>
              <li><code className="text-blue-600">Age &larr; 17</code></li>
              <li className="pt-2"><code className="text-purple-600 font-bold">=</code> is for <strong>comparison</strong></li>
              <li><code className="text-blue-600">IF Age = 17 THEN</code></li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
            <h3 className="font-bold text-emerald-800 mb-3">🐍 Python</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-700">
              <li><code className="text-emerald-600 font-bold">=</code> is for <strong>assignment</strong></li>
              <li><code className="text-emerald-700">age = 17</code></li>
              <li className="pt-2"><code className="text-emerald-600 font-bold">==</code> is for <strong>comparison</strong></li>
              <li><code className="text-emerald-700">if age == 17:</code></li>
            </ul>
          </div>
        </div>

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Quick Memory Trick</p>
          <p className="text-amber-900 mt-1">
            <strong>One</strong> equals <code>=</code> means "store this value" (assignment). <strong>Two</strong> equals <code>==</code> means "are these equal?" (comparison).
            Easy!
          </p>
        </div>
      </div>
    </div>
  );
}
