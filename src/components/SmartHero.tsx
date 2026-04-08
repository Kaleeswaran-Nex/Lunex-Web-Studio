import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_workspace.png';

interface Props {
    cursorPos: { x: number; y: number };
}

const rotatingWords = [
    'Drive Revenue',
    'Scale Globally',
    'Convert Visitors',
    'Define Brands',
    'Win Customers',
];

const trustBadges = [
    { icon: '🌍', text: '10+ Countries Served' },
    { icon: '⚡', text: '50+ Projects Delivered' },
    { icon: '⭐', text: '100% Client Satisfaction' },
    { icon: '💰', text: 'Save 70% vs US Agencies' },
];

const SmartHero: React.FC<Props> = ({ cursorPos }) => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
    const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

    // Typing animation
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const currentWord = rotatingWords[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex <= currentWord.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentWord.slice(0, charIndex));
                setCharIndex(prev => prev + 1);
            }, 80);
        } else if (!isDeleting && charIndex > currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setCharIndex(prev => prev - 1);
                setDisplayText(currentWord.slice(0, charIndex - 1));
            }, 40);
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % rotatingWords.length);
            }, 50);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section
            ref={containerRef}
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px',
                background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(59, 7, 100, 0.15) 0%, transparent 40%), var(--bg-void)`
            }}
        >
            {/* Background Image Overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.25,
                zIndex: 0,
                mixBlendMode: 'luminosity'
            }} />
            
            {/* Grid Background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px', opacity: 0.5, zIndex: 0
            }} />

            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', top: '15%', left: '10%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3), transparent 70%)',
                    borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                style={{
                    position: 'absolute', bottom: '10%', right: '10%',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2), transparent 70%)',
                    borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
                }}
            />

            {/* Main Content */}
            <motion.div
                style={{ opacity: opacityText, y: yParallax, zIndex: 3, position: 'relative', textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}
            >
                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.5rem 1.2rem',
                        border: '1px solid rgba(251, 191, 36, 0.3)',
                        borderRadius: '50px',
                        background: 'rgba(251, 191, 36, 0.06)',
                        marginBottom: '2rem',
                    }}
                >
                    <span style={{ fontSize: '0.8rem' }}>✦</span>
                    <span style={{
                        fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)', fontWeight: 600,
                    }}>
                        PREMIUM WEB DESIGN STUDIO
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 700,
                        lineHeight: 1.15,
                        color: '#fff',
                        margin: '0 0 1.5rem',
                    }}
                >
                    We Build Websites That
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'inline-block',
                        minHeight: 'clamp(2.2rem, 6vw, 4.5rem)',
                    }}>
                        {displayText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                            style={{ color: 'var(--accent-gold)', WebkitTextFillColor: 'var(--accent-gold)' }}
                        >|</motion.span>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        maxWidth: '650px',
                        margin: '0 auto 2.5rem',
                    }}
                >
                    Award-worthy web design & development for ambitious businesses
                    across <strong style={{ color: '#fff' }}>USA, UK, UAE, Australia</strong> & beyond.
                    Premium quality at prices that make sense.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    style={{
                        display: 'flex', gap: '1rem', justifyContent: 'center',
                        flexWrap: 'wrap', marginBottom: '3rem',
                    }}
                >
                    <motion.a
                        href="#connect"
                        whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(251, 191, 36, 0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            padding: '1rem 2.2rem',
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            color: '#030014', textDecoration: 'none',
                            fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
                            fontWeight: 700, letterSpacing: '0.08em',
                            borderRadius: '6px',
                            boxShadow: '0 4px 25px rgba(251, 191, 36, 0.35)',
                        }}
                    >
                        GET FREE QUOTE
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.a>

                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            to="/our-work"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                padding: '1rem 2.2rem',
                                background: 'transparent',
                                color: '#fff', textDecoration: 'none',
                                fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
                                fontWeight: 600, letterSpacing: '0.08em',
                                borderRadius: '6px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s',
                            }}
                        >
                            VIEW OUR WORK
                            <span>→</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{
                        display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                        justifyContent: 'center',
                    }}
                >
                    {trustBadges.map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 + i * 0.1 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.45rem 0.9rem',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                color: 'var(--accent-dim)',
                            }}
                        >
                            <span>{badge.icon}</span>
                            <span>{badge.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                style={{
                    position: 'absolute', bottom: '2rem',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '0.5rem', zIndex: 3,
                }}
            >
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
                    SCROLL
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }}
                />
            </motion.div>
        </section>
    );
};

export default SmartHero;
