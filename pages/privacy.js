import Link from 'next/link';

const privacy = () => {
    const TitleAndSubtitle = () => {
        return (
            <div className="mb-20 text-center ">
                <h1 className="title-font mb-4 text-2xl text-2xl font-medium text-base-content sm:text-3xl">
                    Privacy Policy
                </h1>
                <h2 class="title-font mb-4 text-xl font-light text-base-content">
                    Last changed 2022-02-26
                </h2>
            </div>
        );
    };

    const UserInformationStorage = () => {
        return (
            <div className="mx-auto my-6">
                <h1 className="title-font mb-4 text-xl font-medium">
                    User Information Storage & Use
                </h1>
                <p className="text-base-content">
                    This site does not currently store any user information.
                </p>
            </div>
        );
    };

    const CookieStorage = () => {
        return (
            <div className="mx-auto my-6">
                <h1 className="title-font mb-4 text-xl font-medium">Cookie Usage</h1>
                <p className="text-base-content">
                    This site currently uses a locally-stored cookie to hold your theme selection.
                </p>
            </div>
        );
    };

    const AnalyticsDisclosure = () => {
        return (
            <div className="mx-auto my-6">
                <h1 className="title-font mb-4 text-xl font-medium">Analytics Disclosure</h1>
                <p className="text-base-content">
                    This site does not currently use an analytics solution that stores
                    user-identifiable data, including IP addresses or page visit flows.
                </p>
                <p>
                    It currently uses{' '}
                    <Link href="https://vercel.com/analytics">
                        <a className="link">Vercel Analytics</a>
                    </Link>{' '}
                    to collect and analyze statistics via the{' '}
                    <Link href="https://web.dev/vitals/">
                        <a className="link">Web Vitals API</a>
                    </Link>
                    , which is implemented in most browsers.
                </p>
                <br />
                <p>
                    {' '}
                    You can access the Vercel Analytics privacy policy here: <br />
                    <Link href="https://vercel.com/docs/concepts/analytics/privacy#">
                        <a className="link">https://vercel.com/docs/concepts/analytics/privacy#</a>
                    </Link>
                </p>
            </div>
        );
    };

    return (
        <div className="body-font text-base-content">
            <div className="container mx-auto px-5 py-24">
                <TitleAndSubtitle />
                <div className="mx-auto w-3/4 place-self-center md:w-3/4 lg:w-1/2">
                    <UserInformationStorage />
                    <CookieStorage />
                    <AnalyticsDisclosure />
                </div>
            </div>
        </div>
    );
};

export default privacy;
