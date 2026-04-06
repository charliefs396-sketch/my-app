export default function Py10ExamFAQ() {
  const faqs = [
    { q: "Why range(n-1) not range(n) for outer loop?", a: "After n-1 passes, the list is guaranteed sorted. The nth pass would be wasted. Think: 6 elements need at most 5 passes." },
    { q: "Why range(n-1-i) for inner loop?", a: "After pass i, the last i elements are already in their correct positions (the largest values bubbled to the end). No need to compare them again!" },
    { q: "Do I need the swapped flag?", a: "It's an optimization. Without it, the sort still works but does unnecessary passes. WITH it, the sort exits early if the list is already sorted. Include it — examiners love it." },
    { q: "Why does Python swap work without Temp?", a: "Python evaluates the right side as a tuple FIRST, then assigns. So data[j] and data[j+1] are both read before either is written. It's like having an invisible Temp variable." },
    { q: "Can I use .sort() instead of writing bubble sort?", a: "Only if the question doesn't specify! If it says 'write a bubble sort algorithm', you MUST write the full code. Using .sort() would score 0." },
    { q: "What's the difference between .sort() and sorted()?", a: ".sort() modifies the original list (returns None). sorted() returns a NEW sorted list and leaves the original unchanged." },
    { q: "How do I sort descending?", a: "Change > to < in the comparison. Or with built-ins: list.sort(reverse=True) or sorted(list, reverse=True)." },
    { q: "Does bubble sort work on strings?", a: "Yes! Python compares strings alphabetically. 'Ali' < 'Tom' because 'A' < 'T'. The exact same function works for strings." },
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Bubble Sort
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-2">❓ {faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl">
        <p className="font-bold text-emerald-800">💡 Key Points to Remember</p>
        <ul className="mt-2 space-y-1 text-emerald-700 text-sm">
          <li>• Outer loop: <code>range(n - 1)</code> — n-1 passes maximum</li>
          <li>• Inner loop: <code>range(n - 1 - i)</code> — skip sorted elements at end</li>
          <li>• Python swap: <code>a, b = b, a</code> — no Temp needed</li>
          <li>• Swapped flag: optimization for early exit</li>
          <li>• Works on numbers AND strings</li>
        </ul>
      </div>
    </div>
  );
}