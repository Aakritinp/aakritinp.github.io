const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 mb-4 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 mb-4 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 mb-4 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
