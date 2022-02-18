import Link from 'next/link';
import React from 'react';
import AnimationWrapper from '../components/AnimationWrapper';
import styles from './index.module.scss';

export default function Home() {
    return (
        <AnimationWrapper>
            <div>
                <main>
                    <div className={styles.introduction}>
                        <h2> What is this </h2>
                        <p>
                            Hello! My name is Sam. I currently work as a Sr. QA Engineer. I am
                            learning more about the development side of tech work. This site is my
                            classroom, my playground, and my journal.
                        </p>
                        <p>
                            I intend to document the steps that I take to build this site in the
                            Development Diary, located below.
                        </p>
                        <p> This site is built with: </p>
                        <ul>
                            <li>Next.JS</li>
                            <li>Vercel</li>
                            <li>CircleCI</li>
                            <li>React</li>
                        </ul>
                        <p>
                            This is not an exhaustive list, of course. A more comprehensive list can
                            be found at the site's repository, here:{' '}
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
        </AnimationWrapper>
    );
}
