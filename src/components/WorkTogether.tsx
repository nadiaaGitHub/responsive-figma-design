import React from 'react'
import Image from 'next/image';

export default function worktogether() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
      {/* Right Placeholder Box */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/images/Work Together Image.png"
          alt="Hero Image"
          className="w-full h-auto max-w-md mx-auto md:ml-8"
        />
      </div>
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
          <span className="relative inline-block">
            Work together
            {/* Yellow Brush Stroke */}
            <div>
              <Image src="/brush-stroke.png" alt="Brush Stroke" className="w-64" />
            </div>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8">
          With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
        </p>

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-blue-600 transition duration-300">
          Try it Now →
        </button>
      </div>
    </section>
  );
}
