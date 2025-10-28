import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating innovative solutions 
              and beautiful user interfaces. With experience in modern web technologies, 
              I enjoy turning complex problems into simple, elegant designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee 
              while reading about the latest trends in web development.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About