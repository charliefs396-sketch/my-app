import CodeBlock from '../../components/CodeBlock';

export default function PythonInput() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">⌨️ Input & Type Conversion</h1>
      <p className="text-gray-500 mb-6 text-lg">Getting data from the user — and the #1 beginner trap!</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The input() Function</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <code className="bg-gray-100 px-2 py-0.5 rounded font-mono">input()</code> pauses your program and waits for the user to type something.
          Whatever they type gets stored in a variable. Think of it like <code>INPUT</code> in pseudocode.
        </p>

        <CodeBlock language="python" title="Basic input" code={`# Ask the user for their name
name = input("Enter your name: ")
print(f"Hello {name}!")

# The message inside input() is the prompt
# It shows on screen so the user knows what to type`} />

        <div className="info-box mt-4">
          <p className="font-bold text-blue-800">🔍 Pseudocode Comparison</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="font-bold text-indigo-700 text-sm mb-1">📝 Pseudocode (2 lines):</p>
              <code className="text-sm text-gray-700 font-mono">OUTPUT "Enter your name: "</code><br/>
              <code className="text-sm text-gray-700 font-mono">INPUT Name</code>
            </div>
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="font-bold text-emerald-700 text-sm mb-1">🐍 Python (1 line):</p>
              <code className="text-sm text-gray-700 font-mono">name = input("Enter your name: ")</code>
            </div>
          </div>
          <p className="text-blue-700 text-sm mt-2">
            Notice how Python combines the prompt and input into ONE line. The text inside <code>input()</code> acts as the prompt.
          </p>
        </div>
      </div>

      <div className="section-card border-2 border-red-200">
        <h2 className="text-2xl font-bold text-red-700 mb-4">🚨 THE #1 BEGINNER TRAP: input() Returns a STRING</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is the <strong>most common mistake</strong> beginners make.
          <code className="bg-red-50 px-2 py-0.5 rounded font-mono text-red-700">input()</code> ALWAYS returns a <strong>string</strong>,
          even if the user types a number!
        </p>

        <CodeBlock language="python" title="The trap — watch carefully!" code={`# The user types 5...
number = input("Enter a number: ")

# But number is a STRING, not an integer!
print(number + number)
# Output: "55" (not 10!)
# Python joined two strings "5" + "5" = "55"

# It did STRING CONCATENATION, not addition!`} />

        <div className="warning-box mt-4">
          <p className="font-bold text-red-800">⚠️ WHY does this happen?</p>
          <p className="text-red-700 mt-1">
            When you type <code>5</code>, Python sees it as the TEXT <code>"5"</code>, not the NUMBER <code>5</code>.
            Adding two strings joins them: <code>"5" + "5" = "55"</code>.
            To do maths, you must <strong>convert</strong> (cast) the string to a number.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Type Conversion (Casting)</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Type conversion</strong> (also called <strong>casting</strong>) means changing a value from one type to another.
          This is essential when working with <code>input()</code>:
        </p>

        <CodeBlock language="python" title="Converting input to numbers" code={`# Convert to INTEGER using int()
age = int(input("Enter your age: "))
print(age + 1)   # Now this does maths! e.g., 17 + 1 = 18

# Convert to FLOAT using float()
height = float(input("Enter your height in metres: "))
print(f"You are {height}m tall")

# Convert to STRING using str()
number = 42
text = str(number)   # Now it's "42" (a string)

# Keep as STRING (no conversion needed for text)
name = input("Enter your name: ")   # Already a string!`} />

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Function</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">What it does</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Example</th>
                <th className="p-3 font-bold text-emerald-800 border border-emerald-200">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">int()</td>
                <td className="p-3 border border-gray-200 text-gray-700">Converts to integer</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">int("17")</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">17</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">float()</td>
                <td className="p-3 border border-gray-200 text-gray-700">Converts to decimal</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">float("3.14")</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">3.14</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">str()</td>
                <td className="p-3 border border-gray-200 text-gray-700">Converts to string</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">str(42)</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">"42"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-mono text-emerald-700 font-bold">bool()</td>
                <td className="p-3 border border-gray-200 text-gray-700">Converts to boolean</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">bool(1)</td>
                <td className="p-3 border border-gray-200 font-mono text-sm">True</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Pattern You'll Use 100 Times</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is the <strong>standard pattern</strong> for getting numeric input. Memorise it:
        </p>

        <CodeBlock language="python" title="The standard input pattern" code={`# For integers:
age = int(input("Enter your age: "))

# For decimals:
price = float(input("Enter the price: "))

# For text (no conversion needed):
name = input("Enter your name: ")

# Full example
name = input("Enter your name: ")
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))

print(f"Hello {name}")
print(f"You are {age} years old")
print(f"You are {height}m tall")`} />

        <div className="success-box mt-4">
          <p className="font-bold text-green-800">✅ Golden Rule</p>
          <p className="text-green-700 mt-1">
            <strong>Always ask yourself:</strong> "Do I need to do maths with this input?"
            If YES → wrap it in <code>int()</code> or <code>float()</code>.
            If NO (it's just text like a name) → leave it as is.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What Happens When Conversion Fails?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If the user types <code>"abc"</code> but you try to do <code>int("abc")</code>, Python crashes with a
          <strong> ValueError</strong>. You'll learn how to handle this with try/except later in the course.
          For now, just assume the user types valid input.
        </p>

        <CodeBlock language="python" title="What NOT to do" code={`# This will CRASH if user types text instead of a number
age = int(input("Enter age: "))

# If user types "hello" instead of a number:
# ValueError: invalid literal for int() with base 10: 'hello'

# Don't worry about fixing this yet!
# We'll learn error handling later in the course`} />
      </div>
    </div>
  );
}
