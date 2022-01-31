import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div>
            <main>
                <div>
                    <Link href="/about">
                        <a>
                            <h2>About</h2>
                        </a>
                    </Link>
                    <p>
                        Learn a bit about who I am, what I do, and why I do it. If you want, I
                        guess.
                    </p>

                    <Link href="/blog/blogIndex">
                        <a>
                            <h2>Blog </h2>
                        </a>
                    </Link>
                    <p>Sometimes, I think about things and put them on the internet.</p>

                    <Link href="/">
                        <a>
                            <h2>Todo App </h2>
                        </a>
                    </Link>
                    <p>
                        Basically the hello, world of react projects at this point. I might as well
                        do it!
                    </p>

                    <Link href="/">
                        <a>
                            <h2>Something else</h2>
                        </a>
                    </Link>
                    <p>Lorem Ipsum Dolor Sit etc etc you get it, this is placeholder.</p>
                </div>
            </main>
        </div>
    );
}
