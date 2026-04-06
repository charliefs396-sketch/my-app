import CodeBlock from '../../components/CodeBlock';

export default function D28ExamFAQ() {
  const faqs = [
    {
      q: "What is a base case and why is it essential?",
      a: "The base case is the condition where the function STOPS calling itself and returns a direct value. Without a base case, the function calls itself forever until the program runs out of memory — this is called a stack overflow error.",
      code: `// Without base case - INFINITE RECURSION (WRONG!)
FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   RETURN N * Factorial(N - 1)   // Never stops!
ENDFUNCTION

// With base case - CORRECT
FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1    // STOPS here
      ELSE
         RETURN N * Factorial(N - 1)
   ENDIF
ENDFUNCTION`,
      tip: "Exam answer: 'Without a base case, the function would call itself indefinitely, causing a stack overflow error.'"
    },
    {
      q: "What is the difference between recursion and iteration?",
      a: "Recursion is when a function calls itself. Iteration uses loops (FOR, WHILE, REPEAT). Both can solve the same problems, but they have different trade-offs.",
      code: `// Recursive sum
FUNCTION SumTo(N : INTEGER) RETURNS INTEGER
   IF N <= 0
      THEN RETURN 0
      ELSE RETURN N + SumTo(N - 1)
   ENDIF
ENDFUNCTION

// Iterative sum
FUNCTION SumTo(N : INTEGER) RETURNS INTEGER
   DECLARE Total : INTEGER
   DECLARE i : INTEGER
   Total ← 0
   FOR i ← 1 TO N
      Total ← Total + i
   NEXT i
   RETURN Total
ENDFUNCTION`,
      tip: "Recursion: elegant, uses more memory. Iteration: faster, uses less memory."
    },
    {
      q: "How many times does Factorial(5) call itself?",
      a: "Factorial(5) makes 4 recursive calls: Factorial(4), Factorial(3), Factorial(2), Factorial(1). The base case Factorial(1) returns immediately without another call. Total = 5 calls including the original.",
      code: `// Call chain:
// Factorial(5) → calls Factorial(4)    [call 1]
// Factorial(4) → calls Factorial(3)    [call 2]
// Factorial(3) → calls Factorial(2)    [call 3]
// Factorial(2) → calls Factorial(1)    [call 4]
// Factorial(1) → RETURNS 1 (base case) [no more calls]
// Total recursive calls = 4`,
      tip: "For Factorial(N), there are N-1 recursive calls."
    },
    {
      q: "What is a stack overflow?",
      a: "When a recursive function has no base case (or the base case is never reached), it keeps calling itself and adding new stack frames to the call stack. Eventually the call stack runs out of memory — this crash is called a stack overflow.",
      code: `// This causes stack overflow - N never reaches base case
FUNCTION Bad(N : INTEGER) RETURNS INTEGER
   IF N = 0
      THEN
         RETURN 0
      ELSE
         RETURN N + Bad(N + 1)  // N increases! Never reaches 0!
   ENDIF
ENDFUNCTION`,
      tip: "Stack overflow = infinite recursion = base case never reached."
    },
    {
      q: "When should I use recursion vs iteration?",
      a: "Use recursion when the problem is naturally recursive (trees, factorials, Fibonacci, search in nested structures). Use iteration when performance matters or the loop is simple.",
      code: `// Recursion is NATURAL for:
// - Factorial (N! = N * (N-1)!)
// - Fibonacci (Fib(N) = Fib(N-1) + Fib(N-2))
// - Tree traversal
// - Binary search

// Iteration is BETTER for:
// - Simple counting loops
// - Performance-critical code
// - When recursion depth would be very large`,
      tip: "Exam: 'Recursion is more elegant but uses more memory due to the call stack.'"
    },
    {
      q: "What happens to local variables in recursive calls?",
      a: "Each recursive call gets its OWN copy of all local variables. They are completely independent. When a call returns, its local variables are destroyed.",
      code: `FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   // Each call has its OWN N:
   // Call 1: N = 4 (separate copy)
   // Call 2: N = 3 (separate copy)
   // Call 3: N = 2 (separate copy)
   // Call 4: N = 1 (separate copy)
   IF N <= 1
      THEN RETURN 1
      ELSE RETURN N * Factorial(N - 1)
   ENDIF
ENDFUNCTION`,
      tip: "Each function call is completely independent with its own variable values."
    },
    {
      q: "Does RETURN stop the recursion immediately?",
      a: "RETURN stops THE CURRENT function call and passes the value back to whoever called it. It does NOT stop other calls that are still waiting. The calling function then continues from where it left off.",
      code: `// When Factorial(1) hits RETURN 1:
// - Factorial(1) finishes and returns 1
// - Factorial(2) was waiting: now gets 1, does 2*1=2, returns 2
// - Factorial(3) was waiting: now gets 2, does 3*2=6, returns 6
// - Factorial(4) was waiting: now gets 6, does 4*6=24, returns 24`,
      tip: "RETURN only ends the current call — other calls in the stack continue unwinding."
    },
    {
      q: "Can a PROCEDURE be recursive?",
      a: "Yes! A recursive PROCEDURE calls itself with CALL but does NOT return a value. Used for tasks like printing, countdown, or traversal.",
      code: `PROCEDURE Countdown(N : INTEGER)
   IF N <= 0
      THEN
         OUTPUT "Go!"    // base case - no RETURN needed
      ELSE
         OUTPUT N
         CALL Countdown(N - 1)  // recursive call uses CALL
   ENDIF
ENDPROCEDURE

// Usage:
CALL Countdown(3)
// Outputs: 3, 2, 1, Go!`,
      tip: "Recursive PROCEDURE uses CALL. Recursive FUNCTION uses RETURN with the value."
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">❓ Recursion — Exam FAQ</h2>
      <p className="text-gray-500 mb-6">The 8 most common recursion questions in Cambridge 9618 Paper 2.</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-violet-700 mb-2">Q{i + 1}: {faq.q}</h3>
            <p className="text-gray-700 mb-4">{faq.a}</p>
            <CodeBlock language="pseudocode" code={faq.code} />
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm font-bold text-amber-800">💡 Exam Tip: {faq.tip}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-violet-50 border border-violet-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-violet-800 mb-4">🔑 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Every recursive function MUST have a base case',
            'Each call must make PROGRESS toward the base case',
            'Each call has its OWN independent local variables',
            'FUNCTION uses RETURN, PROCEDURE uses CALL',
            'Stack overflow = base case never reached',
            'Recursion uses more memory than iteration',
            'Fibonacci(N) makes exponentially many calls',
            'Factorial(N) makes exactly N-1 recursive calls',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-violet-100">
              <span className="text-violet-500 font-bold mt-0.5">✓</span>
              <p className="text-sm text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
