import matter from 'gray-matter';

const githubApi = async () => {
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
    return data;
};

export default githubApi;
