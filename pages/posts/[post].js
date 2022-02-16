import * as githubApi from '../../lib/githubApi';
import md from 'markdown-it';

const posts = (props) => {
    const post = props.data;
    return (
        <main>
            <h1>{post.data.title}</h1>
            <h2>{post.data.date}</h2>
            <div
                data-cy="postIndexBody"
                dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
            />
        </main>
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
