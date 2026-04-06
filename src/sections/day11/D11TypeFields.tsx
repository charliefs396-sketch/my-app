import CodeBlock from '../../components/CodeBlock';

export default function D11TypeFields() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">📋 TYPE Definition & Field Access</h1>
      <p className="text-gray-500 mb-6">How to define a record and access its fields</p>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Defining a Record Type</h2>
        <CodeBlock code={`TYPE StudentRecord
   DECLARE StudentID : STRING
   DECLARE Name     : STRING
   DECLARE Mark     : INTEGER
   DECLARE Grade    : CHAR
ENDTYPE`} />
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          {[
            { kw: 'TYPE', desc: 'Starts the record definition' },
            { kw: 'StudentRecord', desc: 'The name of your new type (PascalCase)' },
            { kw: 'DECLARE field : TYPE', desc: 'Each field with its data type' },
            { kw: 'ENDTYPE', desc: 'Closes the definition — NEVER forget this!' },
          ].map(item => (
            <div key={item.kw} className="bg-gray-50 rounded-lg p-3">
              <code className="text-indigo-600 font-bold text-sm">{item.kw}</code>
              <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Declaring & Using a Record Variable</h2>
        <CodeBlock code={`// Step 1: Declare a variable of your record type
DECLARE Student : StudentRecord

// Step 2: Assign values using dot notation
Student.StudentID ← "S001"
Student.Name      ← "Ali"
Student.Mark      ← 85
Student.Grade     ← 'A'

// Step 3: Read values using dot notation
OUTPUT Student.Name, " scored ", Student.Mark
OUTPUT "Grade: ", Student.Grade`} />
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
          <p className="font-bold text-blue-700">🔵 Dot Notation Rule</p>
          <p className="text-blue-600 text-sm mt-1">
            Always: <code className="bg-blue-100 px-1 rounded">VariableName.FieldName</code><br />
            The dot means "the field belonging to this record variable"
          </p>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Input Into a Record</h2>
        <CodeBlock code={`DECLARE Student : StudentRecord

OUTPUT "Enter student ID: "
INPUT Student.StudentID

OUTPUT "Enter name: "
INPUT Student.Name

OUTPUT "Enter mark: "
INPUT Student.Mark

// Calculate grade automatically
IF Student.Mark >= 80
   THEN
      Student.Grade ← 'A'
   ELSE
      IF Student.Mark >= 60
         THEN
            Student.Grade ← 'B'
         ELSE
            Student.Grade ← 'C'
      ENDIF
ENDIF

OUTPUT Student.Name, " - Grade: ", Student.Grade`} />
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="font-bold text-red-700">⚠️ Common Mistakes</p>
        <div className="space-y-2 mt-2">
          {[
            { wrong: 'Student[Name]', right: 'Student.Name', note: 'Use dot, not square brackets' },
            { wrong: 'StudentRecord.Name', right: 'Student.Name', note: 'Use variable name, not type name' },
            { wrong: 'TYPE Student', right: 'TYPE StudentRecord', note: 'Type name should describe the structure' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="text-red-500 font-bold">✗</span>
              <code className="text-red-600 bg-red-100 px-1 rounded">{item.wrong}</code>
              <span className="text-gray-400">→</span>
              <code className="text-green-600 bg-green-100 px-1 rounded">{item.right}</code>
              <span className="text-gray-500 text-xs">{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
