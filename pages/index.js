import Link from 'next/link';
import React from 'react';
import AnimationWrapper from '../components/AnimationWrapper';

export default function Home() {
    return (
        <AnimationWrapper>
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
                    </div>
                </main>
            </div>
        </AnimationWrapper>
    );
}
