import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo_original.png';

interface LoadingScreenProps {
    isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, #030014 0%, #0a0618 50%, #030014 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                    }}
                >
                    {/* Ambient Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(216, 180, 254, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
                            filter: 'blur(40px)',
                            borderRadius: '50%',
                        }}
                    />

                    {/* Logo Container with Rotating Ring */}
                    <motion.div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Outer Rotating Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                width: '140px',
                                height: '140px',
                                borderRadius: '50%',
                                background: 'conic-gradient(from 0deg, transparent, rgba(216, 180, 254, 0.5), transparent, rgba(167, 139, 250, 0.4), transparent)',
                            }}
                        />

                        {/* Inner Static Ring */}
                        <div style={{
                            position: 'absolute',
                            width: '125px',
                            height: '125px',
                            borderRadius: '50%',
                            border: '2px solid rgba(216, 180, 254, 0.3)',
                        }} />

                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                background: 'linear-gradient(135deg, #0a0618 0%, #1a0f2e 100%)',
                                boxShadow: '0 0 40px rgba(216, 180, 254, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <motion.img
                                src={logo}
                                alt="Lunex Logo"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    width: '90%',
                                    height: '90%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <motion.span
                            style={{
                                fontFamily: '"Cinzel", serif',
                                fontSize: '1.8rem',
                                letterSpacing: '0.2em',
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 50%, #d8b4fe 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'block',
                            }}
                        >
                            LUNEX
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.7rem',
                                letterSpacing: '0.4em',
                                color: 'rgba(216, 180, 254, 0.6)',
                                textTransform: 'uppercase',
                            }}
                        >
                            Web Studio
                        </motion.span>
                    </motion.div>

                    {/* Loading Dots */}
                    <motion.div
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginTop: '2rem',
                        }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #d8b4fe, #a78bfa)',
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
