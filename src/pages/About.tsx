import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    if (portraitRef.current) observer.observe(portraitRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-container">
          <div className="about-left" ref={portraitRef}>
            <div className="portrait-image-wrapper">
              <img src="/me.jpeg" alt="Sindi Lluka" className="portrait-image" />
            </div>
            <div className="gold-divider"></div>
          </div>
          <div className="about-right" ref={textRef}>
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
              <h2>Who I Am</h2>
              <p>
                I am Enea Nushi, a passionate Visual Design student dedicated to creating 
                meaningful and aesthetic visual solutions. My journey in design began with 
                a fascination for how visual elements can communicate complex ideas and 
                evoke emotions.
              </p>

              <h2>What Motivates Me</h2>
              <p>
                I'm driven by the challenge of transforming abstract concepts into clear, 
                compelling visual narratives. Every project is an opportunity to solve problems, 
                tell stories, and create connections between brands and their audiences.
              </p>

              <h2>My Strengths</h2>
              <p>
                My expertise lies in editorial design, typography, and creating cohesive visual 
                systems. I excel at balancing form and function, ensuring that every design 
                decision serves both aesthetic and practical purposes.
              </p>

              <h2>Design Values</h2>
              <p>
                <strong>Clarity:</strong> Every design should communicate its message clearly and effectively.<br />
                <strong>Meaning:</strong> Visual solutions must have purpose and intention.<br />
                <strong>Emotion:</strong> Great design connects with people on an emotional level.<br />
                <strong>Aesthetics:</strong> Beauty and functionality are not mutually exclusive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <h2 className="section-title">Timeline</h2>
          <div className="timeline-container">
            <div className="timeline-track">
              <div className="timeline-item">
                <div className="timeline-year">2022-2024</div>
                <div className="timeline-content">
                  <h3>Photo/Video Editor</h3>
                  <p>Professional editing and post-production work</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024-2026</div>
                <div className="timeline-content">
                  <h3>Visual Design Student</h3>
                  <p>Pursuing advanced studies in visual design</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Collaborations</h3>
                  <p>Various design collaborations and partnerships</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Exhibitions</h3>
                  <p>Participated in design exhibitions and showcases</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Posters & Events</h3>
                  <p>Created promotional materials for center events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

