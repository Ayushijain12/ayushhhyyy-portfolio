import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ayushi Jain</span>
          </h1>
          <p className="hero-subtitle">
            Packaged App Development Senior Analyst
          </p>
          <p className="hero-description">
            Experienced in developing and maintaining enterprise applications with modern web technologies. 
            Specialized in CMS and CRM solutions, with proven leadership in delivering above-benchmark results.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">
            <span>AJ</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero