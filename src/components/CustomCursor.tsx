import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: cursorX,
                    y: cursorY,
                    width: isHovering ? '50px' : '12px',
                    height: isHovering ? '50px' : '12px',
                    borderRadius: '50%',
                    background: isHovering ? 'transparent' : 'var(--accent-gold)',
                    border: isHovering ? '2px solid var(--accent-gold)' : 'none',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'difference',
                    transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s'
                }}
            />

            {/* Trailing glow */}
            <motion.div
                animate={{
                    x: mousePos.x - 100,
                    y: mousePos.y - 100
                }}
                transition={{ type: 'spring', damping: 50, stiffness: 100 }}
                style={{
                    position: 'fixed',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'blur(20px)'
                }}
            />
        </>
    );
};

export default CustomCursor;
