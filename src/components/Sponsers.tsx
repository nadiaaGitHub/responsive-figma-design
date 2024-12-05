import React from 'react'

export default function () {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
                        <span className="relative inline-block">
                            Our Sponsers
                            {/* Yellow Brush Stroke */}
                            <div>
                                <img src="/brush-stroke.png" alt="Brush Stroke" className="w-64" />
                            </div>
                        </span>
                    </h1>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 px-4 md:px-12 py-5">
                <img src="/images/Apple.png" alt="Apple" />
                <img src="/images/microsoft 1.png" alt="Microsoft" className="w-24 sm:w-32 md:w-40" />
                <img src="/images/Slack_Technologies_Logo 1.png" alt="Slack" className="w-24 sm:w-32 md:w-40" />
                <img src="/images/Google.png" alt="Google" className="w-24 sm:w-32 md:w-40" />
            </div>

        </section>
    );
};
