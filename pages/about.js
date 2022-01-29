/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Standard.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>About Me</h1>
                <h2> Early Life </h2>
                <p> I was born in Palm Springs, CA in 1991, to my mother Reva and my father Thomas.</p>
                <p>
                    {' '}
                    I was always interested in technology, and built my first computer when I was 13 years old. Shortly
                    after that, I discovered Linux, learned the command line, and my course in life was basically set.
                </p>
                <h2> Education </h2>I attended Occidental College in Los Angeles, where I earned a bachelor's degree in
                cognitive science, with minors in politics and classical studies. I graduated in 2013.
                <h2> Career </h2>
                <p> In college, I worked at the college radio station and set up an online streaming solution.</p>
            </main>
        </div>
    );
}