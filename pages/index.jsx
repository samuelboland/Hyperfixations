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
                        <h2> Sam Boland </h2>
                        <p>
                            My name is Sam Boland. I currently work as a Sr. QA Engineer at
                            AppFolio, inc, located in Santa Barbara, CA. I am on a journey to learn
                            more about the technical details of web development. This site is my
                            classroom and my playground.
                        </p>
                        <p>
                            I intend to document the steps that I take to build this site in the
                            Development Diary, located below.
                        </p>
                        <p>
                            {' '}
                            This site is built with:
                            <ul>
                                <li>Next.JS</li>
                                <li>Vercel</li>
                                <li>MongoDB Atlas</li>
                                <li>CircleCI</li>
                            </ul>
                            This is not an exhaustive list, of course. A more comprehensive list can
                            be found at the site's repository, here:{' '}
                            <Link href="https://github.com/samuelboland/Hyperfixations">
                                <a>Hyperfixations</a>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <Link href="/blog/">
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
