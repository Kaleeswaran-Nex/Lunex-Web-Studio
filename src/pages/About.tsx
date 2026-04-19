import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AboutFounder from '../components/AboutFounder';
import ScrollToTop from '../components/ScrollToTop';
import aboutHero from '../assets/about_hero.png';
import aboutTeam from '../assets/about_team.png';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="about-page">
            
            <section className="about-hero">
                <div className="about-hero-image-wrapper">
                   <div className="about-hero-overlay"></div>
                   <img src={aboutHero} alt="Lunex Web Studio Office" className="about-hero-image" />
                </div>
                <div className="about-hero-content">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gradient-gold"
                    >
                        Redefining Digital Experiences
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="about-hero-subtitle text-secondary"
                    >
                        We are Lunex Web Studio. A collective of passionate creators, developers, and strategists obsessed with crafting digital masterpieces that not only look stunning but drive exponential growth for your brand.
                    </motion.p>
                </div>
            </section>

            <section className="about-mission">
                <div className="container">
                    <div className="mission-grid">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mission-text"
                        >
                            <h2 className="section-title">Our <span className="text-gradient">Mission</span></h2>
                            <p>
                                At Lunex, we don't just build websites; we engineer scalable digital growth engines. Our mission is to elevate businesses by bridging the gap between cutting-edge technology and profound user psychology.
                            </p>
                            <p>
                                Every pixel we place and every line of code we write serves a single purpose: to give your brand a robust, unforgettable online presence that converts visitors into lifelong customers.
                            </p>
                            
                            <div className="mission-stats">
                                <div className="stat-item">
                                    <h3 className="text-gradient-gold">150+</h3>
                                    <p>Projects Delivered</p>
                                </div>
                                <div className="stat-item">
                                    <h3 className="text-gradient-gold">99%</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                                <div className="stat-item">
                                    <h3 className="text-gradient-gold">24/7</h3>
                                    <p>Dedicated Support</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mission-image-container"
                        >
                            <img src={aboutTeam} alt="Lunex Team Collaboration" className="mission-image" />
                            <div className="mission-image-glow"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div style={{ position: 'relative', zIndex: 2, background: 'var(--bg-dark)' }}>
                <AboutFounder />
            </div>
            
            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default About;
