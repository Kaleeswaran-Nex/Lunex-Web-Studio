import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PromoModal.css';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [subscribe, setSubscribe] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, phone: `${countryCode}${phone}`, subscribe });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="promo-overlay"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          onClick={onClose}
        >
          <motion.div
            className="promo-modal glass-panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, rotateX: 20, y: 50 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotateX: -20, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Abstract Background Orbs */}
            <div className="modal-orb orb-1"></div>
            <div className="modal-orb orb-2"></div>
            
            <button className="promo-close-btn" onClick={onClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="promo-content">
              <h2 className="promo-title text-gradient-gold">
                Free Digital Marketing Consultation
              </h2>
              <p className="promo-subtitle text-secondary">
                We Service for All Businesses. Elevate your online presence today.
              </p>

              <form onSubmit={handleSubmit} className="promo-form">
                <div className="input-group">
                  <label htmlFor="email" className="sr-only">Enter your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="promo-input glass-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="phone-group">
                  <div className="country-code-selector glass-input">
                    {/* A visual flag could be added here, keeping it sleek */}
                    <span>🇮🇳</span>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="clean-select"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    className="promo-input glass-input phone-input"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <label className="checkbox-group">
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                    />
                    <div className="checkbox-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="checkbox-text">Keep me up to date on news and offers</span>
                </label>
                
                <p className="privacy-text text-dim">
                  For more information on how we process your data for marketing communication. Check our <a href="#privacy">Privacy policy</a>.
                </p>

                <button type="submit" className="btn-primary promo-submit-btn">
                  Book Now
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoModal;
