import { useState } from 'react';

export default function Py10Quiz() {
  const questions = [
    { q: "What does Bubble Sort compare?", options: ["First and last elements", "Adjacent elements", "Random elements", "Element and its double"], answer: 1, explanation: "Bubble Sort compares adjacent (side-by-side) elements and swaps them if they're in the wrong order." },
    { q: "What is the outer loop range for a list of 6 elements?", options: ["range(6)", "range(5)", "range(7)", "range(4)"], answer: 1, explanation: "range(n-1) = range(5). A list of 6 elements needs at most 5 passes." },
    { q: "What is the inner loop range on pass i?", options: ["range(n)", "range(n-1)", "range(n-i)", "range(n-1-i)"], answer: 3, explanation: "range(n-1-i) because after pass i, the last i elements are already sorted." },
    { q: "How does Python swap two variables?", options: ["temp = a; a = b; b = temp", "a, b = b, a", "swap(a, b)", "Both A and B work"], answer: 3, explanation: "Both work in Python! But a, b = b, a is the Pythonic way. For the exam, both are accepted." },
    { q: "What does the swapped flag do?", options: ["Counts swaps", "Enables early exit if sorted", "Tracks the largest element", "Nothing useful"], answer: 1, explanation: "If no swaps happen in a pass, the list is already sorted. The flag lets us break out early." },
    { q: "After [5,3,8,1,9,2] Pass 1, what's at the end?", options: ["5", "2", "9", "8"], answer: 2, explanation: "The largest value (9) bubbles to the end after Pass 1." },
    { q: "To sort descending, what changes?", options: ["Change < to >", "Change > to <", "Reverse the list after sorting", "Change range to negative"], answer: 1, explanation: "Change > to < in the comparison. Now smaller values bubble to the end instead of larger ones." },
    { q: "How to sort tuples by second element?", options: ["data[j] > data[j+1]", "data[j][0] > data[j+1][0]", "data[j][1] > data[j+1][1]", "data[j][2] > data[j+1][2]"], answer: 2, explanation: "Index [1] is the second element. For (name, mark), [1] is the mark." },
    { q: "What's the difference between .sort() and sorted()?", options: [".sort() returns new list", "sorted() modifies original", ".sort() modifies original, sorted() returns new", "No difference"], answer: 2, explanation: ".sort() modifies the original list in-place. sorted() returns a new sorted list, leaving the original unchanged." },
    { q: "Best case time complexity with swapped flag?", options: ["O(1)", "O(n)", "O(n log n)", "O(n squared)"], answer: 1, explanation: "If the list is already sorted, one pass with 0 swaps = break. That's O(n) comparisons." },
    { q: "What happens if you forget 'swapped = False' inside the loop?", options: ["Works fine", "Infinite loop", "Never exits early", "Crashes"], answer: 2, explanation: "If swapped stays True from a previous pass, the break condition never triggers. The sort still works but loses the optimization." },
    { q: "Can bubble sort sort strings?", options: ["No, only numbers", "Yes, alphabetically", "Yes, by length", "Only with a key function"], answer: 1, explanation: "Python compares strings alphabetically by default. The same bubble sort function works on strings!" },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).filter(([i, a]) => a === questions[Number(i)].answer).length;

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Bubble Sort
      </h1>

      {questions.map((question, qi) => (
        <div key={qi} className="card">
          <p className="font-bold text-gray-900 mb-3">Q{qi + 1}. {question.q}</p>
          <div className="space-y-2">
            {question.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => !submitted && setAnswers(prev => ({ ...prev, [qi]: oi }))}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  submitted
                    ? oi === question.answer
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : answers[qi] === oi
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200'
                    : answers[qi] === oi
                      ? 'bg-emerald-100 border-emerald-500'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {String.fromCharCode(65 + oi)}) {opt}
              </button>
            ))}
          </div>
          {submitted && (
            <p className={`mt-2 text-sm ${answers[qi] === question.answer ? 'text-green-600' : 'text-red-600'}`}>
              {question.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="btn-primary bg-emerald-600 hover:bg-emerald-700">
          Submit Answers
        </button>
      ) : (
        <div className={`p-6 rounded-xl text-center ${score >= 10 ? 'bg-green-100' : score >= 7 ? 'bg-yellow-100' : 'bg-red-100'}`}>
          <p className="text-3xl font-black">{score}/{questions.length}</p>
          <p className="text-lg font-semibold mt-1">
            {score >= 10 ? '🌟 Excellent!' : score >= 7 ? '👍 Good job!' : '📚 Review needed'}
          </p>
          <button onClick={() => { setSubmitted(false); setAnswers({}); }} className="btn-secondary mt-3">Try Again</button>
        </div>
      )}
    </div>
  );
}