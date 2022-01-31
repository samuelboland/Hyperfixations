import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/layout';
import Head from 'next/head';
import 'marx-css';
import '../styles/globals.scss';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sam Boland</title>
                <meta name="description" content="Sam Bolad's website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <body>
                    <Component {...pageProps} />
                </body>
            </Layout>
        </SessionProvider>
    );
}
