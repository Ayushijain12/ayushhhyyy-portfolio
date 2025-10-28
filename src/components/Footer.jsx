import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Ayushi Jain. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ayushi-jain-40870a163/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="GitHub">🐱</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="mailto:ayushipj2209@gmail.com" aria-label="Email">📧</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer