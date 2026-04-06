export default function D26ExamFAQ() {
  const faqs = [
    {
      q: "Why do we use DIV instead of / for Mid?",
      a: "Mid must be an INTEGER (it's an array index). If Low=1 and High=6, (1+6)/2 = 3.5 — you can't access index 3.5! DIV gives 3 (whole number only). Always use DIV in pseudocode for Mid.",
      tag: "Syntax"
    },
    {
      q: "What does RETURN -1 mean? Why -1?",
      a: "-1 means 'not found'. We use -1 because valid array indices are 1 to N (positive numbers). So -1 is impossible as a real index — it's a safe 'error signal'. The caller checks: IF Position <> -1 THEN found.",
      tag: "Logic"
    },
    {
      q: "When does the WHILE loop exit?",
      a: "The WHILE exits when Low > High. This means the search area has shrunk to nothing — there's no valid middle point left. The item is definitely not in the array.",
      tag: "Logic"
    },
    {
      q: "Why must data be sorted before Binary Search?",
      a: "Binary Search decides 'go left' or 'go right' based on whether Target is smaller or larger than Data[Mid]. This only works if all left values are smaller and all right values are larger — which requires sorting.",
      tag: "Concept"
    },
    {
      q: "Is Binary Search a FUNCTION or PROCEDURE?",
      a: "It's a FUNCTION because it RETURNS a value (the index, or -1). A PROCEDURE would not return anything. To call it: Position ← BinarySearch(Data, Size, Target). Do NOT use CALL keyword.",
      tag: "Syntax"
    },
    {
      q: "What's the difference between Low ← Mid + 1 and Low ← Mid?",
      a: "We use Mid + 1 (not Mid) because we already checked Data[Mid] and it's not the target. Including Mid again would cause an infinite loop when Low = High. Always +1 or -1, never just Mid.",
      tag: "Common Mistake"
    },
    {
      q: "How many comparisons does Binary Search need for 1000 elements?",
      a: "At most log₂(1000) ≈ 10 comparisons. Each pass halves the search area: 1000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1. Compare this to Linear Search which might need all 1000!",
      tag: "Efficiency"
    },
    {
      q: "Can Binary Search work on strings (names)?",
      a: "Yes! Strings are compared alphabetically. 'Ali' < 'Sara' because 'A' comes before 'S'. The same algorithm works — just replace INTEGER with STRING in the parameters and use alphabetical comparison.",
      tag: "Extension"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Binary Search — Exam FAQ</h1>
      <p className="text-gray-500 mb-8">The 8 most common questions and mistakes in exams</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-black text-lg">Q{i + 1}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-800">{faq.q}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    faq.tag === 'Common Mistake' ? 'bg-red-100 text-red-700' :
                    faq.tag === 'Syntax' ? 'bg-blue-100 text-blue-700' :
                    faq.tag === 'Logic' ? 'bg-purple-100 text-purple-700' :
                    faq.tag === 'Efficiency' ? 'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>{faq.tag}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
        <h3 className="font-bold text-indigo-800 mb-3">🎯 Key Points to Remember</h3>
        <ul className="space-y-2 text-indigo-700 text-sm">
          <li>✅ Data MUST be sorted — state this in exam answers!</li>
          <li>✅ Use DIV for Mid — never division /</li>
          <li>✅ RETURN -1 for not found — -1 is the standard signal</li>
          <li>✅ Low ← Mid + 1 and High ← Mid - 1 — always ±1</li>
          <li>✅ It's a FUNCTION not a PROCEDURE — no CALL keyword</li>
          <li>✅ WHILE exits when Low &gt; High — this means not found</li>
        </ul>
      </div>
    </div>
  );
}
