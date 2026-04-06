import { useState } from 'react';

const questions = [
  { q: "Which maintenance type involves fixing a bug that causes the program to crash?", options: ["Adaptive", "Perfective", "Corrective", "Iterative"], correct: 2, explanation: "Corrective maintenance fixes bugs and errors in software that is already deployed." },
  { q: "A company updates their software to comply with a new data protection law. This is:", options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Waterfall maintenance"], correct: 1, explanation: "Adaptive maintenance modifies software to work in a changed environment — including legal changes." },
  { q: "Which life cycle model is BEST for a project with clear, fixed requirements?", options: ["RAD", "Iterative", "Waterfall", "Agile"], correct: 2, explanation: "Waterfall works best when requirements are well-defined and unlikely to change." },
  { q: "What is 'timeboxing' in the RAD model?", options: ["Setting a maximum file size", "Giving each phase a fixed time limit", "Testing for a fixed number of hours", "Limiting the number of users"], correct: 1, explanation: "Timeboxing means each RAD phase has a fixed time limit — the team must deliver within that time." },
  { q: "Adding a new 'export to Excel' feature to a working system is which maintenance type?", options: ["Corrective", "Adaptive", "Perfective", "Iterative"], correct: 2, explanation: "Adding new features to improve an already-working system is Perfective maintenance." },
  { q: "Which is a DISADVANTAGE of the Waterfall model?", options: ["Too much user involvement", "Cannot go back to previous stages", "Too many prototypes produced", "Requires timeboxing"], correct: 1, explanation: "Waterfall is linear — once a stage is complete, going back is difficult and expensive." },
  { q: "The Iterative model is described as 'can be never-ending' because:", options: ["It uses timeboxing that keeps resetting", "Each iteration can reveal new requirements leading to scope creep", "It requires rewriting code from scratch each time", "Testing is repeated indefinitely"], correct: 1, explanation: "Each iteration can uncover new features/requirements, causing the project to continue indefinitely — scope creep." },
  { q: "What is the correct order of Waterfall stages?", options: ["Design → Analysis → Coding → Testing → Maintenance", "Analysis → Design → Coding → Testing → Maintenance", "Coding → Design → Testing → Analysis → Maintenance", "Testing → Analysis → Design → Coding → Maintenance"], correct: 1, explanation: "Analysis → Design → Coding → Testing → Maintenance. Remember: A Dog Can Tickle Mice." },
  { q: "Updating software to run on a new operating system is:", options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Waterfall stage"], correct: 1, explanation: "Adaptive maintenance responds to changes in the operating environment — including new OS versions." },
  { q: "Which model is BEST when a tight deadline exists and users can provide constant feedback?", options: ["Waterfall", "Iterative", "RAD", "Linear"], correct: 2, explanation: "RAD (Rapid Application Development) focuses on fast delivery through rapid prototyping and constant user feedback." },
  { q: "A feasibility study is carried out during which Waterfall stage?", options: ["Design", "Testing", "Analysis", "Maintenance"], correct: 2, explanation: "The feasibility study is part of the Analysis stage — it checks if the project is possible and worthwhile." },
  { q: "Which statement about the Iterative model is CORRECT?", options: ["Requirements must be fixed before development starts", "Each iteration produces a working version of the software", "Users are only involved at the beginning and end", "It always follows a strict linear sequence"], correct: 1, explanation: "Each iteration in the Iterative model produces a working prototype that gets refined in subsequent iterations." },
];

export default function D20Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].correct === a).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Day 20
      </h1>
      <p className="text-gray-500 text-lg mb-8">12 questions on SDLC and Maintenance types</p>

      {submitted && (
        <div className={`rounded-xl p-6 mb-8 text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <div className="text-5xl font-black mb-2">{score}/12</div>
          <div className="text-lg font-bold">{score >= 10 ? '🏆 Excellent! You know SDLC!' : score >= 7 ? '👍 Good! Review the ones you missed.' : '📚 Keep revising — focus on maintenance types!'}</div>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">Try Again</button>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi} className={`bg-white border-2 rounded-xl p-6 shadow-sm ${submitted ? (answers[qi] === q.correct ? 'border-green-300' : 'border-red-300') : 'border-gray-200'}`}>
            <p className="font-bold text-gray-800 mb-4">Q{qi + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, oi) => {
                let style = 'border-gray-200 bg-gray-50 hover:border-indigo-300 cursor-pointer';
                if (submitted) {
                  if (oi === q.correct) style = 'border-green-400 bg-green-50';
                  else if (oi === answers[qi]) style = 'border-red-400 bg-red-50';
                  else style = 'border-gray-200 bg-gray-50';
                } else if (answers[qi] === oi) {
                  style = 'border-indigo-400 bg-indigo-50';
                }
                return (
                  <button key={oi} disabled={submitted}
                    onClick={() => setAnswers(prev => ({ ...prev, [qi]: oi }))}
                    className={`text-left p-3 border-2 rounded-lg transition-all text-sm ${style}`}>
                    <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>{opt}
                    {submitted && oi === q.correct && <span className="ml-2 text-green-600 font-bold">✓</span>}
                    {submitted && oi === answers[qi] && oi !== q.correct && <span className="ml-2 text-red-600 font-bold">✗</span>}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3">
                <p className="text-sm text-blue-800"><strong>Explanation:</strong> {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && Object.keys(answers).length > 0 && (
        <button onClick={() => setSubmitted(true)} className="mt-8 w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg">
          Submit Quiz ({Object.keys(answers).length}/12 answered)
        </button>
      )}
    </div>
  );
}
