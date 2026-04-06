import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D19Practice() {
  const [showHints, setShowHints] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const revealHint = (id: string, total: number) => {
    setShowHints(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, total) }));
  };

  const exercises = [
    {
      id: 'ex1',
      title: '📋 Exercise 1: Create a Test Plan',
      difficulty: 'Medium',
      description: 'A program accepts an age between 1 and 120. If age >= 18, output "Adult". If age >= 13, output "Teenager". Otherwise output "Child". Create a test plan with at least 10 test cases covering normal, abnormal, and boundary data.',
      hints: [
        'Normal data: pick values clearly in each range (5, 15, 25)',
        'Boundary values for range 1-120: 0, 1, 120, 121',
        'Boundary values for age categories: 12, 13, 17, 18',
        'Abnormal: try -10, 200, "abc"',
      ],
      solution: `Test Plan for Age Classification (1-120):

Test | Data | Type     | Expected      | Reason
1    | 5    | Normal   | "Child"       | Valid, clearly under 13
2    | 15   | Normal   | "Teenager"    | Valid, between 13-17
3    | 25   | Normal   | "Adult"       | Valid, clearly 18+
4    | 0    | Boundary | Rejected      | Just below minimum (1)
5    | 1    | Boundary | "Child"       | Minimum valid age
6    | 120  | Boundary | "Adult"       | Maximum valid age
7    | 121  | Boundary | Rejected      | Just above maximum
8    | 12   | Boundary | "Child"       | Just below teenager (13)
9    | 13   | Boundary | "Teenager"    | Exactly teenager boundary
10   | 17   | Boundary | "Teenager"    | Just below adult (18)
11   | 18   | Boundary | "Adult"       | Exactly adult boundary
12   | -10  | Abnormal | Rejected      | Negative number
13   | 500  | Abnormal | Rejected      | Far above maximum
14   | "ab" | Abnormal | Rejected      | Wrong data type`,
    },
    {
      id: 'ex2',
      title: '🐛 Exercise 2: Identify Errors',
      difficulty: 'Medium',
      description: 'Identify the type of error (syntax, logic, or runtime) in each of the following code snippets and explain why.',
      hints: [
        'Look for misspelled keywords and missing syntax elements',
        'Look for code that runs but gives wrong answers',
        'Look for operations that crash (like dividing by zero)',
      ],
      solution: `Snippet 1:
  OUTPU "Enter mark: "
  Error: SYNTAX — "OUTPU" is misspelled, should be "OUTPUT"
  The program will NOT run.

Snippet 2:
  Average ← Total * Count
  Error: LOGIC — should be Total / Count (division, not multiplication)
  The program runs but gives the wrong answer.

Snippet 3:
  Count ← 0
  Result ← 100 / Count
  Error: RUNTIME — division by zero
  The program compiles but crashes when this line executes.

Snippet 4:
  IF Mark > 80
     OUTPUT "Distinction"
  ENDIF
  Error: SYNTAX — missing THEN after the IF condition

Snippet 5:
  FOR i ← 1 TO 9
     OUTPUT Data[i]
  NEXT i
  // Array has 10 elements
  Error: LOGIC — off-by-one error, should be FOR i ← 1 TO 10
  The program runs but misses the last element.`,
    },
    {
      id: 'ex3',
      title: '🔬 Exercise 3: Testing Methods',
      difficulty: 'Easy',
      description: 'For each scenario below, state which testing method would be most appropriate and explain why.',
      hints: [
        'Think about WHO is testing and WHERE',
        'Think about whether they can see the code or not',
        'Alpha = internal, Beta = external, White-box = code visible, Black-box = code hidden',
      ],
      solution: `Scenario 1: "A programmer wants to check every IF branch works"
  Method: WHITE-BOX testing
  Why: The programmer can see the code and wants to test
  every path through it.

Scenario 2: "A company wants users to try the app before launch"
  Method: BETA testing
  Why: External users testing in a real environment before
  the official release.

Scenario 3: "A teacher traces through a student's code on paper"
  Method: DRY RUN
  Why: Manually tracing through code using a trace table
  without running it on a computer.

Scenario 4: "A QA team tests a calculator by only entering inputs"
  Method: BLACK-BOX testing
  Why: The testers cannot see the code — they only check
  if correct inputs produce correct outputs.

Scenario 5: "The search module isn't finished but we need to test the menu"
  Method: STUB testing
  Why: Replace the unfinished search module with a dummy
  version so the rest of the program can be tested.`,
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice Exercises
      </h1>

      {exercises.map((ex) => (
        <div key={ex.id} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-800">{ex.title}</h2>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${ex.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{ex.difficulty}</span>
          </div>
          <p className="text-gray-700 mb-4">{ex.description}</p>

          {/* Hints */}
          <div className="mb-4">
            <button onClick={() => revealHint(ex.id, ex.hints.length)} className="text-sm bg-amber-50 text-amber-700 px-4 py-2 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors font-semibold">
              💡 Reveal Hint ({showHints[ex.id] || 0}/{ex.hints.length})
            </button>
            {(showHints[ex.id] || 0) > 0 && (
              <div className="mt-2 space-y-1">
                {ex.hints.slice(0, showHints[ex.id]).map((hint, i) => (
                  <p key={i} className="text-sm text-amber-700 bg-amber-50 rounded-lg p-2 border border-amber-100">
                    💡 Hint {i + 1}: {hint}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Solution */}
          <button onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))} className="text-sm bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200 hover:bg-green-100 transition-colors font-semibold">
            {showSolution[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}
          </button>
          {showSolution[ex.id] && (
            <div className="mt-3">
              <CodeBlock code={ex.solution} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
