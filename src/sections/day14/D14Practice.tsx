import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D14Practice() {
  const [hints, setHints] = useState<Record<number, number>>({});
  const [solutions, setSolutions] = useState<Record<number, boolean>>({});
  const showHint = (ex: number) => setHints(h => ({ ...h, [ex]: (h[ex] || 0) + 1 }));
  const toggleSolution = (ex: number) => setSolutions(s => ({ ...s, [ex]: !s[ex] }));

  const exercises = [
    {
      title: "Trace Enqueue and Dequeue Operations",
      difficulty: "⭐ Easy",
      desc: "Trace these operations on a circular queue (MAXSIZE=4). Draw Front, Rear, Size after each step:\nEnqueue(\"P\"), Enqueue(\"Q\"), Enqueue(\"R\"), Dequeue(), Enqueue(\"S\"), Enqueue(\"T\"), Dequeue(), Dequeue()",
      hints: ["Start: Front=1, Rear=0, Size=0", "Each Enqueue: Rear ← (Rear MOD MAXSIZE) + 1, Size + 1", "Each Dequeue: Front ← (Front MOD MAXSIZE) + 1, Size - 1, return Queue[Front before change]", "When Rear reaches MAXSIZE and you Enqueue again, it wraps to 1"],
      solution: `Operation       | Front | Rear | Size | Contents       | Returns
----------------|-------|------|------|----------------|--------
Start           |   1   |  0   |  0   | []             | -
Enqueue("P")    |   1   |  1   |  1   | ["P"]          | -
Enqueue("Q")    |   1   |  2   |  2   | ["P","Q"]      | -
Enqueue("R")    |   1   |  3   |  3   | ["P","Q","R"]  | -
Dequeue()       |   2   |  3   |  2   | ["Q","R"]      | "P"
Enqueue("S")    |   2   |  4   |  3   | ["Q","R","S"]  | -
Enqueue("T")    |   2   |  1   |  4   | FULL - wraps!  | -  (Rear wraps)
Dequeue()       |   3   |  1   |  3   | ["R","S","T"]  | "Q"
Dequeue()       |   4   |  1   |  2   | ["S","T"]      | "R"`,
    },
    {
      title: "Explain Why Circular is Better",
      difficulty: "⭐ Easy",
      desc: "In 4-5 sentences, explain the problem with a linear queue and how a circular queue solves it. Include the MOD formula in your answer.",
      hints: ["Think about what happens to Front as you Dequeue — it moves forward", "What happens to positions 1, 2, 3... after Front passes them in a linear queue?", "In a circular queue, the MOD formula is: Rear ← (Rear MOD MAXSIZE) + 1", "Mention 'wasted space' and 'wrap around'"],
      solution: `In a linear queue, the Front pointer only ever moves forward.
After Dequeue operations, positions at the beginning of the array
become permanently empty — this is wasted space that can never be reused.

A circular queue solves this by using the MOD formula:
  Rear ← (Rear MOD MAXSIZE) + 1
  Front ← (Front MOD MAXSIZE) + 1

When Rear reaches MAXSIZE, the MOD operation returns 0, and adding 1
gives position 1 — wrapping Rear back to the beginning of the array.
This means old empty positions are reused, so no space is wasted.
The Size variable tracks how many items are in the queue, preventing
the queue from being treated as full when positions have wrapped.`,
    },
    {
      title: "Integer Queue",
      difficulty: "⭐⭐ Medium",
      desc: "Write a circular queue for INTEGERS (MAXSIZE=3). Enqueue 10, 20, 30, then Dequeue twice. What are the two values returned? What is the final state of Front, Rear, Size?",
      hints: ["Change the array type: DECLARE Queue : ARRAY[1:3] OF INTEGER", "Enqueue 10: Rear=(0 MOD 3)+1=1, Queue[1]=10, Size=1", "Enqueue 20: Rear=(1 MOD 3)+1=2, Queue[2]=20, Size=2", "First Dequeue returns Queue[Front=1]=10, Front=(1 MOD 3)+1=2"],
      solution: `CONSTANT MAXSIZE = 3
DECLARE Queue : ARRAY[1:MAXSIZE] OF INTEGER
DECLARE Front, Rear, Size : INTEGER
Front ← 1
Rear ← 0
Size ← 0

// After Enqueue(10): Rear=1, Queue[1]=10, Size=1
// After Enqueue(20): Rear=2, Queue[2]=20, Size=2
// After Enqueue(30): Rear=3, Queue[3]=30, Size=3

// First Dequeue:
//   Returns Queue[1] = 10
//   Front = (1 MOD 3)+1 = 2
//   Size = 2

// Second Dequeue:
//   Returns Queue[2] = 20
//   Front = (2 MOD 3)+1 = 3
//   Size = 1

// Final state: Front=3, Rear=3, Size=1
// Queue contains: [30] at position Queue[3]`,
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Queues</h1>
      <p className="text-gray-500 mb-6">3 exercises to master queue operations</p>
      <div className="space-y-6">
        {exercises.map((ex, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <h3 className="font-bold text-gray-800 text-lg">{ex.title}</h3>
              <span className="text-sm">{ex.difficulty}</span>
            </div>
            <pre className="text-gray-700 text-sm mb-4 whitespace-pre-wrap bg-gray-50 rounded-lg p-3">{ex.desc}</pre>
            <div className="flex gap-3 mb-3">
              <button onClick={() => showHint(i)} className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-semibold hover:bg-amber-200">
                💡 Hint {(hints[i] || 0) < ex.hints.length ? `(${(hints[i] || 0) + 1}/${ex.hints.length})` : '(all shown)'}
              </button>
              <button onClick={() => toggleSolution(i)} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold hover:bg-emerald-200">
                {solutions[i] ? '🙈 Hide Solution' : '👁️ Show Solution'}
              </button>
            </div>
            {(hints[i] || 0) > 0 && (
              <div className="space-y-2 mb-3">
                {ex.hints.slice(0, hints[i]).map((hint, hi) => (
                  <div key={hi} className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800 text-sm">
                    <strong>Hint {hi + 1}:</strong> {hint}
                  </div>
                ))}
              </div>
            )}
            {solutions[i] && <CodeBlock language="pseudocode" code={ex.solution} />}
          </div>
        ))}
      </div>
    </div>
  );
}
