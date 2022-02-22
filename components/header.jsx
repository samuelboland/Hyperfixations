import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
    return (
        <div class="navbar bg-base-300">
            <div class="flex-1">
                <Link href="/">
                    <a class="btn btn-ghost text-xl normal-case">Hyperfixations.io</a>
                </Link>
            </div>
            <div class="dropdown-left dropdown">
                <label tabindex="0" class="btn btn-ghost rounded-btn">
                    <FaBars size={24} />
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
                >
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>Dev Log</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
