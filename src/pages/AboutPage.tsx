import React from 'react';
import { Heart} from 'lucide-react';

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'Niththilan Santhasoruban',

            description: 'Passionate about innovation and leading the company to new heights.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/niththilan.jpg'
        },
        {
            name: 'RagulanKeshan ',

            description: 'Expert in technology and development, driving the technical vision of our platform.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/keshan.jpg'
        },
        {
            name: 'Balendran Harishith',
            role: 'COO',
            description: 'Focused on optimizing business operations and ensuring efficiency.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/hari.jpg'
        },

        {
            name: 'Ashvitha Raveendran',

            description: 'Focused on optimizing business operations and ensuring efficiency.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/ashvi.jpg'
        },

        {
            name: 'Nishvaraj Kamalanandhan',

            description: 'Focused on optimizing business operations and ensuring efficiency.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/nishva.jpg'
        },
        {
            name: 'Kavishaniy Yoganathan',

            description: 'Focused on optimizing business operations and ensuring efficiency.',
            icon: <Heart color="#F43F5E" size={48} />,
            image: '/public/images/kavi.jpg'
        }

    ];

    return (
        <div className="bg-white text-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative bg-blue-950 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-yellow-500 mb-6">About Us</h1>
                    <p className="text-xl max-w-3xl mx-auto mb-12">
                        We are a passionate team dedicated to revolutionizing the sports experience through technology.
                    </p>
                </div>
            </section>

            {/* Company Mission Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center text-blue-950 hover:text-yellow-500">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our mission is to simplify the process of sports facility booking while connecting people and enhancing their experience through technology.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-blue-950 hover:text-yellow-500">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To become the leading platform that connects sports enthusiasts with quality facilities, creating a vibrant community of active individuals.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-blue-950 hover:text-yellow-500">
                            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                            <p className="text-gray-600">
                                Innovation, accessibility, community engagement, and delivering exceptional user experiences drive everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="transform transition-all duration-300 hover:rotate-12">
                                        {member.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold ml-4">{member.name}</h3>
                                </div>
                                <h4 className="text-xl text-gray-600">{member.role}</h4>
                                <p className="text-gray-600 mb-6">{member.description}</p>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full w-40 h-40 object-cover mx-auto transition-all duration-300 hover:opacity-90"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-950 text-white py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
                    <p className="text-xl mb-12">
                        We're always looking for passionate individuals to join our mission and help us shape the future of sports.
                    </p>
                    <button className="bg-white text-purple-700 px-12 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                        Get Involved
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;