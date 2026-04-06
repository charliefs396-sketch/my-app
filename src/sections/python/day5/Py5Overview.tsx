import CodeBlock from '../../../components/CodeBlock';

export default function Py5Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        🔤 Day 5: Strings in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science – Python Track</p>

      {/* What you'll learn */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '📏', title: 'Indexing & Slicing', desc: '0-indexed! text[0], text[1:5], text[-1] — the three forms you must know', color: 'from-emerald-50 to-teal-50 border-emerald-200' },
          { icon: '🔧', title: 'String Methods', desc: '.upper(), .lower(), .find(), .count(), .replace() — powerful built-in tools', color: 'from-teal-50 to-cyan-50 border-teal-200' },
          { icon: '🔢', title: 'ASCII & Characters', desc: 'ord(), chr(), .isupper(), .isdigit() — for Caesar cipher and character checks', color: 'from-cyan-50 to-blue-50 border-cyan-200' },
        ].map(card => (
          <div key={card.title} className={`bg-gradient-to-br ${card.color} border rounded-xl p-5`}>
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* CRITICAL difference from pseudocode */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-red-800 text-lg mb-3">⚠️ CRITICAL: 0-indexed vs 1-indexed</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-red-600 mb-2">❌ PSEUDOCODE (1-indexed)</p>
            <CodeBlock language="pseudocode" code={`Text ← "Hello"
OUTPUT MID(Text, 1, 1)   // "H" — starts at 1
OUTPUT MID(Text, 2, 1)   // "e"
OUTPUT LEFT(Text, 3)     // "Hel"`} />
          </div>
          <div>
            <p className="text-xs font-bold text-emerald-600 mb-2">✅ PYTHON (0-indexed)</p>
            <CodeBlock language="python" code={`text = "Hello"
print(text[0])      # "H" — starts at 0
print(text[1])      # "e"
print(text[0:3])    # "Hel"`} />
          </div>
        </div>
        <p className="text-sm text-red-700 font-semibold mt-3">👆 This is the #1 mistake students make in exams when switching between languages!</p>
      </div>

      {/* Quick overview of everything */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-900 text-lg mb-4">📋 Everything in Day 5 — Quick Taste</h3>
        <CodeBlock language="python" code={`text = "Hello World"

# --- INDEXING & SLICING ---
print(text[0])          # H  (first char)
print(text[-1])         # d  (last char)
print(text[0:5])        # Hello
print(text[6:])         # World
print(text[:5])         # Hello

# --- LENGTH ---
print(len(text))        # 11

# --- CASE ---
print(text.upper())     # HELLO WORLD
print(text.lower())     # hello world

# --- FINDING & COUNTING ---
print(text.find("World"))          # 6
print(text.count("l"))             # 3
print(text.replace("World", "Python"))  # Hello Python

# --- CHARACTER CHECKS ---
print('A'.isupper())    # True
print('3'.isdigit())    # True
print('a'.isalpha())    # True

# --- ASCII ---
print(ord('A'))         # 65
print(chr(66))          # B

# --- CHARACTER BY CHARACTER ---
for char in text:
    print(char, end=" ")  # H e l l o   W o r l d`} />
      </div>

      {/* Pseudocode vs Python comparison */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-900">🔄 Python vs Pseudocode — String Functions</h3>
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
                ['Uppercase', 'UCASE(text)', 'text.upper()'],
                ['Lowercase', 'LCASE(text)', 'text.lower()'],
                ['First 5 chars', 'LEFT(text, 5)', 'text[0:5] or text[:5]'],
                ['Last 5 chars', 'RIGHT(text, 5)', 'text[-5:]'],
                ['Middle extract', 'MID(text, 7, 5)', 'text[6:11]'],
                ['Find position', 'Not standard', 'text.find("World")'],
                ['ASCII of char', "ASC('A')", "ord('A')"],
                ['Char from ASCII', 'CHR(65)', 'chr(65)'],
                ['Join strings', 'first & " " & last', 'first + " " + last'],
                ['Number to string', 'NUM_TO_STR(42)', 'str(42)'],
                ['String to number', 'STR_TO_NUM("42")', 'int("42") or float("42")'],
              ].map(([op, pseudo, python]) => (
                <tr key={op} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">{op}</td>
                  <td className="px-4 py-3 font-mono text-indigo-700 bg-indigo-50/30">{pseudo}</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 bg-emerald-50/30">{python}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Day 5 roadmap */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-4">🗺️ Day 5 Roadmap</h3>
        <div className="space-y-3">
          {[
            { icon: '📏', label: 'Indexing & Slicing', desc: 'Accessing characters, negative indexing, slice notation' },
            { icon: '🔧', label: 'String Methods', desc: '.upper(), .lower(), .find(), .count(), .replace() and more' },
            { icon: '🔢', label: 'ASCII & Character Checks', desc: 'ord(), chr(), .isupper(), .isdigit(), .isalpha()' },
            { icon: '🔁', label: 'Character Processing', desc: 'Looping through strings — the key exam pattern' },
            { icon: '❓', label: 'Exam FAQ', desc: 'Most common mistakes and tricky questions answered' },
            { icon: '✍️', label: 'Practice', desc: 'Vowel counter, reverse string, palindrome, Caesar cipher' },
            { icon: '🧠', label: 'Quiz', desc: '12 questions to test everything' },
            { icon: '📋', label: 'Cheatsheet', desc: 'All string operations on one page' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-lg">{item.icon}</span>
              <div>
                <span className="font-semibold text-gray-900">{item.label}</span>
                <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
