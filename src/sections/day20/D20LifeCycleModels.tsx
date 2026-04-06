import CodeBlock from '../../components/CodeBlock';

export default function D20LifeCycleModels() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        💧 Life Cycle Models
      </h1>
      <p className="text-gray-500 text-lg mb-8">Waterfall, Iterative and RAD — know all three inside out</p>

      {/* Waterfall */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💧</span>
          <h2 className="text-2xl font-bold text-blue-700">The Waterfall Model</h2>
        </div>

        <p className="text-gray-700 mb-4">
          The Waterfall model is a <strong>linear, sequential approach</strong>. Each stage must be fully completed before the next one begins — just like water flowing down a waterfall, you can't go back up!
        </p>

        <CodeBlock language="pseudocode" code={`// Waterfall Model — 5 Stages in Order
// ==========================================

// Stage 1: ANALYSIS
// - Understand what the system needs to do
// - Gather requirements from the client
// - Produce a requirements specification
// - Feasibility study: is it possible? is it worth it?

// Stage 2: DESIGN
// - Design the solution BEFORE writing any code
// - Data structures, algorithms, user interface
// - Identifier tables, structure charts, flowcharts

// Stage 3: CODING (Implementation)
// - Write the actual program
// - Follow the design documents
// - Use chosen programming language

// Stage 4: TESTING
// - Test against the original requirements
// - Normal, abnormal, boundary test data
// - Fix bugs found during testing

// Stage 5: MAINTENANCE
// - After the system is delivered
// - Corrective, Adaptive, or Perfective
// - Can last for years or decades`} />

        {/* Flow diagram */}
        <div className="mt-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-3">📊 Waterfall Flow</h3>
          <div className="flex flex-col items-center gap-1">
            {['🔍 Analysis', '🎨 Design', '💻 Coding', '🧪 Testing', '🔧 Maintenance'].map((stage, i, arr) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-blue-100 border-2 border-blue-400 rounded-lg px-8 py-2 font-bold text-blue-800 w-48 text-center">{stage}</div>
                {i < arr.length - 1 && <div className="text-blue-400 text-2xl font-bold">↓</div>}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-2 italic">Each stage completes before the next begins</p>
        </div>

        {/* Pros and cons */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-bold text-green-800 mb-3">✅ Advantages</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Simple and easy to understand and manage</li>
              <li>• Clear documentation at each stage</li>
              <li>• Good for well-defined, stable requirements</li>
              <li>• Easy to estimate cost and time</li>
              <li>• Works well for smaller projects</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-bold text-red-800 mb-3">❌ Disadvantages</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Cannot go back to previous stages easily</li>
              <li>• Bad for changing requirements</li>
              <li>• Customer doesn't see product until late</li>
              <li>• Errors found late are expensive to fix</li>
              <li>• Not suitable for complex projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800"><strong>📌 Use Waterfall when:</strong> Requirements are clear and unlikely to change. Example: building a simple payroll system with fixed rules.</p>
        </div>
      </div>

      {/* Iterative */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🔁</span>
          <h2 className="text-2xl font-bold text-green-700">The Iterative Model</h2>
        </div>

        <p className="text-gray-700 mb-4">
          The Iterative model uses <strong>repeated cycles</strong> of building and refining. Each cycle produces a working prototype that gets improved based on testing and feedback.
        </p>

        <CodeBlock language="pseudocode" code={`// Iterative Model — Repeating Cycles
// ==========================================

// Each ITERATION (cycle) contains:
// 1. Plan — what will this iteration achieve?
// 2. Design — design this iteration's features
// 3. Build — code the features
// 4. Test — test this iteration
// 5. Evaluate — does it meet requirements?
//    If NO → start next iteration with improvements
//    If YES → deliver final product

// Example: Building a school management system
// Iteration 1: Basic student records
// Iteration 2: Add exam marks
// Iteration 3: Add report generation
// Iteration 4: Add parent portal
// Each iteration produces a working system!`} />

        <div className="mt-6 mb-6 flex items-center justify-center">
          <div className="relative">
            <div className="flex items-center gap-2">
              {['Plan', 'Design', 'Build', 'Test'].map((s, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-green-100 border-2 border-green-400 rounded-lg px-3 py-2 font-bold text-green-800 text-sm">{s}</div>
                  {i < arr.length - 1 && <div className="text-green-400 font-bold">→</div>}
                </div>
              ))}
              <div className="text-green-400 font-bold">→ 🔄</div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2 italic">Repeat until requirements are met</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-bold text-green-800 mb-3">✅ Advantages</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Working software produced early</li>
              <li>• Easier to accommodate changing requirements</li>
              <li>• Errors found and fixed early</li>
              <li>• Customer involved throughout</li>
              <li>• Good for complex, large projects</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-bold text-red-800 mb-3">❌ Disadvantages</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Difficult to know total cost and time upfront</li>
              <li>• Can be never-ending (scope creep)</li>
              <li>• Requires more customer involvement</li>
              <li>• More complex to manage</li>
              <li>• May lack thorough documentation</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-green-800"><strong>📌 Use Iterative when:</strong> Requirements are unclear or likely to change. Good for complex projects where you need user feedback throughout.</p>
        </div>
      </div>

      {/* RAD */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">⚡</span>
          <h2 className="text-2xl font-bold text-purple-700">RAD — Rapid Application Development</h2>
        </div>

        <p className="text-gray-700 mb-4">
          RAD focuses on <strong>fast delivery through rapid prototyping</strong> and constant user feedback. Speed is the priority. It uses timeboxing — each phase has a fixed time limit.
        </p>

        <CodeBlock language="pseudocode" code={`// RAD Model — Speed is Priority
// ==========================================

// Stage 1: REQUIREMENTS PLANNING
// - Quick agreement on requirements
// - Scope and objectives defined rapidly

// Stage 2: USER DESIGN
// - Users actively involved in design
// - Rapid prototypes built quickly
// - Constant feedback and changes

// Stage 3: CONSTRUCTION
// - Build using tools that speed up development
// - Code generators, reusable components
// - Users test as development happens

// Stage 4: CUTOVER (Delivery)
// - Final testing
// - User training
// - System goes live

// Key feature: TIMEBOXING
// Each phase has a fixed time limit
// Must deliver something within the timebox
// Even if not perfect — good enough to show`} />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-bold text-green-800 mb-3">✅ Advantages</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Very fast development and delivery</li>
              <li>• Constant user involvement</li>
              <li>• Flexible to changes</li>
              <li>• Good for tight deadlines</li>
              <li>• Reduces development time significantly</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-bold text-red-800 mb-3">❌ Disadvantages</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• May lack proper documentation</li>
              <li>• Requires highly skilled developers</li>
              <li>• Not suitable for large complex systems</li>
              <li>• Quality may be sacrificed for speed</li>
              <li>• Needs constant user availability</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-3">
          <p className="text-sm text-purple-800"><strong>📌 Use RAD when:</strong> Tight deadlines exist and users are available for constant feedback. Good for smaller systems with experienced teams.</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Full Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-bold rounded-tl-lg">Feature</th>
                <th className="text-left p-3 font-bold text-blue-700">💧 Waterfall</th>
                <th className="text-left p-3 font-bold text-green-700">🔁 Iterative</th>
                <th className="text-left p-3 font-bold text-purple-700 rounded-tr-lg">⚡ RAD</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Approach', 'Linear/Sequential', 'Cyclical/Repeating', 'Fast/Prototype-based'],
                ['Requirements', 'Fixed upfront', 'Can change each iteration', 'Flexible, evolving'],
                ['Customer involvement', 'At start and end only', 'Throughout each iteration', 'Constant throughout'],
                ['Documentation', 'Thorough at each stage', 'Less formal', 'Minimal'],
                ['Best for', 'Well-defined projects', 'Complex/large projects', 'Tight deadlines'],
                ['Worst for', 'Changing requirements', 'Fixed budgets/timelines', 'Large complex systems'],
                ['When errors found', 'Late — expensive to fix', 'Early in each iteration', 'During prototyping'],
              ].map(([feature, w, it, rad], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-semibold text-gray-700">{feature}</td>
                  <td className="p-3 text-blue-700">{w}</td>
                  <td className="p-3 text-green-700">{it}</td>
                  <td className="p-3 text-purple-700">{rad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
