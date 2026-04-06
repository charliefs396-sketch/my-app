import CodeBlock from '../../components/CodeBlock';

export default function D11ArrayOfRecords() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📦 Array of Records</h1>
      <p className="text-gray-500 mb-6">Storing and processing multiple records together</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Declaring an Array of Records</h2>
        <CodeBlock code={`TYPE StudentRecord
   DECLARE StudentID : STRING
   DECLARE Name      : STRING
   DECLARE Mark      : INTEGER
   DECLARE Grade     : CHAR
ENDTYPE

// Array of 30 StudentRecord items
DECLARE Students : ARRAY[1:30] OF StudentRecord
DECLARE i : INTEGER`} />
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mt-4">
          <p className="font-bold text-indigo-700">🔑 Access Pattern</p>
          <p className="text-indigo-600 text-sm mt-1">
            <code className="bg-indigo-100 px-1 rounded">Students[i].Name</code> — first the index, then the field<br />
            Read as: "the Name field of the i-th student"
          </p>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Input 30 Students</h2>
        <CodeBlock code={`FOR i ← 1 TO 30
   OUTPUT "Enter ID: "
   INPUT Students[i].StudentID
   
   OUTPUT "Enter name: "
   INPUT Students[i].Name
   
   OUTPUT "Enter mark: "
   INPUT Students[i].Mark
   
   // Auto-calculate grade
   IF Students[i].Mark >= 80
      THEN
         Students[i].Grade ← 'A'
      ELSE
         IF Students[i].Mark >= 60
            THEN
               Students[i].Grade ← 'B'
            ELSE
               Students[i].Grade ← 'C'
         ENDIF
   ENDIF
NEXT i`} />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Search by Name</h2>
        <CodeBlock code={`DECLARE Target : STRING
DECLARE Found : BOOLEAN
DECLARE Position : INTEGER

OUTPUT "Enter name to search: "
INPUT Target

Found ← FALSE

FOR i ← 1 TO 30
   IF Students[i].Name = Target
      THEN
         Found ← TRUE
         Position ← i
   ENDIF
NEXT i

IF Found
   THEN
      OUTPUT "Found: ", Students[Position].Name
      OUTPUT "Mark: ", Students[Position].Mark
      OUTPUT "Grade: ", Students[Position].Grade
   ELSE
      OUTPUT "Student not found"
ENDIF`} />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Find Highest Mark</h2>
        <CodeBlock code={`DECLARE MaxMark : INTEGER
DECLARE MaxName : STRING

MaxMark ← Students[1].Mark
MaxName ← Students[1].Name

FOR i ← 2 TO 30
   IF Students[i].Mark > MaxMark
      THEN
         MaxMark ← Students[i].Mark
         MaxName ← Students[i].Name
   ENDIF
NEXT i

OUTPUT "Top student: ", MaxName, " with ", MaxMark`} />
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sort Records by Mark (Bubble Sort)</h2>
        <CodeBlock code={`DECLARE Temp : StudentRecord
DECLARE Swapped : BOOLEAN

FOR i ← 1 TO 29
   Swapped ← FALSE
   FOR j ← 1 TO 30 - i
      IF Students[j].Mark > Students[j+1].Mark
         THEN
            // Swap ENTIRE records
            Temp          ← Students[j]
            Students[j]   ← Students[j+1]
            Students[j+1] ← Temp
            Swapped ← TRUE
      ENDIF
   NEXT j
   IF NOT Swapped
      THEN
         // Early exit - already sorted
   ENDIF
NEXT i`} />
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
          <p className="font-bold text-amber-700">💡 Key Point — Swap Whole Records</p>
          <p className="text-amber-700 text-sm mt-1">
            When sorting records, Temp must be the SAME TYPE as the record (StudentRecord, not INTEGER).
            This swaps all fields together — name, mark, grade — keeping them aligned!
          </p>
        </div>
      </div>
    </div>
  );
}
