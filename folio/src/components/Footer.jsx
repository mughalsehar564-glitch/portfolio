import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-white">Se</span>
          <span className="text-neonBlue">har</span>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sehar Portfolio. All rights reserved.
        </p>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-neonBlue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neonBlue transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
