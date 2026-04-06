import { useState } from 'react';

const questions = [
  { q: "What shape is used for INPUT and OUTPUT in a flowchart?", options: ["Rectangle", "Diamond", "Parallelogram", "Rounded rectangle"], answer: 2, explanation: "Parallelogram is used for BOTH input and output. Rectangle is for processing steps only." },
  { q: "What does a filled circle (●) on a structure chart arrow mean?", options: ["A flag/boolean parameter", "A data parameter carrying a value", "The module returns nothing", "A local variable"], answer: 1, explanation: "Filled circle = DATA parameter (carries an actual value like a number or string). Empty circle = FLAG parameter (boolean only)." },
  { q: "In a WHILE loop flowchart, where does the diamond go?", options: ["After the process box", "Before the process box", "At the end", "At the start only"], answer: 1, explanation: "WHILE loop: condition (diamond) FIRST, then process box. REPEAT loop: process box FIRST, then condition." },
  { q: "What does an arrow pointing UP with a filled circle mean in a structure chart?", options: ["Data passed to the module", "Data returned from the module", "A flag passed to the module", "Nothing"], answer: 1, explanation: "Arrow UP = returned FROM module. Arrow DOWN = passed TO module. Filled = data value." },
  { q: "Which shape is used for START and STOP in a flowchart?", options: ["Rectangle", "Diamond", "Parallelogram", "Rounded rectangle (terminal)"], answer: 3, explanation: "START and STOP use rounded rectangles (terminals). Regular rectangles are for processing steps." },
  { q: "What does a structure chart show that a flowchart does NOT?", options: ["Loops and conditions", "Parameters passed between modules", "Input and output steps", "Variable assignments"], answer: 1, explanation: "Structure charts show the MODULAR DESIGN with parameters. Flowcharts show the detailed ALGORITHM LOGIC." },
  { q: "How many exits should a diamond have in a Cambridge A Level flowchart?", options: ["1", "2", "3", "As many as needed"], answer: 1, explanation: "Always exactly 2 exits from a diamond — YES and NO (or TRUE and FALSE). Label both exits." },
  { q: "What does an empty circle (○) on a structure chart arrow represent?", options: ["A data value like a number", "A flag or boolean signal", "An array parameter", "A constant"], answer: 1, explanation: "Empty circle = FLAG/SIGNAL parameter (boolean TRUE/FALSE). Filled circle = actual data value." },
  { q: "In a REPEAT...UNTIL flowchart, where does the diamond go?", options: ["Before the process box", "After the process box", "At the start", "Anywhere"], answer: 1, explanation: "REPEAT...UNTIL: process box FIRST (runs at least once), THEN diamond. The NO exit loops back up." },
  { q: "Which is correct for showing a CALL to a procedure in a flowchart?", options: ["Diamond", "Parallelogram", "Rectangle", "Rounded rectangle"], answer: 2, explanation: "A CALL to a procedure is a processing step, so it goes in a rectangle. Some exams use a predefined process symbol (rectangle with double vertical lines) but a regular rectangle is always acceptable." },
  { q: "What is the main purpose of a structure chart?", options: ["To show the detailed algorithm logic", "To show how a program is broken into modules", "To replace pseudocode", "To show variable data types"], answer: 1, explanation: "Structure charts show the MODULAR DESIGN — which modules exist and what data passes between them. They're used for high-level program design." },
  { q: "An arrow points DOWN with an empty circle. What does this mean?", options: ["Data returned from module", "Data passed to module", "Flag passed to module", "Flag returned from module"], answer: 2, explanation: "DOWN = passing TO module. UP = returning FROM module. Empty circle = flag/boolean. So: flag being passed into the module." },
];

export default function D18Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].answer === a).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🧠 Quiz — Structure Charts & Flowcharts</h2>
      <p className="text-gray-600">12 questions covering Day 18 content.</p>

      <div className="space-y-5">
        {questions.map((q, i) => (
          <div key={i} className={`bg-white border rounded-xl p-5 shadow-sm ${submitted ? (answers[i] === q.answer ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-200'}`}>
            <p className="font-semibold text-gray-800 mb-3">{i + 1}. {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => !submitted && setAnswers(prev => ({ ...prev, [i]: j }))}
                  className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                    submitted
                      ? j === q.answer ? 'bg-green-100 border-green-400 text-green-800 font-semibold'
                        : answers[i] === j ? 'bg-red-100 border-red-400 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-500'
                      : answers[i] === j ? 'bg-indigo-100 border-indigo-400 text-indigo-800' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >{opt}</button>
              ))}
            </div>
            {submitted && (
              <div className="mt-3 p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">
                <strong>Explanation:</strong> {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length} className="btn-primary disabled:opacity-50 w-full justify-center py-3">
          Submit ({Object.keys(answers).length}/{questions.length} answered)
        </button>
      ) : (
        <div className={`p-6 rounded-xl text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <p className="text-4xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-lg font-semibold">{score >= 10 ? '🎉 Excellent! You know your structure charts and flowcharts!' : score >= 7 ? '👍 Good — review the ones you missed' : '📚 Review Day 18 sections and try again'}</p>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-4 btn-secondary text-sm">Try Again</button>
        </div>
      )}
    </div>
  );
}
