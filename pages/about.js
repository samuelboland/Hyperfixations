import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto w-3/4 pt-24 md:w-3/4 lg:w-2/3">
            <main>
                <div>
                    <h1 className="mb-4 text-center text-4xl font-light text-base-content sm:text-5xl">
                        Hello. I'm Sam.
                    </h1>
                    <h2 className="mb-4 text-center text-xl font-light sm:text-2xl">
                        Nice to meet you.
                    </h2>
                    <div className="mx-auto mb-4 w-3/4 border border-b border-base-content"></div>
                    <h2 className="mb-4 font-bold text-base-content"></h2>
                    {/* Header above. Text below. */}
                    <div className="container mt-8">
                        <p className="prose m-4 mx-auto">
                            This blog contains posts about my various <i>Hyperfixations</i> as they
                            come and go. My current obsession is building this site, so it is
                            self-documenting, in a way.
                        </p>
                        <p className="prose m-4 mx-auto">
                            As someone with ADHD, I tend to become fixated on a particular topic for
                            a period of weeks to months, and spend much of my free time on it. I
                            have learned many things from this, but much of that knowledge becomes
                            lost over time.{' '}
                        </p>
                        <p className="prose m-2 mx-auto text-center">
                            This site is my attempt to change that.
                        </p>
                        <p className="prose m-2 mx-auto"></p>
                    </div>
                </div>
            </main>
        </div>
    );
}
