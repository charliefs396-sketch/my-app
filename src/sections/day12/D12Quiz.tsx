import { useState } from 'react';

const questions = [
  { q: "Which file mode completely overwrites an existing file?", options: ["FOR READ", "FOR APPEND", "FOR WRITE", "FOR UPDATE"], answer: 2, explanation: "FOR WRITE creates a brand new empty file, deleting all existing content. Use FOR APPEND to keep existing data." },
  { q: "What does EOF stand for?", options: ["End Of Format", "End Of File", "End Of Function", "Error On File"], answer: 1, explanation: "EOF = End Of File. EOF('filename') returns TRUE when there are no more lines to read." },
  { q: "What is the correct order for file operations?", options: ["WRITEFILE → OPENFILE → CLOSEFILE", "OPENFILE → WRITEFILE → CLOSEFILE", "CLOSEFILE → OPENFILE → WRITEFILE", "OPENFILE → CLOSEFILE → WRITEFILE"], answer: 1, explanation: "Always: OPENFILE first, then READFILE/WRITEFILE as many times as needed, then CLOSEFILE last." },
  { q: "Which mode should you use to add a new record without losing existing data?", options: ["FOR WRITE", "FOR READ", "FOR APPEND", "FOR ADD"], answer: 2, explanation: "FOR APPEND adds data to the END of the existing file. FOR WRITE would delete everything first." },
  { q: "What is the standard pattern for reading all lines in a file?", options: ["FOR i ← 1 TO 10", "REPEAT...UNTIL EOF", "WHILE NOT EOF...ENDWHILE", "IF NOT EOF THEN"], answer: 2, explanation: "WHILE NOT EOF('filename') is the standard pattern — it keeps reading until there are no more lines." },
  { q: "When writing an INTEGER field to a file, what must you do?", options: ["Write it directly", "Use INT_TO_STR()", "Use NUM_TO_STR()", "Use STR()"], answer: 2, explanation: "WRITEFILE requires a STRING. Use NUM_TO_STR() to convert INTEGER or REAL values before writing." },
  { q: "Which command reads one line from an open file?", options: ["GETFILE", "READFILE 'file.txt', Variable", "INPUT 'file.txt'", "LOADFILE"], answer: 1, explanation: "READFILE 'filename', Variable reads the next line from the file into Variable." },
  { q: "What happens if you forget CLOSEFILE?", options: ["Nothing — it closes automatically", "Data may not be saved to disk", "The program crashes immediately", "The file is deleted"], answer: 1, explanation: "Forgetting CLOSEFILE means data may not be flushed to disk properly. Always CLOSEFILE when done." },
];

export default function D12Quiz() {
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const score = selected.filter((s, i) => s === questions[i].answer).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — File Handling</h1>
      <p className="text-gray-500 mb-6">{questions.length} questions — test your understanding!</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`card border-2 ${submitted ? (selected[i] === q.answer ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-100'}`}>
            <p className="font-bold text-gray-800 mb-3">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => { if (!submitted) { const n = [...selected]; n[i] = j; setSelected(n); } }}
                  className={`text-left px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    submitted
                      ? j === q.answer ? 'bg-green-100 border-green-400 text-green-800'
                        : selected[i] === j ? 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-white border-gray-200 text-gray-500'
                      : selected[i] === j ? 'bg-indigo-100 border-indigo-400 text-indigo-800'
                      : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  {String.fromCharCode(65 + j)}. {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600"><span className="font-bold text-indigo-600">Explanation:</span> {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={selected.includes(null)} className="mt-8 w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg hover:opacity-90 disabled:opacity-50 transition-all">
          Submit Quiz
        </button>
      ) : (
        <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl text-center">
          <p className="text-4xl font-black text-orange-600">{score}/{questions.length}</p>
          <p className="text-gray-600 mt-2">{score === questions.length ? '🏆 Perfect! File handling mastered!' : score >= 6 ? '👍 Great! Review the ones you missed.' : '📖 Re-read the sections and try again!'}</p>
          <button onClick={() => { setSelected(Array(questions.length).fill(null)); setSubmitted(false); }} className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">Try Again</button>
        </div>
      )}
    </div>
  );
}
