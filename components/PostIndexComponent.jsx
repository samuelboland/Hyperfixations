import Link from 'next/link';
import moment from 'moment';

const PostIndexComponent = ({ slug, frontmatter }) => {
    const FormatDate = ({ date }) => {
        return moment(date).format('dddd, YYYY-MM-DD');
    };
    return (
        <div key={frontmatter.date} className="container mx-auto border-b border-primary px-5 py-5">
            <p data-cy="postIndexDate" className="font-light text-neutral">
                <FormatDate date={frontmatter.date} />
            </p>
            <Link href={`/posts/${slug}`}>
                <a data-cy="postIndexLink">
                    <h2
                        data-cy="postIndexTitle"
                        className="title-font text-base-primary mb-2 text-xl sm:text-2xl"
                    >
                        {frontmatter.title}
                    </h2>
                </a>
            </Link>
            <h3>{frontmatter.description}</h3>
        </div>
    );
};
export default PostIndexComponent;
