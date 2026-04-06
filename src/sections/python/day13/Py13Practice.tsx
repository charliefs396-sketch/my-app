import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const exercises = [
  {
    title: 'Reverse a String Using Stack',
    difficulty: 'Easy',
    desc: 'Write a function reverse_string(text) that uses a stack (array-based, no Python list methods) to reverse a string.',
    hints: [
      'Push each character of the string onto the stack one by one',
      'Then pop each character and add to result string',
      'The result will be the reverse because of LIFO',
    ],
    solution: `MAXSIZE = 100
stack = [None] * MAXSIZE
top = -1

def push(item):
    global top
    if top == MAXSIZE - 1:
        print("Stack Overflow")
    else:
        top += 1
        stack[top] = item

def pop():
    global top
    if top == -1:
        return None
    item = stack[top]
    stack[top] = None
    top -= 1
    return item

def reverse_string(text):
    global top
    top = -1  # Reset stack
    for char in text:
        push(char)
    result = ""
    while top != -1:
        result += pop()
    return result

print(reverse_string("Hello"))    # olleH
print(reverse_string("Python"))   # nohtyP
print(reverse_string("12345"))    # 54321`,
    explanation: 'Push each character onto the stack (top grows). Pop them off one by one — LIFO means last character pushed comes out first, giving us the reverse.',
  },
  {
    title: 'Check Balanced Brackets',
    difficulty: 'Medium',
    desc: 'Write a function is_balanced(expression) that checks if brackets are balanced using a stack.',
    hints: [
      'If you see ( [ { → push onto stack',
      'If you see ) ] } → pop from stack and check if it matches',
      'At the end, stack must be empty for balanced expression',
      'If stack is empty when you try to pop → not balanced',
    ],
    solution: `def is_balanced(expression):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    opening = set('([{')

    for char in expression:
        if char in opening:
            stack.append(char)
        elif char in pairs:
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()

    return len(stack) == 0

# Tests
print(is_balanced("(())"))       # True
print(is_balanced("([{}])"))     # True
print(is_balanced("(]"))         # False
print(is_balanced("((()"))       # False
print(is_balanced("{[()]}"))     # True`,
    explanation: 'Opening brackets get pushed. Closing brackets need a matching opening bracket at the top of the stack. If mismatch or empty stack → false. Empty stack at end → true.',
  },
  {
    title: 'Stack with All Operations',
    difficulty: 'Medium',
    desc: 'Implement a complete stack with push, pop, peek, is_empty, is_full, and display functions. Test with the sequence: push 5, push 3, push 8, pop, push 1, peek.',
    hints: [
      'Use MAXSIZE = 5 for this exercise',
      'Display function should print all items from bottom to top',
      'Track every change with a trace table',
    ],
    solution: `MAXSIZE = 5
stack = [None] * MAXSIZE
top = -1

def push(item):
    global top
    if top == MAXSIZE - 1:
        print("Stack Overflow")
        return False
    top += 1
    stack[top] = item
    return True

def pop():
    global top
    if top == -1:
        print("Stack Underflow")
        return None
    item = stack[top]
    stack[top] = None
    top -= 1
    return item

def peek():
    if top == -1:
        return None
    return stack[top]

def is_empty():
    return top == -1

def is_full():
    return top == MAXSIZE - 1

def display():
    if is_empty():
        print("Stack is empty")
        return
    print("Stack (top to bottom):")
    for i in range(top, -1, -1):
        print(f"  [{i}] {stack[i]}")

# Test sequence
push(5); display()
push(3); display()
push(8); display()
print(f"Popped: {pop()}"); display()
push(1); display()
print(f"Peek: {peek()}")`,
    explanation: 'A complete stack implementation. The display function loops from top down to index 0, showing items from top to bottom.',
  },
];

export default function Py13Practice() {
  const [revealed, setRevealed] = useState<{ [key: number]: number }>({});
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ✍️ Practice – Stacks
      </h1>
      <p className="text-gray-500 text-lg mb-8">3 exercises with hints and full solutions</p>
      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold text-lg">Exercise {i + 1}: {ex.title}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  ex.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                  ex.difficulty === 'Medium' ? 'bg-amber-200 text-amber-800' :
                  'bg-red-200 text-red-800'
                }`}>{ex.difficulty}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg">{ex.desc}</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-2">💡 Hints (reveal one at a time):</p>
                <div className="space-y-2">
                  {ex.hints.map((hint, j) => (
                    <div key={j}>
                      {(revealed[i] || 0) > j ? (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-800">
                          Hint {j + 1}: {hint}
                        </div>
                      ) : (
                        <button
                          onClick={() => setRevealed(prev => ({ ...prev, [i]: j + 1 }))}
                          className="text-sm text-amber-600 hover:text-amber-800 underline"
                        >
                          Reveal hint {j + 1}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {!showSolution[i] ? (
                <button
                  onClick={() => setShowSolution(prev => ({ ...prev, [i]: true }))}
                  className="btn-primary bg-emerald-600 hover:bg-emerald-700"
                >
                  Show Solution
                </button>
              ) : (
                <div>
                  <CodeBlock language="python" code={ex.solution} />
                  <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="font-bold text-emerald-800 mb-1">📖 Explanation</p>
                    <p className="text-emerald-700 text-sm">{ex.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
