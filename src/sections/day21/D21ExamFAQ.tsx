export default function D21ExamFAQ() {
  const faqs = [
    {
      q: "What is the difference between a state and a transition?",
      a: "A STATE is a condition the system is currently in (shown as a circle). A TRANSITION is a change from one state to another (shown as an arrow). Think: states are WHERE you are, transitions are HOW you get there.",
      tag: "KEY CONCEPT"
    },
    {
      q: "Do I need to label every arrow?",
      a: "YES — every transition arrow MUST be labelled with the event that causes it. An unlabelled arrow will lose marks. The label describes WHAT triggers the change of state.",
      tag: "EXAM RULE"
    },
    {
      q: "What is an initial state and how do I show it?",
      a: "The initial state is where the system starts. Show it with a filled black circle (●) with an arrow pointing to the starting state. Every diagram must have exactly ONE initial state.",
      tag: "DRAWING RULE"
    },
    {
      q: "What is a final state?",
      a: "A final/accepting state is where the system can end. Show it as a double circle (◎). Not all systems have a final state — traffic lights loop forever, so they have no final state.",
      tag: "KEY CONCEPT"
    },
    {
      q: "Can a state have multiple transitions leaving it?",
      a: "YES — a state can have multiple transitions, each caused by a different event. Example: the Attempt1 state has two transitions — 'wrong password' goes to Attempt2, 'correct password' goes to Unlocked.",
      tag: "IMPORTANT"
    },
    {
      q: "Can a state transition back to itself?",
      a: "YES — this is called a self-loop. Example: if a vending machine is in 'Idle' state and receives an invalid input, it can transition back to 'Idle'. Draw this as an arrow that leaves and returns to the same state.",
      tag: "KEY CONCEPT"
    },
    {
      q: "How do I convert a state-transition diagram to pseudocode?",
      a: "Use a WHILE loop for the overall system, and a CASE statement for the current state. Each CASE handles the possible events for that state and updates the state variable accordingly.",
      tag: "EXAM SKILL"
    },
    {
      q: "What is the difference between an event and an action?",
      a: "An EVENT is what CAUSES the transition (e.g., 'timer expires'). An ACTION is what HAPPENS during the transition (e.g., '/ display green light'). On the arrow: event comes first, then / then action.",
      tag: "TERMINOLOGY"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ</h1>
      <p className="text-gray-500 mb-8">Most common exam questions about state-transition diagrams</p>

      <div className="space-y-4 mb-8">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-indigo-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">{faq.tag}</span>
              <h3 className="font-bold text-gray-900">Q{i + 1}: {faq.q}</h3>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 text-sm leading-relaxed"><span className="font-bold">Answer: </span>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="font-bold text-indigo-800 mb-3">🎯 Key Points to Remember</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'States = circles, Transitions = arrows',
            'Every arrow MUST be labelled',
            'Initial state shown with filled dot ●',
            'Final state shown as double circle ◎',
            'Use CASE statement to convert to pseudocode',
            'A state can have multiple outgoing transitions',
            'Event = what causes the change',
            'Action = what happens during the change',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-indigo-700">
              <span className="text-indigo-400 font-bold">✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
