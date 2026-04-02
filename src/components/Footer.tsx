import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'linear-gradient(180deg, var(--bg-void) 0%, #020010 100%)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem) 1.5rem',
            borderTop: '1px solid rgba(251, 191, 36, 0.08)',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '300px',
                background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Top Row: Brand + Links */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
                    gap: '2.5rem', marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div>
                        <span style={{
                            fontFamily: '"Outfit", sans-serif',
                            fontSize: '1.8rem',
                            background: 'linear-gradient(135deg, #fcd34d, #fbbf24, #f59e0b)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            letterSpacing: '0.15em', fontWeight: 700, display: 'block',
                            marginBottom: '0.3rem',
                        }}>LUNEX</span>
                        <span style={{
                            fontSize: '0.65rem', color: 'var(--accent-dim)',
                            letterSpacing: '0.3em', textTransform: 'uppercase',
                            display: 'block', marginBottom: '1rem',
                        }}>WEB STUDIO</span>
                        <p style={{ color: 'var(--accent-dim)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px' }}>
                            Premium web design & development studio serving ambitious businesses worldwide.
                            Based in India, delivering globally.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>SERVICES</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {['UI/UX Design', 'Web Development', 'E-Commerce', 'Brand Identity', 'SaaS & Web Apps', 'Maintenance'].map(s => (
                                <a key={s} href="#craft" style={{ color: 'var(--accent-dim)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-dim)'}
                                >{s}</a>
                            ))}
                        </div>
                    </div>

                    {/* Serving */}
                    <div>
                        <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>SERVING</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {['🇺🇸 United States', '🇬🇧 United Kingdom', '🇦🇪 UAE', '🇦🇺 Australia', '🇮🇳 India', '🌍 & More'].map(s => (
                                <span key={s} style={{ color: 'var(--accent-dim)', fontSize: '0.85rem' }}>{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>CONNECT</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <a href="mailto:lunexwebstudio@gmail.com" style={{ color: 'var(--accent-dim)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-dim)'}
                            >📧 lunexwebstudio@gmail.com</a>
                            <a href="tel:+916381437668" style={{ color: 'var(--accent-dim)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-dim)'}
                            >📱 +91 63814 37668</a>
                            <a href="https://wa.me/916381437668" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#25D366'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-dim)'}
                            >💬 WhatsApp</a>
                        </div>

                        {/* Socials */}
                        <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
                            {[
                                { href: 'https://www.instagram.com/lunexwebstudio', label: 'IG' },
                                { href: 'https://www.linkedin.com/in/lunex-web-studio-4272573aa', label: 'IN' },
                            ].map(s => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                                    style={{
                                        width: '36px', height: '36px', borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--accent-dim)', textDecoration: 'none',
                                        fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    {s.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px', marginBottom: '1.5rem',
                    background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.2), transparent)',
                }} />

                {/* Bottom */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: '0.5rem',
                }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        © {currentYear} Lunex Web Studio. Crafted with ✦ passion.
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>
                        Based in India · Serving the World 🌍
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
