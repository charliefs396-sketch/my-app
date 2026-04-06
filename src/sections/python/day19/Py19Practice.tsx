import CodeBlock from '../../../components/CodeBlock';

export default function Py19Practice() {
  const q1 = `# Practice 1: insert these values
[10, 5, 15, 3, 7, 12, 20]

# Draw the BST and give the in-order output`;

  const q2 = `# Practice 2: search trace
# Use the tree above and trace search(7) and search(13)`;

  const q3 = `# Practice 3: add a count_nodes method
# Return how many nodes are in the tree`;

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">✍️ Practice</h1>
        <p className="text-gray-600">Work through these tree questions slowly. Drawing the tree helps a lot.</p>
      </div>

      <div className="card">
        <h3 className="font-bold mb-3">1. Build and traverse</h3>
        <CodeBlock language="python" code={q1} />
      </div>

      <div className="card">
        <h3 className="font-bold mb-3">2. Trace searching</h3>
        <CodeBlock language="python" code={q2} />
      </div>

      <div className="card">
        <h3 className="font-bold mb-3">3. Extend the class</h3>
        <CodeBlock language="python" code={q3} />
      </div>

      <div className="card bg-emerald-50 border border-emerald-200">
        <h3 className="font-bold text-emerald-900 mb-2">Suggested answers</h3>
        <ul className="list-disc pl-5 text-sm text-emerald-800 space-y-1">
          <li>Practice 1 in-order output should be sorted.</li>
          <li>Practice 2 should show only one path being checked, not every node.</li>
          <li>Practice 3 is a good recursion exercise.</li>
        </ul>
      </div>
    </div>
  );
}
