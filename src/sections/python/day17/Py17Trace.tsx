import CodeBlock from '../../../components/CodeBlock';

export default function Py17Trace() {
  const recursiveBinarySearch = `def binary_search_recursive(data, target, low, high):
    if low > high:
        return -1

    mid = (low + high) // 2

    if data[mid] == target:
        return mid
    elif data[mid] < target:
        return binary_search_recursive(data, target, mid + 1, high)
    else:
        return binary_search_recursive(data, target, low, mid - 1)`;

  const reverseString = `def reverse_string(text):
    if text == "":
        return ""
    return reverse_string(text[1:]) + text[0]

print(reverse_string("hello"))  # olleh`;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Trace Tables & Harder Recursive Patterns</h2>
      <p className="text-gray-600 mb-6">This is where recursion becomes easier: trace the calls one by one.</p>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">🔍 Trace: fibonacci(5)</h3>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-800 leading-relaxed">
          fibonacci(5)
          <br />= fibonacci(4) + fibonacci(3)
          <br />= (fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))
          <br />= ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))) + ((fibonacci(1) + fibonacci(0)) + 1)
          <br />= ((1 + 1) + (1 + 0)) + ((1 + 0) + 1)
          <br />= (2 + 1) + (1 + 1)
          <br />= 3 + 2
          <br />= 5
        </div>
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          Notice that <code>fibonacci(2)</code> and <code>fibonacci(3)</code> get calculated more than once. That is why recursive Fibonacci is elegant but not very efficient.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">🔎 Recursive Binary Search</h3>
        <p className="text-sm text-gray-700 mb-4">You already know binary search with a loop. Here is the recursive version:</p>
        <CodeBlock code={recursiveBinarySearch} language="python" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">🔤 Recursive String Reversal</h3>
        <CodeBlock code={reverseString} language="python" />
        <div className="mt-4 bg-violet-50 border border-violet-100 rounded-lg p-4 text-sm text-gray-700">
          <strong>How it works:</strong> remove the first character, reverse the rest, then add the first character at the end.
        </div>
      </div>
    </div>
  );
}
