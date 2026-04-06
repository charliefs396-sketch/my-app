import CodeBlock from '../../components/CodeBlock';

export default function D9ExamFAQ() {
  const faqs = [
    {
      q: "Why do we use BYREF and not BYVAL for the array parameter?",
      a: "Because Bubble Sort needs to permanently modify the original array. BYVAL passes a copy, so any swaps would only happen inside the procedure and the original array would remain unsorted. BYREF passes the actual array so changes persist after the procedure ends.",
      code: `// BYREF = changes affect original array ✅
PROCEDURE BubbleSort(BYREF Data : ARRAY, Size : INTEGER)

// BYVAL = changes lost when procedure ends ❌
PROCEDURE BubbleSort(BYVAL Data : ARRAY, Size : INTEGER)`,
      type: 'danger'
    },
    {
      q: "Why do we need a Temp variable to swap? Can't we just do A ← B and B ← A?",
      a: "No! When you do A ← B, the original value of A is lost. Then B ← A just copies the new A (which is already B) back to B — nothing changes! You need Temp to save the original value of A before overwriting it.",
      code: `// Wrong — loses value of A:
A ← B   // A = B now (lost original A!)
B ← A   // B = B (copies B back to itself)

// Correct — uses Temp:
Temp ← A    // Save A
A ← B       // Overwrite A safely  
B ← Temp    // Restore original A into B`,
      type: 'danger'
    },
    {
      q: "Why is the inner loop 'FOR j ← 1 TO Size - i' and not 'Size - 1'?",
      a: "After each pass i, the last i elements are guaranteed to be in their correct final positions. There's no point comparing them again. Using Size - i instead of Size - 1 saves comparisons and is the standard optimisation. The examiner WILL ask about this!",
      code: `// After Pass 1: last 1 element sorted → only compare to Size-1
// After Pass 2: last 2 elements sorted → only compare to Size-2
// After Pass i: last i elements sorted → only compare to Size-i

FOR i ← 1 TO Size - 1
   FOR j ← 1 TO Size - i  // ← Each pass gets shorter!
      ...
   NEXT j
NEXT i`,
      type: 'info'
    },
    {
      q: "What does the Swapped flag do and why is it useful?",
      a: "The Swapped flag is set to FALSE at the start of each pass. If the inner loop completes without setting Swapped to TRUE, it means no swaps were needed — the array is already sorted. We can exit early instead of doing unnecessary passes. This improves best-case performance from O(n²) to O(n).",
      code: `FOR i ← 1 TO Size - 1
   Swapped ← FALSE       // Assume sorted this pass
   FOR j ← 1 TO Size - i
      IF Data[j] > Data[j + 1]
         THEN
            // ... swap ...
            Swapped ← TRUE   // A swap happened
      ENDIF
   NEXT j
   IF NOT Swapped
      THEN
         RETURN  // No swaps = already sorted! Stop now.
   ENDIF
NEXT i`,
      type: 'success'
    },
    {
      q: "How do I modify Bubble Sort to sort in descending order?",
      a: "Change the comparison from > to <. That's the only change! With >, we swap when the left element is bigger (pushing big values right = ascending). With <, we swap when the left element is smaller (pushing small values right = descending).",
      code: `// Ascending (smallest → largest):
IF Data[j] > Data[j + 1]   // swap if left too big

// Descending (largest → smallest):
IF Data[j] < Data[j + 1]   // swap if left too small`,
      type: 'info'
    },
    {
      q: "When sorting parallel arrays, what must I always remember?",
      a: "Whenever you swap elements in the key array (e.g., Marks), you MUST also swap the same positions in ALL parallel arrays (e.g., Names). Otherwise the data becomes misaligned — a mark gets associated with the wrong student.",
      code: `// When Marks[j] and Marks[j+1] are swapped...
TempMark ← Marks[j]
Marks[j] ← Marks[j + 1]
Marks[j + 1] ← TempMark

// ...you MUST also swap Names at same positions!
TempName ← Names[j]
Names[j] ← Names[j + 1]
Names[j + 1] ← TempName`,
      type: 'danger'
    },
    {
      q: "How many passes does Bubble Sort need in the worst case?",
      a: "In the worst case (reverse-sorted array), Bubble Sort needs n-1 passes, where n is the number of elements. Each pass places one element in its correct position. After n-1 passes, all elements are sorted (the last one is automatically correct).",
      code: `// For Size = 6:
// Pass 1 → sorts element 6
// Pass 2 → sorts element 5
// Pass 3 → sorts element 4
// Pass 4 → sorts element 3
// Pass 5 → sorts element 2
// (element 1 is automatically correct)
// Maximum 5 = Size - 1 passes`,
      type: 'info'
    },
    {
      q: "What is the difference between CALL and ← when using procedures and functions?",
      a: "PROCEDUREs are called with CALL. FUNCTIONs are called by assigning their return value. Bubble Sort is a PROCEDURE so you use CALL.",
      code: `// PROCEDURE — use CALL:
CALL BubbleSort(Numbers, 10)

// FUNCTION — use assignment with ←:
Position ← LinearSearch(Names, 10, "Ali")

// NEVER write:
BubbleSort(Numbers, 10)      // ❌ Missing CALL
Result ← BubbleSort(...)    // ❌ BubbleSort returns nothing`,
      type: 'danger'
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Bubble Sort</h1>
      <p className="text-gray-500 mb-8">The most common questions students get wrong. Read every one!</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="card">
            <div className="flex items-start gap-3 mb-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                faq.type === 'danger' ? 'bg-red-100 text-red-600' :
                faq.type === 'success' ? 'bg-green-100 text-green-600' :
                'bg-blue-100 text-blue-600'
              }`}>Q{i + 1}</span>
              <h3 className="font-bold text-gray-900 text-lg leading-snug">{faq.q}</h3>
            </div>
            <div className={`rounded-xl p-4 mb-4 ${
              faq.type === 'danger' ? 'bg-red-50 border border-red-200' :
              faq.type === 'success' ? 'bg-green-50 border border-green-200' :
              'bg-blue-50 border border-blue-200'
            }`}>
              <p className={`text-sm leading-relaxed ${
                faq.type === 'danger' ? 'text-red-800' :
                faq.type === 'success' ? 'text-green-800' :
                'text-blue-800'
              }`}>{faq.a}</p>
            </div>
            <CodeBlock language="pseudocode" code={faq.code} />
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <h3 className="font-bold text-gray-900 mb-3">⚡ Key Points to Remember:</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ['BYREF', 'Always use BYREF for the array in Bubble Sort'],
            ['Temp variable', 'Always need 3-variable swap (Temp ← A, A ← B, B ← Temp)'],
            ['Size - i', 'Inner loop goes to Size - i, not Size - 1'],
            ['Swapped flag', 'Set FALSE each pass, RETURN if still FALSE after pass'],
            ['Descending', 'Just change > to < in the comparison'],
            ['Parallel arrays', 'Swap ALL parallel arrays when swapping key array'],
            ['CALL keyword', 'Use CALL BubbleSort(...), not just BubbleSort(...)'],
            ['Max passes', 'Maximum n-1 passes for n elements'],
          ].map(([term, desc], i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-indigo-500 mt-0.5">✓</span>
              <div>
                <span className="font-bold text-indigo-700">{term}:</span>
                <span className="text-gray-600 text-sm ml-1">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
