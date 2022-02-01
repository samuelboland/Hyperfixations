import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/layout';
import 'marx-css';
import '../styles/globals.scss';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <body>
                    <Component {...pageProps} />
                </body>
            </Layout>
        </SessionProvider>
    );
}
