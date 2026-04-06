import { useState } from 'react';

const questions = [
  { q: "Why does the outer FOR loop start at i = 2?", options: ["Position 1 doesn't exist", "Position 1 is already considered sorted", "The algorithm needs two elements to compare", "BYREF requires starting at 2"], answer: 1, explanation: "Position 1 is trivially sorted — a single element needs no sorting. We start inserting from position 2 onwards." },
  { q: "What does the Key variable store?", options: ["The largest element found so far", "The element being inserted into the sorted portion", "A temporary swap value", "The current loop counter"], answer: 1, explanation: "Key saves Data[i] before shifting begins. Since shifting will overwrite Data[i], Key preserves the value we need to insert." },
  { q: "What does the line 'Data[j + 1] ← Data[j]' do?", options: ["Swaps two elements", "Shifts an element one position to the RIGHT", "Shifts an element one position to the left", "Inserts Key into position j+1"], answer: 1, explanation: "This copies the value at position j to position j+1, effectively shifting it right by one. This creates a 'gap' where Key will eventually go." },
  { q: "After the WHILE loop exits, Key is inserted at position:", options: ["j", "j + 1", "j - 1", "i"], answer: 1, explanation: "When the WHILE exits, j has gone one step past the correct position. j+1 is where Key belongs — either the gap left by shifting, or position 1 if j reached 0." },
  { q: "The WHILE condition is 'j > 0 AND Data[j] > Key'. What does 'j > 0' prevent?", options: ["Infinite loops", "Comparing Key to itself", "Going off the left edge of the array", "Sorting already-sorted data"], answer: 2, explanation: "j > 0 ensures we don't try to access Data[0] which doesn't exist (arrays are 1-indexed). When j=0, we've reached the start and Key goes at position 1." },
  { q: "How do you modify Insertion Sort to sort in DESCENDING order?", options: ["Change FOR i ← 2 TO Size to FOR i ← Size TO 2", "Change Data[j] > Key to Data[j] < Key", "Change Data[j+1] ← Data[j] to Data[j] ← Data[j+1]", "Change Data[j+1] ← Key to Data[j] ← Key"], answer: 1, explanation: "Changing > to < in the WHILE condition means we now shift elements that are SMALLER than Key to the right, resulting in descending order. Only this one character changes!" },
  { q: "Why must BYREF be used instead of BYVAL?", options: ["BYVAL is too slow for sorting", "BYREF allows the original array to be modified", "BYVAL doesn't work with INTEGER arrays", "BYREF is required for all procedures"], answer: 1, explanation: "BYVAL would create a copy, sort the copy, and discard it — the original array would remain unsorted. BYREF passes the memory address so changes affect the original." },
  { q: "What is the best-case time complexity of Insertion Sort?", options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"], answer: 1, explanation: "Best case is O(n) when the array is already sorted. The WHILE loop never executes (Data[j] is never > Key), so only the outer FOR loop runs n-1 times." },
  { q: "In the WHILE condition 'j > 0 AND Data[j] > Key', what happens when Data[j] <= Key?", options: ["The loop continues", "The loop exits — Key belongs at position j+1", "Key is discarded", "j is incremented"], answer: 1, explanation: "When Data[j] <= Key, the element at j is NOT bigger than Key, meaning Key is in the right position. The loop exits and Key is inserted at j+1." },
  { q: "When sorting parallel arrays (Marks and Names), what extra variable is needed?", options: ["An extra counter variable", "A KeyName (STRING) variable to save the name", "An extra BYVAL parameter", "A temporary swap integer"], answer: 1, explanation: "Just like Key saves the mark, KeyName saves the corresponding name. Both must be saved before shifting begins, and both must be inserted in the same position at the end." },
  { q: "Trace: array is [3,1,2]. After i=2 (Pass 1), what is the array?", options: ["[1,3,2]", "[3,1,2]", "[1,2,3]", "[3,2,1]"], answer: 0, explanation: "Key=Data[2]=1, j=1. Data[1]=3 > 1? Yes → Data[2]←3, j=0. Exit. Data[1]←1. Array: [1,3,2]" },
  { q: "What is the worst-case scenario for Insertion Sort?", options: ["All elements are equal", "Array is already sorted", "Array is sorted in reverse order", "Array has only one element"], answer: 2, explanation: "Reverse sorted is worst case O(n²). Every element must shift past ALL previous elements. e.g., [5,4,3,2,1]: Pass1=1 shift, Pass2=2 shifts, Pass3=3 shifts, Pass4=4 shifts = 10 total." },
];

export default function D27Quiz() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? questions.filter((q, i) => selected[i] === q.answer).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Quiz — Insertion Sort</h2>
      <p className="text-gray-500 mb-8">12 questions covering algorithm, trace tables, variations, and exam skills</p>

      {submitted && (
        <div className={`rounded-2xl p-6 mb-8 text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <p className="text-5xl font-black mb-2">{score}/12</p>
          <p className="text-lg font-bold">{score >= 10 ? '🎉 Excellent! You really understand Insertion Sort!' : score >= 7 ? '👍 Good effort! Review the questions you missed.' : '📚 Keep practising — trace through the algorithm by hand!'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((question, qi) => (
          <div key={qi} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="font-bold text-gray-900 mb-4">Q{qi + 1}. {question.q}</p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {question.options.map((opt, oi) => {
                let style = 'border-gray-200 bg-gray-50 text-gray-700 hover:border-fuchsia-400 hover:bg-fuchsia-50';
                if (selected[qi] === oi) style = 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-900';
                if (submitted) {
                  if (oi === question.answer) style = 'border-green-500 bg-green-50 text-green-900 font-bold';
                  else if (selected[qi] === oi) style = 'border-red-400 bg-red-50 text-red-700 line-through';
                  else style = 'border-gray-200 bg-gray-50 text-gray-400';
                }
                return (
                  <button key={oi} disabled={submitted} onClick={() => setSelected(prev => ({ ...prev, [qi]: oi }))}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${style}`}>
                    <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                <p className="text-sm text-blue-800"><span className="font-bold">Explanation: </span>{question.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button onClick={() => setSubmitted(true)} disabled={Object.keys(selected).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
          {Object.keys(selected).length < questions.length ? `Answer all questions (${Object.keys(selected).length}/${questions.length})` : '🎯 Submit Quiz'}
        </button>
      )}
    </div>
  );
}
