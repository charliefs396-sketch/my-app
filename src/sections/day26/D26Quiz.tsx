import { useState } from 'react';

export default function D26Quiz() {
  const questions = [
    { q: "What is the Mid formula in Binary Search?", options: ['(Low + High) / 2', '(Low + High) DIV 2', 'Low + High DIV 2', '(Low - High) DIV 2'], answer: 1, explain: '(Low + High) DIV 2 gives integer division — Mid must be a whole number for use as an array index.' },
    { q: "What does RETURN -1 mean in Binary Search?", options: ['Error in code', 'Array is empty', 'Target not found', 'Target at index -1'], answer: 2, explain: '-1 signals that the target was not found. Valid indices are 1 to N, so -1 is impossible as a real index.' },
    { q: "When does the WHILE loop exit?", options: ['When Mid = Target', 'When Low > High', 'When High = 0', 'After 10 passes'], answer: 1, explain: 'The WHILE condition is Low <= High. When Low > High, the search area is empty and the loop exits.' },
    { q: "Binary Search requires data to be:", options: ['Randomly ordered', 'Sorted', 'In reverse order', 'Unique values only'], answer: 1, explain: 'Data MUST be sorted. Binary Search uses comparisons to decide left/right which only works on sorted data.' },
    { q: "If Data[Mid] < Target, what happens?", options: ['High ← Mid - 1', 'Low ← Mid - 1', 'Low ← Mid + 1', 'High ← Mid + 1'], answer: 2, explain: 'Target is in the RIGHT half. We move Low up to Mid + 1 to search the right side only.' },
    { q: "Binary Search is a FUNCTION because:", options: ['It uses WHILE', 'It takes parameters', 'It returns a value', 'It has DECLARE'], answer: 2, explain: 'It RETURNS a value (the index or -1). PROCEDURES do not return values. FUNCTIONS do.' },
    { q: "Array: [2,5,8,12,16,20]. Target=8. What is Mid on Pass 1?", options: ['3', '4', '3.5', '2'], answer: 0, explain: 'Low=1, High=6. (1+6) DIV 2 = 7 DIV 2 = 3. Data[3] = 8 — found immediately!' },
    { q: "For N=1000 sorted elements, Binary Search needs at most:", options: ['1000 comparisons', '500 comparisons', '10 comparisons', '100 comparisons'], answer: 2, explain: 'log₂(1000) ≈ 10. Each pass halves the search area: 1000→500→250→125→63→32→16→8→4→2→1.' },
    { q: "How do you call the Binary Search function?", options: ['CALL BinarySearch(Data, Size, Target)', 'Position ← BinarySearch(Data, Size, Target)', 'BinarySearch(Data, Size, Target)', 'RETURN BinarySearch(Data, Size, Target)'], answer: 1, explain: 'Functions are called by assignment: Position ← BinarySearch(...). CALL is only for PROCEDURES.' },
    { q: "Why use Mid + 1 and not just Mid when updating Low?", options: ['Makes it faster', 'Avoids infinite loop', 'Required by Cambridge', 'Mid could be negative'], answer: 1, explain: 'We already checked Data[Mid] — it\'s not the target. Not using +1 could cause infinite loop when Low=High=Mid.' },
    { q: "Binary Search on strings: 'Sara' vs 'Tom'. Which is smaller?", options: ['"Tom" is smaller', '"Sara" is smaller', 'They are equal', 'Cannot compare strings'], answer: 1, explain: '"Sara" < "Tom" because "S" (index 83 in ASCII) comes before "T" (index 84). Alphabetical order works like number comparison.' },
    { q: "What is the worst case for Linear Search on N elements?", options: ['log₂(N)', 'N/2', 'N', '1'], answer: 2, explain: 'Linear Search checks every element one by one. Worst case: the target is last or not present — N comparisons needed.' },
  ];

  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => selected[i] === q.answer).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Binary Search Quiz</h1>
      <p className="text-gray-500 mb-8">12 questions — test your understanding!</p>

      {submitted && (
        <div className={`rounded-xl p-6 mb-8 text-center ${score >= 10 ? 'bg-green-50 border border-green-200' : score >= 7 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
          <p className="text-4xl font-black mb-2">{score}/12</p>
          <p className="font-semibold text-lg">{score >= 10 ? '🎉 Excellent! Binary Search mastered!' : score >= 7 ? '👍 Good effort! Review the ones you missed.' : '📚 Keep practising — re-read the sections and try again!'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="font-bold text-gray-800 mb-4">Q{i+1}. {q.q}</p>
            <div className="grid gap-2">
              {q.options.map((opt, j) => {
                let style = 'border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer';
                if (submitted) {
                  if (j === q.answer) style = 'border-green-400 bg-green-50';
                  else if (selected[i] === j) style = 'border-red-400 bg-red-50';
                  else style = 'border-gray-200 bg-gray-50';
                } else if (selected[i] === j) {
                  style = 'border-indigo-400 bg-indigo-50';
                }
                return (
                  <div key={j} onClick={() => !submitted && setSelected(prev => ({...prev, [i]: j}))}
                    className={`border-2 rounded-lg p-3 text-sm transition-all ${style}`}>
                    <span className="font-semibold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                  </div>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                💡 {q.explain}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button onClick={() => setSubmitted(true)}
          className="mt-8 w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
          Submit Quiz
        </button>
      )}
    </div>
  );
}
