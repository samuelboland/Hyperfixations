import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols3 lg:grid-cols-4 p-4 md:p-0">
            {posts.map(({ slug, frontmatter, containsTodo }) => (
                <div
                    key={slug}
                    className="border border-gray-200 m-2 rounded-xl-1 shadow-lg overflow-hidden flex flex-col"
                >
                    <Link href={`/posts/${slug}`}>
                        <a>
                            <h1 className="p-4">{frontmatter.title}</h1>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync('_posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        // I want a way to mark a post if it contains an unresolved todo item
        // I don't like having to contain the entire return in both branches here,
        // but I can't use state in this function.
        if (content.includes('TODO')) {
            const containsTodo = true;
            return {
                slug,
                frontmatter,
            };
        } else {
            const containsTodo = false;
            return {
                slug,
                frontmatter,
            };
        }
    });
    return {
        props: {
            posts,
        },
    };
}
