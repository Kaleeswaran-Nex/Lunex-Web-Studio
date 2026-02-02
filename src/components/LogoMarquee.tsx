import { motion } from 'framer-motion';

const clients = [
    "AURA DIGITAL", "ECOPLAST", "TECH SOLUTIONS", "AURA DIGITAL", "ECOPLAST", "TECH SOLUTIONS"
];

const LogoMarquee = () => {
    return (
        <section style={{
            padding: '4rem 0',
            background: 'var(--bg-void)',
            borderTop: '1px solid rgba(212, 175, 55, 0.1)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
            overflow: 'hidden'
        }}>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                    textAlign: 'center',
                    color: 'var(--accent-dim)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '2rem'
                }}
            >
                Trusted By Leading Brands
            </motion.p>

            <div style={{ position: 'relative' }}>
                {/* Fade edges */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to right, var(--bg-void), transparent)',
                    zIndex: 2
                }} />
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to left, var(--bg-void), transparent)',
                    zIndex: 2
                }} />

                <motion.div
                    animate={{ x: [0, -960] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 15,
                            ease: "linear"
                        }
                    }}
                    style={{
                        display: 'flex',
                        gap: '6rem',
                        alignItems: 'center',
                        width: 'fit-content'
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <span
                            key={index}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'rgba(212, 175, 55, 0.3)',
                                whiteSpace: 'nowrap',
                                letterSpacing: '0.2em',
                                transition: 'color 0.3s'
                            }}
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoMarquee;
