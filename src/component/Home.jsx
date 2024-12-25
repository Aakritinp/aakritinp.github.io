import "./Home.css";
import Summary from "./Summary";
function Home() {
  const summary = Summary();
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
        <h1>Aakriti Panthi</h1>
        <p> Manassas Virginia 20111</p>
        <p>Phone: +1(571) 229-7579</p>
        <p> panthi.aakriti.np@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/aakritipanthi" target="_blank">
            linkedin.com/in/aakritipanthi
          </a>
        </p>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHhZOHVEha1jA/profile-displayphoto-shrink_400_400/B4EZON0.R9HEAg-/0/1733251294730?e=1740614400&v=beta&t=ia52IEVXrZ-z7GEgalR0KzANMYDjakrKdxUbcxxGQ5Q"
          alt="Circular Image"
          className="circle-img"
        ></img>
      </header>

      {summary}
      <section id="experience">
        <h2>Work Experience</h2>
        <div className="card">
          <h3>Software Engineer - United Health Care</h3>
          <p>
            <em>Virginia, USA — Aug 2023 - Present</em>
          </p>
          <ul className="styled-list">
            <li>
              Designed and developed{" "}
              <strong>end-to-end web applications</strong> to streamline
              healthcare workflows, using{" "}
              <strong>Java, Spring Boot, and Angular.</strong>
            </li>
            <li>
              Implemented <strong>RESTful APIs</strong> to enable seamless
              integration between modules and third-party applications.
            </li>
            <li>
              Optimized database queries and managed data operations using
              <strong> MySQL</strong>, ensuring high performance and data
              integrity.
            </li>
            <li>
              Deployed microservices in containerized environments using{" "}
              <strong>Docker</strong> and orchestrated with{" "}
              <strong>Kubernetes</strong> for scalability.
            </li>
            <li>
              Automated build and deployment pipelines using{" "}
              <strong>Jenkins</strong>, ensuring efficient and reliable{" "}
              <strong>CI/CD</strong> workflows.
            </li>
            <li>
              Built and maintained cloud-based solutions on <strong>AWS</strong>
              , leveraging services like <strong>EC2, S3, and RDS.</strong>
            </li>
            <li>
              Conducted unit testing and integration testing using{" "}
              <strong>JUnit</strong>, maintaining high code quality and
              reliability.
            </li>
            <li>
              Worked with cross-functional teams in an{" "}
              <strong>Agile/Scrum</strong> environment to deliver healthcare
              solutions on time.
            </li>
            <li>
              Implemented robust <strong>security protocols</strong> to ensure
              compliance with healthcare data regulations, including HIPAA.
            </li>
            <li>
              Used <strong>Git</strong> for version control and code
              collaboration, enabling efficient teamwork across multiple
              projects.
            </li>
            <li>
              <strong>
                Technology Used: Java, Spring Boot, Hibernate, Angular, RESTful
                APIs, MySQL, Docker, Kubernetes, Jenkins, AWS, JUnit, Git
              </strong>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>Software Developer - Government of Nepal</h3>
          <p>
            <em>Kathmandu, Nepal - Mar 2019 - Feb 2023</em>
          </p>
          <ul className="styled-list">
            <li>
              Developed <strong>web-based applications</strong> to enhance
              government service delivery using PHP and Laravel frameworks.
            </li>
            <li>
              Managed and optimized <strong>PostgreSQL databases</strong>,
              ensuring data consistency and reliability across systems.
            </li>
            <li>
              Designed and implemented responsive user interfaces with{" "}
              <strong>Bootstrap</strong> and <strong>JavaScript</strong>,
              enhancing usability for citizens.
            </li>
            <li>
              Configured and maintained <strong>Nginx</strong> servers for
              efficient and secure web application hosting.
            </li>
            <li>
              Deployed <strong>Redis</strong> for caching, improving the
              performance and scalability of government portals.
            </li>
            <li>
              Performed system administration tasks on{" "}
              <strong>Linux servers</strong>, ensuring secure and stable
              operations.
            </li>
            <li>
              Created <strong>Power BI</strong> dashboards to analyze and
              present key performance metrics to decision-makers.
            </li>
            <li>
              Automated data extraction and processing using{" "}
              <strong>Python</strong>, reducing manual workload and increasing
              efficiency.
            </li>
            <li>
              Ensured adherence to <strong>e-Governance standards</strong> by
              integrating accessibility and security features in applications.
            </li>
            <li>
              Provided training and support to government staff, enabling
              efficient use of IT systems and tools.
            </li>
            <li>
              <strong>
                Technology Used: PHP, Laravel, PostgreSQL, JavaScript,
                Bootstrap, Nginx, Redis, Linux, Power BI, Python
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>Southern New Hampshire University</h3>
          <p> Masters in Information Technology (MSc IT)</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="card">
          <h3>Patient Portal Development – United Health Care</h3>
          <p>
            Led the development of a secure Java Full Stack patient portal,
            allowing users to view and manage their healthcare information.
            Built the backend using Spring Boot and Hibernate, and created a
            dynamic frontend with Angular. Developed RESTful APIs for secure
            communication between the frontend and backend. Used Jenkins for
            automated builds and deployments, ensuring continuous delivery.
            Leveraged AWS services for secure data storage and application
            hosting. Collaborated with the team using Git for version control
            and project tracking.
          </p>
        </div>
        <div className="card">
          <h3>National Citizen Service Portal – Government of Nepal</h3>
          <p>
            Led the development of a secure Java Full Stack patient portal,
            allowing users to view and manage their healthcare information.
            Built the backend using Spring Boot and Hibernate, and created a
            dynamic frontend with Angular. Developed RESTful APIs for secure
            communication between the frontend and backend. Used Jenkins for
            automated builds and deployments, ensuring continuous delivery.
            Leveraged AWS services for secure data storage and application
            hosting. Collaborated with the team using Git for version control
            and project tracking.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-container">
        <h2>Skills</h2>

        <div className="skill-box">
          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
              alt="Java Spring Boot"
            />
            <label>Java Spring Boot</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/officel/80/php-logo.png"
              alt="PHP"
            />
            <label>PHP</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=21888&format=png&color=000000"
              alt="REST"
            />
            <label>REST</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=21888&format=png&color=000000"
              alt="SOAP"
            />
            <label>SOAP</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=DHbACKviPosX&format=png&color=000000"
              alt="Microservices"
            />
            <label>Microservices</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="HTML"
            />

            <label>JavaScript</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="React"
            />
            <label>React</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
              alt="AWS"
            />
            <label>AWS</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=lsB0o0d7jxHQ&format=png&color=000000"
              alt="JUnit"
            />
            <label>JUnit</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="MongoDB"
            />
            <label>MongoDB</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/sql.png"
              alt="SQL"
            />
            <label>SQL</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="Git"
            />
            <label>Git</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/docker.png"
              alt="Docker"
            />
            <label>Docker</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000"
              alt="Postman"
            />
            <label>Postman</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/jenkins.png"
              alt="Jenkins"
            />
            <label>Jenkins</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/color/48/000000/kubernetes.png"
              alt="Kubernetes"
            />
            <label>Kubernetes</label>
          </div>
          <div className="skill-item">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/jira.png"
              alt="JIRA"
            />
            <label>JIRA</label>
          </div>

          <div className="skill-item">
            <img
              src="https://img.icons8.com/?size=100&id=40610&format=png&color=000000"
              alt="Log4j"
            />
            <label>Log4j</label>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p>Contact: panthi.aakriti.np@gmail.com | LinkedIn: /aakritipanthi</p>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;
