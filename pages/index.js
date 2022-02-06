import Link from 'next/link';
import React from 'react';
import AnimationWrapper from '../components/AnimationWrapper';

export default function Home() {
    return (
        <AnimationWrapper>
            <div>
                <main>
                    <div>
                        <Link href="/blog/">
                            <a data-cy="indexLinkForBlog">
                                <h2 data-cy="indexTextForBlog">Blog </h2>
                            </a>
                        </Link>
                        <p data-cy="indexBlurbForBlog">
                            Sometimes, I think about things and put them on the internet.
                        </p>
                    </div>
                </main>
            </div>
        </AnimationWrapper>
    );
}
