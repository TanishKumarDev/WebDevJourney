const Hero = () => {
    return (
      <section
        id="home"
        className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Tanish</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl">
          A passionate Full Stack Web Developer 👨‍💻 turning ideas into real products with the MERN stack.
        </p>
  
        <div className="flex gap-6 flex-col sm:flex-row">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition-all"
          >
            Hire Me
          </a>
          <a
            href="/Tanish_Resume.pdf"
            download
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  