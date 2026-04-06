import { useState } from 'react';

const questions = [
  { q: 'What are the three columns in an identifier table?', options: ['Name, Value, Purpose', 'Identifier, Data Type, Description', 'Variable, Type, Comment', 'Name, Type, Value'], answer: 1, explanation: 'Cambridge 9618 expects: Identifier | Data Type | Description' },
  { q: 'A variable stores the average of 30 marks. What data type should it be?', options: ['INTEGER', 'CHAR', 'REAL', 'BOOLEAN'], answer: 2, explanation: 'Average can have decimal places so it must be REAL, not INTEGER.' },
  { q: 'Which numbering is correct for Level 2 stepwise refinement?', options: ['a, b, c', '1.1, 1.2, 1.1.1', 'i, ii, iii', '1a, 1b, 2a'], answer: 1, explanation: 'Cambridge uses decimal numbering: 1.1, 1.2, 1.1.1, 1.1.2 etc.' },
  { q: 'Which statement about Level 2 refinement is correct?', options: ['It should be written in pseudocode', 'It should be plain English descriptions', 'It should contain actual code', 'It replaces the identifier table'], answer: 1, explanation: 'Level 2 should be plain English. Only Level 3 is pseudocode.' },
  { q: 'What must you include in the identifier table for an array?', options: ['Just the name', 'Name and type only', 'Name, full type with bounds, and description', 'Name and description only'], answer: 2, explanation: 'Arrays need the full declaration: ARRAY[1:10] OF INTEGER — bounds and element type are both required.' },
  { q: 'Should loop counters like i and j be in the identifier table?', options: ['No — they are too simple', 'Only if used more than once', 'Yes — every identifier must be included', 'Only in functions'], answer: 2, explanation: 'YES! Every single identifier must be in the table including i, j, Count, Temp.' },
  { q: 'When should you use FUNCTION vs PROCEDURE in algorithm design?', options: ['FUNCTION for everything', 'PROCEDURE when returning a value, FUNCTION for actions', 'FUNCTION when returning a value, PROCEDURE for actions', 'They are the same thing'], answer: 2, explanation: 'FUNCTION returns a value. PROCEDURE performs an action without returning a value.' },
  { q: 'How should you describe a BOOLEAN identifier?', options: ['"A boolean value"', '"TRUE or FALSE"', '"TRUE if item found, FALSE if not found"', '"Stores a logical value"'], answer: 2, explanation: 'Always say what TRUE means AND what FALSE means for a BOOLEAN identifier.' },
  { q: 'What is the purpose of Level 1 stepwise refinement?', options: ['To write the final pseudocode', 'To give a high-level 3-5 step overview', 'To list all identifiers', 'To draw a structure chart'], answer: 1, explanation: 'Level 1 gives a very broad overview — just 3-5 high-level steps like Input, Process, Output.' },
  { q: 'A CONSTANT should appear in the identifier table?', options: ['No — constants are not identifiers', 'Yes — with INTEGER (CONSTANT) as the data type', 'Only if its value is over 100', 'Only for numeric constants'], answer: 1, explanation: 'YES! Constants are identifiers too. Write INTEGER (CONSTANT) or similar as the type.' },
  { q: 'What is stepwise refinement also called?', options: ['Bottom-up design', 'Top-down design', 'Object-oriented design', 'Modular programming'], answer: 1, explanation: 'Stepwise refinement is also called top-down design — you start from the top (high level) and work down.' },
  { q: 'Input validation should be included in your pseudocode?', options: ['No — it wastes time', 'Only for strings', 'Yes — marks are specifically awarded for validation', 'Only if the question asks for it'], answer: 2, explanation: 'YES! Always include validation. Marks are specifically awarded for checking input ranges and re-prompting.' },
];

export default function D17Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => questions[+i].answer === a).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">🧠 Quiz — Identifier Tables & Algorithm Design</h2>
      <p className="text-gray-500 mb-6">12 questions · Test your understanding</p>
      {submitted && (
        <div className={`rounded-xl p-4 mb-6 text-center font-bold text-lg ${score >= 10 ? 'bg-green-100 text-green-800' : score >= 7 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
          {score >= 10 ? '🏆 Excellent!' : score >= 7 ? '👍 Good!' : '📚 Keep Revising!'} {score}/{questions.length}
        </div>
      )}
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="card">
            <p className="font-semibold text-gray-800 mb-3">{i + 1}. {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => {
                let cls = 'p-3 rounded-lg border text-sm cursor-pointer transition-all ';
                if (!submitted) cls += answers[i] === j ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                else if (j === q.answer) cls += 'border-green-500 bg-green-50 text-green-800 font-semibold';
                else if (answers[i] === j) cls += 'border-red-400 bg-red-50 text-red-700';
                else cls += 'border-gray-200 text-gray-400';
                return <div key={j} className={cls} onClick={() => !submitted && setAnswers(p => ({ ...p, [i]: j }))}>{opt}</div>;
              })}
            </div>
            {submitted && <div className="mt-3 p-3 bg-blue-50 rounded-lg text-blue-800 text-sm"><strong>💡 </strong>{q.explanation}</div>}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length} className="mt-6 btn-primary disabled:opacity-50 w-full justify-center">
          Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
        </button>
      ) : (
        <button onClick={() => { setSubmitted(false); setAnswers({}); }} className="mt-6 btn-secondary w-full justify-center">Try Again</button>
      )}
    </div>
  );
}
