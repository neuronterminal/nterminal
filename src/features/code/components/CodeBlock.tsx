import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../hooks/useTheme';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'javascript',
  className = ''
}: CodeBlockProps) {
  const theme = useTheme();

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? tomorrow : undefined}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          background: theme === 'dark' ? '#0d0208' : '#f8f9fa'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}