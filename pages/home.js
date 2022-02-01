import React from 'react';
import styles from './home.module.scss';
import 'animate.css';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.gradient}>
            <h1 className={styles.hometext}>HYPERFIXATION</h1>
            <h1 className={styles.icon}>
                <Link href="/">
                    <a>
                        <BsChevronDoubleRight className="animate__animated animate__bounceInRight"></BsChevronDoubleRight>
                    </a>
                </Link>
            </h1>
        </div>
    );
};

export default Home;
