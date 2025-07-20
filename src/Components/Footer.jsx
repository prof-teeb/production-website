'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  const spanRef = useRef(null);

  const handleMouseEnter = () => {
    if (spanRef.current) {
      spanRef.current.style.color = 'zinc-400'; // White on hover
    }
  };

  const handleMouseLeave = () => {
    if (spanRef.current) {
      spanRef.current.style.color = '#ffffff'; // White default
    }
  };

  return (
    <footer className="relative bg-black text-white px-6 py-20 w-full flex flex-col items-center justify-center gap-10 backdrop-blur-lg border-t border-white/10" id="contact">

      {/* Top CTA */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let's Build Something <br /> <span className="text-white">Meaningful</span> Together
        </h2>
        <p className="text-white text-base md:text-lg max-w-xl mx-auto">
          Whether you're starting a project or just want to say hello — I'm just a message away.
        </p>
      </div>

      {/* Contact Button Line */}
      <Link href="/resume">
        <div
          className="text-[42px] w-full max-w-4xl mx-auto hover:cursor-pointer text-white transition-colors duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <hr className="border-white/10" />
          <div className="flex items-center justify-between my-10">
            <h5 className="font-bold tracking-tight">
              GET <span ref={spanRef}>In</span> TOUCH!
            </h5>
            <FaArrowRight className="text-[32px] text-white group-hover:translate-x-1 transition-all" />
          </div>
          <hr className="border-white/10" />
        </div>
      </Link>

      {/* Bottom Divider */}
      <div className="w-full max-w-4xl mt-16 border-t border-white/10"></div>

      {/* Footer Copyright */}
      <div className="text-center text-sm text-white">
        © {new Date().getFullYear()} <span className="font-semibold">M Project</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
