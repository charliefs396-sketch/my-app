import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  title: string;
  difficulty: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

export default function D28Practice() {
  const [showHints, setShowHints] = useState<Record<number, number>>({});
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});

  const exercises: Exercise[] = [
    {
      title: "Trace Factorial(6)",
      difficulty: "⭐ Easy",
      description: "Trace the execution of Factorial(6) step by step. Show the winding down phase (building up calls) and the winding up phase (returning values). What is the final answer?",
      hints: [
        "Start with Factorial(6) = 6 * Factorial(5), then expand Factorial(5)...",
        "Keep going until you reach the base case: Factorial(1) = 1",
        "Then work back UP: Factorial(2)=2*1=2, Factorial(3)=3*2=6, etc.",
        "Final answer: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720",
      ],
      solution: `// Winding DOWN:
Factorial(6) = 6 * Factorial(5)
  Factorial(5) = 5 * Factorial(4)
    Factorial(4) = 4 * Factorial(3)
      Factorial(3) = 3 * Factorial(2)
        Factorial(2) = 2 * Factorial(1)
          Factorial(1) = 1   // BASE CASE

// Winding UP:
          Factorial(1) = 1
        Factorial(2) = 2 * 1 = 2
      Factorial(3) = 3 * 2 = 6
    Factorial(4) = 4 * 6 = 24
  Factorial(5) = 5 * 24 = 120
Factorial(6) = 6 * 120 = 720`,
      explanation: "6! = 720. The function makes 5 recursive calls (Factorial 5,4,3,2,1). The base case is hit at N=1, then all 6 stack frames unwind in reverse order.",
    },
    {
      title: "Write Recursive SumTo(N)",
      difficulty: "⭐⭐ Medium",
      description: "Write a recursive FUNCTION called SumTo that calculates the sum of all integers from 1 to N. For example, SumTo(4) = 1+2+3+4 = 10. Include the base case and recursive case. Then trace SumTo(4).",
      hints: [
        "Think: SumTo(4) = 4 + SumTo(3), SumTo(3) = 3 + SumTo(2)...",
        "Base case: SumTo(1) = 1 (or SumTo(0) = 0)",
        "Recursive case: RETURN N + SumTo(N - 1)",
        "Trace: SumTo(4)=4+3+2+1=10",
      ],
      solution: `FUNCTION SumTo(N : INTEGER) RETURNS INTEGER
   IF N <= 1
      THEN
         RETURN 1         // base case: sum to 1 is just 1
      ELSE
         RETURN N + SumTo(N - 1)   // recursive case
   ENDIF
ENDFUNCTION

// Trace SumTo(4):
// SumTo(4) = 4 + SumTo(3)
//   SumTo(3) = 3 + SumTo(2)
//     SumTo(2) = 2 + SumTo(1)
//       SumTo(1) = 1  // base case
//     SumTo(2) = 2 + 1 = 3
//   SumTo(3) = 3 + 3 = 6
// SumTo(4) = 4 + 6 = 10

// Usage:
DECLARE Answer : INTEGER
Answer ← SumTo(4)
OUTPUT Answer    // 10`,
      explanation: "SumTo(N) = N + (N-1) + ... + 1. The base case is SumTo(1)=1. Each call reduces N by 1. SumTo(4) = 10 = 4+3+2+1.",
    },
    {
      title: "Write Recursive Power(Base, Exp)",
      difficulty: "⭐⭐ Medium",
      description: "Write a recursive FUNCTION called Power that calculates Base raised to the power Exp (Base^Exp). For example, Power(2, 4) = 16. Include base case (Exp = 0) and recursive case. Trace Power(3, 3).",
      hints: [
        "Think: Power(2, 4) = 2 * Power(2, 3), Power(2, 3) = 2 * Power(2, 2)...",
        "Base case: any number to the power 0 = 1, so Power(Base, 0) = 1",
        "Recursive case: RETURN Base * Power(Base, Exp - 1)",
        "Power(3,3) = 3 * 3 * 3 = 27",
      ],
      solution: `FUNCTION Power(Base : INTEGER, Exp : INTEGER) RETURNS INTEGER
   IF Exp = 0
      THEN
         RETURN 1         // anything to power 0 = 1
      ELSE
         RETURN Base * Power(Base, Exp - 1)
   ENDIF
ENDFUNCTION

// Trace Power(3, 3):
// Power(3, 3) = 3 * Power(3, 2)
//   Power(3, 2) = 3 * Power(3, 1)
//     Power(3, 1) = 3 * Power(3, 0)
//       Power(3, 0) = 1   // base case
//     Power(3, 1) = 3 * 1 = 3
//   Power(3, 2) = 3 * 3 = 9
// Power(3, 3) = 3 * 9 = 27

// Usage:
OUTPUT Power(2, 4)    // 16
OUTPUT Power(3, 3)    // 27
OUTPUT Power(5, 0)    // 1`,
      explanation: "Power(Base, Exp) reduces Exp by 1 each call. Base case is Exp=0 returning 1. Power(3,3) = 3×3×3 = 27 — exactly 3 recursive calls.",
    },
    {
      title: "⭐ Hard: Recursive Reverse String",
      difficulty: "⭐⭐⭐ Hard",
      description: "Write a recursive FUNCTION called Reverse that reverses a string. For example, Reverse('Hello') = 'olleH'. Hint: Reverse('Hello') = Reverse('ello') + 'H'. Trace Reverse('ABC').",
      hints: [
        "Think: to reverse 'Hello', take the first character 'H' and put it at the END",
        "Reverse('Hello') = Reverse('ello') + 'H' — take the tail and add the head at the end",
        "Use LEFT(Text, 1) for first char, RIGHT(Text, LENGTH(Text)-1) for rest",
        "Base case: empty string or single character returns itself",
      ],
      solution: `FUNCTION Reverse(Text : STRING) RETURNS STRING
   IF LENGTH(Text) <= 1
      THEN
         RETURN Text      // base case: single char or empty
      ELSE
         RETURN Reverse(RIGHT(Text, LENGTH(Text) - 1)) & LEFT(Text, 1)
   ENDIF
ENDFUNCTION

// Trace Reverse("ABC"):
// Reverse("ABC") = Reverse("BC") & "A"
//   Reverse("BC") = Reverse("C") & "B"
//     Reverse("C") = "C"  // base case (length 1)
//   Reverse("BC") = "C" & "B" = "CB"
// Reverse("ABC") = "CB" & "A" = "CBA"

// Check: Reverse("ABC") = "CBA" ✓

// More examples:
OUTPUT Reverse("Hello")    // olleH
OUTPUT Reverse("12345")    // 54321`,
      explanation: "Each call takes the first character and appends it to the end of the reversed rest. Base case is length ≤ 1. Reverse('ABC')='CBA' — 2 recursive calls.",
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">✍️ Day 28 Practice Exercises</h2>
      <p className="text-gray-500 mb-6">4 exercises from easy trace tables to writing your own recursive functions.</p>

      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Exercise {i + 1}: {ex.title}</h3>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-bold">{ex.difficulty}</span>
            </div>
            <p className="text-gray-700 mb-6 bg-gray-50 rounded-lg p-4">{ex.description}</p>

            <div className="space-y-2 mb-4">
              {ex.hints.slice(0, (showHints[i] || 0)).map((hint, hi) => (
                <div key={hi} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                  💡 Hint {hi + 1}: {hint}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-4">
              {(showHints[i] || 0) < ex.hints.length && (
                <button
                  onClick={() => setShowHints(prev => ({ ...prev, [i]: (prev[i] || 0) + 1 }))}
                  className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-semibold hover:bg-amber-200 transition-colors"
                >
                  💡 Show Hint ({(showHints[i] || 0)}/{ex.hints.length})
                </button>
              )}
              <button
                onClick={() => setShowSolutions(prev => ({ ...prev, [i]: !prev[i] }))}
                className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg text-sm font-semibold hover:bg-violet-200 transition-colors"
              >
                {showSolutions[i] ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>
            </div>

            {showSolutions[i] && (
              <div className="mt-2">
                <CodeBlock language="pseudocode" code={ex.solution} />
                <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-bold text-green-800">✅ Explanation: {ex.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
