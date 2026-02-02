import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary'
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(springY, [-50, 50], [10, -10]);
    const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1.2rem 2.5rem',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase' as const,
        textDecoration: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        perspective: '1000px'
    };

    const variantStyles = {
        primary: {
            background: 'var(--accent-gold)',
            color: 'var(--bg-void)',
            border: 'none'
        },
        secondary: {
            background: 'transparent',
            color: 'var(--accent-cream)',
            border: '1px solid rgba(212, 175, 55, 0.5)'
        }
    };

    const Component = href ? 'a' : 'button';

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
                rotateX,
                rotateY,
                display: 'inline-block'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <Component
                href={href}
                onClick={onClick}
                target={href ? '_blank' : undefined}
                rel={href ? 'noopener noreferrer' : undefined}
                style={{ ...baseStyle, ...variantStyles[variant] }}
            >
                {children}
            </Component>
        </motion.div>
    );
};

export default MagneticButton;
