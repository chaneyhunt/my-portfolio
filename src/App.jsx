import React from 'react';
import './index.css'; 

// Assets
import logo from './assets/chaneylogo.png';
import headshot from './assets/chaneyposter.png';
import critter1 from './assets/critter.png';
import critter2 from './assets/critter2.png';
import critter3 from './assets/critter3.png';
import girly1 from './assets/girlypopsposter.png';
import girly2 from './assets/girlypopsposter2.png';
import girly3 from './assets/girlypopsposter3.png';
import done1 from './assets/done1.png';
import done2 from './assets/done2.png';
import done3 from './assets/done3.png';

function App() {
  return (
    <div className="portfolio-wrapper">
      <nav className="navbar">
        <div className="nav-logo italic">CH.</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="hero-section section-divider">
        <div className="container">
          <img src={logo} className="main-logo" alt="Chaney Hunt Logo" />
          <div className="headshot-wrapper">
            <img src={headshot} className="headshot" alt="Chaney Hunt" />
          </div>
          <h1 className="hero-title">I'm Chaney Hunt.</h1>
          <p className="hero-intro">
            I’m Chaney Hunt, a Digital Media student and storyteller. Inspired by a background 
            in tech and a love for creative trailblazing, I build digital narratives that 
            bridge the gap between imagination and design.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section section-padding section-divider">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            Currently a junior at the University of Central Florida, I specialize in UI/UX design 
            and front-end development. I view digital design through the lens of world-building 
            and brand identity, ensuring every interface tells a cohesive story. I enjoy turning 
            complex technical requirements into intuitive and user-centered solutions that bridge 
            the gap between imaginative storytelling and functional code.
          </p>
          <div className="skills-grid">
            {['UI/UX Design', 'React Native', 'JavaScript / PHP', 'Figma & Canva', 'Procreate', 'Project Management'].map(skill => (
              <div key={skill} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section section-padding section-divider">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            
            <div className="project-card">
              <div className="image-gallery">
                <img src={critter1} className="project-image" alt="Critter 1" />
                <img src={critter2} className="project-image" alt="Critter 2" />
                <img src={critter3} className="project-image" alt="Critter 3" />
              </div>
              <div className="project-info">
                <h3>Critter & Cauldron</h3>
                <p>
                  I developed Critter & Cauldron in 2025 for my Digital Cultures & Narratives course at UCF.
                  This project represents the full lifecycle of my design process: from hand-drawing and 
                  coloring all original line work in Procreate, to asset compositing in Canva, and finally 
                  building a high-fidelity interactive prototype in Figma. It is a true passion project of mine!
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-gallery">
                <img src={girly1} className="project-image" alt="Girly 1" />
                <img src={girly2} className="project-image" alt="Girly 2" />
                <img src={girly3} className="project-image" alt="Girly 3" />
              </div>
              <div className="project-info">
                <h3>The Girly Pops</h3>
                <p>
                  I developed The Girly Pops in 2025 for my Digital Media Production course at UCF.
                  As Project Manager and Lead Designer, I spearheaded a four-person team to create 
                  this conceptual blind box brand. This project represents the full lifecycle of my 
                  design process: from designing all posters and product packaging, to rendering 3D 
                  figures, managing our social media presence, and building the final website.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-gallery">
                <img src={done1} className="project-image" alt="Done 1" />
                <img src={done2} className="project-image" alt="Done 2" />
                <img src={done3} className="project-image" alt="Done 3" />
              </div>
              <div className="project-info">
                <h3>Done.</h3>
                <p>
                  I developed Done. in 2026 for my Mobile App Development course at UCF.
                  This project represents the full lifecycle of my UI/UX process: from building Done. 
                  into a fully functioning task management application.
                  For designing the app, I used Canva for initial asset compositing and Figma to 
                  engineer high-fidelity wireframes and interactive prototypes. This app showcases 
                  my passion for creating intuitive, user-centered digital solutions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <div className="contact-card">
            <h2 className="section-title">Get in Touch</h2>
            <form className="contact-form">
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>CHANEY HUNT • UCF DIGITAL MEDIA 2026</p>
      </footer>
    </div>
  );
}

export default App;