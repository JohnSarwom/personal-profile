import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    id: '01.',
    val: '5+',
    title: 'Years of Professional Expertise.',
    desc: 'Extensive experience in Geospatial Science and Full-Stack Engineering, delivering high-performance digital solutions across PNG.',
    highlight: false
  },
  {
    id: '02.',
    val: '10+',
    title: 'Projects Built & Delivered.',
    desc: 'From AI-integrated intranets to real-time mapping systems, successfully leading and executing complex technical roadmaps.',
    highlight: true
  },
  {
    id: '03.',
    val: '3',
    title: 'Published Applications.',
    desc: 'Dedicated to building accessible mobile platforms, with multiple standalone applications currently live on major app stores.',
    highlight: false
  }
];

const FeaturedCapabilities = () => {
  return (
    <section className="py-32 relative px-8 z-10 bg-[#050505]">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {capabilities.map((item, idx) => {
            const initialProps = 
              idx === 0 ? { opacity: 0, x: -80, y: 0, filter: 'blur(4px)' } :
              idx === 1 ? { opacity: 0, x: 0, y: -120, filter: 'blur(4px)' } :
              { opacity: 0, x: 80, y: 0, filter: 'blur(4px)' };
              
            const animateProps = { opacity: 1, x: 0, y: item.highlight ? -48 : 0, filter: 'blur(0px)' };

            return (
              <motion.div
                key={item.id}
                initial={initialProps}
                whileInView={animateProps}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.6, 0.05, 0.01, 0.9] }}
                className={`
                  glass-card flex flex-col justify-between group
                  ${item.highlight ? 'z-20 shadow-[0_40px_80px_rgba(42, 222, 184,0.1)]' : 'z-10'}
                `}
                style={{
                  willChange: 'filter, transform, opacity',
                   ...(item.highlight && {
                      background: 'rgba(42, 222, 184, 0.05)',
                      borderColor: 'rgba(42, 222, 184, 0.2)'
                   })
                }}
              >
              <div>
                <div 
                  className="text-xl font-black mb-6"
                  style={{ color: item.highlight ? 'rgba(42, 222, 184, 0.4)' : 'rgba(255,255,255,0.2)' }}
                >
                  {item.id}
                </div>
                <div 
                  className="text-5xl font-black mb-4 group-hover:scale-105 transition-transform origin-left"
                  style={{ color: 'var(--primary)' }}
                >
                  {item.val}
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight text-white tracking-tight">
                  {item.title}
                </h3>
                <p 
                  className="text-sm font-light leading-relaxed mb-10"
                  style={{ color: item.highlight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)' }}
                >
                  {item.desc}
                </p>
              </div>

              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-decoration-none transition-transform hover:translate-x-1"
                style={{ 
                  color: 'var(--primary)',
                  textDecoration: 'none' 
                }}
              >
                Learn More 
                <ArrowRight size={14} />
              </a>
            </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(42, 222, 184,0.03)_0%,transparent_70%)] z-0 pointer-events-none" />
    </section>
  );
};

export default FeaturedCapabilities;
