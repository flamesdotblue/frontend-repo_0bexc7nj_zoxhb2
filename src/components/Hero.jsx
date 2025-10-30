import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white pt-20">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil to improve contrast - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[92vh]">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Inspired by modern, fluid curves
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          AI For Education
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          Aame helps learners, professionals, and universities create high‑quality, personalized learning experiences powered by multi‑source AI research.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            Get Aame →
          </a>
          <a href="#use-cases" className="text-white/80 hover:text-white text-sm">
            Explore use cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
