export default function D27ExamFAQ() {
  const faqs = [
    {
      q: "Why does i start at 2 and not 1?",
      a: "Position 1 is already considered 'sorted' — a single element is trivially sorted. Starting at i=2, we take the second element and insert it into the correct position relative to position 1. If we started at i=1, j would be 0 and the WHILE would never run, wasting a pass.",
      exam: "If asked to trace, your first row should show i=2."
    },
    {
      q: "Why is BYREF used instead of BYVAL?",
      a: "We need to sort the ORIGINAL array, not a copy. BYVAL would create a copy of the array inside the procedure, sort that copy, and then discard it — the original would remain unsorted. BYREF passes the memory address of the original array so changes affect it directly.",
      exam: "Always write BYREF when passing an array to a sort procedure."
    },
    {
      q: "Why do we save Data[i] into Key before the WHILE loop?",
      a: "The shifting process overwrites Data[i] (when j = i-1, we do Data[j+1] ← Data[j] which is Data[i] ← Data[i-1]). If we didn't save Key first, we'd lose the value we're trying to insert. Key acts as a temporary holder.",
      exam: "In trace tables, always show Key being set BEFORE the WHILE loop begins."
    },
    {
      q: "Why is the insert Data[j+1] ← Key and not Data[j] ← Key?",
      a: "When the WHILE loop exits, j has already been decremented one step TOO FAR to the left. The correct insertion position is j+1 (where j+1 is either the position of the first element that wasn't bigger, or position 1 if we reached the start). Drawing it out helps!",
      exam: "This is the most common error in exam answers. j ends up one position past where Key goes."
    },
    {
      q: "What's the difference between Insertion Sort and Bubble Sort?",
      a: "Insertion Sort SHIFTS elements right to make room for Key (one variable: Key). Bubble Sort SWAPS adjacent pairs (needs three-step swap with Temp). Insertion Sort is better for nearly-sorted data. Both have O(n²) worst case but Insertion Sort has O(n) best case even without a flag.",
      exam: "Be able to write both and compare them in Paper 1."
    },
    {
      q: "What happens when the WHILE exits because j = 0?",
      a: "j = 0 means Key is smaller than ALL elements in the sorted portion. We've shifted everything one position right, creating a gap at position 1. Data[j+1] = Data[1] is where Key goes — the very first position.",
      exam: "In your trace, when j becomes 0, write Data[1] ← Key."
    },
    {
      q: "How do you sort in descending order?",
      a: "Change ONE character: Data[j] > Key becomes Data[j] < Key. This means we shift elements that are SMALLER than Key to the right, which places larger elements towards the front. Everything else stays the same.",
      exam: "Exam frequently asks: 'modify the procedure to sort in descending order'. Answer: change > to < in the WHILE condition."
    },
    {
      q: "What is the best and worst case for Insertion Sort?",
      a: "Best case O(n): array is already sorted. The WHILE loop never executes (Data[j] is never > Key). Only n-1 passes of the outer FOR loop. Worst case O(n²): array is reverse sorted. Every element must shift past all previous elements.",
      exam: "If asked 'for which type of input data is insertion sort most efficient?' — answer: already sorted (or nearly sorted) data."
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">❓ Exam FAQ — Insertion Sort</h2>
      <p className="text-gray-500 mb-6">The 8 questions students get wrong most often in Paper 2</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 px-6 py-4 border-b border-fuchsia-100">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-fuchsia-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">Q{i+1}</span>
                <p className="font-bold text-gray-900">{faq.q}</p>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 leading-relaxed mb-3">{faq.a}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2">
                <p className="text-sm font-bold text-amber-700">📝 Exam Tip: <span className="font-normal text-amber-800">{faq.exam}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-2xl border border-fuchsia-100 p-6">
        <h3 className="font-bold text-gray-900 mb-3">🎯 Key Points to Memorise</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            'i starts at 2 (position 1 is already sorted)',
            'Key saves Data[i] BEFORE shifting begins',
            'j scans LEFTWARD through sorted portion',
            'WHILE shifts elements RIGHT to make space',
            'Insert at j+1 (not j — j went one too far!)',
            'BYREF is essential — sorts original array',
            'Descending: change > to < in WHILE condition',
            'Best case O(n) — already sorted data',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-fuchsia-100">
              <span className="text-fuchsia-600 font-bold">✓</span>
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
