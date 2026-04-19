import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Footer from '../components/Footer';

// Generate/use specific images
import imgDigitalMarketing from '../assets/service_digital_marketing.png';
import imgWebDev from '../assets/service_web_dev.png';
import imgMobileApp from '../assets/service_mobile_app.png';
import imgCustomSoftware from '../assets/service_custom_software.png';
import imgIntegration from '../assets/service_integration.png';
import imgEcommerce from '../assets/service_ecommerce.png';

const serviceData = {
    'digital-marketing': {
        title: 'Digital Marketing',
        subtitle: 'Amplify Your Brand, Dominate Your Market',
        image: imgDigitalMarketing,
        overview: 'Our Digital Marketing services are designed to elevate your brand presence and drive measurable growth. We do not just run ads; we engineer campaigns that convert prospects into loyal customers using data-driven insights and compelling creatives.',
        strategies: [
            'Search Engine Optimization (SEO)',
            'Social Media Management (SMM)',
            'Pay-Per-Click (PPC) Advertising',
            'Content Marketing & Strategy'
        ],
        workDetails: 'We analyze your target audience and current market trends to create a bespoke marketing funnel. By leveraging advanced analytics and A/B testing, we continuously refine campaigns to maximize your Return on Ad Spend (ROAS) and drastically lower customer acquisition costs.'
    },
    'web-development': {
        title: 'Web Development',
        subtitle: 'High-Performance, Stunning Web Experiences',
        image: imgWebDev,
        overview: 'We build premium, custom websites tailored for specific business needs. Rejecting cookie-cutter templates, we focus on blazing-fast load times, seamless user interfaces, and robust architectures to leave a lasting impact.',
        strategies: [
            'Custom Frontend (React/Next.js/Vue)',
            'Scalable Backend Architecture',
            'Responsive & Mobile-First Design',
            'Performance Optimization'
        ],
        workDetails: 'Our development process follows strict coding standards and modern frameworks. We deliver websites with perfect Lighthouse scores, utilizing headless CMS options or custom backend APIs to ensure scalability and rock-solid security for our clients.'
    },
    'mobile-app-development': {
        title: 'Mobile App Development',
        subtitle: 'Innovative Apps, Intuitive Experiences',
        image: imgMobileApp,
        overview: 'Transform your ideas into sleek, feature-rich mobile applications for iOS and Android. Our app development service focuses on creating highly engaging and intuitive user experiences that keep your audience connected on the go.',
        strategies: [
            'Cross-Platform Development (React Native/Flutter)',
            'Native iOS & Android Apps',
            'UI/UX App Design Prototyping',
            'App Store Optimization (ASO)'
        ],
        workDetails: 'From wireframing to deployment, we handle the entire lifecycle of the mobile application. We build with robust offline capabilities, push notifications, and seamless third-party API integrations, ensuring your app runs flawlessly across thousands of devices.'
    },
    'custom-software': {
        title: 'Billing & Customized Softwares',
        subtitle: 'Tailored Solutions for Complex Operations',
        image: imgCustomSoftware,
        overview: 'We develop secure, customized software solutions designed to streamline your business workflow. From complex billing systems to complete ERP solutions, we automate your tedious tasks so you can focus on growth.',
        strategies: [
            'Custom ERP & Software Development',
            'Automated Invoicing & Billing Systems',
            'SaaS Product Architecture',
            'Legacy System Modernization'
        ],
        workDetails: 'We start with a deep dive into your operational bottlenecks. Our team then engineers robust software tailored specifically to your internal processes. With complex role-based access control and detailed financial reporting layers, we ensure transparency and efficiency.'
    },
    'integration': {
        title: 'Integration Services',
        subtitle: 'Unifying Your Digital Ecosystem',
        image: imgIntegration,
        overview: 'Disconnects between your software tools cause massive inefficiencies. Our Integration Services bridge the gap, allowing your disparate systems, applications, and databases to communicate flawlessly with one another in real-time.',
        strategies: [
            'REST/GraphQL API Development',
            'Third-Party Service Integration',
            'Payment Gateway Setup',
            'Data Migration & Syncrhonization'
        ],
        workDetails: 'We implement middleware solutions and custom API connectors to sync data across your entire tech stack. Whether it is linking your eCommerce store to your accounting software or connecting user apps to secure databases, we make the ecosystem seamless.'
    },
    'ecommerce': {
        title: 'E-Commerce Development',
        subtitle: 'High-Converting Digital Storefronts',
        image: imgEcommerce,
        overview: 'Scale your retail business globally with an optimized, secure e-commerce platform. We build online stores that not only look spectacular but are engineered specifically for high conversion rates and effortless inventory management.',
        strategies: [
            'Shopify & WooCommerce Customization',
            'Headless E-Commerce Solutions',
            'Secure Payment & Checkout Flow',
            'Inventory & Shipping Integration'
        ],
        workDetails: 'Our focus is on reducing cart abandonment. We design clean, frictionless checkout flows, implement robust product search capabilities, and ensure ultra-fast load times. We also integrate advanced features like dynamic pricing, wishlists, and loyalty programs.'
    }
};

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = id ? serviceData[id as keyof typeof serviceData] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexDirection: 'column' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)' }}>Service Not Found</h1>
                <Link to="/" style={{ color: 'var(--accent-gold)', marginTop: '1rem', textDecoration: 'none' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--bg-void)', minHeight: '100vh', paddingTop: '100px' }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '600px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.15), transparent 70%)',
                pointerEvents: 'none', zIndex: 0
            }} />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', position: 'relative', zIndex: 1 }}>
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                        Premium Services
                    </span>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--accent-cream)', margin: '1rem 0' }}>
                        {service.title}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        {service.subtitle}
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginBottom: '4rem' }}>
                    
                    {/* Image Area */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '4/3',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}>
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Area */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                    >
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                Overview
                            </h2>
                            <p style={{ color: 'var(--accent-dim)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                {service.overview}
                            </p>
                        </div>
                        
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                Our Strategies
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {service.strategies.map((strategy, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                                        <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span style={{ color: 'var(--accent-cream)', fontSize: '1.05rem', lineHeight: 1.5 }}>{strategy}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Work Details Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(20, 15, 30, 0.8), rgba(10, 5, 15, 0.95))',
                        border: '1px solid rgba(212, 175, 55, 0.1)',
                        borderRadius: '1.5rem',
                        padding: '3rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '4px', height: '100%',
                        background: 'linear-gradient(180deg, var(--accent-gold), transparent)'
                    }} />
                    
                    <h2 style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
                        How We Execute Details
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                        {service.workDetails}
                    </p>
                </motion.div>

            </div>
            
            <Footer />
        </div>
    );
};

export default ServiceDetail;
