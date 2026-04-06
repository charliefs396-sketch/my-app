import { useState } from 'react';

const questions = [
  {
    q: "Which declaration is correct for a 1D array of 8 integers in Cambridge 9618 pseudocode?",
    options: [
      "DECLARE Marks : INTEGER[8]",
      "DECLARE Marks : ARRAY[1:8] OF INTEGER",
      "DECLARE Marks : ARRAY[0:7] OF INTEGER",
      "ARRAY Marks[1:8] : INTEGER",
    ],
    answer: 1,
    explanation: "The correct syntax is DECLARE Name : ARRAY[lower:upper] OF DataType. Cambridge 9618 uses 1-indexed arrays, so [1:8] gives 8 elements at indices 1 through 8.",
  },
  {
    q: "An array is declared as ARRAY[1:10]. What is the valid range of indices?",
    options: ["0 to 9", "0 to 10", "1 to 10", "1 to 9"],
    answer: 2,
    explanation: "ARRAY[1:10] means the lower bound is 1 and upper bound is 10. Valid indices are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — that's 10 elements total.",
  },
  {
    q: "Why is Max initialised to Marks[1] rather than 0 when finding the maximum?",
    options: [
      "Because 0 is not a valid value",
      "Because it makes the loop faster",
      "Because if all marks are negative, 0 would incorrectly be the maximum",
      "Because Marks[1] is always the largest",
    ],
    answer: 2,
    explanation: "If all values in the array are negative (e.g. temperatures), Max=0 would never be updated and the final answer would be 0 — completely wrong! Initialising with Marks[1] guarantees we start with an actual data value.",
  },
  {
    q: "When finding the maximum value, why does the FOR loop start at i ← 2 instead of i ← 1?",
    options: [
      "Because array indices start at 2",
      "Because Marks[1] was already used to initialise Max",
      "Because the first element is always the maximum",
      "Because it makes the code shorter",
    ],
    answer: 1,
    explanation: "Marks[1] was already used to initialise Max before the loop. Starting at i=2 means we compare all remaining elements against Max. Starting at i=1 would compare Marks[1] with itself — a pointless step.",
  },
  {
    q: "What data type should Average be declared as?",
    options: ["INTEGER", "CHAR", "REAL", "BOOLEAN"],
    answer: 2,
    explanation: "Average must be REAL because division can produce decimal results. For example 75/10=7.5. If Average were INTEGER, the .5 would be lost. Always use REAL for averages, percentages, and division results.",
  },
  {
    q: "What are 'parallel arrays'?",
    options: [
      "Two arrays running side by side on screen",
      "Two arrays of the same data type",
      "Two arrays where the same index represents related data",
      "Arrays that are processed at the same time",
    ],
    answer: 2,
    explanation: "Parallel arrays store related data of different types where the same index connects related items. E.g. Names[3] and Marks[3] both belong to the same student (student number 3). They are 'parallel' because they run alongside each other.",
  },
  {
    q: "How many passes are needed to find which students are above average?",
    options: [
      "1 pass (all in one loop)",
      "2 passes (input + compare)",
      "3 passes (input, calculate average, then compare)",
      "4 passes",
    ],
    answer: 2,
    explanation: "You need 3 passes: (1) Input all data into the array, (2) Loop to calculate total and then average, (3) Loop again to compare each element against the average. You cannot compare to average until you know it, and you can't know it until all data is collected.",
  },
  {
    q: "In the second largest algorithm, what happens when you find a new largest value?",
    options: [
      "You delete the old largest value",
      "SecondLargest becomes the old Largest, then Largest gets the new value",
      "You restart the loop from the beginning",
      "You swap Largest and SecondLargest",
    ],
    answer: 1,
    explanation: "When a new largest is found: first copy the old Largest into SecondLargest (to save it), THEN update Largest with the new value. Order matters — if you update Largest first, you lose the old value!",
  },
  {
    q: "Which of these correctly outputs all values in an array DECLARE Nums : ARRAY[1:5] OF INTEGER?",
    options: [
      "OUTPUT Nums",
      "FOR i ← 0 TO 4\n   OUTPUT Nums[i]\nNEXT i",
      "FOR i ← 1 TO 5\n   OUTPUT Nums[i]\nNEXT i",
      "PRINT Nums[1:5]",
    ],
    answer: 2,
    explanation: "You must loop through each index and output individual elements. Since the array is ARRAY[1:5], the loop runs from 1 TO 5. You cannot OUTPUT the entire array at once in pseudocode.",
  },
  {
    q: "An array is declared as DECLARE Data : ARRAY[1:20] OF REAL. How many elements does it hold?",
    options: ["19", "20", "21", "18"],
    answer: 1,
    explanation: "Number of elements = upper bound − lower bound + 1 = 20 − 1 + 1 = 20. The formula always gives the correct count. So [1:20] holds exactly 20 elements.",
  },
  {
    q: "Which loop is better for a linear search (stopping when found)?",
    options: [
      "FOR loop — it's simpler",
      "WHILE loop — because it can stop early when the target is found",
      "REPEAT loop — it always runs at least once",
      "All loops work the same way",
    ],
    answer: 1,
    explanation: "A WHILE loop with 'Found = FALSE' in the condition stops as soon as the target is found — much more efficient than a FOR loop which always runs to the end. This is the standard linear search pattern.",
  },
  {
    q: "What is wrong with this code? Total ← 0 / FOR i ← 1 TO 10 / Average ← Total / 10 / Total ← Total + Marks[i] / NEXT i",
    options: [
      "Total is not declared",
      "Average is calculated inside the loop before Total is complete",
      "The FOR loop is wrong",
      "Nothing is wrong",
    ],
    answer: 1,
    explanation: "Average is calculated inside the loop BEFORE Total is finished accumulating! After NEXT i, Total will be correct but Average will have been recalculated 10 times with incomplete totals. Average should be calculated AFTER the NEXT i statement.",
  },
];

export default function D6Quiz() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(selected).filter(
    ([idx, ans]) => questions[parseInt(idx)].answer === ans
  ).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        🧠 Day 6 Quiz
      </h1>
      <p className="text-gray-500 text-lg mb-8">Test your understanding of 1D Arrays — {questions.length} questions</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl border-2 text-center ${
          score >= 10 ? 'bg-green-50 border-green-400' :
          score >= 7 ? 'bg-amber-50 border-amber-400' :
          'bg-red-50 border-red-400'
        }`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-xl font-bold mb-1">
            {score >= 10 ? '🎉 Excellent! Arrays mastered!' :
             score >= 7 ? '👍 Good! Review the ones you missed.' :
             '📚 Keep practising — review the sections again!'}
          </p>
          <p className="text-gray-600 text-sm">
            {Math.round((score / questions.length) * 100)}% — {
              score >= 10 ? 'Ready for the exam!' :
              score >= 7 ? 'Almost there!' : 'Re-read the array sections'
            }
          </p>
          <button
            onClick={() => setShowResults(!showResults)}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            {showResults ? 'Hide Explanations' : 'Show Explanations'}
          </button>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((question, idx) => (
          <div key={idx} className={`bg-white rounded-2xl border shadow-sm p-6 transition-all ${
            submitted && selected[idx] === question.answer ? 'border-green-300 bg-green-50/30' :
            submitted && selected[idx] !== undefined ? 'border-red-300 bg-red-50/30' :
            'border-gray-100'
          }`}>
            <p className="font-bold text-gray-900 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg mr-2 text-sm">Q{idx+1}</span>
              {question.q}
            </p>

            <div className="space-y-2">
              {question.options.map((option, optIdx) => {
                let btnClass = 'border-gray-200 bg-gray-50 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50';
                if (selected[idx] === optIdx && !submitted) btnClass = 'border-indigo-500 bg-indigo-50 text-indigo-800';
                if (submitted) {
                  if (optIdx === question.answer) btnClass = 'border-green-500 bg-green-50 text-green-800';
                  else if (selected[idx] === optIdx) btnClass = 'border-red-400 bg-red-50 text-red-700 line-through';
                  else btnClass = 'border-gray-200 bg-gray-50 text-gray-400';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => !submitted && setSelected(prev => ({ ...prev, [idx]: optIdx }))}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${btnClass}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                    <span className="whitespace-pre-wrap">{option}</span>
                    {submitted && optIdx === question.answer && <span className="ml-2 text-green-600">✓</span>}
                  </button>
                );
              })}
            </div>

            {submitted && showResults && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-800 text-sm font-semibold mb-1">📖 Explanation:</p>
                <p className="text-blue-700 text-sm">{question.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">Answered {Object.keys(selected).length} of {questions.length} questions</p>
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(selected).length < questions.length}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Quiz
          </button>
          {Object.keys(selected).length < questions.length && (
            <p className="text-amber-600 text-sm mt-2">Please answer all questions before submitting</p>
          )}
        </div>
      )}

      {submitted && (
        <div className="mt-6 text-center">
          <button
            onClick={() => { setSelected({}); setSubmitted(false); setShowResults(false); }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
          >
            🔄 Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}
