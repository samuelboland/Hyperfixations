import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const SyntaxHighlight = {
    code({ node, inline, className, ...props }) {
        // Set code language declared in code block: ```lang
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={vscDarkPlus}
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
