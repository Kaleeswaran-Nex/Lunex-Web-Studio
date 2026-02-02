import { motion } from 'framer-motion';

const TopContactBar = () => {
    // Icons (SVG paths for lightweight usage)
    const iconMail = <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />;
    const iconMailPoly = <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2" />;

    const iconPhone = <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeWidth="2" />;

    // Simple social placeholders using generic shapes or text if standard icons needed. 
    // For "exotic" feel, we can stick to elegant SVG strokes.
    const iconInsta = <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />;
    const iconInstaCircle = <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />;
    const iconInstaDot = <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />;

    const socialLinkStyle = {
        color: 'var(--accent-cream)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8rem',
        transition: 'color 0.3s',
        letterSpacing: '0.05em'
    };

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '40px',
                background: '#0a0510', // Very dark purple/black
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 3rem',
                zIndex: 101, // Above Navigation
                fontFamily: 'var(--font-body)'
            }}
        >
            {/* Left: Contact Info */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="mailto:lunexwebstudio@gmail.com" style={socialLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cream)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--accent-gold)' }}>
                        {iconMail} {iconMailPoly}
                    </svg>
                    lunexwebstudio@gmail.com
                </a>

                <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }}></div>

                <a href="tel:+916381437668" style={socialLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cream)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--accent-gold)' }}>
                        {iconPhone}
                    </svg>
                    +91 63814 37668
                </a>
            </div>

            {/* Right: Socials */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <a href="https://wa.me/916381437668?text=Hello%20Lunex%20Web%20Studio%2C%20I%20am%20interested%20in%20your%20services.%20Let%20me%20know%20more%20details." target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cream)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--accent-gold)' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.66 0-3.203-.508-4.484-1.375l-3.016.898.898-3.016A7.953 7.953 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    WhatsApp
                </a>

                <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }}></div>

                <a href="https://www.instagram.com/lunexwebstudio?igsh=MXZ0dmg0cG1jcHJrMQ==" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cream)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--accent-gold)' }}>
                        {iconInsta} {iconInstaCircle} {iconInstaDot}
                    </svg>
                    Instagram
                </a>

                <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }}></div>

                <a href="https://www.linkedin.com/in/lunex-web-studio-4272573aa" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cream)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: 'var(--accent-gold)' }}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <rect x="2" y="9" width="4" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="4" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    LinkedIn
                </a>
            </div>
        </motion.div >
    );
};

export default TopContactBar;
