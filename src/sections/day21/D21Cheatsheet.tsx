import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D21Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet</h1>
      <p className="text-gray-500 mb-8">Everything you need for Day 21 on one page</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔷 Symbol Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-indigo-50">
              <th className="text-left p-3 font-bold text-indigo-800">Symbol</th>
              <th className="text-left p-3 font-bold text-indigo-800">Meaning</th>
              <th className="text-left p-3 font-bold text-indigo-800">Example</th>
            </tr></thead>
            <tbody>
              {[
                { sym: '( State )', meaning: 'A state — circle with name', ex: '( Red ), ( Locked )' },
                { sym: '●', meaning: 'Initial state indicator', ex: '● → ( Idle )' },
                { sym: '(( State ))', meaning: 'Final/accepting state — double circle', ex: '(( Unlocked ))' },
                { sym: '--[event]-->', meaning: 'Transition with event label', ex: '--[timer expires]-->' },
                { sym: '--[event / action]-->', meaning: 'Transition with event and action', ex: '--[cancel / refund]-->' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-mono text-purple-700">{row.sym}</td>
                  <td className="p-3 text-gray-700">{row.meaning}</td>
                  <td className="p-3 text-gray-600 italic">{row.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💻 Pseudocode Template</h2>
        <CodeBlock language="pseudocode" code={`// State-Transition Diagram → Pseudocode Template
DECLARE State : STRING
DECLARE Input : STRING  // or appropriate type

State ← "InitialState"  // Set starting state

WHILE State <> "FinalState1" AND State <> "FinalState2"
   // Get input/event
   INPUT Input
   
   // Handle transitions
   CASE OF State
      "State1" :
         IF Input = "event1"
            THEN State ← "State2"
            ELSE State ← "State3"
         ENDIF
      "State2" :
         IF Input = "event2"
            THEN State ← "FinalState1"
            ELSE State ← "State1"
         ENDIF
      // Add more states as needed
   ENDCASE
ENDWHILE

// Handle final states
CASE OF State
   "FinalState1" : OUTPUT "Result 1"
   "FinalState2" : OUTPUT "Result 2"
ENDCASE`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h2 className="text-lg font-bold text-gray-900 mb-3">🚦 Traffic Light Quick Ref</h2>
          <div className="space-y-2 text-sm">
            {[
              { from: 'Red', event: 'timer expires', to: 'RedAmber' },
              { from: 'RedAmber', event: 'timer expires', to: 'Green' },
              { from: 'Green', event: 'timer expires', to: 'Amber' },
              { from: 'Amber', event: 'timer expires', to: 'Red' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 font-mono">
                <span className="text-purple-700 font-bold">{t.from}</span>
                <span className="text-gray-400">--[{t.event}]--&gt;</span>
                <span className="text-green-700 font-bold">{t.to}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-lg font-bold text-gray-900 mb-3">🔐 Login System Quick Ref</h2>
          <div className="space-y-2 text-sm">
            {[
              { from: 'Locked', event: 'wrong password', to: 'Attempt1' },
              { from: 'Attempt1', event: 'wrong password', to: 'Attempt2' },
              { from: 'Attempt2', event: 'wrong password', to: 'Blocked' },
              { from: 'Any', event: 'correct password', to: 'Unlocked' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 font-mono text-xs">
                <span className="text-purple-700 font-bold">{t.from}</span>
                <span className="text-gray-400">--[{t.event}]--&gt;</span>
                <span className="text-green-700 font-bold">{t.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✅ Confidence Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            'I can identify the 4 components of a state-transition diagram',
            'I know that states are shown as circles',
            'I know that transitions are shown as labelled arrows',
            'I can draw the initial state indicator (filled dot ●)',
            'I know final states are shown as double circles (◎)',
            'I always label every transition arrow with an event',
            'I understand the difference between event and action',
            'I can draw a traffic light state-transition diagram',
            'I can draw a login system state-transition diagram',
            'I can draw a vending machine state-transition diagram',
            'I can convert a state-transition diagram to pseudocode',
            'I use CASE OF State in pseudocode for transitions',
            'I use WHILE loop to keep the system running',
            'I know a state can have multiple outgoing transitions',
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all ${checked.has(i) ? 'bg-green-50 border-2 border-green-300 text-green-800' : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-gray-300'}`}
            >
              <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${checked.has(i) ? 'bg-green-400 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {checked.has(i) ? '✓' : i + 1}
              </span>
              {item}
            </button>
          ))}
        </div>
        {checked.size === 14 && (
          <div className="mt-4 p-4 bg-green-100 rounded-xl text-center text-green-800 font-bold">
            🎉 Day 21 Complete! You've mastered State-Transition Diagrams!
          </div>
        )}
      </div>
    </div>
  );
}
