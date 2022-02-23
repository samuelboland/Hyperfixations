import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import ThemeChanger from './ThemeChanger';

const Header = () => {
    return (
        <div class="navbar bg-base-300">
            <div class="flex-1">
                <Link href="/">
                    <a data-cy="headerLinkHome" class="btn btn-ghost text-xl normal-case">
                        Hyperfixations.io
                    </a>
                </Link>
            </div>
            <ThemeChanger />
            <div class="divider divider-horizontal"></div>
            <div class="dropdown-left dropdown">
                <label tabIndex="0" class="btn btn-ghost rounded-btn" data-cy="headerDropdownMenu">
                    <FaBars size={24} />
                </label>
                <ul
                    tabIndex="0"
                    class="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
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
