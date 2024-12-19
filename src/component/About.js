const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I’m Aakriti, a passionate software developer with expertise in
          full-stack development. I love creating beautiful, user-friendly
          websites.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-pink-200 p-4 rounded-lg shadow-md">
            <p>Java</p>
          </div>
          <div className="bg-pink-200 p-4 rounded-lg shadow-md">
            <p>React</p>
          </div>
          <div className="bg-pink-200 p-4 rounded-lg shadow-md">
            <p>Spring Boot</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
