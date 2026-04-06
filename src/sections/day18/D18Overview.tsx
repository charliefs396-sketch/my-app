import CodeBlock from '../../components/CodeBlock';

export default function D18Overview() {
  return (
    <div className="animate-fade-in-up space-y-6">
      <div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-600 to-red-500 bg-clip-text text-transparent mb-2">
          📊 Day 18: Structure Charts + Flowcharts
        </h1>
        <p className="text-gray-500 text-lg">Cambridge A Level Computer Science – 9618 Paper 2</p>
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
        <h2 className="font-bold text-pink-800 text-lg mb-3">🎯 What You'll Learn Today</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-pink-700 mb-2">Structure Charts</p>
            <ul className="text-pink-700 text-sm space-y-1">
              <li>✅ What structure charts show</li>
              <li>✅ Arrow directions and meanings</li>
              <li>✅ Filled vs empty circles</li>
              <li>✅ How to draw them in exams</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-pink-700 mb-2">Flowcharts</p>
            <ul className="text-pink-700 text-sm space-y-1">
              <li>✅ All 5 flowchart symbols</li>
              <li>✅ How to draw loops and decisions</li>
              <li>✅ Converting pseudocode ↔ flowchart</li>
              <li>✅ Past paper style questions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="text-3xl mb-2">🏗️</div>
          <h3 className="font-bold text-gray-800 mb-1">Structure Charts</h3>
          <p className="text-gray-600 text-sm">Show how a program is broken into modules and what data passes between them. Used in Paper 2 design questions.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="text-3xl mb-2">🔷</div>
          <h3 className="font-bold text-gray-800 mb-1">Flowcharts</h3>
          <p className="text-gray-600 text-sm">Visual representation of an algorithm using standard shapes. You may need to draw, complete, or convert flowcharts in the exam.</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 mb-2">📝 Why This Matters for Your Exam</h3>
        <ul className="text-amber-700 text-sm space-y-1">
          <li>• Paper 2 regularly asks you to <strong>draw or complete a structure chart</strong></li>
          <li>• Paper 2 asks you to <strong>convert pseudocode to a flowchart</strong></li>
          <li>• Paper 2 asks you to <strong>convert a flowchart to pseudocode</strong></li>
          <li>• These are <strong>easy marks</strong> if you know the symbols and rules</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-bold text-blue-800 mb-2">🆕 O Level vs A Level</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-blue-100"><th className="text-left p-2 text-blue-800">O Level</th><th className="text-left p-2 text-blue-800">A Level Extra</th></tr></thead>
            <tbody className="text-blue-700">
              <tr className="border-t border-blue-200"><td className="p-2">Basic flowchart symbols</td><td className="p-2">Structure charts with parameters</td></tr>
              <tr className="border-t border-blue-200"><td className="p-2">Simple algorithms</td><td className="p-2">Filled vs empty circle parameters</td></tr>
              <tr className="border-t border-blue-200"><td className="p-2">Drawing flowcharts</td><td className="p-2">Converting between all representations</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <CodeBlock language="pseudocode" code={`// Today's goal: be able to represent THIS in both a flowchart and structure chart

PROCEDURE GradeStudents(BYREF Marks : ARRAY, Size : INTEGER)
   DECLARE i : INTEGER
   DECLARE Grade : CHAR
   FOR i ← 1 TO Size
      IF Marks[i] >= 80
         THEN Grade ← 'A'
         ELSE IF Marks[i] >= 60
              THEN Grade ← 'B'
              ELSE Grade ← 'C'
              ENDIF
      ENDIF
      OUTPUT Grade
   NEXT i
ENDPROCEDURE`} />
    </div>
  );
}
