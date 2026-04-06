
import CodeBlock from '../../../components/CodeBlock';

export default function Py8ExamFAQ() {
  const faqs = [
    {
      q: "What's the difference between return and print?",
      a: "return sends a value BACK to where the function was called. print just displays text on screen. If you use print inside a function, the function still returns None.",
      code: `def add(a, b):\n    print(a + b)    # Displays but returns None!\n\ndef add_correct(a, b):\n    return a + b    # Sends value back\n\nresult = add(3, 4)          # result = None!\nresult = add_correct(3, 4)  # result = 7`,
      warning: true
    },
    {
      q: "Do I need global to READ a global variable?",
      a: "No! You only need 'global x' if you want to MODIFY (change) the global variable. You can read it freely.",
      code: `name = "Ali"\n\ndef greet():\n    print(f"Hello {name}")  # Reading is fine!\n\ndef rename():\n    global name   # Need this to modify!\n    name = "Sara"`,
      warning: false
    },
    {
      q: "What is a parameter vs an argument?",
      a: "Parameter = the variable name in the function DEFINITION. Argument = the actual value passed when CALLING the function. Cambridge often tests this terminology!",
      code: `def greet(name):    # 'name' is the PARAMETER\n    print(f"Hi {name}")\n\ngreet("Ali")        # "Ali" is the ARGUMENT`,
      warning: false
    },
    {
      q: "Can a function have no parameters?",
      a: "Yes! Just use empty brackets. Call it with empty brackets too.",
      code: `def display_menu():    # No parameters\n    print("1. Add")\n    print("2. Quit")\n\ndisplay_menu()         # No arguments`,
      warning: false
    },
    {
      q: "What does a function return if there's no return statement?",
      a: "Python automatically returns None. This is a common bug — forgetting return means your variable gets None instead of a value.",
      code: `def add(a, b):\n    result = a + b\n    # Forgot return!\n\nx = add(3, 4)\nprint(x)           # None  ← BUG!\nprint(type(x))     # <class 'NoneType'>`,
      warning: true
    },
    {
      q: "How is Python different from pseudocode for functions?",
      a: "In pseudocode you use FUNCTION/ENDFUNCTION and must specify data types. In Python just use def with no type declarations and no ENDFUNCTION.",
      code: `// PSEUDOCODE:\nFUNCTION Add(A : INTEGER, B : INTEGER) \n        RETURNS INTEGER\n   RETURN A + B\nENDFUNCTION\n\n# PYTHON:\ndef add(a, b):\n    return a + b`,
      warning: false
    },
    {
      q: "Can I have multiple return statements?",
      a: "Yes! Python stops at the FIRST return it reaches. This is useful for early exit (like finding something in a search).",
      code: `def find_item(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i    # Returns immediately!\n    return -1           # Only reached if not found`,
      warning: false
    },
    {
      q: "What are default parameters useful for?",
      a: "Default parameters make a function flexible — callers can omit that argument and get a sensible default. Remember: defaults must come LAST in parameter list.",
      code: `def greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Ali")           # Hello, Ali!\ngreet("Ali", "Salam")  # Salam, Ali!\n\n# Common exam use:\ndef is_valid(mark, min_val=0, max_val=100):\n    return min_val <= mark <= max_val`,
      warning: false
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
        ❓ Exam FAQ – Functions & Scope
      </h1>
      <p className="text-gray-500 text-lg mb-8">8 most common exam questions answered</p>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className={`bg-white rounded-xl border ${faq.warning ? 'border-red-200' : 'border-gray-200'} shadow-sm p-6`}>
            <div className="flex items-start gap-3 mb-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${faq.warning ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                {i + 1}
              </span>
              <h3 className={`font-bold text-lg ${faq.warning ? 'text-red-800' : 'text-gray-900'}`}>
                {faq.warning ? '⚠️ ' : '❓ '}{faq.q}
              </h3>
            </div>
            <p className="text-gray-600 mb-3 ml-10">{faq.a}</p>
            <div className="ml-10">
              <CodeBlock language="python" code={faq.code} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
        <h3 className="font-bold text-emerald-900 mb-3">✅ Key Points to Remember</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'def is used for both functions AND procedures',
            'Functions use return, procedures omit it',
            'return sends value back — print just displays',
            'Local variables only exist inside the function',
            'global keyword needed to MODIFY globals',
            'Default parameters must come LAST',
            'Parameter = definition, Argument = call',
            'No return = function returns None',
          ].map((point) => (
            <div key={point} className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <p className="text-emerald-800 text-sm">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
