export default function D30Resources() {
  const papers = [
    {
      year: '2025',
      season: 'Summer',
      papers: [
        {
          name: 'Paper 12 — Question Paper',
          code: '9618_s25_qp_12',
          url: 'https://pastpapers.papacambridge.com/download_file.php?files=https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9618_s25_qp_12.pdf',
          type: 'Question Paper',
          color: 'bg-blue-50 border-blue-200',
          badge: 'bg-blue-100 text-blue-700',
          btn: 'bg-blue-600 hover:bg-blue-700',
        },
        {
          name: 'Paper 12 — Mark Scheme',
          code: '9618_s25_ms_12',
          url: 'https://pastpapers.papacambridge.com/download_file.php?files=https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/9618_s25_ms_12.pdf',
          type: 'Mark Scheme',
          color: 'bg-green-50 border-green-200',
          badge: 'bg-green-100 text-green-700',
          btn: 'bg-green-600 hover:bg-green-700',
        },
      ],
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
        📄 Past Paper Resources
      </h1>
      <p className="text-gray-500 text-lg mb-8">Cambridge A Level Computer Science 9618 — Official Past Papers</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-2xl">💡</span>
        <div>
          <p className="font-bold text-amber-800">How to Use Past Papers</p>
          <ul className="text-amber-700 text-sm mt-1 space-y-1">
            <li>1. Attempt the full paper under timed conditions (2 hours)</li>
            <li>2. Check your answers against the mark scheme</li>
            <li>3. Note which topics you got wrong</li>
            <li>4. Revise those topics then try again</li>
          </ul>
        </div>
      </div>

      {papers.map((year, yi) => (
        <div key={yi} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              {year.year}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{year.season} {year.year}</h2>
              <p className="text-sm text-gray-500">Cambridge International AS & A Level Computer Science</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">✅ Available</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {year.papers.map((paper, pi) => (
              <div key={pi} className={`border-2 rounded-xl p-5 ${paper.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${paper.badge}`}>{paper.type}</span>
                    <h3 className="font-bold text-gray-900 mt-2">{paper.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 font-mono">{paper.code}.pdf</p>
                  </div>
                  <span className="text-3xl">📄</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2.5 px-4 ${paper.btn} text-white rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-sm`}
                  >
                    📥 Download PDF
                  </a>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all"
                  >
                    👁️ View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🌐 More Past Papers</h2>
        <p className="text-gray-600 text-sm mb-4">Find more past papers on these websites:</p>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { name: 'Papa Cambridge', url: 'https://pastpapers.papacambridge.com', desc: 'Free past papers', color: 'bg-blue-50 border-blue-200 text-blue-700' },
            { name: 'Save My Exams', url: 'https://www.savemyexams.com', desc: 'Revision notes + papers', color: 'bg-purple-50 border-purple-200 text-purple-700' },
            { name: 'GCE Guide', url: 'https://gceguide.com', desc: 'All CAIE papers', color: 'bg-green-50 border-green-200 text-green-700' },
          ].map((site, i) => (
            <a key={i} href={site.url} target="_blank" rel="noopener noreferrer"
              className={`block p-4 border-2 rounded-xl hover:-translate-y-0.5 transition-all ${site.color}`}>
              <p className="font-bold">{site.name}</p>
              <p className="text-xs mt-1 opacity-75">{site.desc}</p>
              <p className="text-xs mt-2 font-semibold">Visit →</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Paper 2 Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Duration', value: '2 hours' },
            { label: 'Total Marks', value: '100 marks' },
            { label: 'Paper Code', value: '9618/02' },
            { label: 'Weighting', value: '40% of A Level' },
            { label: 'Question Format', value: '4-6 structured questions' },
            { label: 'Topics', value: 'Pseudocode, Algorithms, Data Structures, OOP' },
          ].map((fact, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-indigo-100">
              <span className="text-gray-600 text-sm font-medium">{fact.label}</span>
              <span className="text-indigo-700 font-bold text-sm">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
