import styles from './layout.module.scss';

const Footer = () => {
    return (
        <footer data-cy="footer">
            <main>
                <p className={styles.footer}>© Sam Boland, 2022</p>
            </main>
        </footer>
    );
};

export default Footer;
