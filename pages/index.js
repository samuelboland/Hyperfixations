import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Sam Boland</title>
              <meta name="description" content="Sam Bolad's website" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>Welcome to my playground site!</h1>

              <p className={styles.description}>
                  Get started by editing <code className={styles.code}>pages/index.js</code>
              </p>

              <div className={styles.grid}>
                  <a href="https://nextjs.org/docs" className={styles.card}>
                      <h2>About &rarr;</h2>
                      <p>Learn a bit about who I am, what I do, and why I do it. If you want, I guess.</p>
                  </a>

                  <a href="https://nextjs.org/learn" className={styles.card}>
                      <h2>Blog &rarr;</h2>
                      <p>Sometimes, I think about things and put them on the internet.</p>
                  </a>

                  <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                      <h2>Todo App &rarr;</h2>
                      <p>Basically the hello, world of react projects at this point. I might as well do it!</p>
                  </a>

                  <a
                      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      className={styles.card}
                  >
                      <h2>Something else &rarr;</h2>
                      <p>Lorem Ipsum Dolor Sit etc etc you get it, this is placeholder.</p>
                  </a>
              </div>
          </main>

          <footer className={styles.footer}>
              <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Powered by{' '}
                  <span className={styles.logo}>
                      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                  </span>
              </a>
          </footer>
      </div>
  );
}
