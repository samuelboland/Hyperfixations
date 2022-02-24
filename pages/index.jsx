import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
                <div className="mb-20 flex w-full flex-wrap">
                    <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                        <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                            Pitchfork Kickstarter Taxidermy
                        </h1>
                        <div className="h-1 w-20 rounded bg-red-500"></div>
                    </div>
                    <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
                        subway tile poke farm-to-table. Franzen you probably haven't heard of them
                        man bun deep jianbing selfies heirloom prism food truck ugh squid celiac
                        humblebrag.
                    </p>
                </div>
                <div className="-m-4 flex flex-wrap">
                    <div className="p-4 md:w-1/2 xl:w-1/4">
                        <div className="rounded-lg bg-gray-100 p-6">
                            <img
                                className="mb-6 h-40 w-full rounded object-cover object-center"
                                src="https://dummyimage.com/720x400"
                                alt="content"
                            />
                            <h3 className="title-font text-xs font-medium tracking-widest text-red-500">
                                SUBTITLE
                            </h3>
                            <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                                Chichen Itza
                            </h2>
                            <p className="text-base leading-relaxed">
                                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 xl:w-1/4">
                        <div className="rounded-lg bg-gray-100 p-6">
                            <img
                                className="mb-6 h-40 w-full rounded object-cover object-center"
                                src="https://dummyimage.com/721x401"
                                alt="content"
                            />
                            <h3 className="title-font text-xs font-medium tracking-widest text-red-500">
                                SUBTITLE
                            </h3>
                            <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                                Colosseum Roma
                            </h2>
                            <p className="text-base leading-relaxed">
                                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 xl:w-1/4">
                        <div className="rounded-lg bg-gray-100 p-6">
                            <img
                                className="mb-6 h-40 w-full rounded object-cover object-center"
                                src="https://dummyimage.com/722x402"
                                alt="content"
                            />
                            <h3 className="title-font text-xs font-medium tracking-widest text-red-500">
                                SUBTITLE
                            </h3>
                            <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                                Great Pyramid of Giza
                            </h2>
                            <p className="text-base leading-relaxed">
                                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 xl:w-1/4">
                        <div className="rounded-lg bg-gray-100 p-6">
                            <img
                                className="mb-6 h-40 w-full rounded object-cover object-center"
                                src="https://dummyimage.com/723x403"
                                alt="content"
                            />
                            <h3 className="title-font text-xs font-medium tracking-widest text-red-500">
                                SUBTITLE
                            </h3>
                            <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                                San Francisco
                            </h2>
                            <p className="text-base leading-relaxed">
                                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
