import CodeBlock from '../../components/CodeBlock';

export default function D10ExamFAQ() {
  const faqs = [
    {
      q: 'What is the difference between a PROCEDURE and a FUNCTION?',
      a: 'A procedure performs a task but does NOT return a value. A function performs a task AND returns a single value back to the caller. Use CALL for procedures; use the return value directly in expressions for functions.',
      code: `// Procedure - no return
PROCEDURE ShowMessage(Msg : STRING)
   OUTPUT Msg
ENDPROCEDURE
CALL ShowMessage("Hello")   // CALL is needed

// Function - returns a value
FUNCTION Square(N : INTEGER) RETURNS INTEGER
   RETURN N * N
ENDFUNCTION
Result ← Square(5)          // No CALL, use the value`,
      tip: 'If the question says "write a function that...", make sure you include RETURNS and RETURN inside.',
    },
    {
      q: 'When should I use CALL and when should I not?',
      a: 'CALL is ONLY for procedures. Functions never use CALL — their return value is used in an expression or assignment.',
      code: `// CORRECT:
CALL PrintLine(20)          // Procedure - use CALL
Result ← Maximum(5, 10)    // Function - no CALL, use result
OUTPUT Maximum(5, 10)      // Function - no CALL, use result

// WRONG:
CALL Maximum(5, 10)         // Loses marks - CALL with function!
PrintLine(20)               // Loses marks - no CALL with procedure!`,
      tip: 'Quick test: Does it RETURN something? No CALL. Does it not RETURN? Use CALL.',
    },
    {
      q: 'What is the difference between BYVAL and BYREF?',
      a: 'BYVAL passes a copy — the original variable is NOT changed. BYREF passes a reference — the original variable IS changed. Default is BYVAL if not specified.',
      code: `PROCEDURE TestByVal(BYVAL X : INTEGER)
   X ← X + 10    // Only changes the copy
ENDPROCEDURE

PROCEDURE TestByRef(BYREF X : INTEGER)
   X ← X + 10    // Changes the ORIGINAL
ENDPROCEDURE

DECLARE N : INTEGER
N ← 5
CALL TestByVal(N)
OUTPUT N    // Still 5 - BYVAL didn't change it

CALL TestByRef(N)
OUTPUT N    // Now 15 - BYREF changed it`,
      tip: 'Always write BYVAL or BYREF explicitly in exam answers even when optional.',
    },
    {
      q: 'What is the difference between a parameter and an argument?',
      a: 'A PARAMETER is the variable name in the definition header (placeholder). An ARGUMENT is the actual value passed when calling the subroutine.',
      code: `// "Length" is the PARAMETER (in the definition)
PROCEDURE PrintLine(Length : INTEGER)
   ...
ENDPROCEDURE

// "20" is the ARGUMENT (in the call)
CALL PrintLine(20)`,
      tip: 'P = Placeholder (parameter in definition). A = Actual value (argument when calling).',
    },
    {
      q: 'What is a local variable and why does it matter?',
      a: 'A local variable is declared INSIDE a subroutine and only exists while that subroutine runs. It cannot be accessed from outside. This prevents accidental interference with other variables.',
      code: `PROCEDURE Calculate(A : INTEGER)
   DECLARE Temp : INTEGER    // LOCAL - only exists here
   Temp ← A * 2
   OUTPUT Temp
ENDPROCEDURE

CALL Calculate(5)
// OUTPUT Temp    // ERROR! Temp doesn't exist here`,
      tip: 'The exam asks "what is the scope of variable X?" — if it\'s declared inside a subroutine, answer "local".',
    },
    {
      q: 'Can a function have more than one RETURN statement?',
      a: 'Yes! Functions can have multiple RETURN statements, but only ONE is executed each time the function is called (the first one reached). This is common in IF/ELSE structures.',
      code: `FUNCTION GetGrade(Mark : INTEGER) RETURNS CHAR
   IF Mark >= 80
      THEN
         RETURN 'A'    // Returns here if Mark >= 80
   ENDIF
   IF Mark >= 70
      THEN
         RETURN 'B'    // Returns here if 70 <= Mark < 80
   ENDIF
   RETURN 'F'          // Returns here if Mark < 70
ENDFUNCTION`,
      tip: 'Each RETURN exits the function immediately — the rest of the function body is skipped.',
    },
    {
      q: 'Why would I use BYREF for arrays but BYVAL for simple variables?',
      a: 'Arrays passed BYREF allow the procedure to actually modify the original array (e.g., for sorting). Simple variables passed BYVAL are safer — you can read the value without any risk of accidentally modifying it.',
      code: `// BYREF - we NEED to change the original array
PROCEDURE Sort(BYREF Data : ARRAY, Size : INTEGER)
   // Sorts Data in place
ENDPROCEDURE

// BYVAL - we only need to READ, not change
PROCEDURE Display(BYVAL Data : ARRAY, Size : INTEGER)
   // Just prints the values
ENDPROCEDURE`,
      tip: 'Ask yourself: "Does this subroutine need to change the variable?" Yes → BYREF. No → BYVAL.',
    },
    {
      q: 'What does RETURNS mean vs RETURN?',
      a: 'RETURNS (in the header) declares what TYPE of value the function will give back. RETURN (inside the body) actually sends the value back.',
      code: `// RETURNS in header = "this function gives back an INTEGER"
FUNCTION Double(N : INTEGER) RETURNS INTEGER
//                           ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ declares the type
   
   RETURN N * 2
// ↑↑↑↑↑↑      actually sends the value back

ENDFUNCTION`,
      tip: 'The type after RETURNS must match what you actually RETURN. If you RETURN a REAL, write RETURNS REAL.',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">❓ Exam FAQ</h1>
      <p className="text-gray-500 text-lg mb-8">Day 10 — Procedures & Functions — Most asked exam questions</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-lime-500 text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                <p className="font-bold text-gray-900">{faq.q}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-4">
                <p className="text-blue-800 text-sm">{faq.a}</p>
              </div>
              <CodeBlock language="pseudocode" code={faq.code} />
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">💡 <strong>Exam tip:</strong> {faq.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-2xl">
        <h2 className="text-xl font-bold text-lime-800 mb-4">⭐ Key Points to Memorise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'PROCEDURE → CALL keyword, no RETURNS, no RETURN',
            'FUNCTION → no CALL, has RETURNS in header, has RETURN in body',
            'BYVAL → copy is passed → original NOT changed',
            'BYREF → reference is passed → original IS changed',
            'Parameter = placeholder in definition header',
            'Argument = actual value passed when calling',
            'Local variable = only exists inside its subroutine',
            'Default passing method is BYVAL if not specified',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2 bg-white rounded-xl p-3 border border-lime-100">
              <span className="text-lime-500 font-bold text-sm flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
