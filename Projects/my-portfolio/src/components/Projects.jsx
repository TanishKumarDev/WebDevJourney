const projectsData = [
    {
      title: "DevConnect",
      description: "A social media platform for developers to share posts, follow others, and collaborate.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourname/devconnect",
      live: "https://devconnect.vercel.app",
    },
    {
      title: "TodoX",
      description: "An advanced to-do list app with dark mode, reminders, and drag & drop.",
      tech: ["React", "Tailwind", "LocalStorage"],
      github: "https://github.com/yourname/todox",
      live: "https://todox.vercel.app",
    },
    {
      title: "Portfolio",
      description: "This very portfolio site you're on! Built with React + Tailwind.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/yourname/portfolio",
      live: "https://yourportfolio.vercel.app",
    },
  ];
  
  const Projects = () => {
    return (
      <section
        id="projects"
        className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10 text-center border-b-4 border-blue-500 pb-2">
          Projects
        </h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  