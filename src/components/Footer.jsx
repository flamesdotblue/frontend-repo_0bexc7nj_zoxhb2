import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
          <span className="text-white text-lg font-semibold tracking-wide">Aame</span>
        </div>
        <nav className="text-sm">
          <a href="#/about" className="text-white/80 hover:text-white">About</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
