import CodeBlock from '../../components/CodeBlock';

export default function D18Flowcharts() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🔷 Flowchart Symbols</h2>

      {/* Symbol Table */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">📋 The 5 Symbols — MEMORISE ALL OF THEM</h3>
        <div className="space-y-3">
          {[
            { shape: '( Start / End )', name: 'Rounded Rectangle (Terminal)', meaning: 'Start or End of the algorithm', color: 'bg-green-50 border-green-200', textColor: 'text-green-800', example: 'START or STOP' },
            { shape: '/ Input or Output /', name: 'Parallelogram', meaning: 'Input from user OR Output to screen', color: 'bg-blue-50 border-blue-200', textColor: 'text-blue-800', example: 'INPUT Name  OR  OUTPUT "Hello"' },
            { shape: '[ Process ]', name: 'Rectangle', meaning: 'Any processing step (assignment, calculation)', color: 'bg-purple-50 border-purple-200', textColor: 'text-purple-800', example: 'Total ← Total + Mark' },
            { shape: '◇ Decision ◇', name: 'Diamond', meaning: 'A YES/NO question (condition/comparison)', color: 'bg-amber-50 border-amber-200', textColor: 'text-amber-800', example: 'Mark >= 50? with YES and NO arrows' },
            { shape: '→ Arrow →', name: 'Arrow (Flow Line)', meaning: 'Shows the direction of flow', color: 'bg-gray-50 border-gray-200', textColor: 'text-gray-800', example: 'Connects all shapes together' },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border ${item.color} flex gap-4 items-start`}>
              <div className="font-mono font-bold text-lg min-w-[160px] text-center">{item.shape}</div>
              <div className="flex-1">
                <p className={`font-bold ${item.textColor}`}>{item.name}</p>
                <p className={`text-sm ${item.textColor} opacity-80`}>{item.meaning}</p>
                <p className={`text-xs mt-1 ${item.textColor} opacity-70`}>Example: {item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grade Calculator Flowchart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">📊 Example Flowchart: Grade Calculator</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-gray-600 mb-3 text-sm">The Flowchart:</p>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-green-300">
              <pre>{`
    ╔═══════════╗
    ║   START   ║  ← Rounded rectangle
    ╚═════╤═════╝
          │
    ╔═════╧══════════╗
    ║ INPUT Mark     ║  ← Parallelogram
    ╚═════╤══════════╝
          │
    ◇─────┴──────────◇
    │  Mark >= 80?   │  ← Diamond
    ◇────────────────◇
    │ YES        │ NO
    │            │
╔═══╧═══╗    ◇───┴──────────◇
║Grade←A║    │  Mark >= 60? │
╚═══╤═══╝    ◇──────────────◇
    │        │ YES      │ NO
    │        │          │
    │   ╔════╧═══╗  ╔═══╧═══╗
    │   ║Grade←B ║  ║Grade←C║
    │   ╚════╤═══╝  ╚═══╤═══╝
    │        │          │
    └────────┴──────────┘
                │
    ╔═══════════╧════════╗
    ║ OUTPUT Grade       ║  ← Parallelogram
    ╚═══════════╤════════╝
                │
    ╔═══════════╧═══╗
    ║     STOP      ║
    ╚═══════════════╝`}</pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-3 text-sm">The Pseudocode (same thing!):</p>
            <CodeBlock language="pseudocode" code={`INPUT Mark

IF Mark >= 80
   THEN
      Grade ← 'A'
   ELSE
      IF Mark >= 60
         THEN
            Grade ← 'B'
         ELSE
            Grade ← 'C'
      ENDIF
ENDIF

OUTPUT Grade`} />
          </div>
        </div>
      </div>

      {/* Loop Flowchart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-gray-800 text-lg mb-4">🔄 How to Show Loops in Flowcharts</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold text-blue-600 text-sm mb-2">FOR Loop</p>
            <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-green-300">
              <pre>{`╔══════════╗
║  START   ║
╚════╤═════╝
     │
╔════╧═════╗
║ i ← 1   ║
╚════╤═════╝
     │
◇────┴──────◇
│  i <= 10? │
◇───────────◇
│YES    │NO
│       └──→ STOP
╔╧══════════╗
║ OUTPUT i  ║
╚═══╤═══════╝
╔═══╧═══════╗
║ i ← i + 1║
╚═══╤═══════╝
    └──→(back to
         diamond)`}</pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-purple-600 text-sm mb-2">WHILE Loop</p>
            <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-green-300">
              <pre>{`╔══════════╗
║  START   ║
╚════╤═════╝
     │
╔════╧════════╗
║INPUT Password║
╚════╤════════╝
     │
◇────┴──────────◇
│Pass<>"secret"?│
◇───────────────◇
│YES        │NO
│           └─→continue
╔╧═════════════╗
║INPUT Password ║
╚═══╤═══════════╝
    └─→(back to
        diamond)`}</pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-rose-600 text-sm mb-2">REPEAT Loop</p>
            <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-green-300">
              <pre>{`╔══════════╗
║  START   ║
╚════╤═════╝
     │
╔════╧══════════╗
║INPUT Number   ║ ← runs
╚════╤══════════╝    FIRST!
     │
◇────┴──────────◇
│  Number > 0?  │
◇───────────────◇
│NO         │YES
└→(back     └─→continue
  to INPUT)`}</pre>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700">
          <strong>⚠️ Key Difference:</strong> In a WHILE loop, the diamond (condition) comes BEFORE the process box. In a REPEAT loop, the process box comes BEFORE the diamond!
        </div>
      </div>

      {/* Exam tips */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-bold text-green-800 mb-3">✅ Exam Drawing Tips</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-green-700">
          <div className="space-y-2">
            <p>• Always start with START and end with STOP</p>
            <p>• Diamonds MUST have exactly 2 exit paths (YES and NO)</p>
            <p>• Label both exits of every diamond</p>
            <p>• Arrows must have direction markers</p>
          </div>
          <div className="space-y-2">
            <p>• Parallelogram for BOTH input AND output</p>
            <p>• Never put a condition in a rectangle</p>
            <p>• Loop back arrows go to the LEFT side typically</p>
            <p>• Keep it neat — examiners mark symbol usage!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
