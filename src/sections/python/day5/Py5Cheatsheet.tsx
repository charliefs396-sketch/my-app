import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py5Cheatsheet() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setChecked(p => ({ ...p, [k]: !p[k] }));

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📋 Cheatsheet — Python Strings</h2>
      <p className="text-gray-500 mb-8">Everything you need for string questions on one page</p>

      {/* Indexing & Slicing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">📏 Indexing & Slicing</h3>
        <CodeBlock language="python" code={`text = "Hello World"   # length = 11

# Single character
text[0]      # H  (first)
text[-1]     # d  (last)
text[6]      # W

# Slicing [start:stop:step]  — stop NOT included!
text[0:5]    # Hello
text[6:]     # World
text[:5]     # Hello
text[-5:]    # World
text[:]      # Hello World (copy)
text[::-1]   # dlroW olleH (reversed)
text[::2]    # HloWrd (every 2nd)

# Convert pseudocode:
# MID(text, 3, 2) → text[2:4]
# LEFT(text, 5)   → text[:5]
# RIGHT(text, 5)  → text[-5:]`} />
      </div>

      {/* String methods */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔧 String Methods</h3>
        <CodeBlock language="python" code={`text = "Hello World"

# Case
text.upper()            # HELLO WORLD
text.lower()            # hello world
text.capitalize()       # Hello world
text.title()            # Hello World

# Search
text.find("World")      # 6  (-1 if not found)
text.count("l")         # 3  (0 if not found)
"World" in text         # True

# Modify (returns NEW string)
text.replace("World","Python")  # Hello Python
text.strip()            # remove leading/trailing spaces
text.lstrip()           # remove left spaces only
text.rstrip()           # remove right spaces only

# Split & Join
"a,b,c".split(",")      # ['a', 'b', 'c']
" ".join(['a','b','c']) # 'a b c'

# Check (True/False)
"ABC".isupper()         # True
"abc".islower()         # True
"123".isdigit()         # True
"abc".isalpha()         # True
"abc123".isalnum()      # True
"   ".isspace()         # True
"Hi".startswith("H")   # True
"Hi".endswith("i")     # True`} />
      </div>

      {/* ASCII */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔢 ASCII & Key Patterns</h3>
        <CodeBlock language="python" code={`# ASCII conversion
ord('A')  # 65    ord('a')  # 97    ord('0')  # 48
chr(65)   # 'A'   chr(97)   # 'a'   chr(48)   # '0'

# Key relationships
ord('Z') - ord('A')  # 25 (26 letters, 0-25)
ord('a') - ord('A')  # 32 (always!)

# Caesar cipher formula
def encrypt_char(char, shift):
    if char.isupper():
        return chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
    elif char.islower():
        return chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
    return char  # non-letters unchanged

# Reverse without [::-1]
def reverse_string(text):
    result = ""
    for i in range(len(text) - 1, -1, -1):
        result += text[i]
    return result

# Palindrome check
def is_palindrome(text):
    cleaned = text.lower().replace(" ", "")
    return cleaned == reverse_string(cleaned)

# Count character types
def analyse(text):
    v = c = d = s = 0
    for ch in text:
        if ch.isspace(): s += 1
        elif ch.isdigit(): d += 1
        elif ch.lower() in "aeiou": v += 1
        elif ch.isalpha(): c += 1
    return v, c, d, s`} />
      </div>

      {/* Pseudocode vs Python table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h3 className="font-bold text-gray-900">🔄 Pseudocode vs Python Quick Reference</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-600">Operation</th>
                <th className="px-4 py-3 text-left font-bold text-indigo-600">Pseudocode</th>
                <th className="px-4 py-3 text-left font-bold text-emerald-600">Python</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Length', 'LENGTH(text)', 'len(text)'],
                ['First char', 'MID(text, 1, 1)', 'text[0]'],
                ['Last char', 'MID(text, LENGTH(text), 1)', 'text[-1]'],
                ['First 5', 'LEFT(text, 5)', 'text[:5]'],
                ['Last 5', 'RIGHT(text, 5)', 'text[-5:]'],
                ['Middle', 'MID(text, 3, 4)', 'text[2:6]'],
                ['Uppercase', 'UCASE(text)', 'text.upper()'],
                ['Lowercase', 'LCASE(text)', 'text.lower()'],
                ['Find', 'Not standard', 'text.find(x) → -1 if missing'],
                ['Count', 'Not standard', 'text.count(x) → 0 if missing'],
                ['ASCII', "ASC('A')", "ord('A')"],
                ['From ASCII', 'CHR(65)', 'chr(65)'],
                ['Concatenate', 'a & b', 'a + b'],
                ['Num to str', 'NUM_TO_STR(42)', 'str(42)'],
                ['Str to num', 'STR_TO_NUM("42")', 'int("42") / float("42")'],
              ].map(([op, pseudo, python]) => (
                <tr key={op} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-semibold text-gray-700">{op}</td>
                  <td className="px-4 py-2 font-mono text-indigo-700 text-xs">{pseudo}</td>
                  <td className="px-4 py-2 font-mono text-emerald-700 text-xs">{python}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-900 text-lg mb-4">⚠️ Common Mistakes</h3>
        <div className="space-y-3">
          {[
            { wrong: 'text[1]  # thinking it\'s first character', right: 'text[0]  # Python starts at 0!', note: '0-indexed!' },
            { wrong: 'text[5]  # for text[0:5]', right: 'text[0:5] gives indices 0,1,2,3,4', note: 'Stop is NOT included' },
            { wrong: 'text[0] = "H"  # TypeError!', right: 'text = "H" + text[1:]  # strings immutable', note: 'Immutable!' },
            { wrong: 'text.find("x")  # thinking returns 0', right: 'Returns -1 if not found', note: 'find() → -1 if missing' },
            { wrong: 'Forgetting % 26 in Caesar cipher', right: '(ord(c)-ord("A")+shift) % 26 + ord("A")', note: 'Must wrap around!' },
            { wrong: '"Race car" == "racecar"[::-1]  # False', right: 'Normalise first: .lower().replace(" ","")', note: 'Palindrome normalise!' },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                <span className="text-red-500 font-bold text-xs">❌ {item.note}</span>
                <br /><code className="text-red-700">{item.wrong}</code>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                <span className="text-green-500 font-bold text-xs">✅ CORRECT</span>
                <br /><code className="text-green-700">{item.right}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-4">✅ Day 5 Confidence Checklist</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'I know Python is 0-indexed (first char = text[0])',
            'I can use text[-1] to get the last character',
            'I understand slicing: text[start:stop] — stop NOT included',
            'I can convert MID(text, 3, 2) → text[2:4]',
            'I know text[::-1] reverses a string',
            'I can use .upper(), .lower(), .find(), .count(), .replace()',
            'I know find() returns -1 and count() returns 0 if not found',
            'I know ord() and chr() and can use them',
            'I can loop through a string with for char in text',
            'I can count vowels, consonants, digits, spaces in a loop',
            'I can reverse a string manually without [::-1]',
            'I can check palindromes (normalise first!)',
            'I understand the Caesar cipher % 26 formula',
            'I know strings are IMMUTABLE — cannot change individual chars',
          ].map((item, i) => {
            const key = `check-${i}`;
            return (
              <label key={key} className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 w-4 h-4 accent-emerald-600" checked={!!checked[key]} onChange={() => toggle(key)} />
                <span className={`text-sm transition-colors ${checked[key] ? 'line-through text-gray-400' : 'text-gray-700 group-hover:text-gray-900'}`}>{item}</span>
              </label>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-emerald-200">
          <p className="text-sm text-emerald-700 font-semibold">
            ✓ {Object.values(checked).filter(Boolean).length} / 14 completed
          </p>
        </div>
      </div>
    </div>
  );
}
