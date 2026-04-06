import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py17Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  const exercises = [
    {
      id: 'ex1',
      title: 'Recursive String Reversal',
      difficulty: 'Medium',
      color: 'violet',
      description: 'Write a recursive function reverse_string(text) that returns the string backwards.',
      hints: [
        'Base case: empty string returns empty string',
        'Take the first character and move it to the end',
        'Reverse the rest using text[1:]'
      ],
      solution: `def reverse_string(text):
    if text == "":
        return ""
    return reverse_string(text[1:]) + text[0]

print(reverse_string("hello"))  # olleh`
    },
    {
      id: 'ex2',
      title: 'Recursive Binary Search',
      difficulty: 'Hard',
      color: 'blue',
      description: 'Write a recursive binary search function for a sorted list.',
      hints: [
        'You need low and high parameters',
        'Base case: if low > high return -1',
        'If target is bigger than middle, search right half'
      ],
      solution: `def binary_search_recursive(data, target, low, high):
    if low > high:
        return -1

    mid = (low + high) // 2

    if data[mid] == target:
        return mid
    elif data[mid] < target:
        return binary_search_recursive(data, target, mid + 1, high)
    else:
        return binary_search_recursive(data, target, low, mid - 1)

numbers = [2, 5, 8, 12, 16, 23, 38, 56]
print(binary_search_recursive(numbers, 23, 0, len(numbers)-1))`
    },
    {
      id: 'ex3',
      title: 'Recursive Count of Element in List',
      difficulty: 'Hard',
      color: 'emerald',
      description: 'Write count_element(data, target) that recursively counts how many times target appears in a list.',
      hints: [
        'Base case: empty list returns 0',
        'Check the first element',
        'Then count in the rest of the list using data[1:]'
      ],
      solution: `def count_element(data, target):
    if data == []:
        return 0

    if data[0] == target:
        return 1 + count_element(data[1:], target)
    return count_element(data[1:], target)

print(count_element([1, 2, 3, 2, 2, 4], 2))  # 3`
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-600 mb-6">3 recursion problems from your Day 17 list</p>
      <div className="space-y-6">
        {exercises.map((ex) => (
          <div key={ex.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{ex.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{ex.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${ex.color}-100 text-${ex.color}-700`}>{ex.difficulty}</span>
            </div>
            <div className="px-6 py-4 space-y-3">
              {ex.hints.map((hint, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <span className="text-violet-500 font-bold">💡</span> {hint}
                </div>
              ))}
              <button onClick={() => toggle(ex.id)} className="btn-primary text-sm mt-2">
                {revealed[ex.id] ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>
              {revealed[ex.id] && <CodeBlock code={ex.solution} language="python" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
