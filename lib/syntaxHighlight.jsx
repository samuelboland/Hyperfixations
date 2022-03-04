import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const SyntaxHighlight = {
    code({ node, inline, className, ...props }) {
        // Set code language declared in code block: ```lang
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={docco}
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={true}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        );
    },
};

export default SyntaxHighlight;
