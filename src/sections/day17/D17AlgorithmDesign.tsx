import CodeBlock from '../../components/CodeBlock';

export default function D17AlgorithmDesign() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">🏗️ Algorithm Design</h2>
      <p className="text-gray-500 mb-6">Converting your stepwise refinement into complete, working pseudocode</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-indigo-800 mb-2">📖 The Full Design Process</h3>
        <div className="flex items-center gap-2 flex-wrap text-sm">
          {['Read the Problem', '→', 'Identify Identifiers', '→', 'Write Level 1', '→', 'Refine to Level 2', '→', 'Write Pseudocode', '→', 'Trace & Check'].map((step, i) => (
            <span key={i} className={step === '→' ? 'text-gray-400 font-bold' : 'bg-indigo-100 text-indigo-800 px-2 py-1 rounded font-semibold'}>
              {step}
            </span>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🎯 Complete Worked Example — Library System</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-blue-400">
          <p className="font-semibold text-gray-700 mb-1">The Problem:</p>
          <p className="text-gray-600 text-sm">Design a library system that stores up to 50 books (title, author, ISBN, available). The system should allow: search by title, borrow a book (mark unavailable), return a book (mark available), and display all available books.</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-blue-700 mb-2">Step 1: Identifier Table</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead><tr className="bg-blue-600 text-white"><th className="p-2 text-left">Identifier</th><th className="p-2 text-left">Data Type</th><th className="p-2 text-left">Description</th></tr></thead>
              <tbody>
                {[
                  ['MAXBOOKS', 'INTEGER (CONSTANT)', 'Maximum number of books = 50'],
                  ['Titles', 'ARRAY[1:50] OF STRING', 'Stores title of each book'],
                  ['Authors', 'ARRAY[1:50] OF STRING', 'Stores author name for each book'],
                  ['ISBNs', 'ARRAY[1:50] OF STRING', 'Stores ISBN number for each book'],
                  ['Available', 'ARRAY[1:50] OF BOOLEAN', 'TRUE if book available, FALSE if borrowed'],
                  ['BookCount', 'INTEGER', 'Number of books currently stored'],
                  ['SearchTitle', 'STRING', 'Title entered by user to search for'],
                  ['Found', 'BOOLEAN', 'TRUE if search found a matching book'],
                  ['Position', 'INTEGER', 'Array index of found book (-1 if not found)'],
                  ['i', 'INTEGER', 'Loop counter / array index'],
                  ['Choice', 'INTEGER', 'Menu option chosen by user (1-4)'],
                ].map(([id, type, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 font-mono text-blue-700 font-semibold">{id}</td>
                    <td className="p-2 text-pink-600">{type}</td>
                    <td className="p-2 text-gray-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-purple-700 mb-2">Step 2: Stepwise Refinement</p>
          <CodeBlock language="pseudocode" code={`1. Initialise system
   1.1 Set BookCount to 0
   1.2 Load any existing books into arrays

2. Main menu loop
   2.1 Display menu options (Search, Borrow, Return, Display All, Quit)
   2.2 Input user choice
   2.3 Validate choice is 1-5
   2.4 Call appropriate procedure based on choice
   2.5 Repeat until user chooses Quit

3. Search procedure
   3.1 Input title to search for
   3.2 Compare with each book title in array
   3.3 If found, display book details and availability
   3.4 If not found, display "Not found" message

4. Borrow procedure
   4.1 Search for the book (use step 3)
   4.2 If found AND available, set Available[i] to FALSE
   4.3 If found AND not available, display "Book already borrowed"
   4.4 If not found, display "Book not in system"

5. Return procedure
   5.1 Search for the book
   5.2 If found, set Available[i] to TRUE
   5.3 Display "Book returned successfully"`} />
        </div>

        <div>
          <p className="font-semibold text-green-700 mb-2">Step 3: Full Pseudocode</p>
          <CodeBlock language="pseudocode" code={`CONSTANT MAXBOOKS = 50
DECLARE Titles : ARRAY[1:MAXBOOKS] OF STRING
DECLARE Authors : ARRAY[1:MAXBOOKS] OF STRING
DECLARE ISBNs : ARRAY[1:MAXBOOKS] OF STRING
DECLARE Available : ARRAY[1:MAXBOOKS] OF BOOLEAN
DECLARE BookCount : INTEGER
DECLARE Choice : INTEGER
DECLARE SearchTitle : STRING
DECLARE Found : BOOLEAN
DECLARE Position : INTEGER
DECLARE i : INTEGER

// Initialise
BookCount <- 0

// Main menu loop
REPEAT
   OUTPUT "1. Search  2. Borrow  3. Return  4. Display All  5. Quit"
   INPUT Choice

   CASE OF Choice
      1 : CALL SearchBook()
      2 : CALL BorrowBook()
      3 : CALL ReturnBook()
      4 : CALL DisplayAll()
      5 : OUTPUT "Goodbye!"
      OTHERWISE : OUTPUT "Invalid choice"
   ENDCASE

UNTIL Choice = 5

// Search procedure
PROCEDURE SearchBook()
   OUTPUT "Enter title to search: "
   INPUT SearchTitle
   Found <- FALSE
   FOR i <- 1 TO BookCount
      IF Titles[i] = SearchTitle
         THEN
            Found <- TRUE
            Position <- i
      ENDIF
   NEXT i
   IF Found
      THEN
         OUTPUT "Found: ", Titles[Position], " by ", Authors[Position]
         IF Available[Position]
            THEN OUTPUT "Status: Available"
            ELSE OUTPUT "Status: Borrowed"
         ENDIF
      ELSE
         OUTPUT "Book not found"
   ENDIF
ENDPROCEDURE`} />
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="font-bold text-green-800 mb-3">💡 Algorithm Design Tips for Full Marks</h3>
        <div className="space-y-2 text-green-700 text-sm">
          <div className="flex items-start gap-2"><span>🏆</span><span>Always write the <strong>identifier table first</strong> — it forces you to think before coding</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>Use <strong>PROCEDURE and FUNCTION</strong> for separate tasks — examiners love modular design</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>Always include <strong>input validation</strong> — marks are specifically awarded for this</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>Use <strong>BOOLEAN flags</strong> (Found, Valid) for search and validation results</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>DECLARE every variable — missing declarations lose marks in Paper 2</span></div>
        </div>
      </div>
    </div>
  );
}
