import { motion } from 'framer-motion';
import { Mail, FolderOpen, Award, GraduationCap, Briefcase, Globe, ArrowRight } from 'lucide-react';
import aboutMeImage from '../assets/about-me.webp';

const stats = [
  { 
    val: '5+', 
    label: 'Years Experience', 
    icon: Briefcase,
    desc: 'Extensive background in Geospatial Science and Full-Stack Engineering across diverse environments.',
    link: '#experience'
  },
  { 
    val: '10+', 
    label: 'Projects Built', 
    icon: Award,
    desc: 'Successfully led and delivered high-impact digital solutions ranging from AI systems to mobile platforms.',
    link: '#projects'
  },
  { 
    val: '3', 
    label: 'Android Apps', 
    icon: Globe,
    desc: 'Published native applications on the Google Play Store with a focus on utility and regional localization.',
    link: '#projects'
  },
  { 
    val: 'GIS', 
    label: 'Geospatial Sci.', 
    icon: GraduationCap,
    desc: 'Advanced expertise in spatial analysis, drone mapping, and integrating GIS data into software ecosystems.',
    link: '#skills'
  },
];

const techOrbit = [
  { name: 'JS', color: '#f7df1e' },
  { name: 'PY', color: '#3776ab' },
  { name: 'D', color: '#00add8' },
  { name: 'HTML', color: '#e34f26' },
  { name: 'CSS', color: '#1572b6' },
  { name: 'Node', color: '#339933' },
  { name: 'Xd', color: '#ff61f6' },
  { name: 'Git', color: '#f05032' },
  { name: 'Ai', color: '#ff9a00' },
  { name: 'R', color: '#276dc3' },
  { name: 'Figma', color: '#f24e1e' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#050505]" aria-label="About Me">
      <div className="container px-8">
        
        {/* Main Content Grid: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Left Side: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            style={{ willChange: 'filter, transform, opacity' }}
            className="flex flex-col"
          >
            <div className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4">
              Who I am
            </div>
            <h2 className="heading-m mb-12">
              About <span className="text-white/40">Me</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
               <p>
                  I am a software engineer with a <span className="text-white font-medium">Bachelor's Degree in Geographic Information Science</span>. Over the years, I have expanded my technical expertise from advanced spatial analysis and drone mapping into full-stack software engineering and digital solutions development.
               </p>
               <p>
                  I specialize in designing and building <span className="text-white font-medium">web applications, mobile apps, business automation systems, and AI-integrated workflows</span>. My passion lies in leveraging Google Cloud Platform and Microsoft Azure to streamline operations and deliver end-to-end solutions.
               </p>
               <p>
                  With strong teamwork, leadership training, and a proven work ethic, I thrive in collaborative environments and continuously seek new challenges and opportunities to innovate.
               </p>
            </div>

            <div className="flex gap-4 mt-12">
               <a href="#projects" className="btn-secondary py-3 px-8 text-xs font-bold leading-none">
                  <FolderOpen size={16} />
                  See Projects
               </a>
               <a href="#contact" className="btn-secondary bg-white/5 border-none py-3 px-8 text-xs font-bold leading-none">
                  <Mail size={16} />
                  Get In Touch
               </a>
            </div>
          </motion.div>

          {/* Right Side: Orbiting Image Scene */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            style={{ willChange: 'filter, transform, opacity' }}
            className="relative flex items-center justify-center aspect-square p-8 md:p-12"
          >
            {/* Orbit Rings */}
            <div className="absolute inset-8 md:inset-12 border border-white/5 rounded-full scale-[0.8] opacity-20" />
            <div className="absolute inset-8 md:inset-12 border border-white/5 rounded-full scale-[0.6] opacity-40" />
            
            {/* The Main Orbiting Wrapper — CSS animation instead of Framer Motion */}
            <div className="orbit-ring absolute inset-0 w-full h-full">
              {techOrbit.map((tech, i) => {
                const angle = (i / techOrbit.length) * (2 * Math.PI);
                const radius = 135;
                return (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}rad) translate(${radius}px) rotate(-${angle}rad)`
                    }}
                  >
                    <div
                       className="orbit-icon w-10 h-10 md:w-12 md:h-12 bg-[#0e0e0e] border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black pointer-events-none shadow-xl"
                       style={{ color: tech.color }}
                    >
                      {tech.name}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Profile Picture */}
            <div className="relative w-2/3 h-2/3 z-10 p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-transparent opacity-20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_80px_rgba(42, 222, 184,0.15)]">
                <img 
                  src={aboutMeImage} 
                  alt="John Sarwom" 
                  className="w-full h-full object-cover scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              style={{ willChange: 'filter, transform, opacity' }}
              className="glass-card flex flex-col items-start group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--primary-glow)] border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mb-8 group-hover:bg-[var(--primary)] group-hover:text-black transition-all duration-500">
                <stat.icon size={22} />
              </div>
              
              <div className="text-xl font-bold text-white mb-1 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[var(--primary)] text-[15px] font-black mb-4">
                {stat.val}
              </div>
              
              <p className="text-white/60 text-xs font-medium leading-relaxed mb-8 flex-grow">
                {stat.desc}
              </p>
              
              <a href={stat.link} style={{ textDecoration: 'none' }} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-white/50 group-hover:text-[var(--primary)] transition-colors mt-auto cursor-pointer">
                 Learn More 
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
