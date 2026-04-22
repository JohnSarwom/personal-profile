import { motion } from 'framer-motion';

const history = [
  {
    date: 'Nov 2025 – Mar 2026',
    role: 'Head Developer – Intranet System',
    co: 'QRFC & Securities Commission of Papua New Guinea',
    points: [
      'Led full-stack development of the corporate intranet platform.',
      'Designed and implemented a custom Kanban task management system.',
      'Integrated secure role-based access control and analytics dashboards.'
    ]
  },
  {
    date: '2024 – 2026 (Concurrent)',
    role: 'Head Developer – PNG Crime Hotspot App',
    co: 'Zah Tech Limited (SME)',
    points: [
      'Architected mobile application to visualize crime data and geospatial hotspots.',
      'Built robust Node.js and Supabase backend to handle real-time community reporting.',
      'Optimized query performance and integrated offline caching for remote areas.'
    ]
  },
  {
    date: '2021 – 2026 (Multiple roles held)',
    role: 'Senior IT Officer | Web Developer | Automation Developer',
    co: 'Securities Commission of Papua New Guinea',
    points: [
      'Managed IT infrastructure, internal networks, and cloud deployment pipelines.',
      'Developed automated workflows utilizing MS Power Automate and n8n.',
      'Streamlined data collection and geospatial reporting processes.'
    ]
  },
  {
    date: '2025',
    role: 'Assistant Front-End Developer & UAT Tester – Centurion Licensing',
    co: 'Securities Commission PNG',
    points: [
      'Collaborated on front-end interfaces for the Centurion Licensing system.',
      'Conducted rigorous User Acceptance Testing to ensure system reliability.',
      'Documented bugs and worked with the senior engineering team on resolutions.'
    ]
  },
  {
    date: '2023 – 2026',
    role: 'Developer – Vehicle Onboarding & Loan Financial Systems',
    co: 'Zah Tech (SME) / ZF Finance',
    points: [
      'Engineered a complete vehicle onboarding and tracking financial application.',
      'Built integrations for loan origination, payment tracking, and automated reminders.',
      'Reduced manual processing time by over 40%.'
    ]
  },
  {
    date: '2018 – Present',
    role: 'Online Content Creator & Graphics Manager',
    co: 'Zah Tech (SME)',
    points: [
      'Designed branding, digital graphics, and promotional web content.',
      'Managed social media campaigns and audience engagement strategies.',
      'Produced and edited video assets utilizing Adobe Creative Suite.'
    ]
  },
  {
    date: '2011 – 2017',
    role: 'Freelance Computer & Mobile Phone Technician',
    co: 'Self-Employed',
    points: [
      'Provided hardware diagnostics, repairs, and software troubleshooting.',
      'Assembled custom desktop PCs and configured local area networks.',
      'Delivered technical support and training to small business clients.'
    ]
  }
];

const WorkHistory = () => {
  return (
    <section id="experience" className="py-20 relative" aria-label="Work Experience">
      <div className="container px-8">
        
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4"
          >
            My Professional Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-m mb-6"
          >
            Work <span className="text-white/80">History</span>
          </motion.h2>
        </div>

        <div className="relative pl-0 md:pl-8 border-l-0 md:border-l border-white/5 space-y-8">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              style={{ willChange: 'filter, transform, opacity' }}
              className="relative md:pl-10"
            >
              {/* Timeline Dot (Desktop only) */}
              <div className="hidden md:block absolute -left-[49px] top-8 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[#050505] z-10 shadow-[0_0_15px_var(--primary-glow)]" />
              
              <div 
                className="glass-card group relative transition-all duration-500 overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              >
                {/* Background Spotlight */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(42, 222, 184, 0.08), transparent 40%)`
                  }}
                />
                
                {/* Border Spotlight */}
                <div 
                  className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at var(--x, 0) var(--y, 0), rgba(42, 222, 184, 0.5), transparent 40%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="text-[var(--primary)] text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded w-fit">
                      {item.date}
                    </div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-[var(--primary)]/50 transition-colors">
                      {item.co}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                    {item.role}
                  </h3>
                  {item.points && (
                    <ul className="mt-6 pb-4 space-y-3">
                      {item.points.map((point, i) => (
                      <li key={i} className="text-white/80 text-sm md:text-base font-light flex items-start gap-4">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkHistory;
