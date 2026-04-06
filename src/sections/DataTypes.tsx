import CodeBlock from '../components/CodeBlock';

export default function DataTypes() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🏷️ Data Types – The Complete Guide</h1>
      <p className="text-gray-500 mb-6 text-lg">All 6 data types you MUST know for the exam</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Data Types Matter</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Every variable in A Level pseudocode MUST have a data type. The data type tells the computer:
        </p>
        <ul className="space-y-2 text-gray-700 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">1.</span>
            <span><strong>What kind of data</strong> can be stored (numbers, text, etc.)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">2.</span>
            <span><strong>How much memory</strong> to allocate for it</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">3.</span>
            <span><strong>What operations</strong> can be performed on it</span>
          </li>
        </ul>
      </div>

      {/* INTEGER */}
      <div className="section-card border-l-4 border-l-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-bold text-lg">INTEGER</span>
          <span className="text-gray-500">Whole numbers</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          An INTEGER is a <strong>whole number</strong> — positive, negative, or zero. 
          No decimal point. No fractions. Just whole numbers.
        </p>
        <CodeBlock title="INTEGER Examples" code={`DECLARE Age : INTEGER
DECLARE Count : INTEGER
DECLARE Temperature : INTEGER
DECLARE NumberOfStudents : INTEGER

Age ← 17
Count ← 0
Temperature ← -5
NumberOfStudents ← 30`} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-bold text-green-700 text-sm">✅ Valid INTEGER values</p>
            <p className="text-gray-600 font-mono text-sm mt-1">17, 0, -5, 1000, -32</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-bold text-red-600 text-sm">❌ NOT INTEGER</p>
            <p className="text-gray-600 font-mono text-sm mt-1">3.14, "17", TRUE, 'A'</p>
          </div>
        </div>
        <div className="tip-box mt-4">
          <p className="text-amber-900"><strong>When to use:</strong> Age, count, number of items, array index, loop counter, quantity</p>
        </div>
      </div>

      {/* REAL */}
      <div className="section-card border-l-4 border-l-orange-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl font-bold text-lg">REAL</span>
          <span className="text-gray-500">Decimal numbers</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          A REAL is a number with a <strong>decimal point</strong> (also called a floating-point number). 
          It can represent fractions and very precise values.
        </p>
        <CodeBlock title="REAL Examples" code={`DECLARE Price : REAL
DECLARE Average : REAL
DECLARE Height : REAL
DECLARE Temperature : REAL

Price ← 29.99
Average ← 85.5
Height ← 1.75
Temperature ← -3.2`} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-bold text-green-700 text-sm">✅ Valid REAL values</p>
            <p className="text-gray-600 font-mono text-sm mt-1">3.14, 0.5, -2.7, 100.0</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-bold text-red-600 text-sm">❌ NOT REAL</p>
            <p className="text-gray-600 font-mono text-sm mt-1">"3.14", TRUE, 'A'</p>
          </div>
        </div>
        <div className="warning-box mt-4">
          <p className="text-red-800"><strong>⚠️ INTEGER vs REAL:</strong> If a value COULD have decimals (like an average or price), use REAL. Even if the number happens to be whole (like 100.0), if it represents a price or measurement, use REAL.</p>
        </div>
      </div>

      {/* CHAR */}
      <div className="section-card border-l-4 border-l-pink-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-xl font-bold text-lg">CHAR</span>
          <span className="text-gray-500">Single character</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          A CHAR holds <strong>exactly ONE character</strong>. One letter, one digit, one symbol. 
          That's it. Written in <strong>single quotes</strong>.
        </p>
        <CodeBlock title="CHAR Examples" code={`DECLARE Grade : CHAR
DECLARE Initial : CHAR
DECLARE Symbol : CHAR
DECLARE Choice : CHAR

Grade ← 'A'
Initial ← 'M'
Symbol ← '#'
Choice ← 'Y'`} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-bold text-green-700 text-sm">✅ Valid CHAR values</p>
            <p className="text-gray-600 font-mono text-sm mt-1">'A', 'z', '5', '#', ' '</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-bold text-red-600 text-sm">❌ NOT CHAR</p>
            <p className="text-gray-600 font-mono text-sm mt-1">"AB", "Hello", 65</p>
          </div>
        </div>
        <div className="tip-box mt-4">
          <p className="text-amber-900"><strong>CHAR vs STRING:</strong> 'A' is a CHAR (single quotes, one character). "A" is a STRING of length 1 (double quotes). They are DIFFERENT types in pseudocode!</p>
        </div>
      </div>

      {/* STRING */}
      <div className="section-card border-l-4 border-l-green-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold text-lg">STRING</span>
          <span className="text-gray-500">Text / sequence of characters</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          A STRING is a <strong>sequence of zero or more characters</strong>. 
          Written in <strong>double quotes</strong>. Can contain letters, numbers, spaces, symbols — anything.
        </p>
        <CodeBlock title="STRING Examples" code={`DECLARE Name : STRING
DECLARE Address : STRING
DECLARE PhoneNumber : STRING
DECLARE Empty : STRING

Name ← "Ali Khan"
Address ← "123 Main Street"
PhoneNumber ← "0300-1234567"
Empty ← ""  // Empty string is valid!`} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-bold text-green-700 text-sm">✅ Valid STRING values</p>
            <p className="text-gray-600 font-mono text-sm mt-1">"Hello", "123", "", "A"</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-bold text-red-600 text-sm">❌ NOT STRING</p>
            <p className="text-gray-600 font-mono text-sm mt-1">123, TRUE, 'A'</p>
          </div>
        </div>
        <div className="tip-box mt-4">
          <p className="text-amber-900"><strong>Phone numbers & postcodes</strong> should ALWAYS be STRING, never INTEGER! Why? Because "0300" as an integer would lose the leading zero and become 300. Also you don't do maths on phone numbers!</p>
        </div>
      </div>

      {/* BOOLEAN */}
      <div className="section-card border-l-4 border-l-purple-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-bold text-lg">BOOLEAN</span>
          <span className="text-gray-500">TRUE or FALSE</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          A BOOLEAN can only hold one of two values: <strong>TRUE</strong> or <strong>FALSE</strong>. 
          That's it. Nothing else. It's like a light switch — on or off.
        </p>
        <CodeBlock title="BOOLEAN Examples" code={`DECLARE Found : BOOLEAN
DECLARE GameOver : BOOLEAN
DECLARE IsValid : BOOLEAN
DECLARE LoggedIn : BOOLEAN

Found ← FALSE
GameOver ← FALSE
IsValid ← TRUE
LoggedIn ← TRUE

// Often used with conditions
IF Score >= 50 THEN
    Passed ← TRUE
ELSE
    Passed ← FALSE
ENDIF`} />
        <div className="tip-box mt-4">
          <p className="text-amber-900"><strong>When to use:</strong> Flags (Found, Finished), status checks (IsValid, LoggedIn), game states (GameOver), search results (Found)</p>
        </div>
      </div>

      {/* DATE */}
      <div className="section-card border-l-4 border-l-teal-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-xl font-bold text-lg">DATE</span>
          <span className="text-gray-500">Calendar date</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          A DATE stores a <strong>calendar date</strong>. The format in Cambridge pseudocode is 
          typically <strong>dd/mm/yyyy</strong>.
        </p>
        <CodeBlock title="DATE Examples" code={`DECLARE DateOfBirth : DATE
DECLARE Today : DATE
DECLARE ExamDate : DATE

DateOfBirth ← 15/03/2007
Today ← 22/01/2025
ExamDate ← 10/05/2025`} />
        <div className="tip-box mt-4">
          <p className="text-amber-900"><strong>Note:</strong> DATE is less commonly tested than the other 5 types, but you should know it exists. The exact format may vary — Cambridge uses dd/mm/yyyy.</p>
        </div>
      </div>

      {/* Summary Table */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Complete Data Type Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <th className="p-3 text-left text-indigo-800">Data Type</th>
                <th className="p-3 text-left text-indigo-800">Description</th>
                <th className="p-3 text-left text-indigo-800">Example Values</th>
                <th className="p-3 text-left text-indigo-800">Use Cases</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['INTEGER', 'Whole number', '17, -5, 0, 1000', 'Age, count, quantity'],
                ['REAL', 'Decimal number', '3.14, -2.5, 0.99', 'Price, average, measurement'],
                ['CHAR', 'Single character', "'A', 'z', '#'", 'Grade, menu choice, initial'],
                ['STRING', 'Text', '"Hello", "Ali", ""', 'Name, address, phone number'],
                ['BOOLEAN', 'True/False', 'TRUE, FALSE', 'Flags, conditions, switches'],
                ['DATE', 'Calendar date', '15/03/2007', 'Birth date, deadline'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-mono font-bold text-indigo-700">{row[0]}</td>
                  <td className="p-3 text-gray-700">{row[1]}</td>
                  <td className="p-3 font-mono text-gray-600">{row[2]}</td>
                  <td className="p-3 text-gray-600">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
