import "./Home.css";
function Summary() {
  return (
    <section id="summary">
      <h2>Professional Summary</h2>
      <div className="card">
        <p>
          Highly accomplished <strong>Software Engineer</strong> with extensive
          experience in building end-to-end web applications and enterprise
          solutions. Expert in{" "}
          <strong>Java, Spring Boot, Hibernate, and RESTful APIs</strong> for
          robust backend development, coupled with proficiency in{" "}
          <strong>Angular, React, JavaScript, and HTML/CSS</strong> for dynamic
          and responsive frontend design. Adept at developing applications
          following <strong>Microservices Architecture</strong>, ensuring
          scalability and modularity.
        </p>
        <p>
          Extensive experience with <strong>relational databases</strong> such
          as <strong>MySQL</strong> and <strong>Oracle</strong>, as well as{" "}
          <strong>NoSQL</strong> databases like <strong>MongoDB</strong>.
          Skilled in <strong>containerization</strong> using{" "}
          <strong>Docker</strong>, orchestrating deployments with{" "}
          <strong>Kubernetes</strong>, and implementing{" "}
          <strong>CI/CD pipelines</strong> with <strong>Jenkins</strong>.
          Proficient in using <strong>Git</strong> for version control,{" "}
          <strong>Maven/Gradle </strong>for build automation, and{" "}
          <strong>Junit</strong> and <strong>Mockito</strong> for unit testing.
        </p>
      </div>
    </section>
  );
}

export default Summary;
