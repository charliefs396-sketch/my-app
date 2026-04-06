export default function Py11ExamFAQ() {
  const faqs = [
    {
      q: 'What does "w" mode do if the file already exists?',
      a: 'It OVERWRITES it completely — all existing data is lost! Use "a" to add to existing file, or "r+" to read and write without deleting.',
      tag: '🔴 CRITICAL'
    },
    {
      q: 'Why do I need .strip() when reading lines?',
      a: 'Every line in a file ends with \\n (newline character). Without .strip(), your data has a hidden \\n at the end which causes comparison bugs. "Ali\\n" != "Ali"',
      tag: '⚠️ Common Mistake'
    },
    {
      q: 'What is the difference between with open() and open()?',
      a: 'with open() automatically closes the file when done (even if error occurs). open() requires you to manually call f.close(). Always use with in A Level answers.',
      tag: '📝 Exam Tip'
    },
    {
      q: 'How do I convert "85" (string) to 85 (integer) from a file?',
      a: 'Use int(parts[1]) or float(parts[1]). All data read from files is STRING by default. You must convert manually.',
      tag: '⚠️ Common Mistake'
    },
    {
      q: 'How do I delete a record from a file?',
      a: 'You cannot delete directly. The pattern is: 1) Read ALL lines into a list, 2) Filter out the line to delete, 3) Write the remaining lines back using "w" mode.',
      tag: '📝 Exam Tip'
    },
    {
      q: 'What happens if I try to read a file that does not exist?',
      a: 'Python raises FileNotFoundError. You can handle it with try/except: try: with open("file.txt", "r") as f: ... except FileNotFoundError: print("File not found")',
      tag: '💡 Good to Know'
    },
    {
      q: 'What is the difference between f.read(), f.readline() and f.readlines()?',
      a: 'f.read() = entire file as one string. f.readline() = one line at a time. f.readlines() = list of all lines. For loops (for line in f) is usually best for A Level.',
      tag: '📝 Exam Tip'
    },
    {
      q: 'How do I write multiple values on one line to a file?',
      a: 'Use f-strings or concatenation: f.write(f"{name},{mark}\\n"). The \\n at the end puts the NEXT record on a new line. This creates CSV format.',
      tag: '💡 Good to Know'
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">❓ Exam FAQ — File Handling</h2>
      <p className="text-gray-600">The most common questions and mistakes in A Level file handling questions.</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl font-black text-emerald-600">{i + 1}</span>
              <div>
                <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-1">{faq.tag}</span>
                <h3 className="font-bold text-gray-900">Q: {faq.q}</h3>
              </div>
            </div>
            <div className="ml-8 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
              <p className="text-gray-800 text-sm"><strong>A:</strong> {faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="font-bold text-indigo-800 mb-3">🎯 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            '"w" = WIPES existing data',
            '"a" = ADDS to end of file',
            'Always use with open()',
            '.strip() removes \\n from lines',
            '.split(",") splits CSV data',
            'int() converts string to number',
            'Delete = read + filter + write back',
            'All file data is STRING by default',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-indigo-800">
              <span className="text-indigo-500 font-bold">✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
