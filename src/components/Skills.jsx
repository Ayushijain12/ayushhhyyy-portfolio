import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 20 },
        { name: "Angular", level: 60 },
        { name: "Next.js", level: 40 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "RESTful APIs", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 80 },
        { name: "SonarQube", level: 65 },
        { name: "Sentry", level: 65 }
      ]
    },
    {
      title: "Process & Optimization",
      skills: [
        { name: "Sprint Planning", level: 85 },
        { name: "Code Review", level: 80 },
        { name: "Performance Optimization", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills