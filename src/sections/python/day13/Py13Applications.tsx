import CodeBlock from '../../../components/CodeBlock';

export default function Py13Applications() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        🔧 Stack Applications
      </h1>
      <p className="text-gray-500 text-lg mb-8">Reverse a string + Check balanced brackets</p>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔄 Application 1: Reverse a String</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 text-sm font-semibold">💡 The Idea</p>
          <p className="text-blue-700 text-sm mt-1">Push each character onto the stack. Then pop them all off — they come out in REVERSE order because of LIFO!</p>
        </div>
        <CodeBlock language="python" code={`def reverse_string(text):
    MAXSIZE = len(text)
    stack = [None] * MAXSIZE
    top = -1

    # Push all characters
    for char in text:
        top += 1
        stack[top] = char

    # Pop all characters (comes out reversed!)
    result = ""
    while top != -1:
        result += stack[top]
        top -= 1

    return result

# Test
print(reverse_string("Hello"))    # olleH
print(reverse_string("Python"))   # nohtyP`} />

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Step</th>
                <th className="px-4 py-2 text-left">Action</th>
                <th className="px-4 py-2 text-left">Stack</th>
                <th className="px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['1', 'push "H"', '[H]', '""'],
                ['2', 'push "e"', '[H,e]', '""'],
                ['3', 'push "l"', '[H,e,l]', '""'],
                ['4', 'push "l"', '[H,e,l,l]', '""'],
                ['5', 'push "o"', '[H,e,l,l,o]', '""'],
                ['6', 'pop → "o"', '[H,e,l,l]', '"o"'],
                ['7', 'pop → "l"', '[H,e,l]', '"ol"'],
                ['8', 'pop → "l"', '[H,e]', '"oll"'],
                ['9', 'pop → "e"', '[H]', '"olle"'],
                ['10', 'pop → "H"', '[]', '"olleH"'],
              ].map(([step, action, stack, result]) => (
                <tr key={step} className={parseInt(step) > 5 ? 'bg-emerald-50' : 'bg-blue-50'}>
                  <td className="px-4 py-2 font-bold text-gray-700">{step}</td>
                  <td className="px-4 py-2 font-mono text-xs">{action}</td>
                  <td className="px-4 py-2 font-mono text-xs text-indigo-600">{stack}</td>
                  <td className="px-4 py-2 font-mono text-xs text-emerald-600">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔗 Application 2: Balanced Brackets</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-purple-800 text-sm font-semibold">💡 The Algorithm</p>
          <ul className="text-purple-700 text-sm mt-1 space-y-1">
            <li>• If you see an opening bracket <code>(</code> <code>[</code> <code>{`{`}</code> → push it</li>
            <li>• If you see a closing bracket → pop and check if it matches</li>
            <li>• At the end → stack must be empty</li>
          </ul>
        </div>
        <CodeBlock language="python" code={`def is_balanced(expression):
    stack = []
    opening = "([{"
    closing = ")]}"
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in expression:
        if char in opening:
            stack.append(char)
        elif char in closing:
            if len(stack) == 0:
                return False
            if stack[-1] != pairs[char]:
                return False
            stack.pop()

    return len(stack) == 0

# Tests
print(is_balanced("(())"))      # True
print(is_balanced("([{}])"))    # True
print(is_balanced("(]"))        # False
print(is_balanced("((()"))      # False`} />

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <p className="font-bold text-emerald-800 text-sm mb-2">✅ "(())" — Balanced</p>
            <div className="space-y-1 text-xs font-mono">
              <div>See '(' → push → ['(']</div>
              <div>See '(' → push → ['(','(']</div>
              <div>See ')' → pop '(' matches → ['(']</div>
              <div>See ')' → pop '(' matches → []</div>
              <div className="text-emerald-600 font-bold">Stack empty → TRUE ✅</div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="font-bold text-red-800 text-sm mb-2">❌ "(]" — Not Balanced</p>
            <div className="space-y-1 text-xs font-mono">
              <div>See '(' → push → ['(']</div>
              <div>See ']' → pop '(' </div>
              <div>pairs[']'] = '[' ≠ '('</div>
              <div className="text-red-600 font-bold">Mismatch → FALSE ❌</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
