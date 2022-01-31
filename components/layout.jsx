import React from 'react';
import Header from './header';
import Footer from './footer';

import Router, { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    if (router.pathname != '/home') {
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    } else {
        return <>{children}</>;
    }
}
