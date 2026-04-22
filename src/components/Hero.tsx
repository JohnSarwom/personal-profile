import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { LayoutGrid, FileText, Send } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '../assets/hero-device-2.webp';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, 200]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const rotateY = useTransform(smoothProgress, [0, 1], [-14, 0]);
  const rotateX = useTransform(smoothProgress, [0, 1], [7, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen pt-48 lg:pt-56 pb-32 relative overflow-hidden"
    >
      {/* Decorative Background Assets (3D Parallax) */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-10 w-96 h-96 bg-[var(--primary-glow)] rounded-full filter blur-[100px] z-0"
      />
      
      {/* Wavy Lines SVG Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0" viewBox="0 0 1440 800" fill="none">
        <motion.path 
          style={{ pathLength: scrollYProgress }}
          d="M-100 100C200 50 400 250 800 150C1200 50 1500 200 1600 100" 
          stroke="var(--primary)" 
          strokeWidth="2" 
        />
      </svg>

      <div className="container px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 flex items-center gap-2 px-3 py-1 text-[var(--primary)] text-xs font-black uppercase tracking-widest bg-white/[0.05] border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              John <span className="text-[var(--primary)]">Sarwom</span>
            </h1>

            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-4">
               Full-Stack Developer · AI & Automation · GIS Engineer
            </p>

            <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Building <span className="text-white font-medium">intelligent</span>, automated, and scalable digital solutions — from infrastructure to deployment.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <LayoutGrid size={18} />
                View Projects
              </a>
              <a href="mailto:sarwomjohn@gmail.com?subject=CV Request" className="btn-secondary">
                 <FileText size={18} />
                Download CV
              </a>
              <a href="#contact" className="btn-secondary border-none opacity-60 hover:opacity-100">
                 <Send size={18} />
                 Contact
              </a>
            </div>
          </motion.div>

          {/* Right Side: Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            style={{ y: y1 }}
            className="hero-image-wrap"
          >
            <img 
              src={heroImage} 
              alt="Hero devices showcase" 
              className="w-full"
              style={{ maxWidth: '540px', filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
