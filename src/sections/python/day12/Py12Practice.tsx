import CodeBlock from '../../../components/CodeBlock';
import { useState } from 'react';

export default function Py12Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">✍️ Practice Exercises</h2>

      {/* Exercise 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
          <h3 className="text-xl font-bold text-gray-900">Create a BookRecord Class</h3>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Easy</span>
        </div>
        <p className="text-gray-600 mb-4">Create a <code className="bg-gray-100 px-1 rounded">Book</code> class with fields: <strong>title</strong> (string), <strong>author</strong> (string), <strong>price</strong> (float). Create one book and display it.</p>

        {[1,2,3].map(h => (
          <div key={h}>
            <button onClick={() => toggle(`h1${h}`)} className="text-sm text-emerald-600 underline mb-2 block">
              {revealed[`h1${h}`] ? '▼' : '▶'} Hint {h}
            </button>
            {revealed[`h1${h}`] && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-2 text-sm text-yellow-800">
                {h === 1 && 'Start with: class Book:'}
                {h === 2 && 'In __init__: self.title = "", self.author = "", self.price = 0.0'}
                {h === 3 && 'Create with: b = Book() then b.title = "..."'}
              </div>
            )}
          </div>
        ))}

        <button onClick={() => toggle('s1')} className="btn-primary mt-2 text-sm">
          {revealed.s1 ? 'Hide Solution' : 'Show Solution'}
        </button>
        {revealed.s1 && (
          <div className="mt-4">
            <CodeBlock language="python" code={`class Book:
    def __init__(self):
        self.title = ""
        self.author = ""
        self.price = 0.0

# Create one book
b = Book()
b.title = "Python Programming"
b.author = "John Smith"
b.price = 29.99

print(f"Title:  {b.title}")
print(f"Author: {b.author}")
print(f"Price:  £{b.price:.2f}")`} />
          </div>
        )}
      </div>

      {/* Exercise 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
          <h3 className="text-xl font-bold text-gray-900">Store 5 Books & Search by Title</h3>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">Medium</span>
        </div>
        <p className="text-gray-600 mb-4">Input 5 books, then search for a book by title. Display its details if found, or "Not found" if not.</p>

        <button onClick={() => toggle('s2')} className="btn-primary text-sm">
          {revealed.s2 ? 'Hide Solution' : 'Show Solution'}
        </button>
        {revealed.s2 && (
          <div className="mt-4">
            <CodeBlock language="python" code={`class Book:
    def __init__(self):
        self.title = ""
        self.author = ""
        self.price = 0.0

# Input 5 books
books = []
for i in range(5):
    b = Book()
    b.title = input(f"Title {i+1}: ")
    b.author = input(f"Author: ")
    b.price = float(input(f"Price: "))
    books.append(b)

# Search by title
def search_by_title(books, target):
    for b in books:
        if b.title.lower() == target.lower():
            return b
    return None

target = input("Search for title: ")
result = search_by_title(books, target)

if result is not None:
    print(f"Found: {result.title} by {result.author} - £{result.price:.2f}")
else:
    print("Not found")`} />
          </div>
        )}
      </div>

      {/* Exercise 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
          <h3 className="text-xl font-bold text-gray-900">Sort Books by Price</h3>
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">Hard</span>
        </div>
        <p className="text-gray-600 mb-4">Sort your 5 books by price (lowest to highest) using bubble sort. Display sorted list.</p>

        <button onClick={() => toggle('s3')} className="btn-primary text-sm">
          {revealed.s3 ? 'Hide Solution' : 'Show Solution'}
        </button>
        {revealed.s3 && (
          <div className="mt-4">
            <CodeBlock language="python" code={`def sort_by_price(books):
    n = len(books)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if books[j].price > books[j+1].price:
                books[j], books[j+1] = books[j+1], books[j]
                swapped = True
        if not swapped:
            break

sort_by_price(books)

print("Books sorted by price:")
for i, b in enumerate(books):
    print(f"{i+1}. {b.title} - £{b.price:.2f}")`} />
          </div>
        )}
      </div>
    </div>
  );
}
