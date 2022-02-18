import * as githubApi from '../../lib/githubApi';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '../../lib/markdownRemoteImages';

const posts = (props) => {
    const post = props.data;
    return (
        <main>
            <h1 data-cy="postShowTitle">{post.data.title}</h1>
            <h2 data-cy="postShowDate">{post.data.date}</h2>
            <ReactMarkdown data-cy="postShowBody" components={MarkdownComponents}>
                {post.content}
            </ReactMarkdown>
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
