import { motion } from 'framer-motion';

interface RevealTextProps {
    children: string;
    className?: string;
    style?: React.CSSProperties;
}

const RevealText: React.FC<RevealTextProps> = ({ children, className, style }) => {
    const words = children.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
            style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '0.3em',
                perspective: '1000px',
                ...style
            }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{
                        display: 'inline-block',
                        transformOrigin: 'bottom center'
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default RevealText;
