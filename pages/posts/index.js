import md from 'markdown-it';
import Link from 'next/link';
import * as githubApi from '../../lib/githubApi';
import matter from 'gray-matter';

const index = (props) => {
    const orderPosts = (props) => [...props.data].sort((a, b) => b.date - a.date).reverse();

    const orderedPosts = orderPosts(props);
    return (
        <div>
            {orderedPosts.map((item) => {
                const title = item.frontmatter.title;
                const date = item.frontmatter.date;
                const name = item.name.slice(0, -3);
                const content = item.content;
                return (
                    <main key={date}>
                        <Link href={'/posts/' + name}>
                            <a data-cy="postIndexLink">
                                <h1 data-cy="postIndexTitle">{title}</h1>
                            </a>
                        </Link>
                        <h3 data-cy="postIndexDate">{date}</h3>
                        <div
                            data-cy="postIndexBody"
                            dangerouslySetInnerHTML={{ __html: md().render(content) }}
                        />
                    </main>
                );
            })}
        </div>
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
