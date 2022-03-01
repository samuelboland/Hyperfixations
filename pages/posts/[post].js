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
                <div className="container mx-4 w-3/4 py-16 sm:mx-auto lg:w-1/2">
                    <h1
                        data-cy="postShowTitle"
                        className="text-3xl font-light text-base-content sm:text-4xl"
                    >
                        {frontmatter.title}
                    </h1>
                    <h2
                        data-cy="postShowDate"
                        className="mt-4 text-xl font-light text-info-content sm:text-2xl"
                    >
                        {moment(frontmatter.date).format('dddd, YYYY-MM-DD')}
                    </h2>
                    <article className="md:prose-md prose mb-16 mt-8 prose-h2:font-normal prose-h3:font-normal prose-h3:underline prose-a:text-neutral prose-img:rounded-xl">
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
