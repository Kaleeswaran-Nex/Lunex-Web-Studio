import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_original.png';

const Navigation = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
                position: 'fixed',
                top: '40px', // Adjusted for TopContactBar
                left: 0,
                right: 0,
                padding: '0.8rem 3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: 'rgba(5, 4, 10, 0.6)', // More transparent but darker
                backdropFilter: 'blur(16px)',      // High quality frost
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        padding: '0.5rem',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {/* Logo with elegant glow ring */}
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {/* Outer glow ring */}
                        <div style={{
                            position: 'absolute',
                            width: '58px',
                            height: '58px',
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, transparent, rgba(216, 180, 254, 0.4), transparent, rgba(167, 139, 250, 0.3), transparent)',
                            animation: 'spin 8s linear infinite',
                        }} />
                        <div className="logo-container" style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid rgba(216, 180, 254, 0.5)',
                            boxShadow: '0 0 20px rgba(216, 180, 254, 0.25), inset 0 0 15px rgba(139, 92, 246, 0.1)',
                            background: 'linear-gradient(135deg, #0a0618 0%, #1a0f2e 100%)',
                            position: 'relative',
                            zIndex: 1,
                        }}>
                            <img
                                src={logo}
                                alt="Lunex Logo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>

                    {/* Brand Name - Elegant Typography */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}>
                        <span style={{
                            fontFamily: '"Cinzel", serif',
                            fontSize: '1.6rem',
                            letterSpacing: '0.15em',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 50%, #d8b4fe 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 10px rgba(216, 180, 254, 0.3))',
                        }}>
                            LUNEX
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.35em',
                            color: 'rgba(216, 180, 254, 0.6)',
                            textTransform: 'uppercase',
                            marginTop: '-2px',
                        }}>
                            Web Studio
                        </span>
                    </div>
                </Link>
            </div>

            <div className="links" style={{ display: 'flex', gap: '3rem' }}>
                {['Craft', 'Vision', 'Our Work', 'Connect'].map((item) => {
                    const isOurWork = item === 'Our Work';
                    const target = isOurWork ? '/our-work' : (isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`);

                    const commonStyle = {
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.2em',
                        opacity: 0.8,
                        transition: 'color 0.3s',
                        color: 'var(--accent-cream)'
                    };

                    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--accent-gold)';
                    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--accent-cream)';

                    if (isHome && !isOurWork) {
                        return (
                            <a
                                key={item}
                                href={target}
                                style={commonStyle}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={item}
                            to={target}
                            style={commonStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    )
}

export default Navigation;
