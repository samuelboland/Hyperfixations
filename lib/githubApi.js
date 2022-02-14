import matter from 'gray-matter';

const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
const URL = 'https://api.github.com/repos/samuelboland/Hyperfixations_Posts/contents/posts/';

let headers = new Headers({
    Accept: 'application/json',
    'User-Agent': 'samuelboland',
    Authorization: `token ${GITHUB_API_TOKEN}`,
});

// Return list of all files in the posts folder in my Posts repository.
// Iterate over all posts, downloading each of them.
// Once they have all downloaded, extract and return the frontmatter
// and content.
export const fetchAll = async () => {
    const apiResponse = await fetch(URL, {
        method: 'GET',
        headers: headers,
    }).then((response) => response.json());

    const articles = await Promise.all(
        apiResponse.map((item) => {
            const markdown = fetch(item.download_url).then((response) => response.text());
            return markdown;
        }),
    );

    const data = articles.map((article) => {
        const { data: frontmatter, content } = matter(article);
        return { data: frontmatter, content };
    });
    return data;
};

// Retrieves a single article from the repository based on the slug that it receives.
// Extracts and returns frontmatter and content.
// I feel like this could be made more compact/elegant without sacrifincg too much
// readability, but that can wait for another time.
export const fetchOne = async (slug) => {
    const apiResponse = await fetch(URL + slug + '.md', {
        method: 'GET',
        headers: headers,
    }).then((response) => response.json());

    const article = await fetch(apiResponse.download_url).then((response) => response.text());

    const { data: frontmatter, content } = matter(article);

    const data = { data: frontmatter, content };

    return data;
};
