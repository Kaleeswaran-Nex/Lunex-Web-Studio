import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logo from '../assets/logo_original.png';

const Navigation = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = ['Craft', 'Vision', 'Our Work', 'Connect'];

    const mobileOverlay = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        width: '100vw', height: '100vh',
                        background: '#05040a', zIndex: 9999,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    {/* Close */}
                    <div onClick={toggleMenu} style={{
                        position: 'absolute', top: '1.2rem', right: '1.5rem',
                        cursor: 'pointer', zIndex: 10001, padding: '0.5rem',
                    }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>

                    {/* Logo */}
                    <div style={{ position: 'absolute', top: '1rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(216, 180, 254, 0.5)' }}>
                            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1rem', letterSpacing: '0.1em', fontWeight: 800, color: '#fff' }}>LUNEX</span>
                            <span style={{ fontSize: '0.45rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)' }}>STUDIO</span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '320px' }}>
                        {navLinks.map((item, index) => {
                            const isOurWork = item === 'Our Work';
                            const target = isOurWork ? '/our-work' : (isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);
                            return (
                                <motion.div key={item} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + index * 0.08, duration: 0.35 }}
                                    style={{ width: '100%', textAlign: 'center' }}
                                >
                                    <Link to={target} onClick={() => setIsOpen(false)} style={{
                                        textDecoration: 'none', fontSize: '1.4rem',
                                        fontFamily: 'var(--font-heading)', color: '#fff',
                                        letterSpacing: '0.25em', textTransform: 'uppercase',
                                        display: 'block', padding: '1.25rem 2rem',
                                        borderBottom: index < navLinks.length - 1 ? '1px solid rgba(251, 191, 36, 0.1)' : 'none',
                                    }}>
                                        {item}
                                    </Link>
                                </motion.div>
                            );
                        })}

                        {/* Mobile CTA */}
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.35 }}
                            style={{ width: '100%', textAlign: 'center', marginTop: '1.5rem', padding: '0 2rem' }}
                        >
                            <a href="#connect" onClick={() => setIsOpen(false)} style={{
                                display: 'block', padding: '1rem',
                                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                color: '#030014', textDecoration: 'none',
                                fontFamily: 'var(--font-heading)', fontSize: '0.9rem',
                                fontWeight: 700, letterSpacing: '0.1em',
                                borderRadius: '6px', textAlign: 'center',
                            }}>
                                GET FREE QUOTE
                            </a>
                        </motion.div>
                    </div>

                    {/* Footer accent */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        style={{ position: 'absolute', bottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.5), transparent)' }} />
                        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body)' }}>WEB STUDIO</span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: 'fixed', top: '40px', left: 0, right: 0,
                    padding: '0.8rem 1rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    zIndex: 100,
                    background: scrolled ? 'rgba(5, 4, 10, 0.95)' : 'rgba(5, 4, 10, 0.8)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                    transition: 'background 0.3s',
                }}
                className="nav-header"
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                        <div className="logo-wrapper" style={{ position: 'relative', width: '42px', height: '42px' }}>
                            <div style={{
                                position: 'absolute', inset: '-3px', borderRadius: '50%',
                                background: 'conic-gradient(from 0deg, transparent, rgba(216, 180, 254, 0.4), transparent)',
                                animation: 'spin 8s linear infinite',
                            }} />
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(216, 180, 254, 0.5)', position: 'relative', zIndex: 1 }}>
                                <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em', fontWeight: 800, color: '#fff' }}>LUNEX</span>
                            <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)' }}>STUDIO</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((item) => {
                        const isOurWork = item === 'Our Work';
                        const target = isOurWork ? '/our-work' : (isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);
                        return (
                            <Link key={item} to={target} style={{
                                textDecoration: 'none', fontSize: '0.75rem',
                                textTransform: 'uppercase', letterSpacing: '0.15em',
                                color: 'var(--accent-cream)', opacity: 0.8,
                                transition: 'opacity 0.3s',
                            }}>
                                {item}
                            </Link>
                        );
                    })}
                    {/* Desktop CTA Button */}
                    <motion.a
                        href="#connect"
                        whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
                        whileTap={{ scale: 0.97 }}
                        className="nav-cta-btn"
                        style={{
                            padding: '0.55rem 1.3rem',
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            color: '#030014', textDecoration: 'none',
                            fontFamily: 'var(--font-heading)', fontSize: '0.7rem',
                            fontWeight: 700, letterSpacing: '0.1em',
                            borderRadius: '4px',
                            boxShadow: '0 2px 15px rgba(251, 191, 36, 0.25)',
                        }}
                    >
                        GET QUOTE
                    </motion.a>
                </div>

                {/* Hamburger */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', padding: '0.5rem', zIndex: 10002 }}>
                    <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '6px', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
                    <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '6px', opacity: isOpen ? 0 : 1 }} />
                    <div style={{ width: '24px', height: '2px', background: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
                </div>

                <style>{`
                    .mobile-toggle { display: none; }
                    @media (max-width: 900px) {
                        .desktop-links { display: none !important; }
                        .mobile-toggle { display: block; }
                        .nav-header { padding: 0.8rem 1.5rem !important; }
                    }
                `}</style>
            </motion.nav>
            {createPortal(mobileOverlay, document.body)}
        </>
    );
};

export default Navigation;
