import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';


const Linkedin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const contactMethods = [
  {
    label: 'Email',
    val: 'sarwomjohn@gmail.com',
    href: 'mailto:sarwomjohn@gmail.com',
    icon: Mail
  },
  {
    label: 'LinkedIn',
    val: 'john-sarwom',
    href: 'https://linkedin.com/in/john-sarwom8a4b181bb',
    icon: Linkedin
  },
  {
    label: 'Location',
    val: 'Port Moresby, PNG',
    href: '#',
    icon: MapPin
  }
];

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-32 md:py-32 relative overflow-hidden" aria-label="Contact Information">
      <div className="container">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-m"
          >
            Let's build something <br />
            <span className="text-white/40">remarkable together.</span>
          </motion.h2>
          <p className="text-white/70 max-w-lg mx-auto font-light">
            Open to freelance projects, full-time roles, and collaborative opportunities across PNG and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 max-w-4xl mx-auto gap-4 mb-16 relative z-10">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target={method.label === 'LinkedIn' ? '_blank' : undefined}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="glass-card group flex flex-col items-center text-center py-10"
              style={{ willChange: 'filter, transform, opacity', color: 'inherit', textDecoration: 'none' }}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-[var(--primary)] group-hover:text-black transition-all mb-4">
                <method.icon size={20} />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">{method.label}</div>
              <div className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">{method.val}</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a href="mailto:sarwomjohn@gmail.com" className="btn-primary px-12 py-4" style={{ textDecoration: 'none' }}>
             <Send size={18} />
             Send a Message
          </a>
        </motion.div>

      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[var(--primary-glow)] opacity-10 filter blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

export default Contact;
