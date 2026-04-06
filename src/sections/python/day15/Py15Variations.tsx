import CodeBlock from '../../../components/CodeBlock';

export default function Py15Variations() {
  const stringSearch = `def binary_search_strings(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:   # Alphabetical comparison!
            low = mid + 1
        else:
            high = mid - 1
    return -1

names = ["Ali", "Emma", "John", "Maria", "Tom", "Zara"]
print(binary_search_strings(names, "John"))   # 2
print(binary_search_strings(names, "Sara"))   # -1`;

  const boolVersion = `def binary_search_bool(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return True
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return False

numbers = [1, 3, 5, 7, 9, 11, 13]
print(binary_search_bool(numbers, 7))    # True
print(binary_search_bool(numbers, 6))   # False`;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3">
        🔄 Binary Search Variations
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">🔤 Search Strings (Alphabetical)</h2>
        <p className="text-gray-600 mb-3">Python compares strings alphabetically — the same code works!</p>
        <CodeBlock code={stringSearch} language="python" />
        <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
          <strong>How Python compares strings:</strong> "Ali" &lt; "John" because 'A' comes before 'J' alphabetically. It works exactly like numbers!
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">✅ Return True/False Version</h2>
        <CodeBlock code={boolVersion} language="python" />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚡ Linear vs Binary Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-gray-100"><th className="border p-2">Feature</th><th className="border p-2">Linear Search</th><th className="border p-2">Binary Search</th></tr></thead>
            <tbody>
              <tr><td className="border p-2">Data must be sorted?</td><td className="border p-2 text-green-600">No ✅</td><td className="border p-2 text-red-600">Yes ❌</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">Best case</td><td className="border p-2">O(1) — first element</td><td className="border p-2">O(1) — middle element</td></tr>
              <tr><td className="border p-2">Worst case</td><td className="border p-2 text-red-600">O(n) — all elements</td><td className="border p-2 text-green-600">O(log n) — much faster!</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">1000 items worst case</td><td className="border p-2 text-red-600">1000 comparisons</td><td className="border p-2 text-green-600">10 comparisons</td></tr>
              <tr><td className="border p-2">1,000,000 items worst</td><td className="border p-2 text-red-600">1,000,000 comparisons</td><td className="border p-2 text-green-600">20 comparisons!</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">Works on strings?</td><td className="border p-2 text-green-600">Yes ✅</td><td className="border p-2 text-green-600">Yes (if sorted) ✅</td></tr>
              <tr><td className="border p-2">Find duplicates?</td><td className="border p-2 text-green-600">Yes — finds all ✅</td><td className="border p-2 text-red-600">Only first match ❌</td></tr>
              <tr className="bg-gray-50"><td className="border p-2">Use when</td><td className="border p-2">Small/unsorted data</td><td className="border p-2">Large sorted data</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
