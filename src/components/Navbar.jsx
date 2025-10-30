import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
            <span className="text-white text-lg font-semibold tracking-wide">Aame</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-white/80 hover:text-white transition">Home</a>
            <a href="#use-cases" className="text-white/80 hover:text-white transition">Use Cases</a>
            <a href="#waitlist" className="text-white/80 hover:text-white transition">Waitlist</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">Waitlist / Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
