export default function D17ExamFAQ() {
  const faqs = [
    {
      q: 'Do I need to include loop counters like i in the identifier table?',
      a: 'YES! Every single identifier must be in the table, including i, j, Count, Temp — even if they seem obvious. Cambridge mark schemes explicitly check for loop counters.',
      tag: 'Identifier Tables',
    },
    {
      q: "What data type should I use for averages?",
      a: "Always REAL for averages, percentages, prices — anything that could have decimal places. Using INTEGER for an average is a common mistake that loses marks.",
      tag: 'Data Types',
    },
    {
      q: "What's the difference between Level 1 and Level 2 refinement?",
      a: "Level 1 is 3-5 very broad steps (Input, Process, Output). Level 2 breaks each Level 1 step into smaller sub-steps using decimal numbering (1.1, 1.2, 1.1.1). Level 3 is actual pseudocode.",
      tag: 'Stepwise Refinement',
    },
    {
      q: 'Do I need to write pseudocode at Level 2 of my refinement?',
      a: 'NO! Level 2 should still be plain English descriptions. Only Level 3 is pseudocode. Writing pseudocode at Level 2 wastes time and gets no extra marks.',
      tag: 'Stepwise Refinement',
    },
    {
      q: 'How detailed should my identifier table description be?',
      a: 'Very specific! Instead of "stores a value", write "stores the student\'s exam mark as an integer between 0 and 100". For BOOLEAN, say what TRUE and FALSE each mean.',
      tag: 'Identifier Tables',
    },
    {
      q: 'Should I use PROCEDURE or FUNCTION in my algorithm design?',
      a: 'Use FUNCTION when the module returns a value (like a calculated result or search position). Use PROCEDURE when it just performs an action (like displaying output or modifying arrays). Using both shows good design.',
      tag: 'Algorithm Design',
    },
    {
      q: 'Do I need to validate input in my pseudocode?',
      a: 'YES — input validation is almost always worth marks. Use REPEAT...UNTIL for validation loops. Always check numeric ranges (0-100 for marks) and menu choices.',
      tag: 'Algorithm Design',
    },
    {
      q: 'How do I describe an array in an identifier table?',
      a: 'Include the full declaration: ARRAY[1:30] OF INTEGER. Not just "array" or "list". The bounds and element type are both important for marks.',
      tag: 'Identifier Tables',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">❓ Exam FAQ</h2>
      <p className="text-gray-500 mb-6">Most common questions and mistakes on identifier tables and algorithm design</p>

      <div className="space-y-4 mb-8">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-sky-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">❓</span>
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 bg-sky-100 text-sky-700 text-xs font-bold rounded mb-2">{faq.tag}</span>
                <p className="font-bold text-gray-800">{faq.q}</p>
              </div>
            </div>
            <div className="ml-9 bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm"><span className="font-bold">✅ Answer: </span>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="font-bold text-indigo-800 mb-3">🎯 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Include EVERY identifier — even i and j',
            'Average = REAL, never INTEGER',
            'Level 2 = English, not pseudocode',
            'Arrays need bounds: ARRAY[1:10] OF STRING',
            'BOOLEAN descriptions need TRUE/FALSE meaning',
            'Always include input validation in pseudocode',
            'Use PROCEDURE for actions, FUNCTION for values',
            'DECLARE every variable at the top',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-indigo-700">
              <span className="text-indigo-400">●</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
