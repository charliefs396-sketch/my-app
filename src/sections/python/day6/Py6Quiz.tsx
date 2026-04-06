import { useState } from 'react';

const questions = [
  { q: "What is the index of the FIRST element in a Python list?", options: ["1", "0", "-1", "None"], answer: 1, explanation: "Python lists are 0-indexed! The first element is at index 0, unlike pseudocode which uses index 1." },
  { q: "What does names.append('Tom') do?", options: ["Inserts Tom at position 0", "Adds Tom to the end of the list", "Replaces the last element with Tom", "Creates a new list with Tom"], answer: 1, explanation: "append() always adds to the END of the list. Use insert(0, 'Tom') to add at the beginning." },
  { q: "What does names.pop(0) do?", options: ["Removes the last element", "Removes the first element and returns it", "Returns the first element without removing it", "Deletes the entire list"], answer: 1, explanation: "pop(0) removes and returns the element at index 0 (first element). pop() with no argument removes the last element." },
  { q: "What is the output of: nums = [10, 20, 30]; print(nums[-1])?", options: ["10", "20", "30", "Error"], answer: 2, explanation: "Negative indexing counts from the end. nums[-1] is the last element, which is 30." },
  { q: "Which code correctly copies a list without linking them?", options: ["copy = original", "copy = original.copy()", "copy = original.append()", "copy = list(original.copy)"], answer: 1, explanation: "original.copy() creates a proper copy. Just doing copy = original makes them both point to the SAME list — changes to one affect the other!" },
  { q: "What does len([5, 3, 8, 1]) return?", options: ["3", "4", "5", "8"], answer: 1, explanation: "len() returns the number of elements. The list has 4 elements, so len() returns 4." },
  { q: "How do you safely check if 'Ali' is in a list before removing?", options: ["names.remove('Ali')", "if 'Ali' in names: names.remove('Ali')", "names.pop('Ali')", "delete names['Ali']"], answer: 1, explanation: "remove() raises ValueError if item not found. Always check 'if value in list' first to be safe." },
  { q: "What is the output of: marks = [0]*3; marks[1] = 85; print(marks)?", options: ["[85, 85, 85]", "[0, 85, 0]", "[0, 0, 85]", "[85, 0, 0]"], answer: 1, explanation: "[0]*3 creates [0, 0, 0]. Then marks[1] = 85 changes the element at index 1 (second element) to 85." },
  { q: "Which loop pattern gives you BOTH index and value?", options: ["for x in list:", "for i in range(len(list)):", "for i, x in enumerate(list):", "for i, x in list:"], answer: 2, explanation: "enumerate() is the best way — it gives you both the index i and the value x in one clean loop." },
  { q: "To find the maximum WITHOUT using max(), you should initialise the maximum to:", options: ["0", "-999", "list[0]", "None"], answer: 2, explanation: "Always initialise to list[0] (first element). Initialising to 0 would fail if all numbers are negative!" },
  { q: "What does numbers.count(3) return for [3, 1, 4, 1, 3, 9, 3]?", options: ["1", "2", "3", "7"], answer: 2, explanation: "count() counts how many times the value appears. 3 appears at positions 0, 4, and 6 — that's 3 times." },
  { q: "Which approach is SAFEST for removing all occurrences of a value?", options: ["Loop forwards, use remove()", "Loop forwards, use pop(i)", "Build a new list keeping only non-matching items", "Use clear() and start again"], answer: 2, explanation: "Building a new list is safest — you never modify the list you're looping through, which avoids the 'skipped element' bug." },
];

export default function Py6Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? Object.entries(answers).filter(([i, a]) => questions[+i].answer === a).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Lists</h1>
      <p className="text-gray-500 mb-6">12 questions to test your Python list knowledge</p>

      {submitted && (
        <div className={`mb-6 p-5 rounded-xl border-2 text-center ${score >= 10 ? 'bg-green-50 border-green-400' : score >= 7 ? 'bg-amber-50 border-amber-400' : 'bg-red-50 border-red-400'}`}>
          <p className="text-4xl font-black mb-1">{score}/12</p>
          <p className="font-bold text-lg">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good effort!' : '📚 Keep practising!'}</p>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-3 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50">
            Retry Quiz
          </button>
        </div>
      )}

      <div className="space-y-5">
        {questions.map((q, i) => (
          <div key={i} className={`card border-l-4 ${submitted ? (answers[i] === q.answer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-emerald-400'}`}>
            <p className="font-bold text-gray-900 mb-3">Q{i+1}. {q.q}</p>
            <div className="grid grid-cols-1 gap-2 mb-3">
              {q.options.map((opt, j) => (
                <button
                  key={j}
                  disabled={submitted}
                  onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                  className={`text-left px-4 py-2 rounded-lg border text-sm transition ${
                    answers[i] === j
                      ? submitted
                        ? j === q.answer ? 'bg-green-200 border-green-500 font-bold' : 'bg-red-200 border-red-500'
                        : 'bg-emerald-100 border-emerald-500 font-bold'
                      : submitted && j === q.answer
                      ? 'bg-green-200 border-green-500 font-bold'
                      : 'bg-white border-gray-200 hover:bg-emerald-50'
                  }`}
                >
                  {String.fromCharCode(65 + j)}. {opt}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
                <span className="font-bold">{answers[i] === q.answer ? '✅ Correct!' : '❌ Incorrect!'}</span> {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && Object.keys(answers).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700">
          Submit Answers
        </button>
      )}
    </div>
  );
}
