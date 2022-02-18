import * as githubApi from '../../lib/githubApi';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '../../lib/markdownRemoteImages';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const posts = (props) => {
    const router = useRouter();
    const canonicalUrl = 'http://hyperfixations.io' + router.asPath;

    const post = props.data;
    return (
        <>
            <NextSeo
                title={props.data.data.title}
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
            <main>
                <h1 data-cy="postShowTitle">{post.data.title}</h1>
                <h2 data-cy="postShowDate">{post.data.date}</h2>
                <ReactMarkdown data-cy="postShowBody" components={MarkdownComponents}>
                    {post.content}
                </ReactMarkdown>
            </main>
        </>
    );
};

export async function getStaticPaths() {
    const listOfPaths = await githubApi.fetchAllPostNames();
    const paths = listOfPaths.map((path) => ({
        params: {
            post: path,
            fallback: false,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const data = await githubApi.fetchOne(params.post);
    return {
        props: { data },
    };
}

export default posts;
