export default function Py16ExamFAQ() {
  const faqs = [
    { q: "Why does range start at 1 not 0?", a: "Index 0 is considered already sorted by itself — there's nothing to its left to compare with. We start inserting from the second element (index 1) onwards." },
    { q: "Why is the condition j >= 0 not j > 0?", a: "Python uses 0-indexing! Index 0 is the first element. If we used j > 0, we'd never insert at position 0, and the smallest element would never reach the front. In Pseudocode it's j > 0 because arrays start at 1." },
    { q: "Why do we save key = data[i] before the while loop?", a: "Because we're about to OVERWRITE data[i] by shifting data[i-1] into it. If we don't save key first, we lose the value we're trying to insert!" },
    { q: "What's the difference between shifting and swapping?", a: "Swapping moves TWO elements (needs a temp variable in Pseudocode). Shifting only moves ONE element right, leaving a gap. Insertion sort SHIFTS — this is why it uses fewer operations than Bubble Sort which SWAPS." },
    { q: "Why data[j+1] = key at the end and not data[j] = key?", a: "Because the while loop decrements j one extra time after the last comparison. When j >= 0 fails, j has gone one position too far left. So the correct insertion position is j+1, not j." },
    { q: "Does Python need BYREF like Pseudocode?", a: "No! Python lists are passed by reference automatically. Changes inside the function affect the original list. That's why we can return data optionally — the original is already modified." },
    { q: "What is the best case for Insertion Sort?", a: "O(n) — when the list is already sorted. The while loop never executes because data[j] > key is always False. We just scan through without doing anything." },
    { q: "When should I use Insertion Sort vs Bubble Sort?", a: "Insertion Sort is generally better — fewer operations on average. Use Insertion Sort when the data is nearly sorted. Use Bubble Sort when its simplicity matters more. Both are O(n²) worst case." },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">❓ Exam FAQ</h2>
      <p className="text-gray-600 mb-6">8 most common questions about Insertion Sort in Python exams</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
              <p className="font-bold text-indigo-900">Q{i + 1}: {faq.q}</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
