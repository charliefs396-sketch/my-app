import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

interface Exercise {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Bonus';
  description: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Count vowels, consonants, digits, and spaces",
    difficulty: "Easy",
    description: "Ask the user to input a string. Count and output how many vowels (a,e,i,o,u), consonants, digits (0-9), and spaces it contains. Treat uppercase and lowercase as the same.",
    hints: [
      "Loop through every character using: for char in text",
      "Use char.lower() to handle both cases, then check if char is in 'aeiou'",
      "Use char.isdigit() to check for digits, char.isspace() for spaces",
      "A consonant is an alphabetic character that is NOT a vowel: char.isalpha() and char.lower() not in 'aeiou'",
      "Initialise all four counters to 0 BEFORE the loop",
    ],
    solution: `text = input("Enter a string: ")

vowels = 0
consonants = 0
digits = 0
spaces = 0

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

print(f"Vowels:     {vowels}")
print(f"Consonants: {consonants}")
print(f"Digits:     {digits}")
print(f"Spaces:     {spaces}")

# Test with "Hello World 123"
# Vowels: 3 (e,o,o), Consonants: 7, Digits: 3, Spaces: 2`,
    explanation: "Key insight: check in ORDER — space first, then digit, then alpha. If you check alpha first, spaces and digits might get counted as 'other'. The elif chain means only ONE branch runs per character."
  },
  {
    id: 2,
    title: "Reverse a string WITHOUT using [::-1]",
    difficulty: "Medium",
    description: "Input a string from the user and output it reversed. You CANNOT use text[::-1] or .reverse(). You must build the reversed string character by character using a loop.",
    hints: [
      "You need to build a new string. Start with reversed_text = ''",
      "To add characters to the FRONT: reversed_text = char + reversed_text",
      "OR loop backwards: for i in range(len(text)-1, -1, -1)",
      "range(len(text)-1, -1, -1) counts from the last index DOWN to 0",
      "For 'Hello' (length 5): indices go 4, 3, 2, 1, 0 → gives d,l,r,o,W",
    ],
    solution: `text = input("Enter a string: ")

# Method 1: prepend each character (simplest to understand)
reversed_text = ""
for char in text:
    reversed_text = char + reversed_text  # add to FRONT each time

print(f"Reversed: {reversed_text}")

# Method 2: loop backwards with index (more explicit)
reversed_text2 = ""
for i in range(len(text) - 1, -1, -1):
    reversed_text2 += text[i]

print(f"Reversed: {reversed_text2}")

# Trace for "Hello":
# i=4: reversed_text = "" + "o" = "o"
# i=3: reversed_text = "o" + "l" = "ol"
# i=2: reversed_text = "ol" + "l" = "oll"
# i=1: reversed_text = "oll" + "e" = "olle"
# i=0: reversed_text = "olle" + "H" = "olleH"`,
    explanation: "Method 1 (prepend) is elegant: each new character goes to the FRONT, pushing old characters back. Method 2 (backwards loop) is more intuitive: we literally read characters from right to left. Exams usually accept either."
  },
  {
    id: 3,
    title: "Check if a string is a palindrome",
    difficulty: "Medium",
    description: "Input a string and check if it reads the same forwards and backwards. Ignore case and spaces. For example: 'Race car', 'racecar', 'A man a plan a canal Panama' are all palindromes.",
    hints: [
      "First normalise: convert to lowercase using .lower()",
      "Remove all spaces using .replace(' ', '')",
      "Then reverse the cleaned string (build manually — no [::-1] for full marks)",
      "Compare the cleaned string with the reversed string",
      "If they match → palindrome! If not → not a palindrome",
    ],
    solution: `text = input("Enter a string: ")

# Step 1: normalise (lowercase + remove spaces)
cleaned = text.lower().replace(" ", "")

# Step 2: reverse manually
reversed_text = ""
for i in range(len(cleaned) - 1, -1, -1):
    reversed_text += cleaned[i]

# Step 3: compare
if cleaned == reversed_text:
    print(f'"{text}" IS a palindrome')
else:
    print(f'"{text}" is NOT a palindrome')

# Test cases:
# "racecar"   → cleaned="racecar" → reversed="racecar" → palindrome ✅
# "Race car"  → cleaned="racecar" → reversed="racecar" → palindrome ✅
# "hello"     → cleaned="hello"   → reversed="olleh"   → not palindrome ✅
# "Was it a car or a cat I saw" → palindrome ✅`,
    explanation: "The normalisation step is CRITICAL. Without it, 'Race car' would fail because uppercase R ≠ lowercase r, and the space makes the lengths different. Always clean before comparing!"
  },
  {
    id: 4,
    title: "Caesar cipher encryption",
    difficulty: "Hard",
    description: "Write a Caesar cipher program. Ask for a message and a shift number. Encrypt the message by shifting each letter by the shift amount. Keep spaces and non-letters unchanged. Handle both uppercase and lowercase. Use the formula with % 26 to wrap around.",
    hints: [
      "Process each character in a loop. Only shift letters — leave spaces and punctuation unchanged",
      "Check char.isupper() and char.islower() separately — they need different formulas",
      "For uppercase: chr((ord(char) - ord('A') + shift) % 26 + ord('A'))",
      "For lowercase: chr((ord(char) - ord('a') + shift) % 26 + ord('a'))",
      "% 26 is ESSENTIAL — without it, Z would become [ instead of A",
    ],
    solution: `def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            new_char = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            result += new_char
        elif char.islower():
            new_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            result += new_char
        else:
            result += char  # spaces, digits, punctuation unchanged
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)  # reverse the shift!

message = input("Enter message: ")
shift = int(input("Enter shift (1-25): "))

encrypted = caesar_encrypt(message, shift)
decrypted = caesar_decrypt(encrypted, shift)

print(f"Original:  {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")

# Example with shift=3:
# H → (72-65+3)%26+65 = 10+65 = 75 → K
# e → (101-97+3)%26+97 = 7+97 = 104 → h
# Z → (90-65+3)%26+65 = 28%26+65 = 2+65 = 67 → C (wraps!)`,
    explanation: "The % 26 is the key insight. When shift takes a letter past Z (ASCII 90), % 26 wraps it back into the A-Z range. Decryption is just encryption with -shift, which is the beauty of the Caesar cipher!"
  },
];

export default function Py5Practice() {
  const [revealed, setRevealed] = useState<Record<number, number>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const revealHint = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, exercises.find(e => e.id === id)!.hints.length) }));
  };

  const difficultyColor: Record<string, string> = {
    Easy: 'bg-green-100 text-green-700 border-green-200',
    Medium: 'bg-amber-100 text-amber-700 border-amber-200',
    Hard: 'bg-red-100 text-red-700 border-red-200',
    Bonus: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-500 mb-8">4 exercises covering all Python string manipulation patterns</p>

      <div className="space-y-8">
        {exercises.map((ex) => {
          const hintsShown = revealed[ex.id] || 0;
          const isSolutionShown = showSolution[ex.id] || false;

          return (
            <div key={ex.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">{ex.id}</span>
                  <h3 className="font-bold text-gray-900 text-lg flex-1">{ex.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${difficultyColor[ex.difficulty]}`}>{ex.difficulty}</span>
                </div>
                <p className="text-gray-600 text-sm ml-12">{ex.description}</p>
              </div>

              <div className="p-6">
                {/* Hints */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-700 text-sm">💡 Hints ({hintsShown}/{ex.hints.length})</h4>
                    {hintsShown < ex.hints.length && (
                      <button onClick={() => revealHint(ex.id)} className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-lg font-semibold transition-colors">
                        Reveal Next Hint
                      </button>
                    )}
                  </div>
                  {hintsShown === 0 && (
                    <p className="text-xs text-gray-400 italic">Try it yourself first! Click "Reveal Next Hint" when stuck.</p>
                  )}
                  <div className="space-y-2">
                    {ex.hints.slice(0, hintsShown).map((hint, i) => (
                      <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg p-3 text-sm text-amber-800">
                        <span className="font-bold flex-shrink-0">Hint {i+1}:</span>
                        <span>{hint}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution toggle */}
                <div>
                  <button
                    onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !isSolutionShown }))}
                    className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${isSolutionShown ? 'bg-gray-100 text-gray-600' : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-md'}`}
                  >
                    {isSolutionShown ? '🙈 Hide Solution' : '👁️ Show Full Solution'}
                  </button>

                  {isSolutionShown && (
                    <div className="mt-4">
                      <CodeBlock language="python" code={ex.solution} />
                      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <h5 className="font-bold text-blue-800 mb-1">📖 Explanation</h5>
                        <p className="text-sm text-blue-700">{ex.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus challenge */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
        <h3 className="font-bold text-purple-800 text-lg mb-2">🌟 Bonus Challenge: Word Frequency Counter</h3>
        <p className="text-gray-600 text-sm mb-4">Input a sentence. Count how many times each word appears and output words that appear more than once. Use split() to get individual words, and a list/dictionary to count.</p>
        <CodeBlock language="python" code={`sentence = input("Enter a sentence: ").lower()
words = sentence.split()

# Count each word
for word in set(words):
    count = words.count(word)
    if count > 1:
        print(f"'{word}' appears {count} times")

# Test: "the cat sat on the mat the cat"
# 'the' appears 3 times, 'cat' appears 2 times`} />
      </div>
    </div>
  );
}
