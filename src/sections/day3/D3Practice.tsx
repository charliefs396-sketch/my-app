import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Triangle Classifier",
    description: "Write pseudocode that inputs 3 sides of a triangle and classifies it as equilateral (all sides equal), isosceles (two sides equal), or scalene (no sides equal).",
    difficulty: "Medium",
    hints: [
      "You need to DECLARE 3 variables (Side1, Side2, Side3) as INTEGER or REAL.",
      "Check equilateral first: all three sides are equal (Side1 = Side2 AND Side2 = Side3).",
      "For isosceles, check if ANY two sides are equal — you need OR to combine the checks.",
      "If it's not equilateral and not isosceles, it must be scalene."
    ],
    solution: `DECLARE Side1 : REAL
DECLARE Side2 : REAL
DECLARE Side3 : REAL

OUTPUT "Enter side 1: "
INPUT Side1
OUTPUT "Enter side 2: "
INPUT Side2
OUTPUT "Enter side 3: "
INPUT Side3

IF Side1 = Side2 AND Side2 = Side3
   THEN
      OUTPUT "Equilateral triangle"
   ELSE
      IF Side1 = Side2 OR Side2 = Side3 OR Side1 = Side3
         THEN
            OUTPUT "Isosceles triangle"
         ELSE
            OUTPUT "Scalene triangle"
      ENDIF
ENDIF`,
    explanation: "We check equilateral FIRST because if all 3 are equal, that's also technically isosceles (two are equal). By checking equilateral first, we avoid that overlap. The isosceles check uses OR because ANY pair of equal sides makes it isosceles. If neither, it's scalene."
  },
  {
    id: 2,
    title: "Grade Calculator with Validation",
    description: "Write pseudocode that inputs a mark (0-100), validates it (must be between 0 and 100), then outputs the grade: A (80-100), B (70-79), C (60-69), D (50-59), Fail (0-49).",
    difficulty: "Hard",
    hints: [
      "Start by checking if the mark is valid: Mark >= 0 AND Mark <= 100",
      "If the mark is INVALID, output an error message and don't calculate grade.",
      "If VALID, use nested IF statements to check from highest grade down.",
      "Remember: no ELSE IF — you must properly nest each IF inside the ELSE.",
      "You need 4 nested IFs for 5 grades (A, B, C, D, Fail)."
    ],
    solution: `DECLARE Mark : INTEGER
DECLARE Grade : STRING

OUTPUT "Enter mark (0-100): "
INPUT Mark

IF Mark < 0 OR Mark > 100
   THEN
      OUTPUT "Error: Mark must be between 0 and 100"
   ELSE
      IF Mark >= 80
         THEN
            Grade ← "A"
         ELSE
            IF Mark >= 70
               THEN
                  Grade ← "B"
               ELSE
                  IF Mark >= 60
                     THEN
                        Grade ← "C"
                     ELSE
                        IF Mark >= 50
                           THEN
                              Grade ← "D"
                           ELSE
                              Grade ← "Fail"
                        ENDIF
                  ENDIF
            ENDIF
      ENDIF
      OUTPUT "Your grade is: ", Grade
ENDIF`,
    explanation: "VALIDATION comes first — we check if the mark is invalid (< 0 OR > 100) before doing anything. The entire grading logic goes inside the ELSE of the validation check. Notice how the OUTPUT Grade is INSIDE the main ELSE (after all the nested IFs) but OUTSIDE the grade nested IFs — it runs for any valid mark. Count the IFs: 5 IFs = 5 ENDIFs."
  },
  {
    id: 3,
    title: "Menu System Using CASE",
    description: "Write pseudocode for a school system menu with 5 options: 1) View Attendance, 2) Enter Marks, 3) Print Report, 4) Search Student, 5) Exit. Use a CASE statement. For each option, output a message saying what was selected.",
    difficulty: "Easy",
    hints: [
      "DECLARE a variable Choice as INTEGER.",
      "Display all 5 options using OUTPUT before asking for input.",
      "Use CASE OF Choice to handle each option.",
      "Don't forget OTHERWISE for invalid choices!",
      "Don't forget ENDCASE at the end!"
    ],
    solution: `DECLARE Choice : INTEGER

OUTPUT "============================="
OUTPUT "   SCHOOL MANAGEMENT SYSTEM   "
OUTPUT "============================="
OUTPUT "1. View Attendance"
OUTPUT "2. Enter Marks"
OUTPUT "3. Print Report"
OUTPUT "4. Search Student"
OUTPUT "5. Exit"
OUTPUT "============================="
OUTPUT "Enter your choice (1-5): "
INPUT Choice

CASE OF Choice
   1 : OUTPUT "Loading attendance records..."
   2 : OUTPUT "Opening marks entry form..."
   3 : OUTPUT "Generating report..."
   4 : OUTPUT "Enter student name to search..."
   5 : OUTPUT "Goodbye! Exiting system."
   OTHERWISE OUTPUT "Invalid choice! Please enter 1-5."
ENDCASE`,
    explanation: "This is a classic CASE usage — checking one variable against specific integer values. CASE is much cleaner than 5 nested IFs here. Note: CASE OF Choice (with OF), colon after each value, and OTHERWISE (not DEFAULT). ENDCASE at the end."
  },
  {
    id: 4,
    title: "🌟 Bonus: Ticket Pricing System",
    description: "Write pseudocode for a cinema ticket system. Input the customer's age and day of week (1-7, where 6=Sat, 7=Sun). Pricing: Children (under 12) = $5, Adults (12-64) = $10, Seniors (65+) = $7. PLUS: weekends get a $2 surcharge on all tickets. Output the final price.",
    difficulty: "Challenge",
    hints: [
      "You need two variables: Age (INTEGER) and Day (INTEGER), plus Price (REAL).",
      "Use nested IF to determine base price from age.",
      "After the age-based nested IF, use ANOTHER separate IF to check for weekend surcharge.",
      "Weekend check: IF Day = 6 OR Day = 7",
      "The weekend check is NOT nested inside the age check — it comes AFTER it as a separate IF."
    ],
    solution: `DECLARE Age : INTEGER
DECLARE Day : INTEGER
DECLARE Price : REAL

OUTPUT "Enter customer age: "
INPUT Age
OUTPUT "Enter day (1=Mon, 7=Sun): "
INPUT Day

// Determine base price from age
IF Age < 12
   THEN
      Price ← 5.00
      OUTPUT "Child ticket"
   ELSE
      IF Age >= 65
         THEN
            Price ← 7.00
            OUTPUT "Senior ticket"
         ELSE
            Price ← 10.00
            OUTPUT "Adult ticket"
      ENDIF
ENDIF

// Apply weekend surcharge (separate IF, not nested in the above)
IF Day = 6 OR Day = 7
   THEN
      Price ← Price + 2.00
      OUTPUT "Weekend surcharge: +$2.00"
ENDIF

OUTPUT "Total price: $", Price`,
    explanation: "This problem needs TWO separate selection structures: (1) nested IF for age-based pricing, then (2) a separate simple IF for weekend surcharge. Common mistake: students try to nest the weekend check inside each age bracket — that creates duplicated code. Better: set the base price first, THEN add the surcharge. This is cleaner and shows good program design."
  }
];

export default function D3Practice() {
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (exerciseId: number) => {
    setRevealedHints(prev => ({
      ...prev,
      [exerciseId]: Math.min((prev[exerciseId] || 0) + 1, exercises.find(e => e.id === exerciseId)!.hints.length)
    }));
  };

  const toggleSolution = (exerciseId: number) => {
    setShowSolution(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">Try these yourself BEFORE looking at hints or solutions!</p>

      <div className="tip-box mb-8">
        <p className="font-bold text-amber-800">💡 How to Practice</p>
        <p className="text-amber-900 mt-1">
          1. Read the problem carefully<br/>
          2. Try writing the pseudocode on PAPER first (like in an exam)<br/>
          3. Count your IFs and ENDIFs — do they match?<br/>
          4. If stuck, reveal hints one at a time<br/>
          5. Only check the solution when you've genuinely tried
        </p>
      </div>

      <div className="space-y-8">
        {exercises.map(exercise => (
          <div key={exercise.id} className="section-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Exercise {exercise.id}: {exercise.title}
                </h2>
                <span className={`inline-block mt-1 text-xs font-bold px-3 py-1 rounded-full ${
                  exercise.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  exercise.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                  exercise.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
              <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
            </div>

            {/* Hints */}
            <div className="mb-4">
              <button
                onClick={() => revealHint(exercise.id)}
                disabled={(revealedHints[exercise.id] || 0) >= exercise.hints.length}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  (revealedHints[exercise.id] || 0) >= exercise.hints.length
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                {(revealedHints[exercise.id] || 0) >= exercise.hints.length
                  ? 'All hints revealed'
                  : `💡 Reveal Hint ${(revealedHints[exercise.id] || 0) + 1} of ${exercise.hints.length}`}
              </button>

              {(revealedHints[exercise.id] || 0) > 0 && (
                <div className="mt-3 space-y-2">
                  {exercise.hints.slice(0, revealedHints[exercise.id]).map((hint, i) => (
                    <div key={i} className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-sm text-indigo-700 flex gap-2">
                      <span className="font-bold flex-shrink-0">Hint {i + 1}:</span>
                      <span>{hint}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solution */}
            <button
              onClick={() => toggleSolution(exercise.id)}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-all"
            >
              {showSolution[exercise.id] ? '🙈 Hide Solution' : '👀 Show Solution'}
            </button>

            {showSolution[exercise.id] && (
              <div className="mt-4">
                <CodeBlock title={`Solution: ${exercise.title}`} code={exercise.solution} />
                <div className="mt-3 bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="font-bold text-green-800 mb-1">📖 Explanation:</p>
                  <p className="text-green-700 text-sm leading-relaxed">{exercise.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
