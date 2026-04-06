import CodeBlock from '../../components/CodeBlock';

export default function D12AppendRecords() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">➕ Append Mode & Saving Records</h1>
      <p className="text-gray-500 mb-6">Adding to files without losing existing data</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">APPEND vs WRITE Comparison</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">⚠️ FOR WRITE (dangerous!)</p>
            <CodeBlock code={`OPENFILE "data.txt" FOR WRITE
WRITEFILE "data.txt", "New line"
CLOSEFILE "data.txt"
// ALL existing data is gone!`} />
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">✅ FOR APPEND (safe!)</p>
            <CodeBlock code={`OPENFILE "data.txt" FOR APPEND
WRITEFILE "data.txt", "New line"
CLOSEFILE "data.txt"
// New line added to the END`} />
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Saving Records to a CSV File</h2>
        <p className="text-gray-600 text-sm mb-3">CSV = Comma Separated Values. We use the & operator to join fields with commas.</p>
        <CodeBlock code={`TYPE StudentRecord
   DECLARE StudentID : STRING
   DECLARE Name      : STRING
   DECLARE Mark      : INTEGER
   DECLARE Grade     : CHAR
ENDTYPE

DECLARE Students : ARRAY[1:5] OF StudentRecord
DECLARE i : INTEGER

// Write all 5 records to file
OPENFILE "students.csv" FOR WRITE
FOR i ← 1 TO 5
   WRITEFILE "students.csv", 
      Students[i].StudentID & "," & 
      Students[i].Name & "," & 
      NUM_TO_STR(Students[i].Mark) & "," & 
      Students[i].Grade
NEXT i
CLOSEFILE "students.csv"

// File will contain:
// S001,Ali,85,A
// S002,Sara,92,A
// S003,Tom,78,B`} />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Append a New Record</h2>
        <CodeBlock code={`DECLARE NewStudent : StudentRecord

OUTPUT "Enter new student details:"
INPUT NewStudent.StudentID
INPUT NewStudent.Name
INPUT NewStudent.Mark

// Calculate grade
IF NewStudent.Mark >= 80
   THEN NewStudent.Grade ← 'A'
   ELSE IF NewStudent.Mark >= 60
      THEN NewStudent.Grade ← 'B'
      ELSE NewStudent.Grade ← 'C'
   ENDIF
ENDIF

// Append to existing file
OPENFILE "students.csv" FOR APPEND
WRITEFILE "students.csv",
   NewStudent.StudentID & "," &
   NewStudent.Name & "," &
   NUM_TO_STR(NewStudent.Mark) & "," &
   NewStudent.Grade
CLOSEFILE "students.csv"

OUTPUT "Record added successfully"`} />
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Search Inside a File</h2>
        <CodeBlock code={`DECLARE Line : STRING
DECLARE Target : STRING
DECLARE Found : BOOLEAN

OUTPUT "Enter student ID to search: "
INPUT Target
Found ← FALSE

OPENFILE "students.csv" FOR READ
WHILE NOT EOF("students.csv")
   READFILE "students.csv", Line
   // Check if line starts with the target ID
   IF LEFT(Line, LENGTH(Target)) = Target
      THEN
         OUTPUT "Found: ", Line
         Found ← TRUE
   ENDIF
ENDWHILE
CLOSEFILE "students.csv"

IF NOT Found
   THEN
      OUTPUT "Student not found"
ENDIF`} />
      </div>
    </div>
  );
}
