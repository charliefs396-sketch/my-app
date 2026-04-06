export default function D7ExamFAQ() {
  const faqs = [
    {
      q: 'Why do we need TWO loops for a 2D array?',
      a: 'Because a 2D array has two dimensions — rows and columns. The outer loop goes through each row one by one. For EACH row, the inner loop goes through every column. Without the inner loop, you could only process the first column of each row.',
      code: `FOR Row ← 1 TO 5          // Outer loop: each student
   FOR Col ← 1 TO 3       // Inner loop: each subject
      OUTPUT Marks[Row, Col]
   NEXT Col
NEXT Row`,
      tag: 'Fundamental',
      tagColor: 'bg-blue-100 text-blue-700',
    },
    {
      q: 'Does Row come first or Col first in ARRAY[1:5, 1:3]?',
      a: 'ROW always comes first! The format is ARRAY[RowStart:RowEnd, ColStart:ColEnd]. So ARRAY[1:5, 1:3] means 5 rows, 3 columns. When accessing: Marks[Row, Col] — always Row, then Col.',
      code: `// Declaration: rows first, cols second
DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
//                      ^rows  ^cols

// Access: row first, col second
OUTPUT Marks[3, 2]   // Row 3, Col 2 (John's Physics)`,
      tag: 'Most Common Mistake',
      tagColor: 'bg-red-100 text-red-700',
    },
    {
      q: 'Why must I reset Total inside the outer loop?',
      a: 'If you reset Total OUTSIDE the outer loop, it only resets once before the loop starts. Then each student\'s marks are added to the running total from the previous student, giving wrong answers. Reset inside = fresh start for each student.',
      code: `// WRONG - Total only reset once
Total ← 0
FOR Row ← 1 TO 5
   FOR Col ← 1 TO 3
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT Total / 3   // Will be WRONG after Row 1!
NEXT Row

// CORRECT - Total reset for each student
FOR Row ← 1 TO 5
   Total ← 0         // Reset HERE, inside outer loop
   FOR Col ← 1 TO 3
      Total ← Total + Marks[Row, Col]
   NEXT Col
   OUTPUT Total / 3   // Always correct
NEXT Row`,
      tag: 'Exam Trap',
      tagColor: 'bg-orange-100 text-orange-700',
    },
    {
      q: 'How do I swap rows and columns to process by column?',
      a: 'Simply make Col the OUTER loop and Row the INNER loop. The code inside stays exactly the same — Marks[Row, Col] — you\'re just changing the ORDER of traversal.',
      code: `// Row-by-row: "one student at a time"
FOR Row ← 1 TO 5          // Outer = Row
   FOR Col ← 1 TO 3       // Inner = Col
      ...
   NEXT Col
NEXT Row

// Column-by-column: "one subject at a time"
FOR Col ← 1 TO 3          // Outer = Col
   FOR Row ← 1 TO 5       // Inner = Row
      ...
   NEXT Row
NEXT Col`,
      tag: 'Key Pattern',
      tagColor: 'bg-purple-100 text-purple-700',
    },
    {
      q: 'Do I need to declare Row and Col separately?',
      a: 'YES! At A Level, every variable must be declared with DECLARE and a data type. Even loop counter variables like Row and Col must be declared as INTEGER. Forgetting this loses marks.',
      code: `// Must declare ALL variables including loop counters!
DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Row : INTEGER      // Don't forget these!
DECLARE Col : INTEGER      // Don't forget these!
DECLARE Total : INTEGER
DECLARE Average : REAL`,
      tag: 'Mark Scheme',
      tagColor: 'bg-green-100 text-green-700',
    },
    {
      q: 'What is the difference between ARRAY[1:5] and ARRAY[1:5, 1:3]?',
      a: 'ARRAY[1:5] is 1D — just 5 elements in a single row/list. ARRAY[1:5, 1:3] is 2D — 5 rows AND 3 columns, giving 15 total elements. You access 1D with one index (Names[3]) and 2D with two indices (Marks[3, 2]).',
      code: `// 1D Array - one index
DECLARE Names : ARRAY[1:5] OF STRING
OUTPUT Names[3]             // Third name

// 2D Array - two indices
DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER
OUTPUT Marks[3, 2]          // Row 3, Column 2`,
      tag: '1D vs 2D',
      tagColor: 'bg-teal-100 text-teal-700',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">The questions students always get wrong in exams — answered clearly</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-orange-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl font-black text-orange-300 leading-none">Q{i + 1}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${faq.tagColor}`}>{faq.tag}</span>
                </div>
                <p className="font-bold text-gray-800 text-lg">{faq.q}</p>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
              <p className="text-orange-800 leading-relaxed text-sm">{faq.a}</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-200 leading-relaxed whitespace-pre">{faq.code}</pre>
            </div>
          </div>
        ))}
      </div>

      {/* Key Points Box */}
      <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">🎯 Quick Reference — Key Points</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'ARRAY[RowStart:RowEnd, ColStart:ColEnd]',
            'Row comes FIRST in both declaration and access',
            'Starts at index 1, not 0 (Cambridge standard)',
            'Need TWO loops — one for Row, one for Col',
            'NEXT must match its FOR (inner NEXT Col, outer NEXT Row)',
            'Reset Total INSIDE the outer loop',
            'Swap outer/inner loops to process by column',
            'Declare Row, Col, Total as INTEGER — always!',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2 bg-white/10 rounded-lg p-2">
              <span className="text-orange-200 font-bold text-sm mt-0.5">✓</span>
              <span className="text-sm text-white/90">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
