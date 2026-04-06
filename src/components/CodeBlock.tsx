import type { ReactNode } from 'react';

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: 'pseudocode' | 'python';
}

export default function CodeBlock({ code, title, language = 'pseudocode' }: CodeBlockProps) {
  const pythonRegex = /(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:def|return|if|else|elif|for|while|break|continue|in|not|and|or|class|with|as|try|except|finally|import|from|pass|global|True|False|None)\b|\b(?:print|input|len|range|int|float|str|list|dict|set|tuple|sum|max|min|open|enumerate|append|insert|remove|pop)\b|\b\d+(?:\.\d+)?\b)/gm;
  const pseudocodeRegex = /(\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:DECLARE|CONSTANT|TYPE|ENDTYPE|ARRAY|OF|IF|THEN|ELSE|ENDIF|FOR|TO|STEP|NEXT|WHILE|ENDWHILE|REPEAT|UNTIL|CASE|OF|OTHERWISE|ENDCASE|FUNCTION|RETURNS|ENDFUNCTION|PROCEDURE|ENDPROCEDURE|CALL|RETURN|INPUT|OUTPUT|OPENFILE|READFILE|WRITEFILE|CLOSEFILE|EOF|BYREF|BYVAL|AND|OR|NOT|DIV|MOD|TRUE|FALSE)\b|\b(?:INTEGER|REAL|STRING|CHAR|BOOLEAN|DATE)\b|\b\d+(?:\.\d+)?\b|←)/gm;

  const renderHighlighted = (text: string) => {
    const regex = language === 'python' ? pythonRegex : pseudocodeRegex;
    const lines = text.split('\n');

    const colorClass = (token: string) => {
      if (language === 'python') {
        if (token.startsWith('#')) return 'text-slate-400';
        if (token.startsWith('"') || token.startsWith("'")) return 'text-emerald-300';
        if (/^\d/.test(token)) return 'text-amber-300';
        if (/^(print|input|len|range|int|float|str|list|dict|set|tuple|sum|max|min|open|enumerate|append|insert|remove|pop)$/.test(token)) return 'text-cyan-300';
        return 'text-violet-300 font-semibold';
      }

      if (token.startsWith('//')) return 'text-slate-400';
      if (token === '←') return 'text-yellow-300 font-semibold';
      if (token.startsWith('"') || token.startsWith("'")) return 'text-emerald-300';
      if (/^\d/.test(token)) return 'text-amber-300';
      if (/^(INTEGER|REAL|STRING|CHAR|BOOLEAN|DATE)$/.test(token)) return 'text-pink-300 font-semibold';
      return 'text-cyan-300 font-semibold';
    };

    return lines.map((line, lineIndex) => {
      const parts: ReactNode[] = [];
      let lastIndex = 0;
      const matches = [...line.matchAll(regex)];

      matches.forEach((match, matchIndex) => {
        const token = match[0];
        const start = match.index ?? 0;

        if (start > lastIndex) {
          parts.push(
            <span key={`plain-${lineIndex}-${matchIndex}`}>
              {line.slice(lastIndex, start)}
            </span>
          );
        }

        parts.push(
          <span key={`token-${lineIndex}-${matchIndex}`} className={colorClass(token)}>
            {token}
          </span>
        );

        lastIndex = start + token.length;
      });

      if (lastIndex < line.length) {
        parts.push(
          <span key={`tail-${lineIndex}`}>
            {line.slice(lastIndex)}
          </span>
        );
      }

      return (
        <div key={`line-${lineIndex}`} className="whitespace-pre">
          {parts.length > 0 ? parts : ' '}
        </div>
      );
    });
  };

  const langLabel = language === 'python' ? 'Python' : 'Pseudocode';
  const langIcon = language === 'python' ? '\uD83D\uDC0D' : '\uD83D\uDCDD';
  const labelColor = language === 'python' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white';

  return (
    <div className="my-4">
      {title && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-t-xl text-sm font-semibold flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <span className="ml-2 flex-1">{title}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${labelColor}`}>{langIcon} {langLabel}</span>
        </div>
      )}
      <pre className={`code-block ${title ? 'rounded-t-none' : ''}`}>
        <code>{renderHighlighted(code)}</code>
      </pre>
    </div>
  );
}
