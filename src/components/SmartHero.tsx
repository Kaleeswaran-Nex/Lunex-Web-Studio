import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
    cursorPos: { x: number; y: number };
}

const SmartHero: React.FC<Props> = ({ cursorPos }) => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yBackend = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    // Abstract Phoenix/Structure Grid
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2.5, ease: "easeInOut" as const }
        }
    };

    return (
        <section
            ref={containerRef}
            style={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(59, 7, 100, 0.15) 0%, transparent 40%), var(--bg-void)`
            }}
        >
            {/* Vintage Grid / Blueprint Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                opacity: 0.4,
                zIndex: 0
            }} />

            {/* Content Container */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                zIndex: 2,
                position: 'relative',
                textAlign: 'center'
            }}>
                {/* Brand Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="glass-panel"
                    style={{
                        padding: '1rem 3rem',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        marginBottom: '1rem'
                    }}
                >
                    <h2 className="text-exotic" style={{
                        margin: 0,
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'var(--accent-cream)',
                        fontWeight: 600,
                        letterSpacing: '0.4em'
                    }}>
                        EST. 2024
                    </h2>
                </motion.div>

                {/* Main Headline */}
                <motion.div style={{ opacity: opacityText, zIndex: 3, position: 'relative' }}>
                    {/* Grand Title Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '3rem 5rem',
                        }}
                    >
                        {/* Royal Crown Ornament */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            <svg width="60" height="30" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Crown base line */}
                                <motion.path
                                    d="M10 35 L70 35"
                                    stroke="url(#crownGradient)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                />
                                {/* Crown peaks */}
                                <motion.path
                                    d="M15 30 L25 20 L35 25 L40 12 L45 25 L55 20 L65 30"
                                    stroke="url(#crownGradient)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 1.2, duration: 1.2 }}
                                />
                                {/* Center jewel */}
                                <motion.circle
                                    cx="40"
                                    cy="12"
                                    r="3"
                                    fill="#d8b4fe"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    style={{ filter: 'drop-shadow(0 0 6px #c4b5fd)' }}
                                />
                                {/* Side jewels */}
                                <motion.circle
                                    cx="25"
                                    cy="20"
                                    r="2"
                                    fill="#e9d5ff"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2, duration: 0.4 }}
                                />
                                <motion.circle
                                    cx="55"
                                    cy="20"
                                    r="2"
                                    fill="#e9d5ff"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2.1, duration: 0.4 }}
                                />
                                <defs>
                                    <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(216, 180, 254, 0.3)" />
                                        <stop offset="50%" stopColor="#d8b4fe" />
                                        <stop offset="100%" stopColor="rgba(216, 180, 254, 0.3)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>

                        {/* Subtle Outer Glow Ring */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            transition={{ delay: 1.5, duration: 1.5 }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '110%',
                                height: '160%',
                                background: 'radial-gradient(ellipse, rgba(216, 180, 254, 0.2) 0%, transparent 55%)',
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />

                        {/* Main Title with Refined Styling */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                                fontFamily: '"Cinzel Decorative", "Cinzel", serif',
                                fontWeight: 700,
                                background: 'linear-gradient(180deg, #ffffff 0%, #f3e8ff 15%, #e9d5ff 30%, #d8b4fe 50%, #c4b5fd 70%, #a78bfa 85%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                backgroundSize: '100% 200%',
                                animation: 'shimmer 5s ease-in-out infinite',
                                lineHeight: 1,
                                margin: 0,
                                letterSpacing: '0.2em',
                                filter: 'drop-shadow(0 0 12px rgba(216, 180, 254, 0.6)) drop-shadow(0 0 30px rgba(167, 139, 250, 0.4)) drop-shadow(0 0 50px rgba(139, 92, 246, 0.2))',
                                position: 'relative',
                                zIndex: 2,
                                textAlign: 'center',
                            }}
                        >
                            LUNEX
                        </motion.h1>

                        {/* Premium Underline Signature */}
                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                marginTop: '1.5rem',
                            }}
                        >
                            {/* Left decorative line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '80px' }}
                                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                                style={{
                                    height: '1.5px',
                                    background: 'linear-gradient(90deg, transparent, #d8b4fe)',
                                    boxShadow: '0 0 8px rgba(216, 180, 254, 0.5)',
                                }}
                            />

                            {/* Center diamond */}
                            <motion.div
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: 1, rotate: 45 }}
                                transition={{ delay: 1.4, duration: 0.6, type: "spring" as const }}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    background: 'linear-gradient(135deg, #e9d5ff, #d8b4fe)',
                                    boxShadow: '0 0 12px #d8b4fe, 0 0 25px rgba(216, 180, 254, 0.6)',
                                }}
                            />

                            {/* Right decorative line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '80px' }}
                                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                                style={{
                                    height: '1.5px',
                                    background: 'linear-gradient(90deg, #d8b4fe, transparent)',
                                    boxShadow: '0 0 8px rgba(216, 180, 254, 0.5)',
                                }}
                            />
                        </motion.div>

                        {/* Floating Sparkles */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0]
                                }}
                                transition={{
                                    delay: 2.5 + (i * 0.4),
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 4 + (i * 0.5),
                                }}
                                style={{
                                    position: 'absolute',
                                    width: '5px',
                                    height: '5px',
                                    background: 'radial-gradient(circle, #fff 0%, #d8b4fe 60%, transparent 100%)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 8px #c4b5fd',
                                    top: `${20 + (i * 20)}%`,
                                    left: `${15 + (i * 22)}%`,
                                    pointerEvents: 'none',
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                            fontStyle: 'italic',
                            color: 'var(--accent-cream)',
                            fontWeight: 300,
                            marginTop: '1rem',
                            letterSpacing: '0.12em',
                            textShadow: '0 0 15px rgba(216, 180, 254, 0.3)',
                        }}
                    >
                        Architects of the Digital Age
                    </motion.h2>
                </motion.div>

                {/* Geometric Abstract Art (The Blueprint) */}
                <motion.div style={{ y: yBackend, position: 'absolute', opacity: 0.3, zIndex: -1 }}>
                    <svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle cx="100" cy="100" r="90" stroke="var(--accent-gold)" strokeWidth="0.5" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.circle cx="100" cy="100" r="60" stroke="var(--accent-gold)" strokeWidth="0.5" variants={pathVariants} initial="hidden" animate="visible" style={{ rotate: 45 }} />
                        <motion.rect x="70" y="70" width="60" height="60" stroke="var(--accent-cream)" strokeWidth="0.5" variants={pathVariants} initial="hidden" animate="visible" />
                        <motion.path d="M100 10 L100 190 M10 100 L190 100" stroke="var(--accent-purple)" strokeWidth="0.5" variants={pathVariants} initial="hidden" animate="visible" />
                    </svg>
                </motion.div>

                {/* Subtext / CTA */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--accent-dim)',
                        marginTop: '2rem',
                        lineHeight: 1.8
                    }}
                >
                    We fuse ancient storytelling with futuristic code to build websites that define legacies.
                    <br />
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', opacity: 0.8 }}>
                        Top-Rated Web Designer in Karaikudi
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    style={{
                        marginTop: '4rem', // Moved into flow to prevent overlap
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)' }}>EXPLORE</span>
                    <div style={{ width: '1px', height: '40px', background: 'var(--accent-gold)' }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default SmartHero;
