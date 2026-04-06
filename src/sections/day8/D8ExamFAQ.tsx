import CodeBlock from '../../components/CodeBlock';

export default function D8ExamFAQ() {
  const faqs = [
    {
      q: "Why do we return -1 when not found? Why not 0?",
      a: "Because arrays at A Level are 1-indexed! Position 0 doesn't exist, but the examiner might think you mean 'first element'. Using -1 is the universal convention — it's impossible to be a valid position, so it unambiguously means 'not found'. Some books use 0, but Cambridge examiners expect -1.",
      code: `// -1 is safe — no valid index is ever -1
RETURN -1       // ✅ Correct — -1 cannot be a real position
RETURN 0        // ⚠️ Risky — could be confused with position 0 in 0-indexed systems`,
      tip: "Always use -1 for 'not found' in Cambridge pseudocode."
    },
    {
      q: "Can I use RETURN inside a FOR loop?",
      a: "YES — for basic linear search (find first match), RETURN inside the loop immediately exits the function. This is correct and efficient! However, for counting occurrences, you must NOT use RETURN inside the loop — you'd miss the remaining elements.",
      code: `// ✅ CORRECT for basic search — early exit is fine
FOR i ← 1 TO Size
   IF DataArray[i] = Target
      THEN
         RETURN i      // Exit immediately — correct!
   ENDIF
NEXT i

// ❌ WRONG for counting — exits too early!
FOR i ← 1 TO Size
   IF DataArray[i] = Target
      THEN
         RETURN i      // Misses remaining matches!
   ENDIF
NEXT i`,
      tip: "RETURN early = only for finding FIRST match. For counting, use a counter and return at the end."
    },
    {
      q: "What's the difference between FUNCTION and PROCEDURE for search?",
      a: "Use FUNCTION when you need to get a value back (like a position number). Use PROCEDURE when you just want to do something (like print all positions). A FUNCTION has RETURNS in its header and uses RETURN to send back a value. A PROCEDURE doesn't return anything.",
      code: `// FUNCTION — returns a value
FUNCTION LinearSearch(...) RETURNS INTEGER
   ...
   RETURN i     // or RETURN -1
ENDFUNCTION

// PROCEDURE — just does work, returns nothing
PROCEDURE FindAllPositions(...)
   ...
   OUTPUT "Found at ", i
ENDPROCEDURE`,
      tip: "If the exam says 'write a function that returns the position' — use FUNCTION. If it says 'write a procedure that outputs all matches' — use PROCEDURE."
    },
    {
      q: "Do I need to declare variables INSIDE the function?",
      a: "YES! Variables declared inside a function are LOCAL — they only exist while the function runs. You MUST declare i inside the function body. The parameters (DataArray, Size, Target) don't need declaring — they're passed in. But any other variables you use inside MUST be declared with DECLARE.",
      code: `FUNCTION LinearSearch(DataArray : ARRAY[1:10] OF STRING,
                      Size : INTEGER,
                      Target : STRING) RETURNS INTEGER
   DECLARE i : INTEGER       // ✅ Must declare local variables
   // DataArray, Size, Target already declared as parameters
   
   FOR i ← 1 TO Size
      ...
   NEXT i
   
   RETURN -1
ENDFUNCTION`,
      tip: "Parameters are pre-declared. Everything else you use inside needs DECLARE."
    },
    {
      q: "What if the array has duplicate values and I want the first one?",
      a: "The basic linear search automatically handles this! Since we RETURN as soon as we find the first match, duplicates after that position are never checked. The function always returns the position of the FIRST occurrence.",
      code: `// Array: [85, 72, 85, 91, 85] — Target: 85
// i=1 → 85=85 → TRUE → RETURN 1  (immediately!)
// Positions 3 and 5 are never checked

// Result: Position 1 (the first 85)`,
      tip: "Basic LinearSearch always returns the FIRST match — that's by design."
    },
    {
      q: "How do I search in a 2D array?",
      a: "You need two nested loops — one for rows and one for columns. The outer loop goes through rows, the inner loop goes through columns. Return the row and column when found. This combines Day 7 (2D arrays) with Day 8 (searching)!",
      code: `// Search in a 2D array (5 rows, 3 cols)
DECLARE Row : INTEGER
DECLARE Col : INTEGER

FOR Row ← 1 TO 5
   FOR Col ← 1 TO 3
      IF Grid[Row, Col] = Target
         THEN
            OUTPUT "Found at row ", Row, " col ", Col
      ENDIF
   NEXT Col
NEXT Row`,
      tip: "2D search uses nested loops. The exam may ask for this in later papers — it combines Day 7 and Day 8 knowledge."
    },
    {
      q: "What is the time complexity of linear search?",
      a: "At A Level, you need to know linear search is O(n) — meaning if the array doubles in size, the maximum number of comparisons also doubles. Best case is O(1) (first element), worst case is O(n) (last element or not found). You won't need Big-O notation specifically, but you should know linear search becomes slow on very large arrays.",
      code: `// With 10 elements → max 10 comparisons
// With 100 elements → max 100 comparisons
// With 1,000,000 elements → max 1,000,000 comparisons!

// This is why Binary Search (Day 9) is better for LARGE sorted arrays
// Binary Search: 1,000,000 elements → max ~20 comparisons!`,
      tip: "Linear search is simple but slow for big data. Binary Search is much faster — but ONLY works on sorted arrays."
    },
    {
      q: "Can I modify the array during the search?",
      a: "No! Never modify the array being searched. If you change an element during the loop, you might search the wrong values. The array should be read-only during searching. If you need to modify it (e.g., delete a found element), do it AFTER the search completes.",
      code: `// ❌ WRONG — modifying during search
FOR i ← 1 TO Size
   IF DataArray[i] = Target
      THEN
         DataArray[i] ← ""   // Don't do this mid-search!
   ENDIF
NEXT i

// ✅ CORRECT — search first, then modify
Position ← LinearSearch(DataArray, Size, Target)
IF Position <> -1
   THEN
      DataArray[Position] ← ""   // Safe — search is complete`,
      tip: "Search first, modify after. Never change the array while you're still looping through it to search."
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">❓ Exam FAQ — Linear Search</h1>
      <p className="text-gray-500 mb-8">The 8 questions students get wrong most in Cambridge A Level exams.</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-sky-400">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <h3 className="font-bold text-gray-800 text-lg leading-tight">{faq.q}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed ml-12">{faq.a}</p>
            <div className="ml-12">
              <CodeBlock language="pseudocode" code={faq.code} />
              <div className="mt-3 bg-sky-50 border border-sky-200 rounded-xl p-3">
                <p className="text-sky-800 text-sm font-semibold">💡 {faq.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-3">🎯 Key Points to Remember</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Return -1 for "not found" — never 0',
            'RETURN inside loop is fine for first-match search',
            'Count occurrences: NEVER return early, use counter',
            'FUNCTION returns a value, PROCEDURE does not',
            'Declare local variables with DECLARE inside the function',
            'Works on any array — sorted or unsorted',
            'First match: stops immediately when found',
            'All matches: must loop through entire array',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-sky-200 font-bold flex-shrink-0">✓</span>
              <span className="text-sky-100 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
