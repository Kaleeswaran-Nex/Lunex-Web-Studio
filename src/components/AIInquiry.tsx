import { useState } from 'react';
import { motion } from 'framer-motion';

const AIInquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        company: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `
*LUNEX STUDIO - NEW ENQUIRY*
--------------------------------
*NAME:* ${formData.name}
*EMAIL:* ${formData.email}
*MOBILE:* ${formData.mobile}
*COMPANY:* ${formData.company}
--------------------------------
        `.trim();

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/916381437668?text=${encoded}`, '_blank');
    };

    const offers = [
        {
            title: "Exotic UI and UX",
            desc: "Bespoke digital interfaces tailored to your brand's unique identity and target audience."
        },
        {
            title: "Premium Web Design",
            desc: "Visually stunning, responsive layouts that weave your brand's story into every pixel."
        },
        {
            title: "Digital Architecture",
            desc: "Robust, high-performance web solutions built with cutting-edge technologies like React and Vite."
        },
        {
            title: "Client Portals",
            desc: "Secure and scalable custom portals designed to streamline your business operations and communications."
        },
        {
            title: "Luxe E-Commerce",
            desc: "Comprehensive shop solutions with intuitive navigation and seamless, secure checkout experiences."
        }
    ];

    return (
        <section id="connect" style={{
            padding: '8rem 2rem',
            minHeight: '100vh',
            background: 'var(--bg-void)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem',
                alignItems: 'stretch',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Left Column: What We Offer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        padding: '3.5rem 3rem',
                        background: '#161b22', // Deeper slate/black from image
                        borderRadius: '2.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <p style={{
                        color: 'var(--accent-cream)',
                        lineHeight: 1.7,
                        marginBottom: '3rem',
                        fontSize: '1.15rem',
                        opacity: 0.85,
                        fontWeight: 300
                    }}>
                        In today's digital landscape, a majestic and user-centric online presence is the cornerstone of success.
                        Whether yours is a growing startup or an established legacy, we craft digital experiences that
                        captivate users, drive conversions, and command industry growth.
                    </p>

                    <h2 style={{
                        fontSize: '3.2rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '2.5rem',
                        background: 'var(--gradient-gold)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        letterSpacing: '-0.02em'
                    }}>
                        What We Offer
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                        {offers.map((offer, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    minWidth: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-gold)', // Site gold
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--bg-void)',
                                    marginTop: '0.2rem',
                                    boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)'
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div style={{ lineHeight: 1.5 }}>
                                    <span style={{
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        marginRight: '0.5rem'
                                    }}>
                                        {offer.title} –
                                    </span>
                                    <span style={{
                                        color: 'var(--accent-dim)',
                                        fontSize: '1.05rem',
                                        fontWeight: 400
                                    }}>
                                        {offer.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Enquiry Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        padding: '3.5rem 3rem',
                        background: '#0d1117', // Even darker for contrast as in image
                        borderRadius: '2.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <h2 style={{
                            fontSize: '2.8rem',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1rem',
                            background: 'var(--gradient-gold)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700
                        }}>
                            Make an Enquiry
                        </h2>
                        <p style={{ color: 'var(--accent-dim)', fontSize: '1rem', opacity: 0.7 }}>
                            Submit your details and someone from our team will contact you shortly.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID*"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile No.*"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company*"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <motion.button
                            whileHover={{ scale: 1.01, backgroundColor: '#16a34a' }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            style={{
                                marginTop: '1.5rem',
                                padding: '1.3rem',
                                borderRadius: '1rem', // Match image button shape
                                border: 'none',
                                background: '#22c55e', // Vibrant green from image
                                color: 'white',
                                fontSize: '1.2rem',
                                fontWeight: 800,
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
                            }}
                        >
                            SUBMIT
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1.3rem 1.5rem',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '0.8rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
};

export default AIInquiry;
