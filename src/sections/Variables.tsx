import CodeBlock from '../components/CodeBlock';

export default function Variables() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📦 Variables – In Full Detail</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything you need to know about variables at A Level</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What IS a Variable?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A variable is a <strong>named storage location in memory</strong> that holds a value which 
          <strong> can change</strong> during the execution of a program.
        </p>
        
        <div className="tip-box mb-4">
          <p className="font-bold text-amber-800">📝 Exam Definition (MEMORISE THIS)</p>
          <p className="text-amber-900 mt-1 italic">
            "A variable is a named memory location whose value can change during execution of the program."
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Think of it like a labelled box. The label is the variable <strong>name</strong> (like "Age"), 
          the box can only hold a certain <strong>type</strong> of thing (like integers), and the thing 
          inside is the <strong>value</strong> (like 17). You can swap out the value anytime.
        </p>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to DECLARE Variables</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          At A Level, you <strong>MUST</strong> declare every variable before using it. 
          The syntax is strict:
        </p>

        <div className="bg-indigo-50 p-5 rounded-xl mb-4 border border-indigo-100">
          <p className="font-mono text-lg text-indigo-900 font-bold text-center">
            DECLARE &lt;identifier&gt; : &lt;data type&gt;
          </p>
        </div>

        <CodeBlock title="Declaring Variables – Examples" code={`// Declaring individual variables
DECLARE StudentName : STRING
DECLARE Age : INTEGER
DECLARE AverageScore : REAL
DECLARE PassedExam : BOOLEAN
DECLARE Initial : CHAR
DECLARE DateOfBirth : DATE`} />

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Variable Naming Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">✅ VALID Names</h4>
            <ul className="space-y-1 text-gray-700 font-mono text-sm">
              <li>• StudentName</li>
              <li>• totalMarks</li>
              <li>• count1</li>
              <li>• Average_Score</li>
              <li>• x</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-600 mb-2">❌ INVALID Names</h4>
            <ul className="space-y-1 text-gray-700 font-mono text-sm">
              <li>• 1stStudent (starts with number)</li>
              <li>• student name (has space)</li>
              <li>• INPUT (reserved keyword)</li>
              <li>• my-var (has hyphen)</li>
              <li>• for (reserved keyword)</li>
            </ul>
          </div>
        </div>

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">💡 Pro Tip</p>
          <p className="text-amber-900 mt-1">
            Use <strong>meaningful names</strong>! Don't call your variable <code>x</code> when it stores 
            a student's name. Call it <code>StudentName</code>. The examiner loves clear, readable code. 
            Use <strong>PascalCase</strong> or <strong>camelCase</strong> — both are accepted.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Assignment: The ← Arrow</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Assignment means <strong>giving a value to a variable</strong>. At A Level, you MUST use the 
          left arrow <code className="bg-gray-100 px-2 py-0.5 rounded font-bold text-indigo-600">←</code> 
          for assignment. NOT the equals sign.
        </p>

        <CodeBlock title="Assignment Examples" code={`// First declare, then assign
DECLARE Name : STRING
DECLARE Age : INTEGER
DECLARE Price : REAL
DECLARE Found : BOOLEAN

// Then assign values using ←
Name ← "Ali"
Age ← 17
Price ← 29.99
Found ← TRUE

// You can also assign from calculations
DECLARE Total : REAL
Total ← Price * 2

// Or assign from other variables
DECLARE CopyOfAge : INTEGER
CopyOfAge ← Age`} />

        <div className="warning-box mt-4">
          <p className="font-bold text-red-800">❌ COMMON MISTAKE</p>
          <p className="text-red-700 mt-1">
            Writing <code>Age = 17</code> instead of <code>Age ← 17</code>. 
            The <code>=</code> sign is used for <strong>comparison</strong> in A Level pseudocode (like in IF statements), 
            NOT for assignment. Using <code>=</code> for assignment WILL lose you marks.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">INPUT and OUTPUT</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          These are how your program communicates with the user.
        </p>

        <CodeBlock title="Input and Output" code={`// OUTPUT displays something to the user
OUTPUT "Hello World"

// OUTPUT can combine text and variables
DECLARE Name : STRING
Name ← "Ali"
OUTPUT "Hello ", Name
// This displays: Hello Ali

// OUTPUT can show calculations
DECLARE Score : INTEGER
Score ← 85
OUTPUT "Your score is: ", Score

// INPUT reads a value from the user
OUTPUT "Enter your name: "
INPUT Name

// Full example
DECLARE Age : INTEGER
OUTPUT "How old are you? "
INPUT Age
OUTPUT "You are ", Age, " years old"`} />

        <div className="tip-box mt-4">
          <p className="font-bold text-amber-800">📝 Important Notes</p>
          <ul className="text-amber-900 mt-1 space-y-1">
            <li>• <code>OUTPUT</code> — displays things on screen. Use commas to join text and variables.</li>
            <li>• <code>INPUT</code> — waits for the user to type something and stores it in a variable.</li>
            <li>• Always show an <code>OUTPUT</code> prompt before <code>INPUT</code> so the user knows what to type!</li>
            <li>• You do NOT need quotes around variable names in OUTPUT.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
