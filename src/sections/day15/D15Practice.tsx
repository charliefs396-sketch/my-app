import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D15Practice() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setRevealed(p => ({ ...p, [k]: !p[k] }));

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Linked Lists</h1>
      <p className="text-gray-500 mb-6">Trace, draw, and write linked list operations</p>

      {[
        {
          id: 'p1', num: 1, title: 'Trace insertions', difficulty: 'Medium',
          desc: 'Starting from an initialised empty list (size 5), trace: InsertAtStart("A"), InsertAtStart("B"), InsertAtStart("C"). Show StartPointer, FreePointer, and the array state after each insertion.',
          hints: ['After InsertAtStart("A"): NewNode=1, FreePointer becomes 2, StartPointer becomes 1', 'After InsertAtStart("B"): NewNode=2, FreePointer becomes 3, StartPointer becomes 2', 'List[2].Pointer should point to 1 (the old StartPointer before inserting B)'],
          solution: `// Initial state:
// StartPointer=0, FreePointer=1
// List: [1]—/2, [2]—/3, [3]—/4, [4]—/5, [5]—/0

// InsertAtStart("A"):
// NewNode←1, FreePointer←2
// List[1].Data←"A", List[1].Pointer←0 (old StartPointer)
// StartPointer←1
// State: SP=1, FP=2, List: [1]A/0, [2]—/3, [3]—/4

// InsertAtStart("B"):
// NewNode←2, FreePointer←3
// List[2].Data←"B", List[2].Pointer←1 (old StartPointer)
// StartPointer←2
// State: SP=2, FP=3, List: [1]A/0, [2]B/1, [3]—/4

// InsertAtStart("C"):
// NewNode←3, FreePointer←4
// List[3].Data←"C", List[3].Pointer←2 (old StartPointer)
// StartPointer←3
// State: SP=3, FP=4, List: [1]A/0, [2]B/1, [3]C/2

// Traverse: 3→"C"→2→"B"→1→"A"→0(NULL)
// Output: C, B, A`,
        },
        {
          id: 'p2', num: 2, title: 'Write the traversal and count', difficulty: 'Medium',
          desc: 'Write pseudocode for a FUNCTION CountItems() RETURNS INTEGER that counts how many nodes are in the linked list.',
          hints: ['Use WHILE Current <> 0 like DisplayAll', 'Keep a counter variable, increment it each time you visit a node', 'Return the counter at the end'],
          solution: `FUNCTION CountItems() RETURNS INTEGER
   DECLARE Current : INTEGER
   DECLARE Count : INTEGER
   Current ← StartPointer
   Count ← 0
   WHILE Current <> 0
      Count ← Count + 1
      Current ← List[Current].Pointer
   ENDWHILE
   RETURN Count
ENDFUNCTION`,
        },
        {
          id: 'p3', num: 3, title: 'Advantages question', difficulty: 'Easy',
          desc: 'State THREE advantages of a linked list over a 1D array.',
          hints: ['Think about what happens when you insert in the middle of an array vs a linked list', 'Think about size — can you change an array size after declaring it?', 'Think about memory — does an array need contiguous memory?'],
          solution: `1. Dynamic size: A linked list can grow and shrink at runtime.
   An array has a fixed size set at declaration time.

2. Fast insertion/deletion: Adding or removing a node only
   requires changing a few pointers — O(1) if position is known.
   An array requires shifting all elements — O(n).

3. No contiguous memory needed: Linked list nodes can be
   stored anywhere in memory. Arrays need consecutive locations
   which may not always be available for large arrays.`,
        },
      ].map((ex) => (
        <div key={ex.id} className="card mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Exercise {ex.num}: {ex.title}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${ex.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : ex.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{ex.difficulty}</span>
          </div>
          <p className="text-gray-700 mb-4">{ex.desc}</p>
          <div className="space-y-2 mb-4">
            {ex.hints.map((hint, i) => (
              <div key={i}>
                <button onClick={() => toggle(`${ex.id}-h${i}`)} className="text-sm text-indigo-600 font-medium hover:underline">
                  {revealed[`${ex.id}-h${i}`] ? '▼' : '▶'} Hint {i + 1}
                </button>
                {revealed[`${ex.id}-h${i}`] && <div className="mt-1 bg-indigo-50 rounded-lg p-3 text-sm text-indigo-800">{hint}</div>}
              </div>
            ))}
          </div>
          <button onClick={() => toggle(`${ex.id}-sol`)} className="btn-primary text-sm">
            {revealed[`${ex.id}-sol`] ? 'Hide Solution' : 'Show Solution'}
          </button>
          {revealed[`${ex.id}-sol`] && (
            <div className="mt-4">
              <CodeBlock code={ex.solution} language="pseudocode" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
