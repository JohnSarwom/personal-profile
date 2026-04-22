import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Intranet System with AI Integration',
    role: 'Head Developer — QRFC & Securities Commission PNG',
    desc: 'Led full-stack development of a centralized intranet platform. Built automated HR workflows and AI-powered modules — including legal insight tools and automated report generation.',
    tech: ['React.js', 'Supabase', 'Claude AI', 'n8n', 'MCP', 'GCP'],
    type: 'Full-Stack · AI Integration'
  },
  {
    title: 'PNG Crime Hotspot Mobile App',
    role: 'Head Developer — Zah Tech Limited',
    desc: 'Architected and developed a mobile platform for real-time crime reporting, data collection, and hotspot identification. Implemented data-driven insights for law enforcement.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Analytics'],
    type: 'Mobile · Data Analytics'
  },
  {
    title: 'Enterprise Financial & Onboarding Systems',
    role: 'Full-Stack Developer — Zah Tech / ZF Finance',
    desc: 'Designed secure, web-based loan management and vehicle onboarding systems. Built front-end and back-end features for client applications and secure database integration.',
    tech: ['React.js', 'MySQL', 'PHP', 'REST APIs', 'Supabase'],
    type: 'Web App · FinTech'
  },
  {
    title: 'Lae Health Service Routing System',
    role: 'Final Year Project — PNG University of Technology (2019)',
    desc: 'Built and integrated GIS web mapping with the Android platform to create a spatial navigational system for Health Services in Lae City.',
    tech: ['Android Studio', 'QGIS', 'Leaflet', 'GeoJSON', 'Java'],
    type: 'GIS · Android · Navigation'
  },
  {
    title: 'Standalone Android Applications',
    role: 'Independent Developer',
    desc: 'Published multiple native Android apps: PNG Music Lyrics (on Play Store), Reverb & Delay Calculator, and the PNG Tokpless App (in development).',
    tech: ['Android Studio', 'Java', 'Google Play', 'Firebase'],
    type: 'Android · Published'
  },
  {
    title: 'Digital Forensics — Task Force Shield',
    role: 'Assistant Investigator — Securities Commission PNG',
    desc: 'Assisted in high-profile digital forensic investigations. Handled evidence extraction, analysis, and documentation in line with forensic standards.',
    tech: ['Digital Forensics', 'Evidence Analysis', 'Legal Documentation'],
    type: 'Security · Digital Forensics'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative" aria-label="Featured Projects">
      <div className="container px-8">
        
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4"
          >
            What I've built
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-m mb-6"
          >
            Featured <span className="text-white/40">Projects</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="glass-card flex flex-col group hover:border-[var(--primary)]/30 transition-all duration-500"
              style={{ willChange: 'filter, transform, opacity', padding: '2rem' }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-[var(--primary)] text-[10px] uppercase font-black tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded">
                  {project.type}
                </div>
                <div className="flex gap-4 text-white/50 group-hover:text-[var(--primary)] transition-colors">
                  <ExternalLink size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-2 leading-tight">
                {project.title}
              </h3>
              
              <div className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider mb-4 opacity-100">
                {project.role}
              </div>

              <p className="text-white/70 text-sm font-light leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-bold text-white/60 uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
