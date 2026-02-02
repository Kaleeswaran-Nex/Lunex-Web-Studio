import { motion } from 'framer-motion';

const features = [
    {
        icon: "✦",
        title: "Premium Quality",
        description: "Every pixel crafted with precision and attention to detail"
    },
    {
        icon: "⚡",
        title: "Fast Delivery",
        description: "Quick turnaround without compromising on quality"
    },
    {
        icon: "🎯",
        title: "Result Focused",
        description: "Designs that convert visitors into customers"
    },
    {
        icon: "💎",
        title: "Unique Designs",
        description: "Custom solutions tailored to your brand identity"
    },
    {
        icon: "🛡️",
        title: "Ongoing Support",
        description: "We're here for you even after project completion"
    },
    {
        icon: "♾️",
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
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
                                padding: '2rem',
                                background: 'rgba(15, 8, 20, 0.5)',
                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem',
                                filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))'
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
