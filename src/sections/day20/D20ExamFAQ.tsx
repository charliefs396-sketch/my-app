export default function D20ExamFAQ() {
  const faqs = [
    {
      q: "What is the difference between Iterative and RAD models?",
      a: "Both use cycles and prototyping, but RAD focuses on SPEED using timeboxing and code generators. RAD is faster but may have less documentation. Iterative is more structured with formal planning in each cycle. RAD needs constant user availability; Iterative is more flexible.",
      tag: "Common 4-mark question"
    },
    {
      q: "Why would you choose the Waterfall model over Iterative?",
      a: "Use Waterfall when: requirements are clear and fixed from the start, the project is small and well-understood, thorough documentation is needed, cost and time must be estimated accurately upfront. Example: 'The client has provided a detailed specification that will not change.'",
      tag: "6-mark question"
    },
    {
      q: "What is the difference between Corrective and Adaptive maintenance?",
      a: "Corrective = fixing a BUG that already exists (something is broken). Adaptive = modifying to work in a NEW ENVIRONMENT (law change, OS change, hardware change). Key: Corrective fixes errors. Adaptive responds to external changes.",
      tag: "Most tested"
    },
    {
      q: "Is adding a new feature Corrective or Perfective maintenance?",
      a: "PERFECTIVE. Adding new features improves the system but the system was already working correctly. Perfective = improvements and enhancements. Corrective = fixing bugs. Don't confuse them!",
      tag: "Common mistake"
    },
    {
      q: "What are the 5 stages of the Waterfall model in order?",
      a: "1. Analysis (gather requirements, feasibility study) → 2. Design (data structures, algorithms, UI) → 3. Coding/Implementation (write the program) → 4. Testing (test against requirements) → 5. Maintenance (corrective/adaptive/perfective). Remember: A Dog Can Tickle Mice.",
      tag: "Memorise this"
    },
    {
      q: "What is a feasibility study and which stage does it belong to?",
      a: "A feasibility study assesses whether the project is POSSIBLE and WORTHWHILE before development begins. It belongs to the ANALYSIS stage of the Waterfall model. It considers: technical feasibility, financial feasibility, time feasibility.",
      tag: "Paper 1 theory"
    },
    {
      q: "What does 'timeboxing' mean in RAD?",
      a: "Timeboxing means giving each phase a FIXED TIME LIMIT. The team must deliver something working within that time, even if not perfect. This ensures RAD stays fast and prevents phases from dragging on forever. If the timebox ends, whatever is built gets delivered.",
      tag: "RAD specific"
    },
    {
      q: "Why is the Iterative model 'can be never-ending'?",
      a: "Because each iteration can reveal new requirements or improvements. The client keeps asking for more features, and since the model supports changing requirements, development continues indefinitely. This is called 'scope creep'. You need strong project management to decide when to stop.",
      tag: "Common exam answer"
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Day 20
      </h1>
      <p className="text-gray-500 text-lg mb-8">The most common exam questions on SDLC and Maintenance</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-indigo-100 text-indigo-700 font-black text-lg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-bold text-gray-800">Q: {faq.q}</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">{faq.tag}</span>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-indigo-700">A:</strong> {faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="font-bold text-green-800 mb-3">🎯 Key Points to Remember</h3>
        <ul className="space-y-2 text-sm text-green-700">
          <li>✅ <strong>Waterfall</strong> = linear, sequential, good for fixed requirements, bad for changes</li>
          <li>✅ <strong>Iterative</strong> = repeating cycles, good for complex/changing projects, can be never-ending</li>
          <li>✅ <strong>RAD</strong> = fast prototyping, timeboxing, good for tight deadlines, may lack documentation</li>
          <li>✅ <strong>Corrective</strong> = fixing bugs (broken things)</li>
          <li>✅ <strong>Adaptive</strong> = new environment (law, OS, hardware changes)</li>
          <li>✅ <strong>Perfective</strong> = improvements and new features (works but could be better)</li>
          <li>✅ Memory trick: <strong>CAP</strong> = Corrective, Adaptive, Perfective</li>
          <li>✅ Waterfall stages: <strong>Analysis → Design → Coding → Testing → Maintenance</strong></li>
        </ul>
      </div>
    </div>
  );
}
