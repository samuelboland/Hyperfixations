import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import '@fontsource/fira-code';
import '@fontsource/open-sans';
import '@fontsource/source-sans-3';

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
        <>
            <NextSeo
                title="Hyperfixations"
                description="Documenting my random fixations"
                canonical="https://hyperfixations.io/"
                openGraph={{
                    url: 'https://hyperfixatons.io/',
                    title: 'Hyperfixations',
                    description:
                        'Follow along as I create and document the process of building a blog with Next.js!',
                    site_name: 'Hyperfixations',
                }}
                twitter={{
                    handle: '@SamCBoland',
                    cardType: 'summary_large_image',
                }}
            />
            <Layout>
                <Component {...pageProps} key={router.pathname} />
            </Layout>
        </>
    );
}
