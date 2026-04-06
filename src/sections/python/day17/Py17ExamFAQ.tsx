export default function Py17ExamFAQ() {
  const faqs = [
    {
      q: 'What is the base case?',
      a: 'The base case is the stopping condition. Without it, the function keeps calling itself forever.'
    },
    {
      q: 'What is the recursive case?',
      a: 'It is the part where the function calls itself on a smaller or simpler version of the problem.'
    },
    {
      q: 'What happens if recursion never reaches the base case?',
      a: 'Python raises a RecursionError because the call stack gets too deep.'
    },
    {
      q: 'Why is factorial base case n <= 1 instead of n == 1?',
      a: 'Using n <= 1 safely handles both 1 and 0. Since 0! = 1, this is often the better version.'
    },
    {
      q: 'Is recursion always better than loops?',
      a: 'No. Recursion is often easier to describe for self-similar problems, but loops are often faster and use less memory.'
    },
    {
      q: 'Why is Fibonacci recursion inefficient?',
      a: 'Because it repeats the same calculations many times, like fibonacci(3) being recomputed again and again.'
    },
    {
      q: 'Does every recursive function need return?',
      a: 'Recursive FUNCTIONS need return values. Recursive PROCEDURES can just call themselves without returning a value.'
    },
    {
      q: 'How do I trace recursion in exams?',
      a: 'Write each call on a new line, go down to the base case, then work back upward filling in return values.'
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">❓ Exam FAQ</h2>
      <p className="text-gray-600 mb-6">The most common recursion mistakes students make</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-violet-50 px-5 py-3 border-b border-violet-100">
              <p className="font-bold text-violet-900">Q{i + 1}: {faq.q}</p>
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
