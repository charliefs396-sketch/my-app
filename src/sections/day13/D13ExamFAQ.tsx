export default function D13ExamFAQ() {
  const faqs = [
    { q: "Is Push a PROCEDURE or FUNCTION?", a: "Push is a PROCEDURE — it does not return a value. You must use CALL Push(item). Pop is a FUNCTION because it returns the removed item.", warn: true },
    { q: "What is the difference between Overflow and Underflow?", a: "Overflow = trying to Push when TopPointer = MAXSIZE (stack full). Underflow = trying to Pop when TopPointer = 0 (stack empty). Both must be checked before the operation!", warn: false },
    { q: "Why do we use BYVAL in Push(BYVAL Item : STRING)?", a: "We use BYVAL because we only want to copy the value into the stack. We don't want the Push procedure to change the original variable that was passed in.", warn: false },
    { q: "What does TopPointer = 0 mean?", a: "TopPointer = 0 means the stack is EMPTY. No items are stored. This is the initial state. TopPointer = MAXSIZE means the stack is FULL.", warn: true },
    { q: "What is LIFO and why does the exam care about it?", a: "LIFO = Last In First Out. The LAST item pushed is the FIRST item popped. Exam questions often ask you to 'describe the behaviour of a stack' — always mention LIFO!", warn: false },
    { q: "What is Peek and how is it different from Pop?", a: "Peek returns Stack[TopPointer] WITHOUT changing TopPointer. Pop returns Stack[TopPointer] AND decreases TopPointer by 1. After Peek, the item is still in the stack. After Pop, it's gone.", warn: false },
    { q: "Why use an array to implement a stack?", a: "Arrays give fixed-size storage that maps directly to the stack concept. TopPointer acts as the index. The exam expects array-based implementation with TopPointer.", warn: false },
    { q: "Can a stack store different data types?", a: "No — the array must be declared with ONE data type (e.g., ARRAY[1:10] OF STRING). All items in the stack must be the same type.", warn: true },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Stacks</h1>
      <p className="text-gray-500 mb-6">Most common exam questions and mistakes for Day 13</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className={`border rounded-xl p-5 ${faq.warn ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}>
            <p className="font-bold text-gray-800 mb-2">Q{i + 1}: {faq.q}</p>
            <p className={`text-sm ${faq.warn ? 'text-red-700' : 'text-gray-600'}`}>{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="font-bold text-indigo-800 mb-2">💡 Key Points to Remember</h3>
        <ul className="text-indigo-700 text-sm space-y-1 list-disc list-inside">
          <li>LIFO — Last In First Out (always say this in exam!)</li>
          <li>Push = PROCEDURE (use CALL), Pop = FUNCTION (no CALL)</li>
          <li>Overflow when full, Underflow when empty</li>
          <li>TopPointer starts at 0 (empty) and goes up to MAXSIZE (full)</li>
          <li>Peek looks at top WITHOUT removing</li>
        </ul>
      </div>
    </div>
  );
}
