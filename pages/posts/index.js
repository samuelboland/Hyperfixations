import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import PostIndexComponent from '../../components/PostIndexComponent';
import parseAllFromDir from '../api/localMarkdown';

const index = ({ posts }) => {
    const router = useRouter();
    const canonicalUrl = 'http://hyperfixations.io' + router.asPath;

    return (
        <>
            <NextSeo
                title="Development Log"
                description="Approximate knowledge of many things"
                canonical={canonicalUrl}
                openGraph={{
                    url: 'https://hyperfixatons.io/posts',
                    title: 'Hyperfixations',
                    description: 'Index page for my development log blog posts',
                    site_name: 'Hyperfixations',
                }}
                twitter={{
                    handle: '@SamCBoland',
                    cardType: 'summary_large_image',
                }}
            />
            <div>
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

export async function getStaticProps() {
    const dir = '_posts';
    const posts = parseAllFromDir({ dir });
    return {
        props: {
            posts,
        },
    };
}

export default index;
