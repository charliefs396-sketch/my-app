import CodeBlock from '../../components/CodeBlock';

export default function D29MixedQuestions() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🎯 Mixed Challenge Questions</h2>
      <p className="text-gray-500 mb-6">Multi-topic questions that combine several days together — just like the real exam!</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="font-bold text-blue-800">💡 Exam Tip: Paper 2 questions ALWAYS combine multiple topics. Practice spotting which topics are being tested!</p>
      </div>

      {/* Q1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-black text-red-700">Q1</div>
          <div>
            <p className="font-bold text-gray-800">Student Grade System</p>
            <p className="text-xs text-gray-500">Topics: Arrays + Loops + IF + Functions + File Handling</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">Write a complete program that: inputs marks for 5 students into an array, calculates and stores each grade (A=80+, B=60+, C=40+, F=below 40), outputs a summary showing how many got each grade, saves all names and grades to "results.txt".</p>
        <details>
          <summary className="cursor-pointer text-indigo-600 font-semibold text-sm mb-2">👁️ Show Solution</summary>
          <div className="mt-3">
            <CodeBlock language="pseudocode" code={`DECLARE Marks : ARRAY[1:5] OF INTEGER
DECLARE Names : ARRAY[1:5] OF STRING
DECLARE Grades : ARRAY[1:5] OF CHAR
DECLARE i, CountA, CountB, CountC, CountF : INTEGER

CountA ← 0
CountB ← 0
CountC ← 0
CountF ← 0

FOR i ← 1 TO 5
   INPUT Names[i]
   INPUT Marks[i]
NEXT i

FOR i ← 1 TO 5
   IF Marks[i] >= 80
      THEN Grades[i] ← 'A'
      ELSE IF Marks[i] >= 60
              THEN Grades[i] ← 'B'
              ELSE IF Marks[i] >= 40
                      THEN Grades[i] ← 'C'
                      ELSE Grades[i] ← 'F'
                   ENDIF
           ENDIF
   ENDIF
   CASE OF Grades[i]
      'A' : CountA ← CountA + 1
      'B' : CountB ← CountB + 1
      'C' : CountC ← CountC + 1
      'F' : CountF ← CountF + 1
   ENDCASE
NEXT i

OUTPUT "A: ", CountA, " B: ", CountB, " C: ", CountC, " F: ", CountF

OPENFILE "results.txt" FOR WRITE
FOR i ← 1 TO 5
   WRITEFILE "results.txt", Names[i] & "," & Grades[i]
NEXT i
CLOSEFILE "results.txt"`} />
          </div>
        </details>
      </div>

      {/* Q2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-black text-orange-700">Q2</div>
          <div>
            <p className="font-bold text-gray-800">Password Validator with Stack</p>
            <p className="text-xs text-gray-500">Topics: Strings + Stack + Loops + Boolean</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">Write pseudocode to validate a password. It must: be at least 8 characters long, contain at least one uppercase letter, contain at least one digit. Use string manipulation to check character by character. Output all rule violations.</p>
        <details>
          <summary className="cursor-pointer text-indigo-600 font-semibold text-sm mb-2">👁️ Show Solution</summary>
          <div className="mt-3">
            <CodeBlock language="pseudocode" code={`DECLARE Password : STRING
DECLARE i : INTEGER
DECLARE HasUpper, HasDigit : BOOLEAN
DECLARE CurrentChar : CHAR
DECLARE Valid : BOOLEAN

INPUT Password
HasUpper ← FALSE
HasDigit ← FALSE
Valid ← TRUE

IF LENGTH(Password) < 8
   THEN
      OUTPUT "Error: Password must be at least 8 characters"
      Valid ← FALSE
ENDIF

FOR i ← 1 TO LENGTH(Password)
   CurrentChar ← MID(Password, i, 1)
   IF ASC(CurrentChar) >= 65 AND ASC(CurrentChar) <= 90
      THEN HasUpper ← TRUE
   ENDIF
   IF ASC(CurrentChar) >= 48 AND ASC(CurrentChar) <= 57
      THEN HasDigit ← TRUE
   ENDIF
NEXT i

IF NOT HasUpper
   THEN
      OUTPUT "Error: Must contain uppercase letter"
      Valid ← FALSE
ENDIF

IF NOT HasDigit
   THEN
      OUTPUT "Error: Must contain a digit"
      Valid ← FALSE
ENDIF

IF Valid
   THEN OUTPUT "Password is valid!"
ENDIF`} />
          </div>
        </details>
      </div>

      {/* Q3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-black text-green-700">Q3</div>
          <div>
            <p className="font-bold text-gray-800">Sort and Search</p>
            <p className="text-xs text-gray-500">Topics: Insertion Sort + Binary Search + Procedures + Functions</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">Write a program that: inputs 8 integers, sorts them using Insertion Sort (ascending), then uses Binary Search to find a user-entered target, outputs whether found and at what position.</p>
        <details>
          <summary className="cursor-pointer text-indigo-600 font-semibold text-sm mb-2">👁️ Show Solution</summary>
          <div className="mt-3">
            <CodeBlock language="pseudocode" code={`PROCEDURE InsertionSort(BYREF Data : ARRAY, Size : INTEGER)
   DECLARE i, j, Key : INTEGER
   FOR i ← 2 TO Size
      Key ← Data[i]
      j ← i - 1
      WHILE j > 0 AND Data[j] > Key
         Data[j + 1] ← Data[j]
         j ← j - 1
      ENDWHILE
      Data[j + 1] ← Key
   NEXT i
ENDPROCEDURE

FUNCTION BinarySearch(Data : ARRAY, Size : INTEGER, Target : INTEGER) RETURNS INTEGER
   DECLARE Low, High, Mid : INTEGER
   Low ← 1
   High ← Size
   WHILE Low <= High
      Mid ← (Low + High) DIV 2
      IF Data[Mid] = Target
         THEN RETURN Mid
         ELSE IF Data[Mid] < Target
                 THEN Low ← Mid + 1
                 ELSE High ← Mid - 1
              ENDIF
      ENDIF
   ENDWHILE
   RETURN -1
ENDFUNCTION

DECLARE Numbers : ARRAY[1:8] OF INTEGER
DECLARE i, Target, Position : INTEGER

FOR i ← 1 TO 8
   INPUT Numbers[i]
NEXT i

CALL InsertionSort(Numbers, 8)

INPUT Target
Position ← BinarySearch(Numbers, 8, Target)

IF Position <> -1
   THEN OUTPUT "Found at position ", Position
   ELSE OUTPUT "Not found"
ENDIF`} />
          </div>
        </details>
      </div>

      {/* Q4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center font-black text-purple-700">Q4</div>
          <div>
            <p className="font-bold text-gray-800">Recursive + Trace Table</p>
            <p className="text-xs text-gray-500">Topics: Recursion + Trace Tables</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">This function is given. Trace Mystery(6) and show a full trace table with all recursive calls and return values.</p>
        <CodeBlock language="pseudocode" code={`FUNCTION Mystery(N : INTEGER) RETURNS INTEGER
   IF N <= 0
      THEN RETURN 0
      ELSE RETURN N + Mystery(N - 2)
   ENDIF
ENDFUNCTION`} />
        <details className="mt-3">
          <summary className="cursor-pointer text-indigo-600 font-semibold text-sm mb-2">👁️ Show Solution</summary>
          <div className="mt-3">
            <div className="overflow-x-auto mb-3">
              <table className="text-xs w-full border-collapse">
                <thead><tr className="bg-purple-100">
                  <th className="border p-2">Call</th>
                  <th className="border p-2">N</th>
                  <th className="border p-2">N &lt;= 0?</th>
                  <th className="border p-2">Returns</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Mystery(6)', '6', 'No', '6 + Mystery(4)'],
                    ['Mystery(4)', '4', 'No', '4 + Mystery(2)'],
                    ['Mystery(2)', '2', 'No', '2 + Mystery(0)'],
                    ['Mystery(0)', '0', 'Yes', '0 ← BASE CASE'],
                    ['Mystery(2)', '2', '-', '2 + 0 = 2'],
                    ['Mystery(4)', '4', '-', '4 + 2 = 6'],
                    ['Mystery(6)', '6', '-', '6 + 6 = 12'],
                  ].map((row, i) => (
                    <tr key={i} className={row[1] === '0' ? 'bg-green-50' : ''}> 
                      {row.map((cell, j) => <td key={j} className="border p-2">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm font-bold text-gray-700">Mystery(6) = 12 (adds 6+4+2+0 = 12)</p>
            <p className="text-xs text-gray-500">This function sums all even numbers from N down to 0!</p>
          </div>
        </details>
      </div>
    </div>
  );
}
