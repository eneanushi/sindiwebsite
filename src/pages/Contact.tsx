import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="contact-page">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${cursorVariant}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Organic Blobs */}
      <div className="organic-blob blob-1"></div>
      <div className="organic-blob blob-2"></div>
      <div className="organic-blob blob-3"></div>

      {/* Animated Mesh Background */}
      <div className="mesh-background"></div>

      <div className="contact-container">
        <div className="contact-hero">
          <div className="hero-badge-wrapper">
            <div className="badge-orbit"></div>
            <div className="floating-label">Open for Collaboration</div>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Let's Build</span>
            <span className="title-line-accent">The Extraordinary</span>
          </h1>
          <p className="hero-subtitle">
            Turning visions into reality through design that inspires,
            captivates, and delivers results that matter.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="magnetic-card-wrapper">
            <div className="info-section">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:sindi@example.com">sindi@example.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Boston, Massachusetts</p>
                  <span className="timezone">EST (UTC-4)</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
            </div>

            <div className="magnetic-card-wrapper">
            <div className="social-section">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-name">Instagram</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-name">LinkedIn</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-name">Behance</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-name">Dribbble</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-glow"></div>
            <form className="contact-form">
              <div className="form-row">
                <div className={`form-field ${focusedField === 'name' ? 'focused' : ''}`}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className={`form-field ${focusedField === 'email' ? 'focused' : ''}`}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              <div className={`form-field ${focusedField === 'subject' ? 'focused' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className={`form-field ${focusedField === 'message' ? 'focused' : ''}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="availability-bar">
          <div className="status-indicator"></div>
          <span>Currently accepting new projects for 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
