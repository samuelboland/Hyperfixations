import Link from 'next/link';
import Header from '../components/header';

const Home = () => {
    return (
        <div className="place-content-center bg-gradient-to-br from-base-100 to-accent">
            <Header />
            <section className="hero mx-auto min-h-screen w-3/4 place-self-auto lg:w-1/2">
                <div className="mx-auto w-3/4 rounded-lg bg-gray-50 bg-opacity-30 shadow">
                    {/* Title and Subtitle */}
                    <div className="container pt-10 text-center ">
                        <h1 className="title-font text-2xl font-bold text-base-content sm:text-2xl md:text-3xl lg:text-4xl">
                            Hyperfixations.io
                        </h1>
                        <h2 className="title-font my-4 text-xl text-base-content">
                            Tracking the course of my random obsessions
                        </h2>
                    </div>
                    {/* Horizontal Rule */}
                    <div>
                        <div className="mx-auto mb-5 w-3/4 place-content-center border-t border-base-content"></div>
                    </div>
                    {/* Links and Descriptions */}
                    <div className="mx-auto my-6 grid w-1/2 grid-cols-1 gap-4">
                        <Link href="/posts">
                            <a className="btn btn-primary" data-cy="indexLinkForBlog">
                                <p className="text-primary-content">Dev Log</p>
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="btn btn-ghost" data-cy="indexLinkForAbout">
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
