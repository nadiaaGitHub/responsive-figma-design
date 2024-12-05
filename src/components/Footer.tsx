import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Try Whitepace today</h2>
          <p className="text-base md:text-lg text-gray-300 mt-3">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-[#0055CC] hover:bg-[#0044AA] text-white font-medium py-2 px-6 rounded-lg mt-6">
            Try Taskey free →
          </button>
          <p className="mt-3 text-sm text-gray-300">
            On a big team? Contact sales
          </p>

          {/* Logos Section */}
          <div className="flex flex-wrap justify-center items-center mt-6 space-x-4 md:space-x-6">
            <Image 
              src="/images/apple-black-logo 2.png" 
              alt="Apple" 
              width={32} 
              height={32} 
            />
            <Image 
              src="/images/window.png" 
              alt="Windows" 
              width={32} 
              height={32} 
            />
            <Image 
              src="/images/Group.png" 
              alt="Android" 
              width={32} 
              height={32} 
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/images/Logo Icon.png" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="mr-2" 
              />
              <h3 className="text-xl font-bold">whitepace</h3>
            </div>
            <p className="text-sm text-gray-300">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Help center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Media kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-wrap flex-col md:flex-row justify-between items-center text-gray-300 text-sm space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4">
            {/* Language Dropdown */}
            <select className="bg-transparent text-gray-300 outline-none">
              <option value="en">🌐 English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <p className="text-center mt-4 md:mt-0">©2021 Whitepace LLC.</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              <Image 
                src="/images/Facebook.png" 
                alt="Facebook" 
                width={20} 
                height={20} 
              />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Image 
                src="/images/Twitter.png" 
                alt="Twitter" 
                width={20} 
                height={20} 
              />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Image 
                src="/images/Linkedin.png" 
                alt="LinkedIn" 
                width={20} 
                height={20} 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
