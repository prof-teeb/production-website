'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Resume = () => {
  const bgRef = useRef(null);
  const headingRef = useRef([]);
  const headingWords = ['The', 'most', 'hated', 'piece', 'of', 'paper.'];

  useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    bgRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
    }
  );

  tl.fromTo(
    headingRef.current,
    { opacity: 0, y: 30, color: '#D1FAE5' },
    {
      opacity: 1,
      y: 0,
      color: '#ffffff',
      duration: 1.2,
      stagger: 0.05,
      ease: 'power3.out',
    },
    '-=0.8'
  );

  // ⬇️ Replace green pulse with subtle white/black tone
  tl.to(
    headingRef.current,
    {
      color: 'rgba(255,255,255,0.9)', // Light neutral white
      duration: 1,
      stagger: 0.1,
      yoyo: true,
      repeat: -1,
      ease: 'bounce.out',
    },
    '>1'
  );
}, []);


  const lines = [];
  for (let i = 0; i < headingWords.length; i += 2) {
    lines.push(headingWords.slice(i, i + 2));
  }

  return (
    <section
      ref={bgRef}
      className="w-full h-screen text-white flex items-center justify-center px-6 font-body bg-cover bg-center relative"
      style={{ backgroundImage: `url('/herosection-bg.png')` }}
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      <div className="text-center max-w-2xl z-10 relative">
        {/* Tagline */}
        <h6 className="text-sm uppercase tracking-widest text-white mb-4">
          YES, IT IS!
        </h6>

        {/* Animated Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8 space-y-2">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.map((word, wordIndex) => {
                const refIndex = lineIndex * 2 + wordIndex;
                return (
                  <span
                    key={refIndex}
                    ref={(el) => (headingRef.current[refIndex] = el)}
                    className={`inline-block mx-1 ${
                      word === 'hated' ? 'text-[#E32375]' : ''
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          ))}
        </h1>

        {/* Download Button */}
        <div>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-white/90 hover:scale-105 transition duration-300"
          >
            GET PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
