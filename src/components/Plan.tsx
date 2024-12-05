import React from "react";

export default function PricingPlans() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
       
          <span className="relative inline-block">
            Choose Your Plans
            {/* Yellow Brush Stroke */}
            <div>
      <img src="/brush-stroke.png" alt="Brush Stroke" className="w-64" />
    </div>
          </span>
          <span/>
        </h1>
          <p className="mt-4 text-gray-600">
            Whether you want to get organized, keep your personal life on track, or
            boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
            <h3 className="text-lg font-semibold text-gray-900 text-center">Free</h3>
            <p className="text-center mt-4 text-4xl font-bold">$0</p>
            <p className="text-center text-gray-600 mt-2">
              Capture ideas and find them quickly
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ].map((text) => (
                <li className="flex items-center space-x-3" key={text}>
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-28">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="border-2 border-blue-900 rounded-lg shadow-lg bg-blue-900 p-8">
            <h3 className="text-lg font-semibold text-white text-center">
              Personal
            </h3>
            <p className="text-center mt-4 text-4xl font-bold text-yellow-500">
              $11.99
            </p>
            <p className="text-center text-white mt-2">
              Keep home and family on track
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white">
              {[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ].map((text) => (
                <li className="flex items-center space-x-3" key={text}>
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-28 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Organization
            </h3>
            <p className="text-center mt-4 text-4xl font-bold">$49.99</p>
            <p className="text-center text-gray-600 mt-2">
              Capture ideas and find them quickly
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ].map((text) => (
                <li className="flex items-center space-x-3" key={text}>
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-28 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
