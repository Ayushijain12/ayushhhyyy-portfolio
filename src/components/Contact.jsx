import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>ayushipj2209@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9537116310</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact