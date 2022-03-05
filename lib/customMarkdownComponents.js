import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

// Separating this out into separate file, since I use it in multiple places.

export const MarkdownComponents = {
    // Stole this first component directly from here:
    // https://amirardalan.com/blog/use-next-image-with-react-markdown
    // Convert Markdown img to next/image component and set height, width and priority
    // example: ![AltText {priority}{768x432}](...
    p: (paragraph) => {
        const { node } = paragraph;

        if (node.children[0].tagName === 'img') {
            const image = node.children[0];
            const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
            const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
            const metaWidth = image.properties.alt.match(/{([^}]+)x/);
            const metaHeight = image.properties.alt.match(/x([^}]+)}/);
            const width = metaWidth ? metaWidth[1] : '768';
            const height = metaHeight ? metaHeight[1] : '432';

            return (
                <div className="relative h-96 w-full">
                    <Image
                        className="container absolute"
                        src={image.properties.src}
                        layout="fill"
                        objectFit="contain"
                        alt={alt}
                        priority={isPriority}
                    />
                </div>
            );
        }
        return <p>{paragraph.children}</p>;
    },
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
