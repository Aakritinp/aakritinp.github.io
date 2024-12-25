import "./Home.css";
import Summary from "./Summary";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
function Home() {
  const summary = Summary();
  const experience = Experience();
  const skills = Skills();
  const projects = Projects();
  const education = Education();
  return (
    <div>
      <nav>
        <div className="brand">My Portfolio</div>
        <ul>
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <header className="heading">
        <div className="header-container">
          <div className="content-section">
            <h1>Aakriti Panthi</h1>
            <p>
              <i className="fas fa-map-marker-alt"></i> Manassas Virginia 20111
            </p>
            <p>
              <i className="fas fa-phone"></i> +1(571) 229-7579
            </p>
            <p>
              <i className="fas fa-envelope"></i> panthi.aakriti.np@gmail.com
            </p>
            <p>
              <i className="fab fa-linkedin"></i>
              <a href="https://linkedin.com/in/aakritipanthi" target="_blank">
                linkedin.com/in/aakritipanthi
              </a>
            </p>
          </div>
          <div className="image-section">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHhZOHVEha1jA/profile-displayphoto-shrink_400_400/B4EZON0.R9HEAg-/0/1733251294730?e=1740614400&v=beta&t=ia52IEVXrZ-z7GEgalR0KzANMYDjakrKdxUbcxxGQ5Q"
              alt="Aakriti Panthi"
              className="circle-img"
            />
          </div>
        </div>
      </header>

      {summary}
      {experience}
      {education}
      {skills}
      {projects}

      <footer id="contact">
        <p>Contact: panthi.aakriti.np@gmail.com | LinkedIn: /aakritipanthi</p>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;
