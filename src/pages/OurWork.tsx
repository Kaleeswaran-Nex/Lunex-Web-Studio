import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import imgAura from '../assets/aura_site.png';
import imgEcoplast from '../assets/ecoplast.png';

const projects = [
    {
        id: 1,
        title: "Aura Digital Services",
        description: "A premium digital service platform exhibiting modern luxury and high-performance digital solutions.",
        link: "https://auradigitalservices.in",
        tags: ["Branding", "UI/UX", "Development"],
        year: "2024",
        image: imgAura
    },
    {
        id: 2,
        title: "Ecoplast Interiors",
        description: "Sophisticated interior solutions showcased through a stunning visual portfolio and interactive design experience.",
        link: "https://ecoplastinteriors.com",
        tags: ["Portfolio", "Architecture", "Development"],
        year: "2024",
        image: imgEcoplast
    }
];

const OurWork = () => {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--bg-void)' }}>
            <div style={{ padding: '0 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="text-exotic" style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1rem', overflowWrap: 'break-word', wordBreak: 'break-word', padding: '0 0.5rem' }}>
                        Our <span className="text-gradient-gold">Masterpieces</span>
                    </h1>
                    <p style={{ color: 'var(--accent-cream)', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                        A curated collection of digital experiences crafted with precision and passion.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '3rem' }}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="project-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                overflow: 'hidden',
                                minHeight: '500px',
                                background: 'rgba(15, 8, 20, 0.4)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative'
                            }}
                            whileHover={{ y: -15, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                        >
                            {/* Screenshot Area */}
                            <div style={{
                                height: '280px',
                                overflow: 'hidden',
                                position: 'relative',
                                borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
                            }}>
                                <div className="image-container" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        initial={{ filter: 'grayscale(1) brightness(0.5)' }}
                                        whileHover={{ 
                                            scale: 1.1, 
                                            filter: 'grayscale(0) brightness(1)',
                                            y: -20 // Subtle scroll reveal
                                        }}
                                        transition={{ duration: 0.6 }}
                                        style={{
                                            width: '100%',
                                            height: '120%', // Slightly taller for scroll effect
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <div className="scanline" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(transparent 50%, rgba(212, 175, 55, 0.03) 50%)',
                                    backgroundSize: '100% 4px',
                                    pointerEvents: 'none',
                                    opacity: 0.2
                                }} />
                                <div className="overlay" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(15, 8, 20, 0.8))',
                                    transition: 'opacity 0.3s'
                                }} />
                            </div>

                            {/* Content Area */}
                            <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1.5rem'
                                }}>
                                    <span style={{
                                        color: 'var(--accent-gold)',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.8rem',
                                        letterSpacing: '2px',
                                        opacity: 0.6
                                    }}>{project.year}</span>
                                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.6rem',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '50px',
                                                background: 'rgba(212, 175, 55, 0.05)',
                                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                                color: 'var(--accent-gold)'
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <h2 style={{
                                    color: 'var(--accent-cream)',
                                    fontSize: '2rem',
                                    marginBottom: '1.2rem',
                                    fontFamily: 'var(--font-serif)',
                                    lineHeight: '1.1'
                                }}>{project.title}</h2>
                                <p style={{ color: 'var(--accent-dim)', lineHeight: '1.7', marginBottom: '2.5rem', fontSize: '1rem' }}>
                                    {project.description}
                                </p>

                                <div style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    color: 'var(--accent-gold)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '1px'
                                }}>
                                    EXPLORE PROJECT <span className="arrow" style={{ transition: 'transform 0.3s' }}>→</span>
                                </div>
                            </div>

                            <style>{`
                                .project-card:hover {
                                    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8), 
                                                0 0 40px -10px rgba(212, 175, 55, 0.1);
                                }
                                .project-card:hover .arrow {
                                    transform: translateX(5px);
                                }
                                .project-card:hover .overlay {
                                    opacity: 0.4;
                                }
                            `}</style>
                        </motion.a>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default OurWork
