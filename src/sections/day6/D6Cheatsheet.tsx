import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const declarationTemplate = `// DECLARATION TEMPLATE
DECLARE ArrayName : ARRAY[1:N] OF DataType
DECLARE i         : INTEGER        // loop counter

// Examples:
DECLARE Marks  : ARRAY[1:10] OF INTEGER
DECLARE Names  : ARRAY[1:10] OF STRING
DECLARE Prices : ARRAY[1:5]  OF REAL`;

const inputTemplate = `// INPUT TEMPLATE
FOR i ← 1 TO N
   OUTPUT "Enter value: "
   INPUT ArrayName[i]
NEXT i`;

const maxTemplate = `// FIND MAXIMUM TEMPLATE
Max ← ArrayName[1]        // initialise with first element
FOR i ← 2 TO N            // start from 2!
   IF ArrayName[i] > Max
      THEN
         Max ← ArrayName[i]
   ENDIF
NEXT i
OUTPUT "Maximum: ", Max`;

const minTemplate = `// FIND MINIMUM TEMPLATE
Min ← ArrayName[1]        // initialise with first element
FOR i ← 2 TO N            // start from 2!
   IF ArrayName[i] < Min  // only change from Max pattern
      THEN
         Min ← ArrayName[i]
   ENDIF
NEXT i
OUTPUT "Minimum: ", Min`;

const avgTemplate = `// TOTAL & AVERAGE TEMPLATE
Total   ← 0
FOR i ← 1 TO N
   Total ← Total + ArrayName[i]
NEXT i
Average ← Total / N       // Average MUST be REAL type!
OUTPUT "Average: ", Average`;

const aboveAvgTemplate = `// ABOVE AVERAGE TEMPLATE (3-pass)
// Pass 1: Input (see input template above)

// Pass 2: Calculate average
Total ← 0
FOR i ← 1 TO N
   Total ← Total + Arr[i]
NEXT i
Average ← Total / N

// Pass 3: Count above average
Count ← 0
FOR i ← 1 TO N
   IF Arr[i] > Average
      THEN
         Count ← Count + 1
   ENDIF
NEXT i
OUTPUT Count, " values above average"`;

const secondLargestTemplate = `// SECOND LARGEST TEMPLATE
// Initialise from first two elements
IF Arr[1] > Arr[2]
   THEN
      Largest       ← Arr[1]
      SecondLargest ← Arr[2]
   ELSE
      Largest       ← Arr[2]
      SecondLargest ← Arr[1]
ENDIF

FOR i ← 3 TO N
   IF Arr[i] > Largest
      THEN
         SecondLargest ← Largest
         Largest       ← Arr[i]
      ELSE
         IF Arr[i] > SecondLargest AND Arr[i] <> Largest
            THEN
               SecondLargest ← Arr[i]
         ENDIF
   ENDIF
NEXT i`;

const linearSearchTemplate = `// LINEAR SEARCH TEMPLATE
Found ← FALSE
i     ← 1
WHILE i <= N AND Found = FALSE
   IF Arr[i] = Target
      THEN
         Found ← TRUE
         OUTPUT "Found at index ", i
   ENDIF
   i ← i + 1
ENDWHILE
IF Found = FALSE
   THEN
      OUTPUT "Not found"
ENDIF`;

export default function D6Cheatsheet() {
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  const checklistItems = [
    "I can declare a 1D array with correct bounds and data type",
    "I know arrays are 1-indexed in Cambridge 9618 (not 0)",
    "I can populate an array using a FOR loop",
    "I can access individual array elements using Arr[i]",
    "I initialise Max/Min with Arr[1], not 0",
    "I start the Max/Min loop at i ← 2, not i ← 1",
    "I declare Average as REAL, not INTEGER",
    "I understand parallel arrays (same index = related data)",
    "I can implement the 3-pass above-average pattern",
    "I can find the second largest value",
    "I can implement a linear search with WHILE loop",
    "I know: elements = upper bound − lower bound + 1",
    "I always declare loop counter i : INTEGER",
    "I can output all array elements with a FOR loop",
    "I'm ready for Day 7 – 2D Arrays!",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📋 Day 6 Cheatsheet
      </h1>
      <p className="text-gray-500 text-lg mb-8">Everything about 1D Arrays on one page — your complete reference</p>

      {/* Quick reference table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Reference Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-indigo-50">
              <tr>
                <th className="p-3 text-left font-bold text-indigo-800">Operation</th>
                <th className="p-3 text-left font-bold text-indigo-800">Key Points</th>
                <th className="p-3 text-left font-bold text-indigo-800">Watch out for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { op: "Declaration", key: "DECLARE Arr : ARRAY[1:N] OF Type", watch: "Must include bounds AND type" },
                { op: "Access", key: "Arr[i] where 1 ≤ i ≤ N", watch: "Index 0 = out of bounds error!" },
                { op: "Populate", key: "FOR i ← 1 TO N / INPUT Arr[i] / NEXT i", watch: "Loop must match array bounds" },
                { op: "Find Max", key: "Max←Arr[1], loop from i=2", watch: "Don't initialise Max to 0!" },
                { op: "Find Min", key: "Min←Arr[1], loop from i=2", watch: "Same pattern, change > to <" },
                { op: "Average", key: "Total←0, accumulate, Average←Total/N", watch: "Declare Average as REAL!" },
                { op: "Above Avg", key: "3 passes: input, total/avg, compare", watch: "Can't compare before knowing average" },
                { op: "2nd Largest", key: "Track Largest and SecondLargest", watch: "When new max found: save old max first!" },
                { op: "Search", key: "WHILE i<=N AND Found=FALSE", watch: "Use WHILE to stop early when found" },
                { op: "Parallel", key: "Same index → related data", watch: "Update both arrays together!" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-bold text-gray-800">{row.op}</td>
                  <td className="p-3 font-mono text-indigo-700 text-xs">{row.key}</td>
                  <td className="p-3 text-red-600 text-xs">{row.watch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Templates */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Code Templates</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Declaration</p>
            <CodeBlock code={declarationTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Input</p>
            <CodeBlock code={inputTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Find Maximum</p>
            <CodeBlock code={maxTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Find Minimum</p>
            <CodeBlock code={minTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Total & Average</p>
            <CodeBlock code={avgTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Linear Search</p>
            <CodeBlock code={linearSearchTemplate} language="pseudocode" />
          </div>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Above Average (3-Pass)</p>
            <CodeBlock code={aboveAvgTemplate} language="pseudocode" />
          </div>
          <div>
            <p className="font-bold text-gray-700 mb-2 text-sm">Second Largest</p>
            <CodeBlock code={secondLargestTemplate} language="pseudocode" />
          </div>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🚫 Common Mistakes That Cost Marks</h2>
        <div className="space-y-3">
          {[
            { mistake: "Starting index at 0", fix: "Always use ARRAY[1:N] and FOR i ← 1 TO N in Cambridge pseudocode" },
            { mistake: "Max ← 0 (or Min ← 0)", fix: "Always initialise with Arr[1] — the first actual data value" },
            { mistake: "FOR loop starts at i=1 when finding Max", fix: "Start at i=2 since Arr[1] was used for initialisation" },
            { mistake: "DECLARE Average : INTEGER", fix: "DECLARE Average : REAL — division produces decimals!" },
            { mistake: "Calculating average inside the loop", fix: "Calculate Average ← Total/N AFTER the accumulation loop ends" },
            { mistake: "Forgetting DECLARE i : INTEGER", fix: "Always declare the loop counter — it's a variable too!" },
            { mistake: "Missing ENDIF after IF inside loop", fix: "Every IF must have a matching ENDIF — even inside FOR loops" },
            { mistake: "Updating Largest before saving old value", fix: "SecondLargest ← Largest FIRST, then Largest ← new value" },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm"><span className="font-bold">❌ Mistake:</span> {item.mistake}</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-700 text-sm"><span className="font-bold">✅ Fix:</span> {item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence Checklist */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">✅ Day 6 Confidence Checklist</h2>
        <p className="text-gray-500 text-sm mb-4">Tick everything you're confident about:</p>
        <div className="space-y-2">
          {checklistItems.map((item, idx) => (
            <label
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                checklist[idx]
                  ? 'bg-green-50 border-green-300'
                  : 'bg-gray-50 border-gray-200 hover:border-indigo-200'
              }`}
            >
              <input
                type="checkbox"
                checked={checklist[idx] || false}
                onChange={() => setChecklist(prev => ({ ...prev, [idx]: !prev[idx] }))}
                className="w-5 h-5 accent-indigo-600 flex-shrink-0"
              />
              <span className={`text-sm font-medium ${checklist[idx] ? 'text-green-700' : 'text-gray-700'}`}>
                {item}
              </span>
              {checklist[idx] && <span className="ml-auto text-green-500 font-bold">✓</span>}
            </label>
          ))}
        </div>

        <div className="mt-4 p-4 bg-indigo-50 rounded-xl">
          <p className="text-indigo-800 font-semibold text-center">
            {Object.values(checklist).filter(Boolean).length}/{checklistItems.length} completed
            {Object.values(checklist).filter(Boolean).length === checklistItems.length
              ? ' 🎉 Day 6 Complete! Ready for 2D Arrays!' : ' — keep going!'}
          </p>
          <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
