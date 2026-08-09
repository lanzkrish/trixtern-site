"use client";

import React, { useState } from "react";
import Link from "next/link";
const ContactCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div
      className="fixed z-50 flex flex-col gap-4 items-center right-4 md:right-8"
      style={{
        top: "40%",
        transform: "translateY(-50%)",
      }}
    >
      {/* Dialog Box */}
      {isOpen && (
        <div className="absolute right-16 top-0 w-[calc(100vw-6rem)] max-w-[18rem] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="bg-[#ec1313] text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Trixtern Support</h3>
              <p className="text-xs font-semibold text-[#ffcdd2]">Typically replies instantly</p>
            </div>
            <button
              onClick={toggleDialog}
              className="text-white hover:text-gray-200 transition-colors bg-black/10 hover:bg-black/20 rounded-full p-1"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="p-4 bg-gray-50 min-h[120px]">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-800 w-[85%]">
              Hello! 👋<br />
              How can we help you today with your project?
            </div>
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <a
              href="https://api.whatsapp.com/send/?phone=919815763993&text=Hi%21+I+would+like+to+know+more&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full gap-2 bg-[#ec1313] hover:bg-[#c90f0f] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Start Chat
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleDialog}
        className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
        aria-label="Open WhatsApp Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-10 h-10 transition-transform duration-300 group-hover:-rotate-12">
          {/* WhatsApp Icon Wrapper */}
          <g id="whatsapp-official" fill="#25D366">
            {/* Outer Bubble Frame */}
            <path d="M250,60 C145.1,60 60,145.1 60,250 C60,283.5 68.7,315.1 84,342.6 L61.5,424.8 L146,402.6 C172.5,417.1 202.8,425 250,425 C354.9,425 440,339.9 440,250 C440,145.1 354.9,60 250,60 Z M250,395 C219.1,395 189.4,386.7 163.7,371.1 L157.6,367.4 L107.5,380.5 L120.9,331.7 L116.8,325.2 C99.6,297.8 90.5,266.2 90.5,250 C90.5,162 162,90.5 250,90.5 C338,90.5 409.5,162 409.5,250 C409.5,338 338,395 250,395 Z" />

            {/* Internal Phone Receiver */}
            <path d="M326.7,293.7 C322.5,291.6 301.9,281.4 298.1,280 C294.3,278.6 291.5,277.9 288.7,282.1 C285.9,286.3 277.9,295.6 275.5,298.4 C273,301.2 270.6,301.6 266.4,299.5 C262.2,297.4 248.7,293 232.7,278.7 C220.3,267.6 211.9,254 209.5,249.8 C207.1,245.6 209.2,243.3 211.3,241.2 C213.2,239.3 215.5,236.3 217.6,233.8 C219.7,231.3 220.4,229.6 221.8,226.8 C223.2,224 222.5,221.5 221.5,219.4 C220.4,217.3 211.5,195.4 207.8,186.5 C204.2,177.8 200.5,179 197.8,179 C195.3,179 192.5,178.7 189.7,178.7 C186.9,178.7 182.3,179.8 178.5,183.9 C174.7,188.1 163.9,198.6 163.9,220 C163.9,241.4 179.5,262.1 181.6,265 C183.8,267.8 212.3,311.6 255.8,330.4 C266.1,334.9 274.2,337.6 280.5,339.6 C290.9,342.9 300.3,342.4 307.8,341.3 C316.2,340 333.6,330.7 337.2,320.5 C340.8,310.3 340.8,301.6 339.7,299.8 C338.7,297.9 335.9,295.8 326.7,293.7 Z" />
          </g>
        </svg>

        {/* Optional small ping indicator to draw attention */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec1313] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ec1313] border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* Floating Call Button */}
      <a
        href="tel:+916372669269"
        className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
        aria-label="Call Us Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-[#007AFF] transition-transform duration-300 group-hover:scale-110" fill="currentColor">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-2 bg-black text-white text-sm font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Floating Contact Us Button */}
      <Link
        href="/contact"
        className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-[#ec1313] transition-transform duration-300 group-hover:scale-110" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-2 bg-black text-white text-sm font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contact Us
        </span>
      </Link>
    </div>
  );
};

export default ContactCTA;
