export default function D6ExamFAQ() {
  const faqs = [
    {
      q: "Why does my array declaration lose marks?",
      a: "Most likely because you're missing the bounds or data type. The FULL correct syntax is: DECLARE Marks : ARRAY[1:10] OF INTEGER — you need ALL of: DECLARE keyword, name, colon, ARRAY keyword, square brackets with lower:upper bounds, OF keyword, and data type.",
      wrong: "DECLARE Marks : ARRAY OF INTEGER",
      right: "DECLARE Marks : ARRAY[1:10] OF INTEGER",
      tip: "The bounds [1:10] tell the examiner exactly how many elements. Without them, you lose the mark."
    },
    {
      q: "Should my array start at index 0 or 1?",
      a: "At Cambridge A Level (9618), arrays are 1-indexed UNLESS the question explicitly tells you otherwise. This is different from Python and most programming languages which use 0-indexing. In the exam, always use ARRAY[1:N] and FOR i ← 1 TO N.",
      wrong: "FOR i ← 0 TO 9  // Python style - WRONG in pseudocode",
      right: "FOR i ← 1 TO 10  // Cambridge pseudocode - CORRECT",
      tip: "Remember: you're writing Cambridge pseudocode, NOT Python. 1-indexed!"
    },
    {
      q: "Why do I initialise Max with Marks[1] and not 0?",
      a: "Because if all marks are negative (e.g. temperatures below zero), initialising with 0 would give a wrong answer! By initialising with the first actual array element, you guarantee Max starts as a real value from your data. Then the loop correctly compares all REMAINING elements.",
      wrong: "Max ← 0  // Wrong! What if all values are negative?",
      right: "Max ← Marks[1]  // Always correct — starts with real data",
      tip: "This is a very common exam question: 'Why is Max initialised to Marks[1] and not 0?'"
    },
    {
      q: "Why does my loop for finding Max start at i=2 not i=1?",
      a: "Because element [1] was already used to initialise Max! If you started at i=1, you'd compare Marks[1] against Max which IS Marks[1] — a pointless comparison. Starting at i=2 means you compare all elements you haven't seen yet against your current best.",
      wrong: "Max ← Marks[1]\nFOR i ← 1 TO 10  // compares Marks[1] with itself!",
      right: "Max ← Marks[1]\nFOR i ← 2 TO 10  // only compares elements 2 to 10",
      tip: "Starting from 2 is correct AND slightly more efficient. Examiners notice this!"
    },
    {
      q: "Why must Average be REAL and not INTEGER?",
      a: "Because division can produce a decimal result. For example, if Total=75 and N=10, Average=7.5. If Average is declared as INTEGER, the 7.5 would be truncated to 7 — wrong answer! Always declare Average as REAL to preserve decimal places.",
      wrong: "DECLARE Average : INTEGER  // loses decimal part!",
      right: "DECLARE Average : REAL     // keeps decimal places",
      tip: "Rule: any variable that stores a result of division should be REAL."
    },
    {
      q: "Why can't I calculate the average in the same loop as inputting?",
      a: "You CAN combine the total accumulation with input in one loop. What you CANNOT do is calculate the average in the same loop — because you don't know the total until you've seen ALL the values. You need the complete total FIRST, then divide once AFTER the loop ends.",
      wrong: "FOR i←1 TO N\n  INPUT Marks[i]\n  Average ← Total/N  // Total isn't complete yet!",
      right: "FOR i←1 TO N\n  INPUT Marks[i]\n  Total←Total+Marks[i]\nNEXT i\nAverage←Total/N  // Now Total is complete",
      tip: "Average must be calculated AFTER the accumulation loop, not inside it."
    },
    {
      q: "What's the difference between ARRAY[1:10] and ARRAY[0:9]?",
      a: "Both store 10 elements, but the index range is different. ARRAY[1:10] uses indices 1,2,3...10 while ARRAY[0:9] uses indices 0,1,2...9. For Cambridge 9618 pseudocode, always use ARRAY[1:N] (1-indexed). If a question gives you a specific range, use whatever they specify.",
      wrong: "ARRAY[0:9]  // avoid in pseudocode unless specified",
      right: "ARRAY[1:10]  // standard for Cambridge 9618",
      tip: "Formula: number of elements = upper − lower + 1. So [1:10] has 10−1+1 = 10 elements."
    },
    {
      q: "How do parallel arrays work and when do I use them?",
      a: "Parallel arrays are two (or more) arrays where the same index represents related data. E.g. Names[3] and Marks[3] both belong to the same student. Use parallel arrays when you have related data of DIFFERENT types — e.g. names (STRING) and marks (INTEGER). You can't mix types in one array.",
      wrong: "// Can't do this - different types in one array\nDECLARE StudentData : ARRAY[1:10] OF ???",
      right: "// Parallel arrays solve this!\nDECLARE Names : ARRAY[1:10] OF STRING\nDECLARE Marks : ARRAY[1:10] OF INTEGER",
      tip: "When updating one parallel array (e.g. MaxName), always update the other (Max) at the same time — they must stay in sync!"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ – 1D Arrays
      </h1>
      <p className="text-gray-500 text-lg mb-8">The most common array mistakes and questions in Cambridge 9618 — answered in detail</p>

      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="bg-indigo-100 text-indigo-700 font-bold text-lg px-3 py-1 rounded-xl flex-shrink-0">Q{idx+1}</span>
              <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 pl-12">{faq.a}</p>

            <div className="grid md:grid-cols-2 gap-3 pl-12 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-red-700 font-bold text-sm mb-1">❌ Wrong / Loses marks:</p>
                <pre className="font-mono text-red-800 text-xs whitespace-pre-wrap">{faq.wrong}</pre>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <p className="text-green-700 font-bold text-sm mb-1">✅ Correct / Full marks:</p>
                <pre className="font-mono text-green-800 text-xs whitespace-pre-wrap">{faq.right}</pre>
              </div>
            </div>

            <div className="pl-12">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-amber-800 text-sm"><span className="font-bold">💡 Exam Tip:</span> {faq.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <p className="font-bold text-indigo-800 text-lg mb-3">🎯 Day 6 Key Points to Remember</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "DECLARE with ARRAY[lower:upper] OF Type",
            "1-indexed: use ARRAY[1:N], loop FROM 1 TO N",
            "Max/Min: initialise with Arr[1], loop from i=2",
            "Average: REAL type, calculate AFTER total loop",
            "Parallel arrays: same index = related data",
            "Above average: needs 3 passes (input, total, compare)",
            "Second largest: track both Largest and SecondLargest",
            "Linear search: use WHILE with Found = FALSE",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-indigo-200">
              <span className="text-indigo-500 font-bold flex-shrink-0">✓</span>
              <p className="text-gray-700 text-sm font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
