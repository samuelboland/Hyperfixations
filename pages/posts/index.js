import Link from 'next/link';
import * as githubApi from '../../lib/githubApi';
import moment from 'moment';

const index = (props) => {
    const orderPosts = (props) => [...props.data].sort((a, b) => b.date - a.date).reverse();
    const orderedPosts = orderPosts(props);

    const dateFormatter = (date) => {
        let d = new Date(date);
        let formatted = moment(d).format('YYYY-MM-DD');
        return formatted;
    };

    return (
        <div>
            <main>
                <h1>Development Log</h1>
                <p>
                    A growing record of my progress building the site that you're reading this on.
                </p>
            </main>
            {orderedPosts.map((item) => {
                const title = item.frontmatter.title;
                const date = dateFormatter(item.frontmatter.date);
                const name = item.name.slice(0, -3);
                const content = item.content;
                return (
                    <main key={date}>
                        <Link href={'/posts/' + name}>
                            <a data-cy="postIndexLink">
                                <h2 data-cy="postIndexTitle">{title}</h2>
                            </a>
                        </Link>
                        <h3 data-cy="postIndexDate">{date}</h3>
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
