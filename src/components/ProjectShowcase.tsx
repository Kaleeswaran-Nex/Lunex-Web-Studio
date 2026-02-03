import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import images
import aura1 from '../assets/aura_1.png';
import aura2 from '../assets/aura_2.png';
import ecoplast1 from '../assets/ecoplast_1.png';
import ecoplast2 from '../assets/ecoplast_2.png';
import serviceAi from '../assets/service_ai.png';
import serviceArchitecture from '../assets/service_architecture.png';

const projects = [
    {
        id: 1,
        title: "Aura Digital",
        subtitle: "TRANSFORMING BRAND IDENTITY",
        logo: "A",
        description: "We developed a robust digital ecosystem for Aura, a premium agency targeting high-growth businesses. The platform is designed to handle complex interactions while offering a sleek and user-friendly agency experience.",
        image: aura2,
        link: "https://auradigitalservices.in",
        color: "#fbbf24"
    },
    {
        id: 2,
        title: "Ecoplast",
        subtitle: "CRAFTING TIMELESS SPACES",
        logo: "EP",
        description: "A high-end interior showcase for Ecoplast Interiors. We focused on visual storytelling through high-resolution galleries and seamless navigation, reflecting the premium quality of their physical interior works.",
        image: ecoplast1,
        link: "https://ecoplastinteriors.com",
        color: "#84cc16"
    },
    {
        id: 3,
        title: "Solethreads",
        subtitle: "MODERN RETAIL FLOW",
        logo: "S",
        description: "A robust e-commerce platform for a modern shoe brand. We implemented a seamless checkout flow and high-performance product discovery to drive conversions and young audience engagement.",
        image: aura1,
        link: "https://solethreads.com",
        color: "#3b82f6"
    },
    {
        id: 4,
        title: "Modern Luxe",
        subtitle: "KITCHEN ARCHITECTURE",
        logo: "ML",
        description: "A specialized interior showcase focusing on minimalist and high-tech kitchen designs. The interface mirrors the precision and elegance of the physical architecture itself.",
        image: ecoplast2,
        link: "https://ecoplastinteriors.com/kitchens",
        color: "#ef4444"
    },
    {
        id: 5,
        title: "Vanguard UI",
        subtitle: "NEXT-GEN DASHBOARD",
        logo: "V",
        description: "An advanced SaaS dashboard design showcasing complex data visualization with a minimalist, high-productivity aesthetic. Built for speed and absolute clarity.",
        image: serviceAi,
        link: "https://vanguard-digital.com",
        color: "#7c3aed"
    },
    {
        id: 6,
        title: "Infinite Portal",
        subtitle: "DIGITAL ARCHITECTURE",
        logo: "IP",
        description: "A comprehensive client portal designed for large-scale enterprise management. we combined security with an intuitive exotic interface to redefine professional workflows.",
        image: serviceArchitecture,
        link: "https://infinite-arch.com",
        color: "#22d3ee"
    }
];

const ProjectShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const current = projects[currentIndex];

    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'var(--bg-void)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-exotic"
                    style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', letterSpacing: '0.4em' }}
                >
                    OUR PORTFOLIO
                </motion.span>
                <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: 'var(--accent-cream)',
                    marginTop: '1rem',
                    fontWeight: 700
                }}>
                    Recent Masterpieces
                </h2>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative' }}>
                {/* Navigation Arrows */}
                <button
                    onClick={prevProject}
                    style={navButtonStyle('left')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button
                    onClick={nextProject}
                    style={navButtonStyle('right')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{
                            background: '#0a0a0c', // Dark box like reference
                            borderRadius: '3rem',
                            padding: '4rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.6)'
                        }}
                    >
                        {/* Left Content */}
                        <div style={{ paddingRight: '2rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                marginBottom: '2.5rem'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '15px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'white',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {current.logo}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.8rem',
                                    color: 'white',
                                    margin: 0
                                }}>{current.title}</h3>
                            </div>

                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '1.2rem',
                                lineHeight: 1.6,
                                marginBottom: '3rem',
                                maxWidth: '500px'
                            }}>
                                {current.description}
                            </p>

                            <motion.a
                                href={current.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, backgroundColor: '#22c55e' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '1.2rem 2.5rem',
                                    background: '#16a34a', // Bright green from reference
                                    color: 'white',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    gap: '1rem',
                                    boxShadow: '0 20px 40px rgba(22, 163, 74, 0.3)'
                                }}
                            >
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'white' }}></span>
                                LET'S DISCUSS YOUR PROJECT
                            </motion.a>
                        </div>

                        {/* Right Mockup */}
                        <div style={{ position: 'relative' }}>
                            {/* Browser Mockup Frame */}
                            <div style={{
                                background: '#1e1e1e',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                            }}>
                                {/* Browser Toolbar */}
                                <div style={{
                                    height: '40px',
                                    background: '#2d2d2d',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 1rem',
                                    gap: '0.4rem'
                                }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    <div style={{
                                        flex: 1,
                                        height: '24px',
                                        background: 'rgba(0,0,0,0.2)',
                                        borderRadius: '4px',
                                        margin: '0 1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 0.8rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        fontSize: '0.8rem'
                                    }}>
                                        {current.link.replace('https://', '')}
                                    </div>
                                </div>
                                {/* Website Screenshot */}
                                <div style={{ height: '450px', overflow: 'hidden' }}>
                                    <img
                                        src={current.image}
                                        alt={current.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            {/* Decorative shadow element */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '5%',
                                width: '90%',
                                height: '20px',
                                background: 'rgba(0,0,0,0.5)',
                                filter: 'blur(15px)',
                                borderRadius: '50%',
                                zIndex: -1
                            }}></div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '3rem'
                }}>
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                                width: i === currentIndex ? '60px' : '12px',
                                height: '6px',
                                borderRadius: '3px',
                                background: i === currentIndex ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* View All */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <Link to="/our-work" style={{
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    letterSpacing: '0.2em',
                    fontSize: '0.9rem',
                    fontWeight: 600
                }}>
                    VIEW ALL MASTERPIECES →
                </Link>
            </div>
        </section>
    );
};

const navButtonStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    [side]: '-2.5rem',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease'
});

export default ProjectShowcase;
