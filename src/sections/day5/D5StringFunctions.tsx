import CodeBlock from '../../components/CodeBlock';

export default function D5StringFunctions() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">🔧 String Functions</h1>
      <p className="text-gray-500 mb-6 text-lg">LENGTH, UCASE, LCASE, LEFT, RIGHT, MID, SUBSTRING — your string toolkit</p>

      <div className="tip-box mb-8">
        <p className="font-bold text-amber-800">📋 Exam Insert — Don't Panic!</p>
        <p className="text-amber-900 mt-1">
          These functions are listed on the <strong>insert page</strong> given with your exam paper. You don't need to memorise 
          the exact function names. But you <strong>DO need to know how to use them correctly</strong> — the insert just tells you 
          they exist, it doesn't teach you how to combine them!
        </p>
      </div>

      {/* LENGTH */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📏 LENGTH(String)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Returns the <strong>number of characters</strong> in a string. Spaces and punctuation all count!
        </p>

        <CodeBlock language="pseudocode" title="LENGTH examples" code={`DECLARE Text : STRING
Text \u2190 "Hello World"

OUTPUT LENGTH(Text)           // 11  (5 + 1 space + 5)
OUTPUT LENGTH("Cat")          // 3
OUTPUT LENGTH("")             // 0   (empty string)
OUTPUT LENGTH("A")            // 1
OUTPUT LENGTH("Hello!")       // 6   (! counts too)`} />

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="font-bold text-blue-800 mb-2">🧠 Think About It</p>
          <div className="space-y-2 text-blue-700 text-sm">
            <p>• <strong>Spaces count!</strong> "Hello World" = 11, not 10. The space between is a character.</p>
            <p>• <strong>Empty string ""</strong> has LENGTH 0 — useful for checking if input is blank.</p>
            <p>• <strong>Common use:</strong> in a FOR loop → <code className="bg-blue-100 px-1 rounded">FOR i ← 1 TO LENGTH(Text)</code> to process each character.</p>
          </div>
        </div>
      </div>

      {/* UCASE and LCASE */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔠 UCASE(String) & LCASE(String)</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Convert a string to <strong>all uppercase</strong> or <strong>all lowercase</strong>. 
          The original string is NOT changed — these return a <strong>new string</strong>.
        </p>

        <CodeBlock language="pseudocode" title="UCASE and LCASE examples" code={`DECLARE Text : STRING
Text \u2190 "Hello World"

OUTPUT UCASE(Text)            // HELLO WORLD
OUTPUT LCASE(Text)            // hello world
OUTPUT UCASE("python")        // PYTHON
OUTPUT LCASE("SHOUTING")      // shouting

// Text is still "Hello World" - not changed!
OUTPUT Text                   // Hello World`} />

        <div className="mt-4 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
          <p className="font-bold text-emerald-800 mb-2">🎯 Why Are These Useful?</p>
          <p className="text-emerald-700 text-sm"><strong>Case-insensitive comparison!</strong> This is the #1 use case:</p>
        </div>

        <CodeBlock language="pseudocode" title="The classic use — case-insensitive comparison" code={`// Problem: User types "yes", "Yes", "YES", "yEs"... 
// How do you check all of these?

// BAD WAY - checking every combination:
IF Answer = "yes" OR Answer = "Yes" OR Answer = "YES"
   THEN
      OUTPUT "OK"      // What about "yES"? Missing!
ENDIF

// GOOD WAY - convert to one case first:
IF UCASE(Answer) = "YES"
   THEN
      OUTPUT "OK"      // Works for ANY capitalisation!
ENDIF`} />

        <div className="mt-4 bg-amber-50 p-4 rounded-xl border border-amber-100">
          <p className="font-bold text-amber-800 mb-2">✨ Exam Tip</p>
          <p className="text-amber-700 text-sm">
            When checking vowels, always convert to one case first: 
            <code className="bg-amber-100 px-1 rounded">CurrentChar ← LCASE(MID(Text, i, 1))</code>. 
            Then you only check 'a', 'e', 'i', 'o', 'u' instead of both upper and lower!
          </p>
        </div>
      </div>

      {/* LEFT and RIGHT */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\u2B05\uFE0F"} LEFT(String, N) & RIGHT(String, N) {"\u27A1\uFE0F"}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Extract the first N characters (<strong>LEFT</strong>) or last N characters (<strong>RIGHT</strong>) from a string.
        </p>

        <CodeBlock language="pseudocode" title="LEFT and RIGHT examples" code={`DECLARE Text : STRING
Text \u2190 "Hello World"

// LEFT - take from the start
OUTPUT LEFT(Text, 5)          // Hello
OUTPUT LEFT(Text, 1)          // H
OUTPUT LEFT(Text, 7)          // Hello W
OUTPUT LEFT("Computer", 3)    // Com

// RIGHT - take from the end
OUTPUT RIGHT(Text, 5)         // World
OUTPUT RIGHT(Text, 1)         // d
OUTPUT RIGHT(Text, 7)         //  World   (includes the space!)
OUTPUT RIGHT("Computer", 3)   // ter`} />

        <div className="mt-4 overflow-x-auto">
          <p className="font-bold text-gray-700 mb-3">Visual breakdown of "Hello World" (11 characters):</p>
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 px-1">Pos</th>
                {[1,2,3,4,5,6,7,8,9,10,11].map(n => <th key={n} className="py-2 px-1">{n}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold text-gray-500">Char</td>
                {['H','e','l','l','o',' ','W','o','r','l','d'].map((c, i) => (
                  <td key={i} className={`py-2 font-mono font-bold ${i < 5 ? 'text-indigo-600 bg-indigo-50' : i === 5 ? 'text-gray-400 bg-gray-50' : 'text-purple-600 bg-purple-50'}`}>
                    {c === ' ' ? '\u23B5' : c}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-bold text-blue-600 text-xs">LEFT(5)</td>
                {[1,2,3,4,5,6,7,8,9,10,11].map(n => (
                  <td key={n} className={`py-2 text-xs ${n <= 5 ? 'bg-blue-100 font-bold text-blue-700' : ''}`}>
                    {n <= 5 ? '\u2713' : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 font-bold text-green-600 text-xs">RIGHT(5)</td>
                {[1,2,3,4,5,6,7,8,9,10,11].map(n => (
                  <td key={n} className={`py-2 text-xs ${n >= 7 ? 'bg-green-100 font-bold text-green-700' : ''}`}>
                    {n >= 7 ? '\u2713' : ''}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MID and SUBSTRING */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\u2702\uFE0F"} MID(String, Start, Length) & SUBSTRING</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Extract characters from <strong>anywhere</strong> in the string. You specify <strong>where to start</strong> and 
          <strong> how many characters</strong> to take. Both MID and SUBSTRING work the same way.
        </p>

        <div className="warning-box mb-4">
          <p className="font-bold text-red-800">{"\uD83D\uDEA8"} 1-INDEXED — Position 1 is the FIRST character!</p>
          <p className="text-red-900 mt-1">
            In Cambridge pseudocode, the first character is at position <strong>1</strong>, not 0. 
            This is different from Python (which uses 0). Don't mix them up!
          </p>
        </div>

        <CodeBlock language="pseudocode" title="MID and SUBSTRING examples" code={`DECLARE Text : STRING
Text \u2190 "Hello World"

// MID(String, StartPosition, HowManyCharacters)
OUTPUT MID(Text, 1, 5)        // Hello    (start at 1, take 5)
OUTPUT MID(Text, 7, 5)        // World    (start at 7, take 5)
OUTPUT MID(Text, 1, 1)        // H        (start at 1, take 1)
OUTPUT MID(Text, 6, 1)        // " "      (the space character!)
OUTPUT MID(Text, 3, 4)        // lo W     (start at 3, take 4)

// SUBSTRING works the same way
OUTPUT SUBSTRING(Text, 1, 5)  // Hello
OUTPUT SUBSTRING(Text, 7, 5)  // World

// Getting a single character at position i:
// MID(Text, i, 1)  <-- KEY PATTERN for char-by-char!`} />

        <div className="mt-4 overflow-x-auto">
          <p className="font-bold text-gray-700 mb-3">Visual: MID("Hello World", 3, 4)</p>
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 px-1">Pos</th>
                {[1,2,3,4,5,6,7,8,9,10,11].map(n => (
                  <th key={n} className={`py-2 px-1 ${n >= 3 && n <= 6 ? 'bg-amber-50' : ''}`}>{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 font-bold text-gray-500">Char</td>
                {['H','e','l','o',' ','W','o','r','l','d'].map((c, i) => {
                  const pos = i + 1;
                  const highlight = pos >= 3 && pos <= 6;
                  return (
                    <td key={i} className={`py-2 font-mono ${highlight ? 'font-bold text-amber-700 bg-amber-100' : 'text-gray-400'}`}>
                      {c === ' ' ? '\u23B5' : c}
                    </td>
                  );
                })}
                <td className="py-2 font-mono text-gray-400">d</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Start at position <strong>3</strong>, take <strong>4</strong> characters {"\u2192"} <code className="bg-gray-100 px-1 rounded">"lo W"</code>
          </p>
        </div>

        <div className="mt-6 bg-indigo-50 p-5 rounded-xl border border-indigo-100">
          <p className="font-bold text-indigo-800 mb-3">{"\uD83D\uDD11"} The MOST Important Pattern — Getting One Character</p>
          <p className="text-indigo-700 text-sm mb-3">
            To get the character at position <strong>i</strong>, use: <code className="bg-indigo-100 px-2 py-1 rounded font-bold">MID(Text, i, 1)</code>
          </p>
          <p className="text-indigo-700 text-sm mb-3">
            This is how you process a string <strong>character by character</strong> in a loop. 
            You'll use this in almost every string exam question:
          </p>
          <CodeBlock language="pseudocode" title="Character-by-character template" code={`FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)   // get char at position i
   // ... do something with CurrentChar ...
NEXT i`} />
        </div>
      </div>

      {/* Quick Reference */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\uD83D\uDCCA"} Quick Reference — All String Functions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-gray-600 font-bold">Function</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">What It Does</th>
                <th className="py-3 pr-4 text-gray-600 font-bold">Example</th>
                <th className="py-3 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">LENGTH(s)</td>
                <td className="py-3 pr-4">Number of characters</td>
                <td className="py-3 pr-4 font-mono">LENGTH("Hello")</td>
                <td className="py-3 font-bold">5</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">UCASE(s)</td>
                <td className="py-3 pr-4">Convert to uppercase</td>
                <td className="py-3 pr-4 font-mono">UCASE("Hello")</td>
                <td className="py-3 font-bold">"HELLO"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">LCASE(s)</td>
                <td className="py-3 pr-4">Convert to lowercase</td>
                <td className="py-3 pr-4 font-mono">LCASE("Hello")</td>
                <td className="py-3 font-bold">"hello"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">LEFT(s, n)</td>
                <td className="py-3 pr-4">First n characters</td>
                <td className="py-3 pr-4 font-mono">LEFT("Hello", 3)</td>
                <td className="py-3 font-bold">"Hel"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">RIGHT(s, n)</td>
                <td className="py-3 pr-4">Last n characters</td>
                <td className="py-3 pr-4 font-mono">RIGHT("Hello", 3)</td>
                <td className="py-3 font-bold">"llo"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">MID(s, start, n)</td>
                <td className="py-3 pr-4">n chars from position start</td>
                <td className="py-3 pr-4 font-mono">MID("Hello", 2, 3)</td>
                <td className="py-3 font-bold">"ell"</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono font-bold text-indigo-600">SUBSTRING(s, start, n)</td>
                <td className="py-3 pr-4">Same as MID</td>
                <td className="py-3 pr-4 font-mono">SUBSTRING("Hello", 2, 3)</td>
                <td className="py-3 font-bold">"ell"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">{"\uD83D\uDCA1"} Memory Trick</p>
        <p className="text-amber-900 mt-1">
          <strong>LEFT</strong> = from the <strong>L</strong>eft side. <strong>RIGHT</strong> = from the <strong>R</strong>ight side. 
          <strong>MID</strong> = from wherever you want (you set the start). 
          Think: LEFT grabs from the start, RIGHT from the end, MID from any position.
        </p>
      </div>
    </div>
  );
}
