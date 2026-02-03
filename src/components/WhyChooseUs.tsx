import { motion } from 'framer-motion';

const features = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
        ),
        title: "Premium Quality",
        description: "Every pixel crafted with precision and attention to detail"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: "Fast Delivery",
        description: "Quick turnaround without compromising on quality"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: "Result Focused",
        description: "Designs that convert visitors into customers"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                <path d="M11 3L8 9l4 12 4-12-3-6" />
                <path d="M2 9h20" />
            </svg>
        ),
        title: "Unique Designs",
        description: "Custom solutions tailored to your brand identity"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
            </svg>
        ),
        title: "Ongoing Support",
        description: "We're here for you even after project completion"
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
            </svg>
        ),
        title: "Unlimited Revisions",
        description: "We iterate until you're completely satisfied"
    }
];

const WhyChooseUs = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: 'linear-gradient(180deg, var(--bg-void) 0%, var(--bg-deep) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 60%)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="text-exotic" style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
                        Why Lunex
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)',
                        marginTop: '1rem'
                    }}>
                        Why Clients Choose Us
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                    gap: '1.5rem',
                    padding: '0 1rem'
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                            style={{
                                padding: '2.5rem',
                                background: 'rgba(15, 15, 25, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '1.5rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div style={{
                                color: 'var(--accent-gold)',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.4))'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.3rem',
                                color: 'var(--accent-cream)',
                                marginBottom: '0.75rem'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: 'var(--accent-dim)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6
                            }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
