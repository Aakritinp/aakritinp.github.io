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
            Designed and developed <strong>end-to-end web applications</strong>{" "}
            to streamline healthcare workflows, using{" "}
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
            collaboration, enabling efficient teamwork across multiple projects.
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
            Ensured adherence to <strong>e-Governance standards</strong> by
            integrating accessibility and security features in applications.
          </li>
          <li>
            Provided training and support to government staff, enabling
            efficient use of IT systems and tools.
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
