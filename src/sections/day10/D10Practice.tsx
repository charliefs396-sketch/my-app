import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  description: string;
  hint1: string;
  hint2: string;
  hint3: string;
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'IsVowel Function',
    description: 'Write a FUNCTION called IsVowel that takes a CHAR parameter called Letter and RETURNS a BOOLEAN. It should return TRUE if the letter is a vowel (a, e, i, o, u — upper or lower case), and FALSE otherwise. Then write code to test it.',
    hint1: 'Use LCASE() to convert the letter to lowercase first, then check if it equals any vowel.',
    hint2: 'The header is: FUNCTION IsVowel(Letter : CHAR) RETURNS BOOLEAN',
    hint3: 'Use multiple OR conditions: IF LowerLetter = \'a\' OR LowerLetter = \'e\' OR ...',
    solution: `FUNCTION IsVowel(Letter : CHAR) RETURNS BOOLEAN
   DECLARE LowerLetter : CHAR
   LowerLetter ← LCASE(Letter)
   IF LowerLetter = 'a' OR LowerLetter = 'e' OR LowerLetter = 'i'
      OR LowerLetter = 'o' OR LowerLetter = 'u'
      THEN
         RETURN TRUE
      ELSE
         RETURN FALSE
   ENDIF
ENDFUNCTION

// Testing the function
DECLARE TestChar : CHAR
DECLARE i : INTEGER
DECLARE TestString : STRING
DECLARE VowelCount : INTEGER

TestString ← "Hello World"
VowelCount ← 0

FOR i ← 1 TO LENGTH(TestString)
   TestChar ← MID(TestString, i, 1)
   IF IsVowel(TestChar) = TRUE
      THEN
         VowelCount ← VowelCount + 1
   ENDIF
NEXT i

OUTPUT "Vowels in 'Hello World': ", VowelCount  // 3`,
    explanation: 'We convert to lowercase first so we only need to check a, e, i, o, u — not A, E, I, O, U too. LCASE() of a lowercase letter is still lowercase, so it works both ways.',
  },
  {
    id: 2,
    title: 'DisplayArray Procedure',
    description: 'Write a PROCEDURE called DisplayArray that takes an array Data (BYVAL) and an integer Size (BYVAL). It should display each element with its index number like "Position 1: 45". Then write a procedure DisplayStats that shows min, max, and average.',
    hint1: 'PROCEDURE DisplayArray(BYVAL Data : ARRAY, BYVAL Size : INTEGER) — no RETURNS needed.',
    hint2: 'Loop from 1 to Size and OUTPUT each Data[i] with its position.',
    hint3: 'For DisplayStats, you need three variables: Min, Max (start with Data[1]), and Total.',
    solution: `// Procedure to display array contents
PROCEDURE DisplayArray(BYVAL Data : ARRAY, BYVAL Size : INTEGER)
   DECLARE i : INTEGER
   OUTPUT "Array Contents:"
   OUTPUT "---------------"
   FOR i ← 1 TO Size
      OUTPUT "Position ", i, ": ", Data[i]
   NEXT i
ENDPROCEDURE

// Procedure to display statistics
PROCEDURE DisplayStats(BYVAL Data : ARRAY, BYVAL Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE Min : INTEGER
   DECLARE Max : INTEGER
   DECLARE Total : INTEGER
   DECLARE Avg : REAL
   
   Min ← Data[1]
   Max ← Data[1]
   Total ← 0
   
   FOR i ← 1 TO Size
      Total ← Total + Data[i]
      IF Data[i] < Min
         THEN
            Min ← Data[i]
      ENDIF
      IF Data[i] > Max
         THEN
            Max ← Data[i]
      ENDIF
   NEXT i
   
   Avg ← Total / Size
   OUTPUT "Minimum: ", Min
   OUTPUT "Maximum: ", Max
   OUTPUT "Average: ", Avg
ENDPROCEDURE

// Main program
DECLARE Marks : ARRAY[1:5] OF INTEGER
Marks[1] ← 72
Marks[2] ← 85
Marks[3] ← 61
Marks[4] ← 90
Marks[5] ← 78

CALL DisplayArray(Marks, 5)
CALL DisplayStats(Marks, 5)`,
    explanation: 'DisplayArray uses BYVAL because it only READS the array — no need to change it. DisplayStats also uses BYVAL for the same reason. Both use local variables (Min, Max, Total) that only exist inside the procedure.',
  },
  {
    id: 3,
    title: 'CountChar Function',
    description: 'Write a FUNCTION called CountChar that takes a STRING parameter Text and a CHAR parameter Target, and RETURNS an INTEGER — the number of times Target appears in Text. Then use it to count vowels and consonants.',
    hint1: 'Use a FOR loop from 1 to LENGTH(Text) and check each character with MID(Text, i, 1).',
    hint2: 'FUNCTION CountChar(Text : STRING, Target : CHAR) RETURNS INTEGER',
    hint3: 'Declare a Count variable, start at 0, add 1 each time MID(Text, i, 1) = Target, then RETURN Count.',
    solution: `FUNCTION CountChar(Text : STRING, Target : CHAR) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   Count ← 0
   FOR i ← 1 TO LENGTH(Text)
      IF MID(Text, i, 1) = Target
         THEN
            Count ← Count + 1
      ENDIF
   NEXT i
   RETURN Count
ENDFUNCTION

// Function to count all vowels using CountChar
FUNCTION CountVowels(Text : STRING) RETURNS INTEGER
   DECLARE Total : INTEGER
   DECLARE LowerText : STRING
   LowerText ← LCASE(Text)
   Total ← 0
   Total ← Total + CountChar(LowerText, 'a')
   Total ← Total + CountChar(LowerText, 'e')
   Total ← Total + CountChar(LowerText, 'i')
   Total ← Total + CountChar(LowerText, 'o')
   Total ← Total + CountChar(LowerText, 'u')
   RETURN Total
ENDFUNCTION

// Main program
DECLARE InputText : STRING
DECLARE VowelCount : INTEGER
DECLARE SpaceCount : INTEGER

OUTPUT "Enter a sentence: "
INPUT InputText

VowelCount ← CountVowels(InputText)
SpaceCount ← CountChar(InputText, ' ')

OUTPUT "Vowels: ", VowelCount
OUTPUT "Spaces: ", SpaceCount
OUTPUT "Words:  ", SpaceCount + 1`,
    explanation: 'CountChar is a reusable function — we call it 5 times inside CountVowels to count each vowel separately. This shows how functions can call other functions! Notice how calling a function inside another function makes the code clean and readable.',
  },
  {
    id: 4,
    title: 'BYVAL vs BYREF — Trace and Explain',
    description: 'Write a procedure Swap that exchanges the values of two INTEGER variables (X and Y) using BYREF. Then explain: what would happen if you used BYVAL instead? Trace through both versions with X=10, Y=20.',
    hint1: 'To swap two variables you need a THIRD temporary variable: Temp ← X, X ← Y, Y ← Temp.',
    hint2: 'Use BYREF X and BYREF Y because you NEED the original variables to change.',
    hint3: 'With BYVAL, the copies get swapped inside the procedure but the originals stay the same.',
    solution: `// CORRECT version - using BYREF
PROCEDURE Swap(BYREF X : INTEGER, BYREF Y : INTEGER)
   DECLARE Temp : INTEGER
   Temp ← X
   X ← Y
   Y ← Temp
ENDPROCEDURE

// WRONG version - using BYVAL (swap doesn't work!)
PROCEDURE SwapWrong(BYVAL X : INTEGER, BYVAL Y : INTEGER)
   DECLARE Temp : INTEGER
   Temp ← X
   X ← Y
   Y ← Temp
   // Only the copies are swapped - originals unchanged!
ENDPROCEDURE

// Testing BYREF version
DECLARE A : INTEGER
DECLARE B : INTEGER
A ← 10
B ← 20
OUTPUT "Before: A=", A, " B=", B   // Before: A=10 B=20
CALL Swap(A, B)
OUTPUT "After:  A=", A, " B=", B   // After:  A=20 B=10  ← WORKS!

// Testing BYVAL version
A ← 10
B ← 20
OUTPUT "Before: A=", A, " B=", B   // Before: A=10 B=20
CALL SwapWrong(A, B)
OUTPUT "After:  A=", A, " B=", B   // After:  A=10 B=20  ← DIDN'T SWAP!`,
    explanation: 'BYREF makes Swap work because X and Y inside the procedure ARE the original variables A and B — changing them changes A and B. BYVAL copies are separate — swapping copies doesn\'t affect the originals. This is exactly why BubbleSort uses BYREF for the array!',
  },
];

export default function D10Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const toggleSolution = (id: number) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">✍️ Practice Exercises</h1>
      <p className="text-gray-500 text-lg mb-8">Day 10 — Procedures & Functions — 4 exercises</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-amber-800 font-semibold">🎯 How to use these exercises:</p>
        <p className="text-amber-700 text-sm mt-1">Try each exercise yourself first. Reveal hints one by one only if stuck. Check the solution only after attempting!</p>
      </div>

      <div className="space-y-8">
        {exercises.map((ex) => {
          const hintsShown = revealed[ex.id] || 0;
          const hints = [ex.hint1, ex.hint2, ex.hint3];

          return (
            <div key={ex.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-lime-500 to-green-500 p-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-extrabold text-white text-lg">{ex.id}</span>
                  <h3 className="text-xl font-bold text-white">{ex.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
                  <p className="font-bold text-gray-700 mb-2">📋 Task:</p>
                  <p className="text-gray-600">{ex.description}</p>
                </div>

                {/* Hints */}
                <div className="space-y-2 mb-6">
                  {hints.slice(0, hintsShown).map((hint, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-blue-500 font-bold text-sm flex-shrink-0">Hint {i + 1}:</span>
                      <p className="text-blue-700 text-sm">{hint}</p>
                    </div>
                  ))}
                  {hintsShown < 3 && (
                    <button onClick={() => revealHint(ex.id)} className="text-sm text-blue-600 hover:text-blue-800 font-medium underline">
                      {hintsShown === 0 ? '💡 Show first hint' : `💡 Show hint ${hintsShown + 1} of 3`}
                    </button>
                  )}
                </div>

                {/* Solution toggle */}
                <button
                  onClick={() => toggleSolution(ex.id)}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all bg-gradient-to-r from-lime-500 to-green-500 text-white hover:shadow-lg"
                >
                  {showSolution[ex.id] ? '🙈 Hide Solution' : '✅ Show Full Solution'}
                </button>

                {showSolution[ex.id] && (
                  <div className="mt-4">
                    <CodeBlock language="pseudocode" code={ex.solution} />
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="font-bold text-green-800 mb-1">💡 Explanation:</p>
                      <p className="text-green-700 text-sm">{ex.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
