import { motion } from 'framer-motion';

const LogoMarquee = () => {
    const countries = [
        { flag: '🇺🇸', name: 'United States' },
        { flag: '🇬🇧', name: 'United Kingdom' },
        { flag: '🇦🇪', name: 'UAE' },
        { flag: '🇦🇺', name: 'Australia' },
        { flag: '🇮🇳', name: 'India' },
        { flag: '🇨🇦', name: 'Canada' },
        { flag: '🇩🇪', name: 'Germany' },
        { flag: '🇸🇬', name: 'Singapore' },
    ];

    const allCountries = [...countries, ...countries];

    return (
        <section style={{
            padding: '3rem 0', overflow: 'hidden',
            background: 'var(--bg-void)',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                <span style={{
                    fontSize: '0.75rem', letterSpacing: '0.3em', color: 'var(--accent-dim)',
                    fontFamily: 'var(--font-heading)',
                }}>
                    TRUSTED BY BUSINESSES ACROSS
                </span>
            </motion.div>

            <div style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Fade edges */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
                    background: 'linear-gradient(to right, var(--bg-void), transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
                    background: 'linear-gradient(to left, var(--bg-void), transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />

                <div className="marquee-track" style={{
                    display: 'flex', gap: '3rem',
                    animation: 'marquee 25s linear infinite',
                    width: 'fit-content',
                }}>
                    {allCountries.map((c, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '0.6rem',
                            flexShrink: 0, whiteSpace: 'nowrap',
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>{c.flag}</span>
                            <span style={{
                                color: 'var(--accent-dim)', fontSize: '0.9rem',
                                fontFamily: 'var(--font-heading)', letterSpacing: '0.1em',
                            }}>
                                {c.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default LogoMarquee;
