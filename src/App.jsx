import React from 'react';
import { Instagram, Mail, Twitter, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Waitlist />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0E] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-amber-300" />
                <span className="text-white text-xl font-semibold tracking-wide">Aame</span>
              </div>
              <p className="mt-3 text-white/70 text-sm max-w-sm">AI for education — personalized learning experiences built from videos, research, and the web.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="#home" className="text-white/70 hover:text-white text-sm">Home</a>
                <a href="#use-cases" className="text-white/70 hover:text-white text-sm">Use Cases</a>
                <a href="#waitlist" className="text-white/70 hover:text-white text-sm">Waitlist</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Use cases</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a target="_blank" rel="noreferrer" href="#study-prep" className="text-white/70 hover:text-white">Study prep</a></li>
                <li><a target="_blank" rel="noreferrer" href="#upskilling" className="text-white/70 hover:text-white">Upskilling</a></li>
                <li><a target="_blank" rel="noreferrer" href="#recruitment" className="text-white/70 hover:text-white">Recruitment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Enterprise</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a target="_blank" rel="noreferrer" href="#aame-enterprise" className="text-white/70 hover:text-white">Aame for enterprise</a></li>
                <li><a target="_blank" rel="noreferrer" href="#enterprise-guide" className="text-white/70 hover:text-white">Enterprise guide</a></li>
                <li><a target="_blank" rel="noreferrer" href="#security" className="text-white/70 hover:text-white">Security</a></li>
                <li><a target="_blank" rel="noreferrer" href="#roi" className="text-white/70 hover:text-white">ROI calculator</a></li>
                <li><a target="_blank" rel="noreferrer" href="#faq" className="text-white/70 hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a target="_blank" rel="noreferrer" href="#aim-aame" className="text-white/70 hover:text-white">AIM Aame</a></li>
                <li><a target="_blank" rel="noreferrer" href="#pricing" className="text-white/70 hover:text-white">Pricing</a></li>
                <li><a target="_blank" rel="noreferrer" href="#career" className="text-white/70 hover:text-white">Career</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Support</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a target="_blank" rel="noreferrer" href="#help-centre" className="text-white/70 hover:text-white">Help centre – Articles & FAQ</a></li>
                <li><a target="_blank" rel="noreferrer" href="#contact" className="text-white/70 hover:text-white">Contact us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a target="_blank" rel="noreferrer" href="#privacy" className="text-white/70 hover:text-white">Privacy Policy</a></li>
                <li><a target="_blank" rel="noreferrer" href="#terms" className="text-white/70 hover:text-white">Terms of Service</a></li>
                <li><a target="_blank" rel="noreferrer" href="#dpa" className="text-white/70 hover:text-white">Data Processing Agreement</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-white/50">© {new Date().getFullYear()} Aame. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram size={18} /></a>
              <a href="mailto:hello@theaame.com" aria-label="Mail" className="text-white/70 hover:text-white"><Mail size={18} /></a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white"><Twitter size={18} /></a>
              <a href="https://www.linkedin.com/company/i-am-aame" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
