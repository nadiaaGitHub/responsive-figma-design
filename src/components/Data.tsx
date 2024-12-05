import React from 'react'
import Image from 'next/image'

export default function data() {
 return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
    {/* Left Content */}
    <div className="max-w-lg text-center md:text-left">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
        <span className="relative inline-block">
        100% your data
          {/* Yellow Brush Stroke */}
          <div>
    <Image src="/brush-stroke.png" alt="Brush Stroke" className="w-64" />
  </div>
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg mb-8">
      The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
      </p>

      {/* Button */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-blue-600 transition duration-300">
        Read More →
      </button>
    </div>

    {/* Right Placeholder Box */}
    <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/images/DATA.png" 
          alt="Hero Image"
          className="w-full h-auto max-w-md mx-auto md:ml-8"
        />
      </div>
  </section>
  )
}
