import { useState } from 'react';

export default function Py16Quiz() {
  const questions = [
    { q: "Why does range start at 1 in insertion sort?", options: ["Python convention", "Index 0 is already sorted by itself", "To avoid index errors", "It doesn't matter"], correct: 1, explanation: "Index 0 is a single element — trivially sorted. We start inserting from index 1 onwards." },
    { q: "What is the condition in the while loop?", options: ["j > 0 and data[j] > key", "j >= 0 and data[j] > key", "j >= 0 and data[j] >= key", "j > 0 and data[j] >= key"], correct: 1, explanation: "j >= 0 (not j > 0 — Python is 0-indexed!) and data[j] > key (element bigger than key means it needs to shift right)" },
    { q: "What does 'key = data[i]' do?", options: ["Sorts the element", "Saves the element before it gets overwritten by shifting", "Compares elements", "Finds the minimum"], correct: 1, explanation: "We save data[i] because shifting will overwrite it. Without this, we'd lose the value we're trying to insert." },
    { q: "After the while loop, where is key inserted?", options: ["data[j]", "data[j+1]", "data[i]", "data[i-1]"], correct: 1, explanation: "data[j+1] — because j went one position too far left when the while condition failed." },
    { q: "To sort in descending order, what changes?", options: ["range(1, len(data)) to range(0, len(data))", "data[j] > key to data[j] < key", "j -= 1 to j += 1", "data[j+1] = data[j] to data[j] = data[j+1]"], correct: 1, explanation: "Only the comparison changes from > to <. Everything else stays the same!" },
    { q: "What is insertion sort's best case time complexity?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], correct: 2, explanation: "O(n) — when already sorted, the while loop never executes. We just scan through once." },
    { q: "Does Python need BYREF for insertion sort?", options: ["Yes always", "No — lists are passed by reference automatically", "Only for large lists", "Only when returning"], correct: 1, explanation: "Python lists are passed by reference automatically. The function modifies the original list without needing BYREF." },
    { q: "What is the condition j >= 0 checking?", options: ["That j is positive", "That we haven't gone past the start of the list", "That key is valid", "That the list isn't empty"], correct: 1, explanation: "j >= 0 prevents going before index 0 (the start of the list). Without this we'd get an IndexError." },
    { q: "For sorting tuples (name, mark) by mark, what comparison is used?", options: ["data[j] > key", "data[j][0] > key[0]", "data[j][1] > key[1]", "data[j].mark > key.mark"], correct: 2, explanation: "data[j][1] accesses the second element of the tuple (the mark). key[1] accesses the mark of the key tuple." },
    { q: "Insertion Sort vs Bubble Sort — which is generally faster?", options: ["Bubble Sort", "They are identical", "Insertion Sort", "Depends on Python version"], correct: 2, explanation: "Insertion Sort is generally faster in practice — it uses shifts instead of swaps and has better best-case performance." },
  ];

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(selected).filter(([i, v]) => questions[+i].correct === v).length;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Day 16 Quiz</h2>
      <p className="text-gray-600 mb-6">10 questions on Insertion Sort in Python</p>
      {submitted && (
        <div className={`mb-6 p-5 rounded-xl border-2 text-center ${score >= 8 ? 'bg-green-50 border-green-300' : score >= 6 ? 'bg-yellow-50 border-yellow-300' : 'bg-red-50 border-red-300'}`}>
          <p className="text-3xl font-black">{score}/10</p>
          <p className="font-semibold mt-1">{score >= 8 ? '🎉 Excellent!' : score >= 6 ? '👍 Good effort!' : '📚 Keep practising!'}</p>
        </div>
      )}
      <div className="space-y-5">
        {questions.map((q, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="font-bold text-gray-900 mb-3">Q{i + 1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => {
                let cls = 'border-gray-200 bg-gray-50 text-gray-700 hover:border-indigo-300';
                if (submitted) {
                  if (j === q.correct) cls = 'border-green-400 bg-green-50 text-green-800';
                  else if (selected[i] === j) cls = 'border-red-400 bg-red-50 text-red-800';
                } else if (selected[i] === j) cls = 'border-indigo-400 bg-indigo-50 text-indigo-800';
                return (
                  <button key={j} disabled={submitted} onClick={() => setSelected(prev => ({ ...prev, [i]: j }))}
                    className={`text-left px-4 py-2 rounded-lg border text-sm transition-all ${cls}`}>
                    {String.fromCharCode(65 + j)}. {opt}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-3 text-xs text-gray-600 bg-blue-50 rounded-lg p-3">💡 {q.explanation}</p>}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={Object.keys(selected).length < questions.length}
          className="btn-primary mt-6 disabled:opacity-50">Submit Quiz</button>
      ) : (
        <button onClick={() => { setSubmitted(false); setSelected({}); }} className="btn-secondary mt-6">Try Again</button>
      )}
    </div>
  );
}
