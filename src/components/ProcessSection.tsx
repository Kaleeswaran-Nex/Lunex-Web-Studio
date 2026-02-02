import { motion } from 'framer-motion';

const steps = [
    {
        icon: "✦",
        title: "Discovery & Blueprint",
        desc: "We analyze your essence to architect a digital strategy that endures."
    },
    {
        icon: "✎",
        title: "Exotic Design",
        desc: "Weaving colors and typography into a visual language that whispers authority."
    },
    {
        icon: "⚡",
        title: "Development",
        desc: "Clean, high-performance code built on modern frameworks (React, TS)."
    },
    {
        icon: "🚀",
        title: "Launch & Legacy",
        desc: "Deploying your empire to the world, ensuring speed, SEO, and impact."
    }
];

const ProcessSection = () => {
    return (
        <section id="vision" style={{
            minHeight: '100vh',
            background: 'var(--bg-void)',
            padding: '5rem 5vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-exotic"
                style={{
                    fontSize: '2.5rem',
                    color: 'var(--accent-cream)',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}
            >
                The Process
            </motion.h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem',
                maxWidth: '800px',
                position: 'relative'
            }}>
                {/* Connecting Line */}
                <div style={{
                    position: 'absolute',
                    left: '24px',
                    top: '20px',
                    bottom: '20px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--accent-gold), transparent)',
                    opacity: 0.3,
                    zIndex: 0
                }} />

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'flex-start',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        {/* Icon/Node */}
                        <div className="glass-panel" style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'var(--accent-gold)',
                            fontSize: '1.5rem',
                            border: '1px solid var(--accent-gold)',
                            background: 'var(--bg-void)'
                        }}>
                            {step.icon}
                        </div>

                        {/* Content */}
                        <div style={{ paddingTop: '0.5rem' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'var(--accent-cream)',
                                marginBottom: '0.5rem'
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                color: 'var(--accent-dim)',
                                maxWidth: '500px'
                            }}>
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;
