import { useState } from 'react';

const questions = [
  { q: "What keyword defines a class in Python?", options: ["type", "class", "record", "struct"], correct: 1, explanation: "'class' is the Python keyword. Pseudocode uses TYPE...ENDTYPE." },
  { q: "What does __init__ do?", options: ["Deletes the object", "Sets up fields when object is created", "Prints the object", "Searches the object"], correct: 1, explanation: "__init__ is called automatically when you write Student(). It sets up all the fields." },
  { q: "What does 'self' refer to?", options: ["The class itself", "The __init__ method", "The specific object being used", "The list of objects"], correct: 2, explanation: "self refers to THIS specific instance/object. s.name uses self internally." },
  { q: "How do you create a new Student object?", options: ["Student", "new Student()", "Student()", "create Student"], correct: 2, explanation: "Student() calls __init__ and creates a new object. Don't forget the parentheses!" },
  { q: "What is stored in a list of objects?", options: ["Field names only", "Values only", "Complete objects with all their fields", "Class definitions"], correct: 2, explanation: "Each item in the list is a complete object with ALL its fields intact." },
  { q: "How do you swap two objects in a list?", options: ["Use Temp variable", "students[j], students[j+1] = students[j+1], students[j]", "Copy each field one by one", "Use swap() function"], correct: 1, explanation: "Python's tuple swap works on objects too — the entire object swaps in one line!" },
  { q: "What does return None mean in a search function?", options: ["The function crashed", "The target was found", "Nothing was found", "The list is empty"], correct: 2, explanation: "None is Python's 'nothing'. When search fails, return None to signal 'not found'." },
  { q: "How do you check if search returned None?", options: ["if result != None:", "if result == False:", "if result is not None:", "if result:"], correct: 2, explanation: "'is not None' is the correct Pythonic way to check. 'is' checks identity, not equality." },
  { q: "What is the equivalent of ARRAY[1:30] OF StudentRecord?", options: ["students = {}", "students = Student() * 30", "students = [] with append()", "students = (Student,) * 30"], correct: 2, explanation: "Create an empty list, then append() each new Student object inside a loop." },
  { q: "To sort books by price, what do you compare?", options: ["books[j] > books[j+1]", "books[j].price > books[j+1].price", "price[j] > price[j+1]", "books.price[j] > books.price[j+1]"], correct: 1, explanation: "Access the field using dot notation: books[j].price to get that book's price." },
  { q: "What happens when you write: b = Book()", options: ["Creates the Book class", "Creates a new book record with empty fields", "Deletes the book", "Prints the book"], correct: 1, explanation: "Book() creates a NEW object and calls __init__ which sets all fields to their defaults." },
  { q: "Which is correct for a field in __init__?", options: ["name = ''", "self.name = ''", "Book.name = ''", "field name = ''"], correct: 1, explanation: "Must use self.name = '' — without self, it's just a local variable that disappears!" },
];

export default function Py12Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter((q, i) => answers[i] === q.correct).length : 0;

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 Quiz — Records & Classes</h2>
      {submitted && (
        <div className={`mb-6 p-5 rounded-xl border-2 text-center ${score >= 10 ? 'bg-green-50 border-green-300' : score >= 7 ? 'bg-yellow-50 border-yellow-300' : 'bg-red-50 border-red-300'}`}>
          <p className="text-4xl font-black mb-2">{score}/12</p>
          <p className="text-lg font-semibold">{score >= 10 ? '🎉 Excellent!' : score >= 7 ? '👍 Good!' : '📚 Keep practising!'}</p>
        </div>
      )}
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-4">Q{i+1}: {q.q}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, j) => {
                let cls = 'p-3 rounded-lg border text-sm cursor-pointer transition-all ';
                if (submitted) {
                  if (j === q.correct) cls += 'bg-green-100 border-green-400 text-green-800 font-semibold';
                  else if (answers[i] === j) cls += 'bg-red-100 border-red-400 text-red-800';
                  else cls += 'bg-gray-50 border-gray-200 text-gray-500';
                } else {
                  cls += answers[i] === j ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : 'bg-gray-50 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300';
                }
                return (
                  <div key={j} className={cls} onClick={() => !submitted && setAnswers(prev => ({ ...prev, [i]: j }))}>
                    <span className="font-mono mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                  </div>
                );
              })}
            </div>
            {submitted && <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"><strong>Explanation:</strong> {q.explanation}</div>}
          </div>
        ))}
      </div>
      {!submitted && Object.keys(answers).length === questions.length && (
        <button onClick={() => setSubmitted(true)} className="btn-primary mt-6 w-full text-center justify-center">Submit Quiz</button>
      )}
    </div>
  );
}
