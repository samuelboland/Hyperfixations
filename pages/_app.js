import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
    return (
        <>
            <NextSeo
                title="Hyperfixations"
                description="Approximate knowledge of many things"
                canonical="https://hyperfixations.io/"
                openGraph={{
                    url: 'https://hyperfixatons.io/',
                    title: 'Hyperfixations',
                    description:
                        'Follow along as I create and document the process of building a blog with Next.js! Once complete, I will use this to document my various hobby fixations as they come and go.',
                    site_name: 'Hyperfixations',
                }}
                twitter={{
                    handle: '@SamCBoland',
                    cardType: 'summary_large_image',
                }}
            />
            <ThemeProvider>
                <Layout>
                    <Component {...pageProps} key={router.pathname} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
