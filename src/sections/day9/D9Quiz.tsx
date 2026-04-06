import { useState } from 'react';

const questions = [
  {
    q: "Why does BubbleSort use BYREF for the Data array parameter?",
    options: ["To save memory", "So changes to the array inside the procedure are reflected in the original array", "BYREF is always faster", "BYVAL doesn't work with arrays"],
    answer: 1,
    explanation: "BYREF passes the actual array (not a copy), so any swaps made inside the procedure permanently change the original array. Without BYREF, the original array would remain unsorted."
  },
  {
    q: "What is the correct 3-step swap of Data[j] and Data[j+1]?",
    options: [
      "Data[j] ← Data[j+1], Data[j+1] ← Data[j]",
      "Temp ← Data[j], Data[j] ← Data[j+1], Data[j+1] ← Temp",
      "Temp ← Data[j+1], Data[j+1] ← Data[j], Data[j] ← Temp",
      "Data[j] ← Temp, Temp ← Data[j+1], Data[j+1] ← Data[j]"
    ],
    answer: 1,
    explanation: "Save Data[j] in Temp first, then overwrite Data[j] with Data[j+1], then put the saved value (Temp) into Data[j+1]. Option A loses the original value of Data[j]."
  },
  {
    q: "In the BubbleSort inner loop 'FOR j ← 1 TO Size - i', why is 'Size - i' used instead of 'Size - 1'?",
    options: [
      "It's a typo — should be Size - 1",
      "After each pass i, the last i elements are already in their correct positions and don't need to be compared again",
      "To make the algorithm faster by skipping the first element",
      "Because arrays start at 1 not 0"
    ],
    answer: 1,
    explanation: "After pass 1, the largest element is at the end. After pass 2, the two largest are at the end. After pass i, the last i elements are sorted. So we only need to compare up to Size-i."
  },
  {
    q: "What does the Swapped flag achieve in Bubble Sort?",
    options: [
      "It counts the number of swaps",
      "It stores the position of the last swap",
      "It allows early exit when the array is already sorted, improving best-case to O(n)",
      "It prevents the same elements from being swapped twice"
    ],
    answer: 2,
    explanation: "If a full pass completes with no swaps (Swapped remains FALSE), the array is already sorted. We can exit early instead of doing unnecessary remaining passes. This gives O(n) best case."
  },
  {
    q: "What is the ONE change needed to sort in descending order instead of ascending?",
    options: [
      "Change FOR j ← 1 TO Size - i to FOR j ← Size - i TO 1 STEP -1",
      "Change IF Data[j] > Data[j+1] to IF Data[j] < Data[j+1]",
      "Change Temp ← Data[j] to Temp ← Data[j+1]",
      "Change FOR i ← 1 TO Size-1 to FOR i ← Size-1 TO 1 STEP -1"
    ],
    answer: 1,
    explanation: "Changing > to < reverses the sort order. With <, we swap when the left element is SMALLER than the right element, which pushes small values to the end — giving descending order."
  },
  {
    q: "When sorting parallel arrays (Names and Marks), what must happen every time Marks are swapped?",
    options: [
      "Nothing — only Marks need sorting",
      "Names must be completely re-entered",
      "Names at the same positions must also be swapped",
      "The Size variable must be updated"
    ],
    answer: 2,
    explanation: "Names and Marks are parallel — Names[i] belongs to Marks[i]. If Marks[j] and Marks[j+1] are swapped, Names[j] and Names[j+1] must also be swapped to keep the data correctly associated."
  },
  {
    q: "How many passes does Bubble Sort need in the WORST case for an array of 8 elements?",
    options: ["8 passes", "7 passes", "4 passes", "16 passes"],
    answer: 1,
    explanation: "Worst case is n-1 passes where n is the number of elements. For 8 elements: 8-1 = 7 passes. Each pass places at least one element in its correct final position."
  },
  {
    q: "What is the correct way to CALL the BubbleSort procedure?",
    options: [
      "BubbleSort(Data, 10)",
      "Result ← BubbleSort(Data, 10)",
      "CALL BubbleSort(Data, 10)",
      "EXECUTE BubbleSort(Data, 10)"
    ],
    answer: 2,
    explanation: "PROCEDUREs are called with the CALL keyword. FUNCTIONs return values and are assigned with ←. BubbleSort is a PROCEDURE so it uses CALL. Never use EXECUTE."
  },
  {
    q: "After Pass 1 of Bubble Sort on [5, 2, 8, 1, 9], where is element 9?",
    options: ["Position 1", "Position 3", "Position 5 (last position)", "Unchanged at position 5"],
    answer: 2,
    explanation: "After each pass, the LARGEST unsorted element bubbles up to its correct final position. 9 is the largest, so after Pass 1 it will be at position 5 (the last position). It was already at position 5 in this case but the algorithm still confirms it's correct."
  },
  {
    q: "In a trace table for Bubble Sort, when should you show 'no swap'?",
    options: [
      "Never — only show swaps",
      "Only on the last pass",
      "Every comparison, even when no swap occurs — show the condition and result",
      "Only when Swapped is FALSE"
    ],
    answer: 2,
    explanation: "In exam trace tables, you must show EVERY comparison, including those that result in no swap. Write something like '5 < 8 → no swap' to show you've checked. Leaving gaps loses marks!"
  },
  {
    q: "What is the time complexity of Bubble Sort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
    answer: 2,
    explanation: "Bubble Sort has O(n²) average and worst case because it has nested loops — the outer loop runs n-1 times and the inner loop runs approximately n/2 times on average. Only the best case (already sorted with Swapped flag) is O(n)."
  },
  {
    q: "If Swapped is still FALSE after a full inner loop pass, what should happen?",
    options: [
      "Continue to the next pass anyway",
      "Reset the array and start again",
      "RETURN — the array is already sorted, no more passes needed",
      "Set Swapped to TRUE and continue"
    ],
    answer: 2,
    explanation: "If no swaps occurred in a complete pass (Swapped remains FALSE), the array is already in the correct order. There's no point doing more passes. We use RETURN to exit the procedure early."
  },
];

export default function D9Quiz() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => selected[i] === q.answer).length
    : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Bubble Sort</h1>
      <p className="text-gray-500 mb-8">12 questions. Think carefully before answering!</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl border-2 text-center ${score >= 10 ? 'bg-green-50 border-green-300' : score >= 7 ? 'bg-amber-50 border-amber-300' : 'bg-red-50 border-red-300'}`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-xl font-bold">{score >= 10 ? '🏆 Excellent! You understand Bubble Sort deeply!' : score >= 7 ? '👍 Good work! Review the ones you missed.' : '📖 Keep revising — focus on BYREF, the swap, and the trace.'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="card">
            <p className="font-bold text-gray-900 mb-4">
              <span className="text-indigo-600 mr-2">Q{i + 1}.</span>{q.q}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, j) => {
                let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300';
                if (submitted) {
                  if (j === q.answer) style = 'bg-green-50 border-green-400 text-green-800';
                  else if (selected[i] === j) style = 'bg-red-50 border-red-400 text-red-800';
                  else style = 'bg-gray-50 border-gray-200 text-gray-400';
                } else if (selected[i] === j) {
                  style = 'bg-indigo-50 border-indigo-400 text-indigo-800';
                }
                return (
                  <button
                    key={j}
                    onClick={() => !submitted && setSelected(prev => ({ ...prev, [i]: j }))}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${style}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3">
                <p className="text-xs font-bold text-blue-700 mb-1">💡 Explanation:</p>
                <p className="text-xs text-blue-600">{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(selected).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          {Object.keys(selected).length < questions.length
            ? `Answer all questions (${Object.keys(selected).length}/${questions.length})`
            : '✅ Submit Answers'}
        </button>
      ) : (
        <button
          onClick={() => { setSelected({}); setSubmitted(false); }}
          className="mt-8 w-full py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all"
        >
          🔄 Try Again
        </button>
      )}
    </div>
  );
}
