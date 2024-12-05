import React from 'react'
import Image from 'next/image'

export default function Customise() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
    {/* Left Content */}
    <div className="max-w-lg text-center md:text-left">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
      Customise it to <br />
        <span className="relative inline-block">
        your needs
          {/* Yellow Brush Stroke */}
          <div>
          <Image src="/brush-stroke.png" alt="Brush Stroke" width={256} height={64} />
  </div>
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg mb-8">
      Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
      </p>

      {/* Button */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-blue-600 transition duration-300">
        Let&apos;s Go →
      </button>
    </div>

    {/* Right Placeholder Box */}
    <div className="md:w-1/2 mt-8 md:mt-0">
    <Image src="/images/Image-container.png" alt="Hero Image" width={400} height={400} />

      </div>
  </section>
  )
}
