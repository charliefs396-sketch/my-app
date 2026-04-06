import CodeBlock from '../../../components/CodeBlock';

export default function Py18LinkedList() {
  const code = `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
    
    def search(self, target):
        current = self.head
        while current:
            if current.data == target:
                return True
            current = current.next
        return False
    
    def delete(self, target):
        if not self.head:
            return
        if self.head.data == target:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == target:
                current.next = current.next.next
                return
            current = current.next`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">🧩 Building a Linked List</h1>
        <p className="text-gray-600 text-lg">Your exact linked list code, with the main ideas explained clearly.</p>
      </div>

      <CodeBlock code={code} language="python" />

      <div className="grid gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How insert works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Create a new node.</li>
            <li>Make its <code>next</code> point to the current head.</li>
            <li>Move <code>head</code> so it points to the new node.</li>
          </ol>
          <p className="mt-3 text-sm text-gray-500">This inserts at the <strong>start</strong> of the list, so the newest item becomes the first item.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How search works</h2>
          <p className="text-gray-700 leading-relaxed">
            Start at the head. Compare the current node’s data with the target. If it matches, return <code>True</code>.
            If not, move to the next node. If you reach <code>None</code>, the value is not in the list.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How delete works</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>If the list is empty, do nothing.</li>
            <li>If the first node contains the target, move <code>head</code> to the next node.</li>
            <li>Otherwise, walk through the list until <code>current.next</code> is the target, then skip it.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
