import Link from 'next/link';
import React from 'react';
import AnimationWrapper from '../components/AnimationWrapper';

export default function Home() {
    return (
        <AnimationWrapper>
            <div>
                <main>
                    <div>
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
