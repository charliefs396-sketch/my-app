import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

interface Exercise {
  title: string;
  desc: string;
  filename: string;
  hints: string[];
  solution: string;
  explanation: string;
}

const exercises: Exercise[] = [
  {
    title: '🧮 calculator.py — Basic Calculator',
    desc: 'Input 2 numbers from the user. Output their sum, difference, product, and quotient (division).',
    filename: 'calculator.py',
    hints: [
      'You need two variables — use int() or float() to convert the input',
      'Sum uses +, difference uses -, product uses *, quotient uses /',
      'Use f-strings to show the results nicely',
    ],
    solution: '# calculator.py - Basic Calculator\n# Input two numbers and show all operations\n\nnum1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\n\n# Calculate results\ntotal = num1 + num2\ndifference = num1 - num2\nproduct = num1 * num2\nquotient = num1 / num2\n\n# Display results\nprint(f"Sum: {num1} + {num2} = {total}")\nprint(f"Difference: {num1} - {num2} = {difference}")\nprint(f"Product: {num1} * {num2} = {product}")\nprint(f"Quotient: {num1} / {num2} = {quotient}")',
    explanation: 'We use float() instead of int() so the user can enter decimal numbers too. Each operation is stored in its own variable for clarity. f-strings make the output readable.',
  },
  {
    title: '👋 greeting.py — Age Calculator',
    desc: "Input the user's name and birth year. Calculate their age (assume current year is 2025) and output a greeting.",
    filename: 'greeting.py',
    hints: [
      'Name stays as a string (no conversion needed), but birth year needs int()',
      'Age = current year - birth year',
      'Use an f-string to print a nice greeting message',
    ],
    solution: '# greeting.py - Age Calculator\n# Input name and birth year, calculate and display age\n\nname = input("Enter your name: ")\nbirth_year = int(input("Enter your birth year: "))\n\n# Calculate age\ncurrent_year = 2025\nage = current_year - birth_year\n\n# Display greeting\nprint(f"Hello {name}!")\nprint(f"You were born in {birth_year}")\nprint(f"You are {age} years old in {current_year}")',
    explanation: 'Name is text so no conversion needed. Birth year is a number so we use int(). We store 2025 in a variable (current_year) rather than hardcoding it — this makes the code easier to update later. This is good practice!',
  },
  {
    title: '🌡️ converter.py — Temperature Converter',
    desc: 'Input a temperature in Celsius. Convert it to Fahrenheit using the formula: F = C x 9/5 + 32. Output the result.',
    filename: 'converter.py',
    hints: [
      'Temperature can be a decimal, so use float()',
      'The formula in Python: fahrenheit = celsius * 9/5 + 32',
      'Use f-string with :.1f to show 1 decimal place',
    ],
    solution: '# converter.py - Celsius to Fahrenheit\n# Input temp in C, convert to F\n\ncelsius = float(input("Enter temperature in Celsius: "))\n\n# Convert using the formula\nfahrenheit = celsius * 9/5 + 32\n\n# Display result\nprint(f"{celsius}C = {fahrenheit:.1f}F")',
    explanation: 'We use float() because temperatures can be decimals (like 36.5). The formula is straightforward: multiply by 9/5 then add 32. The :.1f in the f-string formats the number to 1 decimal place.',
  },
  {
    title: '🛒 BONUS: shop_receipt.py — Shop Receipt',
    desc: 'Input item name, quantity, and price per item. Calculate total cost with 15% tax. Output a formatted receipt.',
    filename: 'shop_receipt.py',
    hints: [
      'Item name is a string, quantity is int, price is float',
      'Subtotal = quantity * price',
      'Tax = subtotal * 0.15, Total = subtotal + tax',
      'Use f-strings with :.2f to show prices to 2 decimal places',
    ],
    solution: '# shop_receipt.py - Shop Receipt with Tax\nTAX_RATE = 0.15  # 15% tax (constant - ALL_CAPS)\n\n# Get item details\nitem = input("Enter item name: ")\nquantity = int(input("Enter quantity: "))\nprice = float(input("Enter price per item: "))\n\n# Calculate\nsubtotal = quantity * price\ntax = subtotal * TAX_RATE\ntotal = subtotal + tax\n\n# Display receipt\nprint("\\n===== RECEIPT =====")\nprint(f"Item: {item}")\nprint(f"Quantity: {quantity}")\nprint(f"Price each: {price:.2f}")\nprint(f"Subtotal: {subtotal:.2f}")\nprint(f"Tax (15%): {tax:.2f}")\nprint(f"TOTAL: {total:.2f}")\nprint("===================")',
    explanation: 'TAX_RATE is a constant (ALL_CAPS convention). We use :.2f to format all money values to 2 decimal places. The \\n creates a blank line before the receipt header. This exercise combines everything: input, type conversion, calculations, constants, and formatted output!',
  },
];

export default function PythonPractice() {
  const [revealedHints, setRevealedHints] = useState<Record<number, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Set<number>>(new Set());

  const showNextHint = (exerciseIndex: number, maxHints: number) => {
    setRevealedHints(prev => ({
      ...prev,
      [exerciseIndex]: Math.min((prev[exerciseIndex] || 0) + 1, maxHints),
    }));
  };

  const toggleSolution = (index: number) => {
    setRevealedSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">✍️ Practice Exercises</h1>
      <p className="text-gray-500 mb-6 text-lg">Build these programs yourself! Use hints if stuck, then check the solution.</p>

      <div className="tip-box mb-6">
        <p className="font-bold text-amber-800">💡 How to Practice</p>
        <p className="text-amber-900 mt-1">
          <strong>1.</strong> Read the task. <strong>2.</strong> Try coding it yourself in VS Code FIRST.
          <strong> 3.</strong> If stuck, reveal hints one at a time.
          <strong> 4.</strong> Only look at the solution AFTER you have tried! That is how you learn.
        </p>
      </div>

      {exercises.map((ex, i) => (
        <div key={i} className="section-card mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{ex.title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{ex.desc}</p>
          <p className="text-sm text-gray-500 mb-4">
            Create a file called <code className="bg-emerald-50 px-2 py-0.5 rounded text-emerald-700 font-mono">{ex.filename}</code> in VS Code and try it!
          </p>

          <div className="mb-4">
            <button
              onClick={() => showNextHint(i, ex.hints.length)}
              className="text-sm bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-semibold hover:bg-amber-200 transition-all"
              disabled={(revealedHints[i] || 0) >= ex.hints.length}
            >
              {(revealedHints[i] || 0) >= ex.hints.length
                ? 'All hints revealed'
                : 'Show Hint ' + ((revealedHints[i] || 0) + 1) + '/' + ex.hints.length}
            </button>

            {(revealedHints[i] || 0) > 0 && (
              <div className="mt-3 space-y-2">
                {ex.hints.slice(0, revealedHints[i]).map((hint, j) => (
                  <div key={j} className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg animate-fade-in-up">
                    <span className="text-amber-600 font-bold">💡</span>
                    <span className="text-amber-800 text-sm">{hint}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => toggleSolution(i)}
            className={'text-sm px-4 py-2 rounded-lg font-semibold transition-all ' +
              (revealedSolutions.has(i)
                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
            }
          >
            {revealedSolutions.has(i) ? '🙈 Hide Solution' : '👀 Show Solution'}
          </button>

          {revealedSolutions.has(i) && (
            <div className="mt-4 animate-fade-in-up">
              <CodeBlock language="python" title={'Solution: ' + ex.filename} code={ex.solution} />
              <div className="success-box mt-3">
                <p className="font-bold text-green-800">📝 Explanation</p>
                <p className="text-green-700 mt-1">{ex.explanation}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
