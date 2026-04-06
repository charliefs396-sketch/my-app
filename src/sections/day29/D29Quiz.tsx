import { useState } from 'react';

const questions = [
  { q: "What is the output of: 17 DIV 5?", options: ["2", "3", "3.4", "12"], answer: 1, explanation: "17 DIV 5 = 3 (integer division, ignores remainder)" },
  { q: "Which loop MUST execute at least once?", options: ["FOR", "WHILE", "REPEAT...UNTIL", "All of them"], answer: 2, explanation: "REPEAT...UNTIL checks the condition AFTER the loop body executes" },
  { q: "What does MID(\"Computer\", 3, 4) return?", options: ["Com", "mput", "mput", "put"], answer: 1, explanation: "MID starts at position 3 ('m') and takes 4 characters: 'mput'" },
  { q: "Which parameter passing method changes the original variable?", options: ["BYVAL", "BYREF", "BYKEY", "BYCOPY"], answer: 1, explanation: "BYREF passes a reference to the original variable, so changes affect the original" },
  { q: "In Binary Search, if Data[Mid] < Target, what happens?", options: ["High ← Mid - 1", "Low ← Mid + 1", "Return Mid", "Return -1"], answer: 1, explanation: "Target is in the RIGHT half, so we move Low up: Low ← Mid + 1" },
  { q: "What type of error causes a program to crash during execution?", options: ["Syntax error", "Logic error", "Runtime error", "Semantic error"], answer: 2, explanation: "Runtime errors occur DURING execution (e.g., division by zero)" },
  { q: "In Insertion Sort, what does the 'Key' variable hold?", options: ["The largest element", "The element being inserted into its correct position", "The array index", "The comparison result"], answer: 1, explanation: "Key holds the current element (Data[i]) that we're trying to insert into the correct position in the sorted portion" },
  { q: "What is LIFO?", options: ["Last In First Out (Stack)", "Last In First Out (Queue)", "Linear Input File Output", "Loop Iteration For Output"], answer: 0, explanation: "LIFO = Last In First Out, which describes a Stack. The last item pushed is the first item popped." },
  { q: "What is the base case in Factorial(N)?", options: ["N = 0 only", "N <= 1", "N >= 1", "N = 2"], answer: 1, explanation: "The base case is N <= 1, returning 1. This covers both Factorial(0) = 1 and Factorial(1) = 1" },
  { q: "In a circular queue, how is Rear updated after Enqueue?", options: ["Rear ← Rear + 1", "Rear ← (Rear MOD MAXSIZE) + 1", "Rear ← Rear - 1", "Rear ← Front + 1"], answer: 1, explanation: "Rear ← (Rear MOD MAXSIZE) + 1 wraps around when Rear reaches MAXSIZE" },
  { q: "What test data would you use to test boundary condition for mark 0-100?", options: ["50, 75, 85", "-1, 0, 100, 101", "50", "abc, -999"], answer: 1, explanation: "Boundary values are at the EDGES: -1 and 101 (just outside), 0 and 100 (just inside)" },
  { q: "In a TYPE definition, how do you access a field?", options: ["Record[Field]", "Record.Field", "Record → Field", "Field(Record)"], answer: 1, explanation: "Dot notation: Record.Field e.g. Student.Name" },
  { q: "What does OPENFILE \"data.txt\" FOR WRITE do if the file already exists?", options: ["Appends to it", "Gives an error", "Overwrites it (deletes old content)", "Creates a backup"], answer: 2, explanation: "FOR WRITE creates a new file OR overwrites the existing one — old content is LOST!" },
  { q: "How many times does Factorial(5) call itself recursively?", options: ["3", "4", "5", "6"], answer: 1, explanation: "Factorial(5) calls Factorial(4), which calls Factorial(3), which calls Factorial(2), which calls Factorial(1) = base case. That's 4 recursive calls." },
  { q: "What is the Waterfall model's biggest disadvantage?", options: ["Too fast", "Hard to go back and change requirements", "Requires too many programmers", "No testing phase"], answer: 1, explanation: "Each stage must be complete before the next begins — bad for changing requirements" },
];

export default function D29Quiz() {
  const [selected, setSelected] = useState<{[k: number]: number}>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(selected).filter(([i, v]) => questions[Number(i)].answer === v).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Final Review Quiz</h2>
      <p className="text-gray-500 mb-6">15 questions covering ALL 28 days — try to score 12+!</p>

      {!submitted ? (
        <div className="space-y-5">
          {questions.map((q, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-3">Q{i + 1}: {q.q}</p>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, j) => (
                  <button
                    key={j}
                    onClick={() => setSelected(prev => ({ ...prev, [i]: j }))}
                    className={`text-left px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      selected[i] === j
                        ? 'bg-indigo-100 border-indigo-400 text-indigo-800'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >{opt}</button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => { if (Object.keys(selected).length === questions.length) setSubmitted(true); }}
            disabled={Object.keys(selected).length < questions.length}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-indigo-700 transition-colors"
          >Submit Quiz ({Object.keys(selected).length}/{questions.length} answered)</button>
        </div>
      ) : (
        <div>
          <div className={`rounded-xl p-6 mb-6 text-center ${score >= 12 ? 'bg-green-50 border border-green-300' : score >= 9 ? 'bg-yellow-50 border border-yellow-300' : 'bg-red-50 border border-red-300'}`}>
            <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
            <p className="text-xl font-bold">{score >= 12 ? '🎉 Excellent! You\'re ready for the exam!' : score >= 9 ? '👍 Good work! Review the ones you missed.' : '📚 Keep revising — you\'ll get there!'}</p>
          </div>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className={`rounded-xl p-4 border ${selected[i] === q.answer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <p className="font-bold text-gray-800 mb-1">Q{i + 1}: {q.q}</p>
                <p className="text-sm text-green-700 font-semibold">✅ Correct: {q.options[q.answer]}</p>
                {selected[i] !== q.answer && <p className="text-sm text-red-600">❌ You chose: {q.options[selected[i]]}</p>}
                <p className="text-xs text-gray-600 mt-1">{q.explanation}</p>
              </div>
            ))}
          </div>
          <button onClick={() => { setSelected({}); setSubmitted(false); }} className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
