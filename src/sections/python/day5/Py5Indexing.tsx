import CodeBlock from '../../../components/CodeBlock';

export default function Py5Indexing() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">📏 Indexing & Slicing</h2>
      <p className="text-gray-500 mb-8">How Python lets you access any part of a string</p>

      {/* What is a string internally */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔍 What is a String?</h3>
        <p className="text-gray-600 mb-4">A string is a <strong>sequence of characters</strong>. Python gives every character a position number called an <strong>index</strong>. Crucially: <span className="text-red-600 font-bold">Python starts counting from 0, not 1!</span></p>

        {/* Visual index diagram */}
        <div className="bg-gray-900 rounded-xl p-6 mb-4 overflow-x-auto">
          <p className="text-gray-400 text-xs mb-3 font-mono">text = "Hello World"</p>
          <div className="flex gap-0 mb-1 min-w-max">
            {['H','e','l','l','o',' ','W','o','r','l','d'].map((ch, i) => (
              <div key={i} className="w-10 h-10 border border-cyan-500 flex items-center justify-center text-white font-mono font-bold text-sm bg-slate-800">
                {ch === ' ' ? '␣' : ch}
              </div>
            ))}
          </div>
          <div className="flex gap-0 mb-1 min-w-max">
            {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="w-10 h-5 flex items-center justify-center text-emerald-400 font-mono text-xs">
                {i}
              </div>
            ))}
          </div>
          <div className="flex gap-0 min-w-max">
            {[-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1].map(i => (
              <div key={i} className="w-10 h-5 flex items-center justify-center text-amber-400 font-mono text-xs">
                {i}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <span className="text-emerald-400 text-xs font-mono">↑ positive index (0 to 10)</span>
            <span className="text-amber-400 text-xs font-mono">↑ negative index (-11 to -1)</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">The string <code className="bg-gray-100 px-1 rounded">"Hello World"</code> has <strong>11 characters</strong>. Indices go from <strong>0 to 10</strong> (positive) or <strong>-11 to -1</strong> (negative).</p>
      </div>

      {/* Basic indexing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">1️⃣ Basic Indexing — Access ONE character</h3>
        <CodeBlock language="python" code={`text = "Hello World"

# Positive indexing (from the left, starts at 0)
print(text[0])     # H  — first character
print(text[1])     # e
print(text[4])     # o
print(text[6])     # W  — first char of "World"
print(text[10])    # d  — last character

# Negative indexing (from the right, starts at -1)
print(text[-1])    # d  — last character
print(text[-5])    # W  — same as text[6]
print(text[-11])   # H  — same as text[0]

# ⚠️ IndexError if you go out of range
# print(text[11])  # ERROR! Only goes to 10`} />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <h4 className="font-bold text-emerald-800 mb-2">✅ Positive Index Rule</h4>
            <p className="text-sm text-emerald-700">Count from the <strong>left</strong>. First character = index <strong>0</strong>. Last character = index <strong>len(text) - 1</strong>.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h4 className="font-bold text-amber-800 mb-2">✅ Negative Index Rule</h4>
            <p className="text-sm text-amber-700">Count from the <strong>right</strong>. Last character = index <strong>-1</strong>. First character = index <strong>-len(text)</strong>.</p>
          </div>
        </div>
      </div>

      {/* Slicing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">2️⃣ Slicing — Extract a PORTION</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="font-mono text-blue-800 font-bold text-center text-lg">text[start : stop : step]</p>
          <div className="grid md:grid-cols-3 gap-3 mt-3">
            <div className="text-center">
              <p className="font-bold text-blue-700">start</p>
              <p className="text-sm text-blue-600">Where to begin (INCLUDED). Default = 0</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-red-700">stop</p>
              <p className="text-sm text-red-600">Where to end (NOT INCLUDED!). Default = end</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-purple-700">step</p>
              <p className="text-sm text-purple-600">How many to skip. Default = 1</p>
            </div>
          </div>
        </div>
        <CodeBlock language="python" code={`text = "Hello World"
#      0123456789...

# Basic slices
print(text[0:5])    # Hello   (index 0,1,2,3,4 — NOT 5)
print(text[6:11])   # World   (index 6,7,8,9,10)
print(text[6:])     # World   (from 6 to end)
print(text[:5])     # Hello   (from start to 4)
print(text[:])      # Hello World (everything)

# Negative slicing
print(text[-5:])    # World   (last 5 characters)
print(text[:-6])    # Hello   (all except last 6)

# With step
print(text[::2])    # HloWrd  (every 2nd character)
print(text[::-1])   # dlroW olleH (REVERSED!)

# Practical examples
filename = "report.txt"
print(filename[:-4])   # report  (remove .txt extension)
print(filename[-3:])   # txt     (get extension without dot)`} />
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
          <h4 className="font-bold text-red-800 mb-1">⚠️ Stop is NOT Included!</h4>
          <p className="text-sm text-red-700">text[0:5] gives characters at index 0,1,2,3,4 — <strong>NOT 5</strong>. Think of it as "up to but not including stop".</p>
        </div>
      </div>

      {/* Converting pseudocode to Python */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔄 Converting Pseudocode to Python</h3>
        <p className="text-gray-600 mb-4">The tricky part: pseudocode is 1-indexed, Python is 0-indexed. Here's the conversion formula:</p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <p className="font-mono text-indigo-800 text-center font-bold">MID(text, start, length) → text[start-1 : start-1+length]</p>
        </div>
        <CodeBlock language="python" code={`text = "Hello World"

# MID(text, 1, 5) → "Hello"
print(text[0:5])      # start=1-1=0, end=0+5=5

# MID(text, 7, 5) → "World"
print(text[6:11])     # start=7-1=6, end=6+5=11

# LEFT(text, 5) → "Hello"
print(text[:5])       # Always starts at 0

# RIGHT(text, 5) → "World"
print(text[-5:])      # Use negative index

# Getting one character: MID(text, 3, 1) → "l"
print(text[2])        # 3-1 = 2`} />
      </div>

      {/* Common mistakes */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">❌ Common Mistakes</h3>
        <div className="space-y-3">
          {[
            { wrong: 'text[1]  # thinking it gives "H"', right: 'text[0]  # "H" is at index 0', note: 'Python is 0-indexed!' },
            { wrong: 'text[0:5]  # thinking it gives "Hello W"', right: 'text[0:6]  # stop is NOT included', note: 'Stop index is excluded' },
            { wrong: 'text[11]  # IndexError!', right: 'text[10]  # or text[-1]', note: 'Last index is len-1' },
            { wrong: 'text[0:5:0]  # ValueError! step cannot be 0', right: 'text[0:5:2]  # step must be non-zero', note: 'Step can never be 0' },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs font-bold text-red-500 mb-1">❌ WRONG</p>
                <code className="text-red-700 text-sm font-mono">{item.wrong}</code>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs font-bold text-green-500 mb-1">✅ CORRECT — {item.note}</p>
                <code className="text-green-700 text-sm font-mono">{item.right}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key points */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-3">💡 Key Points to Remember</h3>
        <ul className="space-y-2">
          {[
            'Python strings are 0-indexed. First character = index 0.',
            'text[-1] always gives the LAST character — very useful!',
            'Slicing: text[start:stop] — stop is NOT included.',
            'text[::-1] reverses a string — a classic exam trick question.',
            'Strings are IMMUTABLE — you cannot change text[0] = "X". You must create a new string.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-emerald-700">
              <span className="w-5 h-5 bg-emerald-200 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i+1}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
