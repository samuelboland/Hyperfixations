import React from 'react';
import 'marx-css';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import Script from 'next/script';
import { useEffect } from 'react';

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
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
        </>
    );
}
