import CodeBlock from '../../components/CodeBlock';

export default function D12ReadWrite() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📖 Reading & Writing Files</h1>
      <p className="text-gray-500 mb-6">The two most common file operations</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Writing to a File (FOR WRITE)</h2>
        <CodeBlock code={`// Write 5 student records to a file
DECLARE i : INTEGER

OPENFILE "students.txt" FOR WRITE

FOR i ← 1 TO 5
   WRITEFILE "students.txt", Students[i].StudentID & "," & Students[i].Name & "," & NUM_TO_STR(Students[i].Mark)
NEXT i

CLOSEFILE "students.txt"

OUTPUT "File saved successfully"`} />
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 mt-3">
          <p className="text-red-700 text-sm"><strong>⚠️ Warning:</strong> FOR WRITE creates a NEW file every time. If "students.txt" already existed, all its data is gone! Use FOR APPEND to keep existing data.</p>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Reading from a File (FOR READ + EOF)</h2>
        <CodeBlock code={`// Read all lines from a file
DECLARE LineData : STRING

OPENFILE "students.txt" FOR READ

WHILE NOT EOF("students.txt")
   READFILE "students.txt", LineData
   OUTPUT LineData
ENDWHILE

CLOSEFILE "students.txt"`} />
        <div className="mt-4 space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-blue-700 text-sm">What is EOF?</p>
            <p className="text-blue-600 text-sm mt-1">EOF stands for <strong>End Of File</strong>. It returns TRUE when there are no more lines to read. <code>NOT EOF("file.txt")</code> means "keep going while there is still data left to read".</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="font-bold text-amber-700 text-sm">Why WHILE and not FOR?</p>
            <p className="text-amber-600 text-sm mt-1">We use WHILE because we don't know how many lines the file has. WHILE NOT EOF checks each time before reading — perfect for an unknown quantity.</p>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Read and Count Lines</h2>
        <CodeBlock code={`DECLARE LineData : STRING
DECLARE Count : INTEGER
Count ← 0

OPENFILE "students.txt" FOR READ
WHILE NOT EOF("students.txt")
   READFILE "students.txt", LineData
   Count ← Count + 1
   OUTPUT Count, ": ", LineData
ENDWHILE
CLOSEFILE "students.txt"

OUTPUT "Total records: ", Count`} />
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Complete Write then Read Example</h2>
        <CodeBlock code={`// ===== STEP 1: Write data =====
OPENFILE "data.txt" FOR WRITE
WRITEFILE "data.txt", "S001,Ali,85"
WRITEFILE "data.txt", "S002,Sara,92"
WRITEFILE "data.txt", "S003,Tom,78"
CLOSEFILE "data.txt"

// ===== STEP 2: Read data back =====
DECLARE Line : STRING
OPENFILE "data.txt" FOR READ
WHILE NOT EOF("data.txt")
   READFILE "data.txt", Line
   OUTPUT Line
ENDWHILE
CLOSEFILE "data.txt"

// Output:
// S001,Ali,85
// S002,Sara,92
// S003,Tom,78`} />
      </div>
    </div>
  );
}
