import Link from 'next/link';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import fs from 'fs';
import matter from 'gray-matter';

const index = ({ posts }) => {
    const PostComponent = ({ slug, frontmatter }) => {
        const FormatDate = ({ date }) => {
            return moment(date).format('dddd, YYYY-MM-DD');
        };
        return (
            <div key={frontmatter.date} className="container mx-auto px-5 py-5">
                <Link href={`/posts/${slug}`}>
                    <a data-cy="postIndexLink">
                        <h2
                            data-cy="postIndexTitle"
                            className="title-font mb-4 text-xl font-medium text-gray-900 sm:text-2xl"
                        >
                            {frontmatter.title}
                        </h2>
                    </a>
                </Link>
                <h3 data-cy="postIndexDate">
                    <FormatDate date={frontmatter.date} />
                </h3>
            </div>
        );
    };

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
            <div className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-24">
                    <div className="mb-20 text-center">
                        <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                            Development Log
                        </h1>
                        <p className="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                            A growing record of my progress building the site that you're reading
                            this on. I try to remember to include screenshots and code blocks, and I
                            tend to write as I am figuring things out. These are not tutorials, but
                            I hope you find something of use in them anyways.
                        </p>
                    </div>
                    {posts.map(({ slug, frontmatter }) => (
                        <PostComponent slug={slug} frontmatter={frontmatter} />
                    ))}
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    // We reverse here so that we get the newest posts at the top of the resulting index page.
    // I could reverse it somewhere else, but this is as good of a location as any.
    const files = fs.readdirSync('_posts/').reverse();
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });
    return {
        props: {
            posts,
        },
    };
}

export default index;
