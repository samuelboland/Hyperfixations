import Link from 'next/link';

const Home = () => {
    return (
        <section className="hero min-h-screen bg-gradient-to-br from-transparent to-primary">
            <div className="container mx-auto w-3/4 place-content-center">
                {/* Title and Subtitle */}
                <div className="container pt-10 text-center">
                    <h1 className="title-font text-2xl font-bold text-base-content sm:text-2xl md:text-3xl lg:text-4xl">
                        Hyperfixations.io
                    </h1>
                    <h2 className="title-font text-xl text-base-content">
                        Tracking the course of my random obsessions
                    </h2>
                </div>
                {/* Horizontal Rule */}
                <div>
                    <div class="mx-auto mb-5 w-3/4 place-content-center border-t border-base-content"></div>
                </div>
                {/* Links and Descriptions */}
                <div className="mx-auto my-10 grid w-1/2 grid-cols-1 gap-6">
                    <Link href="/posts">
                        <a className="btn btn-primary" data-cy="indexLinkForBlog">
                            Dev Log
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
    );
};

export default Home;
