import React, { useState } from 'react';
import { FaQuestion, FaMinus } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import HackathonContact from './HackathonContact';
import '../styles/ContactPopUp.css';

const ContactPopup: React.FC = () => {
  const [minimized, setMinimized] = useState(true);

  return (
    <AnimatePresence>
      {minimized ? (
        <motion.button
          title="Contact Us"
          key="contact-minimized"
          className="contact-open-button"
          onClick={() => setMinimized(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
        >
          <FaQuestion />
        </motion.button>
      ) : (
        <motion.div
          key="contact-popup-form"
          className="contact-popup-container"
          initial={{ x: 300, y: 100, scale: 0.8, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          exit={{ x: 300, y: 100, scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <div className="contact-header">
            <button
              title="Minimize"
              className="contact-header-button"
              onClick={() => setMinimized(true)}
            >
              <FaMinus />
            </button>
          </div>
          <HackathonContact />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
