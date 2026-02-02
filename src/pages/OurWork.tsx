import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import imgPlaceholder from '../assets/service_uiux.png';

const projects = [
    {
        id: 1,
        title: "Aura Digital Services",
        description: "A premium digital service platform exhibiting modern aesthetics and seamless functionality.",
        link: "https://auradigitalservices.in",
        tags: ["Web Design", "Development", "Branding"],
        year: "2024",
        image: imgPlaceholder
    },
    {
        id: 2,
        title: "Ecoplast Interiors",
        description: "Elegant interior solutions showcased through a modern, visually stunning web presence.",
        link: "https://ecoplastinteriors.com",
        tags: ["Web Design", "Development"],
        year: "2024",
        image: imgPlaceholder
    }
];

const OurWork = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--bg-void)' }}>
            <div style={{ padding: '0 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="text-exotic" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Our <span className="text-gradient-gold">Masterpieces</span>
                    </h1>
                    <p style={{ color: 'var(--accent-cream)', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                        A curated collection of digital experiences crafted with precision and passion.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                overflow: 'hidden',
                                minHeight: '450px',
                                background: 'rgba(15, 8, 20, 0.6)'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Screenshot Area */}
                            <div style={{
                                height: '240px',
                                overflow: 'hidden',
                                position: 'relative',
                                borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                />
                                <div className="overlay" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(2, 1, 5, 0.2)', // Slight dim
                                    transition: 'background 0.3s'
                                }} />
                            </div>

                            {/* Content Area */}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1.5rem'
                                }}>
                                    <span style={{
                                        color: 'var(--accent-gold)',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.9rem',
                                        opacity: 0.8
                                    }}>{project.year}</span>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'var(--accent-dim)'
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <h2 style={{
                                    color: 'var(--accent-cream)',
                                    fontSize: '1.8rem',
                                    marginBottom: '1rem',
                                    fontFamily: 'var(--font-serif)',
                                    lineHeight: '1.2'
                                }}>{project.title}</h2>
                                <p style={{ color: 'var(--accent-dim)', lineHeight: '1.6', marginBottom: '2rem' }}>
                                    {project.description}
                                </p>

                                <div style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent-gold)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    Visit Site <span style={{ fontSize: '1.2rem' }}>→</span>
                                </div>
                            </div>

                            <style>{`
                                .glass-panel:hover img {
                                    transform: scale(1.05);
                                }
                                .glass-panel:hover .overlay {
                                    background: rgba(2, 1, 5, 0);
                                }
                            `}</style>
                        </motion.a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurWork
