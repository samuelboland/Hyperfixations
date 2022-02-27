import Link from 'next/link';
import moment from 'moment';

const PostIndexComponent = ({ slug, frontmatter }) => {
    const FormatDate = ({ date }) => {
        return moment(date).format('dddd, YYYY-MM-DD');
    };
    return (
        <div key={frontmatter.date} className="container mx-auto border-b border-primary px-5 py-5">
            <h3 data-cy="postIndexDate">
                <FormatDate date={frontmatter.date} />
            </h3>
            <Link href={`/posts/${slug}`}>
                <a data-cy="postIndexLink">
                    <h2
                        data-cy="postIndexTitle"
                        className="title-font text-base-primary mb-4 text-xl sm:text-2xl"
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
