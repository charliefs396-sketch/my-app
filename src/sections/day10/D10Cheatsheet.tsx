import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function D10Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));

  const checklist = [
    'I can write a PROCEDURE with correct syntax (PROCEDURE, ENDPROCEDURE, CALL)',
    'I can write a FUNCTION with correct syntax (FUNCTION, RETURNS, RETURN, ENDFUNCTION)',
    'I know when to use CALL and when NOT to use it',
    'I understand BYVAL — original is NOT changed',
    'I understand BYREF — original IS changed',
    'I can explain the difference between a parameter and an argument',
    'I know what a local variable is and its scope',
    'I can write IsVowel(Letter : CHAR) RETURNS BOOLEAN',
    'I can write CountChar(Text : STRING, Target : CHAR) RETURNS INTEGER',
    'I can write DisplayArray with BYVAL',
    'I can write Swap correctly using BYREF',
    'I know to use BYREF for arrays I want to modify',
    'I can trace through BYVAL and BYREF code and predict output',
    'I know RETURNS is in the header, RETURN is in the body',
  ];

  const totalChecked = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">📋 Cheatsheet</h1>
      <p className="text-gray-500 text-lg mb-8">Day 10 — Procedures & Functions — Complete Reference</p>

      {/* Quick reference table */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-lime-50">
                <th className="text-left p-3 font-bold text-gray-700">Feature</th>
                <th className="text-left p-3 font-bold text-indigo-700">PROCEDURE</th>
                <th className="text-left p-3 font-bold text-emerald-700">FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Start keyword', 'PROCEDURE Name(params)', 'FUNCTION Name(params) RETURNS Type'],
                ['End keyword', 'ENDPROCEDURE', 'ENDFUNCTION'],
                ['Returns a value?', '❌ No', '✅ Yes — use RETURN'],
                ['How to call', 'CALL Name(args)', 'Result ← Name(args) or OUTPUT Name(args)'],
                ['Use CALL?', '✅ Yes', '❌ No'],
                ['Has RETURNS?', '❌ No', '✅ Yes (in header)'],
                ['Has RETURN?', '❌ No (usually)', '✅ Yes (in body)'],
              ].map(([feat, proc, func], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="p-3 font-semibold text-gray-700">{feat}</td>
                  <td className="p-3 text-indigo-700 font-mono text-xs">{proc}</td>
                  <td className="p-3 text-emerald-700 font-mono text-xs">{func}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BYVAL vs BYREF */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📨 BYVAL vs BYREF — Quick Rules</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-800 mb-2">BYVAL</p>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Passes a <strong>copy</strong></li>
              <li>• Original NOT changed</li>
              <li>• Use when only READING</li>
              <li>• Default if not specified</li>
              <li>• Safer option</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-800 mb-2">BYREF</p>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Passes a <strong>reference</strong></li>
              <li>• Original IS changed</li>
              <li>• Use when MODIFYING</li>
              <li>• Required for sorting arrays</li>
              <li>• Required for Swap</li>
            </ul>
          </div>
        </div>
      </div>

      {/* All templates */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">📄 Code Templates</h2>
        <div className="space-y-6">

          <div>
            <p className="font-bold text-gray-700 mb-2">1. Basic Procedure (no return)</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE ProcedureName(BYVAL Param : Type)
   // Local variables
   DECLARE LocalVar : Type
   // Code here
ENDPROCEDURE

// Call it:
CALL ProcedureName(argument)`} />
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-2">2. Basic Function (returns a value)</p>
            <CodeBlock language="pseudocode" code={`FUNCTION FunctionName(BYVAL Param : Type) RETURNS ReturnType
   DECLARE LocalVar : Type
   // Calculate something
   RETURN result
ENDFUNCTION

// Use it:
DECLARE Answer : ReturnType
Answer ← FunctionName(argument)`} />
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-2">3. IsVowel Function</p>
            <CodeBlock language="pseudocode" code={`FUNCTION IsVowel(Letter : CHAR) RETURNS BOOLEAN
   DECLARE L : CHAR
   L ← LCASE(Letter)
   IF L='a' OR L='e' OR L='i' OR L='o' OR L='u'
      THEN
         RETURN TRUE
      ELSE
         RETURN FALSE
   ENDIF
ENDFUNCTION`} />
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-2">4. CountChar Function</p>
            <CodeBlock language="pseudocode" code={`FUNCTION CountChar(Text : STRING, Target : CHAR) RETURNS INTEGER
   DECLARE i : INTEGER
   DECLARE Count : INTEGER
   Count ← 0
   FOR i ← 1 TO LENGTH(Text)
      IF MID(Text, i, 1) = Target
         THEN Count ← Count + 1
      ENDIF
   NEXT i
   RETURN Count
ENDFUNCTION`} />
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-2">5. Swap Procedure (BYREF)</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE Swap(BYREF X : INTEGER, BYREF Y : INTEGER)
   DECLARE Temp : INTEGER
   Temp ← X
   X ← Y
   Y ← Temp
ENDPROCEDURE`} />
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-2">6. DisplayArray Procedure</p>
            <CodeBlock language="pseudocode" code={`PROCEDURE DisplayArray(BYVAL Data : ARRAY, BYVAL Size : INTEGER)
   DECLARE i : INTEGER
   FOR i ← 1 TO Size
      OUTPUT "Position ", i, ": ", Data[i]
   NEXT i
ENDPROCEDURE`} />
          </div>
        </div>
      </div>

      {/* Key terms */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🏷️ Key Terminology</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { term: 'Parameter', def: 'Variable in the definition header — a placeholder for the input' },
            { term: 'Argument', def: 'Actual value passed when calling the subroutine' },
            { term: 'BYVAL', def: 'Copy passed — original variable NOT changed' },
            { term: 'BYREF', def: 'Reference passed — original variable IS changed' },
            { term: 'Local variable', def: 'Declared inside a subroutine — only exists while it runs' },
            { term: 'Return value', def: 'What a FUNCTION sends back to the caller' },
            { term: 'Scope', def: 'Where a variable can be accessed — local or global' },
            { term: 'RETURNS', def: 'Keyword in FUNCTION header declaring the return type' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-mono font-bold text-lime-600 text-sm flex-shrink-0 mt-0.5">{item.term}</span>
              <span className="text-gray-600 text-sm">{item.def}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-red-900 mb-4">⚠️ Common Exam Mistakes</h2>
        <div className="space-y-3">
          {[
            { wrong: 'CALL Maximum(5, 10)', right: 'Result ← Maximum(5, 10)', why: 'Never use CALL with a function' },
            { wrong: 'PrintLine(20)', right: 'CALL PrintLine(20)', why: 'Always use CALL with a procedure' },
            { wrong: 'FUNCTION X() RETURNS\n   RETURN 5', right: 'FUNCTION X() RETURNS INTEGER\n   RETURN 5', why: 'RETURNS must specify the data type' },
            { wrong: 'BYVAL for sorting', right: 'BYREF for sorting', why: 'BYVAL only sorts the copy — original stays unsorted' },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
              <div className="grid md:grid-cols-2 gap-3 mb-2">
                <div>
                  <p className="text-xs font-bold text-red-500 mb-1">❌ WRONG:</p>
                  <code className="text-sm bg-red-50 px-2 py-1 rounded font-mono text-red-700 block whitespace-pre">{m.wrong}</code>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-1">✅ CORRECT:</p>
                  <code className="text-sm bg-green-50 px-2 py-1 rounded font-mono text-green-700 block whitespace-pre">{m.right}</code>
                </div>
              </div>
              <p className="text-xs text-gray-500">Why: {m.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence checklist */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 border border-lime-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-lime-900">✅ Confidence Checklist</h2>
          <span className="text-lg font-bold text-lime-700">{totalChecked}/{checklist.length}</span>
        </div>
        <div className="w-full h-3 bg-lime-100 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-lime-500 to-green-500 rounded-full transition-all duration-500" style={{ width: `${(totalChecked / checklist.length) * 100}%` }} />
        </div>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <button key={i} onClick={() => toggle(i)} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all ${checked[i] ? 'bg-lime-100 border-lime-300' : 'bg-white border-gray-200 hover:border-lime-300'}`}>
              <span className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${checked[i] ? 'bg-lime-500 border-lime-500 text-white' : 'border-gray-300'}`}>
                {checked[i] && '✓'}
              </span>
              <span className={`text-sm ${checked[i] ? 'text-lime-800 font-medium' : 'text-gray-600'}`}>{item}</span>
            </button>
          ))}
        </div>
        {totalChecked === checklist.length && (
          <div className="mt-4 p-4 bg-lime-500 text-white rounded-xl text-center font-bold">
            🎉 Day 10 Complete! You've mastered Procedures & Functions!
          </div>
        )}
      </div>
    </div>
  );
}
