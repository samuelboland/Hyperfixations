import React from 'react';
import { SessionProvider } from 'next-auth/react';
import 'marx-css';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import Head from 'next/head';

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
        <SessionProvider session={session}>
            <Head>
                {' '}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sam Boland</title>
                <meta name="description" content="Sam Bolad's website" />
            </Head>
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
