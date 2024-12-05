import React from 'react'

export default function Apps() {
  return (
    <section className="relative bg-blue-900 text-white py-16 md:py-24" style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Right Side Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="/images/Apps.png" 
          alt="Hero Image"
          className="w-full h-auto max-w-md mx-auto md:ml-8 "
        />
      </div>
      {/* Left Side Content */}
      <div className="text-center md:text-left md:w-1/2 z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-yellow-300">
            Read More →
          </button>
          
        </div>
      </div>

    
    </div>

    {/* Background Overlay (for darkening the background) */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
  </section>
  );
};
