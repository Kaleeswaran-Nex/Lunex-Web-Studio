import { motion } from 'framer-motion';

const services = [
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        category: "DESIGN",
        title: "Stunning UI/UX Design",
        desc: "Premium interfaces that captivate your audience and turn visitors into loyal customers. We design experiences, not just screens.",
        highlight: "Avg. 40% increase in user engagement"
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
        category: "DEVELOPMENT",
        title: "High-Performance Websites",
        desc: "Lightning-fast, SEO-optimized websites built with React, Next.js & modern tech. Your site will load in under 2 seconds.",
        highlight: "Built for speed & scalability"
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        category: "E-COMMERCE",
        title: "Revenue-Driving Stores",
        desc: "Custom e-commerce solutions that maximize conversions. From product pages to checkout — every step optimized for sales.",
        highlight: "Complete shopping experience"
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
        ),
        category: "BRANDING",
        title: "Brand Identity & Strategy",
        desc: "We craft compelling brand identities that tell your story. Logo design, color systems, typography — the complete brand kit.",
        highlight: "Stand out from competitors"
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        category: "CUSTOM",
        title: "SaaS & Web Applications",
        desc: "Complex dashboards, client portals, and custom web apps built for your specific business needs. Scalable and maintainable.",
        highlight: "Enterprise-grade solutions"
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        category: "HOSTING",
        title: "Maintenance & Support",
        desc: "Ongoing maintenance, hosting setup, SSL, performance monitoring & 24/7 support. We're with you long after launch.",
        highlight: "Zero downtime guarantee"
    }
];

const ExoticServices = () => {
    return (
        <section id="craft" style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, var(--bg-void) 0%, var(--bg-deep) 50%, var(--bg-void) 100%)',
            padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 5vw)',
            position: 'relative',
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
                width: '800px', height: '600px',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 60%)',
                pointerEvents: 'none'
            }} />

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '1rem',
                    }}
                >
                    WHAT WE DO
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        color: 'var(--accent-cream)',
                        marginBottom: '1rem',
                    }}
                >
                    Services That <span style={{
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>Deliver Results</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--accent-dim)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}
                >
                    From concept to launch, we handle everything. Premium quality at a fraction of what US/UK agencies charge.
                </motion.p>
            </div>

            {/* Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
                gap: '1.2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative', zIndex: 1,
            }}>
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        whileHover={{ y: -6, borderColor: 'rgba(251, 191, 36, 0.4)' }}
                        style={{
                            padding: 'clamp(1.5rem, 3vw, 2rem)',
                            background: 'rgba(15, 10, 25, 0.8)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '1rem',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            willChange: 'transform, border-color'
                        }}
                    >
                        {/* Icon + Category */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{
                                color: 'var(--accent-gold)',
                                filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))',
                            }}>
                                {s.icon}
                            </div>
                            <span style={{
                                fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--accent-purple-glow)',
                                border: '1px solid rgba(167, 139, 250, 0.25)',
                                padding: '0.2rem 0.6rem', borderRadius: '20px',
                            }}>
                                {s.category}
                            </span>
                        </div>

                        {/* Content */}
                        <h4 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.3rem',
                            color: 'var(--accent-cream)', lineHeight: 1.3,
                        }}>
                            {s.title}
                        </h4>
                        <p style={{ color: 'var(--accent-dim)', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                            {s.desc}
                        </p>

                        {/* Highlight badge */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            padding: '0.4rem 0.8rem',
                            background: 'rgba(251, 191, 36, 0.06)',
                            border: '1px solid rgba(251, 191, 36, 0.12)',
                            borderRadius: '6px', width: 'fit-content',
                        }}>
                            <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem' }}>✦</span>
                            <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 500 }}>
                                {s.highlight}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExoticServices;
