import React, { useState, useEffect } from 'react';
import { Home, Layers, Mail, Info } from 'lucide-react';

const NavLink = ({ href, label, icon: Icon, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
  >
    <Icon size={16} className="text-white/60 group-hover:text-white" />
    <span>{label}</span>
  </a>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-black/60 backdrop-blur border-b border-white/10 px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
          <span className="text-white text-lg font-semibold tracking-wide">Aame</span>
        </div>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/15 px-3 py-1.5 text-white/80"
        >
          Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 bg-black/80 backdrop-blur border-r border-white/10 p-4 md:translate-x-0 transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex items-center gap-2 px-2 pt-2 pb-6">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
          <span className="text-white text-xl font-semibold tracking-wide">Aame</span>
        </div>
        <nav className="mt-2 space-y-1">
          <NavLink href="#/home" label="Home" icon={Home} />
          <NavLink href="#use-cases" label="Use Cases" icon={Layers} />
          <NavLink href="#waitlist" label="Waitlist" icon={Mail} />
          <NavLink href="#/about" label="About" icon={Info} />
        </nav>
        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/60">
          Your AI co‑pilot for learning. Dark, minimal, and fast.
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Spacer for top bar on mobile */}
      <div className="h-12 md:hidden" />
    </>
  );
};

export default Sidebar;
