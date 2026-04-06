import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py11Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">✍️ Practice Exercises</h2>

      {[
        {
          num: 1, difficulty: 'Easy', color: 'green',
          title: 'Save 5 Products to File',
          desc: 'Write a program that asks the user for 5 product names and prices, then saves them to "products.txt" in CSV format.',
          hints: ['Use a for loop to input 5 products', 'Open file in "w" mode', 'Use f.write(f"{name},{price}\\n") for each product'],
          solution: `FILENAME = "products.txt"

with open(FILENAME, "w") as f:
    for i in range(5):
        name = input(f"Product {i+1} name: ")
        price = float(input(f"Product {i+1} price: "))
        f.write(f"{name},{price}\\n")

print("5 products saved to products.txt")`
        },
        {
          num: 2, difficulty: 'Easy', color: 'green',
          title: 'Read and Display All Products',
          desc: 'Read "products.txt" and display each product with its price formatted to 2 decimal places.',
          hints: ['Open file in "r" mode', 'Use for line in f loop', 'Use .strip().split(",") to parse each line', 'Use float() to convert price'],
          solution: `FILENAME = "products.txt"

print("All Products:")
print("-" * 30)
with open(FILENAME, "r") as f:
    for line in f:
        parts = line.strip().split(",")
        name = parts[0]
        price = float(parts[1])
        print(f"{name}: £{price:.2f}")`
        },
        {
          num: 3, difficulty: 'Medium', color: 'amber',
          title: 'Search for a Product by Name',
          desc: 'Write a function that searches "products.txt" for a product by name and returns its price, or -1 if not found.',
          hints: ['Loop through each line', 'Split each line and compare name (case-insensitive!)', 'Return price if found', 'Return -1 after loop if not found'],
          solution: `def search_product(filename, target):
    with open(filename, "r") as f:
        for line in f:
            parts = line.strip().split(",")
            name = parts[0]
            price = float(parts[1])
            if name.lower() == target.lower():
                return price
    return -1

result = search_product("products.txt", "Apple")
if result != -1:
    print(f"Price: £{result:.2f}")
else:
    print("Product not found")`
        },
        {
          num: 4, difficulty: 'Hard', color: 'red',
          title: 'Delete a Product',
          desc: 'Write a function that removes a product from the file by name.',
          hints: ['Read ALL lines into a list first', 'Loop through lines and keep ones that do NOT match target', 'Open file in "w" mode and write back the kept lines', 'Return True/False to indicate success'],
          solution: `def delete_product(filename, target):
    # Step 1: Read all lines
    with open(filename, "r") as f:
        lines = f.readlines()
    
    # Step 2: Filter out target
    kept = []
    found = False
    for line in lines:
        name = line.strip().split(",")[0]
        if name.lower() == target.lower():
            found = True    # Skip this line
        else:
            kept.append(line)  # Keep this line
    
    # Step 3: Write back remaining
    with open(filename, "w") as f:
        f.writelines(kept)
    
    return found

target = input("Enter product to delete: ")
if delete_product("products.txt", target):
    print(f"{target} deleted!")
else:
    print("Product not found")`
        },
      ].map((ex) => (
        <div key={ex.num} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 bg-${ex.color}-100 text-${ex.color}-700 rounded-xl flex items-center justify-center font-black text-lg`}>
              {ex.num}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{ex.title}</h3>
              <span className={`text-xs font-bold text-${ex.color}-600 bg-${ex.color}-50 px-2 py-0.5 rounded-full`}>{ex.difficulty}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{ex.desc}</p>

          <button onClick={() => toggle(`hint${ex.num}`)} className="text-sm text-blue-600 hover:text-blue-800 font-semibold mb-2 block">
            {revealed[`hint${ex.num}`] ? '▼ Hide Hints' : '▶ Show Hints'}
          </button>
          {revealed[`hint${ex.num}`] && (
            <ul className="mb-4 space-y-1">
              {ex.hints.map((h, i) => <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-blue-500">💡</span>{h}</li>)}
            </ul>
          )}

          <button onClick={() => toggle(`sol${ex.num}`)} className="text-sm text-emerald-600 hover:text-emerald-800 font-semibold mb-2 block">
            {revealed[`sol${ex.num}`] ? '▼ Hide Solution' : '▶ Show Solution'}
          </button>
          {revealed[`sol${ex.num}`] && <CodeBlock language="python" code={ex.solution} />}
        </div>
      ))}
    </div>
  );
}
