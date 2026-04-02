import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
    {
        id: 1, name: "Rajesh Kumar", company: "Aura Digital Services", country: "🇮🇳 India",
        text: "LUNEX transformed our vision into a stunning digital reality. Their attention to detail and creative approach exceeded our expectations. Our leads increased by 60% within the first month.",
        rating: 5,
    },
    {
        id: 2, name: "Priya Sharma", company: "Ecoplast Interiors", country: "🇮🇳 India",
        text: "Working with LUNEX was an absolute pleasure. They understood our brand perfectly and delivered a website that truly represents who we are. Highly recommend for any business.",
        rating: 5,
    },
    {
        id: 3, name: "Anand Verma", company: "Tech Solutions", country: "🇮🇳 India",
        text: "The team's expertise in creating immersive web experiences is unmatched. Our conversion rates increased by 40% after the redesign. They deliver real business results.",
        rating: 5,
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section style={{
            padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-void) 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{
                        fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '1rem',
                    }}>
                        CLIENT STORIES
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--accent-cream)',
                    }}>
                        Real Results, Real Clients
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        background: 'rgba(15, 10, 25, 0.6)',
                        border: '1px solid rgba(251, 191, 36, 0.1)',
                        borderRadius: '1.2rem',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', opacity: 0.3, lineHeight: 1, marginBottom: '1rem' }}>"</div>

                    <p style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--accent-cream)',
                        lineHeight: 1.8, fontStyle: 'italic',
                        marginBottom: '1.5rem',
                    }}>
                        {testimonials[activeIndex].text}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <span key={i} style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', margin: '0 0.15rem' }}>★</span>
                        ))}
                    </div>

                    <h4 style={{
                        color: '#fff', fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem', marginBottom: '0.3rem',
                    }}>
                        {testimonials[activeIndex].name}
                    </h4>
                    <span style={{ color: 'var(--accent-dim)', fontSize: '0.85rem' }}>
                        {testimonials[activeIndex].company} · {testimonials[activeIndex].country}
                    </span>
                </motion.div>

                {/* Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem' }}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: index === activeIndex ? '32px' : '10px',
                                height: '10px', borderRadius: '5px', border: 'none',
                                background: index === activeIndex ? 'var(--accent-gold)' : 'rgba(251, 191, 36, 0.25)',
                                cursor: 'pointer', transition: 'all 0.3s',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
