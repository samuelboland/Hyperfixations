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
// and content. The entire time, carry the name of the file through with the 
// other data so that I can get it to the posts index page. 
// I want to do this because I am using the file name as the path, so 
// if I want to link to a post from the index page, I need that filename. 
export const fetchAll = async () => {
    const apiResponse = await fetch(URL, {
        method: 'GET',
        headers: headers,
    }).then((response) => response.json());

    const nameAndUrl = apiResponse.map((item) => {
        return { name: item.name, url: item.download_url };
    });

    const nameAndMarkdown = nameAndUrl.map((item) => {
        const articles = fetch(item.url)
            .then((response) => response.text())
            .then((article) => matter(article))
            .then((markdown) => {
                return { name: item.name, content: markdown.content, frontmatter: markdown.data };
            });
        return articles;
    });

    const resolvedPromises = await Promise.all(nameAndMarkdown);

    return resolvedPromises;
};

export const fetchAllPostNames = async () => {
    const apiResponse = await fetch(URL, {
        method: 'GET',
        headers: headers,
    }).then((response) => response.json());

    const articles = await Promise.all(apiResponse.map((item) => item.name));
    const trimmedArticles = articles.map((item) => item.slice(0, -3));
    return trimmedArticles;
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
