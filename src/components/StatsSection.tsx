import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { number: 10, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
    { number: 3, suffix: '+', label: 'Countries Served', icon: '🌍' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { number: 70, suffix: '%', label: 'Cost Savings', icon: '💰' },
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
                    const steps = 40;
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
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref} style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            display: 'block',
        }}>
            {count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section style={{
            padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            background: 'var(--bg-void)', position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '1px', height: '60px',
                background: 'linear-gradient(to bottom, transparent, var(--accent-gold))',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span className="text-exotic" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.3em' }}>
                        OUR IMPACT
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)', marginTop: '1rem',
                    }}>
                        Numbers That Speak for Themselves
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                    gap: '1.5rem', textAlign: 'center',
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4, borderColor: 'rgba(251, 191, 36, 0.3)' }}
                            style={{
                                padding: 'clamp(1.5rem, 3vw, 2.5rem) 1rem',
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', gap: '0.8rem',
                                background: 'rgba(15, 10, 25, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '1rem',
                                transition: 'all 0.3s',
                            }}
                        >
                            <span style={{ fontSize: '2rem' }}>{stat.icon}</span>
                            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                            <span style={{
                                color: 'var(--accent-dim)', fontSize: '0.85rem',
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
