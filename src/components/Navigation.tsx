import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo_original.png';

const Navigation = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ['Craft', 'Vision', 'Our Work', 'Connect'];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
                position: 'fixed',
                top: '40px',
                left: 0,
                right: 0,
                padding: '0.8rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: 'rgba(5, 4, 10, 0.8)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
            }}
            className="nav-header"
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <div className="logo-wrapper" style={{ position: 'relative', width: '42px', height: '42px' }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-3px',
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, transparent, rgba(216, 180, 254, 0.4), transparent)',
                            animation: 'spin 8s linear infinite',
                        }} />
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '1px solid rgba(216, 180, 254, 0.5)',
                            position: 'relative',
                            zIndex: 1,
                        }}>
                            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: '"Cinzel", serif',
                            fontSize: '1.2rem',
                            letterSpacing: '0.1em',
                            fontWeight: 700,
                            color: '#fff'
                        }}>LUNEX</span>
                        <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)' }}>STUDIO</span>
                    </div>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="desktop-links" style={{ display: 'flex', gap: '2rem' }}>
                {navLinks.map((item) => {
                    const isOurWork = item === 'Our Work';
                    const target = isOurWork ? '/our-work' : (isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);
                    return (
                        <Link
                            key={item}
                            to={target}
                            style={{
                                textDecoration: 'none',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--accent-cream)',
                                opacity: 0.8
                            }}
                        >
                            {item}
                        </Link>
                    );
                })}
            </div>

            {/* Hamburger Button */}
            <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', padding: '0.5rem' }}>
                <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '6px', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
                <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '6px', opacity: isOpen ? 0 : 1 }} />
                <div style={{ width: '24px', height: '2px', background: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            top: '80px', // Adjusted to not cover header
                            background: 'rgba(5, 4, 10, 0.98)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingTop: '4rem',
                            gap: '2.5rem'
                        }}
                    >
                        {navLinks.map((item) => {
                            const isOurWork = item === 'Our Work';
                            const target = isOurWork ? '/our-work' : (isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);
                            return (
                                <Link
                                    key={item}
                                    to={target}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-heading)',
                                        color: '#fff',
                                        letterSpacing: '0.2em'
                                    }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>
                {`
                    .mobile-toggle { display: none; }
                    @media (max-width: 900px) {
                        .desktop-links { display: none !important; }
                        .mobile-toggle { display: block; }
                        .nav-header { padding: 0.8rem 1.5rem !important; }
                    }
                `}
            </style>
        </motion.nav>
    );
};

export default Navigation;
