const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20">
      <div className="container flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-center">
        <div className="flex items-center justify-center gap-1 group w-full md:w-auto">
          <span className="text-white font-black text-xl">JS</span>
          <span className="text-[var(--primary)] text-2xl font-black">.</span>
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold w-full md:w-auto md:flex-1 md:text-center md:px-4">
          FULL-STACK DEVELOPER • PORT MORESBY, PNG • © 2026
        </div>

        <div className="flex justify-center gap-6 w-full md:w-auto">
          <a href="https://linkedin.com/in/john-sarwom8a4b181bb" target="_blank" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--primary)] transition-colors font-bold" style={{ textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://github.com/johnsarwom" target="_blank" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--primary)] transition-colors font-bold" style={{ textDecoration: 'none' }}>GitHub</a>
          <a href="mailto:sarwomjohn@gmail.com" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--primary)] transition-colors font-bold" style={{ textDecoration: 'none' }}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
