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
            padding: '6rem 1rem',
            background: 'var(--bg-void)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-exotic"
                    style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.4em' }}
                >
                    OUR PORTFOLIO
                </motion.span>
                <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    color: 'var(--accent-cream)',
                    marginTop: '1rem',
                    fontWeight: 700
                }}>
                    Recent Masterpieces
                </h2>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
                {/* Navigation Arrows - Hidden on small mobile or moved inside */}
                <div className="nav-arrows" style={{ position: 'absolute', top: '50%', width: '100%', zIndex: 20, pointerEvents: 'none', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
                    <button
                        onClick={prevProject}
                        style={{ ...navButtonStyle('left'), position: 'static', pointerEvents: 'auto' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button
                        onClick={nextProject}
                        style={{ ...navButtonStyle('right'), position: 'static', pointerEvents: 'auto' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{
                            background: '#0a0a0c',
                            borderRadius: '2rem',
                            padding: 'clamp(1rem, 5vw, 4rem)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
                            margin: '0 1rem'
                        }}
                    >
                        {/* Left Content */}
                        <div style={{ paddingRight: '0' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    fontWeight: 800,
                                    color: 'white',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {current.logo}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                                    color: 'white',
                                    margin: 0
                                }}>{current.title}</h3>
                            </div>

                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                                lineHeight: 1.6,
                                marginBottom: '2rem',
                                maxWidth: '500px'
                            }}>
                                {current.description}
                            </p>

                            <motion.a
                                href={current.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, backgroundColor: '#22c55e' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '1rem 2rem',
                                    background: '#16a34a',
                                    color: 'white',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    gap: '0.8rem',
                                    boxShadow: '0 20px 40px rgba(22, 163, 74, 0.3)',
                                    width: 'fit-content'
                                }}
                            >
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></span>
                                VIEW PROJECT
                            </motion.a>
                        </div>

                        {/* Right Mockup */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                background: '#1e1e1e',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                            }}>
                                <div style={{
                                    height: '30px',
                                    background: '#2d2d2d',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 0.8rem',
                                    gap: '0.3rem'
                                }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                                <div style={{ height: 'clamp(250px, 40vw, 400px)', overflow: 'hidden' }}>
                                    <img
                                        src={current.image}
                                        alt={current.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem'
                }}>
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                                width: i === currentIndex ? '40px' : '8px',
                                height: '5px',
                                borderRadius: '3px',
                                background: i === currentIndex ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 1300px) {
                        .nav-arrows { 
                            position: static !important; 
                            transform: none !important;
                            justify-content: center !important;
                            gap: 2rem !important;
                            margin-top: 1rem !important;
                            margin-bottom: -1rem !important;
                        }
                    }
                `}
            </style>

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
