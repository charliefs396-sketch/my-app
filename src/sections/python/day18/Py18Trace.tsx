import CodeBlock from '../../../components/CodeBlock';

export default function Py18Trace() {
  const traceCode = `ll = LinkedList()
ll.insert("C")
ll.insert("B")
ll.insert("A")
ll.display()        # A -> B -> C -> None
ll.delete("B")
ll.display()        # A -> C -> None`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">📋 Trace Through the Example</h1>
        <p className="text-gray-600 text-lg">Follow how the list changes after each command.</p>
      </div>

      <CodeBlock code={traceCode} language="python" />

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-600">
              <th className="py-2 pr-4">Step</th>
              <th className="py-2 pr-4">Action</th>
              <th className="py-2 pr-4">List state</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">Create empty list</td><td className="py-2 pr-4">None</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">insert("C")</td><td className="py-2 pr-4">C -&gt; None</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">insert("B")</td><td className="py-2 pr-4">B -&gt; C -&gt; None</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">insert("A")</td><td className="py-2 pr-4">A -&gt; B -&gt; C -&gt; None</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">5</td><td className="py-2 pr-4">delete("B")</td><td className="py-2 pr-4">A -&gt; C -&gt; None</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h2 className="text-xl font-bold text-amber-900 mb-2">Key idea</h2>
        <p className="text-amber-800 leading-relaxed">
          Because insertion happens at the front, the list appears in reverse order of insertion.
          Insert C, then B, then A gives <strong>A -&gt; B -&gt; C</strong>.
        </p>
      </div>
    </div>
  );
}
