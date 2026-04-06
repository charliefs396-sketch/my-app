import { useState } from 'react';
import CodeBlock from '../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Student Average Calculator',
    description: 'Write pseudocode to input a student\'s name and 3 marks, calculate the average, and output the result. The average should show decimal places.',
    hints: [
      'You need to DECLARE 5 variables: Name (STRING), Mark1 (INTEGER), Mark2 (INTEGER), Mark3 (INTEGER), Average (REAL)',
      'Average = (Mark1 + Mark2 + Mark3) / 3',
      'Remember to use ← for assignment and OUTPUT to display results',
    ],
    solution: `// Student Average Calculator
DECLARE StudentName : STRING
DECLARE Mark1 : INTEGER
DECLARE Mark2 : INTEGER
DECLARE Mark3 : INTEGER
DECLARE Average : REAL

OUTPUT "Enter student name: "
INPUT StudentName

OUTPUT "Enter mark 1: "
INPUT Mark1
OUTPUT "Enter mark 2: "
INPUT Mark2
OUTPUT "Enter mark 3: "
INPUT Mark3

Average ← (Mark1 + Mark2 + Mark3) / 3

OUTPUT StudentName, " has an average of ", Average`,
    explanation: 'Notice how each variable is declared with DECLARE and a data type. The marks are INTEGER (whole numbers) but the Average is REAL because dividing might give a decimal. We use ← for assignment and commas to join strings and variables in OUTPUT.',
  },
  {
    id: 2,
    title: 'Temperature Converter (Celsius to Fahrenheit)',
    description: 'Write pseudocode to input a temperature in Celsius and convert it to Fahrenheit. The formula is: F = (C × 9/5) + 32. Output both temperatures.',
    hints: [
      'You need 2 variables: Celsius (REAL) and Fahrenheit (REAL)',
      'Both should be REAL because temperatures can have decimal places',
      'Apply the formula: Fahrenheit ← (Celsius * 9/5) + 32',
    ],
    solution: `// Celsius to Fahrenheit Converter
DECLARE Celsius : REAL
DECLARE Fahrenheit : REAL

OUTPUT "Enter temperature in Celsius: "
INPUT Celsius

Fahrenheit ← (Celsius * 9 / 5) + 32

OUTPUT Celsius, " degrees Celsius = ", Fahrenheit, " degrees Fahrenheit"`,
    explanation: 'Both variables are REAL because temperatures can be decimal values (e.g., 36.6°C). The formula uses standard arithmetic operators. Notice the clear OUTPUT message showing both values.',
  },
  {
    id: 3,
    title: 'Rectangle Area and Perimeter',
    description: 'Write pseudocode to input the length and width of a rectangle, then calculate and output the area and perimeter. Area = length × width. Perimeter = 2 × (length + width).',
    hints: [
      'You need 4 variables: Length, Width, Area, Perimeter — all REAL',
      'Why REAL? Because length and width could be 5.5, 3.2, etc.',
      'Area ← Length * Width and Perimeter ← 2 * (Length + Width)',
    ],
    solution: `// Rectangle Area and Perimeter Calculator
DECLARE Length : REAL
DECLARE Width : REAL
DECLARE Area : REAL
DECLARE Perimeter : REAL

OUTPUT "Enter the length: "
INPUT Length
OUTPUT "Enter the width: "
INPUT Width

Area ← Length * Width
Perimeter ← 2 * (Length + Width)

OUTPUT "Area = ", Area
OUTPUT "Perimeter = ", Perimeter`,
    explanation: 'All 4 variables are REAL because measurements can have decimal values. We declare all variables first, then get input, then calculate, then output. This is clean, logical pseudocode that an examiner would love!',
  },
];

export default function Practice() {
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  const showNextHint = (exerciseId: number, totalHints: number) => {
    setRevealedHints(prev => ({
      ...prev,
      [exerciseId]: Math.min((prev[exerciseId] || 0) + 1, totalHints),
    }));
  };

  const toggleSolution = (exerciseId: number) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">Try these yourself FIRST, then check the solutions</p>

      <div className="success-box mb-6">
        <p className="font-bold text-green-800">💪 How to Use These Exercises</p>
        <ol className="text-green-800 mt-2 space-y-1 list-decimal list-inside">
          <li>Read the problem carefully</li>
          <li>Try to write the pseudocode on paper or in your head FIRST</li>
          <li>If stuck, reveal hints one at a time</li>
          <li>Only check the solution after you've tried it yourself</li>
          <li>Compare your answer — did you forget DECLARE? Wrong data type? Missing ←?</li>
        </ol>
      </div>

      {exercises.map((exercise) => (
        <div key={exercise.id} className="section-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
              {exercise.id}
            </span>
            <h2 className="text-xl font-bold text-gray-800">{exercise.title}</h2>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl mb-5 border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">{exercise.description}</p>
          </div>

          {/* Hints */}
          <div className="mb-5">
            <button
              onClick={() => showNextHint(exercise.id, exercise.hints.length)}
              className="px-5 py-2.5 bg-amber-100 text-amber-800 rounded-xl font-semibold hover:bg-amber-200 transition-all text-sm"
            >
              💡 {(revealedHints[exercise.id] || 0) < exercise.hints.length
                ? `Show Hint ${(revealedHints[exercise.id] || 0) + 1} of ${exercise.hints.length}`
                : 'All Hints Shown'}
            </button>

            {(revealedHints[exercise.id] || 0) > 0 && (
              <div className="mt-3 space-y-2">
                {exercise.hints.slice(0, revealedHints[exercise.id]).map((hint, i) => (
                  <div key={i} className="tip-box animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <p className="text-amber-900">
                      <strong>Hint {i + 1}:</strong> {hint}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solution */}
          <div>
            <button
              onClick={() => toggleSolution(exercise.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                revealedSolutions[exercise.id]
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              {revealedSolutions[exercise.id] ? '🙈 Hide Solution' : '👀 Show Solution'}
            </button>

            {revealedSolutions[exercise.id] && (
              <div className="mt-4 animate-fade-in-up">
                <CodeBlock title={`Solution: ${exercise.title}`} code={exercise.solution} />
                <div className="success-box mt-3">
                  <p className="font-bold text-green-800">📝 Explanation</p>
                  <p className="text-green-800 mt-1">{exercise.explanation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Bonus Challenge */}
      <div className="section-card bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">🌟 Bonus Challenge</h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          Try this one completely on your own — no hints!
        </p>
        <div className="bg-white/80 p-5 rounded-xl mb-4">
          <p className="text-gray-800 text-lg">
            Write pseudocode for a <strong>simple shop receipt</strong>:
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Input the item name and price</li>
            <li>• Input the quantity purchased</li>
            <li>• Use a CONSTANT for the tax rate (15%)</li>
            <li>• Calculate the subtotal (price × quantity)</li>
            <li>• Calculate the tax amount (subtotal × tax rate)</li>
            <li>• Calculate the total (subtotal + tax)</li>
            <li>• Output a nice receipt with all values</li>
          </ul>
        </div>
        <p className="text-purple-700 italic">
          Think about: Which variables do you need? What data type is each one? What's a constant vs variable?
        </p>
      </div>
    </div>
  );
}
