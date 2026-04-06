import { useState } from 'react';

export default function Py15Quiz() {
  const questions = [
    { q: "What must be true about data before using binary search?", options: ["It must contain no duplicates", "It must be sorted", "It must have an odd number of elements", "It must be integers only"], correct: 1, explanation: "Data MUST be sorted. Binary search works by eliminating half the data each time, which only works correctly if the data is in order." },
    { q: "In Python binary search, what is the initial value of 'high'?", options: ["len(data)", "len(data) - 1", "len(data) + 1", "0"], correct: 1, explanation: "high = len(data) - 1 because Python is 0-indexed. Last valid index = len - 1." },
    { q: "Why use // instead of / when calculating mid?", options: ["// is faster", "We need an integer for the index", "/ doesn't work in Python", "// gives more accurate results"], correct: 1, explanation: "mid is used as an array index, which must be an integer. Using / would give a float like 4.5, causing an IndexError." },
    { q: "What does binary search return when the target is not found?", options: ["0", "False", "-1", "None"], correct: 2, explanation: "Return -1 is the convention for 'not found' because -1 is not a valid index. We then check: if result != -1." },
    { q: "When does the while loop in binary search terminate?", options: ["When mid == 0", "When low > high", "After 10 iterations", "When high == 0"], correct: 1, explanation: "The loop condition is 'while low <= high'. When low > high, the search space is empty — the target doesn't exist." },
    { q: "In a list of 1000 items, what is the maximum number of comparisons binary search makes?", options: ["1000", "500", "100", "About 10"], correct: 3, explanation: "Binary search is O(log2 n). log2(1000) ≈ 10. So maximum 10 comparisons — much better than linear search's 1000!" },
    { q: "What happens when data[mid] < target?", options: ["high = mid - 1", "low = mid + 1", "Return mid", "Return -1"], correct: 1, explanation: "If data[mid] < target, the target must be in the RIGHT half (larger values). So we move low up: low = mid + 1." },
    { q: "Can binary search work on a list of strings?", options: ["No, only integers", "Yes, using alphabetical comparison", "Only if strings are numbers", "Only with .sort() applied"], correct: 1, explanation: "Yes! Python compares strings alphabetically. 'Ali' < 'John' is True. The same code works for strings as long as the list is sorted alphabetically." },
    { q: "What is the difference between low=0 in Python and Low=1 in Pseudocode?", options: ["No difference", "Python is 0-indexed, Pseudocode is 1-indexed", "Python is wrong", "Pseudocode starts from 0"], correct: 1, explanation: "Python uses 0-based indexing (first element is index 0). Cambridge Pseudocode uses 1-based indexing (first element is index 1). This is a KEY exam difference." },
    { q: "Which is faster for 1,000,000 items?", options: ["Linear search — simpler code", "Binary search — O(log n)", "They are the same speed", "Depends on the data"], correct: 1, explanation: "Binary search: log2(1,000,000) ≈ 20 comparisons. Linear search: up to 1,000,000 comparisons. Binary search wins massively for large sorted data." },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = Object.entries(answers).filter(([i, a]) => questions[parseInt(i)].correct === a).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — Binary Search
      </h1>
      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-3">{i + 1}. {q.q}</p>
              <div className="space-y-2">
                {q.options.map((opt, j) => (
                  <button key={j} onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                    className={`w-full text-left px-4 py-2 rounded-lg border transition-all text-sm ${answers[i] === j ? 'border-cyan-500 bg-cyan-50 text-cyan-800 font-semibold' : 'border-gray-200 hover:border-cyan-300 hover:bg-cyan-50'}`}>
                    {['A', 'B', 'C', 'D'][j]}. {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length}
            className="btn-primary w-full justify-center disabled:opacity-50">
            Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
          </button>
        </div>
      ) : (
        <div>
          <div className={`p-6 rounded-xl text-center mb-6 ${score >= 8 ? 'bg-green-50 border border-green-200' : score >= 6 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
            <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
            <p className="text-xl font-bold">{score >= 8 ? '🎉 Excellent!' : score >= 6 ? '👍 Good!' : '📚 Keep Practicing!'}</p>
          </div>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className={`bg-white border rounded-xl p-4 ${answers[i] === q.correct ? 'border-green-200' : 'border-red-200'}`}>
                <p className="font-bold text-gray-800 mb-2">{i + 1}. {q.q}</p>
                <p className={`text-sm font-semibold mb-1 ${answers[i] === q.correct ? 'text-green-600' : 'text-red-600'}`}>
                  {answers[i] === q.correct ? '✅ Correct!' : `❌ Wrong — You chose: ${q.options[answers[i]]}`}
                </p>
                <p className="text-sm text-gray-600">✅ <strong>Answer:</strong> {q.options[q.correct]}</p>
                <p className="text-sm text-indigo-700 mt-1">💡 {q.explanation}</p>
              </div>
            ))}
          </div>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-primary mt-6">Retry Quiz</button>
        </div>
      )}
    </div>
  );
}
