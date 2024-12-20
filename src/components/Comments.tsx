import React from "react";
import Image from "next/image";

export default function Comments() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              <span className="relative inline-block">
                What Our Clients Says
                {/* Yellow Brush Stroke */}
                <div className="absolute left-3/4 transform -translate-x-1/2 bottom-[-25px] z-0">
                  <Image
                    src="/brush-stroke.png"
                    alt="Brush Stroke"
                    width={256} // Set width
                    height={64} // Set height
                  />
                </div>
              </span>
            </h1>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between lg:w-1/3">
            {/* Quote Icon as Image */}
            <div className="mb-4">
              <Image
                src="/images/Quote-blue.png"
                alt="Quote Icon"
                width={32} // Set width
                height={32} // Set height
              />
            </div>
            {/* Content */}
            <p className="text-gray-700 text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="my-6 border-gray-300" />
            {/* Profile */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Avater-1.png"
                alt="Client 1"
                width={48} // Set width
                height={48} // Set height
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-base">Oberon Shaw, MCH</h4>
                <p className="text-sm text-gray-500">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-400 shadow-lg rounded-lg p-8 flex flex-col justify-between lg:w-1/3">
            {/* Quote Icon as Image */}
            <div className="mb-4">
              <Image
                src="/images/Quote-white.png"
                alt="Quote Icon"
                width={32} // Set width
                height={32} // Set height
              />
            </div>
            {/* Content */}
            <p className="text-white text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="my-6 border-gray-300" />
            {/* Profile */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Avater-2.png"
                alt="Client 2"
                width={48} // Set width
                height={48} // Set height
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-base text-blue-900">
                  Oberon Shaw, MCH
                </h4>
                <p className="text-sm text-white">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-400 shadow-lg rounded-lg p-8 flex flex-col justify-between lg:w-1/3">
            {/* Quote Icon as Image */}
            <div className="mb-4">
              <Image
                src="/images/Quote-white.png"
                alt="Quote Icon"
                width={32} // Set width
                height={32} // Set height
              />
            </div>
            {/* Content */}
            <p className="text-white text-lg">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="my-6 border-gray-300" />
            {/* Profile */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Avater-3.png"
                alt="Client 3"
                width={48} // Set width
                height={48} // Set height
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-base text-blue-900">
                  Oberon Shaw, MCH
                </h4>
                <p className="text-sm text-white">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
