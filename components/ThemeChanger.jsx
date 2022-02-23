import { FaPaintBrush } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <div class="dropdown-left dropdown">
                <label tabIndex="0" class="btn btn-ghost rounded-btn" data-cy="themeChanger">
                    <FaPaintBrush />
                </label>
                <ul
                    tabIndex="0"
                    class="btn-group dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
                >
                    <li class="bg-base btn" onClick={() => setTheme('light')}>
                        Light
                    </li>
                    <li class="bg-base btn" onClick={() => setTheme('dark')}>
                        Dark
                    </li>
                    <li class="bg-base btn" onClick={() => setTheme('cupcake')}>
                        Cupcake
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ThemeChanger;
