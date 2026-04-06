import CodeBlock from '../../components/CodeBlock';

export default function D21StatesTransitions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">⭕ States &amp; Transitions</h1>
      <p className="text-gray-500 mb-8">The 4 core components of every state-transition diagram</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The 4 Components</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-50">
                <th className="text-left p-3 font-bold text-indigo-800 rounded-tl-lg">Component</th>
                <th className="text-left p-3 font-bold text-indigo-800">Symbol</th>
                <th className="text-left p-3 font-bold text-indigo-800">What it means</th>
                <th className="text-left p-3 font-bold text-indigo-800 rounded-tr-lg">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                { comp: 'State', symbol: 'Circle ⭕', meaning: 'A condition the system can be in', ex: 'Locked, Unlocked, Blocked' },
                { comp: 'Transition', symbol: 'Arrow →', meaning: 'A change from one state to another', ex: 'Locked → Attempt1' },
                { comp: 'Event', symbol: 'Label on arrow', meaning: 'What CAUSES the transition', ex: 'wrong password entered' },
                { comp: 'Action', symbol: 'Label on arrow (after /)', meaning: 'What HAPPENS during transition', ex: '/ increment counter' },
                { comp: 'Initial State', symbol: 'Filled circle ●→', meaning: 'Where the system starts', ex: '● → Locked' },
                { comp: 'Final State', symbol: 'Double circle ◎', meaning: 'Where the system ends (if any)', ex: 'Unlocked ◎' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-semibold text-gray-900">{row.comp}</td>
                  <td className="p-3 font-mono text-purple-700">{row.symbol}</td>
                  <td className="p-3 text-gray-700">{row.meaning}</td>
                  <td className="p-3 text-gray-600 italic">{row.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔐 Login System Example</h2>
        <p className="text-gray-600 mb-4">The classic exam example — a login system with 3 attempts:</p>
        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm mb-4 overflow-x-auto">
          <div className="text-green-400 mb-2">// States: Locked, Attempt1, Attempt2, Unlocked, Blocked</div>
          <div className="text-slate-300 mb-4">
            <div className="mb-2">         <span className="text-yellow-400">[START]</span></div>
            <div className="mb-2">            <span className="text-cyan-400">↓</span></div>
            <div className="mb-2">        <span className="text-white">( Locked )</span></div>
            <div className="mb-2">         <span className="text-cyan-400">↙</span>  <span className="text-cyan-400">↘</span></div>
            <div className="mb-1"><span className="text-pink-400">wrong pwd</span>      <span className="text-green-400">correct pwd</span></div>
            <div className="mb-2">     <span className="text-cyan-400">↙</span>              <span className="text-cyan-400">↘</span></div>
            <div className="mb-2">  <span className="text-white">( Attempt1 )</span>    <span className="text-white">(( Unlocked ))</span></div>
            <div className="mb-1">   <span className="text-pink-400">wrong pwd</span> <span className="text-cyan-400">↓</span>  <span className="text-green-400">correct pwd</span> <span className="text-cyan-400">↑</span></div>
            <div className="mb-2">  <span className="text-white">( Attempt2 )</span></div>
            <div className="mb-1">   <span className="text-pink-400">wrong pwd</span> <span className="text-cyan-400">↓</span>  <span className="text-green-400">correct pwd</span> <span className="text-cyan-400">↑</span></div>
            <div className="mb-2">  <span className="text-white">( Blocked )</span></div>
          </div>
          <div className="text-green-400">// Transitions:</div>
          <div className="text-slate-300">// Locked --[wrong password]--&gt; Attempt1</div>
          <div className="text-slate-300">// Attempt1 --[wrong password]--&gt; Attempt2</div>
          <div className="text-slate-300">// Attempt2 --[wrong password]--&gt; Blocked</div>
          <div className="text-slate-300">// Any state --[correct password]--&gt; Unlocked</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-bold text-green-800 mb-2">✅ Rules for Drawing</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Every state is a circle with its name inside</li>
              <li>• Every transition is a labelled arrow</li>
              <li>• Show the starting state with an arrow from a filled dot</li>
              <li>• Label every arrow with the event</li>
              <li>• Double circle = final/accepting state</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-bold text-red-800 mb-2">❌ Common Mistakes</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Forgetting to label arrows</li>
              <li>• Missing the initial state indicator</li>
              <li>• Confusing events with actions</li>
              <li>• Having transitions with no labels</li>
              <li>• Forgetting "correct password" transitions from ALL attempt states</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💻 Converting to Pseudocode</h2>
        <p className="text-gray-600 mb-4">A state-transition diagram translates naturally to pseudocode using CASE:</p>
        <CodeBlock language="pseudocode" code={`DECLARE State : STRING
DECLARE Password : STRING
DECLARE Attempts : INTEGER

State ← "Locked"
Attempts ← 0

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
      OUTPUT "Account blocked"
ENDIF`} />
      </div>
    </div>
  );
}
