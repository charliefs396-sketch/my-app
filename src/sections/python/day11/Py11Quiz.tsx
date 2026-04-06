import { useState } from 'react';

export default function Py11Quiz() {
  const questions = [
    { q: 'What mode opens a file and DELETES existing content?', options: ['"r"', '"a"', '"w"', '"d"'], answer: 2, explanation: '"w" (write) mode creates the file fresh, deleting all existing content.' },
    { q: 'What does .strip() do when reading file lines?', options: ['Splits the line', 'Removes newline and spaces', 'Converts to uppercase', 'Deletes the line'], answer: 1, explanation: '.strip() removes leading/trailing whitespace including the \\n at the end of each line.' },
    { q: 'Which mode adds data to the END of a file?', options: ['"w"', '"r"', '"e"', '"a"'], answer: 3, explanation: '"a" (append) mode adds to the end without deleting existing content.' },
    { q: 'What does f.readlines() return?', options: ['A single string', 'A list of lines', 'A number', 'Nothing'], answer: 1, explanation: 'f.readlines() returns a list where each element is one line from the file.' },
    { q: 'How do you split "Ali,85" into ["Ali", "85"]?', options: ['.split(" ")', '.strip()', '.split(",")', '.split()'], answer: 2, explanation: '.split(",") splits the string at every comma, returning a list of parts.' },
    { q: 'What is the advantage of using "with open()" ?', options: ['It is faster', 'Auto-closes file even on error', 'It creates backups', 'Nothing special'], answer: 1, explanation: 'with open() automatically closes the file when the block ends, even if an error occurs.' },
    { q: 'All data read from a file is of what type?', options: ['INTEGER', 'FLOAT', 'STRING', 'BOOLEAN'], answer: 2, explanation: 'All file data is read as strings. You must use int() or float() to convert numbers.' },
    { q: 'To delete a record from a file, what is the correct approach?', options: ['Use del command', 'Read all, filter out target, write back', 'Open in "d" mode', 'Use file.delete()'], answer: 1, explanation: 'You cannot delete directly. Read all lines, skip the target, write remaining lines back.' },
    { q: 'What does "Ali,85\\n".split(",") produce?', options: ['["Ali", "85"]', '["Ali", "85\\n"]', '["Ali,85"]', 'Error'], answer: 1, explanation: 'split(",") gives ["Ali", "85\\n"] — the \\n is still there! That\'s why you need .strip() BEFORE .split().' },
    { q: 'Which is correct to write a line to a file?', options: ['f.write("Ali,85")', 'f.write("Ali,85\\n")', 'f.print("Ali,85")', 'write(f, "Ali,85")'], answer: 1, explanation: 'Always add \\n at the end so each record is on its own line.' },
    { q: 'What happens if you open a non-existent file in "r" mode?', options: ['Creates empty file', 'Returns None', 'Raises FileNotFoundError', 'Returns empty string'], answer: 2, explanation: 'Reading a file that doesn\'t exist raises FileNotFoundError. Use try/except to handle it.' },
    { q: 'What does f.writelines(kept) do?', options: ['Writes one line', 'Writes a list of lines', 'Reads lines', 'Deletes lines'], answer: 1, explanation: 'f.writelines() takes a list and writes each element. The \\n must already be in each element.' },
  ];

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(selected).filter(([i, v]) => questions[parseInt(i)].answer === v).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">🧠 Day 11 Quiz — File Handling</h2>
      {!submitted ? (
        <>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-gray-900 mb-3">{i + 1}. {q.q}</p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, j) => (
                    <button key={j} onClick={() => setSelected(prev => ({ ...prev, [i]: j }))}
                      className={`p-3 rounded-lg text-sm font-medium border-2 text-left transition-all ${selected[i] === j ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-gray-200 hover:border-gray-300'}`}>
                      {String.fromCharCode(65 + j)}. {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setSubmitted(true)} disabled={Object.keys(selected).length < questions.length}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-lg disabled:opacity-50">
            Submit Quiz
          </button>
        </>
      ) : (
        <div className="space-y-4">
          <div className={`p-6 rounded-xl text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-amber-50 border-2 border-amber-300' : 'bg-red-50 border-2 border-red-300'}`}>
            <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
            <p className="text-xl font-bold">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good job!' : '📚 Keep practising!'}</p>
          </div>
          {questions.map((q, i) => (
            <div key={i} className={`bg-white rounded-xl border-2 p-4 ${selected[i] === q.answer ? 'border-green-300' : 'border-red-300'}`}>
              <p className="font-bold text-gray-900 mb-1">{i + 1}. {q.q}</p>
              <p className="text-sm text-green-700 font-semibold">✅ Answer: {q.options[q.answer]}</p>
              {selected[i] !== q.answer && <p className="text-sm text-red-600">❌ You chose: {q.options[selected[i]]}</p>}
              <p className="text-sm text-gray-600 mt-1 italic">{q.explanation}</p>
            </div>
          ))}
          <button onClick={() => { setSelected({}); setSubmitted(false); }} className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
