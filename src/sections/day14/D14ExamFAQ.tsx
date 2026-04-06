export default function D14ExamFAQ() {
  const faqs = [
    { q: "What does FIFO mean?", a: "FIFO = First In First Out. The first item added to the queue (Enqueued) is the first item removed (Dequeued). Like a real queue of people.", warn: false },
    { q: "Is Enqueue a PROCEDURE or FUNCTION?", a: "Enqueue is a PROCEDURE — it doesn't return a value. Use CALL Enqueue(item). Dequeue is a FUNCTION because it returns the removed item.", warn: true },
    { q: "Why do we need Size? Can't we use Front and Rear?", a: "Size is needed because in a circular queue, when Front and Rear are equal, you can't tell if the queue is empty or full without Size. Size removes this ambiguity completely.", warn: true },
    { q: "What is the MOD formula and why does it work?", a: "Rear ← (Rear MOD MAXSIZE) + 1. When Rear = MAXSIZE, Rear MOD MAXSIZE = 0, and 0 + 1 = 1. This wraps Rear back to position 1. Same for Front. This is what makes the queue circular!", warn: false },
    { q: "What is the difference between a linear and circular queue?", a: "Linear: Front only moves forward, positions behind it are wasted forever. Circular: Uses MOD to wrap Rear and Front around, so old positions are reused — no wasted space.", warn: false },
    { q: "What happens when you Dequeue from an empty queue?", a: "Queue Underflow — check Size = 0 BEFORE Dequeuing. Return an empty string '' as the error value and output an error message.", warn: true },
    { q: "What happens when you Enqueue into a full queue?", a: "Queue Full — check Size = MAXSIZE BEFORE Enqueuing. Output an error message. Do NOT change Front, Rear, or Size.", warn: false },
    { q: "What are 3 real-world uses of a queue?", a: "1. Printer queue — documents printed in order sent. 2. Operating system process scheduling — CPU runs processes in order. 3. Call centre — callers answered in order they called.", warn: false },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Queues</h1>
      <p className="text-gray-500 mb-6">Most common exam questions and mistakes for Day 14</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className={`border rounded-xl p-5 ${faq.warn ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}>
            <p className="font-bold text-gray-800 mb-2">Q{i + 1}: {faq.q}</p>
            <p className={`text-sm ${faq.warn ? 'text-red-700' : 'text-gray-600'}`}>{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
        <h3 className="font-bold text-emerald-800 mb-2">💡 Key Points to Remember</h3>
        <ul className="text-emerald-700 text-sm space-y-1 list-disc list-inside">
          <li>FIFO — First In First Out (always say this in exam!)</li>
          <li>Enqueue = PROCEDURE (CALL), Dequeue = FUNCTION (no CALL)</li>
          <li>MOD formula: Rear ← (Rear MOD MAXSIZE) + 1</li>
          <li>Use Size to check empty/full — NOT Front and Rear</li>
          <li>Circular queue prevents wasted space</li>
        </ul>
      </div>
    </div>
  );
}
