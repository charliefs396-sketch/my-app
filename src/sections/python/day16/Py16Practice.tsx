import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py16Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  const exercises = [
    {
      id: 'ex1',
      title: 'Trace [8, 3, 5, 1, 9, 2]',
      difficulty: 'Medium',
      color: 'amber',
      description: 'Write a complete trace table for insertion_sort([8, 3, 5, 1, 9, 2]) showing all 5 passes.',
      hints: ['Pass 1: key=3, compare with 8', 'Pass 2: key=5, compare with 8 then 3', 'Pass 3: key=1, shift 8,5,3 right'],
      solution: `# Trace of insertion_sort([8, 3, 5, 1, 9, 2])

# Start:   [8, 3, 5, 1, 9, 2]
# Pass i=1: key=3, 8>3 shift, insert at [0] → [3, 8, 5, 1, 9, 2]
# Pass i=2: key=5, 8>5 shift, 3<5 stop, insert at [2] → [3, 5, 8, 1, 9, 2]
# Pass i=3: key=1, 8,5,3 all >1 shift, insert at [0] → [1, 3, 5, 8, 9, 2]
# Pass i=4: key=9, 8<9 stop, insert at [4] → [1, 3, 5, 8, 9, 2]
# Pass i=5: key=2, 9,8,5,3 >2 shift, 1<2 stop, insert at [1] → [1, 2, 3, 5, 8, 9]

def insertion_sort(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j] > key:
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data

data = [8, 3, 5, 1, 9, 2]
insertion_sort(data)
print(data)  # [1, 2, 3, 5, 8, 9]`,
    },
    {
      id: 'ex2',
      title: 'Descending Order',
      difficulty: 'Easy',
      color: 'green',
      description: 'Write insertion_sort_desc([5, 2, 8, 1, 9]) that sorts in DESCENDING order.',
      hints: ['Only ONE character changes from ascending', 'Change the comparison operator in the while condition', 'Change > to <'],
      solution: `def insertion_sort_desc(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j] < key:  # < instead of >
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data

data = [5, 2, 8, 1, 9]
insertion_sort_desc(data)
print(data)  # [9, 8, 5, 2, 1]`,
    },
    {
      id: 'ex3',
      title: 'Sort Students by Mark',
      difficulty: 'Hard',
      color: 'red',
      description: 'Sort a list of (name, mark) tuples by mark using insertion sort.',
      hints: ['Compare data[j][1] > key[1] — the second element of the tuple', 'Save the whole tuple as key, not just the mark', 'The rest of the algorithm stays the same'],
      solution: `def insertion_sort_by_mark(data):
    for i in range(1, len(data)):
        key = data[i]           # key is a whole tuple e.g. ("Ali", 85)
        j = i - 1
        while j >= 0 and data[j][1] > key[1]:  # compare marks
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data

students = [("Ali", 85), ("Sara", 72), ("John", 91), ("Maria", 68)]
insertion_sort_by_mark(students)
for name, mark in students:
    print(f"{name}: {mark}")
# Maria: 68
# Sara: 72
# Ali: 85
# John: 91`,
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">✍️ Practice Exercises</h2>
      <p className="text-gray-600 mb-6">3 exercises — trace, modify, and apply insertion sort</p>
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
                  <span className="text-indigo-500 font-bold">💡</span> {hint}
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
