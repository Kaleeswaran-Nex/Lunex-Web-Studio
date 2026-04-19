import { useState } from 'react'
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
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <main className="home-container" onMouseMove={handleMouseMove}>
            <FloatingParticles />
            <SmartHero cursorPos={cursorPos} />
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
