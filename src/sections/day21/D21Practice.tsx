import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D21Practice() {
  const [showHints, setShowHints] = useState<{ [key: string]: number }>({});
  const [showSolutions, setShowSolutions] = useState<{ [key: string]: boolean }>({});

  const revealHint = (id: string) => {
    setShowHints(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const toggleSolution = (id: string) => {
    setShowSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const exercises = [
    {
      id: 'ex1',
      title: 'Traffic Light System',
      difficulty: 'Easy',
      color: 'green',
      task: 'Draw a state-transition diagram for a traffic light system with 4 states: Red, RedAmber, Green, Amber. The only event is "timer expires" which moves to the next state.',
      hints: [
        'There are 4 states: Red, RedAmber, Green, Amber — each is a circle',
        'The transitions form a cycle: Red → RedAmber → Green → Amber → Red',
        'Label every arrow with "timer expires"',
        'Add a filled dot (●) pointing to Red as the initial state',
        'No final state needed — traffic lights run forever',
      ],
      solution: `// Traffic Light State-Transition Diagram
// States (circles): Red, RedAmber, Green, Amber
// Initial state: Red (shown with ● → Red)

// Transitions (all caused by "timer expires"):
● → ( Red ) --[timer expires]--> ( RedAmber )
           --[timer expires]--> ( Green )
           --[timer expires]--> ( Amber )
           --[timer expires]--> ( Red )  // loops back

// Full cycle:
// ( Red ) → ( RedAmber ) → ( Green ) → ( Amber ) → ( Red ) → ...

// Pseudocode:
DECLARE State : STRING
State ← "Red"
REPEAT
   CASE OF State
      "Red"      : State ← "RedAmber"
      "RedAmber" : State ← "Green"
      "Green"    : State ← "Amber"
      "Amber"    : State ← "Red"
   ENDCASE
UNTIL FALSE`,
      solutionExplanation: '4 states in a cycle. Every arrow labelled "timer expires". Initial state Red shown with filled dot. No final state because it loops forever.',
    },
    {
      id: 'ex2',
      title: 'Vending Machine',
      difficulty: 'Medium',
      color: 'amber',
      task: 'Draw a state-transition diagram for a vending machine with states: Idle, Selecting, Paying, Dispensing. Events include: item selected, money inserted, correct amount, cancel.',
      hints: [
        'Start with Idle state — the machine does nothing until an item is selected',
        'From Idle: "item selected" → Selecting',
        'From Selecting: "money inserted" → Paying, "cancel" → Idle',
        'From Paying: "correct amount" → Dispensing, "cancel" → Idle (refund)',
        'From Dispensing: "item dispensed" → Idle (back to start)',
      ],
      solution: `// Vending Machine State-Transition Diagram
// States: Idle, Selecting, Paying, Dispensing

● → ( Idle )
      |
      | [item selected]
      ↓
  ( Selecting ) --[cancel]--> ( Idle )
      |
      | [money inserted]  
      ↓
  ( Paying ) --[cancel / refund money]--> ( Idle )
      |
      | [correct amount inserted]
      ↓
  ( Dispensing )
      |
      | [item dispensed]
      ↓
  ( Idle )  // back to start

// Transition Table:
// Idle       + item selected    → Selecting
// Selecting  + money inserted   → Paying
// Selecting  + cancel           → Idle
// Paying     + correct amount   → Dispensing
// Paying     + cancel           → Idle / refund
// Dispensing + item dispensed   → Idle`,
      solutionExplanation: '5 key transitions. Cancel can happen from Selecting or Paying. Machine always returns to Idle after dispensing. Add refund action on cancel from Paying.',
    },
    {
      id: 'ex3',
      title: 'Convert Diagram to Pseudocode',
      difficulty: 'Hard',
      color: 'red',
      task: 'Convert this state-transition diagram to pseudocode:\nStates: Locked, Attempt1, Attempt2, Unlocked, Blocked\nLocked --[wrong password]--> Attempt1\nAttempt1 --[wrong password]--> Attempt2\nAttempt2 --[wrong password]--> Blocked\nAny state --[correct password]--> Unlocked',
      hints: [
        'Use a DECLARE statement for State as STRING',
        'Use a WHILE loop: WHILE State <> "Unlocked" AND State <> "Blocked"',
        'Inside the loop: INPUT Password, then use CASE OF State',
        'Each CASE handles the transitions for that state',
        'After the loop: check if Unlocked or Blocked and OUTPUT the result',
      ],
      solution: `DECLARE State : STRING
DECLARE Password : STRING

State ← "Locked"

WHILE State <> "Unlocked" AND State <> "Blocked"
   OUTPUT "Enter password: "
   INPUT Password
   
   CASE OF State
      "Locked" :
         IF Password = "secret"
            THEN
               State ← "Unlocked"
            ELSE
               State ← "Attempt1"
         ENDIF
      "Attempt1" :
         IF Password = "secret"
            THEN
               State ← "Unlocked"
            ELSE
               State ← "Attempt2"
         ENDIF
      "Attempt2" :
         IF Password = "secret"
            THEN
               State ← "Unlocked"
            ELSE
               State ← "Blocked"
         ENDIF
   ENDCASE
ENDWHILE

IF State = "Unlocked"
   THEN
      OUTPUT "Access granted"
   ELSE
      OUTPUT "Account blocked - contact admin"
ENDIF`,
      solutionExplanation: 'WHILE loop continues until Unlocked or Blocked. CASE handles each state. IF inside each CASE checks correct vs wrong password. Final IF checks outcome.',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-8">3 exercises — from drawing diagrams to converting to pseudocode</p>

      <div className="space-y-8">
        {exercises.map((ex, idx) => (
          <div key={ex.id} className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-black text-lg">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{ex.title}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  ex.color === 'green' ? 'bg-green-100 text-green-700' :
                  ex.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>{ex.difficulty}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4 whitespace-pre-line text-gray-700 text-sm leading-relaxed">
              {ex.task}
            </div>

            <div className="flex gap-3 flex-wrap mb-4">
              <button
                onClick={() => revealHint(ex.id)}
                disabled={(showHints[ex.id] || 0) >= ex.hints.length}
                className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-semibold hover:bg-amber-200 transition-colors disabled:opacity-50"
              >
                💡 Hint ({showHints[ex.id] || 0}/{ex.hints.length})
              </button>
              <button
                onClick={() => toggleSolution(ex.id)}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors"
              >
                {showSolutions[ex.id] ? '🙈 Hide Solution' : '✅ Show Solution'}
              </button>
            </div>

            {(showHints[ex.id] || 0) > 0 && (
              <div className="mb-4 space-y-2">
                {ex.hints.slice(0, showHints[ex.id]).map((hint, hi) => (
                  <div key={hi} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                    <span className="font-bold flex-shrink-0">Hint {hi + 1}:</span>
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            )}

            {showSolutions[ex.id] && (
              <div>
                <CodeBlock language="pseudocode" code={ex.solution} />
                <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <span className="font-bold">💡 Explanation: </span>{ex.solutionExplanation}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
