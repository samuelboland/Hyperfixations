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
            <div className="body-font text-base-content">
                <div className="container mx-auto px-5 py-24">
                    <div className="mx-auto mb-20 w-3/4 text-center lg:w-1/2">
                        <h1 className="title-font mb-4 text-2xl font-medium text-base-content sm:text-3xl">
                            Development Log
                        </h1>
                        <p className="mx-auto font-light leading-relaxed text-base-content lg:w-3/4 xl:w-2/4">
                            A growing record of my progress building the site that you're reading
                            this on. These are not tutorials, but I hope you find something of use
                            in them anyways.
                        </p>
                    </div>
                    <div className="mx-auto w-3/4 place-self-center border-b border-primary">
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
