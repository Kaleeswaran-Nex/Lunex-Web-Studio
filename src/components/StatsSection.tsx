import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { number: 4, suffix: '+', label: 'Projects Delivered' },
    { number: 4, suffix: '+', label: 'Happy Clients' },
    { number: 1, suffix: '+', label: 'Year Experience' },
    { number: 100, suffix: '%', label: 'Customer Satisfaction' }
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const duration = 1500;
                    const steps = 30;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target]);

    return (
        <span
            ref={ref}
            className="text-gradient-lavender"
            style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                display: 'block'
            }}
        >
            {count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: 'var(--bg-void)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Lines */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: '80px',
                background: 'linear-gradient(to bottom, transparent, var(--accent-purple-glow))'
            }} />

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="text-exotic" style={{ fontSize: '0.9rem' }}>
                        Our Impact
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)',
                        marginTop: '1rem'
                    }}>
                        Numbers That Speak
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                padding: '2.5rem 1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                background: 'rgba(20, 10, 30, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(167, 139, 250, 0.2)',
                                borderRadius: '8px'
                            }}
                        >
                            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                            <span style={{
                                color: 'var(--accent-dim)',
                                fontSize: '0.9rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    section > div > div:last-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    section > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default StatsSection;
