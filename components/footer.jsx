import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer class="footer fixed inset-x-0 bottom-0 items-center bg-neutral p-4 text-neutral-content">
            <div class="grid-flow-col items-center">
                <h1>Hyperfixations |</h1>
                <p>© Sam Boland 2022</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link href="https://twitter.com/samcboland">
                    <button class="btn btn-ghost btn-square">
                        <FaTwitter size={24} />
                    </button>
                </Link>
                <Link href="https://www.github.com/samuelboland/">
                    <button class="btn btn-ghost btn-square">
                        <FaGithub size={24} />
                    </button>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
