const About = () => {
    return (
      <section
        id="about"
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 pb-2">
          About Me
        </h2>
  
        <div className="max-w-4xl flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image (optional) */}
          <img
            src="https://avatars.githubusercontent.com/u/86176166?v=4"
            alt="Tanish"
            className="w-48 h-48 object-cover rounded-full border-4 border-blue-500"
          />
  
          {/* About Text */}
          <div className="text-lg leading-7">
            <p className="mb-4">
              Hello! I'm <span className="font-semibold text-blue-500">Tanish</span>, a passionate
              and self-driven Full Stack Developer 🚀 focused on building modern,
              scalable web apps using the MERN stack.
            </p>
            <p className="mb-4">
              I love solving real-world problems with clean, maintainable code.
              Whether it's building front-end UIs or handling back-end logic,
              I enjoy the full cycle of development.
            </p>
            <p className="mb-4">
              Apart from coding, I enjoy reading tech blogs, exploring new tools,
              and helping others grow in tech 💡.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  