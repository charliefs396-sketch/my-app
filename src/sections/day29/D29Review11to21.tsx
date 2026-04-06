import CodeBlock from '../../components/CodeBlock';

export default function D29Review11to21() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🏗️ Days 11–21 Review</h2>
      <p className="text-gray-500 mb-6">Records, Files, ADTs, Linked Lists, Trace Tables, Algorithm Design, Testing, SDLC, State Diagrams</p>

      {/* Day 11 */}
      <div className="bg-white border border-red-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-red-700 text-lg mb-3">📋 Day 11 – Records (TYPE)</h3>
        <div className="bg-red-50 rounded-lg p-3 mb-4 text-xs font-mono text-gray-700">
          TYPE StudentRecord &nbsp;&nbsp; DECLARE Name : STRING &nbsp;&nbsp; DECLARE Mark : INTEGER &nbsp;&nbsp; ENDTYPE
          <br/>Access: Student.Name ← "Ali" &nbsp; Students[1].Mark ← 85
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Define a TYPE called BookRecord with Title (STRING), Author (STRING), Price (REAL), InStock (BOOLEAN). Create an array of 5 books. Find the most expensive book and output its title and price.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`TYPE BookRecord
   DECLARE Title : STRING
   DECLARE Author : STRING
   DECLARE Price : REAL
   DECLARE InStock : BOOLEAN
ENDTYPE

DECLARE Books : ARRAY[1:5] OF BookRecord
DECLARE i : INTEGER
DECLARE MaxPrice : REAL
DECLARE MaxTitle : STRING

FOR i ← 1 TO 5
   INPUT Books[i].Title
   INPUT Books[i].Author
   INPUT Books[i].Price
   INPUT Books[i].InStock
NEXT i

MaxPrice ← Books[1].Price
MaxTitle ← Books[1].Title

FOR i ← 2 TO 5
   IF Books[i].Price > MaxPrice
      THEN
         MaxPrice ← Books[i].Price
         MaxTitle ← Books[i].Title
   ENDIF
NEXT i

OUTPUT "Most expensive: ", MaxTitle, " at ", MaxPrice`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 12 */}
      <div className="bg-white border border-orange-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-orange-700 text-lg mb-3">📁 Day 12 – File Handling</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { mode: 'FOR READ', desc: 'Read existing file' },
            { mode: 'FOR WRITE', desc: 'Create/overwrite file' },
            { mode: 'FOR APPEND', desc: 'Add to end of file' },
          ].map((item) => (
            <div key={item.mode} className="bg-orange-50 rounded-lg p-3 text-center">
              <code className="text-xs font-bold text-orange-700">{item.mode}</code>
              <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Write pseudocode to read all lines from "students.txt" and count how many lines contain the word "PASS". Output the count.</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`DECLARE Line : STRING
DECLARE PassCount : INTEGER

PassCount ← 0

OPENFILE "students.txt" FOR READ
WHILE NOT EOF("students.txt")
   READFILE "students.txt", Line
   IF MID(Line, 1, 4) = "PASS"
      THEN PassCount ← PassCount + 1
   ENDIF
ENDWHILE
CLOSEFILE "students.txt"

OUTPUT "Students who passed: ", PassCount`} />
            </div>
          </details>
        </div>
      </div>

      {/* Day 13 & 14 */}
      <div className="bg-white border border-emerald-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-emerald-700 text-lg mb-3">📚 Days 13–14 – Stack & Queue</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 rounded-lg p-3">
            <p className="font-bold text-emerald-700 text-sm mb-1">Stack – LIFO</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Push → add to top (TopPointer + 1)</li>
              <li>Pop → remove from top (TopPointer - 1)</li>
              <li>Overflow → TopPointer = MAXSIZE</li>
              <li>Underflow → TopPointer = 0</li>
            </ul>
          </div>
          <div className="bg-sky-50 rounded-lg p-3">
            <p className="font-bold text-sky-700 text-sm mb-1">Queue – FIFO</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Enqueue → add to rear</li>
              <li>Dequeue → remove from front</li>
              <li>Circular: Rear ← (Rear MOD MAX) + 1</li>
              <li>Full → Size = MAXSIZE</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">Trace these stack operations on a stack of size 4. Show TopPointer after each: Push("X"), Push("Y"), Push("Z"), Pop(), Push("W"), Pop(), Pop()</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`// Start: TopPointer = 0, Stack = []
Push("X") → TopPointer = 1, Stack[1] = "X"
Push("Y") → TopPointer = 2, Stack[2] = "Y"
Push("Z") → TopPointer = 3, Stack[3] = "Z"
Pop()     → returns "Z", TopPointer = 2
Push("W") → TopPointer = 3, Stack[3] = "W"
Pop()     → returns "W", TopPointer = 2
Pop()     → returns "Y", TopPointer = 1

// Final state: TopPointer = 1, Stack[1] = "X"`} />
            </div>
          </details>
        </div>
      </div>

      {/* Days 15-16 */}
      <div className="bg-white border border-fuchsia-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-fuchsia-700 text-lg mb-3">🔗 Days 15–16 – Linked Lists & Trace Tables</h3>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question (Trace Table):</p>
          <p className="text-orange-700 text-sm mb-3">Trace this code and complete the trace table: X←10, Y←3. FOR Z←1 TO 3: X←X-(Y MOD 2+1), Y←Y+Z. NEXT Z. OUTPUT X, Y</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <div className="overflow-x-auto">
                <table className="text-xs w-full border-collapse">
                  <thead><tr className="bg-gray-100">
                    <th className="border p-2">Z</th><th className="border p-2">Y MOD 2</th><th className="border p-2">Y MOD 2 + 1</th><th className="border p-2">X</th><th className="border p-2">Y</th>
                  </tr></thead>
                  <tbody>
                    <tr><td className="border p-2">Start</td><td className="border p-2">-</td><td className="border p-2">-</td><td className="border p-2">10</td><td className="border p-2">3</td></tr>
                    <tr><td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">2</td><td className="border p-2">8</td><td className="border p-2">4</td></tr>
                    <tr><td className="border p-2">2</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">7</td><td className="border p-2">6</td></tr>
                    <tr><td className="border p-2">3</td><td className="border p-2">0</td><td className="border p-2">1</td><td className="border p-2">6</td><td className="border p-2">9</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-700 mt-2">OUTPUT: 6 then 9</p>
            </div>
          </details>
        </div>
      </div>

      {/* Days 17-21 */}
      <div className="bg-white border border-lime-200 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-lime-700 text-lg mb-3">📐 Days 17–21 – Design, Testing, SDLC, State Diagrams</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-lime-50 rounded-lg p-3">
            <p className="font-bold text-lime-700 text-sm mb-2">Key Facts:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>📋 Identifier table: 3 columns (Identifier | Type | Description)</li>
              <li>🪜 Stepwise refinement: Level 1 → 2 → 3 → pseudocode</li>
              <li>🐛 Errors: Syntax / Logic / Runtime</li>
              <li>📊 Test data: Normal / Abnormal / Boundary</li>
              <li>💧 Waterfall: Analysis→Design→Code→Test→Maintain</li>
              <li>⭕ State diagram: States (circles) + Transitions (arrows)</li>
            </ul>
          </div>
          <div className="bg-lime-50 rounded-lg p-3">
            <p className="font-bold text-lime-700 text-sm mb-2">Testing Methods:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>⬜ White-box: test all paths through code</li>
              <li>⬛ Black-box: test inputs/outputs only</li>
              <li>🔬 Dry run: trace through by hand</li>
              <li>🔧 Stub: replace modules with dummies</li>
              <li>α Alpha: developer testing</li>
              <li>β Beta: user testing</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="font-bold text-orange-800 mb-2">🎯 Practice Question:</p>
          <p className="text-orange-700 text-sm mb-3">For a program that inputs a mark (0-100) and outputs a grade (A/B/C/D/F): (a) Give 3 normal, 3 boundary, and 3 abnormal test values. (b) Classify this bug: Grade ← "A" when Mark greater than 80 (should be ≥ 80).</p>
          <details>
            <summary className="cursor-pointer text-orange-600 font-semibold text-sm">👁️ Show Solution</summary>
            <div className="mt-3">
              <CodeBlock language="pseudocode" code={`// (a) Test Data:
// Normal:   55 (C), 72 (B), 83 (A)
// Boundary: 0 (F), 100 (A), -1 (abnormal!), 101 (abnormal!)
//           79 (B - just below A), 80 (A - first A)
// Abnormal: -5, 150, "abc"

// (b) Bug Classification:
// This is a LOGIC ERROR
// The program runs without crashing BUT gives wrong answer
// Mark = 80 should give A but gives B instead
// Because > 80 excludes 80, should be >= 80`} />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
