import React, { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
      <section className="w-full py-16 text-white" style={{ marginBottom: "1px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Whether you have a question about our features,
              need assistance with bookings, or just want to share your feedback,
              we'd love to hear from you. Fill out the form below, and we'll get
              back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-blue-100 rounded-2xl shadow-lg p-8 lg:ml-8">
              {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <h3 className="text-green-800 font-bold">Thank you!</h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to you
                      soon.
                    </p>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-4">
                          {error}
                        </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-[#020d30]">
                        Your Name *
                      </label>
                      <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-blue-950 shadow-sm focus:border-blue-950 focus:ring-blue-950"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#020d30]">
                        Your Email *
                      </label>
                      <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-blue-950 shadow-sm focus:border-blue-950 focus:ring-blue-950"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#020d30]">
                        Your Comments *
                      </label>
                      <textarea
                          name="message"
                          rows={4}
                          placeholder="Share your thoughts here"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-blue-950 shadow-sm focus:border-blue-950 focus:ring-blue-950"
                      />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-950 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8 lg:ml-8">
              <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <img
                    src="src\components\contact.png"
                    alt="athlon"
                    className="w-[75%] h-auto mx-auto mb-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;