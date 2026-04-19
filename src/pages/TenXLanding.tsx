import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TenXLanding.css';

const TenXLanding: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        currentRevenue: '',
        growthGoal: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/lunexwebstudio@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `10X BRAND GROWTH INQUIRY: ${formData.name}`,
                    Name: formData.name,
                    Email: formData.email,
                    BusinessType: formData.businessType,
                    CurrentRevenue: formData.currentRevenue,
                    GrowthGoal: formData.growthGoal,
                    Message: formData.message
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', businessType: '', currentRevenue: '', growthGoal: '', message: '' });
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const features = [
        { title: "Psychological Selling", desc: "We design for human behavior, turning visitors into obsessed customers." },
        { title: "High-Speed Infrastructure", desc: "Blazing fast loading speeds to ensure no lead is left behind." },
        { title: "conversion Optimization", desc: "Data-driven layouts that guide users straight to the checkout." },
    ];

    const methodology = [
        { step: "01", title: "Brand Infusion", desc: "We inject high-converting psychological triggers into every pixel of your brand identity." },
        { step: "02", title: "Traffic Explosion", desc: "Deploying multi-channel digital strategies to drive qualified eyeballs to your landing pages." },
        { step: "03", title: "Systemic Scaling", desc: "Building the infrastructure to handle 10X growth without breaking your operations." },
    ];

    return (
        <div className="tenx-container">
            {/* Background Effects */}
            <div className="tenx-bg-glow"></div>
            <div className="tenx-grid-overlay"></div>

            <div className="tenx-content-wrapper">
                <div className="tenx-hero-section">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="tenx-hero-text"
                    >
                        <span className="tenx-badge">EXOTIC GROWTH STRATEGY</span>
                        <h1>Grow Your Business <span className="text-gradient-gold">10X</span></h1>
                        <p className="tenx-lead">
                            Stop using standard digital services. We deploy <span className="highlight">Proven Digital Marketing Strategies</span> that drive massive Leads and Sales. 
                        </p>
                        
                        <div className="tenx-features-grid">
                            {features.map((f, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.2 }}
                                    className="tenx-feature-card"
                                >
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="tenx-form-wrapper glass-panel"
                    >
                        {isSuccess ? (
                            <div className="tenx-success">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </motion.div>
                                <h2>Blueprint Incoming!</h2>
                                <p>We've received your data. Our lead strategist will contact you within 24 hours.</p>
                                <button onClick={() => setIsSuccess(false)} className="btn-tenx-return">Back</button>
                            </div>
                        ) : (
                            <>
                                <div className="form-header">
                                    <h2>Request Your 10X Roadmap</h2>
                                    <p>Fill in the details to unlock your customized growth strategy.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="dual-inputs">
                                        <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
                                        <input type="email" name="email" placeholder="Business Email *" required value={formData.email} onChange={handleChange} />
                                    </div>
                                    <select name="businessType" value={formData.businessType} onChange={handleChange} required>
                                        <option value="" disabled>Business Type *</option>
                                        <option value="e-commerce">E-Commerce</option>
                                        <option value="saas">SaaS / Software</option>
                                        <option value="service">Service Industry</option>
                                        <option value="real-estate">Real Estate</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="dual-inputs">
                                        <input type="text" name="currentRevenue" placeholder="Current Monthly Revenue" value={formData.currentRevenue} onChange={handleChange} />
                                        <input type="text" name="growthGoal" placeholder="Growth Goal (e.g. 1M+)" value={formData.growthGoal} onChange={handleChange} />
                                    </div>
                                    <textarea name="message" placeholder="What is your current biggest marketing bottleneck? *" rows={3} required value={formData.message} onChange={handleChange}></textarea>
                                    
                                    <button type="submit" className="tenx-submit-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'SECURING STRATEGY...' : 'GET MY 10X ROADMAP'}
                                    </button>
                                </form>
                                <p className="form-footer-note">We value your privacy. No spam, only strategy.</p>
                            </>
                        )}
                    </motion.div>
                </div>

                <div className="tenx-methodology-section">
                    <h2 className="section-title">The 10X Methodology</h2>
                    <div className="methodology-grid">
                        {methodology.map((m, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="method-step"
                            >
                                <span className="step-num">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="tenx-cta-banner">
                    <h3>Ready to stop settling and start scaling?</h3>
                    <p>Enter your details above and let's build your 10X future today.</p>
                </div>

                <div className="tenx-stats-strip">
                    <div className="stat-item">
                        <span className="stat-value">120+</span>
                        <span className="stat-label">Brands Scaled</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">$14M+</span>
                        <span className="stat-label">Revenue Generated</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">98%</span>
                        <span className="stat-label">Retention Rate</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenXLanding;
