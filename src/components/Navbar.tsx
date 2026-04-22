import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[1000] px-8 py-4 transition-all duration-300 flex justify-center ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="container flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tight flex items-center gap-1 group text-white">
            <span>JS</span>
            <span className="text-[var(--primary)] text-3xl">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors tracking-tight text-decoration-none relative py-1 ${
                  activeSection === item.id 
                    ? 'text-[var(--primary)]' 
                    : 'text-white/60 hover:text-[var(--primary)]'
                }`}
                style={{ textDecoration: 'none' }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="mailto:sarwomjohn@gmail.com?subject=CV Request"
              className="btn-primary"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <div 
            className="md:hidden text-white/60 cursor-pointer z-[1001]"
            onClick={() => setIsOpen(!isOpen)}
          >
             {isOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
             )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? '0%' : '100%' 
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center gap-8 p-8 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={`text-4xl font-black transition-colors uppercase tracking-widest ${
               activeSection === item.id ? 'text-[var(--primary)]' : 'text-white/40 hover:text-[var(--primary)]'
            }`}
          >
            {item.name}
          </a>
        ))}
        <a
          href="mailto:sarwomjohn@gmail.com?subject=CV Request"
          className="btn-primary mt-8 w-full max-w-xs"
          onClick={() => setIsOpen(false)}
        >
          <Download size={18} />
          Download CV
        </a>
      </motion.div>
    </>
  );
};


export default Navbar;

