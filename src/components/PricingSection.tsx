import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        priceINR: '₹9,999',
        priceUSD: '$120',
        period: 'one-time',
        description: 'Perfect for personal brands & small businesses getting started online.',
        features: [
            'Custom Landing Page',
            'Mobile Responsive Design',
            'SEO Optimized',
            'Contact Form Integration',
            'SSL Certificate Setup',
            '1 Month Free Support',
        ],
        cta: 'Get Started',
        popular: false,
        accent: 'rgba(167, 139, 250, 0.8)',
    },
    {
        name: 'Professional',
        priceINR: '₹19,999',
        priceUSD: '$240',
        period: 'one-time',
        description: 'Ideal for growing businesses that need a complete online presence.',
        features: [
            'Multi-Page Website (up to 8)',
            'Premium UI/UX Design',
            'SEO & Performance Optimized',
            'CMS Integration',
            'Analytics Dashboard',
            'Social Media Integration',
            'WhatsApp Chat Widget',
            '3 Months Free Support',
        ],
        cta: 'Most Popular',
        popular: true,
        accent: 'rgba(251, 191, 36, 0.9)',
    },
    {
        name: 'E-Commerce',
        priceINR: '₹34,999',
        priceUSD: '$420',
        period: 'one-time',
        description: 'Full-featured online store to sell products & services worldwide.',
        features: [
            'Complete E-Commerce Store',
            'Product Management System',
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Tracking System',
            'Customer Accounts',
            'Marketing Automation Setup',
            '6 Months Free Support',
        ],
        cta: 'Start Selling',
        popular: false,
        accent: 'rgba(34, 211, 211, 0.8)',
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
            background: 'linear-gradient(180deg, var(--bg-void) 0%, var(--bg-deep) 50%, var(--bg-void) 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '800px', height: '800px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.04) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '1rem',
                    }}
                >
                    TRANSPARENT PRICING
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        color: 'var(--accent-cream)', marginBottom: '1rem',
                    }}
                >
                    Premium Quality, <span style={{
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>Honest Pricing</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--accent-dim)', maxWidth: '600px', margin: '0 auto 1rem' }}
                >
                    Get the same quality that top US/UK agencies deliver — at up to 70% less cost.
                    No hidden fees. No surprises.
                </motion.p>

                {/* Savings badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1.2rem',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        borderRadius: '50px', marginBottom: '3rem',
                    }}
                >
                    <span style={{ fontSize: '0.85rem' }}>💰</span>
                    <span style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: 600 }}>
                        Save up to 70% compared to US/UK agencies
                    </span>
                </motion.div>
            </div>

            {/* Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                gap: '1.5rem',
                maxWidth: '1100px', margin: '0 auto',
                position: 'relative', zIndex: 1, alignItems: 'stretch',
            }}>
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        whileHover={{ y: -8 }}
                        style={{
                            padding: 'clamp(1.8rem, 4vw, 2.5rem)',
                            background: plan.popular ? 'rgba(20, 15, 35, 0.8)' : 'rgba(12, 8, 22, 0.6)',
                            border: plan.popular ? '1px solid rgba(251, 191, 36, 0.35)' : '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '1.2rem',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.4s',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex', flexDirection: 'column',
                        }}
                    >
                        {/* Popular badge */}
                        {plan.popular && (
                            <div style={{
                                position: 'absolute', top: '1rem', right: '1rem',
                                padding: '0.3rem 0.8rem',
                                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                borderRadius: '20px',
                                fontSize: '0.65rem', fontWeight: 800, color: '#030014',
                                letterSpacing: '0.1em',
                            }}>
                                MOST POPULAR
                            </div>
                        )}

                        {/* Top glow for popular */}
                        {plan.popular && (
                            <div style={{
                                position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)',
                                width: '300px', height: '150px',
                                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent)',
                                pointerEvents: 'none',
                            }} />
                        )}

                        {/* Plan name */}
                        <h3 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.1rem',
                            color: plan.accent, letterSpacing: '0.15em',
                            marginBottom: '0.5rem',
                        }}>
                            {plan.name.toUpperCase()}
                        </h3>

                        {/* Price */}
                        <div style={{ marginBottom: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                <span style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.2rem)',
                                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                                    color: '#fff',
                                    lineHeight: 1.1
                                }}>
                                    {plan.priceINR}
                                </span>
                                <span style={{ color: 'var(--accent-dim)', fontSize: '0.9rem', marginLeft: '0.3rem' }}>
                                    /{plan.period}
                                </span>
                            </div>
                            <span style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 600, marginTop: '0.5rem' }}>
                                {plan.priceUSD}
                            </span>
                        </div>

                        <p style={{ color: 'var(--accent-dim)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                            {plan.description}
                        </p>

                        {/* Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem', flex: 1 }}>
                            {plan.features.map((feature, fi) => (
                                <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="/#connect"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'block',
                                padding: '0.9rem',
                                textAlign: 'center',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                transition: 'all 0.3s',
                                background: plan.popular ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'transparent',
                                color: plan.popular ? '#030014' : '#fff',
                                border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.15)',
                                boxShadow: plan.popular ? '0 4px 20px rgba(251, 191, 36, 0.3)' : 'none',
                            }}
                        >
                            {plan.cta.toUpperCase()}
                        </motion.a>
                    </motion.div>
                ))}
            </div>

            {/* Custom projects note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                    textAlign: 'center', marginTop: '3rem', position: 'relative', zIndex: 1,
                }}
            >
                <p style={{ color: 'var(--accent-dim)', fontSize: '0.95rem' }}>
                    Need something custom?{' '}
                    <a href="/#connect" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>
                        Get a custom quote
                    </a>{' '}
                    — Enterprise, SaaS, and large-scale projects welcome.
                </p>
            </motion.div>
        </section>
    );
};

export default PricingSection;
