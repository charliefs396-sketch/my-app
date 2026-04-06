import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D17Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-500 mb-6">Design complete algorithms with identifier tables and stepwise refinement</p>

      {/* Exercise 1 */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <div>
            <h3 className="font-bold text-gray-800">Library Book System</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">Medium</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-gray-700 text-sm">Design a system to store up to 20 library books. Each book has a title, author, and whether it's available. The system should: input all book details, search for a book by title, display all available books, and allow borrowing (mark as unavailable).</p>
          <p className="text-gray-500 text-xs mt-2">Create: Identifier table, Level 1 & 2 refinement, full pseudocode</p>
        </div>
        {['Identifier Table', 'Stepwise Refinement', 'Full Solution'].map((hint, i) => (
          <div key={i} className="mb-2">
            <button onClick={() => toggle(`e1h${i}`)} className="text-blue-600 text-sm font-semibold hover:underline">
              {revealed[`e1h${i}`] ? '▼' : '▶'} Show {hint}
            </button>
            {revealed[`e1h${i}`] && (
              <div className="mt-2">
                {i === 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                      <thead><tr className="bg-blue-600 text-white"><th className="p-2 text-left">Identifier</th><th className="p-2 text-left">Data Type</th><th className="p-2 text-left">Description</th></tr></thead>
                      <tbody>
                        {[
                          ['MAXBOOKS','INTEGER (CONSTANT)','Maximum number of books = 20'],
                          ['Titles','ARRAY[1:20] OF STRING','Stores the title of each book'],
                          ['Authors','ARRAY[1:20] OF STRING','Stores the author of each book'],
                          ['Available','ARRAY[1:20] OF BOOLEAN','TRUE if book available, FALSE if borrowed'],
                          ['BookCount','INTEGER','Number of books stored in the system'],
                          ['SearchTitle','STRING','Title entered by user to search for'],
                          ['Found','BOOLEAN','TRUE if book found, FALSE otherwise'],
                          ['i','INTEGER','Loop counter / array index'],
                          ['Choice','INTEGER','Menu option selected by user (1-4)'],
                        ].map(([id,type,desc],j) => (
                          <tr key={j} className={j%2===0?'bg-white':'bg-gray-50'}>
                            <td className="p-2 font-mono text-blue-700 font-semibold">{id}</td>
                            <td className="p-2 text-pink-600">{type}</td>
                            <td className="p-2 text-gray-600">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {i === 1 && (
                  <CodeBlock language="pseudocode" code={`1. Input all book data
   1.1 FOR each of 20 books
      1.1.1 Input book title
      1.1.2 Input book author
      1.1.3 Set book as available

2. Main menu
   2.1 Display options (Search, Display Available, Borrow, Quit)
   2.2 Input choice and validate
   2.3 Perform chosen action
   2.4 Repeat until Quit

3. Search for book
   3.1 Input title to search
   3.2 Compare with each stored title
   3.3 Display result (found/not found) and availability

4. Display available books
   4.1 FOR each book, IF Available THEN display title and author

5. Borrow book
   5.1 Search for book
   5.2 IF found AND available THEN mark as unavailable
   5.3 ELSE display appropriate message`} />
                )}
                {i === 2 && (
                  <CodeBlock language="pseudocode" code={`CONSTANT MAXBOOKS = 20
DECLARE Titles : ARRAY[1:MAXBOOKS] OF STRING
DECLARE Authors : ARRAY[1:MAXBOOKS] OF STRING
DECLARE Available : ARRAY[1:MAXBOOKS] OF BOOLEAN
DECLARE BookCount, i, Choice : INTEGER
DECLARE SearchTitle : STRING
DECLARE Found : BOOLEAN

// Input all books
FOR i <- 1 TO MAXBOOKS
   OUTPUT "Enter title: "
   INPUT Titles[i]
   OUTPUT "Enter author: "
   INPUT Authors[i]
   Available[i] <- TRUE
NEXT i
BookCount <- MAXBOOKS

// Main menu
REPEAT
   OUTPUT "1-Search  2-Available  3-Borrow  4-Quit"
   INPUT Choice
   CASE OF Choice
      1 : OUTPUT "Search title: "
          INPUT SearchTitle
          Found <- FALSE
          FOR i <- 1 TO BookCount
             IF Titles[i] = SearchTitle
                THEN
                   Found <- TRUE
                   OUTPUT Authors[i]
                   IF Available[i]
                      THEN OUTPUT "Available"
                      ELSE OUTPUT "Borrowed"
                   ENDIF
             ENDIF
          NEXT i
          IF NOT Found THEN OUTPUT "Not found" ENDIF
      2 : FOR i <- 1 TO BookCount
             IF Available[i]
                THEN OUTPUT Titles[i], " - ", Authors[i]
             ENDIF
          NEXT i
      3 : OUTPUT "Borrow title: "
          INPUT SearchTitle
          Found <- FALSE
          FOR i <- 1 TO BookCount
             IF Titles[i] = SearchTitle
                THEN
                   Found <- TRUE
                   IF Available[i]
                      THEN
                         Available[i] <- FALSE
                         OUTPUT "Borrowed successfully"
                      ELSE
                         OUTPUT "Already borrowed"
                   ENDIF
             ENDIF
          NEXT i
          IF NOT Found THEN OUTPUT "Not found" ENDIF
      OTHERWISE : OUTPUT "Invalid"
   ENDCASE
UNTIL Choice = 4`} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Exercise 2 */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <div>
            <h3 className="font-bold text-gray-800">Student Grade System</h3>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-semibold">Hard</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-gray-700 text-sm">Design a system for a class of 30 students. Store names and 3 subject marks each. Calculate each student's average. Find the top student overall. Output all students who passed (average &gt;= 50). Create identifier table and stepwise refinement first.</p>
        </div>
        {['Identifier Table', 'Full Solution'].map((hint, i) => (
          <div key={i} className="mb-2">
            <button onClick={() => toggle(`e2h${i}`)} className="text-purple-600 text-sm font-semibold hover:underline">
              {revealed[`e2h${i}`] ? '▼' : '▶'} Show {hint}
            </button>
            {revealed[`e2h${i}`] && (
              <div className="mt-2">
                {i === 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                      <thead><tr className="bg-purple-600 text-white"><th className="p-2 text-left">Identifier</th><th className="p-2 text-left">Data Type</th><th className="p-2 text-left">Description</th></tr></thead>
                      <tbody>
                        {[
                          ['STUDENTS','INTEGER (CONSTANT)','Number of students = 30'],
                          ['SUBJECTS','INTEGER (CONSTANT)','Number of subjects = 3'],
                          ['Names','ARRAY[1:30] OF STRING','Student names'],
                          ['Marks','ARRAY[1:30, 1:3] OF INTEGER','Marks for each student in each subject'],
                          ['Averages','ARRAY[1:30] OF REAL','Average mark for each student'],
                          ['i, j','INTEGER','Loop counters'],
                          ['Total','INTEGER','Sum of marks for one student'],
                          ['TopStudent','INTEGER','Index of student with highest average'],
                          ['TopAvg','REAL','Highest average found so far'],
                        ].map(([id,type,desc],j) => (
                          <tr key={j} className={j%2===0?'bg-white':'bg-gray-50'}>
                            <td className="p-2 font-mono text-purple-700 font-semibold">{id}</td>
                            <td className="p-2 text-pink-600">{type}</td>
                            <td className="p-2 text-gray-600">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {i === 1 && (
                  <CodeBlock language="pseudocode" code={`CONSTANT STUDENTS = 30
CONSTANT SUBJECTS = 3
DECLARE Names : ARRAY[1:STUDENTS] OF STRING
DECLARE Marks : ARRAY[1:STUDENTS, 1:SUBJECTS] OF INTEGER
DECLARE Averages : ARRAY[1:STUDENTS] OF REAL
DECLARE i, j, Total, TopStudent : INTEGER
DECLARE TopAvg : REAL

// Input data
FOR i <- 1 TO STUDENTS
   OUTPUT "Enter name: "
   INPUT Names[i]
   FOR j <- 1 TO SUBJECTS
      REPEAT
         OUTPUT "Enter mark for subject ", j, ": "
         INPUT Marks[i, j]
      UNTIL Marks[i, j] >= 0 AND Marks[i, j] <= 100
   NEXT j
NEXT i

// Calculate averages
FOR i <- 1 TO STUDENTS
   Total <- 0
   FOR j <- 1 TO SUBJECTS
      Total <- Total + Marks[i, j]
   NEXT j
   Averages[i] <- Total / SUBJECTS
NEXT i

// Find top student
TopAvg <- Averages[1]
TopStudent <- 1
FOR i <- 2 TO STUDENTS
   IF Averages[i] > TopAvg
      THEN
         TopAvg <- Averages[i]
         TopStudent <- i
   ENDIF
NEXT i
OUTPUT "Top student: ", Names[TopStudent], " (", TopAvg, ")"

// Output students who passed
OUTPUT "Students who passed:"
FOR i <- 1 TO STUDENTS
   IF Averages[i] >= 50
      THEN OUTPUT Names[i], " - ", Averages[i]
   ENDIF
NEXT i`} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">🌟 Bonus Challenge</h3>
        <p className="text-amber-700 text-sm">Design a shopping system: store 10 products (name, price, quantity). Allow user to add to basket, calculate total, apply 10% discount if total &gt; 50. Write the full identifier table, Level 1 and 2 refinement, and complete pseudocode.</p>
      </div>
    </div>
  );
}
