import CodeBlock from '../../components/CodeBlock';

export default function PythonVsPseudocode() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔄 Python vs Pseudocode</h1>
      <p className="text-gray-500 mb-6 text-lg">Side-by-side comparison — see the same concept in both languages</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why This Matters</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In your exam, <strong>Paper 1 and 2</strong> use pseudocode. <strong>Paper 4</strong> uses Python.
          You need to be fluent in BOTH. The good news? They're saying the same thing in different ways.
          It's like learning British English vs American English — same ideas, slightly different words.
        </p>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Side-by-Side Comparisons</h2>

        {/* Declaring Variables */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Declaring Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <CodeBlock language="pseudocode" title="Pseudocode" code={`DECLARE Name : STRING
DECLARE Age : INTEGER
DECLARE Price : REAL
DECLARE Found : BOOLEAN`} />
          <CodeBlock language="python" title="Python" code={`name = ""        # String
age = 0          # Integer
price = 0.0      # Float (Real)
found = False    # Boolean

# Python doesn't need DECLARE!
# Just assign a value and it works`} />
        </div>

        {/* Assignment */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Assignment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <CodeBlock language="pseudocode" title="Pseudocode" code={`Name ← "Ali"
Age ← 17
Price ← 29.99
Found ← TRUE`} />
          <CodeBlock language="python" title="Python" code={`name = "Ali"
age = 17
price = 29.99
found = True`} />
        </div>

        {/* Constants */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Constants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <CodeBlock language="pseudocode" title="Pseudocode" code={`CONSTANT TAXRATE = 0.15
CONSTANT MAXSIZE = 100`} />
          <CodeBlock language="python" title="Python" code={`# Python doesn't have true constants
# Convention: use ALL_CAPS to show it shouldn't change
TAX_RATE = 0.15
MAX_SIZE = 100

# Nothing stops you changing it, but DON'T!`} />
        </div>

        {/* Input/Output */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Input & Output
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <CodeBlock language="pseudocode" title="Pseudocode" code={`OUTPUT "Enter your name: "
INPUT Name
OUTPUT "Hello ", Name

OUTPUT "Enter your age: "
INPUT Age
OUTPUT "You are ", Age, " years old"`} />
          <CodeBlock language="python" title="Python" code={`name = input("Enter your name: ")
print(f"Hello {name}")

age = int(input("Enter your age: "))
print(f"You are {age} years old")`} />
        </div>

        {/* Full Program */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Full Program: Calculate Average
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <CodeBlock language="pseudocode" title="Pseudocode" code={`DECLARE Mark1 : INTEGER
DECLARE Mark2 : INTEGER
DECLARE Mark3 : INTEGER
DECLARE Average : REAL

OUTPUT "Enter mark 1: "
INPUT Mark1
OUTPUT "Enter mark 2: "
INPUT Mark2
OUTPUT "Enter mark 3: "
INPUT Mark3

Average ← (Mark1 + Mark2 + Mark3) / 3
OUTPUT "Average: ", Average`} />
          <CodeBlock language="python" title="Python" code={`mark1 = int(input("Enter mark 1: "))
mark2 = int(input("Enter mark 2: "))
mark3 = int(input("Enter mark 3: "))

average = (mark1 + mark2 + mark3) / 3
print(f"Average: {average}")`} />
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-emerald-50">
                <th className="p-3 font-bold text-gray-800 border border-gray-200">Concept</th>
                <th className="p-3 font-bold text-indigo-700 border border-gray-200">📝 Pseudocode</th>
                <th className="p-3 font-bold text-emerald-700 border border-gray-200">🐍 Python</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Declare variable</td>
                <td className="p-3 border border-gray-200 text-indigo-700">DECLARE x : INTEGER</td>
                <td className="p-3 border border-gray-200 text-emerald-700">x = 0</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Assignment</td>
                <td className="p-3 border border-gray-200 text-indigo-700">x &larr; 5</td>
                <td className="p-3 border border-gray-200 text-emerald-700">x = 5</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Output</td>
                <td className="p-3 border border-gray-200 text-indigo-700">OUTPUT "hello"</td>
                <td className="p-3 border border-gray-200 text-emerald-700">print("hello")</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Input</td>
                <td className="p-3 border border-gray-200 text-indigo-700">INPUT x</td>
                <td className="p-3 border border-gray-200 text-emerald-700">x = input()</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Comparison</td>
                <td className="p-3 border border-gray-200 text-indigo-700">IF x = 5</td>
                <td className="p-3 border border-gray-200 text-emerald-700">if x == 5:</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Constant</td>
                <td className="p-3 border border-gray-200 text-indigo-700">CONSTANT PI = 3.14</td>
                <td className="p-3 border border-gray-200 text-emerald-700">PI = 3.14</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Comment</td>
                <td className="p-3 border border-gray-200 text-indigo-700">// comment</td>
                <td className="p-3 border border-gray-200 text-emerald-700"># comment</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">String type</td>
                <td className="p-3 border border-gray-200 text-indigo-700">STRING</td>
                <td className="p-3 border border-gray-200 text-emerald-700">str</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Integer type</td>
                <td className="p-3 border border-gray-200 text-indigo-700">INTEGER</td>
                <td className="p-3 border border-gray-200 text-emerald-700">int</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-sans font-bold text-gray-700">Decimal type</td>
                <td className="p-3 border border-gray-200 text-indigo-700">REAL</td>
                <td className="p-3 border border-gray-200 text-emerald-700">float</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="success-box">
        <p className="font-bold text-green-800">✅ Key Takeaway</p>
        <p className="text-green-700 mt-1">
          Python is <strong>shorter and simpler</strong> — no DECLARE, no arrows, types are automatic.
          But pseudocode is <strong>stricter and more explicit</strong> — which is exactly what the examiner wants on paper.
          Master both and you'll crush the exam! 💪
        </p>
      </div>
    </div>
  );
}
