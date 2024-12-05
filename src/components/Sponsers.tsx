import React from 'react';
import Image from 'next/image';

export default function Sponser() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
            <span className="relative inline-block">
              Our Sponsors
              {/* Yellow Brush Stroke */}
              <div className="absolute left-2/4 transform -translate-x-1/2 bottom-[-35px] z-0">
                <Image src="/brush-stroke.png"
                  width={256} // Adjust width
                  height={64} // Adjust height 
                alt="Brush Stroke"
                 className="w-64 mx-auto" />
              </div>
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 px-4 md:px-12 py-5">
        <div className="flex justify-center items-center">
          <Image src="/images/Apple.png"
           alt="Apple" 
           width={256} // Adjust width
           height={64} // Adjust height
           className="w-14 sm:w-32 md:w-40" />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/images/microsoft 1.png" 
          alt="Microsoft"
          width={256} // Adjust width
          height={64} // Adjust height 
          className="w-24 sm:w-32 md:w-40" />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/images/Slack_Technologies_Logo 1.png" 
          alt="Slack" 
          width={256} // Adjust width
          height={64} // Adjust height
          className="w-24 sm:w-32 md:w-40" />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/images/Google.png" 
          alt="Google"
          width={256} // Adjust width
          height={64} // Adjust height
           className="w-24 sm:w-32 md:w-40" />
        </div>
      </div>
    </section>
  );
}
