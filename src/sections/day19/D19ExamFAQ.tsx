export default function D19ExamFAQ() {
  const faqs = [
    { q: 'What is the difference between a syntax error and a logic error?', a: 'A syntax error breaks the language rules so the program will NOT run. A logic error means the program runs but gives the WRONG answer. Example: OUTPU is syntax, Total * Count instead of Total / Count is logic.' },
    { q: 'Why are logic errors harder to find than syntax errors?', a: 'Because the program runs fine — it just gives wrong results. The compiler cannot detect logic errors. You need trace tables and test data to find them.' },
    { q: 'What is the difference between abnormal and boundary test data?', a: 'Abnormal data is clearly INVALID (like -50 or "abc" for a mark). Boundary data is at the EDGE of valid/invalid (like -1, 0, 100, 101 for range 0-100). Boundary is the most important!' },
    { q: 'How many boundary values should I test?', a: 'For a range MIN to MAX, always test 4 values: MIN-1 (rejected), MIN (accepted), MAX (accepted), MAX+1 (rejected). This is the golden rule!' },
    { q: 'What is the difference between white-box and black-box testing?', a: 'White-box: tester CAN see the code, tests every path. Black-box: tester CANNOT see the code, only tests inputs/outputs based on the specification.' },
    { q: 'What is the difference between alpha and beta testing?', a: 'Alpha: done INTERNALLY by the development team in a controlled environment. Beta: done by EXTERNAL selected users in a real environment. Alpha happens BEFORE beta.' },
    { q: 'What is stub testing?', a: 'Replacing incomplete modules with simple dummy versions that return fixed values. This lets you test the rest of the program while some parts are still being developed.' },
    { q: 'Is division by zero a logic error or runtime error?', a: 'RUNTIME error! The code is valid (no syntax error) and the logic might be intentional, but when the computer tries to execute the division, it CRASHES. Runtime errors happen during execution.' },
  ];

  return (
    <div className="animate-fade-in-up space-y-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ — Testing & Test Data
      </h1>
      <p className="text-gray-500 mb-6">Common exam questions and exactly how to answer them.</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-800 mb-2">❓ {faq.q}</h3>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-green-800 text-sm"><strong>✅ Answer:</strong> {faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
        <h3 className="font-bold text-amber-800 mb-2">💡 Key Points to Remember</h3>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• Syntax = won't run | Logic = wrong answer | Runtime = crashes</li>
          <li>• Normal = valid | Abnormal = invalid | Boundary = edge (MIN-1, MIN, MAX, MAX+1)</li>
          <li>• White-box = see code = test paths | Black-box = no code = test inputs/outputs</li>
          <li>• Alpha = internal first | Beta = external users second</li>
          <li>• Boundary data finds the MOST bugs — always include all 4 values!</li>
        </ul>
      </div>
    </div>
  );
}
