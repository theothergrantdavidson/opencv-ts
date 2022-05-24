import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeViewer = ({ children }: { children: string }) => {
    return (
        <SyntaxHighlighter customStyle={{width: '100%'}} showLineNumbers={true} language="typescript" wrapLines={true} style={darcula}>
            {children}
        </SyntaxHighlighter>
    );
};
