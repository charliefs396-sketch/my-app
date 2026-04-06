import CodeBlock from '../../../components/CodeBlock';

export default function Py16Variations() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">🔄 Variations</h2>
      <p className="text-gray-600 mb-6">Descending order, sorting tuples, and comparing with Bubble Sort</p>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">1️⃣ Descending Order — ONE character change!</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-red-600 mb-2">❌ Ascending (original)</p>
            <CodeBlock code={`while j >= 0 and data[j] > key:
    data[j + 1] = data[j]
    j -= 1`} language="python" />
          </div>
          <div>
            <p className="text-sm font-bold text-green-600 mb-2">✅ Descending (change &gt; to &lt;)</p>
            <CodeBlock code={`while j >= 0 and data[j] < key:
    data[j + 1] = data[j]
    j -= 1`} language="python" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">2️⃣ Sort List of Tuples by Second Element</h3>
        <CodeBlock code={`# Sort students by mark (second element)
students = [("Ali", 85), ("Sara", 72), ("John", 91), ("Maria", 68)]

def insertion_sort_by_mark(data):
    for i in range(1, len(data)):
        key = data[i]
        j = i - 1
        while j >= 0 and data[j][1] > key[1]:  # Compare by mark
            data[j + 1] = data[j]
            j -= 1
        data[j + 1] = key
    return data

insertion_sort_by_mark(students)
for name, mark in students:
    print(f"{name}: {mark}")
# Maria: 68
# Sara: 72
# Ali: 85
# John: 91`} language="python" />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">3️⃣ Insertion vs Bubble Sort Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-600">Feature</th>
                <th className="px-4 py-3 text-left text-indigo-600">Insertion Sort</th>
                <th className="px-4 py-3 text-left text-purple-600">Bubble Sort</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Best case', 'O(n) — already sorted', 'O(n) — with swapped flag'],
                ['Worst case', 'O(n²)', 'O(n²)'],
                ['Number of swaps', 'Fewer (shifts)', 'More swaps'],
                ['Practical speed', 'Faster in practice', 'Slower in practice'],
                ['Stable?', 'Yes', 'Yes'],
                ['Python built-in', '.sort() uses Timsort', '.sort() uses Timsort'],
              ].map(([feat, ins, bub], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-700">{feat}</td>
                  <td className="px-4 py-3 text-indigo-700">{ins}</td>
                  <td className="px-4 py-3 text-purple-700">{bub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
