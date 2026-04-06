import { useState } from 'react';

export default function D20Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice — Day 20
      </h1>
      <p className="text-gray-500 text-lg mb-8">3 practice tasks matching your exact Cambridge 9618 syllabus</p>

      {/* Exercise 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 font-black text-lg w-10 h-10 rounded-xl flex items-center justify-center">1</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Describe When to Use Each Model</h2>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Medium — 6 marks</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          For each scenario below, state which life cycle model (Waterfall, Iterative, or RAD) is most appropriate and give TWO reasons why.
        </p>
        <div className="space-y-3 mb-4">
          {[
            { letter: 'a', scenario: 'A hospital needs a new patient records system. The requirements are fully documented and approved by management. The system must be delivered within a fixed budget.', model: 'Waterfall', reasons: ['Requirements are fixed and well-defined upfront', 'Fixed budget means cost must be predictable', 'Waterfall\'s thorough documentation suits critical medical systems'] },
            { letter: 'b', scenario: 'A startup wants to build a social media app. They have a rough idea but expect features to evolve based on user feedback. Speed to market is important.', model: 'RAD', reasons: ['Tight deadline — need to get to market quickly', 'Requirements are unclear and expected to change', 'User feedback is essential — RAD involves users constantly'] },
            { letter: 'c', scenario: 'A bank needs a new fraud detection system. It\'s a complex project that will take 3 years. Requirements may change as threats evolve.', model: 'Iterative', reasons: ['Complex project benefits from iterative refinement', 'Requirements will change over 3 years — can\'t fix them upfront', 'Errors found early in each iteration rather than at the end'] },
          ].map((item) => (
            <div key={item.letter} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2"><strong>Scenario {item.letter.toUpperCase()}:</strong> {item.scenario}</p>
              <button onClick={() => toggle(`e1-${item.letter}`)} className="text-sm text-indigo-600 font-semibold hover:underline">
                {revealed[`e1-${item.letter}`] ? '▼ Hide Answer' : '▶ Show Answer'}
              </button>
              {revealed[`e1-${item.letter}`] && (
                <div className="mt-3 bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg p-4">
                  <p className="font-bold text-indigo-800 mb-2">Model: {item.model}</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Reasons:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {item.reasons.map((r, i) => <li key={i}>• {r}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-purple-100 text-purple-700 font-black text-lg w-10 h-10 rounded-xl flex items-center justify-center">2</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Waterfall Model Stages</h2>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Easy — 5 marks</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          List the 5 stages of the Waterfall model in the correct order and give a description of what happens at each stage.
        </p>
        <button onClick={() => toggle('e2')} className="text-sm text-indigo-600 font-semibold hover:underline mb-3 block">
          {revealed['e2'] ? '▼ Hide Answer' : '▶ Show Full Answer'}
        </button>
        {revealed['e2'] && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <div className="space-y-3">
              {[
                { stage: '1. Analysis', desc: 'Gather and document requirements from the client. Carry out a feasibility study to check if the project is possible and worthwhile. Produce a requirements specification.' },
                { stage: '2. Design', desc: 'Design the solution before writing any code. Create data structures, algorithms, identifier tables, structure charts, flowcharts, and user interface designs.' },
                { stage: '3. Coding', desc: 'Write the actual program code following the design documents. Choose appropriate programming language and implement all features from the design.' },
                { stage: '4. Testing', desc: 'Test the system against the original requirements. Use normal, abnormal and boundary test data. Fix bugs found during testing.' },
                { stage: '5. Maintenance', desc: 'After delivery, maintain the system. This includes corrective (fix bugs), adaptive (update for new environment), and perfective (improve performance) maintenance.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="bg-indigo-200 text-indigo-800 font-bold px-3 py-1 rounded-lg text-sm whitespace-nowrap h-fit">{item.stage}</span>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Exercise 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-100 text-green-700 font-black text-lg w-10 h-10 rounded-xl flex items-center justify-center">3</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Classify the Maintenance Type</h2>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Past paper style — 6 marks</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          For each situation, state the type of maintenance (Corrective, Adaptive, or Perfective) and explain why.
        </p>
        <div className="space-y-3">
          {[
            { situation: 'The school management system crashes whenever a student\'s name contains an apostrophe (e.g., O\'Brien).', type: 'Corrective', why: 'The system is BROKEN — it crashes due to a bug with apostrophes. Fixing bugs = Corrective maintenance.' },
            { situation: 'The government has changed the income tax rates and the payroll system needs updating.', type: 'Adaptive', why: 'External change (new tax law) requires the system to be updated. The system works fine — the ENVIRONMENT changed.' },
            { situation: 'Users have complained the search results take 8 seconds. The developer rewrites the search algorithm to take 0.3 seconds.', type: 'Perfective', why: 'The search WAS working — it just wasn\'t fast enough. Improving performance = Perfective maintenance.' },
            { situation: 'The system was built for 32-bit Windows and needs to be updated to run on 64-bit systems.', type: 'Adaptive', why: 'The hardware/OS environment has changed. The system was fine before — needs updating for new environment.' },
            { situation: 'A new "dark mode" feature is added to the application because users requested it.', type: 'Perfective', why: 'Adding new features to improve the system = Perfective. The system was already working correctly.' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2"><strong>Situation {i + 1}:</strong> {item.situation}</p>
              <button onClick={() => toggle(`e3-${i}`)} className="text-sm text-indigo-600 font-semibold hover:underline">
                {revealed[`e3-${i}`] ? '▼ Hide Answer' : '▶ Show Answer'}
              </button>
              {revealed[`e3-${i}`] && (
                <div className="mt-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg p-4">
                  <p className="font-bold text-green-800 mb-1">Type: {item.type}</p>
                  <p className="text-sm text-gray-700">{item.why}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pro tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-3">💡 Exam Pro Tips</h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li>✅ When asked to choose a model, always give 2 reasons linked to the scenario</li>
          <li>✅ For maintenance type questions, identify the KEY WORD: bug/error/crash = Corrective, law/OS/hardware change = Adaptive, improve/faster/new feature = Perfective</li>
          <li>✅ Always state the type AND explain why with reference to the scenario</li>
          <li>✅ Waterfall stage names must be in the correct order for full marks</li>
        </ul>
      </div>
    </div>
  );
}
