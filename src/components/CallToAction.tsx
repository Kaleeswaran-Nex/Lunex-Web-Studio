import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-void) 50%, #0a0618 100%)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
        }}>
            {/* Animated Glow Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '20%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    right: '20%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />

            {/* Decorative Circles */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                height: '500px',
                border: '1px solid rgba(251, 191, 36, 0.15)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '700px',
                height: '700px',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-exotic" style={{
                        fontSize: '0.9rem',
                        color: 'var(--accent-gold)',
                        display: 'block',
                        marginBottom: '1.5rem',
                        textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                    }}>
                        Ready to Transform?
                    </span>

                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        color: 'var(--accent-cream)',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem'
                    }}>
                        Let's Create Something <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Extraordinary</span> Together
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Your vision deserves a website that captivates. Partner with LUNEX and
                        watch your digital presence transform into a masterpiece.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="https://wa.me/916381437668?text=Hello%20Lunex%20Web%20Studio%2C%20I%20am%20interested%20in%20your%20services.%20Let%20me%20know%20more%20details."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 40px rgba(251, 191, 36, 0.5), 0 0 80px rgba(251, 191, 36, 0.2)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1.2rem 3rem',
                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                color: 'var(--bg-void)',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                borderRadius: '4px',
                                boxShadow: '0 4px 20px rgba(251, 191, 36, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            START YOUR PROJECT
                        </motion.a>

                        <motion.a
                            href="#connect"
                            whileHover={{
                                scale: 1.05,
                                borderColor: '#7c3aed',
                                boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1.2rem 3rem',
                                background: 'transparent',
                                color: 'var(--accent-cream)',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                letterSpacing: '0.1em',
                                border: '1px solid rgba(124, 58, 237, 0.5)',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            GET A QUOTE
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
