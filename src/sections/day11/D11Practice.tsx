import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const exercises = [
  {
    title: "Exercise 1: ProductRecord",
    desc: "Define a ProductRecord type with fields: ID (STRING), Name (STRING), Price (REAL), Quantity (INTEGER). Declare an array of 10 products and write code to input all 10.",
    hints: [
      "Start with TYPE ProductRecord and ENDTYPE",
      "Inside TYPE, use DECLARE for each field with correct data types",
      "After ENDTYPE, declare: DECLARE Products : ARRAY[1:10] OF ProductRecord",
      "Use a FOR loop from 1 TO 10 to input each product",
      "Access fields with: Products[i].Name, Products[i].Price etc."
    ],
    solution: `TYPE ProductRecord
   DECLARE ID       : STRING
   DECLARE Name     : STRING
   DECLARE Price    : REAL
   DECLARE Quantity : INTEGER
ENDTYPE

DECLARE Products : ARRAY[1:10] OF ProductRecord
DECLARE i : INTEGER

FOR i ← 1 TO 10
   OUTPUT "Enter product ID: "
   INPUT Products[i].ID
   OUTPUT "Enter product name: "
   INPUT Products[i].Name
   OUTPUT "Enter price: "
   INPUT Products[i].Price
   OUTPUT "Enter quantity: "
   INPUT Products[i].Quantity
NEXT i`
  },
  {
    title: "Exercise 2: Search by Name",
    desc: "Using the array of 10 products from Exercise 1, write pseudocode to search for a product by name and output its price and quantity.",
    hints: [
      "Declare: DECLARE Target : STRING and DECLARE Found : BOOLEAN",
      "Set Found ← FALSE before the loop",
      "Loop FOR i ← 1 TO 10, check IF Products[i].Name = Target",
      "If found, set Found ← TRUE and store the position",
      "After the loop, use IF Found to output the result or 'Not found'"
    ],
    solution: `DECLARE Target : STRING
DECLARE Found : BOOLEAN
DECLARE Pos : INTEGER

OUTPUT "Enter product name to search: "
INPUT Target
Found ← FALSE

FOR i ← 1 TO 10
   IF Products[i].Name = Target
      THEN
         Found ← TRUE
         Pos ← i
   ENDIF
NEXT i

IF Found
   THEN
      OUTPUT "Product: ", Products[Pos].Name
      OUTPUT "Price: ", Products[Pos].Price
      OUTPUT "Quantity: ", Products[Pos].Quantity
   ELSE
      OUTPUT "Product not found"
ENDIF`
  },
  {
    title: "Exercise 3: Find Most Expensive",
    desc: "Write pseudocode to find and output the most expensive product (highest Price) from the array of 10 products.",
    hints: [
      "Declare MaxPrice : REAL and MaxName : STRING",
      "Set MaxPrice ← Products[1].Price and MaxName ← Products[1].Name",
      "Loop from i = 2 TO 10",
      "Inside loop: IF Products[i].Price > MaxPrice THEN update both MaxPrice and MaxName",
      "After loop: OUTPUT the result"
    ],
    solution: `DECLARE MaxPrice : REAL
DECLARE MaxName : STRING
DECLARE i : INTEGER

MaxPrice ← Products[1].Price
MaxName ← Products[1].Name

FOR i ← 2 TO 10
   IF Products[i].Price > MaxPrice
      THEN
         MaxPrice ← Products[i].Price
         MaxName ← Products[i].Name
   ENDIF
NEXT i

OUTPUT "Most expensive product: ", MaxName
OUTPUT "Price: ", MaxPrice`
  },
];

export default function D11Practice() {
  const [hints, setHints] = useState<number[]>([0, 0, 0]);
  const [shown, setShown] = useState<boolean[]>([false, false, false]);

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">✍️ Practice — Records</h1>
      <p className="text-gray-500 mb-6">Try each exercise yourself before revealing hints or solutions!</p>
      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <div key={i} className="card border-l-4 border-red-400">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{ex.title}</h3>
            <p className="text-gray-600 mb-4">{ex.desc}</p>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => {
                  const newH = [...hints];
                  newH[i] = Math.min(newH[i] + 1, ex.hints.length);
                  setHints(newH);
                }}
                className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-semibold text-sm hover:bg-amber-200 transition-colors"
              >
                💡 Hint ({hints[i]}/{ex.hints.length})
              </button>
              <button
                onClick={() => {
                  const newS = [...shown];
                  newS[i] = !newS[i];
                  setShown(newS);
                }}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold text-sm hover:bg-green-200 transition-colors"
              >
                {shown[i] ? '🙈 Hide Solution' : '✅ Show Solution'}
              </button>
            </div>
            {hints[i] > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 space-y-1">
                {ex.hints.slice(0, hints[i]).map((h, j) => (
                  <p key={j} className="text-amber-700 text-sm">💡 {h}</p>
                ))}
              </div>
            )}
            {shown[i] && <CodeBlock code={ex.solution} />}
          </div>
        ))}
      </div>
    </div>
  );
}
