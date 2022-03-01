import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            data-cy="footer"
            className="footer fixed bottom-0 grid-flow-col items-center bg-neutral p-4 text-neutral-content"
        >
            <div className="grid-flow-col place-self-auto">
                <p>© 2022 |</p>
                <Link href="/privacy">
                    <a>Privacy |</a>
                </Link>
                <Link href="/licenses">
                    <a>Licenses</a>
                </Link>
            </div>
            <div className="grid-flow-col place-self-end ">
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
