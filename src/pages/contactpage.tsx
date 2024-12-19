import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactpage = () => {
    const contactInfo = [
        {
            icon: <Mail color="#3B82F6" size={48} />,
            title: "Email Us",
            info: "info@athlon.com",

        },
        {
            icon: <Phone color="#10B981" size={48} />,
            title: "Call Us",
            info: "+94 76 173 4574",

        },
        {
            icon: <MapPin color="#F43F5E" size={48} />,
            title: "Visit Us",
            info: "123 Sports Avenue",

        },
        {
            icon: <Clock color="#8B5CF6" size={48} />,
            title: "Business Hours",
            info: "9:00 AM - 6:00 PM",

        }
    ];

    return (
        <div className="bg-white text-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative bg-blue-950 text-yellow-500 py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto mb-12 text-white">
                        We're here to help! Reach out to us with any questions or concerns.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="transform transition-all duration-300 hover:rotate-12">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-center mb-4">{item.title}</h3>
                                <p className="text-blue-600 text-lg text-center mb-2">{item.info}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-950 text-white py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get in Touch?</h2>
                    <p className="text-xl mb-12">
                        Whether you have a question, concern, or feedback, we’re here to assist you.
                    </p>
                    <button className="bg-white text-purple-700 px-12 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                        Contact Us Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default contactpage;
