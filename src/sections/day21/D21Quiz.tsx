import { useState } from 'react';

export default function D21Quiz() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { q: "What shape represents a STATE in a state-transition diagram?", options: ["Rectangle", "Diamond", "Circle", "Parallelogram"], answer: 2, explanation: "States are shown as CIRCLES (ovals). Rectangles are processes, diamonds are decisions in flowcharts." },
    { q: "What does the arrow between two states represent?", options: ["A state", "A transition", "An action", "A variable"], answer: 1, explanation: "Arrows represent TRANSITIONS — the change from one state to another." },
    { q: "How is the initial state shown in a state-transition diagram?", options: ["Double circle", "Filled circle with arrow pointing to it", "Dashed circle", "Square"], answer: 1, explanation: "The initial state is shown with a filled black circle (●) with an arrow pointing to the starting state." },
    { q: "What MUST every transition arrow be labelled with?", options: ["The destination state", "The event that causes the transition", "The action that occurs", "The current state"], answer: 1, explanation: "Every transition arrow MUST be labelled with the EVENT that causes the change of state. This is essential for full marks." },
    { q: "In a traffic light system, after Green comes:", options: ["Red", "RedAmber", "Amber", "Orange"], answer: 2, explanation: "The cycle is Red → RedAmber → Green → AMBER → Red. Amber warns drivers to prepare to stop." },
    { q: "Which pseudocode structure is best for converting a state-transition diagram?", options: ["IF...ELSE only", "FOR loop", "CASE statement inside a WHILE loop", "REPEAT...UNTIL only"], answer: 2, explanation: "CASE OF State handles each state's transitions, while the WHILE loop keeps the system running until a final state." },
    { q: "Can a state have a transition that goes back to itself?", options: ["No, that is invalid", "Yes, this is called a self-loop", "Only in traffic lights", "Only final states can do this"], answer: 1, explanation: "YES — a self-loop is a valid transition where a state transitions back to itself, usually when an invalid event occurs." },
    { q: "What is the difference between an event and an action?", options: ["They are the same thing", "Event causes the transition, action happens during it", "Action causes the transition, event happens during it", "Events are states, actions are transitions"], answer: 1, explanation: "EVENT = what CAUSES the transition (trigger). ACTION = what HAPPENS during the transition (consequence). On arrows: event / action." },
    { q: "How is a final/accepting state shown?", options: ["Filled circle", "Dashed circle", "Double circle", "Square"], answer: 2, explanation: "A final/accepting state is shown as a DOUBLE CIRCLE (◎). Not all systems have a final state." },
    { q: "In a login system with 3 attempts, how many states are there?", options: ["3", "4", "5", "6"], answer: 2, explanation: "5 states: Locked, Attempt1, Attempt2, Unlocked, Blocked. Each attempt is a separate state." },
    { q: "Which system would NOT have a final state in its diagram?", options: ["Login system (blocked state)", "Traffic light (loops forever)", "File download (complete state)", "Payment system (paid state)"], answer: 1, explanation: "A traffic light loops forever (Red→RedAmber→Green→Amber→Red→...) so it has NO final state. The others have a definite end state." },
    { q: "What keyword in pseudocode should you use to track the current state?", options: ["CONSTANT", "DECLARE State : STRING", "POINTER", "RECORD"], answer: 1, explanation: "DECLARE State : STRING allows you to store the current state as a string variable that gets updated with each transition." },
  ];

  const score = submitted ? questions.filter((q, i) => answers[i] === q.answer).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — State-Transition Diagrams</h1>
      <p className="text-gray-500 mb-8">12 questions to test your understanding</p>

      {submitted && (
        <div className={`p-6 rounded-2xl mb-8 text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <div className="text-5xl font-black mb-2">{score}/{questions.length}</div>
          <div className="text-lg font-bold">{score >= 10 ? '🌟 Excellent!' : score >= 7 ? '👍 Good effort!' : '📚 Keep revising!'}</div>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="card">
            <h3 className="font-bold text-gray-900 mb-4">Q{i + 1}: {q.q}</h3>
            <div className="space-y-2 mb-3">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => !submitted && setAnswers(prev => ({ ...prev, [i]: j }))}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                    submitted
                      ? j === q.answer ? 'border-green-400 bg-green-50 text-green-800'
                        : answers[i] === j ? 'border-red-400 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                      : answers[i] === j ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span>{opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800">
                <span className="font-bold">💡 </span>{q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && Object.keys(answers).length === questions.length && (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-8 w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Submit Answers
        </button>
      )}
    </div>
  );
}
