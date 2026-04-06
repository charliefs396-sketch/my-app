import CodeBlock from '../../../components/CodeBlock';

export default function Py14Queue() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        🔧 Queue Implementation
      </h1>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Exact Cambridge Code — Every Line Explained</h2>
        <CodeBlock language="python" code={`MAXSIZE = 5
queue = [None] * MAXSIZE   # Fixed-size array
front = 0                  # Points to FRONT element
rear = -1                  # Points to REAR element
size = 0                   # Current number of items

def enqueue(item):
    global rear, size
    if size == MAXSIZE:        # Queue full check
        print("Queue Full")
    else:
        rear = (rear + 1) % MAXSIZE   # Wrap around!
        queue[rear] = item
        size += 1

def dequeue():
    global front, size
    if size == 0:             # Queue empty check
        print("Queue Empty")
        return None
    item = queue[front]       # Get front item
    queue[front] = None       # Clear the slot
    front = (front + 1) % MAXSIZE  # Wrap around!
    size -= 1
    return item

def peek():
    if size == 0:
        return None
    return queue[front]       # Look without removing

def is_empty():
    return size == 0

def is_full():
    return size == MAXSIZE`} />

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="px-4 py-2 text-left font-bold">Line</th>
                <th className="px-4 py-2 text-left font-bold">What it does</th>
                <th className="px-4 py-2 text-left font-bold">WHY</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['front = 0', 'Points to first item', 'Queue starts at index 0'],
                ['rear = -1', 'No items yet', 'Will become 0 on first enqueue'],
                ['size = 0', 'Track count separately', 'Easier than calculating from front/rear'],
                ['size == MAXSIZE', 'Full check', 'Use size not rear (circular!)'],
                ['(rear+1) % MAXSIZE', 'Circular wrap', 'Wraps 4→0 for MAXSIZE=5'],
                ['size == 0', 'Empty check', 'Use size not front/rear'],
                ['(front+1) % MAXSIZE', 'Circular wrap', 'Wraps 4→0 for MAXSIZE=5'],
                ['queue[front] = None', 'Clear slot', 'Good practice to free memory'],
              ].map(([line, what, why], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-mono text-emerald-700 text-xs">{line}</td>
                  <td className="px-4 py-2 text-gray-700">{what}</td>
                  <td className="px-4 py-2 text-gray-500">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Full Trace Table</h2>
        <p className="text-gray-600 text-sm mb-4">Tracing: enqueue("A"), enqueue("B"), enqueue("C"), dequeue(), enqueue("D"), dequeue() — MAXSIZE = 5</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-50">
                <th className="px-3 py-2 text-left font-bold">Operation</th>
                <th className="px-3 py-2 text-left font-bold">front</th>
                <th className="px-3 py-2 text-left font-bold">rear</th>
                <th className="px-3 py-2 text-left font-bold">size</th>
                <th className="px-3 py-2 text-left font-bold">Queue State</th>
                <th className="px-3 py-2 text-left font-bold">Returns</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Initial', '0', '-1', '0', '[None,None,None,None,None]', '-'],
                ['enqueue("A")', '0', '0', '1', '[A,None,None,None,None]', '-'],
                ['enqueue("B")', '0', '1', '2', '[A,B,None,None,None]', '-'],
                ['enqueue("C")', '0', '2', '3', '[A,B,C,None,None]', '-'],
                ['dequeue()', '1', '2', '2', '[None,B,C,None,None]', '"A"'],
                ['enqueue("D")', '1', '3', '3', '[None,B,C,D,None]', '-'],
                ['dequeue()', '2', '3', '2', '[None,None,C,D,None]', '"B"'],
              ].map(([op, f, r, s, q, ret], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 font-mono text-xs text-emerald-700">{op}</td>
                  <td className="px-3 py-2 text-center font-bold">{f}</td>
                  <td className="px-3 py-2 text-center font-bold">{r}</td>
                  <td className="px-3 py-2 text-center font-bold">{s}</td>
                  <td className="px-3 py-2 font-mono text-xs text-gray-600">{q}</td>
                  <td className="px-3 py-2 text-center font-bold text-blue-600">{ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 The Circular Queue — WHY % MAXSIZE?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <div className="font-bold text-red-800 mb-2">❌ Linear Queue Problem</div>
            <p className="text-red-700 text-sm">After many enqueue/dequeue operations, rear reaches the end even though there's space at the front — wasted space!</p>
            <div className="mt-3 font-mono text-xs bg-red-100 rounded p-2 text-red-800">
              [None, None, None, C, D]<br/>
              front=3, rear=4<br/>
              rear+1 = 5 → OUT OF BOUNDS!
            </div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
            <div className="font-bold text-emerald-800 mb-2">✅ Circular Queue Solution</div>
            <p className="text-emerald-700 text-sm">% MAXSIZE wraps rear back to 0 when it reaches the end — no wasted space!</p>
            <div className="mt-3 font-mono text-xs bg-emerald-100 rounded p-2 text-emerald-800">
              rear = (rear+1) % 5<br/>
              If rear=4: (4+1)%5 = 0 ✅<br/>
              Wraps back to start!
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-gray-900 mb-3">Circular Queue Wrap Examples</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">rear before</th>
                  <th className="px-4 py-2 text-left">Formula</th>
                  <th className="px-4 py-2 text-left">rear after</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0', '(0+1) % 5', '1'],
                  ['1', '(1+1) % 5', '2'],
                  ['3', '(3+1) % 5', '4'],
                  ['4', '(4+1) % 5', '0 ← wraps!'],
                ].map(([b, f, a], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 font-mono text-blue-700">{b}</td>
                    <td className="px-4 py-2 font-mono text-emerald-700">{f}</td>
                    <td className="px-4 py-2 font-mono font-bold text-gray-900">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
