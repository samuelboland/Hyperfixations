import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sam Boland</title>
                <meta name="description" content="Sam Bolad's website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Sam Boland</h1>
                <h2> Senior QA Engineer @ Appfolio</h2>
                <h3> I made a website :D</h3>

                <div>
                    <Link href="/about">
                        <a>
                            <h2>About</h2>
                            <p>
                                Learn a bit about who I am, what I do, and why I do it. If you want,
                                I guess.
                            </p>
                        </a>
                    </Link>

                    <Link href="/blog/blogIndex">
                        <a>
                            <h2>Blog </h2>
                            <p>Sometimes, I think about things and put them on the internet.</p>
                        </a>
                    </Link>

                    <Link href="/">
                        <a>
                            <h2>Todo App </h2>
                            <p>
                                Basically the hello, world of react projects at this point. I might
                                as well do it!
                            </p>
                        </a>
                    </Link>

                    <Link href="/">
                        <a>
                            <h2>Something else</h2>
                            <p>Lorem Ipsum Dolor Sit etc etc you get it, this is placeholder.</p>
                        </a>
                    </Link>
                </div>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
