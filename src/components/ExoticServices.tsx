import { motion } from 'framer-motion';

// Placeholders for now, normally would be assets
import imgArchitecture from '../assets/service_architecture.png';
import imgUIUX from '../assets/service_uiux.png';
import imgStorytelling from '../assets/service_storytelling.png';
import imgAI from '../assets/service_ai.png';

const services = [
    {
        id: "01",
        category: "DESIGN",
        title: "Exotic UI/UX",
        desc: "Interfaces that feel rare and unknown. We craft visuals that captivate.",
        img: imgUIUX
    },
    {
        id: "02",
        category: "DEVELOPMENT",
        title: "Digital Architecture",
        desc: "Robust, scalable React branding websites built on solid foundations.",
        img: imgArchitecture
    },
    {
        id: "03",
        category: "BRANDING",
        title: "Visual Storytelling",
        desc: "Narratives woven into code. Your brand's mythos, digitally realized.",
        img: imgStorytelling
    },
    {
        id: "04",
        category: "INNOVATION",
        title: "AI Integration",
        desc: "Neural networks for user prediction and automated intelligence.",
        img: imgAI
    }
];

const ExoticServices = () => {
    return (
        <section id="craft" style={{
            minHeight: '100vh',
            background: 'var(--bg-deep)',
            padding: '5rem 5vw',
            position: 'relative'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-exotic"
                    style={{ fontSize: '1rem', color: 'var(--accent-purple-glow)' }}
                >
                    The Treasury
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '3rem',
                        color: 'var(--accent-cream)',
                        marginTop: '1rem'
                    }}
                >
                    Our Craft & Expertise
                </motion.h3>
            </div>

            {/* Grid of Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '450px',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                        whileHover={{ translateY: -10 }}
                    >
                        {/* Background Image Overlay (Subtle) */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${s.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.1,
                            transition: 'opacity 0.4s ease',
                            zIndex: 0,
                            filter: 'grayscale(100%) sepia(20%)'
                        }}
                            className="card-bg"
                        />

                        {/* Top: ID & Category */}
                        <div style={{ zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'rgba(216, 180, 254, 0.4)'
                            }}>
                                {s.id}
                            </span>
                            <span style={{
                                fontSize: '0.75rem',
                                letterSpacing: '0.2em',
                                color: 'var(--accent-neon)',
                                border: '1px solid rgba(168, 85, 247, 0.3)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '20px'
                            }}>
                                {s.category}
                            </span>
                        </div>

                        {/* Middle/Bottom: Content */}
                        <div style={{ zIndex: 1, marginTop: 'auto' }}>
                            <h4 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                color: 'var(--accent-cream)'
                            }}>
                                {s.title}
                            </h4>
                            <p style={{
                                color: 'var(--accent-dim)',
                                fontSize: '1rem',
                                lineHeight: 1.6
                            }}>
                                {s.desc}
                            </p>
                        </div>

                        {/* Hover Border Glow */}
                        <style>
                            {`
                                .glass-panel:hover .card-bg {
                                    opacity: 0.25;
                                }
                            `}
                        </style>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExoticServices;
