import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py9Practice() {
  const [showHints, setShowHints] = useState<Record<string, number>>({});
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});

  const toggleHint = (id: string, maxHints: number) => {
    setShowHints(prev => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, maxHints) }));
  };

  const toggleSolution = (id: string) => {
    setShowSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-3">
        ✍️ Practice Exercises — Linear Search
      </h1>

      {/* Exercise 1 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">Exercise 1</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Easy</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🔢 Search an Array of Integers</h3>
        <p className="text-gray-600 mb-4">Write a function <code className="bg-gray-100 px-2 py-1 rounded">search_number(numbers, target)</code> that searches a list of integers and returns the index if found, or -1 if not found. Test it with [5, 3, 8, 1, 9, 2] searching for 8.</p>

        <div className="flex gap-2 mb-4">
          <button onClick={() => toggleHint('e1', 3)} className="btn-secondary text-sm">💡 Hint ({showHints['e1'] || 0}/3)</button>
          <button onClick={() => toggleSolution('e1')} className="btn-primary text-sm bg-emerald-600 hover:bg-emerald-700">{showSolutions['e1'] ? 'Hide' : 'Show'} Solution</button>
        </div>

        {(showHints['e1'] || 0) >= 1 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Use for i in range(len(numbers)) to loop through</p></div>}
        {(showHints['e1'] || 0) >= 2 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Compare numbers[i] == target inside the loop</p></div>}
        {(showHints['e1'] || 0) >= 3 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 return i when found, return -1 AFTER the loop</p></div>}

        {showSolutions['e1'] && (
          <div className="mt-4">
            <CodeBlock code={`def search_number(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1

# Test
numbers = [5, 3, 8, 1, 9, 2]
result = search_number(numbers, 8)

if result != -1:
    print(f"Found 8 at index {result}")  # Found 8 at index 2
else:
    print("Not found")`} language="python" />
          </div>
        )}
      </div>

      {/* Exercise 2 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">Exercise 2</span>
          <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">Medium</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🔢 Count All Occurrences</h3>
        <p className="text-gray-600 mb-4">Write a function <code className="bg-gray-100 px-2 py-1 rounded">count_target(data, target)</code> that counts how many times target appears. Test with [3, 7, 3, 1, 3, 9, 3, 5] counting 3.</p>

        <div className="flex gap-2 mb-4">
          <button onClick={() => toggleHint('e2', 3)} className="btn-secondary text-sm">💡 Hint ({showHints['e2'] || 0}/3)</button>
          <button onClick={() => toggleSolution('e2')} className="btn-primary text-sm bg-emerald-600 hover:bg-emerald-700">{showSolutions['e2'] ? 'Hide' : 'Show'} Solution</button>
        </div>

        {(showHints['e2'] || 0) >= 1 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Start with count = 0 before the loop</p></div>}
        {(showHints['e2'] || 0) >= 2 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Do NOT use return inside the loop — just increment count</p></div>}
        {(showHints['e2'] || 0) >= 3 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 return count AFTER the loop finishes</p></div>}

        {showSolutions['e2'] && (
          <div className="mt-4">
            <CodeBlock code={`def count_target(data, target):
    count = 0
    for i in range(len(data)):
        if data[i] == target:
            count += 1
    return count

# Test
numbers = [3, 7, 3, 1, 3, 9, 3, 5]
result = count_target(numbers, 3)
print(f"3 appears {result} times")  # 3 appears 4 times`} language="python" />
          </div>
        )}
      </div>

      {/* Exercise 3 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">Exercise 3</span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">Hard</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">📍 Return ALL Positions</h3>
        <p className="text-gray-600 mb-4">Write a function <code className="bg-gray-100 px-2 py-1 rounded">find_all(data, target)</code> that returns a LIST of all indices where target is found. Test with [3, 7, 3, 1, 3, 9, 3, 5] finding all 3s.</p>

        <div className="flex gap-2 mb-4">
          <button onClick={() => toggleHint('e3', 3)} className="btn-secondary text-sm">💡 Hint ({showHints['e3'] || 0}/3)</button>
          <button onClick={() => toggleSolution('e3')} className="btn-primary text-sm bg-emerald-600 hover:bg-emerald-700">{showSolutions['e3'] ? 'Hide' : 'Show'} Solution</button>
        </div>

        {(showHints['e3'] || 0) >= 1 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Start with positions = [] (empty list)</p></div>}
        {(showHints['e3'] || 0) >= 2 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 Use positions.append(i) when you find a match</p></div>}
        {(showHints['e3'] || 0) >= 3 && <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-2"><p className="text-amber-800">💡 return positions AFTER the loop — check len(result) == 0 for not found</p></div>}

        {showSolutions['e3'] && (
          <div className="mt-4">
            <CodeBlock code={`def find_all(data, target):
    positions = []
    for i in range(len(data)):
        if data[i] == target:
            positions.append(i)
    return positions

# Test
numbers = [3, 7, 3, 1, 3, 9, 3, 5]
result = find_all(numbers, 3)

if len(result) == 0:
    print("Not found")
else:
    print(f"3 found at positions: {result}")
    # Output: 3 found at positions: [0, 2, 4, 6]
    print(f"Total occurrences: {len(result)}")
    # Output: Total occurrences: 4`} language="python" />
          </div>
        )}
      </div>
    </div>
  );
}