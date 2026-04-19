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
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

    const navLinks = [
        { name: '10X YOUR BRAND', targetId: 'pricing' },
        { name: 'HOME', targetId: '' },
        { name: 'ABOUT', targetId: '/about', isRoute: true },
        { name: 'SERVICES', targetId: 'services' },
        { name: 'CONTACT', targetId: 'connect' }
    ];

    const servicesList = [
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Billing/Customized Softwares', path: '/services/custom-software' },
        { name: 'CRM Services', path: '/services/crm' },
        { name: 'Integration Services', path: '/services/integration' },
        { name: 'E-Commerce Development', path: '/services/ecommerce' },
    ];

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
                        overflowY: 'auto',
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
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '320px', marginTop: '100px', paddingBottom: '100px' }}>
                        {navLinks.map((item, index) => {
                            if (item.name === 'SERVICES') {
                                return (
                                    <motion.div key={item.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + index * 0.08, duration: 0.35 }}
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        <div onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
                                            fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#fff',
                                            letterSpacing: '0.25em', textTransform: 'uppercase',
                                            padding: '1.25rem 2rem', borderBottom: '1px solid rgba(251, 191, 36, 0.1)',
                                            cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem'
                                        }}>
                                            {item.name}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        <AnimatePresence>
                                            {mobileServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    style={{ overflow: 'hidden', background: 'rgba(255, 255, 255, 0.02)' }}
                                                >
                                                    {servicesList.map((service) => (
                                                        <Link key={service.name} to={service.path} onClick={() => setIsOpen(false)} style={{
                                                            display: 'block', padding: '0.8rem 1rem', textDecoration: 'none',
                                                            color: 'var(--text-secondary)', fontSize: '0.9rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                                                        }}>
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            }

                            const target = item.isRoute ? item.targetId : (isHome ? `#${item.targetId}` : `/#${item.targetId}`);
                            return (
                                <motion.div key={item.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
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
                                        {item.name}
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
                    <div style={{ paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.5), transparent)' }} />
                        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body)' }}>WEB STUDIO</span>
                    </div>
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
                        if (item.name === 'SERVICES') {
                            return (
                                <div key={item.name} className="nav-dropdown-container">
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '0.25rem',
                                        fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                                        color: 'var(--accent-cream)', opacity: 0.8, cursor: 'pointer',
                                    }} className="nav-dropdown-trigger">
                                        {item.name}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                    <div className="nav-dropdown-menu">
                                        <div className="nav-dropdown-inner">
                                            {servicesList.map((service) => (
                                                <Link key={service.name} to={service.path} className="nav-dropdown-item">
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        const target = item.isRoute ? item.targetId : (isHome ? `#${item.targetId}` : `/#${item.targetId}`);
                        return (
                            <Link key={item.name} to={target} className="nav-link-item" style={{
                                textDecoration: 'none', fontSize: '0.75rem',
                                textTransform: 'uppercase', letterSpacing: '0.15em',
                                color: 'var(--accent-cream)', opacity: 0.8,
                                transition: 'opacity 0.3s',
                            }}>
                                {item.name}
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
                    
                    .nav-dropdown-container {
                        position: relative;
                    }
                    .nav-dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        transform: translateX(-50%) translateY(15px);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        padding-top: 1.5rem;
                        z-index: 1000;
                    }
                    .nav-dropdown-inner {
                        background: rgba(10, 6, 24, 0.95);
                        backdrop-filter: blur(16px);
                        border: 1px solid rgba(251, 191, 36, 0.15);
                        border-radius: 12px;
                        padding: 0.75rem;
                        min-width: 260px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(124, 58, 237, 0.1);
                    }
                    .nav-dropdown-container:hover .nav-dropdown-menu {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(-50%) translateY(0);
                    }
                    .nav-dropdown-trigger {
                        transition: all 0.3s;
                    }
                    .nav-dropdown-container:hover .nav-dropdown-trigger {
                        opacity: 1 !important;
                        color: var(--accent-gold) !important;
                    }
                    .nav-dropdown-container:hover .nav-dropdown-trigger svg {
                        transform: rotate(180deg);
                    }
                    .nav-link-item:hover {
                        opacity: 1 !important;
                        color: var(--accent-gold) !important;
                    }
                    .nav-dropdown-item {
                        color: var(--accent-cream);
                        text-decoration: none;
                        padding: 0.75rem 1rem;
                        font-family: var(--font-body);
                        font-size: 0.85rem;
                        border-radius: 8px;
                        transition: all 0.2s ease;
                        display: block;
                    }
                    .nav-dropdown-item:hover {
                        background: rgba(255, 255, 255, 0.05);
                        color: var(--accent-gold);
                        padding-left: 1.25rem;
                    }

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
