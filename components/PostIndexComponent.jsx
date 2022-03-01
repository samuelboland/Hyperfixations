import Link from 'next/link';
import moment from 'moment';

const PostIndexComponent = ({ slug, frontmatter }) => {
    const FormatDate = ({ date }) => {
        return moment(date).format('dddd, YYYY-MM-DD');
    };
    return (
        <div key={frontmatter.date} className="border-b border-gray-500 py-6">
            <Link href={`/posts/${slug}`}>
                <a data-cy="postIndexLink">
                    <h2
                        data-cy="postIndexTitle"
                        className="mb-2 text-2xl font-light text-base-content sm:text-3xl"
                    >
                        {frontmatter.title}
                    </h2>
                </a>
            </Link>
            <p data-cy="postIndexDate" className="py-1 font-thin text-info-content">
                <FormatDate date={frontmatter.date} />
            </p>
            <p>{frontmatter.description}</p>
        </div>
    );
};
export default PostIndexComponent;
