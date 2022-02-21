import Link from 'next/link';

const Header = () => {
    return (
        <main>
            <nav>
                <Link href="/">
                    <a data-cy="headerLink">
                        <h1 data-cy="headerText"> Hyperfixations </h1>
                    </a>
                </Link>
                <div data-cy="headerSubtitle"> Approximate Knowledge of Many Things </div>
            </nav>
        </main>
    );
};

export default Header;
