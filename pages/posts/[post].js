import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '../../lib/markdownRemoteImages';
import SyntaxHighlight from '../../lib/syntaxHighlight';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import glob from 'glob';
import moment from 'moment';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const posts = ({ frontmatter, content }) => {
    const router = useRouter();
    const canonicalUrl = 'http://hyperfixations.io' + router.asPath;

    return (
        <>
            <NextSeo
                title={frontmatter.title}
                description="Approximate knowledge of many things"
                canonical={canonicalUrl}
                openGraph={{
                    url: 'https://hyperfixatons.io/',
                    title: 'Hyperfixations',
                    description:
                        'Follow along as I create and document the process of building a blog with Next.js! Once complete, I will use this to document my various hobby fixations as they come and go.',
                    site_name: 'Hyperfixations',
                }}
                twitter={{
                    handle: '@SamCBoland',
                    cardType: 'summary_large_image',
                }}
            />
            <section>
                <div className="container mx-auto px-5 py-24">
                    <article className="prose mx-auto md:prose-lg lg:prose-xl">
                        <h1 data-cy="postShowTitle">{frontmatter.title}</h1>
                        <h2 data-cy="postShowDate">
                            {moment(frontmatter.date).format('dddd, YYYY-MM-DD')}
                        </h2>
                        <ReactMarkdown
                            data-cy="postShowBody"
                            components={(MarkdownComponents, SyntaxHighlight)}
                            remarkPlugins={[remarkToc]}
                            rehypePlugins={[rehypeSlug]}
                        >
                            {content}
                        </ReactMarkdown>
                    </article>
                </div>
            </section>
        </>
    );
};

export default posts;

export async function getStaticPaths() {
    const realSlug = (fileName) => {
        let extension = path.extname(fileName);
        return path.basename(fileName, extension);
    };
    const files = fs.readdirSync('_posts/');
    const paths = files.map((fileName) => ({
        params: {
            post: realSlug(fileName),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { post } }) {
    const fileName = glob.sync(`_posts/${post}.*`);
    const file = fs.readFileSync(fileName[0], 'utf-8');
    const { data: frontmatter, content } = matter(file);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}
