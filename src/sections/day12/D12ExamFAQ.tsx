export default function D12ExamFAQ() {
  const faqs = [
    { q: "Do I need CLOSEFILE after every file operation?", a: "YES — always! CLOSEFILE saves the data to disk and releases the file. If you forget CLOSEFILE, data may not be saved. It's like putting the lid back on a pen — you must do it.", tag: "Essential" },
    { q: "What happens if I use FOR WRITE on an existing file?", a: "It completely overwrites the file — all previous data is permanently deleted! If you want to keep existing data and just add more, use FOR APPEND instead.", tag: "WRITE vs APPEND" },
    { q: "What does EOF stand for and how does it work?", a: "EOF = End Of File. EOF('filename') returns TRUE when there are no more lines to read. We use WHILE NOT EOF to loop through all lines: keep reading WHILE we haven't reached the end yet.", tag: "EOF" },
    { q: "Why do we use & to join data when writing to a file?", a: "WRITEFILE can only write one string. We use & to concatenate all fields into one string, often with commas (CSV format): Name & ',' & NUM_TO_STR(Mark). NUM_TO_STR is needed because INTEGER cannot be concatenated directly.", tag: "WRITEFILE" },
    { q: "Can I use FOR READ to write to a file?", a: "No! You can only read from a file opened FOR READ. To write you need FOR WRITE or FOR APPEND. Opening with the wrong mode will cause an error in the exam.", tag: "Modes" },
    { q: "Do I need to use OPENFILE before READFILE?", a: "YES — always OPENFILE before any read/write operation. The order is always: OPENFILE → READFILE/WRITEFILE (as many times as needed) → CLOSEFILE.", tag: "Order" },
    { q: "Why use WHILE NOT EOF instead of a FOR loop for reading?", a: "Because we usually don't know how many lines the file contains. WHILE NOT EOF automatically stops when there's nothing left to read. If you knew exactly how many lines (e.g. always 10), you could use FOR — but WHILE is safer.", tag: "EOF Loop" },
    { q: "How do I search for a specific record in a file?", a: "Open FOR READ, loop WHILE NOT EOF, READFILE into a variable, then check if that line contains your search term using LEFT(), MID(), or string comparison. Set a Found flag and CLOSEFILE when done.", tag: "Search" },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — File Handling</h1>
      <p className="text-gray-500 mb-6">Most common exam questions and mistakes</p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card border-l-4 border-orange-400">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-bold text-gray-800">Q: {faq.q}</p>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-semibold whitespace-nowrap">{faq.tag}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-green-600">A:</span> {faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="font-bold text-green-700">✅ The Golden Rules</p>
        <ul className="text-green-700 text-sm mt-2 space-y-1">
          <li>• Always OPENFILE before reading/writing</li>
          <li>• Always CLOSEFILE when finished</li>
          <li>• FOR WRITE = destroys existing data</li>
          <li>• FOR APPEND = keeps existing data, adds to end</li>
          <li>• WHILE NOT EOF = standard pattern for reading all lines</li>
          <li>• Use NUM_TO_STR() when writing numbers to a file</li>
        </ul>
      </div>
    </div>
  );
}
