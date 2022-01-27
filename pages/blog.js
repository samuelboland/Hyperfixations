import styles from '../styles/Standard.module.css';
import ReactMarkdown from 'react-markdown';
import * as qs from 'qs';

function Blog({ posts }) {
    const STRAPI_API_KEY = process.env.STRAPI_API_KEY;
    console.log(process.env.STRAPI_API_KEY);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Posts</h1>
            {posts.map((post) => (
                <div className={styles.blogPost} key={post.id}>
                    <ReactMarkdown>{post.attributes.Body}</ReactMarkdown>
                    <h2 className={styles.postDate}>{post.attributes.Date}</h2>
                </div>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const myHeaders = new Headers();
    myHeaders.append(
        'Authorization',
        'Bearer 26215454132615f150b4c2299a87a787fca63bb7169cc8b35c08c5c29b914e8b929dac1bd09ad560f388d1158834e0f8d23cd2b804708ddc6ef217ebfffb7602380d06397b802b4e680223970c70f20f69a22d4998c9fd3e71e97c0b2cb1cfad381279e9277abfab37283914cd271003fdca987255f1980f9942ec321b97904f'
    );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const query = qs.stringify({
        sort: ['id:desc'],
    });

    const res = await fetch(`http://127.0.0.1:1337/api/posts?${query}`, requestOptions);
    const posts = await res.json();

    return {
        props: {
            posts: posts.data,
        },
    };
};

export default Blog;
