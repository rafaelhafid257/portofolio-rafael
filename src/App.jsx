import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, ExternalLink, Code, Smartphone, Database, Laptop, Info } from 'lucide-react'; // Tambah icon Info
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDesktopAlert, setShowDesktopAlert] = useState(true); // State untuk alert

  // Effect untuk Scroll Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect untuk Timer Alert (Hilang otomatis setelah 8 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesktopAlert(false);
    }, 8000); // 8000 ms = 8 detik

    return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
  }, []);

  const projects = [
    {
      title: "Ekstraksi Kata Kunci Dokumen Ilmiah Berbasis Graf",
      description: "Aplikasi ini mengotomatisasi ekstraksi informasi penting dari makalah ilmiah ArXiv menggunakan algoritma TextRank dan PageRank. Sistem membangun graf ko-okurensi kata untuk memetakan hubungan semantik antar istilah dalam dokumen secara visual.",
      tech: ["Python", "Streamlit", "NLTK", "Matplotlib"],
      image: "/arvix.png", 
      link: "https://paperppwgraph.streamlit.app/"
    },
    {
      title: "Spatial Image Enhancement Application",
      description: "Aplikasi pengolahan citra digital (Computer Vision) yang berfokus pada teknik pemrosesan domain spasial (Spatial Domain Processing). Aplikasi ini dirancang untuk melakukan restorasi citra melalui manipulasi matriks piksel secara langsung.",
      tech: ["OpenCV", "Python", "numpy", "ttkbootstrap"],
      image: "/image-enhancement.png",
      link: "https://free-image-enhancement.streamlit.app/"
    },
    {
      title: "Search Engine Pariwisata Indonesia",
      description: "Platform untuk pencarian wisata di Indonesia yang memanfaatkan Next.js untuk frontend, OpenAI API untuk fitur pencarian cerdas, dan Tailwind CSS untuk desain responsif dan modern.",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Flask", "Python"],
      image: "/searchengine.png",
      link: "https://search-engine-gules-beta.vercel.app/"
    },
    // {
    //   title: "Smart Home IoT",
    //   description: "Sistem kontrol rumah pintar dengan dashboard real-time",
    //   tech: ["React", "IoT", "WebSocket", "AWS"],
    //   image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
    //   link: "#"
    // },
    // {
    //   title: "Smart Home IoT",
    //   description: "Sistem kontrol rumah pintar dengan dashboard real-time",
    //   tech: ["React", "IoT", "WebSocket", "AWS"],
    //   image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
    //   link: "#"
    // },
    // {
    //   title: "Smart Home IoT",
    //   description: "Sistem kontrol rumah pintar dengan dashboard real-time",
    //   tech: ["React", "IoT", "WebSocket", "AWS"],
    //   image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
    //   link: "#"
    // }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Python", level: 70 }
  ];

  return (
    <div className="app">
      
      {/* --- ALERT NOTIFICATION SECTION --- */}
      {showDesktopAlert && (
        <div className="desktop-alert-toast">
          <div className="alert-content">
            <Laptop size={20} className="alert-icon" />
            <span>Gunakan mode desktop untuk pengalaman yang lebih menarik!</span>
          </div>
          <button className="alert-close-btn" onClick={() => setShowDesktopAlert(false)}>
            OK
          </button>
        </div>
      )}
      {/* ---------------------------------- */}

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">Front-End<span className="accent">Dev</span></span>
            <div className="logo-dot"></div>
          </div>
          
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-number">01.</span> Home
            </a>
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-number">02.</span> About
            </a>
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-number">03.</span> Projects
            </a>
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-number">04.</span> Skills
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="nav-number">05.</span> Contact
            </a>
          </div>

          <a href="mailto:zanyrafel@gmail.com?subject=Tawaran Kerjasama Project&body=Halo Rafael, saya tertarik dengan portofolio Anda... " className="nav-cta">
            <Mail size={18} />
            <span>Hire Me</span>
          </a>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">🚀 Front-End Developer</span>
            </div>
            <h1 className="hero-title">
              Mahasiswa <span className="gradient-text">Teknik Informatika</span> 
            </h1>
            <p className="hero-subtitle">
              Menggabungkan pemahaman akademis yang kuat dengan keterampilan praktis dalam pengembangan web modern, keamanan sistem, dan analisis data cerdas.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
                <ChevronRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card1">
              <Code size={32} />
              <h4>Clean Code</h4>
            </div>
            <div className="floating-card card2">
              <Database size={32} />
              <h4>Scalable</h4>
            </div>
            <div className="floating-card card3">
              <Smartphone size={32} />
              <h4>Responsive</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title">Crafting Digital Solutions</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Saya adalah seorang mahasiswa yang sedang menempuh pendidikan S1 Teknik Informatika di Universitas Trunojoyo Madura 
                dan saya adalah seorang yang percaya bahwa website bagus itu harus cepat, aman, dan mudah dipakai. 
                Dengan latar belakang di Web Development dan ketertarikan mendalam pada Cybersecurity & Cloud Infrastructure, Saya tidak hanya membuat website yang 'jalan', 
                tapi juga siap menghadapi trafik tinggi dan potensi celah keamanan. 
                Saat ini sedang mendalami Machine Learning untuk membuat aplikasi lebih pintar.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h4>Fast Performance</h4>
                    <p>Optimized code for lightning-fast load times</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <div>
                    <h4>Secure & Reliable</h4>
                    <p>Industry-standard security practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-wrapper">
                <img 
                  src="/raiku.jpeg" 
                  alt="Foto Profil Rafael" 
                  className="profile-photo" 
                />
                <div className="image-bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.link || "#"} className="overlay-btn">
                      <ExternalLink size={20} /> Visit Site
                    </a>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-aos="slide-right"
                    data-aos-delay={index * 100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content">
              <h2 className="contact-title">Let's Build Something Amazing</h2>
              <p className="contact-subtitle">
                Have a project in mind? Let's discuss how we can work together 
                to bring your ideas to life.
              </p>
              <a href="mailto:zanyrafel@gmail.com" className="btn-primary">
                <Mail size={20} />
                Send Message
              </a>
            </div>
            <div className="contact-info">
              <div className="info-item">
                <h4>Email</h4>
                <p>zanyrafel@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Gresik, Jawa Timur, Indonesia</p>
              </div>
              <div className="info-item">
                <h4>Available</h4>
                <p>For freelance work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">Front-End<span className="accent">Dev</span></span>
                <div className="logo-dot"></div>
              </div>
              <p className="footer-tagline">
                Building the future, one line of code at a time.
              </p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="link-group">
                <h4>Connect</h4>
                <a href="https://github.com">GitHub</a>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://instagram.com">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PortoDev. All rights reserved.</p>
            <p>Rafael - Front End Developer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;