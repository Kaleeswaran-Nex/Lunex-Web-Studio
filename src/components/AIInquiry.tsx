import { useState } from 'react';
import { motion } from 'framer-motion';

const AIInquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `
*LUNEX STUDIO — NEW LEAD*
━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Email:* ${formData.email}
*Mobile:* ${formData.mobile}
*Company:* ${formData.company}
*Service:* ${formData.service}
*Budget:* ${formData.budget}
*Message:* ${formData.message || 'N/A'}
━━━━━━━━━━━━━━━━━━━━`.trim();
        const encoded = encodeURIComponent(msg);
        window.open(`https://wa.me/916381437668?text=${encoded}`, '_blank');
    };

    const handleEmailSubmit = () => {
        const subject = encodeURIComponent(`New Inquiry from ${formData.name} — ${formData.service}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'N/A'}`
        );
        window.open(`mailto:lunexwebstudio@gmail.com?subject=${subject}&body=${body}`, '_blank');
    };

    const benefits = [
        { icon: '⚡', title: 'Fast Turnaround', desc: 'Get your website live in 2-4 weeks' },
        { icon: '💰', title: 'Save Up to 70%', desc: 'Premium quality at fraction of US/UK cost' },
        { icon: '🔄', title: 'Unlimited Revisions', desc: 'We iterate until you\'re 100% satisfied' },
        { icon: '🛡️', title: 'Post-Launch Support', desc: 'Free maintenance after project delivery' },
        { icon: '🌍', title: 'Global Expertise', desc: 'Serving clients across USA, UK, UAE & more' },
    ];

    const selectStyle: React.CSSProperties = {
        width: '100%', padding: '1.1rem 1.2rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '0.7rem', color: 'white',
        fontSize: '0.95rem', outline: 'none',
        transition: 'border-color 0.3s',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 1rem center',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '1.1rem 1.2rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '0.7rem', color: 'white',
        fontSize: '0.95rem', outline: 'none',
        transition: 'border-color 0.3s',
    };

    return (
        <section id="connect" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(0.75rem, 3vw, 2rem)',
            minHeight: '100vh', background: 'var(--bg-void)',
            display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '900px', height: '600px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1200px', width: '100%', margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
                gap: '2rem', alignItems: 'stretch',
                position: 'relative', zIndex: 1,
            }}>
                {/* Left: Benefits & Value */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        background: 'rgba(18, 14, 30, 0.8)',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        display: 'flex', flexDirection: 'column',
                    }}
                >
                    <span style={{
                        fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)', marginBottom: '1rem',
                    }}>
                        WHY WORK WITH US
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--accent-cream)',
                        marginBottom: '1.5rem', lineHeight: 1.2,
                    }}>
                        Let's Build Something{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>Amazing</span>
                    </h2>

                    <p style={{
                        color: 'var(--accent-dim)', lineHeight: 1.7,
                        fontSize: '1rem', marginBottom: '2rem',
                    }}>
                        Join businesses from around the world who trust Lunex Studio for
                        their digital presence. Get premium quality at prices that make sense.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                                style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}
                            >
                                <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '0.1rem' }}>{b.icon}</span>
                                <div>
                                    <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{b.title}</span>
                                    <span style={{ color: 'var(--accent-dim)', fontSize: '0.85rem', marginLeft: '0.3rem' }}>— {b.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    style={{
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        background: 'rgba(10, 8, 18, 0.9)',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(251, 191, 36, 0.1)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                            fontFamily: 'var(--font-heading)', marginBottom: '0.5rem',
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                            Get Your Free Quote
                        </h2>
                        <p style={{ color: 'var(--accent-dim)', fontSize: '0.9rem' }}>
                            Tell us about your project. We'll respond within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '0.9rem' }}>
                            <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} style={inputStyle} />
                            <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} style={inputStyle} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '0.9rem' }}>
                            <input type="tel" name="mobile" placeholder="Phone Number *" required value={formData.mobile} onChange={handleChange} style={inputStyle} />
                            <input type="text" name="company" placeholder="Company / Brand" value={formData.company} onChange={handleChange} style={inputStyle} />
                        </div>

                        <select name="service" value={formData.service} onChange={handleChange} required style={selectStyle}>
                            <option value="" disabled>Select Service *</option>
                            <option value="Website Design">Website Design</option>
                            <option value="E-Commerce Store">E-Commerce Store</option>
                            <option value="Web Application">Web Application / SaaS</option>
                            <option value="Brand Identity">Brand Identity & Logo</option>
                            <option value="Website Redesign">Website Redesign</option>
                            <option value="Maintenance">Maintenance & Support</option>
                            <option value="Other">Other</option>
                        </select>

                        <select name="budget" value={formData.budget} onChange={handleChange} required style={selectStyle}>
                            <option value="" disabled>Budget Range *</option>
                            <option value="$300 - $500">$300 - $500</option>
                            <option value="$500 - $1,000">$500 - $1,000</option>
                            <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                            <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                            <option value="$5,000+">$5,000+</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Tell us about your project (optional)"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                        />

                        {/* Dual submit buttons */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginTop: '0.5rem' }}>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#16a34a' }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                style={{
                                    padding: '1rem', borderRadius: '0.7rem', border: 'none',
                                    background: '#22c55e', color: 'white',
                                    fontSize: '0.85rem', fontWeight: 700,
                                    letterSpacing: '0.05em', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                                    boxShadow: '0 6px 20px rgba(34, 197, 94, 0.25)',
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                </svg>
                                WhatsApp
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                onClick={handleEmailSubmit}
                                style={{
                                    padding: '1rem', borderRadius: '0.7rem',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    background: 'transparent', color: 'white',
                                    fontSize: '0.85rem', fontWeight: 700,
                                    letterSpacing: '0.05em', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Email
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default AIInquiry;
