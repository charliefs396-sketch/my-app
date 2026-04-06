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
    title: "Count Character Types",
    description: "Write pseudocode to input a string and count how many uppercase letters, lowercase letters, digits, and spaces it contains. Output each count.",
    difficulty: "Medium",
    hints: [
      "Use the character-by-character template: FOR i \u2190 1 TO LENGTH(Text), CurrentChar \u2190 MID(Text, i, 1)",
      "Use ASC() to get the ASCII code. Uppercase = 65-90, Lowercase = 97-122, Digits = 48-57",
      "For spaces, just check IF CurrentChar = ' ' (single space character)",
      "Initialise ALL four counters to 0 before the loop!"
    ],
    solution: `DECLARE Text : STRING
DECLARE Upper, Lower, Digits, Spaces : INTEGER
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR
DECLARE Code : INTEGER

OUTPUT "Enter text: "
INPUT Text
Upper \u2190 0
Lower \u2190 0
Digits \u2190 0
Spaces \u2190 0

FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)
   Code \u2190 ASC(CurrentChar)
   
   IF Code >= 65 AND Code <= 90
      THEN
         Upper \u2190 Upper + 1
      ELSE
         IF Code >= 97 AND Code <= 122
            THEN
               Lower \u2190 Lower + 1
            ELSE
               IF Code >= 48 AND Code <= 57
                  THEN
                     Digits \u2190 Digits + 1
                  ELSE
                     IF CurrentChar = ' '
                        THEN
                           Spaces \u2190 Spaces + 1
                     ENDIF
               ENDIF
         ENDIF
   ENDIF
NEXT i

OUTPUT "Uppercase: ", Upper
OUTPUT "Lowercase: ", Lower
OUTPUT "Digits: ", Digits
OUTPUT "Spaces: ", Spaces`,
    explanation: "This uses the COUNTING pattern with ASC() ranges. We get each character, convert to ASCII code, and check which range it falls in. A-Z = 65-90, a-z = 97-122, 0-9 = 48-57. For spaces we compare directly with ' '. All counters start at 0."
  },
  {
    id: 2,
    title: "Reverse a String",
    description: "Write pseudocode to input a string and output it reversed. For example, \"Hello\" becomes \"olleH\".",
    difficulty: "Medium",
    hints: [
      "You need to BUILD a new string. Start with Reversed \u2190 \"\"",
      "Method 1: Loop forwards, add each character to the FRONT: Reversed \u2190 CurrentChar & Reversed",
      "Method 2: Loop backwards with STEP -1, add each character to the END: Reversed \u2190 Reversed & MID(Text, i, 1)",
      "Both methods work! Pick whichever feels more natural to you."
    ],
    solution: `DECLARE Text : STRING
DECLARE Reversed : STRING
DECLARE i : INTEGER

OUTPUT "Enter text: "
INPUT Text
Reversed \u2190 ""

FOR i \u2190 1 TO LENGTH(Text)
   Reversed \u2190 MID(Text, i, 1) & Reversed
NEXT i

OUTPUT "Reversed: ", Reversed`,
    explanation: "We use the BUILDING pattern. Start with an empty string. For each character, we put it at the FRONT of our result (CurrentChar & Reversed, not Reversed & CurrentChar). So 'H' becomes 'H', then 'e' + 'H' = 'eH', then 'l' + 'eH' = 'leH', and so on until we get 'olleH'."
  },
  {
    id: 3,
    title: "Check if Palindrome",
    description: "Write pseudocode to input a string and check if it is a palindrome (reads the same forwards and backwards). For example, \"racecar\" is a palindrome, \"hello\" is not.",
    difficulty: "Hard",
    hints: [
      "A palindrome reads the same forwards and backwards. So you could reverse the string and compare!",
      "First reverse the string (you just learned this!), then compare: IF Text = Reversed",
      "For a case-insensitive check, convert both to the same case: LCASE(Text) = LCASE(Reversed)",
      "Alternative method: compare character at position i with character at position (LENGTH - i + 1)"
    ],
    solution: `DECLARE Text : STRING
DECLARE Reversed : STRING
DECLARE i : INTEGER
DECLARE IsPalindrome : BOOLEAN

OUTPUT "Enter text: "
INPUT Text

// Step 1: Build the reversed string
Reversed \u2190 ""
FOR i \u2190 1 TO LENGTH(Text)
   Reversed \u2190 MID(Text, i, 1) & Reversed
NEXT i

// Step 2: Compare (case-insensitive)
IF LCASE(Text) = LCASE(Reversed)
   THEN
      IsPalindrome \u2190 TRUE
      OUTPUT Text, " is a palindrome!"
   ELSE
      IsPalindrome \u2190 FALSE
      OUTPUT Text, " is NOT a palindrome."
ENDIF`,
    explanation: "We combine two skills: (1) reverse the string using the method from Exercise 2, then (2) compare the original with the reversed version. If they're equal, it's a palindrome! We use LCASE() on both so 'Racecar' matches 'racecaR'. This is a great example of BUILDING + CHECKING patterns together."
  },
  {
    id: 4,
    title: "Caesar Cipher Encryption",
    description: "Write pseudocode to encrypt a message using Caesar cipher. Input the message and a shift value (1-25). Shift each uppercase letter by the shift amount, wrapping around from Z back to A. Leave non-letter characters unchanged. For example, with shift 3: 'A' becomes 'D', 'Z' becomes 'C'.",
    difficulty: "Hard",
    hints: [
      "For each character: get its ASCII code with ASC(). Check if it's an uppercase letter (65-90).",
      "To shift: NewCode \u2190 ASC(CurrentChar) + Shift. Convert back with CHR(NewCode).",
      "The tricky part is WRAPPING: if shifting 'X' by 3, you get past 'Z'. Use MOD to wrap around!",
      "Wrap formula: NewCode \u2190 ((ASC(CurrentChar) - 65 + Shift) MOD 26) + 65. This maps A-Z to 0-25, adds shift, wraps with MOD 26, then maps back to 65-90."
    ],
    solution: `DECLARE Message : STRING
DECLARE Encrypted : STRING
DECLARE Shift : INTEGER
DECLARE i : INTEGER
DECLARE CurrentChar : CHAR
DECLARE Code : INTEGER
DECLARE NewCode : INTEGER

OUTPUT "Enter message: "
INPUT Message
OUTPUT "Enter shift (1-25): "
INPUT Shift

Encrypted \u2190 ""

FOR i \u2190 1 TO LENGTH(Message)
   CurrentChar \u2190 MID(Message, i, 1)
   Code \u2190 ASC(CurrentChar)
   
   IF Code >= 65 AND Code <= 90
      THEN
         // Uppercase letter - shift it
         NewCode \u2190 ((Code - 65 + Shift) MOD 26) + 65
         Encrypted \u2190 Encrypted & CHR(NewCode)
      ELSE
         IF Code >= 97 AND Code <= 122
            THEN
               // Lowercase letter - shift it
               NewCode \u2190 ((Code - 97 + Shift) MOD 26) + 97
               Encrypted \u2190 Encrypted & CHR(NewCode)
            ELSE
               // Not a letter - keep as is
               Encrypted \u2190 Encrypted & CurrentChar
         ENDIF
   ENDIF
NEXT i

OUTPUT "Encrypted: ", Encrypted`,
    explanation: "This is the TRANSFORMING pattern. The wrap formula ((Code - 65 + Shift) MOD 26) + 65 works like this: (1) Code - 65 converts A=0, B=1... Z=25. (2) + Shift adds the shift. (3) MOD 26 wraps around so 26 becomes 0, 27 becomes 1, etc. (4) + 65 converts back to ASCII. Example: 'X' (88) with shift 3: ((88-65+3) MOD 26) + 65 = (26 MOD 26) + 65 = 0 + 65 = 65 = 'A'. Perfect wrap!"
  }
];

export default function D5Practice() {
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (exerciseId: number) => {
    setRevealedHints(prev => ({
      ...prev,
      [exerciseId]: (prev[exerciseId] || 0) + 1
    }));
  };

  const toggleSolution = (exerciseId: number) => {
    setShowSolution(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{"\u270D\uFE0F"} Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">String manipulation challenges — try them yourself first!</p>

      <div className="tip-box mb-8">
        <p className="font-bold text-amber-800">{"\uD83D\uDCA1"} How to Practice</p>
        <p className="text-amber-900 mt-1">
          <strong>1.</strong> Read the question and try to write pseudocode on paper first. 
          <strong> 2.</strong> If stuck, reveal hints one at a time. 
          <strong> 3.</strong> Only check the solution after you've tried. 
          <strong> 4.</strong> The Caesar cipher (Exercise 4) is the hardest — it combines everything from today!
        </p>
      </div>

      {exercises.map((exercise) => {
        const hintsShown = revealedHints[exercise.id] || 0;
        const solutionShown = showSolution[exercise.id] || false;

        return (
          <div key={exercise.id} className="section-card mb-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {exercise.id}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-gray-800">{exercise.title}</h2>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    exercise.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 leading-relaxed">{exercise.description}</p>
              </div>
            </div>

            {/* Hints */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() => revealHint(exercise.id)}
                  disabled={hintsShown >= exercise.hints.length}
                  className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${
                    hintsShown >= exercise.hints.length
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  }`}
                >
                  {hintsShown >= exercise.hints.length 
                    ? 'All hints revealed' 
                    : `Reveal Hint ${hintsShown + 1}/${exercise.hints.length}`}
                </button>
              </div>
              {hintsShown > 0 && (
                <div className="space-y-2">
                  {exercise.hints.slice(0, hintsShown).map((hint, idx) => (
                    <div key={idx} className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-sm text-amber-800">
                      <span className="font-bold">Hint {idx + 1}:</span> {hint}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solution */}
            <button
              onClick={() => toggleSolution(exercise.id)}
              className={`text-sm px-4 py-2 rounded-lg font-semibold transition-all ${
                solutionShown
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {solutionShown ? 'Hide Solution' : 'Show Solution'}
            </button>

            {solutionShown && (
              <div className="mt-4">
                <CodeBlock language="pseudocode" title={`Solution: ${exercise.title}`} code={exercise.solution} />
                <div className="mt-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-blue-800 mb-1">{"\uD83D\uDD0D"} Explanation</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{exercise.explanation}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Caesar Cipher Deep Dive */}
      <div className="section-card bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\uD83C\uDF1F"} Caesar Cipher — The Wrap Formula Explained</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The hardest part of Caesar cipher is <strong>wrapping around</strong>. If you shift 'X' by 3, 
          it should go X → Y → Z → A (wrap back!). Here's how the formula works step by step:
        </p>

        <div className="bg-white p-5 rounded-xl mb-4">
          <p className="font-bold text-gray-800 mb-3">Formula: <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">((Code - 65 + Shift) MOD 26) + 65</code></p>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">1</span>
              <div>
                <p className="font-bold text-gray-800">Code - 65</p>
                <p className="text-gray-600">Convert ASCII to 0-25 range. A(65) becomes 0, B(66) becomes 1, ... Z(90) becomes 25</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">2</span>
              <div>
                <p className="font-bold text-gray-800">+ Shift</p>
                <p className="text-gray-600">Add the shift amount. This might go past 25 (past Z)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">3</span>
              <div>
                <p className="font-bold text-gray-800">MOD 26</p>
                <p className="text-gray-600">Wrap around! If result is 26, it becomes 0 (back to A). If 27, becomes 1 (B). MOD 26 keeps it in 0-25 range</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 flex-shrink-0">4</span>
              <div>
                <p className="font-bold text-gray-800">+ 65</p>
                <p className="text-gray-600">Convert back to ASCII. 0 becomes 65 (A), 1 becomes 66 (B), etc.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl">
          <p className="font-bold text-gray-800 mb-3">Example: Shift 'X' by 3</p>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 px-3 text-gray-600">Step</th>
                  <th className="py-2 px-3 text-gray-600">Calculation</th>
                  <th className="py-2 px-3 text-gray-600">Result</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2">ASC('X')</td>
                  <td className="py-2">Code = 88</td>
                  <td className="py-2 font-bold">88</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Code - 65</td>
                  <td className="py-2">88 - 65</td>
                  <td className="py-2 font-bold">23</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">+ Shift</td>
                  <td className="py-2">23 + 3</td>
                  <td className="py-2 font-bold text-red-600">26 (past Z!)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">MOD 26</td>
                  <td className="py-2">26 MOD 26</td>
                  <td className="py-2 font-bold text-green-600">0 (wrapped!)</td>
                </tr>
                <tr>
                  <td className="py-2">+ 65</td>
                  <td className="py-2">0 + 65</td>
                  <td className="py-2 font-bold text-indigo-600">65 = 'A' {"\u2713"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">X → Y → Z → <strong>A</strong> {"\u2713"} Wrapped correctly!</p>
        </div>
      </div>
    </div>
  );
}
