export default function Py9ExamFAQ() {
  const faqs = [
    { q: "Why return -1 and not 0 when not found?", a: "Because 0 is a VALID index (the first element)! If we returned 0, we couldn't tell if the target was at position 0 or wasn't found. -1 is impossible as an index, so it clearly means 'not found'." },
    { q: "Can I use 'for x in data' instead of 'for i in range(len(data))'?", a: "Only if you don't need the index! 'for x in data' gives you the VALUE. 'for i in range(len(data))' gives you the INDEX. Exam questions usually ask you to return the position, so use range(len(data))." },
    { q: "Why does return -1 go OUTSIDE the loop?", a: "If return -1 is INSIDE the loop (in an else), it would return -1 after checking just the FIRST element! You need to check ALL elements before concluding it's not found." },
    { q: "What's the difference between == and 'in'?", a: "'in' is a shortcut: 'if target in data' returns True/False. But it doesn't tell you WHERE. Use == in a loop when you need the index. Use 'in' when you just need True/False." },
    { q: "Does linear search work on unsorted data?", a: "YES! That's the beauty of linear search — it works on ANY data, sorted or unsorted. Binary search requires sorted data, but linear search does not." },
    { q: "What if there are duplicates?", a: "Basic linear_search returns the FIRST match only (because return exits the function). Use count_occurrences or find_all_positions for handling duplicates." },
    { q: "Is linear search efficient?", a: "For small lists, yes. For large lists (thousands/millions of items), it's slow because it checks every element. Binary search is O(log n) but requires sorted data. Linear search is O(n)." },
    { q: "How do I search for a partial match (e.g., names starting with 'A')?", a: "Change the condition: if data[i].startswith('A') or if target in data[i]. This is still linear search, just with a different comparison." }
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Linear Search in Python
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">❓ {faq.q}</h3>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
        <h3 className="text-xl font-bold text-emerald-800 mb-3">🔑 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">1.</span> Return -1 for not found (not 0, not False)</div>
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">2.</span> Use range(len(data)) when you need the index</div>
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">3.</span> return -1 goes AFTER the loop, not inside it</div>
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">4.</span> Works on unsorted data (unlike binary search)</div>
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">5.</span> Use == for comparison, not = (assignment)</div>
          <div className="bg-white rounded-lg p-3"><span className="font-bold text-emerald-700">6.</span> Basic version returns FIRST match only</div>
        </div>
      </div>
    </div>
  );
}