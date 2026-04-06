import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const exercises = [
  {
    title: "Exercise 1: Save 5 Student Records",
    desc: "Write pseudocode to save 5 student records (ID, Name, Mark) to a file called 'class.txt'. Each record should be on a separate line in the format: ID,Name,Mark",
    hints: [
      "Declare an array: DECLARE Students : ARRAY[1:5] OF StudentRecord",
      "First input all 5 records using a FOR loop",
      "Then OPENFILE 'class.txt' FOR WRITE",
      "Use another FOR loop with WRITEFILE, joining fields with & and ','",
      "Don't forget NUM_TO_STR() for the integer Mark field, then CLOSEFILE"
    ],
    solution: `TYPE StudentRecord
   DECLARE ID   : STRING
   DECLARE Name : STRING
   DECLARE Mark : INTEGER
ENDTYPE

DECLARE Students : ARRAY[1:5] OF StudentRecord
DECLARE i : INTEGER

// Input records
FOR i ← 1 TO 5
   INPUT Students[i].ID
   INPUT Students[i].Name
   INPUT Students[i].Mark
NEXT i

// Save to file
OPENFILE "class.txt" FOR WRITE
FOR i ← 1 TO 5
   WRITEFILE "class.txt", Students[i].ID & "," & Students[i].Name & "," & NUM_TO_STR(Students[i].Mark)
NEXT i
CLOSEFILE "class.txt"
OUTPUT "Saved successfully"`
  },
  {
    title: "Exercise 2: Read and Display All Records",
    desc: "Write pseudocode to open 'class.txt' and display every line, with a line number before each record.",
    hints: [
      "Declare: DECLARE Line : STRING and DECLARE Count : INTEGER",
      "Set Count ← 0 before the loop",
      "OPENFILE 'class.txt' FOR READ",
      "Use WHILE NOT EOF('class.txt') to loop",
      "Inside loop: READFILE, increment Count, OUTPUT Count & ': ' & Line, then CLOSEFILE"
    ],
    solution: `DECLARE Line : STRING
DECLARE Count : INTEGER
Count ← 0

OPENFILE "class.txt" FOR READ
WHILE NOT EOF("class.txt")
   READFILE "class.txt", Line
   Count ← Count + 1
   OUTPUT Count, ": ", Line
ENDWHILE
CLOSEFILE "class.txt"

OUTPUT "Total records: ", Count`
  },
  {
    title: "Exercise 3: Append a New Record",
    desc: "Write pseudocode to input one new student record and append it to the existing 'class.txt' file without losing any existing data.",
    hints: [
      "Declare a single StudentRecord variable: DECLARE NewStudent : StudentRecord",
      "Input the new student's details",
      "Use OPENFILE 'class.txt' FOR APPEND (NOT FOR WRITE!)",
      "WRITEFILE with the new record joined by commas",
      "CLOSEFILE to save"
    ],
    solution: `DECLARE NewStudent : StudentRecord

OUTPUT "Enter ID: "
INPUT NewStudent.ID
OUTPUT "Enter name: "
INPUT NewStudent.Name
OUTPUT "Enter mark: "
INPUT NewStudent.Mark

OPENFILE "class.txt" FOR APPEND
WRITEFILE "class.txt", NewStudent.ID & "," & NewStudent.Name & "," & NUM_TO_STR(NewStudent.Mark)
CLOSEFILE "class.txt"

OUTPUT "Record appended successfully"`
  },
];

export default function D12Practice() {
  const [hints, setHints] = useState<number[]>([0, 0, 0]);
  const [shown, setShown] = useState<boolean[]>([false, false, false]);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — File Handling</h1>
      <p className="text-gray-500 mb-6">Try each exercise before revealing hints or solutions!</p>
      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="card border-l-4 border-orange-400">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{ex.title}</h3>
            <p className="text-gray-600 mb-4">{ex.desc}</p>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => { const n = [...hints]; n[i] = Math.min(n[i] + 1, ex.hints.length); setHints(n); }}
                className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-semibold text-sm hover:bg-amber-200 transition-colors"
              >
                💡 Hint ({hints[i]}/{ex.hints.length})
              </button>
              <button
                onClick={() => { const n = [...shown]; n[i] = !n[i]; setShown(n); }}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold text-sm hover:bg-green-200 transition-colors"
              >
                {shown[i] ? '🙈 Hide Solution' : '✅ Show Solution'}
              </button>
            </div>
            {hints[i] > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 space-y-1">
                {ex.hints.slice(0, hints[i]).map((h, j) => (
                  <p key={j} className="text-amber-700 text-sm">💡 {h}</p>
                ))}
              </div>
            )}
            {shown[i] && <CodeBlock code={ex.solution} />}
          </div>
        ))}
      </div>
    </div>
  );
}
