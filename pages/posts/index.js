import md from 'markdown-it';
import githubApi from '../../lib/githubApi';

const index = (props) => {
    const posts = props.message.sort((a, b) => b.date - a.date).reverse();

    return (
        <div>
            {posts.map((item) => {
                const title = item.data.title;
                const slug = item.data.slug;
                const date = item.data.date;
                const content = item.content;
                return (
                    <main key={date}>
                        <h1 data-cy="postIndexTitle">{title}</h1>
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
    const data = await githubApi();
    return {
        props: { message: data },
    };
}

export default index;
