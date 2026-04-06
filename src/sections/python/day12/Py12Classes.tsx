import CodeBlock from '../../../components/CodeBlock';

export default function Py12Classes() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📦 Classes as Records</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-blue-800 mb-3">🔍 Anatomy of a Class</h3>
        <CodeBlock language="python" code={`class Student:
    def __init__(self):   # Called automatically when Student() is created
        self.name = ""    # Field 1 - String
        self.age = 0      # Field 2 - Integer
        self.mark = 0     # Field 3 - Integer

# Create ONE record
s = Student()             # Like: DECLARE s : StudentRecord
s.name = "Ali"            # Like: s.Name <- "Ali"
s.age = 17
s.mark = 85

# Access fields
print(f"{s.name}, {s.age}, {s.mark}")`} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">🔑 Key Terms</h3>
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="text-left p-2">Term</th><th className="text-left p-2">Meaning</th></tr></thead>
            <tbody>
              {[
                ['class', 'Blueprint for the record'],
                ['__init__', 'Setup method — runs on creation'],
                ['self', 'Refers to THIS specific object'],
                ['self.name', 'A field of this record'],
                ['Student()', 'Creates a new record'],
                ['s.name', 'Access field name of record s'],
              ].map(([term, meaning]) => (
                <tr key={term} className="border-t">
                  <td className="p-2 font-mono text-purple-600 font-bold">{term}</td>
                  <td className="p-2 text-gray-600">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-3">📊 Pseudocode vs Python</h3>
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="text-left p-2">Pseudocode</th><th className="text-left p-2">Python</th></tr></thead>
            <tbody>
              {[
                ['TYPE Student', 'class Student:'],
                ['DECLARE Name : STRING', 'self.name = ""'],
                ['DECLARE Age : INTEGER', 'self.age = 0'],
                ['ENDTYPE', '(no equivalent)'],
                ['DECLARE s : Student', 's = Student()'],
                ['s.Name <- "Ali"', 's.name = "Ali"'],
              ].map(([ps, py]) => (
                <tr key={ps} className="border-t">
                  <td className="p-2 font-mono text-indigo-600 text-xs">{ps}</td>
                  <td className="p-2 font-mono text-emerald-600 text-xs">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">📝 Full Example — Student Class</h3>
        <CodeBlock language="python" code={`class Student:
    def __init__(self):
        self.name = ""
        self.age = 0
        self.mark = 0

# Create and populate one student
s = Student()
s.name = input("Enter name: ")
s.age = int(input("Enter age: "))
s.mark = int(input("Enter mark: "))

# Display
print(f"Name: {s.name}")
print(f"Age:  {s.age}")
print(f"Mark: {s.mark}")

# Calculate grade
if s.mark >= 80:
    grade = "A"
elif s.mark >= 60:
    grade = "B"
else:
    grade = "C"
print(f"Grade: {grade}")`} />
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="font-bold text-red-800 mb-2">⚠️ Common Mistakes</h3>
        <div className="space-y-2">
          {[
            ['Forgetting self', 'def __init__(): → def __init__(self):'],
            ['No parentheses', 'Student → Student()'],
            ['Wrong field name', 's.Name (capital) → s.name (lowercase)'],
            ['Missing self.', 'name = "" → self.name = ""'],
          ].map(([mistake, fix]) => (
            <div key={mistake} className="flex items-start gap-2 text-sm">
              <span className="text-red-500 font-bold mt-0.5">✗</span>
              <div><span className="font-semibold text-red-700">{mistake}:</span> <span className="text-red-600">{fix}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
