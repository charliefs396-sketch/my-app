import CodeBlock from '../../components/CodeBlock';

export default function D10Procedures() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">🔧 Procedures</h1>
      <p className="text-gray-500 text-lg mb-8">Subroutines that DO things but don't return a value</p>

      {/* What is a procedure */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What is a PROCEDURE?</h2>
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl mb-4">
          <p className="font-bold text-indigo-800">📖 Exam Definition (memorise this!):</p>
          <p className="text-indigo-700 mt-1">A <strong>procedure</strong> is a named block of code that performs a specific task. It does NOT return a value to the part of the program that called it.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="font-bold text-gray-700 mb-2">✅ Use a PROCEDURE when:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• You want to print something to screen</li>
              <li>• You want to modify an array (using BYREF)</li>
              <li>• You want to do an action without calculating a result</li>
              <li>• You want to validate and ask for input again</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="font-bold text-gray-700 mb-2">❌ Don't use a PROCEDURE when:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• You need the result back (use FUNCTION instead)</li>
              <li>• You're calculating something to use in an expression</li>
              <li>• Example: calculating average, finding max</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Syntax breakdown */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 Procedure Syntax — Every Part Explained</h2>
        <CodeBlock language="pseudocode" code={`PROCEDURE PrintLine(Length : INTEGER)
   DECLARE i : INTEGER
   FOR i ← 1 TO Length
      OUTPUT "-"
   NEXT i
   OUTPUT ""
ENDPROCEDURE`} />
        <div className="mt-4 space-y-3">
          {[
            { part: 'PROCEDURE', color: 'bg-blue-100 text-blue-800', desc: 'Keyword that starts the definition. Must match ENDPROCEDURE exactly.' },
            { part: 'PrintLine', color: 'bg-purple-100 text-purple-800', desc: 'The name you choose. Use a descriptive name that says what it does. No spaces!' },
            { part: '(Length : INTEGER)', color: 'bg-green-100 text-green-800', desc: 'Parameters — variables the procedure needs. Length is the parameter name, INTEGER is its type.' },
            { part: 'DECLARE i : INTEGER', color: 'bg-amber-100 text-amber-800', desc: 'Local variable — only exists inside this procedure. Cannot be used outside.' },
            { part: 'ENDPROCEDURE', color: 'bg-red-100 text-red-800', desc: 'Ends the procedure. Everything between PROCEDURE and ENDPROCEDURE is the "body".' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`px-3 py-1 rounded-lg font-mono text-sm font-bold flex-shrink-0 ${item.color}`}>{item.part}</span>
              <p className="text-gray-600 text-sm pt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to CALL a procedure */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📞 How to CALL a Procedure</h2>
        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl mb-4">
          <p className="font-bold text-yellow-800">⭐ KEY RULE: Always use the CALL keyword when calling a procedure!</p>
          <p className="text-yellow-700 text-sm mt-1">This is different from functions — functions don't use CALL.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-bold text-green-700 mb-2">✅ CORRECT way to call:</p>
            <CodeBlock language="pseudocode" code={`// Define
PROCEDURE PrintLine(Length : INTEGER)
   DECLARE i : INTEGER
   FOR i ← 1 TO Length
      OUTPUT "-"
   NEXT i
ENDPROCEDURE

// Call
CALL PrintLine(20)
CALL PrintLine(5)
CALL PrintLine(30)`} />
          </div>
          <div>
            <p className="font-bold text-red-700 mb-2">❌ WRONG — missing CALL:</p>
            <CodeBlock language="pseudocode" code={`// This will lose you marks!
PrintLine(20)      // No CALL keyword
PrintLine(5)       // Examiner expects CALL

// Also wrong:
OUTPUT PrintLine(20)  // Procedures don't
                      // return values!`} />
          </div>
        </div>
      </div>

      {/* Multiple parameters */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔗 Procedures with Multiple Parameters</h2>
        <p className="text-gray-600 mb-4">You can pass as many parameters as needed, separated by commas:</p>
        <CodeBlock language="pseudocode" code={`// Procedure with 3 parameters
PROCEDURE DisplayStudent(Name : STRING, Mark : INTEGER, Grade : CHAR)
   OUTPUT "Name:  ", Name
   OUTPUT "Mark:  ", Mark
   OUTPUT "Grade: ", Grade
   OUTPUT "-------------------"
ENDPROCEDURE

// Calling it with different students
CALL DisplayStudent("Ali", 85, 'A')
CALL DisplayStudent("Sara", 72, 'B')
CALL DisplayStudent("Tom", 58, 'C')`} />

        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="font-bold text-blue-800 mb-2">💡 Order matters!</p>
          <p className="text-blue-700 text-sm">The arguments must match the parameters in ORDER and TYPE. "Ali" goes to Name (STRING ✓), 85 goes to Mark (INTEGER ✓), 'A' goes to Grade (CHAR ✓).</p>
        </div>
      </div>

      {/* No parameters procedure */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🚫 Procedure with No Parameters</h2>
        <p className="text-gray-600 mb-4">Some procedures don't need any input — they just do a fixed task:</p>
        <CodeBlock language="pseudocode" code={`// Procedure with no parameters - empty brackets
PROCEDURE PrintHeader()
   OUTPUT "================================"
   OUTPUT "   STUDENT REPORT SYSTEM       "
   OUTPUT "================================"
ENDPROCEDURE

// Still use CALL, but empty brackets
CALL PrintHeader()`} />
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">⚠️ <strong>Exam note:</strong> Some Cambridge mark schemes accept no brackets for no-parameter procedures, but always include them to be safe.</p>
        </div>
      </div>

      {/* Parameter vs Argument */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-purple-900 mb-4">🏷️ Parameter vs Argument — The Terminology Trap</h2>
        <p className="text-gray-600 mb-4">These two words confuse almost everyone. Here's the clear definition:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="font-bold text-purple-700 text-lg mb-2">Parameter</p>
            <p className="text-gray-600 text-sm mb-3">The variable name in the <strong>DEFINITION</strong> header. It's a placeholder.</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE PrintLine(Length : INTEGER)
//              ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//              This is the PARAMETER`} />
          </div>
          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="font-bold text-indigo-700 text-lg mb-2">Argument</p>
            <p className="text-gray-600 text-sm mb-3">The actual value you pass when you <strong>CALL</strong> the procedure.</p>
            <CodeBlock language="pseudocode" code={`CALL PrintLine(20)
//              ↑↑
//              This is the ARGUMENT`} />
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-xl border border-purple-200">
          <p className="font-bold text-gray-800 mb-2">🎯 Memory trick:</p>
          <p className="text-gray-600 text-sm"><strong>P</strong>arameter = <strong>P</strong>laceholder (in the definition)<br/><strong>A</strong>rgument = <strong>A</strong>ctual value (when calling)</p>
        </div>
      </div>

      {/* Local variables */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🏠 Local Variables</h2>
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
          <p className="font-bold text-green-800">📖 Exam Definition:</p>
          <p className="text-green-700 text-sm mt-1">A <strong>local variable</strong> is declared inside a subroutine and only exists while that subroutine is running. It cannot be accessed from outside.</p>
        </div>
        <CodeBlock language="pseudocode" code={`PROCEDURE CalculateAndPrint(A : INTEGER, B : INTEGER)
   DECLARE Sum : INTEGER    // LOCAL variable - only exists here
   DECLARE Avg : REAL       // LOCAL variable - only exists here
   
   Sum ← A + B
   Avg ← Sum / 2
   OUTPUT "Sum: ", Sum
   OUTPUT "Average: ", Avg
ENDPROCEDURE

CALL CalculateAndPrint(10, 20)

// This would FAIL - Sum doesn't exist out here!
// OUTPUT Sum    // Error! Sum is local to the procedure`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-700 mb-1">✅ Local Variables — Benefits</p>
            <ul className="text-green-600 text-xs space-y-1">
              <li>• Can't accidentally change other parts of the program</li>
              <li>• Memory is freed when procedure ends</li>
              <li>• Different procedures can use same name (e.g., both use i as counter)</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-bold text-blue-700 mb-1">📝 Exam Questions Ask:</p>
            <ul className="text-blue-600 text-xs space-y-1">
              <li>• "What is a local variable?" — know the definition</li>
              <li>• "Why use local variables?" — scope/memory reasons</li>
              <li>• "What is the scope of variable X?" — answer: local or global</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
