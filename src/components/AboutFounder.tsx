import { motion } from 'framer-motion';
import founderImg from '../assets/founder.jpg';

const AboutFounder = () => {
    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, var(--bg-void) 0%, var(--bg-deep) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Top decorative line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)'
            }} />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
                {/* Left side: Picture */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 400px', position: 'relative' }}
                >
                    {/* Glow behind image */}
                    <div style={{
                        position: 'absolute',
                        inset: '-10px',
                        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(124, 58, 237, 0.2))',
                        borderRadius: '2rem',
                        filter: 'blur(30px)',
                        zIndex: 0
                    }} />
                    
                    {/* Image Container */}
                    <div className="founder-image-wrapper" style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        background: 'linear-gradient(180deg, rgba(20, 15, 30, 0.8), rgba(10, 5, 15, 0.9))',
                        borderRadius: '2rem',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }}>
                        {/* Premium Vignette/Gradient Overlay for depth */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, transparent 50%, rgba(5,4,10,0.95) 100%)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }} />
                        
                        <img 
                            src={founderImg} 
                            alt="Kaleeswaran Subramanian"
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s',
                                filter: 'contrast(1.05) brightness(0.9) saturate(0.9)',
                            }} 
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.filter = 'contrast(1.1) brightness(1) saturate(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'contrast(1.05) brightness(0.9) saturate(0.9)';
                            }}
                        />
                    </div>
                </motion.div>

                {/* Right side: Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <div style={{ marginBottom: '1rem' }}>
                        <span style={{ 
                            color: 'var(--accent-gold)', 
                            fontSize: '0.85rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.2em',
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>
                            Leadership
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            color: 'var(--accent-cream)',
                            lineHeight: 1.1,
                            marginBottom: '1rem'
                        }}>
                            About the <span className="text-gradient-gold">Founder</span>
                        </h2>
                        
                        <div style={{ 
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.3rem',
                                color: '#fff',
                                letterSpacing: '0.05em',
                                marginBottom: '0.2rem'
                            }}>
                                Kaleeswaran Subramanian
                            </h3>
                            <p style={{
                                color: 'var(--accent-gold)',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                            }}>
                                Founder, Lunex Web Studio
                            </p>
                        </div>
                    </div>

                    <div style={{ 
                        color: 'var(--accent-dim)', 
                        fontSize: '1.05rem', 
                        lineHeight: 1.7, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1rem' 
                    }}>
                        <p>
                            Kaleeswaran Subramanian is an AI & Machine Learning graduate with a refined vision for crafting digital experiences that go beyond the ordinary.
                        </p>
                        <p>
                            His journey was shaped in an unexpected place—alongside a renowned artisanal chocolate brand, where he witnessed the art of transforming simple products into immersive stories. That exposure redefined his perspective: true value lies not just in creation, but in <strong style={{ color: 'var(--accent-cream)', fontWeight: 600 }}>how it is felt and remembered</strong>.
                        </p>
                        <p>
                            Translating this philosophy into the digital realm, he founded <strong style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Lunex Web Studio</strong>—a creative space born from precision, passion, and purpose. What started as a freelance pursuit evolved into a studio dedicated to building brands that are not only seen, but deeply experienced.
                        </p>
                        <p>
                            With a balance of technology, aesthetics, and storytelling, Kaleeswaran crafts digital identities that carry emotion, clarity, and distinction.
                        </p>
                    </div>

                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1.5rem 2rem',
                        background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.08), transparent)',
                        borderLeft: '3px solid var(--accent-gold)',
                        borderRadius: '0 1rem 1rem 0',
                        position: 'relative'
                    }}>
                        {/* Quote icon watermark */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '10px',
                            opacity: 0.1,
                            color: 'var(--accent-gold)',
                            fontSize: '4rem',
                            fontFamily: 'var(--font-serif)',
                            lineHeight: 1
                        }}>
                            "
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            color: 'var(--accent-cream)',
                            fontStyle: 'italic',
                            lineHeight: 1.5,
                            position: 'relative',
                            zIndex: 1
                        }}>
                            Where vision is shaped into experience, and brands become unforgettable.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutFounder;
