import CodeBlock from '../../../components/CodeBlock';

export default function Py5AsciiChar() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🔢 ASCII & Character Processing</h2>
      <p className="text-gray-500 mb-8">ord(), chr(), and looping through strings — the key patterns for Caesar cipher and more</p>

      {/* ASCII explanation */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">📡 What is ASCII?</h3>
        <p className="text-gray-600 mb-4">Every character has a number. ASCII (American Standard Code for Information Interchange) maps characters to numbers. Python uses <code className="bg-gray-100 px-1 rounded">ord()</code> and <code className="bg-gray-100 px-1 rounded">chr()</code> to convert between them.</p>

        {/* ASCII table */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Uppercase A-Z', range: '65 – 90', note: 'A=65, B=66, Z=90', color: 'bg-blue-50 border-blue-200' },
            { label: 'Lowercase a-z', range: '97 – 122', note: 'a=97, b=98, z=122', color: 'bg-emerald-50 border-emerald-200' },
            { label: 'Digits 0-9', range: '48 – 57', note: '0=48, 1=49, 9=57', color: 'bg-amber-50 border-amber-200' },
          ].map(item => (
            <div key={item.label} className={`border rounded-xl p-4 ${item.color}`}>
              <p className="font-bold text-gray-800">{item.label}</p>
              <p className="text-2xl font-black text-gray-900 my-1">{item.range}</p>
              <p className="text-xs text-gray-600">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-indigo-800 mb-2">🔑 Key Facts to Memorise</h4>
          <ul className="text-sm text-indigo-700 space-y-1">
            <li>• <strong>ord('A') = 65</strong>, ord('a') = 97, ord('0') = 48</li>
            <li>• Difference between upper and lower = <strong>32</strong> (always!)</li>
            <li>• 'A' to 'Z' are sequential: ord('C') = 65 + 2 = <strong>67</strong></li>
            <li>• 'a' to 'z' are sequential: ord('c') = 97 + 2 = <strong>99</strong></li>
          </ul>
        </div>

        <CodeBlock language="python" code={`# ord() — character to ASCII number
print(ord('A'))    # 65
print(ord('B'))    # 66
print(ord('Z'))    # 90
print(ord('a'))    # 97
print(ord('z'))    # 122
print(ord('0'))    # 48
print(ord(' '))    # 32 (space!)

# chr() — ASCII number to character
print(chr(65))     # A
print(chr(66))     # B
print(chr(97))     # a
print(chr(48))     # 0

# Pattern: get letter at position N in alphabet
# 'A' is letter 1, 'B' is letter 2, etc.
n = 3
letter = chr(ord('A') + n - 1)   # C (3rd letter)
print(letter)

# Pattern: find position of a letter in alphabet
char = 'E'
position = ord(char) - ord('A') + 1   # 5
print(position)`} />
      </div>

      {/* Character by character processing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔁 Character-by-Character Processing</h3>
        <p className="text-gray-600 mb-4">The most common exam pattern: loop through every character and do something with it.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-bold text-gray-600 mb-2">Method 1: for char in text</p>
            <CodeBlock language="python" code={`text = "Hello World"

# Direct iteration — simplest!
for char in text:
    print(char, end=" ")
# Output: H e l l o   W o r l d`} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 mb-2">Method 2: for i in range(len(text))</p>
            <CodeBlock language="python" code={`text = "Hello World"

# Index-based — when you need position
for i in range(len(text)):
    print(f"[{i}]: {text[i]}")`} />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-amber-800 mb-2">📌 When to use which?</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Use <code className="bg-amber-100 px-1 rounded">for char in text</code> when you just need the character value</li>
            <li>• Use <code className="bg-amber-100 px-1 rounded">for i in range(len(text))</code> when you need the position number too</li>
          </ul>
        </div>

        {/* Count vowels full example */}
        <h4 className="font-bold text-gray-900 mb-3">📊 Full Example: Count Character Types</h4>
        <CodeBlock language="python" code={`text = input("Enter text: ")

vowels = 0
consonants = 0
digits = 0
spaces = 0
other = 0

for char in text:
    if char.isspace():
        spaces += 1
    elif char.isdigit():
        digits += 1
    elif char.isalpha():
        if char.lower() in "aeiou":
            vowels += 1
        else:
            consonants += 1
    else:
        other += 1

print(f"Vowels: {vowels}")
print(f"Consonants: {consonants}")
print(f"Digits: {digits}")
print(f"Spaces: {spaces}")
print(f"Other: {other}")`} />
      </div>

      {/* Caesar cipher */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">🔐 Caesar Cipher — Classic Exam Question</h3>
        <p className="text-gray-600 mb-4">Shift each letter by N positions. Uses <code className="bg-gray-100 px-1 rounded">ord()</code> and <code className="bg-gray-100 px-1 rounded">chr()</code> — wraps around using <code className="bg-gray-100 px-1 rounded">% 26</code>.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-blue-800 mb-2">🔑 The Formula:</h4>
          <p className="font-mono text-blue-700 text-center text-lg">new_char = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))</p>
          <div className="grid grid-cols-5 gap-2 mt-3 text-center text-xs">
            {[
              ['ord(char) - ord("A")', 'Convert to 0-25 range'],
              ['+ shift', 'Apply the shift'],
              ['% 26', 'Wrap around (Z→A)'],
              ['+ ord("A")', 'Convert back to ASCII'],
              ['chr(...)', 'Convert to character'],
            ].map(([step, desc]) => (
              <div key={step} className="bg-blue-100 rounded-lg p-2">
                <p className="font-mono font-bold text-blue-800">{step}</p>
                <p className="text-blue-600 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CodeBlock language="python" code={`def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            # Shift uppercase letters
            new_char = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            result += new_char
        elif char.islower():
            # Shift lowercase letters
            new_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            result += new_char
        else:
            # Keep spaces, digits, punctuation unchanged
            result += char
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)  # Just shift backwards!

# Test it
message = "Hello World"
shift = 3
encrypted = caesar_encrypt(message, shift)
decrypted = caesar_decrypt(encrypted, shift)

print(f"Original:  {message}")     # Hello World
print(f"Encrypted: {encrypted}")   # Khoor Zruog
print(f"Decrypted: {decrypted}")   # Hello World

# Trace for shift=3:
# H (72) → (72-65+3) % 26 + 65 = 10 + 65 = 75 → K
# e (101)→ (101-97+3) % 26 + 97 = 7 + 97 = 104 → h`} />
      </div>

      {/* Reverse string */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">↩️ Reverse a String (Without [::-1])</h3>
        <p className="text-gray-600 mb-4">Exams often ask you to reverse WITHOUT using the slice trick. You must build it manually:</p>
        <CodeBlock language="python" code={`text = input("Enter text: ")
reversed_text = ""

# Method 1: loop backwards
for i in range(len(text) - 1, -1, -1):
    reversed_text += text[i]

print(f"Reversed: {reversed_text}")

# Method 2: prepend each character
reversed_text2 = ""
for char in text:
    reversed_text2 = char + reversed_text2  # add to FRONT

print(f"Reversed: {reversed_text2}")

# Check palindrome
def is_palindrome(text):
    text = text.lower().replace(" ", "")  # normalise
    reversed_text = ""
    for i in range(len(text) - 1, -1, -1):
        reversed_text += text[i]
    return text == reversed_text

print(is_palindrome("racecar"))    # True
print(is_palindrome("hello"))      # False
print(is_palindrome("A man a plan a canal Panama"))  # True (after normalise)`} />
      </div>

      {/* Key points */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-3">💡 Key Points to Remember</h3>
        <ul className="space-y-2 text-sm text-emerald-700">
          {[
            "ord('A') = 65, ord('a') = 97, ord('0') = 48 — memorise these!",
            "Caesar cipher formula: (ord(char) - ord('A') + shift) % 26 + ord('A')",
            "% 26 is what makes Z wrap back to A — always include it!",
            "for char in text is cleaner; for i in range(len(text)) gives you the index too.",
            "To reverse without [::-1]: loop from len-1 down to 0 using range(len-1, -1, -1).",
          ].map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 bg-emerald-200 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
