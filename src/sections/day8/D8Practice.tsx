import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface ExerciseProps {
  number: number;
  title: string;
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

function Exercise({ number, title, description, hints, solution, explanation }: ExerciseProps) {
  const [shownHints, setShownHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="card mb-6 border-l-4 border-sky-400">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-extrabold text-sm flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {shownHints < hints.length && (
          <button
            onClick={() => setShownHints(h => h + 1)}
            className="px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-xl text-sm font-semibold hover:bg-amber-100 transition-colors"
          >
            💡 Hint {shownHints + 1} of {hints.length}
          </button>
        )}
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-4 py-2 bg-sky-50 text-sky-700 border border-sky-200 rounded-xl text-sm font-semibold hover:bg-sky-100 transition-colors"
        >
          {showSolution ? '🙈 Hide Solution' : '✅ Show Solution'}
        </button>
      </div>

      {shownHints > 0 && (
        <div className="mb-4 space-y-2">
          {hints.slice(0, shownHints).map((hint, i) => (
            <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
              <span className="text-amber-600 font-bold text-sm flex-shrink-0">Hint {i + 1}:</span>
              <span className="text-amber-800 text-sm">{hint}</span>
            </div>
          ))}
        </div>
      )}

      {showSolution && (
        <div className="mt-2">
          <CodeBlock language="pseudocode" code={solution} />
          <div className="mt-3 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 text-sm font-bold mb-1">📖 Explanation:</p>
            <p className="text-green-700 text-sm leading-relaxed">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function D8Practice() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Practice Exercises — Linear Search</h1>
      <p className="text-gray-500 mb-8">Try each exercise yourself first. Use hints only if stuck. Don't peek at the solution until you've tried!</p>

      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-sky-800 mb-2">📋 Today's Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { n: 1, t: 'Search Integer Array', d: 'Find a number in an integer array' },
            { n: 2, t: 'Count Occurrences', d: 'Count how many times a value appears' },
            { n: 3, t: 'All Matching Positions', d: 'Output every position of matching values' },
          ].map(ex => (
            <div key={ex.n} className="bg-white rounded-xl p-3 border border-sky-100">
              <span className="text-xs font-bold text-sky-600">Exercise {ex.n}</span>
              <p className="font-bold text-gray-800 text-sm">{ex.t}</p>
              <p className="text-gray-500 text-xs">{ex.d}</p>
            </div>
          ))}
        </div>
      </div>

      <Exercise
        number={1}
        title="Search for a Number in an Integer Array"
        description="Write a FUNCTION called FindNumber that searches an array of 8 INTEGER temperatures for a target temperature. It should return the position if found, or -1 if not found. Then write the code to call it and output an appropriate message."
        hints={[
          "The function needs 3 parameters: the array (ARRAY[1:8] OF INTEGER), the size (INTEGER), and the target (INTEGER). It RETURNS INTEGER.",
          "Use a FOR loop from 1 TO Size. Inside, use IF DataArray[i] = Target THEN RETURN i.",
          "After the loop ends (target not found), add RETURN -1 outside the loop.",
          "To call it: Position ← FindNumber(Temps, 8, 31) then check IF Position <> -1.",
          "Full structure: FUNCTION → DECLARE i → FOR loop → IF → RETURN i → NEXT i → RETURN -1 → ENDFUNCTION",
        ]}
        solution={`FUNCTION FindNumber(Temps : ARRAY[1:8] OF INTEGER,
                   Size : INTEGER,
                   Target : INTEGER) RETURNS INTEGER
   DECLARE i : INTEGER
   
   FOR i ← 1 TO Size
      IF Temps[i] = Target
         THEN
            RETURN i
      ENDIF
   NEXT i
   
   RETURN -1
ENDFUNCTION

// ── Main program ────────────────────────────────
DECLARE Temperatures : ARRAY[1:8] OF INTEGER
DECLARE SearchVal : INTEGER
DECLARE Position : INTEGER

// Populate array
Temperatures[1] ← 23
Temperatures[2] ← 17
Temperatures[3] ← 31
Temperatures[4] ← 19
Temperatures[5] ← 27
Temperatures[6] ← 15
Temperatures[7] ← 31
Temperatures[8] ← 22

OUTPUT "Enter temperature to search for: "
INPUT SearchVal

Position ← FindNumber(Temperatures, 8, SearchVal)

IF Position <> -1
   THEN
      OUTPUT SearchVal, " found at position ", Position
   ELSE
      OUTPUT SearchVal, " not found in the array"
ENDIF`}
        explanation="The function follows the standard linear search pattern — loop through each element, compare with target, return the index immediately when found. If the loop completes without finding the target, return -1. The main program populates the array, gets user input, calls the function, and uses IF to check whether the result was -1 or a valid position."
      />

      <Exercise
        number={2}
        title="Search and Count All Occurrences"
        description="Write a FUNCTION called CountValue that counts how many times a given INTEGER value appears in an array of 10 integers. Test it with an array containing duplicates. The function should return the total count."
        hints={[
          "This is different from basic search! You CANNOT use RETURN early — you need to check every element.",
          "Declare a Count variable and initialise it to 0 before the loop.",
          "Inside the loop, instead of RETURN i, do: Count ← Count + 1",
          "After the loop completes (not inside it), RETURN Count.",
          "The function RETURNS INTEGER (the count). Call it like: Total ← CountValue(Numbers, 10, 85)",
        ]}
        solution={`FUNCTION CountValue(Numbers : ARRAY[1:10] OF INTEGER,
                   Size : INTEGER,
                   Target : INTEGER) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   
   Count ← 0
   
   FOR i ← 1 TO Size
      IF Numbers[i] = Target
         THEN
            Count ← Count + 1   // Increment — never RETURN early!
      ENDIF
   NEXT i
   
   RETURN Count   // Return total after checking EVERYTHING
ENDFUNCTION

// ── Main program ────────────────────────────────
DECLARE Scores : ARRAY[1:10] OF INTEGER
DECLARE SearchFor : INTEGER
DECLARE Total : INTEGER

Scores[1] ← 85    Scores[2] ← 72    Scores[3] ← 85
Scores[4] ← 91    Scores[5] ← 85    Scores[6] ← 63
Scores[7] ← 77    Scores[8] ← 85    Scores[9] ← 90
Scores[10] ← 72

OUTPUT "Enter value to count: "
INPUT SearchFor

Total ← CountValue(Scores, 10, SearchFor)

OUTPUT SearchFor, " appears ", Total, " time(s) in the array"

IF Total = 0
   THEN
      OUTPUT "Value not found in array"
ENDIF`}
        explanation="The key difference from basic search: we use Count ← Count + 1 instead of RETURN i, and we RETURN Count AFTER the loop, not inside it. This ensures we check every element and count all occurrences. Initialising Count to 0 before the loop is critical — if you forget this, the variable could have a garbage value and your count will be wrong."
      />

      <Exercise
        number={3}
        title="Search and Output All Matching Positions"
        description="Write a PROCEDURE called ShowAllPositions that searches an array of 10 strings for a target name and OUTPUTs every position where it appears. If the name doesn't appear at all, output 'Not found'. Use a Boolean flag to track whether any match was found."
        hints={[
          "Use a PROCEDURE (not a FUNCTION) since you're outputting multiple values, not returning one.",
          "Declare a BOOLEAN variable called Found and set it to FALSE before the loop.",
          "Inside the loop, when a match is found: OUTPUT the position AND set Found ← TRUE. Don't stop the loop!",
          "After the loop, check IF Found = FALSE THEN OUTPUT 'Not found'.",
          "PROCEDURE syntax: PROCEDURE ShowAllPositions(Names, Size, Target) with ENDPROCEDURE at the end. No RETURNS keyword!",
        ]}
        solution={`PROCEDURE ShowAllPositions(Names : ARRAY[1:10] OF STRING,
                           Size : INTEGER,
                           Target : STRING)
   DECLARE i : INTEGER
   DECLARE Found : BOOLEAN
   
   Found ← FALSE
   
   OUTPUT "Searching for: ", Target
   
   FOR i ← 1 TO Size
      IF Names[i] = Target
         THEN
            OUTPUT "Found at position ", i
            Found ← TRUE
      ENDIF
   NEXT i
   
   IF Found = FALSE
      THEN
         OUTPUT Target, " was not found in the array"
   ENDIF
ENDPROCEDURE

// ── Main program ────────────────────────────────
DECLARE StudentNames : ARRAY[1:10] OF STRING
DECLARE SearchName : STRING

StudentNames[1] ← "Ali"     StudentNames[2] ← "Sara"
StudentNames[3] ← "Ali"     StudentNames[4] ← "Tom"
StudentNames[5] ← "Ali"     StudentNames[6] ← "Zara"
StudentNames[7] ← "Ben"     StudentNames[8] ← "Sara"
StudentNames[9] ← "Ali"     StudentNames[10] ← "Mike"

OUTPUT "Enter name to search for: "
INPUT SearchName

ShowAllPositions(StudentNames, 10, SearchName)

// Example output when searching "Ali":
// Searching for: Ali
// Found at position 1
// Found at position 3
// Found at position 5
// Found at position 9`}
        explanation="Key points: (1) PROCEDURE not FUNCTION — no RETURNS, no RETURN statement. (2) Boolean flag Found tracks if ANY match was found. (3) We set Found TRUE inside the loop but never stop the loop — we need all positions. (4) The Found check at the end only runs once after the complete loop, showing 'not found' only if zero matches were found. This is a very common A Level exam question pattern!"
      />

      {/* Bonus challenge */}
      <div className="card border-2 border-dashed border-amber-300 bg-amber-50">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🌟</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg">Bonus Challenge — Search + Stats</h3>
            <p className="text-amber-700 text-sm">Combines Linear Search with Day 6 array operations</p>
          </div>
        </div>
        <p className="text-amber-800 text-sm mb-4 leading-relaxed">
          You have an array of 10 exam marks (integers 0–100). Write a complete program that:
        </p>
        <ol className="text-amber-800 text-sm space-y-1 mb-4 ml-4">
          <li>1. Inputs all 10 marks from the user</li>
          <li>2. Searches for a specific mark entered by the user</li>
          <li>3. Outputs the position of the first occurrence (or "not found")</li>
          <li>4. Counts and outputs how many times that mark appears</li>
          <li>5. Calculates and outputs the average of ALL marks</li>
          <li>6. Outputs whether the searched mark is above, below, or equal to the average</li>
        </ol>
        <p className="text-amber-600 text-xs font-semibold">
          💡 This combines: FOR loops (input), LinearSearch function, CountValue function, accumulator pattern, REAL division, and IF/ELSE comparison
        </p>
      </div>
    </div>
  );
}
