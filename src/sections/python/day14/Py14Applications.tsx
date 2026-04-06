import CodeBlock from '../../../components/CodeBlock';

export default function Py14Applications() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        🔧 Queue Applications
      </h1>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Real-World Queue Uses</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: '🖨️', title: 'Print Queue', desc: 'Documents print in the order they were sent' },
            { icon: '🌐', title: 'Network Packets', desc: 'Data packets processed in arrival order' },
            { icon: '🎮', title: 'Game Events', desc: 'Player actions processed in order' },
            { icon: '📞', title: 'Call Centre', desc: 'Calls answered in the order received' },
          ].map((item) => (
            <div key={item.title} className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-bold text-emerald-800">{item.title}</div>
              <div className="text-sm text-emerald-700 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🖨️ Print Queue Simulation</h2>
        <CodeBlock language="python" code={`MAXSIZE = 5
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

# Simulate print queue
enqueue("Report.pdf")
enqueue("Photo.jpg")
enqueue("Letter.docx")

print("Processing print jobs:")
while size > 0:
    job = dequeue()
    print(f"Printing: {job}")`} />
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Pseudocode vs Python Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-bold">Operation</th>
                <th className="px-4 py-2 text-left font-bold text-indigo-600">Pseudocode</th>
                <th className="px-4 py-2 text-left font-bold text-emerald-600">Python</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Add item', 'Rear ← (Rear MOD MAXSIZE) + 1', 'rear = (rear + 1) % MAXSIZE'],
                ['Remove item', 'Front ← (Front MOD MAXSIZE) + 1', 'front = (front + 1) % MAXSIZE'],
                ['Check full', 'IF Size = MAXSIZE', 'if size == MAXSIZE:'],
                ['Check empty', 'IF Size = 0', 'if size == 0:'],
                ['Global vars', 'Declared at top', 'global rear, size'],
              ].map(([op, ps, py], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{op}</td>
                  <td className="px-4 py-2 font-mono text-xs text-indigo-700">{ps}</td>
                  <td className="px-4 py-2 font-mono text-xs text-emerald-700">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
