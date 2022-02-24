import Link from 'next/link';
import * as githubApi from '../../lib/githubApi';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const index = (props) => {
    const orderPosts = (props) => [...props.data].sort((a, b) => b.date - a.date).reverse();
    const orderedPosts = orderPosts(props);

    const dateFormatter = (date) => {
        let d = new Date(date);
        let formatted = moment(d).format('YYYY-MM-DD');
        return formatted;
    };

    const PostComponent = ({ post }) => {
        const name = post.name.slice(0, -3);
        const title = post.frontmatter.title;
        const date = dateFormatter(post.frontmatter.date);
        return (
            <div key={date} className="container mx-auto px-5 py-5">
                <Link href={'/posts/' + name}>
                    <a data-cy="postIndexLink">
                        <h2
                            data-cy="postIndexTitle"
                            className="title-font mb-4 text-xl font-medium text-gray-900 sm:text-2xl"
                        >
                            {title}
                        </h2>
                    </a>
                </Link>
                <h3 data-cy="postIndexDate">{date}</h3>
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
                    {orderedPosts.map((item) => {
                        return <PostComponent post={item} />;
                    })}
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    // This returns an array of objects. Each object
    // has the keys name, content, and frontmatter.
    const data = await githubApi.fetchAll();
    return {
        props: { data: data },
    };
}

export default index;
