import { useState } from 'react';

export default function D19Cheatsheet() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const items = [
    'I can define a syntax error and give an example',
    'I can define a logic error and give an example',
    'I can define a runtime error and give an example',
    'I can classify any error as syntax, logic, or runtime',
    'I can explain what normal test data is with examples',
    'I can explain what abnormal test data is with examples',
    'I can explain what boundary test data is with examples',
    'I know the 4 boundary values: MIN-1, MIN, MAX, MAX+1',
    'I can create a complete test plan with 10+ test cases',
    'I can describe dry run and walkthrough',
    'I can explain white-box vs black-box testing',
    'I can explain alpha vs beta testing',
    'I can explain stub testing',
    'I know which testing method to use for any scenario',
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
        📋 Day 19 Cheatsheet
      </h1>

      {/* Error Types */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🐛 Error Types</h2>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50"><th className="text-left p-2 font-bold">Type</th><th className="text-left p-2 font-bold">Runs?</th><th className="text-left p-2 font-bold">Result</th><th className="text-left p-2 font-bold">Example</th><th className="text-left p-2 font-bold">Found by</th></tr></thead>
          <tbody>
            <tr className="border-t"><td className="p-2 font-semibold text-blue-600">Syntax</td><td className="p-2">❌ No</td><td className="p-2">Won't compile</td><td className="p-2 font-mono text-xs">OUTPU "Hi"</td><td className="p-2">Compiler</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold text-orange-600">Logic</td><td className="p-2">✅ Yes</td><td className="p-2">Wrong answer</td><td className="p-2 font-mono text-xs">Total * Count</td><td className="p-2">Testing / trace</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold text-purple-600">Runtime</td><td className="p-2">✅ Starts</td><td className="p-2">Crashes</td><td className="p-2 font-mono text-xs">X / 0</td><td className="p-2">Execution</td></tr>
          </tbody>
        </table>
      </div>

      {/* Test Data */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Test Data Types (for range 0-100)</h2>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50"><th className="text-left p-2 font-bold">Type</th><th className="text-left p-2 font-bold">What</th><th className="text-left p-2 font-bold">Examples</th><th className="text-left p-2 font-bold">Expected</th></tr></thead>
          <tbody>
            <tr className="border-t bg-green-50"><td className="p-2 font-semibold text-green-600">Normal</td><td className="p-2">Valid expected</td><td className="p-2 font-mono">55, 72, 83</td><td className="p-2">Accepted</td></tr>
            <tr className="border-t bg-red-50"><td className="p-2 font-semibold text-red-600">Abnormal</td><td className="p-2">Invalid</td><td className="p-2 font-mono">-50, 200, "abc"</td><td className="p-2">Rejected</td></tr>
            <tr className="border-t bg-amber-50"><td className="p-2 font-semibold text-amber-600">Boundary</td><td className="p-2">Edge cases</td><td className="p-2 font-mono">-1, 0, 100, 101</td><td className="p-2">-1,101 rejected; 0,100 accepted</td></tr>
          </tbody>
        </table>
      </div>

      {/* Testing Methods */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🔬 Testing Methods</h2>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50"><th className="text-left p-2 font-bold">Method</th><th className="text-left p-2 font-bold">Who</th><th className="text-left p-2 font-bold">What</th></tr></thead>
          <tbody>
            <tr className="border-t"><td className="p-2 font-semibold">Dry run</td><td className="p-2">Developer</td><td className="p-2">Trace on paper</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">Walkthrough</td><td className="p-2">Team</td><td className="p-2">Review code together</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">White-box</td><td className="p-2">Developer</td><td className="p-2">Test all code paths (sees code)</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">Black-box</td><td className="p-2">Tester</td><td className="p-2">Test inputs/outputs only (no code)</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">Stub</td><td className="p-2">Developer</td><td className="p-2">Dummy modules for incomplete parts</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">Alpha</td><td className="p-2">Internal team</td><td className="p-2">In-house controlled testing</td></tr>
            <tr className="border-t"><td className="p-2 font-semibold">Beta</td><td className="p-2">External users</td><td className="p-2">Real environment testing</td></tr>
          </tbody>
        </table>
      </div>

      {/* Checklist */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">✅ Confidence Checklist</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={checked[i] || false} onChange={() => toggle(i)} className="w-4 h-4 rounded border-gray-300 text-indigo-600" />
              <span className={`text-sm ${checked[i] ? 'text-green-600 line-through' : 'text-gray-700'}`}>{item}</span>
            </label>
          ))}
        </div>
        <p className="mt-4 text-sm font-bold text-indigo-700">
          {Object.values(checked).filter(Boolean).length}/{items.length} complete
        </p>
      </div>
    </div>
  );
}
