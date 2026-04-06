export default function D16Overview() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📋 Day 16: Trace Tables
      </h1>
      <p className="text-gray-500 text-lg mb-8">A Level Computer Science – Cambridge 9618 | CRITICAL for Paper 2</p>

      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-black text-red-800 mb-2">🚨 This Is The Most Important Exam Skill!</h2>
        <p className="text-red-700">Trace table questions appear in <strong>every Paper 2</strong>. They are worth 4–8 marks each. Many students lose ALL these marks because they don't know the technique. Master this today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[
          { icon: '📋', title: 'What is a Trace Table?', desc: 'A table that tracks the value of every variable at each step of an algorithm. You execute the code BY HAND, line by line.' },
          { icon: '🎯', title: 'Why do examiners use them?', desc: 'To test if you truly understand how code executes — not just whether you can write code, but whether you can READ and follow it.' },
          { icon: '📝', title: 'What goes in columns?', desc: 'Each variable gets its own column. You also include OUTPUT as a column. Loop counters always need their own column.' },
          { icon: '✅', title: 'What goes in rows?', desc: 'One row per significant change. When a variable changes value, write the new value. Leave blank if unchanged.' },
        ].map((c, i) => (
          <div key={i} className="card">
            <div className="text-2xl mb-2">{c.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📐 The 6-Step Trace Method</h2>
        <div className="space-y-3">
          {[
            { step: '1', action: 'Identify ALL variables', detail: 'Read the DECLARE statements. Each variable = one column in your table.' },
            { step: '2', action: 'Add an OUTPUT column', detail: 'Always have a column for OUTPUT — examiners check this carefully.' },
            { step: '3', action: 'Execute line by line', detail: 'Go through the code exactly as a computer would. No skipping!' },
            { step: '4', action: 'Write value when it changes', detail: 'Only write in a cell when that variable changes. Leave blank otherwise.' },
            { step: '5', action: 'Track loop counters carefully', detail: 'FOR loops: write the counter at the START of each iteration, not just when it changes.' },
            { step: '6', action: 'Check conditions explicitly', detail: 'For IF and WHILE — work out TRUE or FALSE for each condition, every time.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black flex-shrink-0">{s.step}</div>
              <div>
                <span className="font-bold text-gray-900">{s.action}: </span>
                <span className="text-gray-600 text-sm">{s.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">⚠️ Golden Rules for Exams</h3>
        <ul className="space-y-1 text-amber-700 text-sm">
          <li>• Never skip rows — show EVERY change, even inside loops</li>
          <li>• If a variable is declared but not changed yet, don't write anything</li>
          <li>• For OUTPUT: write the exact value that would appear on screen</li>
          <li>• Cross out wrong values neatly — don't use correction fluid in exams</li>
          <li>• When DIV or MOD is used, calculate it explicitly — don't rush</li>
        </ul>
      </div>
    </div>
  );
}
