export default function PythonSetup() {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">⚙️ Setting Up Python</h1>
      <p className="text-gray-500 mb-6 text-lg">Get Python and VS Code installed on your computer</p>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Install Python</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h3 className="font-bold text-gray-800">Go to python.org</h3>
              <p className="text-gray-600 mt-1">Visit <code className="bg-gray-100 px-2 py-0.5 rounded text-emerald-700 font-mono">python.org</code> and click the big yellow "Download Python 3.12" button (or whatever the latest version is).</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h3 className="font-bold text-gray-800">Run the Installer</h3>
              <p className="text-gray-600 mt-1">Open the downloaded file and follow the wizard.</p>
              <div className="warning-box mt-3">
                <p className="font-bold text-red-800">⚠️ CRITICAL — DO NOT SKIP THIS</p>
                <p className="text-red-700 mt-1">
                  At the VERY FIRST screen, <strong>tick the checkbox that says "Add Python to PATH"</strong>.
                  If you miss this, Python won't work from the terminal and you'll have to reinstall.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h3 className="font-bold text-gray-800">Verify Installation</h3>
              <p className="text-gray-600 mt-1">Open Command Prompt (Windows) or Terminal (Mac) and type:</p>
              <div className="bg-gray-900 text-green-400 font-mono p-3 rounded-lg mt-2 text-sm">
                <p>$ python --version</p>
                <p className="text-gray-400">Python 3.12.x</p>
              </div>
              <p className="text-gray-500 text-sm mt-2">If you see a version number, you're good! If not, you forgot to add Python to PATH.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Install VS Code (Your Code Editor)</h2>
        <p className="text-gray-600 mb-4">VS Code is where you'll write all your Python code. It's free, fast, and the most popular editor in the world.</p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h3 className="font-bold text-gray-800">Download VS Code</h3>
              <p className="text-gray-600 mt-1">Go to <code className="bg-gray-100 px-2 py-0.5 rounded text-blue-700 font-mono">code.visualstudio.com</code> and download it.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h3 className="font-bold text-gray-800">Install the Python Extension</h3>
              <p className="text-gray-600 mt-1">
                Open VS Code → Click the Extensions icon on the left sidebar (it looks like 4 squares) →
                Search "Python" → Install the one by <strong>Microsoft</strong> (it'll be the first result with millions of downloads).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h3 className="font-bold text-gray-800">Create Your First File</h3>
              <p className="text-gray-600 mt-1">
                File → New File → Save it as <code className="bg-gray-100 px-2 py-0.5 rounded text-emerald-700 font-mono">day1.py</code>.
                The <code>.py</code> extension tells VS Code "this is a Python file".
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 3: How to Run Python Code</h2>
        <p className="text-gray-600 mb-4">There are two ways to run your code:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-700 mb-2">▶️ Method 1: Play Button</h3>
            <p className="text-gray-700 text-sm">
              With a <code>.py</code> file open in VS Code, click the <strong>green play button ▶️</strong> in the top-right corner.
              The output appears in the terminal at the bottom.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">💻 Method 2: Terminal</h3>
            <p className="text-gray-700 text-sm">
              Open Terminal in VS Code (Ctrl + `) and type:
            </p>
            <div className="bg-gray-900 text-green-400 font-mono p-2 rounded-lg mt-2 text-xs">
              python day1.py
            </div>
          </div>
        </div>
      </div>

      <div className="tip-box">
        <p className="font-bold text-amber-800">💡 Tip for Beginners</p>
        <p className="text-amber-900 mt-1">
          Don't worry if setup feels boring — you only do this ONCE. After today, you just open VS Code and start coding.
          The real fun starts in the next section! 🎉
        </p>
      </div>
    </div>
  );
}
