import CodeBlock from '../../components/CodeBlock';

export default function D17StepwiseRefinement() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">🪜 Stepwise Refinement</h2>
      <p className="text-gray-500 mb-6">Breaking a complex problem into smaller and smaller pieces until each piece is simple pseudocode</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-blue-800 mb-2">📖 What is Stepwise Refinement?</h3>
        <p className="text-blue-700 text-sm mb-2">Stepwise refinement (also called <strong>top-down design</strong>) means starting with a high-level description of the problem, then breaking it into smaller sub-steps, then breaking those into even smaller steps — until each step is simple enough to write directly as pseudocode.</p>
        <p className="text-blue-700 text-sm">Think of it like planning a trip: "Go to London" → "Get to station, buy ticket, board train, arrive London" → "Walk to station, check timetable, buy ticket at machine..."</p>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📊 The Three Levels</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="font-bold text-blue-700">Level 1 — High Level (3–4 steps)</p>
            <p className="text-sm text-gray-600">Very broad. Like chapter headings. Just 3–5 steps that describe the whole program.</p>
            <div className="mt-2 bg-blue-50 rounded-lg p-3 font-mono text-sm text-blue-800">
              1. Input student data<br/>
              2. Process data<br/>
              3. Output results
            </div>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <p className="font-bold text-purple-700">Level 2 — Medium Detail (break each step into sub-steps)</p>
            <p className="text-sm text-gray-600">Each Level 1 step is broken into 3–5 smaller steps. Use decimal numbering.</p>
            <div className="mt-2 bg-purple-50 rounded-lg p-3 font-mono text-sm text-purple-800">
              1. Input student data<br/>
              {"   "}1.1 FOR each of 30 students<br/>
              {"      "}1.1.1 Input name<br/>
              {"      "}1.1.2 Input mark<br/>
              {"      "}1.1.3 Validate mark is 0–100<br/>
              2. Process data<br/>
              {"   "}2.1 Calculate total of all marks<br/>
              {"   "}2.2 Calculate average<br/>
              {"   "}2.3 Find highest mark and student name
            </div>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <p className="font-bold text-green-700">Level 3 — Pseudocode (write the actual code)</p>
            <p className="text-sm text-gray-600">Each Level 2 step is now simple enough to write as pseudocode directly.</p>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🎯 Full Example — Student Grade System</h3>
        <p className="text-gray-600 text-sm mb-4"><strong>Problem:</strong> Design a system that inputs marks for 30 students, calculates the average, finds the highest and lowest marks, and outputs all students who scored above average.</p>

        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Level 1:</p>
          <CodeBlock language="pseudocode" code={`1. Input all student data
2. Calculate statistics
3. Output results`} />
        </div>

        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Level 2:</p>
          <CodeBlock language="pseudocode" code={`1. Input all student data
   1.1 Repeat for each of 30 students:
      1.1.1 Input student name
      1.1.2 Input student mark
      1.1.3 Validate mark is between 0 and 100
      1.1.4 Store name and mark in arrays

2. Calculate statistics
   2.1 Calculate total of all marks
   2.2 Calculate average (Total / 30)
   2.3 Find highest mark and name of that student
   2.4 Find lowest mark and name of that student

3. Output results
   3.1 Output average mark
   3.2 Output name and mark of highest scorer
   3.3 Output name and mark of lowest scorer
   3.4 Output all students who scored above average`} />
        </div>

        <div>
          <p className="font-semibold text-gray-700 mb-2">Level 3 (Pseudocode for step 1.1):</p>
          <CodeBlock language="pseudocode" code={`// Step 1.1 — Input and validate student data
FOR i <- 1 TO 30
   OUTPUT "Enter student name: "
   INPUT Names[i]
   REPEAT
      OUTPUT "Enter mark (0-100): "
      INPUT Marks[i]
   UNTIL Marks[i] >= 0 AND Marks[i] <= 100
NEXT i`} />
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="font-bold text-gray-800 mb-4">📏 Rules for Stepwise Refinement</h3>
        <div className="space-y-3">
          {[
            { rule: 'Use numbered decimal notation', detail: '1, 1.1, 1.1.1, 1.1.2, 1.2, 2, 2.1 etc.', ok: true },
            { rule: 'Each step should do ONE thing', detail: 'If a step does two things, split it!', ok: true },
            { rule: 'Stop when steps are pseudocode-ready', detail: "If you can write it as pseudocode directly, don't refine further", ok: true },
            { rule: "Don't skip levels", detail: 'Level 1 → Level 2 → pseudocode. Don\'t jump from Level 1 to code.', ok: true },
            { rule: 'Use plain English at Level 1 and 2', detail: 'Not pseudocode keywords — save those for Level 3', ok: true },
          ].map(({ rule, detail, ok }, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <span className={`text-lg ${ok ? 'text-green-500' : 'text-red-500'}`}>✓</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{rule}</p>
                <p className="text-gray-500 text-xs">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-3">⚠️ Common Exam Mistakes</h3>
        <div className="space-y-2 text-amber-700 text-sm">
          <div className="flex items-start gap-2"><span>⚠️</span><span>Writing pseudocode AT Level 2 — Level 2 should still be English descriptions</span></div>
          <div className="flex items-start gap-2"><span>⚠️</span><span>Having only 1 or 2 sub-steps — each step should break into at least 3 parts</span></div>
          <div className="flex items-start gap-2"><span>⚠️</span><span>Forgetting to include validation (mark 0–100) in the refinement</span></div>
          <div className="flex items-start gap-2"><span>⚠️</span><span>Using the wrong numbering — 1.1, 1.2 NOT 1a, 1b or i, ii</span></div>
        </div>
      </div>
    </div>
  );
}
