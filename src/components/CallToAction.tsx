import { motion } from 'framer-motion';
import ctaBg from '../assets/cta_background.png';

const CallToAction = () => {
    return (
        <section style={{
            padding: 'clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem)',
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-void) 50%, #0a0618 100%)',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
        }}>
            {/* Background Image Overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: 0,
                mixBlendMode: 'luminosity'
            }} />
            
            {/* Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                    position: 'absolute', top: '30%', left: '15%',
                    width: '350px', height: '350px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25), transparent 70%)',
                    borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
                style={{
                    position: 'absolute', top: '40%', right: '15%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent 70%)',
                    borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Urgency badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.5rem 1.2rem', marginBottom: '2rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '50px',
                        }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}
                        />
                        <span style={{ color: '#fca5a5', fontSize: '0.85rem', fontWeight: 600 }}>
                            Limited Slots Available This Month
                        </span>
                    </motion.div>

                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                        color: 'var(--accent-cream)', lineHeight: 1.2,
                        marginBottom: '1.5rem',
                    }}>
                        Ready to Outshine Your{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #7c3aed)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>Competition?</span>
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)', fontSize: '1.1rem',
                        lineHeight: 1.8, marginBottom: '2.5rem',
                        maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto',
                    }}>
                        Every day without a great website is a day your competitors are winning
                        customers that should be yours. Let's change that — starting today.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#connect"
                            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(251, 191, 36, 0.5)' }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                                padding: '1.2rem 2.8rem',
                                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                color: '#030014', textDecoration: 'none',
                                fontFamily: 'var(--font-heading)', fontSize: '1rem',
                                fontWeight: 700, letterSpacing: '0.08em',
                                borderRadius: '6px',
                                boxShadow: '0 6px 25px rgba(251, 191, 36, 0.35)',
                            }}
                        >
                            CLAIM YOUR FREE QUOTE
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/916381437668?text=Hello%20Lunex%20Web%20Studio%2C%20I%20am%20interested%20in%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04, borderColor: '#22c55e' }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                                padding: '1.2rem 2.8rem',
                                background: 'transparent', color: '#fff',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-heading)', fontSize: '1rem',
                                letterSpacing: '0.08em',
                                border: '1px solid rgba(34, 197, 94, 0.4)',
                                borderRadius: '6px',
                            }}
                        >
                            💬 CHAT ON WHATSAPP
                        </motion.a>
                    </div>

                    {/* Trust note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{
                            color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem',
                            marginTop: '2rem', letterSpacing: '0.05em',
                        }}
                    >
                        ✦ No commitment required · Free consultation · Response within 24 hours
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
