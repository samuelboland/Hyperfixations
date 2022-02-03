import styles from './layout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    return (
        <main>
            <nav className={styles.header}>
                <Link href="/">
                    <a>
                        <h1>Hyperfixation </h1>
                    </a>
                </Link>
                <div className={styles.subtitle}> Approximate Knowledge of Many Things </div>
            </nav>
        </main>
    );
};

export default Header;
