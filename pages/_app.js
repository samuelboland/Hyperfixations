import React from 'react';
import { SessionProvider } from 'next-auth/react';
import 'marx-css';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <AnimatePresence
                    exitBeforeEnter
                    initial="start"
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
            </Layout>
        </SessionProvider>
    );
}
