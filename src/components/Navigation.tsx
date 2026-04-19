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
        let timeoutId: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                setScrolled(window.scrollY > 50);
                timeoutId = undefined as any;
            }, 150); // Throttle to 150ms
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
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
        { name: 'HOME', targetId: '' },
        { name: '10X YOUR BRAND', targetId: '/10x-your-brand', isRoute: true },
        { name: 'ABOUT', targetId: '/about', isRoute: true },
        { name: 'SERVICES', targetId: 'services' },
        { name: 'CONTACT', targetId: 'connect' }
    ];

    const servicesList = [
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Billing/Customized Softwares', path: '/services/custom-software' },
        { name: 'Integration Services', path: '/services/integration' },
        { name: 'E-Commerce Development', path: '/services/ecommerce' },
    ];

    const mobileOverlay = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0,
                        width: '100vw', height: '100vh',
                        background: '#fdfbf7', zIndex: 9999,
                        display: 'flex', flexDirection: 'column',
                        padding: '1.2rem',
                        overflowY: 'auto',
                    }}
                >
                    {/* Header with Logo and Close */}
                    <div style={{ 
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        marginBottom: '2rem', paddingBottom: '1rem'
                    }}>
                        <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
                             <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #5a0c1a22' }}>
                                <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1rem', letterSpacing: '0.1em', fontWeight: 800, color: '#5a0c1a' }}>LUNEX</span>
                        </Link>
                        
                        <div onClick={toggleMenu} style={{ cursor: 'pointer', padding: '0.4rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5a0c1a" strokeWidth="1.5">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>

                    {/* Nav List */}
                    <div style={{ 
                        background: '#fff', 
                        borderRadius: '1.5rem', 
                        border: '1px solid rgba(90, 12, 26, 0.06)',
                        boxShadow: '0 10px 30px rgba(90, 12, 26, 0.04)',
                        overflow: 'hidden'
                    }}>
                        {navLinks.map((item, index) => {
                             const target = item.isRoute ? item.targetId : (isHome ? `#${item.targetId}` : `/#${item.targetId}`);
                             
                             if (item.name === 'SERVICES') {
                                return (
                                    <div key={item.name} style={{ borderBottom: index < navLinks.length - 1 ? '1px solid rgba(90, 12, 26, 0.05)' : 'none' }}>
                                        <div onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
                                            padding: '1.5rem 1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            cursor: 'pointer', transition: 'background 0.2s'
                                        }}>
                                            <span style={{ 
                                                fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#5a0c1a', 
                                                fontWeight: 500, letterSpacing: '-0.01em' 
                                            }}>{item.name}</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a0c1a" strokeWidth="1.2" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        
                                        <AnimatePresence>
                                            {mobileServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    style={{ overflow: 'hidden', background: 'rgba(90, 12, 26, 0.02)' }}
                                                >
                                                    {servicesList.map((service) => (
                                                        <Link key={service.name} to={service.path} onClick={() => setIsOpen(false)} style={{
                                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                            padding: '1.2rem 2.2rem', textDecoration: 'none',
                                                            borderBottom: '1px solid rgba(90, 12, 26, 0.03)'
                                                        }}>
                                                            <span style={{ color: '#5a0c1a99', fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>{service.name}</span>
                                                            <span style={{ color: '#5a0c1a44', fontSize: '1.2rem' }}>↗</span>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                             }

                             return (
                                <Link 
                                    key={item.name} 
                                    to={target} 
                                    onClick={() => setIsOpen(false)} 
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '1.5rem 1.8rem', textDecoration: 'none',
                                        borderBottom: index < navLinks.length - 1 ? '1px solid rgba(90, 12, 26, 0.05)' : 'none',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <span style={{ 
                                        fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#5a0c1a', 
                                        fontWeight: 500, letterSpacing: '-0.01em' 
                                    }}>{item.name}</span>
                                    <span style={{ color: '#5a0c1a55', fontSize: '1.6rem', fontWeight: 300 }}>↗</span>
                                </Link>
                             );
                        })}
                    </div>

                    {/* Mobile CTA */}
                    <div style={{ marginTop: '2rem' }}>
                        <a href="/#connect" onClick={() => setIsOpen(false)} style={{
                            display: 'block', padding: '1.2rem',
                            background: '#5a0c1a',
                            color: '#fff', textDecoration: 'none',
                            fontFamily: 'var(--font-heading)', fontSize: '0.9rem',
                            fontWeight: 700, letterSpacing: '0.15em',
                            borderRadius: '1rem', textAlign: 'center',
                            boxShadow: '0 8px 25px rgba(90, 12, 26, 0.15)'
                        }}>
                            GET A FREE QUOTE
                        </a>
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
                        href="/#connect"
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
