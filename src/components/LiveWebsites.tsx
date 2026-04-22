import { motion } from 'framer-motion';
import { ExternalLink, Globe, ShieldCheck, Briefcase, Cpu } from 'lucide-react';

const liveSites = [
  {
    title: 'Securities Commission of PNG',
    url: 'https://www.scpng.gov.pg/',
    category: 'Government',
    desc: 'The active regulator for capital markets in Papua New Guinea. A high-security, official government platform.',
    icon: ShieldCheck,
    color: '#2adeb8'
  },
  {
    title: 'Vision Real Estate PNG',
    url: 'https://www.visionrealestatepng.com/',
    category: 'Business',
    desc: 'A professional real estate platform built for business operations, property listings, and client engagement.',
    icon: Briefcase,
    color: '#6366f1'
  },
  {
    title: 'Smart Track PNG',
    url: 'https://www.smarttrackpng.com/',
    category: 'System',
    desc: 'An enterprise-grade tracking and management system platform with secure login and operational workflows.',
    icon: Cpu,
    color: '#facc15'
  },
  {
    title: 'Mell Research & Marketing',
    url: 'https://www.mellresearch.com/',
    category: 'Business',
    desc: 'A live business consultancy and research firm website, designed for professional client outreach.',
    icon: Globe,
    color: '#f472b6'
  },
  {
    title: 'QRF PNG (Quick Response Force)',
    url: 'https://www.qrfpng.com/',
    category: 'System',
    desc: 'A functional operational system deployment designed for rapid response and task coordination.',
    icon: ShieldCheck,
    color: '#fb7185'
  }
];

const LiveWebsites = () => {
  return (
    <section id="websites" className="py-32 relative overflow-hidden" aria-label="Live Deployments">
      <div className="container px-8 relative z-10">
        
        <div className="flex flex-col mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Live Production Sites
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-m mb-6"
          >
            Active <span className="text-white/40">Deployments</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl font-light">
            A selection of live, fully operational websites and systems I have architected and deployed into production environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveSites.map((site, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="glass-card flex flex-col group hover:border-[var(--primary)]/30 transition-all duration-500 relative overflow-hidden"
              style={{ willChange: 'filter, transform, opacity', padding: '2.5rem' }}
            >
              {/* Status Indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500/80">Live</span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[var(--primary)] group-hover:text-black transition-all duration-500"
                  style={{ color: site.color }}
                >
                  <site.icon size={22} className="group-hover:text-black transition-colors" />
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40 bg-white/5 px-2 py-1 rounded">
                  {site.category}
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-3 leading-tight group-hover:text-[var(--primary)] transition-colors">
                {site.title}
              </h3>
              
              <p className="text-white/60 text-sm font-light leading-relaxed mb-10 flex-grow">
                {site.desc}
              </p>

              <a 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full py-3 text-xs font-bold flex items-center justify-center gap-2 group-hover:border-[var(--primary)] transition-all"
                style={{ textDecoration: 'none' }}
              >
                Visit Website
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[var(--primary-glow)] opacity-[0.03] filter blur-[100px] z-0 rounded-full" />
    </section>
  );
};

export default LiveWebsites;
