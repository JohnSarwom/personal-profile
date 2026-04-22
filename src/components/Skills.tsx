import { motion } from 'framer-motion';
import { BrainCircuit, Globe, Smartphone, Map as MapIcon, Cloud, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: BrainCircuit,
    tags: ['Claude AI', 'Gemini', 'DeepSeek', 'MCP Integration', 'Prompt Engineering', 'n8n', 'Google Apps Script', 'MS Power Automate', 'OpenRouter API', 'Vibe Coding']
  },
  {
    title: 'Web Development',
    icon: Globe,
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML / CSS', 'Node.js', 'RESTful APIs', 'PHP', 'WordPress', 'Vercel']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    tags: ['Flutter', 'React Native', 'Android Studio', 'Java', 'Dart', 'Google Play']
  },
  {
    title: 'Geospatial & Mapping',
    icon: MapIcon,
    tags: ['ArcGIS', 'QGIS', 'MapInfo', 'Google Maps API', 'Mapbox', 'Leaflet', 'Drone Surveying', 'Remote Sensing']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    tags: ['GCP', 'Azure', 'Docker', 'Git / GitHub', 'MySQL', 'Supabase', 'Firebase', 'DNS Management']
  },
  {
    title: 'Creative & Digital Media',
    icon: PenTool,
    tags: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Canva', 'After Effects', 'CapCut', 'UI/UX Design']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]" aria-label="Technical Skills">
      <div className="container px-8">
        
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-m mb-6"
          >
            Technical <span className="text-white/40">Proficiencies</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              style={{ willChange: 'filter, transform, opacity' }}
              className="glass-card flex flex-col p-8 group hover:border-[var(--primary)]/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--primary-glow)] border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-black transition-all">
                <cat.icon size={24} />
              </div>
              <h3 className="text-white font-black text-xl mb-6 tracking-tight">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, i) => (
                  <span key={i} className={`px-3 py-1 bg-white/5 border rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-default ${i < 3 ? 'text-[var(--primary)] border-[var(--primary)]/30 shadow-[0_0_10px_var(--primary-glow)]' : 'text-white/70 border-white/10 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]'}`}>
                    {tag}
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

export default Skills;
