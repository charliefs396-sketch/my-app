
import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py8Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  const exercises = [
    {
      id: 'ex1',
      title: 'get_valid_int() Function',
      difficulty: 'Medium',
      color: 'amber',
      description: 'Write a function get_valid_int(prompt, min_val, max_val) that keeps asking the user for input until they enter a valid integer within the given range. Return the valid integer.',
      hints: [
        'Use a while True loop inside the function',
        'Use try/except to handle non-integer input',
        'Check if the value is within min_val and max_val',
        'Only return when the input is valid',
      ],
      solution: `def get_valid_int(prompt, min_val, max_val):
    while True:
        try:
            value = int(input(prompt))
            if min_val <= value <= max_val:
                return value
            else:
                print(f"Please enter a number between {min_val} and {max_val}")
        except ValueError:
            print("Invalid input! Please enter a whole number.")

# Usage
mark = get_valid_int("Enter mark (0-100): ", 0, 100)
age = get_valid_int("Enter age (1-120): ", 1, 120)
choice = get_valid_int("Enter choice (1-4): ", 1, 4)

print(f"Valid mark: {mark}")`,
      explanation: 'while True creates an infinite loop. try/except catches non-integer input. return exits the loop when valid. This is a VERY common exam pattern!'
    },
    {
      id: 'ex2',
      title: 'find_max() Without Built-ins',
      difficulty: 'Easy',
      color: 'green',
      description: 'Write a function find_max(numbers) that finds and returns the maximum value in a list WITHOUT using Python\'s built-in max() function.',
      hints: [
        'Start by assuming the first element is the maximum',
        'Loop through all remaining elements',
        'If you find something bigger, update your maximum',
        'Return the maximum after checking everything',
      ],
      solution: `def find_max(numbers):
    if len(numbers) == 0:
        return None    # Handle empty list!
    
    maximum = numbers[0]    # Assume first is max
    
    for i in range(1, len(numbers)):    # Start from index 1
        if numbers[i] > maximum:
            maximum = numbers[i]
    
    return maximum

# Test it
marks = [72, 85, 63, 91, 78, 55]
print(f"Maximum: {find_max(marks)}")    # 91

# Bonus - find_min too
def find_min(numbers):
    if len(numbers) == 0:
        return None
    minimum = numbers[0]
    for num in numbers:
        if num < minimum:
            minimum = num
    return minimum

print(f"Minimum: {find_min(marks)}")    # 55`,
      explanation: 'This is the standard max-finding algorithm — same as pseudocode Day 6! Start with first element as max, update when you find something bigger.'
    },
    {
      id: 'ex3',
      title: 'count_char() Function',
      difficulty: 'Easy',
      color: 'blue',
      description: 'Write a function count_char(text, target) that counts how many times a specific character appears in a string. Do NOT use the built-in count() method.',
      hints: [
        'Use a counter variable starting at 0',
        'Loop through each character in text',
        'Compare each character with target',
        'Increment counter when they match',
      ],
      solution: `def count_char(text, target):
    count = 0
    for char in text:
        if char == target:
            count += 1
    return count

# Test it
print(count_char("Hello World", "l"))     # 3
print(count_char("Mississippi", "s"))     # 4
print(count_char("Python", "z"))          # 0

# Bonus - case insensitive version
def count_char_insensitive(text, target):
    count = 0
    for char in text.lower():
        if char == target.lower():
            count += 1
    return count

print(count_char_insensitive("Hello", "h"))  # 1`,
      explanation: 'Simple counter pattern — same as pseudocode! Loop through string, compare each char, count matches.'
    },
    {
      id: 'ex4',
      title: 'Menu-Driven Program',
      difficulty: 'Hard',
      color: 'purple',
      description: 'Write a complete menu-driven student mark system using separate functions for each option: add_mark(), display_marks(), find_average(), find_highest().',
      hints: [
        'Create a marks list in the main program, pass it to each function',
        'add_mark() should append to the list',
        'display_marks() loops through and prints each mark',
        'find_average() and find_highest() return values',
        'Use a while loop with a menu for the main program',
      ],
      solution: `def display_menu():
    print("\\n===== Student Marks System =====")
    print("1. Add mark")
    print("2. Display all marks")
    print("3. Find average")
    print("4. Find highest mark")
    print("5. Quit")

def add_mark(marks):
    mark = get_valid_int("Enter mark (0-100): ", 0, 100)
    marks.append(mark)
    print(f"Mark {mark} added!")

def display_marks(marks):
    if len(marks) == 0:
        print("No marks entered yet.")
    else:
        print("\\nAll marks:")
        for i, mark in enumerate(marks, 1):
            print(f"  {i}. {mark}")

def find_average(marks):
    if len(marks) == 0:
        return 0
    return sum(marks) / len(marks)

def find_highest(marks):
    if len(marks) == 0:
        return None
    highest = marks[0]
    for mark in marks:
        if mark > highest:
            highest = mark
    return highest

def get_valid_int(prompt, min_val, max_val):
    while True:
        try:
            value = int(input(prompt))
            if min_val <= value <= max_val:
                return value
            else:
                print(f"Enter between {min_val} and {max_val}")
        except ValueError:
            print("Invalid! Enter a whole number.")

# Main program
marks = []
while True:
    display_menu()
    choice = get_valid_int("Enter choice (1-5): ", 1, 5)
    
    if choice == 1:
        add_mark(marks)
    elif choice == 2:
        display_marks(marks)
    elif choice == 3:
        avg = find_average(marks)
        print(f"Average: {avg:.1f}")
    elif choice == 4:
        high = find_highest(marks)
        print(f"Highest: {high}")
    elif choice == 5:
        print("Goodbye!")
        break`,
      explanation: 'This is the complete A Level style program — each operation is a separate function, marks list is passed around, get_valid_int handles all input validation!'
    },
  ];

  const colorMap: Record<string, string> = {
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ✍️ Practice – Functions & Procedures
      </h1>
      <p className="text-gray-500 text-lg mb-8">4 exercises — from validation functions to full menu systems</p>
      <div className="space-y-8">
        {exercises.map((ex, idx) => (
          <div key={ex.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                  <h3 className="text-xl font-bold text-gray-900">{ex.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorMap[ex.color]}`}>{ex.difficulty}</span>
              </div>
              <p className="text-gray-600 mb-4">{ex.description}</p>
              <div className="space-y-2 mb-4">
                {ex.hints.map((hint, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold text-sm mt-0.5">💡</span>
                    <p className="text-gray-600 text-sm">{hint}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => toggle(ex.id)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
              >
                {revealed[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>
            </div>
            {revealed[ex.id] && (
              <div className="border-t border-gray-100">
                <div className="p-6">
                  <CodeBlock language="python" code={ex.solution} />
                  <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-emerald-800 text-sm"><strong>💡 Why this works:</strong> {ex.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
