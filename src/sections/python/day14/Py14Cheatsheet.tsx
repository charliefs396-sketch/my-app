import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function Py14Cheatsheet() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; });

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        📋 Cheatsheet — Queue
      </h1>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Full Queue Template</h2>
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

def peek():
    if size == 0:
        return None
    return queue[front]

def is_empty():
    return size == 0

def is_full():
    return size == MAXSIZE`} />
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-emerald-50"><th className="px-4 py-2 text-left">Operation</th><th className="px-4 py-2 text-left">Code</th><th className="px-4 py-2 text-left">Effect</th></tr></thead>
            <tbody>
              {[
                ['Add item', 'enqueue(item)', 'rear moves right, size+1'],
                ['Remove item', 'dequeue()', 'front moves right, size-1, returns item'],
                ['See front', 'peek()', 'returns queue[front], no change'],
                ['Check empty', 'is_empty()', 'returns size == 0'],
                ['Check full', 'is_full()', 'returns size == MAXSIZE'],
                ['Wrap rear', '(rear+1) % MAXSIZE', 'circular movement'],
                ['Wrap front', '(front+1) % MAXSIZE', 'circular movement'],
              ].map(([op, code, effect], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 font-semibold text-gray-700">{op}</td>
                  <td className="px-4 py-2 font-mono text-xs text-emerald-700">{code}</td>
                  <td className="px-4 py-2 text-gray-600">{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Common Mistakes</h2>
        <div className="space-y-3">
          {[
            ['Using rear == MAXSIZE-1 to check full', 'Use size == MAXSIZE (circular queue!)'],
            ['Forgetting global keyword', 'global rear, size in enqueue; global front, size in dequeue'],
            ['Starting front at -1', 'front starts at 0, rear starts at -1'],
            ['Using size == 0 only for empty check', 'Also check front == rear only when size is tracked'],
            ['Not clearing slot after dequeue', 'Set queue[front] = None after saving item'],
          ].map(([wrong, right], i) => (
            <div key={i} className="grid md:grid-cols-2 gap-3">
              <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                <div className="text-xs font-bold text-red-600 mb-1">❌ Wrong</div>
                <div className="text-sm text-red-700">{wrong}</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                <div className="text-xs font-bold text-emerald-600 mb-1">✅ Right</div>
                <div className="text-sm text-emerald-700">{right}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">✅ Confidence Checklist</h2>
        <p className="text-sm text-gray-500 mb-4">{checked.size}/12 completed</p>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all" style={{ width: `${(checked.size / 12) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {[
            'I know FIFO means First In First Out',
            'I know enqueue adds to REAR',
            'I know dequeue removes from FRONT',
            'I can initialise: front=0, rear=-1, size=0',
            'I understand % MAXSIZE for circular wrapping',
            'I can check full: size == MAXSIZE',
            'I can check empty: size == 0',
            'I use global keyword in Python queue functions',
            'I can trace enqueue/dequeue operations',
            'I can draw the queue state after each operation',
            'I know peek() looks without removing',
            'I can explain why circular queue is better than linear',
          ].map((item, i) => (
            <button key={i} onClick={() => toggle(i)} className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${checked.has(i) ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${checked.has(i) ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}>
                {checked.has(i) && <span className="text-white text-xs">✓</span>}
              </div>
              <span className={`text-sm ${checked.has(i) ? 'text-emerald-700 line-through' : 'text-gray-700'}`}>{item}</span>
            </button>
          ))}
        </div>
        {checked.size === 12 && (
          <div className="mt-6 p-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl text-center">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-bold text-emerald-800">Queue Mastered! Ready for Day 15!</div>
          </div>
        )}
      </div>
    </div>
  );
}
