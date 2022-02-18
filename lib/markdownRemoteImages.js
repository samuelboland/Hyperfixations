import Image from 'next/image';
// Separating this out into separate file, since I use it in multiple places.

export const MarkdownComponents = {
    // Stole this directly from here: https://amirardalan.com/blog/use-next-image-with-react-markdown
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
                <Image
                    src={image.properties.src}
                    width={width}
                    height={height}
                    className="postImg"
                    alt={alt}
                    priority={isPriority}
                />
            );
        }
        return <p>{paragraph.children}</p>;
    },
};
