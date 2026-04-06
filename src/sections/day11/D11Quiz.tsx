import { useState } from 'react';

const questions = [
  { q: "How do you access the Name field of a record variable called Student?", options: ["Student[Name]", "Student.Name", "Name.Student", "Student->Name"], answer: 1, explanation: "Dot notation: VariableName.FieldName. Square brackets are for arrays, not record fields." },
  { q: "What keyword ends a record type definition?", options: ["ENDRECORD", "END TYPE", "ENDTYPE", "ENDIF"], answer: 2, explanation: "ENDTYPE (one word, no space) closes a TYPE definition block." },
  { q: "What type should Temp be when swapping two StudentRecord variables?", options: ["STRING", "INTEGER", "BOOLEAN", "StudentRecord"], answer: 3, explanation: "Temp must be the same type as what you're swapping. To swap whole records, Temp must be StudentRecord." },
  { q: "Which is correct syntax inside a TYPE definition?", options: ["Name : STRING", "DECLARE Name : STRING", "STRING Name", "VAR Name : STRING"], answer: 1, explanation: "Inside TYPE, you still use DECLARE keyword: DECLARE Name : STRING" },
  { q: "An array of 30 StudentRecord items is declared as:", options: ["DECLARE Students : StudentRecord[30]", "DECLARE Students : ARRAY[1:30] OF StudentRecord", "DECLARE Students[30] : StudentRecord", "TYPE Students : ARRAY[1:30]"], answer: 1, explanation: "Standard array declaration with the record type: ARRAY[1:30] OF StudentRecord" },
  { q: "Where must the TYPE definition appear in your code?", options: ["At the end", "Anywhere", "Before declaring variables of that type", "After the main code"], answer: 2, explanation: "TYPE definitions must come BEFORE you declare any variables using that type." },
  { q: "What does TYPE do in pseudocode?", options: ["Declares a variable", "Creates a new data type", "Converts data types", "Types output to screen"], answer: 1, explanation: "TYPE creates a new user-defined data type (a blueprint/template for records)." },
  { q: "To input a student's name into position 5 of the Students array:", options: ["INPUT Name", "INPUT Students.Name[5]", "INPUT Students[5].Name", "INPUT Students[5][Name]"], answer: 2, explanation: "Array index first, then dot notation: Students[5].Name" },
];

export default function D11Quiz() {
  const [selected, setSelected] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const score = selected.filter((s, i) => s === questions[i].answer).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Records (TYPE)</h1>
      <p className="text-gray-500 mb-6">{questions.length} questions — test your understanding!</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`card border-2 ${submitted ? (selected[i] === q.answer ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-100'}`}>
            <p className="font-bold text-gray-800 mb-3">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  onClick={() => {
                    if (!submitted) {
                      const newS = [...selected];
                      newS[i] = j;
                      setSelected(newS);
                    }
                  }}
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
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected.includes(null)}
          className="mt-8 w-full py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl font-bold text-lg hover:opacity-90 disabled:opacity-50 transition-all"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl text-center">
          <p className="text-4xl font-black text-red-600">{score}/{questions.length}</p>
          <p className="text-gray-600 mt-2">{score === questions.length ? '🏆 Perfect! You mastered records!' : score >= questions.length * 0.7 ? '👍 Great work! Review the ones you missed.' : '📖 Keep practicing — re-read the sections and try again!'}</p>
          <button onClick={() => { setSelected(Array(questions.length).fill(null)); setSubmitted(false); }} className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">Try Again</button>
        </div>
      )}
    </div>
  );
}
