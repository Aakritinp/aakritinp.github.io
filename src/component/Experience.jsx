import "./Home.css";
function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="card">
        <h3>Software Engineer - United Health Care</h3>
        <p>
          <em>Virginia, USA — Aug 2023 - Present</em>
        </p>
        <ul className="styled-list">
          <li>
            Implemented RESTful APIs to enable seamless integration between
            modules and third-party applications.
          </li>
          <li>
            Optimized database queries and managed data operations using MySQL,
            ensuring high performance and data integrity.
          </li>

          <li>
            Conducted unit testing and integration testing using JUnit,
            maintaining high code quality and reliability.
          </li>
          <li>
            Worked with cross-functional teams in an Agile/Scrum environment to
            deliver healthcare solutions on time.
          </li>

          <li>
            Used Git for version control and code collaboration, enabling
            efficient teamwork across multiple projects.
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
            Developed web-based applications to enhance government service
            delivery using PHP and Laravel frameworks.
          </li>
          <li>
            Managed and optimized PostgreSQL databases, ensuring data
            consistency and reliability across systems.
          </li>
          <li>
            Designed and implemented responsive user interfaces with Bootstrap
            and JavaScript, enhancing usability for citizens.
          </li>

          <li>
            Deployed Redis for caching, improving the performance and
            scalability of government portals.
          </li>

          <li>
            Ensured adherence to e-Governance standards by integrating
            accessibility and security features in applications.
          </li>

          <li>
            <strong>
              Technology Used: PHP, Laravel, PostgreSQL, JavaScript, Bootstrap,
              Nginx, Redis, Linux, Power BI, Python
            </strong>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
