const Contact = () => {
    return (
      <section
        id="contact"
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-500 pb-2">
          Contact Me
        </h2>
  
        <form
          action="https://formspree.io/f/your-form-id" // Replace this later with your backend or formspree ID
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
  
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
  
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          ></textarea>
  
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  