export default function D18ExamFAQ() {
  const faqs = [
    {
      q: "What is the difference between a filled circle and an empty circle on a structure chart?",
      a: "Filled circle (●) = a DATA parameter — carries an actual value like a number, string, or array. Empty circle (○) = a FLAG/signal parameter — carries only TRUE/FALSE (boolean). Both can point up or down depending on direction.",
      tip: "Think: Filled = Full of data. Empty = just a yes/no signal."
    },
    {
      q: "Which shape do I use for INPUT and OUTPUT in a flowchart?",
      a: "BOTH input and output use a PARALLELOGRAM (slanted rectangle). The rectangle is only for processing steps like assignments and calculations. This is a very common mistake — don't use a rectangle for input/output!",
      tip: "Parallelogram = data flowing in OR out. Rectangle = processing happening inside."
    },
    {
      q: "What does a structure chart show that a flowchart doesn't?",
      a: "A structure chart shows the MODULAR DESIGN — which modules exist, how they're connected, and what data passes between them. A flowchart shows the DETAILED LOGIC — the step-by-step algorithm with conditions and loops. They're complementary, not the same thing.",
      tip: "Structure chart = WHAT modules exist. Flowchart = HOW the algorithm works."
    },
    {
      q: "How do I show a WHILE loop in a flowchart?",
      a: "For a WHILE loop: the DIAMOND (condition) comes FIRST, then the process box. The back arrow goes from the process box back UP to the diamond. If the condition is FALSE, you exit the loop.",
      tip: "WHILE = check condition FIRST. REPEAT = do action FIRST, check condition AFTER."
    },
    {
      q: "How do I show a REPEAT...UNTIL loop in a flowchart?",
      a: "For REPEAT...UNTIL: the process box comes FIRST, then the diamond. The back arrow goes from the NO exit of the diamond back UP to the process box. The loop continues while the condition is FALSE (exits when TRUE).",
      tip: "Remember: UNTIL means 'loop UNTIL this becomes true' — so NO path loops back, YES path exits."
    },
    {
      q: "Do I need to show data types in a structure chart?",
      a: "No — structure charts show module names and parameter NAMES (with filled/empty circles), but NOT data types. Data types go in identifier tables, not structure charts. Just label the arrows with the parameter name.",
      tip: "Write the variable NAME next to the arrow, not the type. e.g. write 'Mark' not 'INTEGER'."
    },
    {
      q: "What's the difference between a structure chart and stepwise refinement?",
      a: "Stepwise refinement is a TEXT-based top-down design (numbered steps like 1.1, 1.1.1). A structure chart is a DIAGRAM-based top-down design showing the same hierarchy visually with boxes and arrows. Both show the same modular breakdown but in different formats.",
      tip: "Both are used in Paper 2 design questions — know both formats!"
    },
    {
      q: "Can a diamond in a flowchart have more than 2 exits?",
      a: "In Cambridge A Level, a diamond should have exactly 2 exits — YES and NO (or TRUE and FALSE). If you have multiple conditions, use multiple diamonds chained together. Never put 3 exits on one diamond.",
      tip: "Always label both exits of every diamond — examiners deduct marks for unlabelled paths!"
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">❓ Exam FAQ — Structure Charts & Flowcharts</h2>
      <p className="text-gray-600">The most common questions students get wrong in Paper 2.</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex gap-3 mb-3">
              <span className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
              <h3 className="font-bold text-gray-800">{faq.q}</h3>
            </div>
            <div className="ml-11">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                <p className="text-green-800 text-sm">{faq.a}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-500">💡</span>
                <p className="text-amber-700 text-xs">{faq.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <h3 className="font-bold text-indigo-800 mb-3">🎯 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-indigo-700">
          <p>● Filled circle = DATA parameter</p>
          <p>○ Empty circle = FLAG/BOOLEAN parameter</p>
          <p>↓ Arrow down = passed TO module</p>
          <p>↑ Arrow up = returned FROM module</p>
          <p>Parallelogram = INPUT or OUTPUT</p>
          <p>Diamond = condition/decision (YES/NO)</p>
          <p>Rectangle = process/assignment/CALL</p>
          <p>Rounded rectangle = START or STOP</p>
        </div>
      </div>
    </div>
  );
}
