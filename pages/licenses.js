import Link from 'next/link';

const privacy = () => {
    const TitleAndSubtitle = () => {
        return (
            <div className="mb-20 text-center ">
                <h1 className="title-font mb-4 text-2xl text-2xl font-medium text-base-content sm:text-3xl">
                    License Disclosure
                </h1>
                <h2 class="title-font mb-4 text-xl font-light text-base-content">
                    Last updated March 01, 2022
                </h2>
            </div>
        );
    };

    const GoogleFonts = () => {
        return (
            <div className="mx-auto my-6">
                <h1 className="title-font mb-4 text-xl font-medium">Fonts</h1>
                <p className="mb-4">
                    {' '}
                    This site currently uses a few locally-hosted fonts provided by Font Source. The
                    fonts and their licenses are listed below.
                </p>
                <table className="mx-auto table">
                    <tr>
                        <th>Font</th>
                        <th>License</th>
                    </tr>
                    <tr>
                        <td>Fira Code</td>
                        <td>
                            <Link href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web">
                                <a className="link">Open Font License</a>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Source Sans 3</td>
                        <td>
                            <Link href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web">
                                <a className="link">Open Font License</a>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Open Sans</td>
                        <td>
                            <Link href="https://www.apache.org/licenses/LICENSE-2.0">
                                <a className="link">Apache License 2.0</a>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
        );
    };

    return (
        <div className="body-font text-base-content">
            <div className="container mx-auto px-5 py-24">
                <TitleAndSubtitle />
                <div className="mx-auto w-3/4 place-self-center md:w-3/4 lg:w-1/2">
                    <GoogleFonts />
                </div>
            </div>
        </div>
    );
};

export default privacy;
