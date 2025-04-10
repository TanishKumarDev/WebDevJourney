const Footer = () => {
    return (
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-sm">
            <p>&copy; 2025 TanishDev. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  