import { motion } from 'framer-motion';

const marqueeItems = [
    "✦ Web Design",
    "✦ UI/UX Design",
    "✦ Web Development",
    "✦ Brand Identity",
    "✦ SEO Optimization",
    "✦ E-Commerce",
    "✦ Landing Pages",
    "✦ Mobile Responsive"
];

const MarqueeBanner = () => {
    return (
        <div style={{
            overflow: 'hidden',
            background: 'linear-gradient(90deg, #d8b4fe 0%, #c4b5fd 50%, #d8b4fe 100%)',
            padding: '1rem 0',
            position: 'relative',
            boxShadow: '0 0 30px rgba(216, 180, 254, 0.4)'
        }}>
            <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear"
                    }
                }}
                style={{
                    display: 'flex',
                    gap: '4rem',
                    whiteSpace: 'nowrap',
                    width: 'fit-content'
                }}
            >
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                    <span
                        key={index}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.1rem',
                            color: '#1a1a2e',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueeBanner;
