import CodeBlock from '../../components/CodeBlock';

export default function D17IdentifierTables() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">📋 Identifier Tables</h2>
      <p className="text-gray-500 mb-6">The formal way to document every variable, constant and array in your program</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-blue-800 mb-2">📖 What is an Identifier Table?</h3>
        <p className="text-blue-700 text-sm">An identifier table lists <strong>every variable, constant, and array</strong> your program uses, along with its data type and what it's used for. It's like a dictionary for your program — written BEFORE you write the pseudocode.</p>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 The Standard Format (Cambridge 9618)</h3>
        <p className="text-gray-600 text-sm mb-4">Cambridge expects this exact format with these exact column headers:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left font-semibold">Identifier</th>
                <th className="p-3 text-left font-semibold">Data Type</th>
                <th className="p-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['StudentName', 'STRING', "Stores the student's full name"],
                ['Mark', 'INTEGER', 'Stores the exam mark (0–100)'],
                ['Average', 'REAL', 'Calculated average of all marks'],
                ['Found', 'BOOLEAN', 'Flag to indicate if search was successful'],
                ['Names', 'ARRAY[1:30] OF STRING', 'Stores all student names'],
                ['Marks', 'ARRAY[1:30] OF INTEGER', 'Stores all exam marks'],
                ['MAXSIZE', 'INTEGER (CONSTANT)', 'Maximum number of students = 30'],
                ['i', 'INTEGER', 'Loop counter / array index'],
                ['Total', 'INTEGER', 'Running total of all marks for average calculation'],
                ['Count', 'INTEGER', 'Number of students entered'],
              ].map(([id, type, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-mono text-indigo-700 font-semibold">{id}</td>
                  <td className="p-3 text-pink-600 font-medium">{type}</td>
                  <td className="p-3 text-gray-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-4">✅ What to Include</h3>
          <div className="space-y-2">
            {[
              ['Every variable', 'Even loop counters like i, j, Count'],
              ['Every constant', 'MAXSIZE, TAXRATE, PI etc.'],
              ['Every array', 'Include bounds AND element type'],
              ['Parameters', 'If writing a procedure/function'],
              ['Local variables', 'Variables declared inside procedures'],
            ].map(([what, detail], i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5">✓</span>
                <div><span className="font-semibold text-gray-800">{what}</span> — <span className="text-gray-600">{detail}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-2">
            {[
              ['Forgetting loop counters', 'i, j, Count are IDENTIFIERS too!'],
              ['Wrong data type', 'Average must be REAL, not INTEGER'],
              ['Vague descriptions', '"stores a value" — not helpful!'],
              ['Missing array bounds', 'Write ARRAY[1:10] OF INTEGER, not just ARRAY'],
              ['Forgetting constants', 'CONSTANT must be in the table'],
            ].map(([mistake, tip], i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <div><span className="font-semibold text-gray-800">{mistake}</span> — <span className="text-gray-600">{tip}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🎯 Complete Example — Temperature Converter</h3>
        <p className="text-gray-600 text-sm mb-4"><strong>Problem:</strong> Write a program that inputs temperatures in Celsius, stores them in an array, then calculates and outputs the average, maximum and minimum.</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="p-3 text-left">Identifier</th>
                <th className="p-3 text-left">Data Type</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['MAXSIZE', 'INTEGER (CONSTANT)', 'Maximum number of temperatures = 8'],
                ['Temps', 'ARRAY[1:8] OF REAL', 'Stores all temperature readings in Celsius'],
                ['i', 'INTEGER', 'Loop counter used to access array elements'],
                ['Total', 'REAL', 'Running total of all temperatures for average calculation'],
                ['Average', 'REAL', 'Calculated average temperature'],
                ['Max', 'REAL', 'Highest temperature found in the array'],
                ['Min', 'REAL', 'Lowest temperature found in the array'],
                ['Count', 'INTEGER', 'Number of temperatures entered by user'],
              ].map(([id, type, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-mono text-teal-700 font-semibold">{id}</td>
                  <td className="p-3 text-pink-600 font-medium">{type}</td>
                  <td className="p-3 text-gray-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock language="pseudocode" code={`CONSTANT MAXSIZE = 8
DECLARE Temps : ARRAY[1:MAXSIZE] OF REAL
DECLARE i : INTEGER
DECLARE Total : REAL
DECLARE Average : REAL
DECLARE Max : REAL
DECLARE Min : REAL
DECLARE Count : INTEGER

// Notice: every identifier in the table is declared here!`} />
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="font-bold text-green-800 mb-3">💡 Pro Tips for Full Marks</h3>
        <div className="space-y-2 text-green-700 text-sm">
          <div className="flex items-start gap-2"><span>🏆</span><span>Make your Description column <strong>specific</strong> — say what values it stores, what it's used for, what range is valid</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>For arrays, always include the <strong>bounds</strong>: ARRAY[1:10] OF INTEGER, not just "array"</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>For BOOLEAN identifiers, say what TRUE and FALSE mean: "TRUE if student found, FALSE otherwise"</span></div>
          <div className="flex items-start gap-2"><span>🏆</span><span>Add identifiers to the table <strong>as you think of them</strong> — don't wait until the end</span></div>
        </div>
      </div>
    </div>
  );
}
