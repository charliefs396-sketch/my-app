export default function Py15ExamFAQ() {
  const faqs = [
    { q: "Why must data be sorted before binary search?", a: "Binary search works by eliminating HALF the data each time. It decides 'is the target in the left half or right half?' by comparing with the middle. If the data isn't sorted, this comparison gives a WRONG decision and you'll miss the target. Always sort first!" },
    { q: "Why is high = len(data) - 1 and not len(data)?", a: "Python is 0-indexed. If you have 10 items, valid indices are 0 to 9. So the last valid index is len(data) - 1 = 9. If you set high = len(data) = 10, you'd try to access data[10] which doesn't exist — IndexError crash!" },
    { q: "Why use // for mid instead of /?", a: "mid = (low + high) // 2 must be an INTEGER because it's used as an array index. Using / gives a float (e.g., 4.5) and data[4.5] would crash. Always use // (integer division) to get a whole number index." },
    { q: "When does the while loop end?", a: "The loop ends when low > high. This means the search space is empty — we've eliminated all possibilities and the target isn't in the list. At that point we return -1 (not found)." },
    { q: "Why return -1 for not found?", a: "Because -1 is not a valid index in our search convention. When we get -1 back, we know the item wasn't found. We check: if result != -1: (found) else: (not found). Some programs return None instead, but -1 is the Cambridge exam standard." },
    { q: "What's the difference between binary search in Python vs pseudocode?", a: "Two key differences: (1) Python starts at index 0, pseudocode starts at 1. So Python: low=0, high=len-1. Pseudocode: Low=1, High=Size. (2) Python uses // for integer division, pseudocode uses DIV. The logic is identical otherwise." },
    { q: "Can binary search find duplicate values?", a: "It finds A match but not necessarily the first one. If your list has multiple 23s, binary search might return any of their indices. For finding ALL occurrences, use linear search instead." },
    { q: "Why is binary search O(log n) and what does that mean?", a: "Each comparison HALVES the search space. Starting with n items: after 1 check you have n/2. After 2 checks: n/4. After k checks: n/2^k. When n/2^k = 1, k = log2(n). So for 1000 items, you need at most log2(1000) ≈ 10 comparisons. For 1,000,000 items: just 20 comparisons!" },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Binary Search
      </h1>
      <p className="text-gray-500 text-lg mb-6">Every question that comes up in Cambridge 9618 exams</p>

      <div className="space-y-4 mb-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex gap-3 mb-3">
              <span className="w-8 h-8 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
              <h3 className="font-bold text-gray-900">{faq.q}</h3>
            </div>
            <div className="ml-11 p-3 bg-cyan-50 rounded-lg text-gray-700 text-sm leading-relaxed">{faq.a}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-bold text-green-800 mb-2">✅ Key Points to Remember</h3>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Data MUST be sorted — always say this in exam answers</li>
          <li>• Python: 0-indexed (low=0, high=len-1) vs Pseudocode: 1-indexed</li>
          <li>• Use // not / for calculating mid</li>
          <li>• Return -1 means not found</li>
          <li>• Binary search is O(log n) — much faster than linear O(n)</li>
          <li>• Works on both integers AND strings (alphabetical)</li>
        </ul>
      </div>
    </div>
  );
}
