import matter from 'gray-matter';
import md from 'markdown-it';

const Test = (props) => {
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
    const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
    const URL = 'https://api.github.com/repos/samuelboland/Hyperfixations_Posts/contents/posts';

    let headers = new Headers({
        Accept: 'application/json',
        'User-Agent': 'samuelboland',
        Authorization: `token ${GITHUB_API_TOKEN}`,
    });

    const apiResponse = await fetch(URL, {
        method: 'GET',
        headers: headers,
    }).then((response) => response.json());

    const urls = apiResponse.map((item) => item.download_url);

    const articles = await Promise.all(
        urls.map((url) => {
            const markdown = fetch(url).then((response) => response.text());
            return markdown;
        }),
    );
    const data = articles.map((article) => {
        const { data: frontmatter, content } = matter(article);
        return { data: frontmatter, content };
    });

    return {
        props: { message: data },
    };
}

export default Test;
