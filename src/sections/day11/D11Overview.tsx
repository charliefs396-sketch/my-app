import CodeBlock from '../../components/CodeBlock';

export default function D11Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent mb-3">
        📋 Day 11: Records (TYPE)
      </h1>
      <p className="text-gray-500 text-lg mb-6">A Level Computer Science – Cambridge 9618</p>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-3">What is a Record?</h2>
        <p className="text-red-700 mb-4">
          A <strong>record</strong> is a data structure that groups together related items of <strong>different data types</strong> under one name.
          Think of it like a row in a database table, or an index card with multiple fields.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-red-100">
            <p className="font-bold text-red-700 mb-2">📇 Like an Index Card</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-bold text-red-600">StudentID:</span> S001</p>
              <p><span className="font-bold text-red-600">Name:</span> Ali</p>
              <p><span className="font-bold text-red-600">Mark:</span> 85</p>
              <p><span className="font-bold text-red-600">Grade:</span> A</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-red-100">
            <p className="font-bold text-red-700 mb-2">🆚 Arrays vs Records</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-bold">Array:</span> Same data type, multiple values</p>
              <p><span className="font-bold">Record:</span> Different data types, one entity</p>
              <p className="text-xs text-gray-400 mt-2">e.g. Marks[1:30] = INTEGER only</p>
              <p className="text-xs text-gray-400">StudentRecord = STRING + INTEGER + CHAR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Why Records? The Problem with Parallel Arrays</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-700 mb-2">❌ Parallel Arrays (messy)</p>
            <CodeBlock code={`DECLARE Names : ARRAY[1:30] OF STRING
DECLARE Marks : ARRAY[1:30] OF INTEGER
DECLARE Grades : ARRAY[1:30] OF CHAR
DECLARE IDs : ARRAY[1:30] OF STRING
// 4 separate arrays to manage!`} />
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-700 mb-2">✅ Records (clean)</p>
            <CodeBlock code={`TYPE StudentRecord
   DECLARE StudentID : STRING
   DECLARE Name : STRING
   DECLARE Mark : INTEGER
   DECLARE Grade : CHAR
ENDTYPE
// One structure, all related data!`} />
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📅 What You'll Learn Today</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '📋', title: 'TYPE Definition', desc: 'How to define a record type with fields' },
            { icon: '🔵', title: 'Dot Notation', desc: 'Access fields using Record.Field' },
            { icon: '📦', title: 'Array of Records', desc: 'Store multiple records in an array' },
            { icon: '🔍', title: 'Search & Sort Records', desc: 'Find and sort records by field value' },
            { icon: '❓', title: 'Exam FAQ', desc: 'Common mistakes and exam traps' },
            { icon: '✍️', title: 'Practice', desc: 'ProductRecord with search and sort' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="font-bold text-amber-700">📌 Cambridge 9618 Syllabus Note</p>
        <p className="text-amber-700 text-sm mt-1">
          Records (user-defined data types using TYPE) are tested in Paper 2 (problem solving) and Paper 4 (programming).
          You must know how to define, declare, populate, and search records — especially arrays of records.
        </p>
      </div>
    </div>
  );
}
