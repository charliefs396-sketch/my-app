export default function Py14ExamFAQ() {
  const faqs = [
    { q: 'Why use size instead of calculating from front and rear?', a: 'In a circular queue, front and rear can wrap around, making size calculation from them complex. Using a separate size variable is simpler and clearer.' },
    { q: 'What is the difference between Queue Full and Stack Overflow?', a: 'Both mean the data structure is full. Queue Full = size == MAXSIZE. Stack Overflow = top == MAXSIZE-1. Different variable names but same concept.' },
    { q: 'Why does rear start at -1 but front starts at 0?', a: 'rear = -1 means no items added yet. On first enqueue, rear becomes (−1+1)%MAXSIZE = 0. front = 0 is ready to read when items are added.' },
    { q: 'What happens to front and rear in a circular queue after many operations?', a: 'They wrap around using % MAXSIZE. rear goes 0→1→2→3→4→0→1... and front does the same. This prevents wasted space.' },
    { q: 'Why do we set queue[front] = None after dequeue?', a: 'It clears the slot to free memory and makes the queue state easier to visualize in trace tables. Not strictly necessary but good practice.' },
    { q: 'Can queue[front] ever equal queue[rear] when items exist?', a: 'Yes! When size == 1, front == rear (both point to the same single item). This is normal and not an error.' },
    { q: 'What does global mean in Python queue functions?', a: 'It tells Python to use the global variables (front, rear, size) rather than creating local copies. Without global, the function cannot modify them.' },
    { q: 'Queue vs Stack — which one should I use?', a: 'Use Queue when order matters (first come first served). Use Stack for undo/redo, backtracking, or reversing. Queue = FIFO, Stack = LIFO.' },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Queue
      </h1>
      <p className="text-gray-500 text-lg mb-6">Common exam questions and tricky points</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700 font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q: {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A: {faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-emerald-800 mb-3">💡 Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'FIFO = First In, First Out',
            'Enqueue adds to REAR',
            'Dequeue removes from FRONT',
            '% MAXSIZE makes it circular',
            'size tracks number of items',
            'Full: size == MAXSIZE',
            'Empty: size == 0',
            'global keyword needed in Python',
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-emerald-700">
              <span className="text-emerald-500">✓</span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
