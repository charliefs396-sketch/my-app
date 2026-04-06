import CodeBlock from '../../../components/CodeBlock';

export default function Py6ListMethods() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">🔧 List Methods</h1>
      <p className="text-gray-500 mb-6">append, insert, remove, pop and more</p>

      {/* Add Methods */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">➕ Adding Elements</h2>
        <CodeBlock language="python" code={`names = ["Ali", "Sara", "John"]

# append() - add to END
names.append("Tom")
print(names)   # ["Ali", "Sara", "John", "Tom"]

# insert(index, value) - add at specific position
names.insert(0, "Zara")    # Insert at start
print(names)   # ["Zara", "Ali", "Sara", "John", "Tom"]

names.insert(2, "Mike")    # Insert at position 2
print(names)   # ["Zara", "Ali", "Mike", "Sara", "John", "Tom"]

# extend() - add multiple items
names.extend(["Kate", "Bob"])
print(names)   # adds Kate and Bob to end`} />
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <p className="font-bold text-emerald-700 text-sm">✅ append() — most common</p>
            <p className="text-emerald-700 text-sm">Use when adding ONE item to end. O(1) — very fast!</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="font-bold text-blue-700 text-sm">✅ insert() — specific position</p>
            <p className="text-blue-700 text-sm">Use when position matters. Shifts everything after it.</p>
          </div>
        </div>
      </div>

      {/* Remove Methods */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">➖ Removing Elements</h2>
        <CodeBlock language="python" code={`names = ["Ali", "Sara", "John", "Sara", "Tom"]

# remove() - remove FIRST occurrence of value
names.remove("Sara")
print(names)   # ["Ali", "John", "Sara", "Tom"]
# Note: removes FIRST "Sara", not the second!

# pop() - remove by INDEX (returns removed item)
removed = names.pop(0)    # Remove first element
print(removed)  # Ali
print(names)    # ["John", "Sara", "Tom"]

removed = names.pop()     # Remove LAST element (no index)
print(removed)  # Tom
print(names)    # ["John", "Sara"]

# clear() - remove ALL elements
names.clear()
print(names)    # []

# del - delete by index or slice
numbers = [10, 20, 30, 40, 50]
del numbers[2]         # Remove 30
print(numbers)         # [10, 20, 40, 50]`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-bold border-b">Method</th>
                <th className="text-left p-3 font-bold border-b">How to use</th>
                <th className="text-left p-3 font-bold border-b">Returns</th>
                <th className="text-left p-3 font-bold border-b">Use when</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['remove(value)', 'names.remove("Ali")', 'Nothing (None)', 'You know the VALUE'],
                ['pop(index)', 'names.pop(0)', 'The removed item', 'You know the INDEX'],
                ['pop()', 'names.pop()', 'The last item', 'Remove from end'],
                ['clear()', 'names.clear()', 'Nothing (None)', 'Remove everything'],
              ].map(([method, usage, returns, when]) => (
                <tr key={method} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-mono text-emerald-700 font-bold">{method}</td>
                  <td className="p-3 font-mono text-sm text-gray-700">{usage}</td>
                  <td className="p-3 text-blue-700">{returns}</td>
                  <td className="p-3 text-gray-600">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-bold text-red-700 text-sm">⚠️ remove() raises ValueError if item not found!</p>
          <CodeBlock language="python" code={`# Safe remove - check first
if "Ali" in names:
    names.remove("Ali")`} />
        </div>
      </div>

      {/* Other useful methods */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🛠️ Other Useful Methods</h2>
        <CodeBlock language="python" code={`numbers = [5, 3, 8, 1, 9, 2, 3]

# Sort
numbers.sort()              # Ascending: [1, 2, 3, 3, 5, 8, 9]
numbers.sort(reverse=True)  # Descending: [9, 8, 5, 3, 3, 2, 1]

# Count occurrences
print(numbers.count(3))     # 2 (3 appears twice)

# Find index of value
print(numbers.index(8))     # 2 (position of 8)

# Reverse the list
numbers.reverse()

# Copy a list (IMPORTANT!)
original = [1, 2, 3]
copy1 = original.copy()    # Proper copy
copy2 = original[:]        # Also a proper copy
copy3 = original           # NOT a copy! Both point to same list!

copy3.append(4)
print(original)  # [1, 2, 3, 4] -- original was changed!
print(copy1)     # [1, 2, 3]    -- copy1 is safe`} />
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="font-bold text-amber-700 text-sm">💡 Exam Tip: copy() vs assignment</p>
          <p className="text-amber-700 text-sm mt-1">In exams, if asked to "make a copy of a list", always use <code>.copy()</code> or <code>[:]</code>. Never use <code>list2 = list1</code> — that's not a copy!</p>
        </div>
      </div>
    </div>
  );
}
