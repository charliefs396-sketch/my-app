import { useState } from 'react';

const questions = [
  {
    q: 'How do you declare a 2D array for 5 students and 3 subjects storing integers?',
    options: [
      'DECLARE Marks : ARRAY[5, 3] OF INTEGER',
      'DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER',
      'DECLARE Marks : ARRAY[1:5][1:3] OF INTEGER',
      'DECLARE Marks : ARRAY(5, 3) OF INTEGER',
    ],
    answer: 1,
    explanation: 'Correct syntax is ARRAY[RowStart:RowEnd, ColStart:ColEnd]. Must use colon between bounds, comma between dimensions, no parentheses.',
  },
  {
    q: 'In ARRAY[1:5, 1:3], how many total elements are there?',
    options: ['8', '5', '3', '15'],
    answer: 3,
    explanation: '(5−1+1) × (3−1+1) = 5 × 3 = 15 elements total.',
  },
  {
    q: 'What does Marks[3, 2] access?',
    options: ['Row 2, Column 3', 'Row 3, Column 2', 'The 5th element', 'Row 2 average'],
    answer: 1,
    explanation: 'Always Row first, then Column. Marks[3, 2] = Row 3, Column 2.',
  },
  {
    q: 'Where should "Total ← 0" go when calculating the average per student?',
    options: [
      'Before the outer FOR loop',
      'After the outer FOR loop',
      'Inside the outer loop, before the inner loop',
      'Inside the inner loop',
    ],
    answer: 2,
    explanation: 'Total must be reset for EACH student (each row). It goes inside the outer loop but before the inner loop starts.',
  },
  {
    q: 'Which loop structure processes a 2D array column by column?',
    options: [
      'FOR Row ← 1 TO 5 / FOR Col ← 1 TO 3',
      'FOR Col ← 1 TO 3 / FOR Row ← 1 TO 5',
      'FOR i ← 1 TO 15',
      'WHILE Row <= 5',
    ],
    answer: 1,
    explanation: 'To process column by column, Col is the OUTER loop and Row is the INNER loop.',
  },
  {
    q: 'What is wrong with: FOR Row ← 1 TO 5 / FOR Col ← 1 TO 3 / NEXT Row / NEXT Col?',
    options: [
      'Nothing is wrong',
      'The bounds are incorrect',
      'NEXT Row and NEXT Col are swapped — inner NEXT must come first',
      'Should use WHILE not FOR',
    ],
    answer: 2,
    explanation: 'NEXT must match the closest FOR. The inner FOR Col must be closed with NEXT Col before NEXT Row closes the outer FOR Row.',
  },
  {
    q: 'How do you initialise Max when finding the largest value in row 3?',
    options: [
      'Max ← 0',
      'Max ← Marks[1, 1]',
      'Max ← Marks[3, 1]',
      'Max ← Marks[Row, Col]',
    ],
    answer: 2,
    explanation: 'Initialise Max with the first element of THAT row: Marks[3, 1]. This is the "assume first is max" pattern applied to a specific row.',
  },
  {
    q: 'A 2D array ARRAY[1:4, 1:4] — how many elements in each row?',
    options: ['4', '8', '16', '1'],
    answer: 0,
    explanation: 'Each row has 4 elements (columns 1 to 4). Total elements = 4×4 = 16.',
  },
  {
    q: 'To find the highest overall student mark, what extra variable do you need beyond MaxTotal?',
    options: ['MaxCol', 'MaxRow', 'MaxName only', 'Nothing extra'],
    answer: 1,
    explanation: 'You need MaxRow to remember WHICH row (student) had the highest total, so you can look up their name using Names[MaxRow].',
  },
  {
    q: 'Which is correct for processing a 5×3 array — subject averages?',
    options: [
      'FOR Row ← 1 TO 5 outer, Total ← Total + Marks[Row, Col]',
      'FOR Col ← 1 TO 3 outer, Total ← Total + Marks[Row, Col], divide by 5',
      'FOR Col ← 1 TO 3 outer, divide by 3',
      'Single loop FOR i ← 1 TO 15',
    ],
    answer: 1,
    explanation: 'Subject averages need Col as outer loop. For each subject (col), sum all 5 students (rows) and divide by 5.',
  },
  {
    q: 'Cambridge A Level pseudocode arrays start at index:',
    options: ['0', '1', '-1', 'Depends on declaration'],
    answer: 3,
    explanation: 'It depends on the declaration! If you declare ARRAY[1:5, 1:3], it starts at 1. If ARRAY[0:4, 0:2], it starts at 0. Cambridge convention is to start at 1.',
  },
  {
    q: 'What output does "OUTPUT Marks[2, 3]" produce if Sara\'s CS mark is 95?',
    options: ['78', '88', '95', 'Error'],
    answer: 2,
    explanation: 'Sara is Row 2, CS is Column 3. So Marks[2, 3] = 95.',
  },
];

export default function D7Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.answer).length
    : 0;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        🧠 Quiz — 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">12 questions — test your 2D array knowledge!</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl text-center ${score >= 10 ? 'bg-green-50 border-2 border-green-300' : score >= 7 ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-red-50 border-2 border-red-300'}`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-xl font-bold">{score >= 10 ? '🎉 Excellent! You\'ve mastered 2D Arrays!' : score >= 7 ? '👍 Good effort! Review the ones you missed.' : '📖 Review the 2D Arrays sections and try again!'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`card border-l-4 ${submitted ? answers[i] === q.answer ? 'border-green-400' : 'border-red-400' : 'border-orange-400'}`}>
            <p className="font-bold text-gray-800 mb-4">
              <span className="text-orange-500 mr-2">Q{i + 1}.</span>{q.q}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, j) => {
                let style = 'border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-orange-50 cursor-pointer';
                if (answers[i] === j) style = 'border-orange-400 bg-orange-50';
                if (submitted) {
                  if (j === q.answer) style = 'border-green-400 bg-green-50 cursor-default';
                  else if (answers[i] === j) style = 'border-red-400 bg-red-50 cursor-default';
                  else style = 'border-gray-200 bg-gray-50 opacity-50 cursor-default';
                }
                return (
                  <button
                    key={j}
                    disabled={submitted}
                    onClick={() => !submitted && setAnswers(prev => ({ ...prev, [i]: j }))}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${style}`}
                  >
                    <span className="font-bold mr-2">{['A', 'B', 'C', 'D'][j]}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm"><strong>💡 Explanation:</strong> {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="mt-8 w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit Quiz ({Object.keys(answers).length}/{questions.length} answered)
        </button>
      )}

      {submitted && (
        <button
          onClick={() => { setAnswers({}); setSubmitted(false); }}
          className="mt-4 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl transition-all"
        >
          🔄 Retry Quiz
        </button>
      )}
    </div>
  );
}
