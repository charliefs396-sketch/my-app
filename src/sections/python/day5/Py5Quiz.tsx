import { useState } from 'react';

const questions = [
  { q: 'What does text[0] give for text = "Python"?', options: ['P', 'y', 'n', 'Error'], correct: 0, explanation: 'Python is 0-indexed. text[0] is the FIRST character, which is "P".' },
  { q: 'What does text[-1] give for text = "Hello"?', options: ['H', 'e', 'l', 'o'], correct: 3, explanation: 'Negative indexing counts from the right. text[-1] is always the LAST character, which is "o".' },
  { q: 'What does "Hello"[1:4] give?', options: ['Hell', 'ell', 'ello', 'Hello'], correct: 1, explanation: 'Slicing [1:4] gives characters at index 1, 2, 3 (stop is NOT included). That is "e", "l", "l" = "ell".' },
  { q: 'What does len("Hello World") return?', options: ['10', '11', '9', '12'], correct: 1, explanation: '"Hello World" has 5 + 1 (space) + 5 = 11 characters.' },
  { q: 'What does "hello".find("xyz") return?', options: ['0', 'False', '-1', 'None'], correct: 2, explanation: 'find() returns -1 when the substring is NOT found. It never returns False or None.' },
  { q: 'What does "hello".count("l") return?', options: ['1', '2', '3', '0'], correct: 1, explanation: '"hello" contains "l" at index 2 and 3. count() counts ALL occurrences = 2.' },
  { q: 'What does ord("A") return?', options: ['64', '65', '97', '1'], correct: 1, explanation: 'ord("A") = 65. This is the ASCII value of uppercase A. Memorise: A=65, a=97, 0=48.' },
  { q: 'What does chr(97) return?', options: ['A', 'a', '1', '97'], correct: 1, explanation: 'chr(97) returns "a". chr() converts an ASCII number to its character. 97 is lowercase a.' },
  { q: 'Which correctly reverses a string without [::-1]?', options: ['text.reverse()', 'reversed(text)', 'result = char + result in a for loop', 'text.flip()'], correct: 2, explanation: 'Building "result = char + result" prepends each character, reversing the string. .reverse() is for lists, not strings.' },
  { q: 'What is wrong with this palindrome check: text == text[::-1]?', options: ['Nothing wrong', 'Does not handle uppercase vs lowercase', 'Cannot use [::-1]', 'Should use find() instead'], correct: 1, explanation: '"Racecar" would fail because "R" != "r". Always normalise with .lower() before comparing.' },
  { q: 'For Caesar cipher with shift=3, what does "Z" encrypt to?', options: ['C', ']', 'A', 'Z'], correct: 0, explanation: '(90-65+3) % 26 + 65 = 28 % 26 + 65 = 2 + 65 = 67 = chr(67) = "C". The % 26 wraps Z around to C.' },
  { q: 'What does "hello".replace("l", "L") give?', options: ['heLlo', 'heLLo', 'HeLLo', 'hello'], correct: 1, explanation: 'replace() replaces ALL occurrences by default. "hello" has two "l"s, both become "L" → "heLLo".' },
];

export default function Py5Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? questions.filter((q, i) => answers[i] === q.correct).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">🧠 Quiz — Python Strings</h2>
      <p className="text-gray-500 mb-8">12 questions covering indexing, slicing, methods, ASCII, and character processing</p>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl border-2 text-center ${score >= 10 ? 'bg-green-50 border-green-300' : score >= 7 ? 'bg-amber-50 border-amber-300' : 'bg-red-50 border-red-300'}`}>
          <p className="text-5xl font-black mb-2">{score}/{questions.length}</p>
          <p className="text-xl font-bold mb-1">
            {score >= 10 ? '🌟 Excellent! String master!' : score >= 7 ? '👍 Good work! Review the ones you missed.' : '📚 Keep practising — strings take time!'}
          </p>
          <p className="text-gray-600">{Math.round((score / questions.length) * 100)}%</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`bg-white border-2 rounded-xl p-6 transition-all ${submitted ? (answers[i] === q.correct ? 'border-green-300 bg-green-50/30' : 'border-red-300 bg-red-50/30') : 'border-gray-200'}`}>
            <p className="font-bold text-gray-900 mb-4">
              <span className="text-emerald-600 mr-2">Q{i+1}.</span>{q.q}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {q.options.map((opt, j) => {
                let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100';
                if (submitted) {
                  if (j === q.correct) style = 'bg-green-100 border-green-400 text-green-800 font-bold';
                  else if (j === answers[i]) style = 'bg-red-100 border-red-400 text-red-800';
                  else style = 'bg-gray-50 border-gray-200 text-gray-400';
                } else if (answers[i] === j) {
                  style = 'bg-emerald-100 border-emerald-400 text-emerald-800 font-bold';
                }
                return (
                  <button
                    key={j}
                    disabled={submitted}
                    onClick={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                    className={`border-2 rounded-xl px-4 py-3 text-sm text-left transition-all ${style}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${answers[i] === q.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <strong>{answers[i] === q.correct ? '✅ Correct!' : `❌ Wrong — correct answer: ${q.options[q.correct]}`}</strong>
                <span className="ml-2">{q.explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full mt-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {Object.keys(answers).length < questions.length ? `Answer all questions (${Object.keys(answers).length}/${questions.length})` : '✅ Submit Quiz'}
        </button>
      ) : (
        <button
          onClick={() => { setAnswers({}); setSubmitted(false); }}
          className="w-full mt-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl text-lg hover:bg-gray-200 transition-all"
        >
          🔄 Retake Quiz
        </button>
      )}
    </div>
  );
}
