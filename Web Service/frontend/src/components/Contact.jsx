import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-gray-50 py-16 mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hi, feel free to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            {/* <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Contact Information</h3>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Address</h4>
          <p className="text-gray-600">1234 Street Name, City, Country</p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Phone</h4>
          <p className="text-gray-600">(123) 456-7890</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Email</h4>
          <p className="text-gray-600">support@example.com</p>
        </div>
      </div> */}
          </div>

          {/* Map */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Find Us
            </h3>
            <div className="relative h-64">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0974144705307!2d-122.4194155846812!3d37.7749292797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e6b8e6973%3A0x4a10c06338b702a5!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094070%2C%20United%20States!5e0!3m2!1sen!2sin!4v1625732355675!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
