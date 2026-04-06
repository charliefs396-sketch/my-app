export default function D7Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent mb-3">
        Day 7: 2D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science — Cambridge 9618</p>

      {/* What is a 2D Array */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 What is a 2D Array?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          A <strong>2D array</strong> is like a <strong>grid or table</strong> — rows AND columns. Think of a spreadsheet, a seating chart, or a classroom register with students and subjects.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
          <p className="font-bold text-orange-800 mb-3">📊 Real-World Analogy: School Register</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="border border-orange-300 bg-orange-200 p-2 text-orange-800"></th>
                  <th className="border border-orange-300 bg-orange-200 p-2 text-orange-800">Maths</th>
                  <th className="border border-orange-300 bg-orange-200 p-2 text-orange-800">Physics</th>
                  <th className="border border-orange-300 bg-orange-200 p-2 text-orange-800">CS</th>
                </tr>
              </thead>
              <tbody>
                {[['Ali', '85', '72', '91'], ['Sara', '78', '88', '95'], ['John', '65', '70', '80'], ['Priya', '92', '85', '88'], ['Tom', '71', '69', '75']].map((row, i) => (
                  <tr key={i}>
                    <td className="border border-orange-300 bg-orange-100 p-2 font-bold text-orange-800">{row[0]}</td>
                    {row.slice(1).map((val, j) => (
                      <td key={j} className="border border-orange-200 p-2 text-center text-gray-700 font-mono">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-orange-700 text-sm mt-3">
            ↕️ <strong>Rows</strong> = Students (1 to 5) &nbsp;&nbsp; ↔️ <strong>Columns</strong> = Subjects (1 to 3)
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          In pseudocode, you access any cell using <span className="font-mono bg-gray-100 px-2 py-0.5 rounded font-bold">Marks[Row, Col]</span> — two indices instead of one.
        </p>
      </div>

      {/* 1D vs 2D */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 1D vs 2D Arrays</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">📦 1D Array (Day 6)</p>
            <p className="text-blue-700 text-sm mb-2">One row, multiple columns. Like a shopping list.</p>
            <div className="font-mono text-xs bg-blue-900 text-blue-100 p-3 rounded-lg">
              <p>DECLARE Marks : ARRAY[1:5] OF INTEGER</p>
              <p className="mt-2 text-blue-300">// Access: Marks[3]</p>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="font-bold text-orange-800 mb-2">📊 2D Array (Today)</p>
            <p className="text-orange-700 text-sm mb-2">Multiple rows AND columns. Like a spreadsheet.</p>
            <div className="font-mono text-xs bg-orange-900 text-orange-100 p-3 rounded-lg">
              <p>DECLARE Marks : ARRAY[1:5, 1:3] OF INTEGER</p>
              <p className="mt-2 text-orange-300">// Access: Marks[3, 2]</p>
            </div>
          </div>
        </div>
      </div>

      {/* O Level vs A Level */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🆚 O Level vs A Level</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700">Aspect</th>
                <th className="text-left p-3 font-bold text-blue-700">O Level</th>
                <th className="text-left p-3 font-bold text-orange-700">A Level (9618)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Dimensions', 'Usually 1D arrays only', '1D AND 2D arrays'],
                ['Declaration', 'Sometimes implied', 'MUST use DECLARE with bounds'],
                ['Access', 'Array[i]', 'Array[Row, Col] for 2D'],
                ['Indexing', 'May vary', '1-indexed (starts at 1!)'],
                ['Loops', 'Single FOR loop', 'Nested FOR loops for 2D'],
                ['Operations', 'Basic max/min', 'Per-row AND per-column operations'],
              ].map(([aspect, ol, al]) => (
                <tr key={aspect} className="border-t border-gray-100">
                  <td className="p-3 font-semibold text-gray-700">{aspect}</td>
                  <td className="p-3 text-blue-600">{ol}</td>
                  <td className="p-3 text-orange-600 font-medium">{al}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What you'll learn */}
      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 What You'll Learn Today</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: '📦', title: 'Declaration & Access', desc: 'How to declare a 2D array with row and column bounds' },
            { icon: '⌨️', title: 'Input with Nested Loops', desc: 'Using a FOR inside a FOR to fill a 2D array' },
            { icon: '📊', title: 'Row Operations', desc: 'Average per student, max in each row' },
            { icon: '📈', title: 'Column Operations', desc: 'Average per subject, total per column' },
            { icon: '🔍', title: 'Finding the Best', desc: 'Who got the highest overall? Min per subject?' },
            { icon: '📋', title: '4×4 Grid Challenge', desc: 'Find the largest value in each row of a 4×4 grid' },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Warning */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
        <p className="font-bold text-red-800 mb-2">⚠️ The #1 Exam Mistake with 2D Arrays</p>
        <p className="text-red-700 text-sm leading-relaxed">
          Swapping Row and Col! <span className="font-mono bg-red-100 px-1 rounded">Marks[Row, Col]</span> means row first, then column. 
          <span className="font-mono bg-red-100 px-1 rounded ml-1">Marks[3, 2]</span> = Student 3's Subject 2 mark. 
          Writing <span className="font-mono bg-red-100 px-1 rounded">Marks[2, 3]</span> instead gives you the WRONG cell and loses marks!
        </p>
      </div>
    </div>
  );
}
