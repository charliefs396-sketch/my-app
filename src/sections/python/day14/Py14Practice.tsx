import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

const exercises = [
  {
    title: 'Exercise 1 — Trace the Queue',
    difficulty: '🟢 Easy',
    description: 'Trace these operations on a queue with MAXSIZE=5 and fill in the table: enqueue("X"), enqueue("Y"), enqueue("Z"), dequeue(), enqueue("W"), dequeue()',
    hints: [
      'Start with front=0, rear=-1, size=0',
      'Each enqueue: rear=(rear+1)%5, queue[rear]=item, size+=1',
      'Each dequeue: save queue[front], queue[front]=None, front=(front+1)%5, size-=1',
      'Track front, rear, size after EVERY operation',
    ],
    solution: `# Initial: front=0, rear=-1, size=0, queue=[None,None,None,None,None]
# enqueue("X"): rear=(0)%5=0, queue[0]="X", size=1 → [X,None,None,None,None]
# enqueue("Y"): rear=(1)%5=1, queue[1]="Y", size=2 → [X,Y,None,None,None]
# enqueue("Z"): rear=(2)%5=2, queue[2]="Z", size=3 → [X,Y,Z,None,None]
# dequeue(): item="X", queue[0]=None, front=1, size=2 → [None,Y,Z,None,None]
# enqueue("W"): rear=3, queue[3]="W", size=3 → [None,Y,Z,W,None]
# dequeue(): item="Y", queue[1]=None, front=2, size=2 → [None,None,Z,W,None]`,
    explanation: 'FIFO: X was added first so it dequeues first, then Y. front moves right with each dequeue, rear moves right with each enqueue.',
  },
  {
    title: 'Exercise 2 — Print Queue Simulation',
    difficulty: '🟡 Medium',
    description: 'Implement a print queue that: accepts documents until "done" is typed, processes (dequeues) one document at a time, shows "Queue Empty" when no documents remain',
    hints: [
      'Use a while True loop for input, break when "done" is typed',
      'Call enqueue() for each document name entered',
      'Use another loop to process: while not is_empty(): dequeue()',
      'Print each job as it is processed',
    ],
    solution: `MAXSIZE = 10
queue = [None] * MAXSIZE
front = 0
rear = -1
size = 0

def enqueue(item):
    global rear, size
    if size == MAXSIZE:
        print("Queue Full")
    else:
        rear = (rear + 1) % MAXSIZE
        queue[rear] = item
        size += 1

def dequeue():
    global front, size
    if size == 0:
        print("Queue Empty")
        return None
    item = queue[front]
    queue[front] = None
    front = (front + 1) % MAXSIZE
    size -= 1
    return item

def is_empty():
    return size == 0

# Add documents
print("Enter documents to print (type 'done' to finish):")
while True:
    doc = input("Document name: ")
    if doc.lower() == "done":
        break
    enqueue(doc)

# Process queue
print("\\nProcessing print jobs:")
while not is_empty():
    job = dequeue()
    print(f"Printing: {job}")
print("All jobs complete!")`,
    explanation: 'First all documents are added (enqueued), then they are processed in order (dequeued). First document in = first document printed!',
  },
  {
    title: 'Exercise 3 — Hot Potato Game',
    difficulty: '🔴 Hard',
    description: 'Simulate a Hot Potato game: N players sit in a circle, pass the potato M times, whoever holds it is eliminated, last player wins',
    hints: [
      'Use a queue to represent the circle of players',
      'Each "pass": dequeue from front, enqueue to rear (player moves to back)',
      'After M passes, dequeue the player holding the potato (they are out)',
      'Repeat until only 1 player remains',
    ],
    solution: `MAXSIZE = 20
queue = [None] * MAXSIZE
front = 0
rear = -1
size = 0

def enqueue(item):
    global rear, size
    if size < MAXSIZE:
        rear = (rear + 1) % MAXSIZE
        queue[rear] = item
        size += 1

def dequeue():
    global front, size
    if size > 0:
        item = queue[front]
        queue[front] = None
        front = (front + 1) % MAXSIZE
        size -= 1
        return item
    return None

# Add players
players = ["Ali", "Sara", "John", "Maria", "Tom"]
for p in players:
    enqueue(p)

passes = 3  # Pass potato 3 times before elimination

print("Hot Potato Game!")
round_num = 1
while size > 1:
    print(f"\\nRound {round_num}:")
    # Pass the potato 'passes' times
    for i in range(passes):
        player = dequeue()
        enqueue(player)  # Back of queue
    # Eliminate front player
    eliminated = dequeue()
    print(f"  {eliminated} is eliminated!")
    round_num += 1

winner = dequeue()
print(f"\\nWinner: {winner}!")`,
    explanation: 'The queue perfectly simulates a circle: dequeue from front (player passes potato) + enqueue to rear (player goes to back of circle). After N passes, the person at the front is eliminated.',
  },
];

export default function Py14Practice() {
  const [revealed, setRevealed] = useState<{ [key: number]: number }>({});
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        ✍️ Practice — Queue
      </h1>
      <p className="text-gray-500 text-lg mb-6">3 exercises from easy to hard</p>

      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-bold text-lg">{ex.title}</h2>
                <span className="text-white text-sm bg-white/20 px-3 py-1 rounded-full">{ex.difficulty}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">{ex.description}</p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-gray-700">💡 Hints</span>
                  <span className="text-xs text-gray-400">({revealed[i] || 0}/{ex.hints.length} revealed)</span>
                </div>
                <div className="space-y-2">
                  {ex.hints.map((hint, hi) => (
                    <div key={hi}>
                      {(revealed[i] || 0) > hi ? (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-800">
                          💡 {hint}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                {(revealed[i] || 0) < ex.hints.length && (
                  <button
                    onClick={() => setRevealed(prev => ({ ...prev, [i]: (prev[i] || 0) + 1 }))}
                    className="mt-2 text-sm text-amber-600 hover:text-amber-700 font-semibold border border-amber-200 rounded-lg px-4 py-1.5 hover:bg-amber-50 transition-colors"
                  >
                    Show Next Hint
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowSolution(prev => ({ ...prev, [i]: !prev[i] }))}
                className="mb-4 text-sm bg-emerald-600 text-white rounded-lg px-4 py-2 hover:bg-emerald-700 transition-colors font-semibold"
              >
                {showSolution[i] ? '🙈 Hide Solution' : '✅ Show Solution'}
              </button>

              {showSolution[i] && (
                <div>
                  <CodeBlock language="python" code={ex.solution} />
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <div className="font-bold text-blue-800 mb-1">💡 Explanation</div>
                    <p className="text-blue-700 text-sm">{ex.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
