import React from 'react';
import Image from 'next/image';

export default function ProjectManagement() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
          Project <br />
          <span className="relative inline-block">
            Management
            {/* Yellow Brush Stroke */}
            <div>
              <Image src="/brush-stroke.png" 
              alt="Brush Stroke" 
              width={256} // Adjust width
              height={64} // Adjust height
              />
            </div>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-blue-600 transition duration-300">
          Get Started →
        </button>
      </div>

      {/* Right Placeholder Box */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/images/Image-container.png"
          alt="Hero Image"
          width={256} // Adjust width
          height={64} // Adjust height
          className="w-full h-auto max-w-md mx-auto md:ml-8 shadow-xl"
        />
      </div>
    </section>
  );
}
