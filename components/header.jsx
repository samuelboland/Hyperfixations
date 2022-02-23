import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import ThemeChanger from './ThemeChanger';

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link href="/">
                    <a data-cy="headerLinkHome" className="btn btn-ghost text-xl normal-case">
                        Hyperfixations.io
                    </a>
                </Link>
            </div>
            <ThemeChanger />
            <div className="divider divider-horizontal"></div>
            <div className="dropdown-left dropdown">
                <label tabIndex="0" className="btn btn-ghost rounded-btn" data-cy="headerDropdownMenu">
                    <FaBars size={24} />
                </label>
                <ul
                    tabIndex="0"
                    className="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
                >
                    <li>
                        <Link href="/">
                            <a data-cy="headerDropdownLinkHome">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a data-cy="headerDropdownLinkPosts">Dev Log</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a data-cy="headerDropdownLink">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
