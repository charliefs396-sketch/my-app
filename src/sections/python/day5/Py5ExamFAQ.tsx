import CodeBlock from '../../../components/CodeBlock';

export default function Py5ExamFAQ() {
  const faqs = [
    {
      q: "Python is 0-indexed but pseudocode is 1-indexed — how do I convert MID(text, 3, 2) to Python?",
      a: "Use the formula: text[start-1 : start-1+length]. So MID(text, 3, 2) → text[2:4]. The start position loses 1 (3→2), and the stop is start-1+length (2+2=4).",
      code: `text = "Hello"
# MID(text, 3, 2) in pseudocode → "ll"
print(text[2:4])   # ll  (start=3-1=2, stop=2+2=4)

# MID(text, 1, 3) → "Hel"
print(text[0:3])   # Hel

# LEFT(text, 3) → "Hel"
print(text[:3])    # Hel

# RIGHT(text, 3) → "llo"
print(text[-3:])   # llo`,
      tag: 'INDEXING'
    },
    {
      q: "What's the difference between find() returning -1 and count() returning 0?",
      a: "find() returns the INDEX of the first occurrence (or -1 if not found). count() returns HOW MANY times it appears (or 0 if not found). They're different tools for different jobs.",
      code: `text = "Hello World"

# find() — WHERE is it?
print(text.find("World"))   # 6  (index 6)
print(text.find("xyz"))     # -1 (not found)

# count() — HOW MANY times?
print(text.count("l"))      # 3
print(text.count("xyz"))    # 0  (not -1!)

# Use find() to check existence
if text.find("World") != -1:
    print("Found!")

# OR better — use 'in'
if "World" in text:
    print("Found!")`,
      tag: 'METHODS'
    },
    {
      q: "Can I change a character in a string, like text[0] = 'h'?",
      a: "NO! Strings are IMMUTABLE in Python. You cannot change individual characters. You must create a NEW string. This is a very common exam question!",
      code: `text = "Hello"

# ❌ This gives TypeError!
# text[0] = 'h'

# ✅ Must create a new string
text = 'h' + text[1:]   # "hello"

# ✅ Or use replace()
text = "Hello"
text = text.replace('H', 'h')   # "hello"

# ✅ Or build character by character
new_text = ""
for i, char in enumerate(text):
    if i == 0:
        new_text += 'h'
    else:
        new_text += char`,
      tag: 'IMMUTABLE'
    },
    {
      q: "What does text[::-1] actually do and why does it reverse the string?",
      a: "text[::-1] uses slice notation with step=-1. It starts from the end (no stop), goes to the beginning (no start), and moves -1 at a time (backwards). Result: every character in reverse order.",
      code: `text = "Hello"

# Full slice: text[start:stop:step]
# text[::-1] means start=end, stop=beginning, step=-1

print(text[::-1])    # olleH (reversed)
print(text[::2])     # Hlo   (every 2nd)
print(text[1::2])    # el    (every 2nd, from index 1)

# Manual reversal (what exams want you to write)
reversed_text = ""
for i in range(len(text) - 1, -1, -1):
    reversed_text += text[i]
print(reversed_text)  # olleH`,
      tag: 'SLICING'
    },
    {
      q: "How does the Caesar cipher % 26 work? Why do we need it?",
      a: "% 26 creates a 'wrap-around' effect. Without it, shifting Z by 1 gives [ (ASCII 91) instead of A. The % 26 keeps the value in range 0-25, so Z wraps back to A.",
      code: `# Without % 26 — BROKEN
char = 'Z'  # ASCII 90
shift = 3
# 90 - 65 + 3 = 28  →  28 + 65 = 93  →  chr(93) = ']'  WRONG!

# With % 26 — CORRECT
char = 'Z'
shift = 3
result = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
# 90 - 65 + 3 = 28  →  28 % 26 = 2  →  2 + 65 = 67  →  chr(67) = 'C'
print(result)   # C  ✅

# More examples:
# Y + 3: (89-65+3) % 26 = 27 % 26 = 1 → chr(66) = B ✅
# A - 1: (65-65-1) % 26 = -1 % 26 = 25 → chr(90) = Z ✅`,
      tag: 'CAESAR'
    },
    {
      q: "What's the difference between char.isalpha() and char in 'abcdefghijklmnopqrstuvwxyz'?",
      a: "isalpha() returns True for ANY alphabetic character including accented letters (é, ü). The 'in' string approach only checks standard English letters. For A Level, isalpha() is preferred and cleaner.",
      code: `# isalpha() — checks if alphabetic
print('a'.isalpha())    # True
print('A'.isalpha())    # True
print('3'.isalpha())    # False
print(' '.isalpha())    # False

# Checking vowels — two approaches
char = 'e'

# Method 1: check in vowel string
if char.lower() in "aeiou":
    print("vowel")

# Method 2: explicit comparison
if char.lower() in ['a', 'e', 'i', 'o', 'u']:
    print("vowel")

# In exams, Method 1 is cleaner and preferred`,
      tag: 'CHAR CHECKS'
    },
    {
      q: "My palindrome check doesn't work for 'Race car'. Why?",
      a: "Case sensitivity and spaces! 'Race car' reversed is 'rac ecaR' which doesn't match. Always normalise: convert to lowercase AND remove spaces before comparing.",
      code: `def is_palindrome(text):
    # Step 1: normalise — lowercase + remove spaces
    cleaned = text.lower().replace(" ", "")
    
    # Step 2: reverse
    reversed_text = cleaned[::-1]
    
    # Step 3: compare
    return cleaned == reversed_text

print(is_palindrome("racecar"))         # True
print(is_palindrome("Race car"))        # True  (after normalise)
print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("hello"))           # False

# Without normalising — WRONG:
# "Race car" → cleaned="racecar" ✅ → reversed="racecar" ✅ → True`,
      tag: 'PALINDROME'
    },
    {
      q: "When should I use enumerate() vs range(len(text))?",
      a: "Both give you index + character, but enumerate() is cleaner Python style. However, for A Level exams, range(len(text)) is more explicit and safer to use since examiners expect standard patterns.",
      code: `text = "Hello"

# Method 1: range(len()) — exam safe, explicit
for i in range(len(text)):
    print(f"Index {i}: {text[i]}")

# Method 2: enumerate() — cleaner Python
for i, char in enumerate(text):
    print(f"Index {i}: {char}")

# Both give same output:
# Index 0: H
# Index 1: e
# Index 2: l
# Index 3: l
# Index 4: o

# For A Level exams — use range(len(text))
# It's more explicit and examiners understand it clearly`,
      tag: 'LOOPS'
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">❓ Exam FAQ — Strings</h2>
      <p className="text-gray-500 mb-8">The 8 most common questions and mistakes in Python string questions</p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">Q{i+1}</span>
                <div className="flex-1">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full mr-2">{faq.tag}</span>
                  <p className="font-semibold text-gray-900 mt-1">{faq.q}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-start gap-3 mb-4">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
                <p className="text-gray-700">{faq.a}</p>
              </div>
              <CodeBlock language="python" code={faq.code} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-4">🎯 Key Points Summary</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Python is 0-indexed — first character is text[0] NOT text[1]',
            'Strings are IMMUTABLE — cannot change individual characters',
            'find() returns -1 if not found; count() returns 0 if not found',
            'Always .lower() before comparing — handles any case input',
            'Caesar cipher must use % 26 to wrap Z back to A',
            'Palindrome check: normalise (lowercase + remove spaces) first',
            'text[::-1] reverses; but write manual loop in exams',
            'for char in text is simpler; for i in range(len(text)) gives index',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-emerald-700">
              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
