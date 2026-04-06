import CodeBlock from '../../components/CodeBlock';

export default function D21TrafficLight() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🚦 Traffic Light System</h1>
      <p className="text-gray-500 mb-8">A classic state-transition diagram example</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The 4 States</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { state: 'Red', color: 'bg-red-100 border-red-300 text-red-800', desc: 'Stop — vehicles must stop', next: 'RedAmber' },
            { state: 'RedAmber', color: 'bg-orange-100 border-orange-300 text-orange-800', desc: 'Get ready to go', next: 'Green' },
            { state: 'Green', color: 'bg-green-100 border-green-300 text-green-800', desc: 'Go — vehicles can proceed', next: 'Amber' },
            { state: 'Amber', color: 'bg-amber-100 border-amber-300 text-amber-800', desc: 'Prepare to stop', next: 'Red' },
          ].map(s => (
            <div key={s.state} className={`border-2 rounded-xl p-4 ${s.color}`}>
              <div className="font-bold text-lg mb-1">{s.state}</div>
              <div className="text-xs mb-2">{s.desc}</div>
              <div className="text-xs font-semibold">→ {s.next}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm mb-4 overflow-x-auto">
          <div className="text-green-400 mb-3">// Traffic Light State-Transition Diagram</div>
          <div className="text-slate-300">
            <div className="mb-1"><span className="text-yellow-400">● (Start)</span></div>
            <div className="mb-1">    <span className="text-cyan-400">↓</span></div>
            <div className="mb-1">  <span className="text-red-400">( Red )</span></div>
            <div className="mb-1">    <span className="text-cyan-400">↓</span> <span className="text-slate-500">[timer expires]</span></div>
            <div className="mb-1">  <span className="text-orange-400">( RedAmber )</span></div>
            <div className="mb-1">    <span className="text-cyan-400">↓</span> <span className="text-slate-500">[timer expires]</span></div>
            <div className="mb-1">  <span className="text-green-400">( Green )</span></div>
            <div className="mb-1">    <span className="text-cyan-400">↓</span> <span className="text-slate-500">[timer expires]</span></div>
            <div className="mb-1">  <span className="text-amber-400">( Amber )</span></div>
            <div className="mb-1">    <span className="text-cyan-400">↓</span> <span className="text-slate-500">[timer expires]</span></div>
            <div className="mb-1">  <span className="text-red-400">( Red )</span> <span className="text-slate-500">← loops back</span></div>
          </div>
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-bold text-gray-700">Current State</th>
                <th className="text-left p-3 font-bold text-gray-700">Event</th>
                <th className="text-left p-3 font-bold text-gray-700">Next State</th>
                <th className="text-left p-3 font-bold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { from: 'Red', event: 'Timer expires', to: 'RedAmber', action: 'Show Red + Amber lights' },
                { from: 'RedAmber', event: 'Timer expires', to: 'Green', action: 'Show Green light only' },
                { from: 'Green', event: 'Timer expires', to: 'Amber', action: 'Show Amber light only' },
                { from: 'Amber', event: 'Timer expires', to: 'Red', action: 'Show Red light only' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-semibold text-red-700">{row.from}</td>
                  <td className="p-3 text-gray-600 italic">{row.event}</td>
                  <td className="p-3 font-semibold text-green-700">{row.to}</td>
                  <td className="p-3 text-gray-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💻 Pseudocode for Traffic Light</h2>
        <CodeBlock language="pseudocode" code={`DECLARE State : STRING
DECLARE TimerExpired : BOOLEAN

State ← "Red"

REPEAT
   // Display current state
   CASE OF State
      "Red"      : OUTPUT "RED - Stop"
      "RedAmber" : OUTPUT "RED+AMBER - Get ready"
      "Green"    : OUTPUT "GREEN - Go"
      "Amber"    : OUTPUT "AMBER - Prepare to stop"
   ENDCASE
   
   // Wait for timer
   INPUT TimerExpired
   
   // Transition to next state
   IF TimerExpired
      THEN
         CASE OF State
            "Red"      : State ← "RedAmber"
            "RedAmber" : State ← "Green"
            "Green"    : State ← "Amber"
            "Amber"    : State ← "Red"
         ENDCASE
   ENDIF
UNTIL FALSE  // Runs forever`} />
      </div>
    </div>
  );
}
