import CodeBlock from '../components/CodeBlock';

export default function Cheatsheet() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Quick Reference Cheatsheet</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything from Day 1 on one page — screenshot this!</p>

      <div className="section-card bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-xl font-bold text-indigo-800 mb-4">🔤 Declaration Syntax</h2>
        <CodeBlock code={`// Variables
DECLARE <name> : <type>

// Constants  
CONSTANT <NAME> = <value>`} />
      </div>

      <div className="section-card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🏷️ All 6 Data Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { type: 'INTEGER', desc: 'Whole numbers', ex: '17, -5, 0', color: 'blue' },
            { type: 'REAL', desc: 'Decimals', ex: '3.14, -2.5', color: 'orange' },
            { type: 'CHAR', desc: 'One character', ex: "\'A\', \'z\'", color: 'pink' },
            { type: 'STRING', desc: 'Text', ex: '"Hello"', color: 'green' },
            { type: 'BOOLEAN', desc: 'True/False', ex: 'TRUE, FALSE', color: 'purple' },
            { type: 'DATE', desc: 'Date', ex: '15/03/2007', color: 'teal' },
          ].map((item, i) => (
            <div key={i} className={`bg-${item.color}-50 border border-${item.color}-200 p-4 rounded-xl`} style={{
              backgroundColor: item.color === 'blue' ? '#eff6ff' : item.color === 'orange' ? '#fff7ed' : item.color === 'pink' ? '#fdf2f8' : item.color === 'green' ? '#f0fdf4' : item.color === 'purple' ? '#faf5ff' : '#f0fdfa',
              borderColor: item.color === 'blue' ? '#bfdbfe' : item.color === 'orange' ? '#fed7aa' : item.color === 'pink' ? '#fbcfe8' : item.color === 'green' ? '#bbf7d0' : item.color === 'purple' ? '#e9d5ff' : '#99f6e4',
            }}>
              <p className="font-mono font-bold text-gray-800">{item.type}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <p className="font-mono text-xs text-gray-500 mt-1">{item.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚡ Key Rules to Remember</h2>
        <div className="space-y-3">
          {[
            { rule: 'ALWAYS DECLARE variables before using them', icon: '1️⃣' },
            { rule: 'ALWAYS specify the data type in declarations', icon: '2️⃣' },
            { rule: 'Use ← (arrow) for assignment, NOT = (equals)', icon: '3️⃣' },
            { rule: 'Constants use = for their value, NOT ←', icon: '4️⃣' },
            { rule: 'CHAR uses single quotes \'A\', STRING uses double quotes "Ali"', icon: '5️⃣' },
            { rule: 'Phone numbers, postcodes, IDs → always STRING', icon: '6️⃣' },
            { rule: 'Averages, prices, measurements → always REAL', icon: '7️⃣' },
            { rule: 'Use meaningful variable names (StudentName not x)', icon: '8️⃣' },
            { rule: 'Constants should be UPPERCASE (TAXRATE, MAXSIZE)', icon: '9️⃣' },
            { rule: 'Always OUTPUT a prompt before INPUT', icon: '🔟' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all">
              <span className="text-xl">{item.icon}</span>
              <p className="text-gray-700 font-medium">{item.rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📝 Complete Template</h2>
        <CodeBlock title="Full Example: A Level Standard Pseudocode" code={`// Always start with constants
CONSTANT TAXRATE = 0.15
CONSTANT PASSMARK = 50

// Then declare ALL variables
DECLARE StudentName : STRING
DECLARE Mark1 : INTEGER
DECLARE Mark2 : INTEGER
DECLARE Mark3 : INTEGER
DECLARE Average : REAL
DECLARE Passed : BOOLEAN

// Get input (with prompts!)
OUTPUT "Enter student name: "
INPUT StudentName
OUTPUT "Enter mark 1: "
INPUT Mark1
OUTPUT "Enter mark 2: "
INPUT Mark2
OUTPUT "Enter mark 3: "
INPUT Mark3

// Process (calculations)
Average ← (Mark1 + Mark2 + Mark3) / 3

// Decision
IF Average >= PASSMARK THEN
    Passed ← TRUE
ELSE
    Passed ← FALSE
ENDIF

// Output results
OUTPUT StudentName, " scored an average of ", Average
IF Passed = TRUE THEN
    OUTPUT "Result: PASSED"
ELSE
    OUTPUT "Result: FAILED"
ENDIF`} />
      </div>

      <div className="section-card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <h2 className="text-xl font-bold text-green-800 mb-4">✅ Day 1 Checklist</h2>
        <div className="space-y-2">
          {[
            'I can define what a variable is',
            'I can define what a constant is',
            'I know the syntax for DECLARE',
            'I know the syntax for CONSTANT',
            'I know all 6 data types and when to use each',
            'I use ← for assignment (not =)',
            'I know the difference between CHAR and STRING',
            'I know why phone numbers should be STRING',
            'I can explain why to use constants instead of variables',
            'I can write complete pseudocode with declarations, I/O, and calculations',
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-2 hover:bg-green-100/50 rounded-lg cursor-pointer transition-all">
              <input type="checkbox" className="w-5 h-5 rounded accent-green-600" />
              <span className="text-green-900">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="section-card bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 text-center">
        <p className="text-2xl font-bold text-purple-800 mb-2">🚀 Day 1 Complete!</p>
        <p className="text-purple-700 text-lg">
          You've covered Variables, Constants, and Data Types in full detail.
          <br/>Tomorrow: <strong>Day 2 – Selection (IF/ELSE, CASE)</strong>
        </p>
        <p className="text-purple-600 mt-3 text-sm">
          Make sure you can do all 3 practice exercises from memory before moving on!
        </p>
      </div>
    </div>
  );
}
