import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    { id: 'identity', text: "> INITIALIZING PROTOCOL...\n> PLEASE IDENTIFY YOUR ENTITY (NAME):" },
    { id: 'objective', text: "> ENTITY CONFIRMED.\n> SPECIFY OBJECTIVE PARAMETERS (PROJECT TYPE):" },
    { id: 'resources', text: "> CALCULATING DATA...\n> DEFINE RESOURCE ALLOCATION (BUDGET):" },
    { id: 'uplink', text: "> ESTABLISHING UPLINK...\n> PROVIDE FREQUENCY FOR TRANSMISSION (EMAIL):" }
];

import aiHoloBrain from '../assets/ai_holo_brain.png';

const AIInquiry = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [currentInput, setCurrentInput] = useState('');
    const [history, setHistory] = useState<{ sender: 'ai' | 'user', text: string }[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Initialize chat
    useEffect(() => {
        if (step === 0 && history.length === 0) {
            setTimeout(() => {
                setHistory([{ sender: 'ai', text: questions[0].text }]);
            }, 1000);
        }
    }, [step, history]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentInput.trim()) return;

        // Add user answer
        const newHistory = [...history, { sender: 'user' as const, text: `> ${currentInput}` }];
        setHistory(newHistory);

        const key = questions[step].id;
        setAnswers(prev => ({ ...prev, [key]: currentInput }));
        setCurrentInput('');

        // Advance
        if (step < questions.length - 1) {
            setTimeout(() => {
                setHistory(prev => [...prev, { sender: 'ai', text: questions[step + 1].text }]);
                setStep(prev => prev + 1);
            }, 800);
        } else {
            console.log("Transmission Received:", answers);

            setTimeout(() => {
                setHistory(prev => [...prev, { sender: 'ai', text: "> DATA ENCRYPTED.\n> SELECT TRANSMISSION PROTOCOL:" }]);
            }, 800);
        }
    };

    const handleTransmission = (method: 'whatsapp' | 'email') => {
        const message = `
*LUNEX STUDIO - TERMINAL INQUIRY*
--------------------------------
*IDENTITY:* ${answers['identity'] || 'N/A'}
*OBJECTIVE:* ${answers['objective'] || 'N/A'}
*RESOURCES:* ${answers['resources'] || 'N/A'}
*UPLINK:* ${answers['uplink'] || 'N/A'}
--------------------------------
> END TRANSMISSION
        `.trim();

        if (method === 'whatsapp') {
            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/916381437668?text=${encoded}`, '_blank');
        } else {
            const subject = encodeURIComponent("PROJECT INQUIRY: " + (answers['identity'] || 'Unknown Entity'));
            const body = encodeURIComponent(message);
            window.location.href = `mailto:lunexwebstudio@gmail.com?subject=${subject}&body=${body}`;
        }
    };

    return (
        <section id="connect" style={{ padding: '6rem 2rem', minHeight: '100vh', background: 'var(--bg-void)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="glass-panel" style={{
                maxWidth: '800px',
                width: '100%',
                margin: '0 auto',
                padding: '2rem',
                borderRadius: '4px',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: '#00ff41', /* Classic Terminal Green */
                boxShadow: '0 0 50px rgba(0, 255, 65, 0.1)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: 'auto',
                    opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0,
                    filter: 'drop-shadow(0 0 20px rgba(0, 255, 65, 0.5))'
                }}>
                    <img src={aiHoloBrain} alt="AI Core" style={{ width: '100%', height: 'auto' }} />
                </div>

                <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(0,255,65,0.3)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>LUNEX_TERMINAL_V1.0</span>
                    <span>STATUS: ONLINE</span>
                </div>

                <div className="messages" style={{ flexGrow: 1, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', whiteSpace: 'pre-wrap' }}>
                    <AnimatePresence>
                        {history.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    alignSelf: 'flex-start',
                                    color: msg.sender === 'user' ? 'var(--accent-white)' : '#00ff41',
                                    maxWidth: '100%'
                                }}
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Transmission Options */}
                    {step === questions.length - 1 && history.length > questions.length + 3 && (
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => handleTransmission('whatsapp')}
                                style={{
                                    background: 'rgba(0, 255, 65, 0.1)',
                                    border: '1px solid #00ff41',
                                    color: '#00ff41',
                                    padding: '1rem 2rem',
                                    fontFamily: 'inherit',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    fontWeight: 'bold'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#00ff41'; e.currentTarget.style.color = 'black'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 255, 65, 0.1)'; e.currentTarget.style.color = '#00ff41'; }}
                            >
                                [ INITIATE NEURAL_LINK (WHATSAPP) ]
                            </button>

                            <button
                                onClick={() => handleTransmission('email')}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(0, 255, 65, 0.5)',
                                    color: 'rgba(0, 255, 65, 0.8)',
                                    padding: '1rem 2rem',
                                    fontFamily: 'inherit',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00ff41'; e.currentTarget.style.color = '#00ff41'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.5)'; e.currentTarget.style.color = 'rgba(0, 255, 65, 0.8)'; }}
                            >
                                [ SEND VIA UPLINK (EMAIL) ]
                            </button>
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                {step < questions.length && (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(0,255,65,0.3)', paddingTop: '1rem' }}>
                        <span style={{ color: '#00ff41' }}>{'>'}</span>
                        <input
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            placeholder="..."
                            style={{
                                flexGrow: 1,
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--accent-white)',
                                fontFamily: 'inherit',
                                outline: 'none'
                            }}
                            autoFocus
                        />
                    </form>
                )}
            </div>
        </section>
    )
}

export default AIInquiry;
