import fs from 'fs';
import matter from 'gray-matter';
import glob from 'glob';

const parseAllFromDir = ({ dir }) => {
    // We reverse here so that we get the newest posts at the top of the resulting index page.
    // I could reverse it somewhere else, but this is as good of a location as any.
    const files = fs.readdirSync(dir + '/').reverse();
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`${dir}/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
            slug,
            frontmatter,
            content,
        };
    });
    return posts;
};

export default parseAllFromDir;
