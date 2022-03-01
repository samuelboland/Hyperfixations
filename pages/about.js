import Link from 'next/link';
import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto w-3/4 pt-24 md:w-3/4 lg:w-2/3">
            <main>
                <div>
                    <h1 className="text-3xl font-light text-base-content sm:text-4xl">
                        Hyperfixations
                    </h1>
                    <p>
                        Hello! My name is Sam. I currently work as a Sr. QA Engineer. I am learning
                        more about the development side of tech work. This site is my classroom, my
                        playground, and my journal.
                    </p>
                    <p>
                        I intend to document the steps that I take to build this site in the
                        Development Diary. You can navigate to it with the link below, or with the
                        menu in the navbar up top.
                    </p>
                    <p> This site is built with: </p>
                    <ul>
                        <li>Next.JS</li>
                        <li>Vercel</li>
                        <li>CircleCI</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>Daisy UI</li>
                    </ul>
                    <br />
                    <p>
                        This is not an exhaustive list, of course. A more comprehensive list can be
                        found at the site's repository, here:{' '}
                        <Link href="https://github.com/samuelboland/Hyperfixations">
                            <a>Hyperfixations</a>
                        </Link>
                    </p>
                </div>
                <div>
                    <Link href="/posts">
                        <a data-cy="indexLinkForBlog">
                            <h2 data-cy="indexTextForBlog">Development Diary </h2>
                        </a>
                    </Link>
                    <p data-cy="indexBlurbForBlog">
                        A (somewhat) real-time record of this site's development
                    </p>
                </div>
            </main>
        </div>
    );
}
