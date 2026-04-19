import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SmartHero from '../components/SmartHero'
import MarqueeBanner from '../components/MarqueeBanner'
import AIInquiry from '../components/AIInquiry'
import ProcessSection from '../components/ProcessSection'
import ExoticServices from '../components/ExoticServices'
import PricingSection from '../components/PricingSection'
import ProjectShowcase from '../components/ProjectShowcase'
import StatsSection from '../components/StatsSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutFounder from '../components/AboutFounder'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import FloatingParticles from '../components/FloatingParticles'
import ScrollToTop from '../components/ScrollToTop'
import LogoMarquee from '../components/LogoMarquee'
import Footer from '../components/Footer'

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Add a small delay for smoother transition if navigating from another page
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main className="home-container">
            <FloatingParticles />
            <SmartHero />
            <MarqueeBanner />
            <LogoMarquee />
            <ExoticServices />
            <PricingSection />
            <ProjectShowcase />
            <StatsSection />
            <WhyChooseUs />
            <AboutFounder />
            <Testimonials />
            <ProcessSection />
            <CallToAction />
            <AIInquiry />
            <Footer />
            <ScrollToTop />
        </main>
    )
}

export default Home
