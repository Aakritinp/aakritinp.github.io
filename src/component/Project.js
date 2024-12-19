const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-pink-800">Project Title 1</h3>
            <p className="text-gray-600">
              A brief description of the project...
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-pink-800">Project Title 2</h3>
            <p className="text-gray-600">
              A brief description of the project...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
