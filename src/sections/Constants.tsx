import CodeBlock from '../components/CodeBlock';

export default function Constants() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔒 Constants – In Full Detail</h1>
      <p className="text-gray-500 mb-6 text-lg">When and why values should NEVER change</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What IS a Constant?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A constant is a <strong>named value that is set once and CANNOT be changed</strong> during 
          the execution of the program. Once you set it, it's locked in.
        </p>

        <div className="tip-box mb-4">
          <p className="font-bold text-amber-800">📝 Exam Definition (MEMORISE THIS)</p>
          <p className="text-amber-900 mt-1 italic">
            "A constant is a named value that cannot be changed during execution of the program. 
            It is assigned a value at the time of declaration."
          </p>
        </div>

        <div className="bg-indigo-50 p-5 rounded-xl mb-4 border border-indigo-100">
          <p className="font-mono text-lg text-indigo-900 font-bold text-center">
            CONSTANT &lt;identifier&gt; = &lt;value&gt;
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Notice: Constants use <code className="bg-gray-100 px-2 py-0.5 rounded font-bold">=</code> (equals sign), 
          NOT the arrow <code>←</code>. This is because the value is being <strong>defined</strong>, not assigned 
          during runtime. Also notice: you do NOT write a data type — it's inferred from the value.
        </p>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Declare Constants</h2>

        <CodeBlock title="Constants – Examples" code={`// Tax rate that never changes
CONSTANT TAXRATE = 0.15

// Maximum size of an array
CONSTANT MAXSIZE = 100

// Pi value
CONSTANT PI = 3.14159

// School name
CONSTANT SCHOOLNAME = "Cambridge Academy"

// Pass mark
CONSTANT PASSMARK = 50

// Boolean constant
CONSTANT DEBUG = FALSE`} />

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Naming Convention</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Constants are typically written in <strong>UPPERCASE</strong> or <strong>ALL_CAPS</strong> to 
          distinguish them from variables. This is a widely accepted convention and the Cambridge 
          mark scheme follows it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">✅ Good Constant Names</h4>
            <ul className="space-y-1 text-gray-700 font-mono text-sm">
              <li>• TAXRATE</li>
              <li>• MAX_SIZE</li>
              <li>• PI</li>
              <li>• PASSMARK</li>
              <li>• SCHOOL_NAME</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-600 mb-2">❌ Bad Constant Names</h4>
            <ul className="space-y-1 text-gray-700 font-mono text-sm">
              <li>• taxRate (looks like variable)</li>
              <li>• tax rate (has space)</li>
              <li>• 1TAX (starts with number)</li>
              <li>• t (not meaningful)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Constants vs Variables – Why Bother?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This is an <strong>exam favourite</strong>. They LOVE asking "Why use a constant instead of a variable?"
        </p>

        <div className="space-y-3 mb-6">
          {[
            {
              title: '1. Prevents accidental changes',
              desc: 'If you accidentally try to change a constant, it will cause an error. This protects important values like tax rates from being modified by mistake.'
            },
            {
              title: '2. Makes code easier to read',
              desc: 'TAXRATE is much clearer than 0.15 appearing randomly in your code. Anyone reading it knows exactly what that value represents.'
            },
            {
              title: '3. Easy to update',
              desc: 'If the tax rate changes from 15% to 20%, you only need to change it in ONE place (the constant declaration), not everywhere it appears in the code.'
            },
            {
              title: '4. Self-documenting code',
              desc: 'Constants act as documentation. MAXSIZE = 100 tells you the maximum size is 100 without needing a comment.'
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-indigo-200 transition-all">
              <h4 className="font-bold text-indigo-700">{item.title}</h4>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock title="Why Constants Matter – Example" code={`// BAD: Using magic numbers (hard to understand)
DECLARE Total : REAL
Total ← Price * 1.15
// What is 1.15? Nobody knows without a comment!

// GOOD: Using a constant (clear and maintainable)
CONSTANT TAXRATE = 0.15
DECLARE Total : REAL
Total ← Price * (1 + TAXRATE)
// Now everyone knows 0.15 is the tax rate!

// If tax changes to 20%, just change ONE line:
CONSTANT TAXRATE = 0.20
// All calculations automatically use the new rate`} />

        <div className="warning-box mt-4">
          <p className="font-bold text-red-800">❌ You CANNOT do this with constants:</p>
          <p className="text-red-700 mt-1 font-mono">
            CONSTANT TAXRATE = 0.15<br/>
            TAXRATE ← 0.20  // ERROR! Constants cannot be changed!
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">When to Use What?</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="p-3 text-left text-indigo-800 rounded-tl-xl">Use Case</th>
                <th className="p-3 text-center text-indigo-800">Variable or Constant?</th>
                <th className="p-3 text-left text-indigo-800 rounded-tr-xl">Why?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tax rate (15%)', 'CONSTANT', 'Doesn\'t change during execution'],
                ['User\'s name', 'Variable', 'Read from user input, could be anything'],
                ['Pi (3.14159)', 'CONSTANT', 'Mathematical constant, never changes'],
                ['Running total', 'Variable', 'Changes as items are added'],
                ['Maximum array size', 'CONSTANT', 'Set once, shouldn\'t change'],
                ['Loop counter', 'Variable', 'Changes every iteration'],
                ['VAT rate', 'CONSTANT', 'Fixed value for the program'],
                ['Student\'s score', 'Variable', 'Different for each student'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 text-gray-700">{row[0]}</td>
                  <td className="p-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${row[1] === 'CONSTANT' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {row[1]}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
