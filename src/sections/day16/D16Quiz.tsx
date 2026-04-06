import { useState } from 'react';

export default function D16Quiz() {
  const questions = [
    { q: "How many columns does a trace table need?", options: ["One per loop only", "One per variable + one for OUTPUT", "One per line of code", "Just INPUT and OUTPUT"], correct: 1, explanation: "One column per variable declared, plus a separate OUTPUT column." },
    { q: "When should you leave a trace table cell blank?", options: ["When you don't know the value", "When the variable is 0", "When the variable hasn't changed", "Never — always write something"], correct: 2, explanation: "Blank means the variable was not changed on that step. Only write when the value changes." },
    { q: "For the code: X←5, Y←3, FOR Z←1 TO 4... what is the OUTPUT?", options: ["5 then 3", "7 then 5", "6 then 4", "4 then 4"], correct: 1, explanation: "After tracing all 4 iterations: Z=1(TRUE→X=4,Y=4), Z=2(FALSE→X=6), Z=3(TRUE→X=5,Y=5), Z=4(FALSE→X=7). Output: 7 then 5." },
    { q: "A WHILE loop condition is checked...", options: ["Only once at the start", "After every 2 iterations", "Before each iteration", "After the loop body"], correct: 2, explanation: "WHILE checks condition BEFORE each iteration. If FALSE at start, the loop body never executes." },
    { q: "A REPEAT loop condition is checked...", options: ["Before the first iteration", "After each iteration", "Only at the end", "Never — it always runs"], correct: 1, explanation: "REPEAT...UNTIL checks the condition AFTER each iteration. So it always runs at least once." },
    { q: "What does it mean if a FOR loop counter appears in the OUTPUT column?", options: ["That's wrong — use a separate column", "It means the loop outputs the counter", "The loop and output use the same column", "The counter is an OUTPUT variable"], correct: 1, explanation: "If the code says OUTPUT i (the loop counter), then write that value in the OUTPUT column for that step." },
    { q: "How do you handle a mistake in a trace table during an exam?", options: ["Start the whole table again", "Use correction fluid", "Cross out with one line and write correct value", "Leave it and write a note"], correct: 2, explanation: "Cross out neatly with one line and write the correct value. The examiner needs to see your working clearly." },
    { q: "Trace: N←1, Total←0, WHILE N<=3: Total←Total+N*N, N←N+1. What is Total?", options: ["6", "9", "14", "12"], correct: 2, explanation: "N=1: Total=1. N=2: Total=5. N=3: Total=14. (1+4+9=14). N becomes 4, condition FALSE, loop ends." },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => answers[i] === q.correct).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Trace Tables</h1>
      <p className="text-gray-500 mb-6">{questions.length} questions • Critical Paper 2 skill</p>
      {submitted && (
        <div className={`p-4 rounded-xl mb-6 ${score >= 6 ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <p className="text-2xl font-black">{score}/{questions.length} {score >= 6 ? '🎉 Excellent!' : '📚 Keep Practising!'}</p>
        </div>
      )}
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="card">
            <p className="font-bold text-gray-900 mb-3">Q{i + 1}: {q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <button key={j} onClick={() => !submitted && setAnswers(p => ({ ...p, [i]: j }))}
                  className={`w-full text-left p-3 rounded-lg border-2 text-sm transition-all ${submitted ? j === q.correct ? 'border-green-500 bg-green-50 text-green-800 font-bold' : answers[i] === j ? 'border-red-400 bg-red-50 text-red-700' : 'border-gray-200 text-gray-500' : answers[i] === j ? 'border-indigo-500 bg-indigo-50 text-indigo-800 font-semibold' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'}`}>{opt}</button>
              ))}
            </div>
            {submitted && <div className="mt-3 bg-blue-50 rounded-lg p-3 text-sm text-blue-800"><strong>Explanation:</strong> {q.explanation}</div>}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="btn-primary mt-6">Submit Quiz</button>
      ) : (
        <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-secondary mt-6">Retake Quiz</button>
      )}
    </div>
  );
}
