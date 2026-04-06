interface HomePageProps {
  onSelectTrack: (track: 'pseudocode' | 'python') => void;
  pseudocodeProgress: number;
  pythonProgress: number;
}

const pseudocodeDays = [
  { num: 1,  label: 'Variables, Constants & Data Types',  color: 'from-blue-500 to-indigo-500',    dot: 'bg-blue-500' },
  { num: 2,  label: 'Operators, DIV/MOD & Conversions',   color: 'from-violet-500 to-purple-500',  dot: 'bg-violet-500' },
  { num: 3,  label: 'Selection — IF & CASE Statements',   color: 'from-fuchsia-500 to-pink-500',   dot: 'bg-fuchsia-500' },
  { num: 4,  label: 'Loops — FOR, WHILE, REPEAT',         color: 'from-amber-500 to-orange-500',   dot: 'bg-amber-500' },
  { num: 5,  label: 'String Manipulation & ASCII',        color: 'from-teal-500 to-cyan-500',      dot: 'bg-teal-500' },
  { num: 6,  label: '1D Arrays',                          color: 'from-rose-500 to-pink-500',      dot: 'bg-rose-500' },
  { num: 7,  label: '2D Arrays',                          color: 'from-orange-500 to-red-500',     dot: 'bg-orange-500' },
  { num: 8,  label: 'Linear Search',                      color: 'from-sky-500 to-blue-500',       dot: 'bg-sky-500' },
  { num: 9,  label: 'Bubble Sort',                        color: 'from-pink-500 to-rose-500',      dot: 'bg-pink-500' },
  { num: 10, label: 'Procedures & Functions',             color: 'from-lime-500 to-green-500',     dot: 'bg-lime-500' },
  { num: 11, label: 'Records (TYPE...ENDTYPE)',            color: 'from-red-500 to-rose-600',       dot: 'bg-red-500' },
  { num: 12, label: 'File Handling (READ/WRITE/APPEND)',  color: 'from-orange-500 to-amber-500',   dot: 'bg-orange-500' },
  { num: 13, label: 'Stacks – LIFO, Push, Pop, Peek',      color: 'from-violet-500 to-indigo-500', dot: 'bg-violet-500' },
  { num: 14, label: 'Queues – FIFO, Circular, MOD Formula',color: 'from-emerald-500 to-teal-500',  dot: 'bg-emerald-500' },
  { num: 15, label: 'Linked Lists – Nodes, Pointers, Insert', color: 'from-cyan-500 to-teal-500',   dot: 'bg-cyan-500' },
  { num: 16, label: 'Trace Tables – Critical Paper 2 Skill', color: 'from-purple-500 to-violet-500', dot: 'bg-purple-500' },
  { num: 17, label: 'Identifier Tables & Algorithm Design', color: 'from-sky-500 to-blue-500',     dot: 'bg-sky-500' },
  { num: 18, label: 'Structure Charts + Flowcharts',       color: 'from-pink-500 to-rose-500',     dot: 'bg-pink-500' },
  { num: 19, label: 'Testing & Test Data',                  color: 'from-red-500 to-rose-500',      dot: 'bg-red-500' },
  { num: 20, label: 'Program Development Life Cycle',       color: 'from-emerald-500 to-teal-500',  dot: 'bg-emerald-500' },
  { num: 21, label: 'State-Transition Diagrams',            color: 'from-sky-500 to-blue-500',      dot: 'bg-sky-500' },
  { num: 22, label: 'Past Paper Practice (Days 1–7)',       color: 'from-slate-400 to-gray-500',    dot: 'bg-slate-400' },
  { num: 23, label: 'Past Paper Practice (Days 8–14)',      color: 'from-slate-400 to-gray-500',    dot: 'bg-slate-400' },
  { num: 24, label: 'Past Paper Practice (Days 15–18)',     color: 'from-slate-400 to-gray-500',    dot: 'bg-slate-400' },
  { num: 25, label: 'Full Mixed Past Paper Practice',       color: 'from-slate-400 to-gray-500',    dot: 'bg-slate-400' },
  { num: 26, label: 'Binary Search Algorithm',              color: 'from-violet-500 to-purple-600', dot: 'bg-violet-500' },
  { num: 27, label: 'Insertion Sort',                       color: 'from-fuchsia-500 to-purple-600', dot: 'bg-fuchsia-500' },
  { num: 28, label: 'Recursion',                             color: 'from-violet-500 to-indigo-600',  dot: 'bg-violet-500' },
  { num: 29, label: 'Final Review (All Topics)',             color: 'from-yellow-500 to-orange-500',  dot: 'bg-yellow-500' },
  { num: 30, label: 'Final Exam + Past Papers',             color: 'from-yellow-500 to-red-500',     dot: 'bg-red-500' },
];

export default function HomePage({ onSelectTrack, pseudocodeProgress, pythonProgress }: HomePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20">
      <div className="max-w-5xl w-full animate-fade-in-up">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            A Level CS Hub
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Your revision companion for Cambridge 9618. Master <strong>Pseudocode</strong> and <strong>Python</strong> side by side.
          </p>
          <p className="text-sm text-gray-400 mt-2">30-Day Study Plan · Variables · Operators · Data Types · Algorithms & More</p>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* ─── Pseudocode Card ─── */}
          <div
            onClick={() => onSelectTrack('pseudocode')}
            className="bg-white rounded-3xl border-2 border-indigo-100 hover:border-indigo-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden group"
          >
            {/* Card top bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="p-6">
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">📝</div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-800">Pseudocode</h2>
                    <p className="text-gray-400 text-xs">Cambridge 9618 · Paper 1 & 2</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-indigo-600">{pseudocodeProgress}%</span>
                  <p className="text-gray-400 text-xs">complete</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                  style={{ width: `${pseudocodeProgress}%` }}
                />
              </div>

              {/* Day list — compact, scrollable */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Study Days</p>
                  <span className="text-xs text-gray-400">30 of 30 available (Days 1–30) 🎉</span>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                  {pseudocodeDays.map(day => (
                    <div
                      key={day.num}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all"
                    >
                      {/* Day number badge */}
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${day.color} flex items-center justify-center text-white font-extrabold text-[10px] flex-shrink-0 shadow-sm`}>
                        {day.num}
                      </div>
                      {/* Label */}
                      <span className="text-xs font-medium text-gray-600 leading-tight">{day.label}</span>
                    </div>
                  ))}
                  {/* Upcoming placeholder */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gray-50 border border-dashed border-gray-200">
                    <div className="w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 font-extrabold text-[10px] flex-shrink-0">
                      +
                    </div>
                    <span className="text-xs text-gray-400 italic">More days coming soon...</span>
                  </div>
                </div>
              </div>

              {/* Topic tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['DECLARE', 'DIV/MOD', 'IF/CASE', 'FOR/WHILE', 'Strings', 'Arrays', 'Search', 'Sort', 'Functions'].map(t => (
                  <span key={t} className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-semibold border border-indigo-100">
                    {t}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] text-sm">
                {pseudocodeProgress > 0 ? '▶ Continue Learning' : '🚀 Start Learning'}
              </button>
            </div>
          </div>

          {/* ─── Python Card ─── */}
          <div
            onClick={() => onSelectTrack('python')}
            className="bg-white rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden group"
          >
            {/* Card top bar */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500" />

            <div className="p-6">
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🐍</div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-800">Python</h2>
                    <p className="text-gray-400 text-xs">Cambridge 9618 · Paper 4</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-600">{pythonProgress}%</span>
                  <p className="text-gray-400 text-xs">complete</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
                  style={{ width: `${pythonProgress}%` }}
                />
              </div>

              {/* Python days */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Study Days</p>
                  <span className="text-xs text-gray-400">19 of 30 available</span>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {[
                    { num: 1, label: 'Setup, First Program, Variables & Input',    color: 'from-emerald-500 to-teal-500',  textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                    { num: 2, label: 'Operators: Arithmetic, Comparison, Logical', color: 'from-green-500 to-emerald-600',  textColor: 'text-green-700',   bg: 'bg-green-50',   border: 'border-green-100'   },
                    { num: 3, label: 'IF Statements: if, elif, else, Nested',      color: 'from-teal-500 to-cyan-500',     textColor: 'text-teal-700',    bg: 'bg-teal-50',    border: 'border-teal-100'    },
                    { num: 4, label: 'Loops: for, while, range(), break',           color: 'from-cyan-500 to-blue-500',     textColor: 'text-cyan-700',    bg: 'bg-cyan-50',    border: 'border-cyan-100'    },
                    { num: 5, label: 'Strings: Indexing, Slicing, Methods, ASCII', color: 'from-violet-500 to-purple-500', textColor: 'text-violet-700',  bg: 'bg-violet-50',  border: 'border-violet-100'  },
                     { num: 6, label: 'Lists: Methods, Loops, Patterns',           color: 'from-rose-500 to-pink-500',    textColor: 'text-rose-700',    bg: 'bg-rose-50',    border: 'border-rose-100'    },
                     { num: 7, label: '2D Lists: Comprehension, Nested Loops',    color: 'from-teal-500 to-cyan-500',    textColor: 'text-teal-700',    bg: 'bg-teal-50',    border: 'border-teal-100'    },
                     { num: 8, label: 'Functions & Procedures: def, scope, global', color: 'from-violet-500 to-purple-500', textColor: 'text-violet-700',  bg: 'bg-violet-50', border: 'border-violet-100'  },
                     { num: 9, label: 'Linear Search: Search, Count, Find All',       color: 'from-amber-500 to-orange-500', textColor: 'text-amber-700',   bg: 'bg-amber-50',  border: 'border-amber-100'   },
                     { num: 10, label: 'Bubble Sort: Algorithm, Variations, Tuples',  color: 'from-rose-500 to-red-500',     textColor: 'text-rose-700',    bg: 'bg-rose-50',   border: 'border-rose-100'    },
                     { num: 11, label: 'File Handling: Read, Write, Append, Delete',  color: 'from-emerald-500 to-teal-500', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                     { num: 12, label: 'Records using Classes: class, __init__, self',  color: 'from-teal-500 to-cyan-500', textColor: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100' },
                     { num: 13, label: 'Stack: LIFO, push(), pop(), peek(), applications', color: 'from-emerald-500 to-teal-500', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                     { num: 14, label: 'Queue: FIFO, enqueue(), dequeue(), circular queue', color: 'from-teal-500 to-emerald-600', textColor: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100' },
                     { num: 15, label: 'Binary Search: low/high/mid, trace tables, O(log n)', color: 'from-cyan-500 to-blue-500', textColor: 'text-cyan-700', bg: 'bg-cyan-50', border: 'border-cyan-100' },
                     { num: 16, label: 'Insertion Sort: key, j pointer, shifting, descending', color: 'from-indigo-500 to-violet-500', textColor: 'text-indigo-700', bg: 'bg-indigo-50', border: 'border-indigo-100' },
                     { num: 17, label: 'Recursion: base case, recursive case, tracing', color: 'from-violet-500 to-indigo-600', textColor: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-100' },
                     { num: 18, label: 'Linked Lists: nodes, head, insert, search, delete', color: 'from-sky-500 to-cyan-600', textColor: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-100' },
                     { num: 19, label: 'Binary Trees: BST insert, search, traversal', color: 'from-emerald-500 to-sky-600', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                    ].map(day => (
                    <div key={day.num} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${day.bg} border ${day.border}`}>
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${day.color} flex items-center justify-center text-white font-extrabold text-[10px] flex-shrink-0 shadow-sm`}>{day.num}</div>
                      <span className={`text-xs font-medium ${day.textColor}`}>{day.label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gray-50 border border-dashed border-gray-200">
                    <div className="w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 font-extrabold text-[10px] flex-shrink-0">+</div>
                    <span className="text-xs text-gray-400 italic">More days coming soon...</span>
                  </div>
                </div>
              </div>

              {/* Topic tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Setup', 'print()', 'Operators', 'if/elif', 'for/while', 'Strings', 'ASCII', 'Quiz'].map(t => (
                  <span key={t} className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-semibold border border-emerald-100">
                    {t}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] text-sm">
                {pythonProgress > 0 ? '▶ Continue Learning' : '🚀 Start Learning'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-100">
            <div>
              <p className="text-2xl font-black text-gray-800">{Math.round((pseudocodeProgress + pythonProgress) / 2)}%</p>
              <p className="text-xs text-gray-500 mt-0.5">Overall Progress</p>
            </div>
            <div>
              <p className="text-2xl font-black text-indigo-600">96</p>
              <p className="text-xs text-gray-500 mt-0.5">Pseudocode Topics</p>
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-600">118</p>
              <p className="text-xs text-gray-500 mt-0.5">Python Topics</p>
            </div>
            <div>
              <p className="text-2xl font-black text-amber-600">30</p>
              <p className="text-xs text-gray-500 mt-0.5">Day Study Plan</p>
            </div>
          </div>
        </div>

        {/* Bottom tip */}
        <p className="text-center text-sm text-gray-400 mt-5">
          💡 <strong>Pro tip:</strong> Learn the pseudocode concept first, then see how Python does the same thing. That's the fastest way to master both!
        </p>
      </div>
    </div>
  );
}
