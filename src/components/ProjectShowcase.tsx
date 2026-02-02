import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "Aura Digital Services",
        link: "https://auradigitalservices.in"
    },
    {
        id: 2,
        title: "Ecoplast Interiors",
        link: "https://ecoplastinteriors.com"
    }
];

const ProjectShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section
            ref={containerRef}
            style={{
                padding: '6rem 0',
                background: 'var(--bg-deep)',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '4rem',
                padding: '0 2rem'
            }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-exotic"
                    style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}
                >
                    Our Portfolio
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)',
                        marginTop: '1rem'
                    }}
                >
                    Recent Masterpieces
                </motion.h2>
            </div>

            {/* Scrolling Project Cards */}
            <motion.div
                style={{
                    x,
                    display: 'flex',
                    gap: '2rem',
                    paddingLeft: '5vw',
                    paddingRight: '20vw'
                }}
            >
                {projects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            flex: '0 0 auto',
                            width: 'clamp(350px, 45vw, 550px)',
                            aspectRatio: '16/10',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative',
                            textDecoration: 'none',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        {/* Live Website Preview */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            background: 'var(--bg-void)'
                        }}>
                            <iframe
                                src={project.link}
                                title={project.title}
                                style={{
                                    width: '200%',
                                    height: '200%',
                                    border: 'none',
                                    transform: 'scale(0.5)',
                                    transformOrigin: 'top left',
                                    pointerEvents: 'none'
                                }}
                                loading="lazy"
                            />
                        </div>

                        {/* Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(2,1,5,0.95) 0%, rgba(2,1,5,0.4) 40%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '2rem',
                            transition: 'background 0.3s'
                        }} className="card-overlay">
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'var(--accent-cream)',
                                marginBottom: '0.5rem'
                            }}>{project.title}</h3>
                            <span style={{
                                color: 'var(--accent-gold)',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Visit Site <span>→</span>
                            </span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* View All Link */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{
                    textAlign: 'center',
                    marginTop: '4rem'
                }}
            >
                <Link
                    to="/our-work"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 2.5rem',
                        border: '1px solid var(--accent-gold)',
                        borderRadius: '4px',
                        color: 'var(--accent-gold)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.15em',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-gold)';
                        e.currentTarget.style.color = 'var(--bg-void)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--accent-gold)';
                    }}
                >
                    VIEW ALL WORK
                </Link>
            </motion.div>

            <style>{`
                .card-overlay:hover {
                    background: linear-gradient(to top, rgba(2,1,5,0.85) 0%, rgba(2,1,5,0.2) 50%, transparent 100%) !important;
                }
            `}</style>
        </section>
    );
};

export default ProjectShowcase;
