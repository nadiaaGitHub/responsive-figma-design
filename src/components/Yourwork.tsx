import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-800 py-20 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <path
            d="M200,600 C300,400 500,400 600,200 C700,0 800,100 800,100 L0,0 Z"
            fill="#164e96"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
          <span className="relative inline-block">
          Your work, everywhere you are
            {/* Yellow Brush Stroke */}
            <div>
              <img src="/brush-stroke.png" alt="Brush Stroke" className="w-64" />
            </div>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg">
          Access your notes from your computer, phone, or tablet by synchronizing
          with various services, including Whitepace, Dropbox, and OneDrive. The app
          is available on Windows, macOS, Linux, Android, and iOS. A terminal app is
          also available!
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded shadow transition-all"
          >
            Try Taskey
            <svg
              className="ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
