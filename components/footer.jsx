import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            data-cy="footer"
            className="footer fixed inset-x-0 bottom-0 items-center bg-base-300 p-4 text-base-content"
        >
            <div className="grid-flow-col items-center">
                <h1>Hyperfixations |</h1>
                <p>© Sam Boland 2022</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link href="https://twitter.com/samcboland">
                    <a aria-label="button" data-cy="footerTwitterLink">
                        <button className="btn btn-ghost btn-square">
                            <FaTwitter size={24} />
                        </button>
                    </a>
                </Link>
                <Link href="https://www.github.com/samuelboland/">
                    <a aria-label="button" data-cy="footerGithubLink">
                        <button className="btn btn-ghost btn-square">
                            <FaGithub size={24} />
                        </button>
                    </a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
