import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  isOptions?: boolean;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('chatbot-open');
    } else {
      document.body.classList.remove('chatbot-open');
    }
    return () => document.body.classList.remove('chatbot-open');
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hi, Welcome to Lunex Web Studio! 👋\n\nWhat's your name?");
      }, 500);
      setShowGreeting(false);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: string[]) => {
    setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text, isOptions: !!options, options }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text }]);
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    addUserMessage(text);
    setInputValue('');
    
    // Disable options from the previous bot message
    setMessages(prev => {
        const newMessages = [...prev];
        const lastBotMessageIndex = newMessages.map(m => m.sender).lastIndexOf('bot');
        if(lastBotMessageIndex !== -1) {
            newMessages[lastBotMessageIndex] = { ...newMessages[lastBotMessageIndex], isOptions: false };
        }
        return newMessages;
    });

    setTimeout(() => {
      progressChat(text);
    }, 600);
  };

  const submitToEmail = async (finalData: any) => {
    try {
      await fetch("https://formsubmit.co/ajax/lunexwebstudio@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Lead from Chatbot: ${finalData.name}`,
            Name: finalData.name,
            Industry: finalData.industry,
            Service: finalData.service,
            Goal: finalData.goal,
            Timeline: finalData.timeline,
            WantsFreeConsultation: finalData.wantsCall,
            ContactInfo: finalData.contactInfo
        })
      });
    } catch (error) {
      console.error("Chatbot submission error:", error);
    }
  };

  const progressChat = (responseText: string) => {
    const updatedData = { ...formData };
    
    if (step === 0) {
      updatedData.name = responseText;
      addBotMessage("What industry is your business in?");
      setStep(1);
    } else if (step === 1) {
      updatedData.industry = responseText;
      addBotMessage("What digital marketing services are you interested in?", [
        "Website Development", 
        "Software Development", 
        "ERP/CRM Integration", 
        "Web/App Development", 
        "Digital Marketing", 
        "Paid Ads Campaign"
      ]);
      setStep(2);
    } else if (step === 2) {
      updatedData.service = responseText;
      addBotMessage("What is your main goal?", [
        "More website traffic",
        "More leads/sales",
        "Better brand awareness"
      ]);
      setStep(3);
    } else if (step === 3) {
      updatedData.goal = responseText;
      addBotMessage("When would you like to start?", [
        "Immediately",
        "In 1-3 months",
        "Maybe later"
      ]);
      setStep(4);
    } else if (step === 4) {
      updatedData.timeline = responseText;
      addBotMessage("Would you like a free consultation call?", ["Yes", "No"]);
      setStep(5);
    } else if (step === 5) {
      updatedData.wantsCall = responseText;
      addBotMessage("Please share your Email or Phone Number so we can get in touch!");
      setStep(6);
    } else if (step === 6) {
      updatedData.contactInfo = responseText;
      addBotMessage("Thanks for your response! Our team will review and contact you soon.");
      submitToEmail(updatedData);
      setStep(7);
    }
    
    setFormData(updatedData);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowGreeting(false);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338C8.47 21.513 10.179 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.872-.345-4.113-.96l-3.325.89.89-3.325C4.845 15.372 4.5 13.725 4.5 12c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                  <circle cx="9" cy="11.5" r="1.5" />
                  <circle cx="15" cy="11.5" r="1.5" />
                  <path d="M8.5 15c.658.658 2.343 1 2.5 1s1.842-.342 2.5-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4>Lunex Assistant</h4>
                <p>Typically replies instantly</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message-wrapper ${msg.sender}`}>
                {msg.sender === 'bot' && (
                   <div className="bot-icon">
                     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338C8.47 21.513 10.179 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.872-.345-4.113-.96l-3.325.89.89-3.325C4.845 15.372 4.5 13.725 4.5 12c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                        <circle cx="9" cy="11.5" r="1.5" />
                        <circle cx="15" cy="11.5" r="1.5" />
                        <path d="M8.5 15c.658.658 2.343 1 2.5 1s1.842-.342 2.5-1" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                     </svg>
                   </div>
                )}
                <div className="chatbot-msg-content">
                  <div className="chatbot-message">
                    {msg.text}
                  </div>
                  {msg.isOptions && msg.options && (
                    <div className="chatbot-options">
                      {msg.options.map(opt => (
                        <button key={opt} className="chatbot-option-btn" onClick={() => handleSend(opt)}>
                          <span className="option-dot"></span> {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {step < 7 && (
            <div className="chatbot-input-area">
              <input 
                type="text" 
                placeholder="Type your answer..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="chatbot-send-btn" onClick={() => handleSend()} aria-label="Send Message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {showGreeting && !isOpen && (
        <div className="chatbot-greeting" onClick={toggleChat}>
          <p>Hi, Welcome to Lunex Web Studio!!</p>
        </div>
      )}

      <button 
        className={`chatbot-launcher ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat} 
        aria-label="Open Chat"
      >
        {!isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            <circle cx="9" cy="11.5" r="0.5" fill="currentColor" />
            <circle cx="15" cy="11.5" r="0.5" fill="currentColor" />
            <path d="M9.5 15c.658.658 2.343 1 2.5 1s1.842-.342 2.5-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
