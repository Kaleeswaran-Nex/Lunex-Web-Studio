import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, var(--bg-void) 0%, #030014 100%)',
            padding: '4rem 2rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(251, 191, 36, 0.1)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            {/* Brand Name */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '2rem' }}
            >
                <span style={{
                    fontFamily: '"Cinzel Decorative", "Cinzel", serif',
                    fontSize: '2.5rem',
                    background: 'linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.2em',
                    fontWeight: 700,
                    display: 'block'
                }}>
                    LUNEX
                </span>
                <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-dim)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase'
                }}>
                    Web Studio
                </span>
            </motion.div>

            {/* Links */}
            <div style={{
                display: 'flex',
                gap: '2.5rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.15em',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
            }}>
                <a href="#" style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fbbf24';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    TERMS
                </a>
                <a href="#" style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fbbf24';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    PRIVACY
                </a>
                <a href="https://www.instagram.com/direct/t/lunexwebstudio" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#7c3aed';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    INSTAGRAM
                </a>
                <a href="https://wa.me/916381437668?text=Hello%20Lunex%20Web%20Studio%2C%20I%20am%20interested%20in%20your%20services.%20Let%20me%20know%20more%20details." target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#25D366';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(37, 211, 102, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    WHATSAPP
                </a>
                <a href="https://www.linkedin.com/in/lunex-web-studio-4272573aa" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#7c3aed';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    LINKEDIN
                </a>
                <a href="mailto:lunexwebstudio@gmail.com"
                    style={{ color: 'var(--accent-dim)', textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fbbf24';
                        e.currentTarget.style.textShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent-dim)';
                        e.currentTarget.style.textShadow = 'none';
                    }}>
                    EMAIL
                </a>
            </div>

            {/* Divider */}
            <div style={{
                width: '200px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)',
                margin: '0 auto 1.5rem'
            }} />

            {/* Copyright */}
            <div style={{
                color: 'rgba(255, 255, 255, 0.25)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.1em'
            }}>
                © LUNEX WEB STUDIO. CRAFTED WITH ✦ PASSION
            </div>
        </footer>
    );
};

export default Footer;
