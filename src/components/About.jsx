import React from 'react';

const About = () => {
  return (
    <section className="min-h-[70vh] bg-[#07070A] text-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">About Aame</h1>
        <p className="mt-4 text-white/80">
          Aame is an AI companion for education. We assemble personalized learning paths from videos,
          research papers, and the web, then present them in a clear, focused flow. Our goal is to
          help students, professionals, and educators achieve mastery with less friction.
        </p>
        <div className="mt-8 space-y-4 text-white/75">
          <p>
            Built on a modern stack and a human‑centered design system, Aame keeps the interface minimal
            and the experience fast. We focus on clarity, progress, and real outcomes.
          </p>
          <p>
            Join the waitlist to get early access and help shape the roadmap.
          </p>
          <a href="#waitlist" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
