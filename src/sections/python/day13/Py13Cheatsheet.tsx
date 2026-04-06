import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py13Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const checklist = [
    "I know LIFO means Last In First Out",
    "I know top = -1 means stack is empty in Python",
    "I know top == MAXSIZE - 1 means stack is full",
    "I can write the push() function from memory",
    "I can write the pop() function from memory",
    "I can write peek() and is_empty() functions",
    "I know why 'global top' is needed in Python",
    "I can trace push/pop operations in a table",
    "I can use a stack to reverse a string",
    "I can use a stack to check balanced brackets",
    "I know the difference between Overflow and Underflow",
    "I know the difference between pop() and peek()",
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet – Stacks in Python
      </h1>
      <p className="text-gray-500 text-lg mb-8">Complete reference for Day 13</p>

      <CodeBlock language="python" code={`# COMPLETE STACK IMPLEMENTATION
MAXSIZE = 10
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
    if top == -1: return None
    return stack[top]

def is_empty():
    return top == -1

def is_full():
    return top == MAXSIZE - 1`} />

      <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3">
          <h2 className="text-white font-bold">Quick Reference</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Operation</th>
                <th className="px-4 py-3 text-left">Python</th>
                <th className="px-4 py-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Push item', 'push("A")', 'top increases by 1'],
                ['Pop item', 'item = pop()', 'top decreases by 1'],
                ['Peek top', 'item = peek()', 'top unchanged'],
                ['Check empty', 'is_empty()', 'True if top == -1'],
                ['Check full', 'is_full()', 'True if top == MAXSIZE-1'],
                ['Stack Overflow', 'push() when full', 'Print error, do nothing'],
                ['Stack Underflow', 'pop() when empty', 'Print error, return None'],
              ].map(([op, code, result]) => (
                <tr key={op} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{op}</td>
                  <td className="px-4 py-3 font-mono text-xs text-emerald-700 bg-emerald-50">{code}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">✅ Day 13 Confidence Checklist</h3>
        <p className="text-sm text-gray-500 mb-4">Tick each item when you're confident:</p>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggle(i)}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  checked.has(i) ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 group-hover:border-emerald-400'
                }`}
              >
                {checked.has(i) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className={`text-sm ${checked.has(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-bold text-emerald-600">{checked.size}/{checklist.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(checked.size / checklist.length) * 100}%` }} />
          </div>
          {checked.size === checklist.length && (
            <p className="text-center text-emerald-600 font-bold mt-3">🎉 Day 13 Complete! Ready for Day 14!</p>
          )}
        </div>
      </div>
    </div>
  );
}
