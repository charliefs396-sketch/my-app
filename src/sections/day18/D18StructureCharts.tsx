import CodeBlock from '../../components/CodeBlock';

export default function D18StructureCharts() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🏗️ Structure Charts</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-bold text-blue-800 text-lg mb-3">What is a Structure Chart?</h3>
        <p className="text-blue-700 text-sm mb-3">A structure chart shows how a program is <strong>broken into modules (subroutines)</strong> and what <strong>data is passed between them</strong>. It shows the DESIGN of a program — not the logic.</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="font-semibold text-blue-700 text-sm">✅ Shows:</p>
            <ul className="text-blue-600 text-xs mt-1 space-y-1">
              <li>• Module names (procedures/functions)</li>
              <li>• Which module calls which</li>
              <li>• What data passes between modules</li>
              <li>• Direction of data flow</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="font-semibold text-red-600 text-sm">❌ Does NOT show:</p>
            <ul className="text-red-500 text-xs mt-1 space-y-1">
              <li>• The actual algorithm steps</li>
              <li>• IF statements or loops</li>
              <li>• Variable declarations</li>
              <li>• Detailed logic</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Arrow Types */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">🎯 The 4 Arrow Types — MEMORISE THESE</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl">⬇️●</div>
            <div>
              <p className="font-bold text-green-800">Arrow DOWN + Filled Circle</p>
              <p className="text-green-700 text-sm">= <strong>Data parameter passed TO the module</strong> (input parameter)</p>
              <p className="text-green-600 text-xs mt-1">Example: Passing "Mark" down to a "CalculateGrade" module</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl">⬆️●</div>
            <div>
              <p className="font-bold text-blue-800">Arrow UP + Filled Circle</p>
              <p className="text-blue-700 text-sm">= <strong>Data parameter returned FROM the module</strong> (output parameter)</p>
              <p className="text-blue-600 text-xs mt-1">Example: Returning "Grade" up from "CalculateGrade" module</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="text-2xl">⬇️○</div>
            <div>
              <p className="font-bold text-amber-800">Arrow DOWN + Empty Circle</p>
              <p className="text-amber-700 text-sm">= <strong>Flag/signal passed TO the module</strong> (boolean/control)</p>
              <p className="text-amber-600 text-xs mt-1">Example: Passing "Found" flag down to "DisplayResult" module</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl">⬆️○</div>
            <div>
              <p className="font-bold text-purple-800">Arrow UP + Empty Circle</p>
              <p className="text-purple-700 text-sm">= <strong>Flag/signal returned FROM the module</strong> (boolean result)</p>
              <p className="text-purple-600 text-xs mt-1">Example: Returning "Success" flag up after saving to file</p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory trick */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-bold text-yellow-800 mb-2">💡 Easy Memory Trick</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-white rounded-lg p-3 border border-yellow-100">
            <p className="font-bold text-gray-700">● Filled Circle = DATA</p>
            <p className="text-gray-600 text-xs mt-1">"Filled = Full of data" — it carries an actual value like a number, string, or array</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-yellow-100">
            <p className="font-bold text-gray-700">○ Empty Circle = FLAG</p>
            <p className="text-gray-600 text-xs mt-1">"Empty = just a signal" — it carries only TRUE/FALSE, no real data value</p>
          </div>
        </div>
      </div>

      {/* Example structure chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">📊 Example: Student Management System</h3>
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-green-300 overflow-x-auto">
          <pre>{`
                    ┌─────────────────────────┐
                    │   StudentManagement     │  ← Main module
                    │       (Main)            │
                    └─────────────────────────┘
                    │           │           │
              ⬇️● Names    ⬇️● Names    ⬇️● Names
              ⬇️● Marks    ⬇️● Marks    ⬇️● Marks
              ⬆️● Names    ⬆️○ Found    ⬆️● Average
                    │           │           │
          ┌─────────┐  ┌────────┐  ┌─────────────┐
          │  Input  │  │ Search │  │CalculateAvg │
          │  Data   │  │Student │  │             │
          └─────────┘  └────────┘  └─────────────┘
`}</pre>
        </div>
        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p>• <strong>Main</strong> calls 3 modules: InputData, SearchStudent, CalculateAvg</p>
          <p>• <strong>InputData</strong> receives Names/Marks arrays (⬇️●) and returns filled arrays (⬆️●)</p>
          <p>• <strong>SearchStudent</strong> receives Names/Marks (⬇️●) and returns Found flag (⬆️○)</p>
          <p>• <strong>CalculateAvg</strong> receives Names/Marks (⬇️●) and returns Average (⬆️●)</p>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">📋 Structure Chart Rules</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { rule: 'Top module is the main program', detail: 'All other modules hang below it' },
            { rule: 'Arrows show calling direction', detail: 'Parent always at top, child below' },
            { rule: 'Label arrows with parameter names', detail: 'Write the variable name next to the arrow' },
            { rule: 'Filled = data, Empty = flag', detail: 'This is worth marks in the exam!' },
            { rule: 'Up arrows = outputs/returns', detail: 'Data flowing back to calling module' },
            { rule: 'Down arrows = inputs', detail: 'Data flowing into called module' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-gray-700 text-sm">{item.rule}</p>
                <p className="text-gray-500 text-xs">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock language="pseudocode" code={`// This pseudocode maps to the structure chart above

// Main program calls 3 procedures
CALL InputData(Names, Marks)
CALL SearchStudent(Names, Marks, Found)
Average ← CalculateAvg(Marks, 30)

// InputData receives arrays, fills them, sends back
PROCEDURE InputData(BYREF Names : ARRAY, BYREF Marks : ARRAY)
   // ... input loop here

// SearchStudent receives arrays, returns a FLAG (boolean)
PROCEDURE SearchStudent(Names : ARRAY, Marks : ARRAY, BYREF Found : BOOLEAN)
   // ... search loop here

// CalculateAvg receives array, returns a DATA value (real)
FUNCTION CalculateAvg(Marks : ARRAY, Size : INTEGER) RETURNS REAL
   // ... calculate and return`} />
    </div>
  );
}
