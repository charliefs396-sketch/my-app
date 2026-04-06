import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D5Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setChecked(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  const checklistItems = [
    "I can use LENGTH() to find how many characters are in a string",
    "I can use UCASE() and LCASE() to convert case",
    "I know why UCASE/LCASE are used for case-insensitive comparison",
    "I can use LEFT(String, N) to extract the first N characters",
    "I can use RIGHT(String, N) to extract the last N characters",
    "I can use MID(String, Start, Length) to extract from any position",
    "I know that Cambridge pseudocode is 1-INDEXED (first char = position 1)",
    "I can use MID(Text, i, 1) to get a single character at position i",
    "I know the character-by-character template: FOR + MID pattern",
    "I know what ASC() does (character to ASCII number)",
    "I know what CHR() does (ASCII number to character)",
    "I know key ASCII values: A=65, Z=90, a=97, z=122, 0=48",
    "I understand the difference between ASC('5')=53 and STR_TO_NUM(\"5\")=5",
    "I can use NUM_TO_STR() and STR_TO_NUM() for type conversion",
    "I can count vowels in a string using FOR + LCASE + MID",
    "I can reverse a string using concatenation",
    "I can check if a string is a palindrome",
    "I understand the Caesar cipher wrap formula with MOD 26",
    "I can count uppercase, lowercase, digits using ASC ranges",
    "I know the 4 patterns: Counting, Building, Checking, Transforming",
  ];

  const progress = Math.round((checked.size / checklistItems.length) * 100);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{"\uD83D\uDCCB"} Day 5 Cheatsheet</h1>
      <p className="text-gray-500 mb-6 text-lg">Everything from String Manipulation on one page</p>

      {/* All String Functions */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All String Functions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 text-gray-600 font-bold">Function</th>
                <th className="py-2 pr-3 text-gray-600 font-bold">Purpose</th>
                <th className="py-2 pr-3 text-gray-600 font-bold">Example</th>
                <th className="py-2 text-gray-600 font-bold">Result</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">LENGTH(s)</td>
                <td className="py-2 pr-3">Count characters</td>
                <td className="py-2 pr-3 font-mono">LENGTH("Hi!")</td>
                <td className="py-2 font-bold">3</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">UCASE(s)</td>
                <td className="py-2 pr-3">To uppercase</td>
                <td className="py-2 pr-3 font-mono">UCASE("Hi")</td>
                <td className="py-2 font-bold">"HI"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">LCASE(s)</td>
                <td className="py-2 pr-3">To lowercase</td>
                <td className="py-2 pr-3 font-mono">LCASE("Hi")</td>
                <td className="py-2 font-bold">"hi"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">LEFT(s, n)</td>
                <td className="py-2 pr-3">First n chars</td>
                <td className="py-2 pr-3 font-mono">LEFT("Hello", 3)</td>
                <td className="py-2 font-bold">"Hel"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">RIGHT(s, n)</td>
                <td className="py-2 pr-3">Last n chars</td>
                <td className="py-2 pr-3 font-mono">RIGHT("Hello", 3)</td>
                <td className="py-2 font-bold">"llo"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">MID(s, pos, n)</td>
                <td className="py-2 pr-3">n chars from pos</td>
                <td className="py-2 pr-3 font-mono">MID("Hello", 2, 3)</td>
                <td className="py-2 font-bold">"ell"</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">ASC(c)</td>
                <td className="py-2 pr-3">Char to ASCII code</td>
                <td className="py-2 pr-3 font-mono">ASC('A')</td>
                <td className="py-2 font-bold">65</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">CHR(n)</td>
                <td className="py-2 pr-3">ASCII code to char</td>
                <td className="py-2 pr-3 font-mono">CHR(66)</td>
                <td className="py-2 font-bold">'B'</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">NUM_TO_STR(n)</td>
                <td className="py-2 pr-3">Number to string</td>
                <td className="py-2 pr-3 font-mono">NUM_TO_STR(42)</td>
                <td className="py-2 font-bold">"42"</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-mono font-bold text-indigo-600">STR_TO_NUM(s)</td>
                <td className="py-2 pr-3">String to number</td>
                <td className="py-2 pr-3 font-mono">STR_TO_NUM("42")</td>
                <td className="py-2 font-bold">42</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ASCII Quick Reference */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ASCII Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-center">
            <p className="font-bold text-indigo-800 text-lg mb-1">A - Z</p>
            <p className="text-3xl font-extrabold text-indigo-600">65 - 90</p>
            <p className="text-xs text-indigo-500 mt-1">Uppercase letters</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
            <p className="font-bold text-purple-800 text-lg mb-1">a - z</p>
            <p className="text-3xl font-extrabold text-purple-600">97 - 122</p>
            <p className="text-xs text-purple-500 mt-1">Lowercase letters</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-center">
            <p className="font-bold text-amber-800 text-lg mb-1">0 - 9</p>
            <p className="text-3xl font-extrabold text-amber-600">48 - 57</p>
            <p className="text-xs text-amber-500 mt-1">Digit characters</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3 text-center">
          Upper to lower: add 32. Lower to upper: subtract 32. Space = 32.
        </p>
      </div>

      {/* Key Templates */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Templates</h2>

        <CodeBlock language="pseudocode" title="Template 1: Character-by-character loop" code={`FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)
   // process CurrentChar
NEXT i`} />

        <CodeBlock language="pseudocode" title="Template 2: Count pattern" code={`Count \u2190 0
FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 LCASE(MID(Text, i, 1))
   IF condition
      THEN
         Count \u2190 Count + 1
   ENDIF
NEXT i`} />

        <CodeBlock language="pseudocode" title="Template 3: Build new string" code={`NewString \u2190 ""
FOR i \u2190 1 TO LENGTH(Text)
   CurrentChar \u2190 MID(Text, i, 1)
   NewString \u2190 NewString & transformed_char
NEXT i`} />

        <CodeBlock language="pseudocode" title="Template 4: Caesar cipher shift" code={`// For uppercase letters:
Code \u2190 ASC(CurrentChar)
IF Code >= 65 AND Code <= 90
   THEN
      NewCode \u2190 ((Code - 65 + Shift) MOD 26) + 65
      Encrypted \u2190 Encrypted & CHR(NewCode)
ENDIF`} />
      </div>

      {/* 4 Patterns Summary */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">4 String Processing Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-1">{"\uD83D\uDD22"} COUNTING</h3>
            <p className="text-indigo-700 text-xs">Counter = 0, loop, IF match THEN counter + 1</p>
            <p className="text-indigo-500 text-xs mt-1 italic">Vowels, digits, uppercase, spaces</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-1">{"\uD83D\uDEE0\uFE0F"} BUILDING</h3>
            <p className="text-purple-700 text-xs">NewStr = "", loop, concatenate chars to build result</p>
            <p className="text-purple-500 text-xs mt-1 italic">Reverse, remove chars, extract parts</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-1">{"\u2705"} CHECKING</h3>
            <p className="text-emerald-700 text-xs">Flag = TRUE, loop, IF fail THEN flag = FALSE</p>
            <p className="text-emerald-500 text-xs mt-1 italic">Palindrome, all digits, valid format</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-800 mb-1">{"\uD83D\uDD04"} TRANSFORMING</h3>
            <p className="text-amber-700 text-xs">Loop, modify each char, build transformed string</p>
            <p className="text-amber-500 text-xs mt-1 italic">Caesar cipher, toggle case, ROT13</p>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\u26A0\uFE0F"} Common Mistakes</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
            <span className="text-red-600 font-bold flex-shrink-0">{"\u2717"}</span>
            <div className="text-sm">
              <p className="text-red-800"><strong>Starting at position 0</strong> — Pseudocode is 1-indexed!</p>
              <p className="text-red-600">FOR i {"\u2190"} <s>0</s> TO LENGTH(Text) {"\u2192"} FOR i {"\u2190"} <strong>1</strong> TO LENGTH(Text)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
            <span className="text-red-600 font-bold flex-shrink-0">{"\u2717"}</span>
            <div className="text-sm">
              <p className="text-red-800"><strong>Using AND for vowel check</strong> — should be OR</p>
              <p className="text-red-600">IF c = 'a' <s>AND</s> c = 'e' {"\u2192"} IF c = 'a' <strong>OR</strong> c = 'e'</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
            <span className="text-red-600 font-bold flex-shrink-0">{"\u2717"}</span>
            <div className="text-sm">
              <p className="text-red-800"><strong>Forgetting to initialise</strong> — set counters/strings before loop</p>
              <p className="text-red-600">Always: Count {"\u2190"} 0 and NewStr {"\u2190"} "" BEFORE the FOR loop</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
            <span className="text-red-600 font-bold flex-shrink-0">{"\u2717"}</span>
            <div className="text-sm">
              <p className="text-red-800"><strong>Confusing ASC with STR_TO_NUM</strong></p>
              <p className="text-red-600">ASC('5') = 53 (ASCII code) vs STR_TO_NUM("5") = 5 (number value)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg">
            <span className="text-red-600 font-bold flex-shrink-0">{"\u2717"}</span>
            <div className="text-sm">
              <p className="text-red-800"><strong>Concatenating number with string</strong></p>
              <p className="text-red-600">"Score: " & <s>42</s> {"\u2192"} "Score: " & <strong>NUM_TO_STR(42)</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Checklist */}
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{"\u2705"} Confidence Checklist</h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Confidence Level</span>
            <span className="font-bold text-indigo-600">{checked.size}/{checklistItems.length} ({progress}%)</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="space-y-2">
          {checklistItems.map((item, idx) => (
            <label key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={checked.has(idx)}
                onChange={() => toggle(idx)}
                className="mt-1 w-4 h-4 text-indigo-600 rounded"
              />
              <span className={`text-sm ${checked.has(idx) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
