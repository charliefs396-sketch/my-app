export default function D16ExamFAQ() {
  const faqs = [
    { q: "How many columns should a trace table have?", a: "One column per variable declared, PLUS one column for OUTPUT. Loop counters (i, j, Z) always need their own column — examiners check these.", tag: "Format" },
    { q: "What do I write when a variable doesn't change?", a: "Leave the cell BLANK. Only write a value when it changes. This is a key rule — writing the same value repeatedly wastes time and looks wrong.", tag: "Rules" },
    { q: "When do I write the loop counter value?", a: "Write it at the START of each new iteration (when the FOR begins). Then show changes to other variables inside the loop body.", tag: "Loops" },
    { q: "Do I need to show the condition evaluation?", a: "YES — adding a TRUE/FALSE column for conditions (like X>Y or N<=5) shows the examiner you evaluated it. It also helps you avoid mistakes.", tag: "Critical" },
    { q: "What if I make a mistake in my trace table?", a: "Cross it out neatly with one line and write the correct value next to it. Don't scribble or use correction fluid — the examiner needs to see your working.", tag: "Exam" },
    { q: "The code has DIV and MOD — how do I handle these?", a: "Calculate explicitly. 17 DIV 5 = 3 (not 3.4!). 17 MOD 5 = 2. Work these out on rough paper first, then write the result in the trace table.", tag: "Operators" },
    { q: "How do I trace a WHILE loop?", a: "Check the condition BEFORE the first iteration. If TRUE, execute the body. Check condition again. Repeat until FALSE — then the loop ends.", tag: "WHILE" },
    { q: "Where do I write OUTPUT in the trace table?", a: "In a separate OUTPUT column. Write the exact value that would display — e.g. if OUTPUT X and X=7, write 7. If OUTPUT 'Hello', write Hello (without quotes).", tag: "Output" },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Trace Tables</h1>
      <p className="text-gray-500 mb-6">Everything examiners check in trace table questions</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-purple-500">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900">Q{i + 1}: {faq.q}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ml-2 flex-shrink-0 ${faq.tag === 'Critical' ? 'bg-red-100 text-red-700' : faq.tag === 'Format' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{faq.tag}</span>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-green-800 text-sm font-medium">✅ {faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
