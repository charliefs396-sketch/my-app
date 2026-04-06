export default function D11ExamFAQ() {
  const faqs = [
    {
      q: "Do I need DECLARE inside a TYPE definition?",
      a: "YES! Inside a TYPE block you still write DECLARE for each field. This is different from some other languages. Missing DECLARE inside TYPE = lost marks.",
      tag: "Syntax"
    },
    {
      q: "What is dot notation and when must I use it?",
      a: "Dot notation is VariableName.FieldName. You MUST use it every time you access a field — for input, output, assignment, and conditions. Writing just 'Name' instead of 'Student.Name' will lose marks.",
      tag: "Access"
    },
    {
      q: "Can a record field be an array?",
      a: "Yes! A field can be any data type including ARRAY. For example: DECLARE Marks : ARRAY[1:5] OF INTEGER inside a TYPE block is valid.",
      tag: "Advanced"
    },
    {
      q: "What type is Temp when swapping records?",
      a: "Temp must be the SAME TYPE as the record — e.g. DECLARE Temp : StudentRecord. NOT INTEGER or STRING. You're swapping the whole record, not just one field.",
      tag: "Sorting"
    },
    {
      q: "Can I use CASE with record fields?",
      a: "Yes! You can use record fields in any condition. E.g. CASE OF Students[i].Grade — 'A': OUTPUT 'Excellent' — 'B': OUTPUT 'Good' — ENDCASE",
      tag: "Selection"
    },
    {
      q: "Where does the TYPE definition go in my code?",
      a: "The TYPE definition must come BEFORE you declare any variables of that type. Put TYPE definitions at the very top of your pseudocode, before any DECLARE statements.",
      tag: "Structure"
    },
    {
      q: "What is the difference between TYPE and DECLARE?",
      a: "TYPE creates a new data type (a blueprint). DECLARE creates a variable using that type. You need both: first TYPE StudentRecord (blueprint), then DECLARE Student : StudentRecord (actual variable).",
      tag: "Concept"
    },
    {
      q: "How do I output multiple fields of a record?",
      a: "Use multiple OUTPUT statements or concatenate: OUTPUT Students[i].Name, ' - ', Students[i].Mark, ' - ', Students[i].Grade",
      tag: "Output"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Records</h1>
      <p className="text-gray-500 mb-6">The most common questions and mistakes in A Level exams</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-red-400">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-bold text-gray-800">Q: {faq.q}</p>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold whitespace-nowrap">{faq.tag}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-green-600">A:</span> {faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="font-bold text-green-700">✅ Key Points to Remember</p>
        <ul className="text-green-700 text-sm mt-2 space-y-1">
          <li>• TYPE definition comes first, DECLARE variable comes second</li>
          <li>• Always use dot notation: Variable.Field</li>
          <li>• Temp for swapping records must be the same record type</li>
          <li>• Fields inside TYPE still need DECLARE keyword</li>
          <li>• ENDTYPE closes the definition — never forget it!</li>
        </ul>
      </div>
    </div>
  );
}
