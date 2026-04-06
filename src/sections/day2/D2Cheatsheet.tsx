import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D2Cheatsheet() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  const toggleCheck = (item: string) => {
    setChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const checklistItems = [
    "I can use +, -, *, / correctly",
    "I know what DIV does and can calculate it by hand",
    "I know what MOD does and can calculate it by hand",
    "I can extract digits from a number using DIV and MOD",
    "I know all 6 comparison operators: = <> < > <= >=",
    "I know the difference between = (comparison) and ← (assignment)",
    "I understand AND — both must be TRUE",
    "I understand OR — at least one must be TRUE",
    "I understand NOT — flips TRUE/FALSE",
    "I can concatenate strings using &",
    "I know I need a space string \" \" when joining names",
    "I can use NUM_TO_STR() to convert number to string",
    "I can use STR_TO_NUM() to convert string to number",
    "I know operator precedence (brackets → ×÷ → +−)",
    "I can convert seconds to hours/minutes/seconds using DIV and MOD",
    "I can check if a number is even using MOD 2 = 0"
  ];

  const checkedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">📋 Day 2 Cheatsheet</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything from Day 2 on one page — bookmark this!</p>

      {/* ARITHMETIC OPERATORS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📐 Arithmetic Operators</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-4 text-gray-600 font-bold">Operator</th>
                <th className="py-2 pr-4 text-gray-600 font-bold">Name</th>
                <th className="py-2 pr-4 text-gray-600 font-bold">Example</th>
                <th className="py-2 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-mono">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-bold text-indigo-600">+</td>
                <td className="py-2 pr-4 font-sans">Addition</td>
                <td className="py-2 pr-4">10 + 3</td>
                <td className="py-2">13</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-bold text-indigo-600">-</td>
                <td className="py-2 pr-4 font-sans">Subtraction</td>
                <td className="py-2 pr-4">10 - 3</td>
                <td className="py-2">7</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-bold text-indigo-600">*</td>
                <td className="py-2 pr-4 font-sans">Multiplication</td>
                <td className="py-2 pr-4">10 * 3</td>
                <td className="py-2">30</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4 font-bold text-indigo-600">/</td>
                <td className="py-2 pr-4 font-sans">Division</td>
                <td className="py-2 pr-4">10 / 3</td>
                <td className="py-2">3.33...</td>
              </tr>
              <tr className="border-b border-gray-100 bg-indigo-50">
                <td className="py-2 pr-4 font-bold text-indigo-700">DIV</td>
                <td className="py-2 pr-4 font-sans font-bold">Integer division</td>
                <td className="py-2 pr-4">17 DIV 5</td>
                <td className="py-2 font-bold">3</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="py-2 pr-4 font-bold text-purple-700">MOD</td>
                <td className="py-2 pr-4 font-sans font-bold">Remainder</td>
                <td className="py-2 pr-4">17 MOD 5</td>
                <td className="py-2 font-bold">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* COMPARISON OPERATORS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Comparison Operators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { op: '=', meaning: 'Equal to', ex: '5 = 5 → TRUE' },
            { op: '<>', meaning: 'Not equal', ex: '5 <> 3 → TRUE' },
            { op: '<', meaning: 'Less than', ex: '3 < 5 → TRUE' },
            { op: '>', meaning: 'Greater than', ex: '5 > 3 → TRUE' },
            { op: '<=', meaning: 'Less/equal', ex: '5 <= 5 → TRUE' },
            { op: '>=', meaning: 'Greater/equal', ex: '3 >= 5 → FALSE' },
          ].map(item => (
            <div key={item.op} className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-center">
              <p className="font-mono font-bold text-xl text-indigo-600">{item.op}</p>
              <p className="text-sm text-gray-600 font-medium">{item.meaning}</p>
              <p className="text-xs text-gray-400 font-mono mt-1">{item.ex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LOGICAL OPERATORS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Logical Operators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-800 text-lg text-center">AND</h3>
            <p className="text-blue-600 text-sm text-center mb-2">Both must be TRUE</p>
            <div className="text-xs font-mono space-y-1 text-blue-700">
              <p>T AND T → <strong>T</strong></p>
              <p>T AND F → <strong>F</strong></p>
              <p>F AND T → <strong>F</strong></p>
              <p>F AND F → <strong>F</strong></p>
            </div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 text-lg text-center">OR</h3>
            <p className="text-emerald-600 text-sm text-center mb-2">At least one TRUE</p>
            <div className="text-xs font-mono space-y-1 text-emerald-700">
              <p>T OR T → <strong>T</strong></p>
              <p>T OR F → <strong>T</strong></p>
              <p>F OR T → <strong>T</strong></p>
              <p>F OR F → <strong>F</strong></p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-800 text-lg text-center">NOT</h3>
            <p className="text-amber-600 text-sm text-center mb-2">Flips the value</p>
            <div className="text-xs font-mono space-y-1 text-amber-700">
              <p>NOT T → <strong>F</strong></p>
              <p>NOT F → <strong>T</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* STRING & CONVERSIONS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Strings & Type Conversions</h2>
        <CodeBlock title="String Concatenation" code={`// Use & to join strings
FullName ← FirstName & " " & LastName

// Convert number to string before joining
Message ← "Score: " & NUM_TO_STR(Score)

// Convert string to number for maths
Num ← STR_TO_NUM("42")    // Num = 42`} />
      </div>

      {/* DIV/MOD PATTERNS */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ Essential DIV & MOD Patterns</h2>
        <CodeBlock title="Patterns You MUST Know" code={`// Check even/odd
IF Num MOD 2 = 0 THEN OUTPUT "Even"

// Check divisibility
IF Num MOD 3 = 0 THEN OUTPUT "Divisible by 3"

// Get last digit
LastDigit ← Num MOD 10

// Remove last digit
Num ← Num DIV 10

// Time conversion (seconds → h/m/s)
Hours ← TotalSec DIV 3600
Remaining ← TotalSec MOD 3600
Minutes ← Remaining DIV 60
Seconds ← Remaining MOD 60

// Extract digits from 3-digit number
D1 ← Num DIV 100
D2 ← (Num DIV 10) MOD 10
D3 ← Num MOD 10`} />
      </div>

      {/* PRECEDENCE */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Operator Precedence</h2>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-xs">1</span>
              <span><strong>( )</strong> — Brackets first</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-400 text-white font-bold flex items-center justify-center text-xs">2</span>
              <span><strong>NOT</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-300 text-white font-bold flex items-center justify-center text-xs">3</span>
              <span><strong>* / DIV MOD</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-200 text-indigo-800 font-bold flex items-center justify-center text-xs">4</span>
              <span><strong>+ -</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">5</span>
              <span><strong>= &lt;&gt; &lt; &gt; &lt;= &gt;=</strong> — Comparison</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs">6</span>
              <span><strong>AND</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-xs">7</span>
              <span><strong>OR</strong></span>
            </li>
          </ol>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Day 2 Confidence Checklist</h2>
        <p className="text-gray-500 mb-4">Tick off what you're confident with. Aim for 100%!</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500 font-medium">Confidence</span>
            <span className="font-bold text-indigo-600">{Math.round((checkedCount / checklistItems.length) * 100)}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(checkedCount / checklistItems.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {checklistItems.map((item) => (
            <button
              key={item}
              onClick={() => toggleCheck(item)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium flex items-center gap-3 ${
                checklist[item]
                  ? 'border-green-300 bg-green-50 text-green-800'
                  : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 text-gray-700'
              }`}
            >
              <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs transition-all ${
                checklist[item] ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300'
              }`}>
                {checklist[item] && '✓'}
              </span>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">🎯 What's Next?</p>
        <p className="text-amber-900 mt-1">
          Day 3 will cover <strong>Selection (IF/ELSE/CASE)</strong> and <strong>Iteration (loops)</strong>. 
          Make sure you're solid on operators first — they're used in every IF statement and loop condition!
        </p>
      </div>
    </div>
  );
}
