import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py15Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  const sol1 = `numbers = [3, 7, 12, 19, 24, 31, 38, 45, 56, 72]

def binary_search(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

target = int(input("Enter number to search: "))
result = binary_search(numbers, target)
if result != -1:
    print(f"Found {target} at index {result}")
else:
    print(f"{target} not found")`;

  const sol2 = `# Trace for Target = 31
# Data: [3, 7, 12, 19, 24, 31, 38, 45, 56, 72]
# Indices: 0  1   2   3   4   5   6   7   8   9

# Pass 1: low=0, high=9, mid=4, data[4]=24
#         24 < 31 → low = 5
# Pass 2: low=5, high=9, mid=7, data[7]=45
#         45 > 31 → high = 6
# Pass 3: low=5, high=6, mid=5, data[5]=31
#         31 == 31 → FOUND! Return 5

print("Target 31 found at index 5")  # Correct!`;

  const sol3 = `names = ["Ali", "Emma", "John", "Maria", "Sara", "Tom", "Zara"]

def binary_search_string(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

name = input("Enter name to search: ")
result = binary_search_string(names, name)
if result != -1:
    print(f"Found '{name}' at index {result}")
else:
    print(f"'{name}' not found")`;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice — Binary Search
      </h1>

      {[
        { id: 'p1', title: '🔢 Exercise 1: Integer Array Search', difficulty: 'Easy', color: 'green', desc: 'Write a binary_search function and search for a number in [3, 7, 12, 19, 24, 31, 38, 45, 56, 72]. Print whether found or not.', hints: ['Remember low=0, high=len(data)-1', 'mid = (low + high) // 2', 'Check if data[mid] == target first', 'elif data[mid] < target: low = mid + 1', 'At the end: return -1'], sol: sol1 },
        { id: 'p2', title: '📋 Exercise 2: Trace Table for Target = 31', difficulty: 'Medium', color: 'amber', desc: 'Draw the trace table for binary_search([3,7,12,19,24,31,38,45,56,72], 31). Show: Pass, low, high, mid, data[mid], Action.', hints: ['Start: low=0, high=9', 'Pass 1: mid = (0+9)//2 = 4', 'data[4] = 24, 24 < 31 so low = mid+1 = 5', 'Pass 2: mid = (5+9)//2 = 7', 'data[7] = 45, 45 > 31 so high = mid-1 = 6'], sol: sol2 },
        { id: 'p3', title: '🔤 Exercise 3: String Binary Search', difficulty: 'Medium', color: 'blue', desc: 'Search for a name in ["Ali","Emma","John","Maria","Sara","Tom","Zara"]. The list is already sorted alphabetically.', hints: ['Same code as integer search!', 'Python compares strings alphabetically', '"Ali" < "John" is True in Python', 'Sort check: "Ali" < "Emma" < "John" etc.', 'Call: binary_search_string(names, name)'], sol: sol3 },
      ].map(ex => (
        <div key={ex.id} className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xl font-bold text-gray-800">{ex.title}</h2>
            <span className={`px-2 py-1 text-xs font-bold rounded-full bg-${ex.color}-100 text-${ex.color}-700`}>{ex.difficulty}</span>
          </div>
          <p className="text-gray-600 mb-4">{ex.desc}</p>
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">💡 Hints:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              {ex.hints.map((h, i) => <li key={i}>{h}</li>)}
            </ol>
          </div>
          <button onClick={() => toggle(ex.id)} className="btn-primary text-sm mb-3">
            {revealed[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}
          </button>
          {revealed[ex.id] && <CodeBlock code={ex.sol} language="python" />}
        </div>
      ))}
    </div>
  );
}
