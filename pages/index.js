import Link from 'next/link';
import Header from '../components/header';

const Home = () => {
    return (
        <div>
            <Header />
            {/* Title and Subtitle */}
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div>
                            <h1 className="text-5xl sm:text-6xl">Hyperfixations.io</h1>
                            <h2 className="my-4 text-xl font-light text-base-content">A blog</h2>
                            <h2 className="my-4 text-xl font-light text-base-content">
                                By someone with ADHD, about the topics that they get obsessed with.
                            </h2>
                        </div>
                        {/* Horizontal Rule */}
                        <div>
                            <div className="mx-auto mb-5 w-3/4 place-content-center border-t border-base-content"></div>
                        </div>
                        {/* Links and Descriptions */}
                        <div className="mx-auto grid grid-cols-1">
                            <Link href="/blog/1">
                                <a className="btn btn-primary" data-cy="indexLinkForBlog">
                                    <p className="text-primary-content">Read some ramblings</p>
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="btn btn-ghost" data-cy="indexLinkForAbout">
                                    Who are you?
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
