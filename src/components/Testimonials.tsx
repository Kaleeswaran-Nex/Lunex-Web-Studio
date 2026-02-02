import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        company: "Aura Digital Services",
        text: "LUNEX transformed our vision into a stunning digital reality. Their attention to detail and creative approach exceeded our expectations.",
        rating: 5
    },
    {
        id: 2,
        name: "Priya Sharma",
        company: "Ecoplast Interiors",
        text: "Working with LUNEX was an absolute pleasure. They understood our brand perfectly and delivered a website that truly represents who we are.",
        rating: 5
    },
    {
        id: 3,
        name: "Anand Verma",
        company: "Tech Solutions",
        text: "The team's expertise in creating immersive web experiences is unmatched. Our conversion rates increased by 40% after the redesign.",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section style={{
            padding: '6rem 2rem',
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-void) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="text-exotic" style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
                        Testimonials
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)',
                        marginTop: '1rem'
                    }}>
                        What Our Clients Say
                    </h2>
                </motion.div>

                {/* Main Testimonial Card */}
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel"
                    style={{
                        padding: '3rem',
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}
                >
                    {/* Quote Icon */}
                    <div style={{
                        fontSize: '4rem',
                        color: 'var(--accent-gold)',
                        opacity: 0.3,
                        lineHeight: 1,
                        marginBottom: '1rem'
                    }}>
                        "
                    </div>

                    <p style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: 'var(--accent-cream)',
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        marginBottom: '2rem'
                    }}>
                        {testimonials[activeIndex].text}
                    </p>

                    {/* Stars */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <span key={i} style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', margin: '0 0.2rem' }}>★</span>
                        ))}
                    </div>

                    <h4 style={{
                        color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem'
                    }}>
                        {testimonials[activeIndex].name}
                    </h4>
                    <span style={{ color: 'var(--accent-dim)', fontSize: '0.9rem' }}>
                        {testimonials[activeIndex].company}
                    </span>
                </motion.div>

                {/* Navigation Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: index === activeIndex ? '30px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                background: index === activeIndex ? 'var(--accent-gold)' : 'rgba(212, 175, 55, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
