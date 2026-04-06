import CodeBlock from '../../../components/CodeBlock';

export default function Py13Stack() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        📚 Stack Implementation
      </h1>
      <p className="text-gray-500 text-lg mb-8">Your exact Cambridge code — every line explained</p>

      <CodeBlock language="python" code={`MAXSIZE = 10
stack = [None] * MAXSIZE
top = -1

def push(item):
    global top
    if top == MAXSIZE - 1:
        print("Stack Overflow")
    else:
        top += 1
        stack[top] = item

def pop():
    global top
    if top == -1:
        print("Stack Underflow")
        return None
    item = stack[top]
    stack[top] = None
    top -= 1
    return item

def peek():
    if top == -1:
        return None
    return stack[top]

def is_empty():
    return top == -1

# Test
push("A")
push("B")
push("C")
print(pop())     # C
print(peek())    # B`} />

      <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3">
          <h2 className="text-white font-bold text-lg">Every Line Explained</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">What it does</th>
                <th className="px-4 py-3 text-left font-semibold">WHY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['MAXSIZE = 10', 'Sets maximum stack size', 'Prevents infinite memory use'],
                ['stack = [None] * 10', 'Creates empty stack array', 'Pre-allocate 10 slots'],
                ['top = -1', 'Stack is empty', '-1 means nothing in stack yet'],
                ['global top', 'Access global variable', 'Functions need to modify top'],
                ['if top == MAXSIZE - 1', 'Stack is full check', 'top=9 means all 10 slots used'],
                ['top += 1', 'Move pointer up', 'Make room for new item'],
                ['stack[top] = item', 'Store item at top', 'Place item in correct slot'],
                ['if top == -1', 'Stack is empty check', 'Cannot pop from empty stack'],
                ['stack[top] = None', 'Clear the slot', 'Good practice — remove old data'],
                ['top -= 1', 'Move pointer down', 'Forget the old top item'],
                ['return stack[top]', 'Look at top item', 'Peek without removing'],
                ['return top == -1', 'Return True/False', 'True if stack is empty'],
              ].map(([code, what, why]) => (
                <tr key={code} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-emerald-700 bg-emerald-50">{code}</td>
                  <td className="px-4 py-3 text-gray-700">{what}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3">
          <h2 className="text-white font-bold text-lg">📋 Trace Table: push A, B, C then pop, peek</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Operation</th>
                <th className="px-4 py-3 text-left font-semibold">top before</th>
                <th className="px-4 py-3 text-left font-semibold">top after</th>
                <th className="px-4 py-3 text-left font-semibold">stack state</th>
                <th className="px-4 py-3 text-left font-semibold">returns</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['push("A")', '-1', '0', '[A, None, None...]', '-'],
                ['push("B")', '0', '1', '[A, B, None...]', '-'],
                ['push("C")', '1', '2', '[A, B, C, None...]', '-'],
                ['pop()', '2', '1', '[A, B, None...]', '"C"'],
                ['peek()', '1', '1', '[A, B, None...]', '"B"'],
                ['is_empty()', '1', '1', '[A, B, None...]', 'False'],
              ].map(([op, before, after, state, ret]) => (
                <tr key={op} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-emerald-700">{op}</td>
                  <td className="px-4 py-3 text-center font-mono">{before}</td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-indigo-600">{after}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{state}</td>
                  <td className="px-4 py-3 text-center font-mono text-amber-600">{ret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="font-bold text-red-800 mb-3">❌ Common Mistakes</h3>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• Forgetting <code className="bg-red-100 px-1 rounded">global top</code> inside functions</li>
            <li>• Using <code className="bg-red-100 px-1 rounded">top = 0</code> instead of <code className="bg-red-100 px-1 rounded">top = -1</code></li>
            <li>• Checking <code className="bg-red-100 px-1 rounded">top == MAXSIZE</code> instead of <code className="bg-red-100 px-1 rounded">top == MAXSIZE - 1</code></li>
            <li>• Forgetting to set <code className="bg-red-100 px-1 rounded">stack[top] = None</code> after pop</li>
          </ul>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h3 className="font-bold text-emerald-800 mb-3">✅ Key Points</h3>
          <ul className="space-y-2 text-sm text-emerald-700">
            <li>• <code className="bg-emerald-100 px-1 rounded">top = -1</code> = empty stack</li>
            <li>• <code className="bg-emerald-100 px-1 rounded">top = MAXSIZE - 1</code> = full stack</li>
            <li>• Push increments top THEN stores</li>
            <li>• Pop reads THEN decrements top</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
