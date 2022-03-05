import fs from 'fs';
import parseAllFromDir from '../api/localMarkdown';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import PostIndexComponent from '../../components/PostIndexComponent';

const index = ({ posts }) => {
    const router = useRouter();
    const canonicalUrl = 'http://hyperfixations.io' + router.asPath;

    return (
        <>
            <NextSeo
                title="Blog Posts"
                description="List of my available blog posts about building a site with Next.js"
                canonical={canonicalUrl}
                openGraph={{
                    url: 'https://hyperfixatons.io/blog/',
                    title: 'Hyperfixations',
                    description: 'List of my available blog posts',
                    site_name: 'Hyperfixations.io',
                }}
                twitter={{
                    handle: '@SamCBoland',
                    cardType: 'summary_large_image',
                }}
            />
            <div className="mb-24">
                <div className="container mx-auto w-3/4 pt-24 md:w-3/4 lg:w-2/3">
                    <div className="mx-auto mb-6 text-left">
                        <h1 className="mb-4 text-4xl font-light sm:text-6xl">Development Log</h1>
                        <p className="font-light ">
                            A growing record of my progress building the site that you're reading
                            this on. These are not tutorials, but I hope you find something of use
                            in them anyways.
                        </p>
                    </div>
                    <div className="w-1/4 border border-b border-secondary"></div>
                    <div className="mx-auto border-b border-primary">
                        {posts.map(({ slug, frontmatter }) => (
                            <PostIndexComponent slug={slug} frontmatter={frontmatter} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

export async function getStaticPaths() {
    const dir = '_posts';
    const postsPerPage = 10;
    const postCount = fs.readdirSync(dir + '/').length;
    const pageCount = Math.ceil(postCount / postsPerPage);
    const paths = [];
    for (var i = 0; i < pageCount; i++) {
        paths.push({ params: { index: (i + 1).toString() } });
        // Adding 1 here so that the page routes start at 1.
        // Just feels better. No real reason.
    }
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: index }) {
    const dir = '_posts';
    const allPosts = parseAllFromDir({ dir });
    const postStartingIndex = (index.index - 1) * 10;
    const posts = allPosts.slice(postStartingIndex, postStartingIndex + 10);
    return {
        props: {
            posts,
        },
    };
}
