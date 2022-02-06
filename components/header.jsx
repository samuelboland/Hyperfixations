import styles from './layout.module.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <main>
            <nav className={styles.header}>
                <Link href="/">
                    <a data-cy="headerLink">
                        <h1 data-cy="headerText"> Hyperfixations </h1>
                    </a>
                </Link>
                <div className={styles.subtitle} data-cy="headerSubtitle">
                    {' '}
                    Approximate Knowledge of Many Things{' '}
                </div>
            </nav>
        </main>
    );
};

export default Header;
