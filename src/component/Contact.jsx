import "./Home.css";
function Contact() {
  return (
    <section id="contact">
      <div className="contact-form">
        <div className="form-header">
          <h3>Get in touch </h3>
        </div>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="send-button">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
