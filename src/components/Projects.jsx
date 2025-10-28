import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Comcast CMS",
      description: "Content Management Systems (CMS) project for Comcast. Experienced in managing, configuring, and maintaining content within CMS platforms, ensuring seamless integration and user experience. Focused on frontend development with expertise in Angular and modern web technologies.",
      technologies: ["Angular", "JavaScript", "HTML/CSS", "CMS"],
      projectUrl: "https://mysource.comcast.com/"
    },
    {
      id: 2,
      title: "Pidilite M-Power",
      description: "Led software development for the M-Power project using React.js, Django, and Salesforce integration. Achieved above-benchmark results through precise project alignment and strategic implementation of modern web technologies for enhanced business operations.",
      technologies: ["React.js", "Django", "Salesforce", "JavaScript"],
      projectUrl: "https://mpower.pidilite.com/"
    },
    {
      id: 3,
      title: "IDrive CRM",
      description: "Comprehensive Customer Relationship Management platform built with modern web technologies. Developed using React for dynamic frontend user experiences and Laravel framework for powerful backend API development and database management.",
      technologies: ["React", "Laravel", "PHP", "JavaScript"],
      projectUrl: "https://www.idrivecrm.com/"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-small">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects