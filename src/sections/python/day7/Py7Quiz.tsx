import { useState } from 'react';

const questions = [
  { q: "What does marks[2][1] access?", options: ["Row 1, Col 2", "Row 2, Col 1", "Row 2, Col 2", "Row 1, Col 1"], answer: 1, explanation: "marks[ROW][COL] — first index is row (2), second is column (1)." },
  { q: "How do you create a 3×4 2D list of zeros correctly?", options: ["[[0]*4]*3", "[[0]*3]*4", "[[0]*4 for _ in range(3)]", "[[0]*3 for _ in range(4)]"], answer: 2, explanation: "[[0]*4 for _ in range(3)] creates 3 separate rows of 4 zeros each." },
  { q: "What is wrong with: grid = [[0]*4]*3?", options: ["Syntax error", "All rows share the same list object", "Creates 4 rows not 3", "Nothing is wrong"], answer: 1, explanation: "[[0]*4]*3 creates 3 references to the SAME inner list. Changing one row changes all rows!" },
  { q: "How do you get the number of rows in a 2D list called 'grid'?", options: ["grid.rows()", "len(grid[0])", "len(grid)", "grid.size()"], answer: 2, explanation: "len(grid) returns the number of rows (outer list length)." },
  { q: "How do you get the number of columns?", options: ["len(grid)", "grid.cols()", "len(grid[0])", "grid.columns()"], answer: 2, explanation: "len(grid[0]) returns the length of the first row = number of columns." },
  { q: "For column averages, which loop should be outer?", options: ["Row loop", "Column loop", "Either works", "Neither"], answer: 1, explanation: "For column processing, the outer loop goes through columns, inner loop through rows." },
  { q: "What does 'for _ in range(3)' mean?", options: ["Loop 3 times, ignoring the loop variable", "Loop using _ as the step", "Loop backwards 3 times", "Error — _ is not valid"], answer: 0, explanation: "_ is a convention meaning 'throwaway variable' — we loop 3 times but don't need the counter." },
  { q: "marks = [[1,2],[3,4],[5,6]]. What is marks[1][1]?", options: ["2", "3", "4", "5"], answer: 2, explanation: "marks[1][1] = row 1 (second row = [3,4]), col 1 (second element) = 4." },
  { q: "How do you print a 2D list row by row on separate lines?", options: ["print(grid)", "for row in grid: print(row)", "grid.print()", "print(grid, sep='\\n')"], answer: 1, explanation: "for row in grid: print(row) prints each inner list on its own line." },
  { q: "What is grid[0] in a 2D list?", options: ["The first element", "The first row (a list)", "The first column", "Error"], answer: 1, explanation: "grid[0] is the entire first row — a list containing all values in row 0." },
  { q: "To find the global max in a 2D list, you should initialise max with:", options: ["0", "-999", "grid[0][0]", "None"], answer: 2, explanation: "Always initialise with grid[0][0] — the values might all be negative, so 0 or -999 could be wrong." },
  { q: "Pseudocode: ARRAY[1:3, 1:4]. How many rows and columns in Python?", options: ["3 rows, 4 cols", "4 rows, 3 cols", "2 rows, 3 cols", "3 rows, 3 cols"], answer: 0, explanation: "ARRAY[1:3, 1:4] = 3 rows (1 to 3), 4 columns (1 to 4). Python: range(3) and range(4)." },
];

export default function Py7Quiz() {
  const [answers, setAnswers] = useState<{[k: number]: number}>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => a === questions[+i].answer).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Quiz — 2D Lists</h2>
      <p className="text-gray-500 mb-6">12 questions — test your 2D list knowledge!</p>
      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="card">
              <p className="font-semibold text-gray-900 mb-4">Q{i+1}. {q.q}</p>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, j) => (
                  <button key={j} onClick={() => setAnswers(prev => ({...prev, [i]: j}))}
                    className={`text-left px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                      answers[i] === j ? 'border-teal-500 bg-teal-50 text-teal-800' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}>
                    <span className="font-bold mr-2">{['A','B','C','D'][j]}.</span>{opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length}
            className="btn-primary w-full py-3 disabled:opacity-50">
            Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-6 rounded-xl text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-200' : score >= 7 ? 'bg-amber-50 border-2 border-amber-200' : 'bg-red-50 border-2 border-red-200'}`}>
            <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
            <p className="text-xl font-bold">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good!' : '📚 Keep Practising!'}</p>
            <p className="text-gray-600">{Math.round(score/questions.length*100)}%</p>
          </div>
          {questions.map((q, i) => (
            <div key={i} className={`card border-2 ${answers[i] === q.answer ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              <p className="font-semibold mb-2">Q{i+1}. {q.q}</p>
              <p className={`text-sm font-bold mb-1 ${answers[i] === q.answer ? 'text-green-700' : 'text-red-700'}`}>
                {answers[i] === q.answer ? '✅ Correct!' : `❌ You chose: ${q.options[answers[i]]} | Correct: ${q.options[q.answer]}`}
              </p>
              <p className="text-gray-600 text-sm">{q.explanation}</p>
            </div>
          ))}
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-secondary w-full">
            🔄 Try Again
          </button>
        </div>
      )}
    </div>
  );
}
