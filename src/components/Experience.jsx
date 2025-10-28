import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Packaged App Development Senior Analyst",
      company: "Accenture",
      period: "09/2024 - Present",
      location: "Ahmedabad, India",
      responsibilities: [
        "Content Management Systems (CMS): Experienced in managing, configuring, and maintaining content within CMS platforms, ensuring seamless integration and user experience.",
        "Frontend Development: Expertise in frontend technologies, including Angular and React, to create dynamic, user-friendly web applications.",
        "JavaScript Development: Strong command over JavaScript for scripting and troubleshooting, with experience in creating custom widgets and resolving script issues.",
        "Collaboration: Actively participate in both onshore and offshore meetings, collaborating effectively with cross-functional teams to ensure project success and meet client expectations."
      ]
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "Brainvire Infotech Pvt Ltd",
      period: "08/2021 - 06/2024",
      location: "Ahmedabad, India",
      responsibilities: [
        "Led software development for the M-Power project using React.js, Django, and Salesforce, achieving above-benchmark results through precise project alignment.",
        "Managed team resources to ensure sprint goals were met on time, enhancing team efficiency.",
        "Solved runtime tickets by identifying and fixing bugs, greatly enhancing system stability.",
        "Developed complex frontend functionality, handling large data sets and ensuring robust application performance.",
        "Provided immediate support and hot fixes in production environments, maintaining high system reliability.",
        "Utilized SQL for bug identification and worked with Sentry logs and SonarQube to maintain project quality."
      ]
    },
    {
      id: 3,
      title: "Associate Software Engineer",
      company: "Kanhasoft",
      period: "07/2020 - 08/2021",
      location: "Ahmedabad, India",
      responsibilities: [
        "Implemented automated reporting systems, providing detailed insights into sales and customer data.",
        "Contributed to agile sprint planning, ensuring efficient backlog prioritization to meet evolving demands.",
        "Stay up-to-date with the latest advancements in Angular and related technologies."
      ]
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Pixometry Infosoft Pvt. Ltd",
      period: "09/2019 - 05/2020",
      location: "Ahmedabad, India",
      responsibilities: [
        "Led pre-project analysis, ensuring the feasibility and user-friendliness of interfaces in alignment with project goals.",
        "Spearheaded strategic planning for projects and web initiatives, fostering a cohesive and goal-oriented team environment.",
        "Writing software application codes and systems in programming languages, such as Java, C++ or Python, to build new applications."
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <div className="experience-body">
                  <ul className="responsibilities">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience